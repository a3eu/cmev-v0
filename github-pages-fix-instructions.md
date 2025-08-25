# GitHub Pages Deployment Fix

## Changes Required

### 1. Remove pnpm-lock.yaml file
Delete the `pnpm-lock.yaml` file from your repository to fix package manager conflicts:
```bash
rm pnpm-lock.yaml
```

### 2. Update .github/workflows/deploy.yml
Replace your current workflow file with the updated version that includes debugging steps and fixes the artifact path.

The key changes are:
- Added debugging steps to show what directories are created during build
- Changed artifact path back to `./dist` (not `./out`)
- Added detailed logging to help diagnose issues

### 3. Commit and push changes
```bash
git add .
git commit -m "fix github pages deployment with debugging"
git push origin v2-0
```

## What the fixes do:

1. **Package manager conflict fix**: Removes pnpm-lock.yaml so GitHub Actions uses npm consistently
2. **Debugging output**: Shows exactly what directories are created during the build process
3. **Correct artifact path**: Uses `./dist` which matches your Next.js config `distDir: 'dist'`

## Expected results:

After applying these changes, the GitHub Actions workflow will:
1. Build your Next.js site successfully
2. Show detailed output about what directories were created
3. Upload the correct `dist` directory to GitHub Pages
4. Deploy your site to your custom domain `conmusicaenvivo.org`

## If it still doesn't work:

The debugging output will show us exactly what's happening during the build, which will help identify any remaining issues.
