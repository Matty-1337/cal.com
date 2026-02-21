# Railway Self-Hosted Cal.com — Operations Guide

## Overview

This repo is a fork of [calcom/cal.com](https://github.com/calcom/cal.com) deployed on Railway.

| Item | Value |
|------|-------|
| Repo | `Matty-1337/cal.com` |
| Branch | `main` (auto-deploys) |
| Builder | Dockerfile (repo root) |
| Public URL | https://calcom-web-app-production-5aa0.up.railway.app |
| Railway project | `cal.com` (production environment) |

---

## Workflow: Edit Locally → Push → Railway Redeploys

```powershell
cd C:\Users\matt\cal.com
# Make your changes
git add .
git commit -m "your message"
git push origin main
# Railway auto-triggers a new build from the Dockerfile
```

Watch the build at: **Railway Dashboard → cal.com project → Cal.com Web App → Deployments**

---

## Environment Variables

All secrets are set **only in Railway Dashboard** — never in this repo.

### Where to set them
Railway Dashboard → `cal.com` project → **Cal.com Web App** service → **Variables** tab

### Currently configured variables (names only)

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Railway Postgres connection string |
| `DATABASE_DIRECT_URL` | Same as DATABASE_URL (used for migrations) |
| `DATABASE_HOST` | Postgres host (internal) |
| `NEXTAUTH_URL` | Public app URL for auth callbacks |
| `NEXTAUTH_SECRET` | NextAuth signing secret |
| `NEXT_PUBLIC_WEBAPP_URL` | Public base URL for the app |
| `CALENDSO_ENCRYPTION_KEY` | AES256 encryption key for app credentials |
| `NEXT_PUBLIC_LICENSE_CONSENT` | Set to `agree` for self-hosting |
| `ORGANIZATIONS_ENABLED` | `true` to enable org features |
| `SKIP_TYPE_CHECK` | `1` — skips TS/ESLint during build to avoid OOM |
| `MAX_OLD_SPACE_SIZE` | `8192` — Node.js heap size in MB |
| `GOOGLE_API_CREDENTIALS_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_API_CREDENTIALS_CLIENT_SECRET` | Google OAuth Client Secret |
| `CALCOM_TELEMETRY_DISABLED` | `false` — set to `true` to disable telemetry |
| `PORT` | `3000` |

### Rotating secrets

```powershell
# NEXTAUTH_SECRET: generate a new 64-char secret
$newSecret = [Convert]::ToBase64String([Security.Cryptography.RandomNumberGenerator]::GetBytes(48))
Write-Host $newSecret
# Then set it in Railway Dashboard → Variables → NEXTAUTH_SECRET

# CALENDSO_ENCRYPTION_KEY: must be 32 bytes for AES256
$newKey = [Convert]::ToBase64String([Security.Cryptography.RandomNumberGenerator]::GetBytes(24))
Write-Host $newKey
# Then set it in Railway Dashboard → Variables → CALENDSO_ENCRYPTION_KEY
# WARNING: Rotating this will invalidate all stored encrypted credentials (OAuth tokens etc.)
```

---

## Updating from Upstream (calcom/cal.com)

```powershell
cd C:\Users\matt\cal.com
# Add upstream remote (one-time)
git remote add upstream https://github.com/calcom/cal.com.git

# Pull latest upstream changes
git fetch upstream
git merge upstream/main --no-edit

# Resolve any conflicts, then:
git push origin main
```

> **Note:** After merging upstream, check if new environment variables were added to `.env.example` and add them in Railway if needed.

---

## Rollback a Bad Deploy

```powershell
cd C:\Users\matt\cal.com

# Option 1: revert the last commit and push (cleanest)
git revert HEAD --no-edit
git push origin main
# Railway will deploy the reverted code automatically.

# Option 2: revert a specific commit
git revert <commit-hash> --no-edit
git push origin main

# Option 3: instant rollback in Railway UI
# Railway Dashboard → Cal.com Web App → Deployments → pick a previous SUCCESS → Redeploy
```

---

## Build Notes

- Builder: **Dockerfile** (root of repo)
- The Dockerfile does a multi-stage build:
  1. `builder` — installs deps, builds Next.js app
  2. `builder-two` — copies output, runs URL placeholder replacement
  3. `runner` — final slim image, runs `scripts/start.sh`
- `SKIP_TYPE_CHECK=1` skips TypeScript and ESLint checks during build to avoid OOM on Railway's build containers.
- `MAX_OLD_SPACE_SIZE=8192` allocates up to 8GB heap for the Node.js build process.
- `DATABASE_URL` is required at **build time** (Prisma client generation) and **runtime**.

---

## Debugging

```powershell
# View recent Railway deployment logs
cd C:\Users\matt\cal.com
railway logs

# Link to a different service temporarily
railway link
```

For production issues, check:
1. Railway Dashboard → Cal.com Web App → Deployments → click deployment → Build logs
2. Railway Dashboard → Cal.com Web App → Observability → Logs (runtime logs)
