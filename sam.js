// Run this with: node check-setup.js
// This will diagnose your setup

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Pout & Polish Setup...\n');

// Check 1: Context file exists
const contextPath = path.join(__dirname, 'src', 'context', 'CartContext.tsx');
if (fs.existsSync(contextPath)) {
  console.log('✅ CartContext.tsx exists');
} else {
  console.log('❌ MISSING: src/context/CartContext.tsx');
  console.log('   Create this file first!\n');
}

// Check 2: Redux folder should NOT exist
const reduxPath = path.join(__dirname, 'src', 'redux');
if (fs.existsSync(reduxPath)) {
  console.log('❌ FOUND: src/redux/ folder (should be deleted)');
  console.log('   Delete this folder: rm -rf src/redux\n');
} else {
  console.log('✅ src/redux/ folder not found (good!)');
}

// Check 3: providers.tsx should NOT exist
const providersPath = path.join(__dirname, 'src', 'app', 'providers.tsx');
if (fs.existsSync(providersPath)) {
  console.log('❌ FOUND: src/app/providers.tsx (should be deleted)');
  console.log('   Delete this file: rm src/app/providers.tsx\n');
} else {
  console.log('✅ src/app/providers.tsx not found (good!)');
}

// Check 4: app.tsx should NOT exist
const appPath = path.join(__dirname, 'src', 'app', 'app.tsx');
if (fs.existsSync(appPath)) {
  console.log('❌ FOUND: src/app/app.tsx (should be deleted)');
  console.log('   Delete this file: rm src/app/app.tsx\n');
} else {
  console.log('✅ src/app/app.tsx not found (good!)');
}

// Check 5: Scan for Redux imports
console.log('\n🔍 Scanning for Redux imports...');
const srcPath = path.join(__dirname, 'src');

function scanForRedux(dir) {
  const files = fs.readdirSync(dir);
  const reduxImports = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && file !== 'node_modules' && file !== '.next') {
      reduxImports.push(...scanForRedux(filePath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        if (
          line.includes('@/redux') ||
          line.includes('useAppSelector') ||
          line.includes('useAppDispatch') ||
          line.includes("from 'react-redux'") ||
          line.includes('from "react-redux"')
        ) {
          reduxImports.push({
            file: path.relative(__dirname, filePath),
            line: index + 1,
            content: line.trim(),
          });
        }
      });
    }
  }

  return reduxImports;
}

const reduxImports = scanForRedux(srcPath);

if (reduxImports.length > 0) {
  console.log('❌ Found Redux imports that need to be replaced:\n');
  reduxImports.forEach((imp) => {
    console.log(`   ${imp.file}:${imp.line}`);
    console.log(`   ${imp.content}\n`);
  });
  console.log(
    '   Replace these with: import { useCart } from "@/context/CartContext";\n'
  );
} else {
  console.log('✅ No Redux imports found (good!)\n');
}

// Check 6: Verify key files exist
console.log('🔍 Checking required files...');
const requiredFiles = [
  'src/context/CartContext.tsx',
  'src/app/layout.tsx',
  'src/app/client-wrapper.tsx',
  'src/components/NavBar.tsx',
  'src/components/Cart.tsx',
  'src/components/CartProduct.tsx',
  'src/components/ProductCard.tsx',
];

let allFilesExist = true;
requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ MISSING: ${file}`);
    allFilesExist = false;
  }
});

// Final verdict
console.log('\n' + '='.repeat(50));
if (
  fs.existsSync(contextPath) &&
  !fs.existsSync(reduxPath) &&
  !fs.existsSync(providersPath) &&
  reduxImports.length === 0 &&
  allFilesExist
) {
  console.log('✅ Setup looks good! Try these steps:');
  console.log('   1. Delete .next folder: rm -rf .next');
  console.log('   2. Clear node cache: rm -rf node_modules/.cache');
  console.log('   3. Restart dev server: npm run dev');
  console.log('   4. Hard refresh browser: Ctrl+Shift+R\n');
} else {
  console.log('❌ Setup has issues. Fix the items marked with ❌ above.\n');
}
