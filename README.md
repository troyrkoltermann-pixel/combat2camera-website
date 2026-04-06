# Combat2Camera Website

Production website for Combat2Camera, intended to deploy on Vercel with Supabase as the backend.

## Stack

- Next.js
- React
- TypeScript
- Supabase
- Vercel

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
cp .env.example .env.local
```

3. Fill in the Supabase variables in `.env.local`.

4. Start the dev server:

```bash
npm run dev
```

## Deployment flow

1. Create a GitHub repo and push this project.
2. Import the repo into Vercel.
3. Add `combat2camera.org` as the primary domain in Vercel.
4. Add the remaining domains as redirect domains pointing to `https://combat2camera.org`.
5. Create a Supabase project and copy the URL and keys into Vercel environment variables.

## Suggested domain routing

- Primary: `combat2camera.org`
- Redirect: `combat2camera.com`
- Redirect: `combattocamera.org`
- Redirect: `combattocamera.com`

## Manual setup checklist

### GitHub

Initialize the repo locally and create the first commit:

```bash
git init
git add .
git commit -m "Initial Combat2Camera website"
```

Create a GitHub repository named `combat2camera-website`, then connect and push:

```bash
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/combat2camera-website.git
git branch -M main
git push -u origin main
```

### Vercel

1. Create a new Vercel project by importing the GitHub repository.
2. Framework preset: `Next.js`
3. Root directory: `Website` if the repo contains parent folders, otherwise repo root.
4. Add these environment variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Set `combat2camera.org` as the primary production domain.

### Supabase

1. Create a new project named `combat2camera`.
2. In Supabase project settings, copy:
   - Project URL
   - anon public key
   - service role key
3. Put those values in `.env.local` for local use and in Vercel env vars for production.

### GoDaddy domain setup

Point all domains to Vercel. In Vercel, add all four domains to the project first, then use the DNS records Vercel shows for each domain.

Recommended routing:

- `combat2camera.org`: primary site
- `combat2camera.com`: redirect to `https://combat2camera.org`
- `combattocamera.org`: redirect to `https://combat2camera.org`
- `combattocamera.com`: redirect to `https://combat2camera.org`

For GoDaddy DNS, Vercel commonly asks for:

- An `A` record on the apex domain pointing to `76.76.21.21`
- A `CNAME` record on `www` pointing to `cname.vercel-dns.com`

After DNS propagates, configure redirects inside the Vercel domain settings for the three secondary domains.
