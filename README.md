# Choschmous v2

Next.js application with Prisma + PostgreSQL.

## Why `npx prisma init` fails here

This repository already contains a Prisma setup (`prisma/schema.prisma` and `prisma/prisma.config.ts`).
So this error is expected:

```bash
npx prisma init
# ERROR: A folder called prisma already exists
```

You should **not** run `prisma init` again in this project.

## Prisma setup from scratch (for this repo)

### 1) Install dependencies

```bash
pnpm install
```

> `postinstall` runs `prisma generate`, so Prisma Client is generated automatically after install.

### 2) Create your environment file

Create `.env` at the project root with your PostgreSQL connection string:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/choschmous?schema=public"
```

### 3) Make sure PostgreSQL is running

Your `DATABASE_URL` host/port/database/user/password must match a running PostgreSQL instance.

### 4) Validate Prisma can read your schema

```bash
pnpm prisma validate
```

### 5) Sync schema to database

If you are in local development and want to push the current schema quickly:

```bash
pnpm prisma db push
```

If you want migration files (recommended for team workflows):

```bash
pnpm prisma migrate dev --name init
```

### 6) Open Prisma Studio (optional)

```bash
pnpm prisma studio
```

### 7) Run the app

```bash
pnpm dev
```

## Common Prisma commands

```bash
pnpm prisma generate
pnpm prisma validate
pnpm prisma format
pnpm prisma db push
pnpm prisma migrate dev --name <migration_name>
pnpm prisma migrate reset
pnpm prisma studio
```

## How Prisma is wired in this codebase

- Prisma schema: `prisma/schema.prisma`
- Prisma config: `prisma/prisma.config.ts`
- Shared Prisma client instance: `infrastructure/db/prisma.ts`

## Troubleshooting

### `Environment variable not found: DATABASE_URL`

Your `.env` file is missing or `DATABASE_URL` is empty.

### `P1001: Can't reach database server`

PostgreSQL is not reachable at the URL in `DATABASE_URL` (host, port, firewall, or container networking issue).

### Generated client mismatch

If schema changed but types look stale:

```bash
pnpm prisma generate
```

---
If you want, I can also give you a **Docker Compose PostgreSQL + ready-to-copy `.env`** setup for this project.
