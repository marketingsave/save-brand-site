#!/bin/bash
# Upload brand assets to Cloudflare R2
# Bucket: savecompany | Domain: bucket.savecompany.com.br

SOURCE="G:/Drives compartilhados/BRANDING/01. Branding"
BUCKET="savecompany"
PREFIX="branding"

TOTAL=0
ERRORS=0

echo "=========================================="
echo " Upload Brand Assets to Cloudflare R2"
echo "=========================================="

# Function to clean a single path segment (folder or filename without extension)
clean_segment() {
  echo "$1" | \
    sed -E 's/^[0-9]+\.?\s*//g' | \
    sed 's/ /-/g' | \
    sed 's/á/a/g; s/à/a/g; s/ã/a/g; s/â/a/g; s/Á/A/g; s/À/A/g; s/Ã/A/g; s/Â/A/g' | \
    sed 's/é/e/g; s/è/e/g; s/ê/e/g; s/É/E/g; s/È/E/g; s/Ê/E/g' | \
    sed 's/í/i/g; s/ì/i/g; s/î/i/g; s/Í/I/g; s/Ì/I/g; s/Î/I/g' | \
    sed 's/ó/o/g; s/ò/o/g; s/õ/o/g; s/ô/o/g; s/Ó/O/g; s/Ò/O/g; s/Õ/O/g; s/Ô/O/g' | \
    sed 's/ú/u/g; s/ù/u/g; s/û/u/g; s/Ú/U/g; s/Ù/U/g; s/Û/U/g' | \
    sed 's/ç/c/g; s/Ç/C/g' | \
    tr '[:upper:]' '[:lower:]' | \
    sed 's/[^a-z0-9._-]/-/g' | \
    sed 's/--*/-/g' | \
    sed 's/^-//; s/-$//'
}

# Function to clean a full relative path, preserving extension dot
clean_path() {
  local input="$1"
  local result=""

  # Split by /
  IFS='/' read -ra PARTS <<< "$input"
  local last_idx=$(( ${#PARTS[@]} - 1 ))

  for i in "${!PARTS[@]}"; do
    local part="${PARTS[$i]}"

    if [ "$i" -eq "$last_idx" ]; then
      # Last part = filename: separate name and extension
      local ext="${part##*.}"
      local name="${part%.*}"
      local clean_name=$(clean_segment "$name")
      local clean_ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
      part="${clean_name}.${clean_ext}"
    else
      # Directory: clean normally
      part=$(clean_segment "$part")
    fi

    if [ -z "$result" ]; then
      result="$part"
    else
      result="$result/$part"
    fi
  done

  echo "$result"
}

# Get content type from extension
get_ctype() {
  case "$(echo "$1" | tr '[:upper:]' '[:lower:]')" in
    png) echo "image/png" ;;
    jpg|jpeg) echo "image/jpeg" ;;
    svg) echo "image/svg+xml" ;;
    webp) echo "image/webp" ;;
    pdf) echo "application/pdf" ;;
    pptx) echo "application/vnd.openxmlformats-officedocument.presentationml.presentation" ;;
    *) echo "application/octet-stream" ;;
  esac
}

# Brand folder mapping
declare -A BRANDS
BRANDS["00.guias"]="guias"
BRANDS["01. Save Co"]="save-co"
BRANDS["02. Save Educação"]="save-educacao"
BRANDS["03. Save Partners"]="save-partners"
BRANDS["04. Libr.ia"]="libria"
BRANDS["05. Marcos Adriano Silva"]="marcos-adriano-silva"
BRANDS["06. Save ID"]="save-id"

# Find and upload all web-safe files
find "$SOURCE" -type f \( \
  -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o \
  -iname "*.svg" -o -iname "*.webp" -o -iname "*.pdf" -o \
  -iname "*.pptx" \
\) ! -name "desktop.ini" | while IFS= read -r file; do

  # Get relative path from SOURCE
  rel="${file#$SOURCE/}"

  # Determine brand slug from first folder
  first_folder="${rel%%/*}"
  brand_slug=""
  for key in "${!BRANDS[@]}"; do
    if [ "$key" = "$first_folder" ]; then
      brand_slug="${BRANDS[$key]}"
      break
    fi
  done

  if [ -z "$brand_slug" ]; then
    continue
  fi

  # Get rest of path after brand folder
  rest="${rel#*/}"

  # Clean the path (preserving extension dot)
  clean_rest=$(clean_path "$rest")

  # Build R2 key
  r2_key="$PREFIX/$brand_slug/$clean_rest"

  # Get content type
  ext="${file##*.}"
  ctype=$(get_ctype "$ext")

  TOTAL=$((TOTAL+1))
  echo "[$TOTAL] ↑ $r2_key"

  if ! npx wrangler r2 object put "$BUCKET/$r2_key" --file="$file" --content-type="$ctype" --remote 2>/dev/null; then
    echo "  ✗ FAILED: $r2_key"
    ERRORS=$((ERRORS+1))
  fi
done

echo ""
echo "=========================================="
echo " Upload Complete!"
echo " Total: $TOTAL attempted, $ERRORS errors"
echo " Base: https://bucket.savecompany.com.br/$PREFIX/"
echo "=========================================="
