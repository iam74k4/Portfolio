# Environment Variables Setup Guide

## GitHub Actions Configuration

### Repository Variables

To configure environment variables in GitHub Actions, go to:
**Settings** → **Secrets and variables** → **Actions** → **Variables** tab

Add the following variables:

| Variable Name | Value | Required | Description |
|--------------|-------|----------|-------------|
| `NEXT_PUBLIC_BASE_PATH` | `/Portfolio` | No* | Base path for GitHub Pages deployment |
| `NEXT_PUBLIC_SITE_URL` | `https://iam74k4.github.io/Portfolio` | No* | Full URL of the deployed site |

\* If not set, defaults will be used:
- `NEXT_PUBLIC_BASE_PATH` defaults to `/Portfolio` in production
- `NEXT_PUBLIC_SITE_URL` defaults to `https://iam74k4.github.io/Portfolio`

### Current Configuration

The workflows are configured with fallback defaults:

**`.github/workflows/ci.yml`** (line 92-93):
```yaml
env:
  NEXT_PUBLIC_SITE_URL: ${{ vars.NEXT_PUBLIC_SITE_URL || 'https://iam74k4.github.io/Portfolio' }}
  NEXT_PUBLIC_BASE_PATH: ${{ vars.NEXT_PUBLIC_BASE_PATH || '/Portfolio' }}
```

**`.github/workflows/deploy.yml`** (line 50-52):
```yaml
env:
  NEXT_PUBLIC_SITE_URL: ${{ vars.NEXT_PUBLIC_SITE_URL || 'https://iam74k4.github.io/Portfolio' }}
  NEXT_PUBLIC_BASE_PATH: ${{ vars.NEXT_PUBLIC_BASE_PATH || '/Portfolio' }}
```

### Verification

The environment variables are correctly configured in both workflows:
- ✅ `ci.yml` - Build job has environment variables set
- ✅ `deploy.yml` - Build job has environment variables set
- ✅ Both use repository variables with fallback defaults
- ✅ Default values match the GitHub Pages deployment path

## Local Development

For local development, create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Leave `NEXT_PUBLIC_BASE_PATH` empty for local development (no subdirectory).

## Production Build Test

To test the production build locally with basePath:

```powershell
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/Portfolio"
$env:NEXT_PUBLIC_SITE_URL="https://iam74k4.github.io/Portfolio"
npm run build
```

The build will generate:
- `manifest.json` with `/Portfolio` basePath
- `robots.txt` with correct sitemap URL
- `sitemap.xml` with correct site URL
- All static assets with correct paths

