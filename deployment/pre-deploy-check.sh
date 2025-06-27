#!/bin/bash
# deployment/pre-deploy-check.sh

echo "🚀 AYAT Boutique Pre-Deployment Checklist"
echo "========================================="

# 1. Environment Variables
echo "✓ Checking environment variables..."
required_vars=(
  "SHOPIFY_API_KEY"
  "SHOPIFY_API_SECRET"
  "PRINTFUL_API_KEY"
  "ZAPIER_WEBHOOK_SECRET"
  "KLAVIYO_API_KEY"
  "POSTSCRIPT_API_KEY"
)

for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "  ✗ Missing: $var"
    exit 1
  else
    echo "  ✓ $var is set"
  fi
done

# 2. Theme Files
echo -e "\n✓ Checking theme files..."
theme_files=(
  "layout/theme.liquid"
  "assets/ayat-theme.scss"
  "assets/ayat-custom.js"
  "assets/zepto-integration.js"
)

for file in "${theme_files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file exists"
  else
    echo "  ✗ Missing: $file"
    exit 1
  fi
done

# 3. App Installation Status
echo -e "\n✓ Verifying Shopify apps..."
echo "  ℹ️  Please manually verify these apps are installed:"
echo "    - Zepto Product Personalizer"
echo "    - Order Tagger"
echo "    - Klaviyo"
echo "    - Postscript"

echo -e "\n✅ Pre-deployment check complete!"
