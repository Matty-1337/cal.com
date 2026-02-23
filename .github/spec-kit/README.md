# Delta Kinetics Cal.com Fork — Spec Kit

> **This is the single source of truth for all customizations made to this Cal.com fork.**

## What is this?

This repository is a fork of [Cal.com](https://github.com/calcom/cal.com), self-hosted on Railway. Delta Kinetics has made (and will continue to make) significant customizations to the UI, UX, and business logic.

## Why does this exist?

Cal.com is a massive monorepo. AI coding assistants (Cursor, Claude Code, GitHub Copilot) can easily confuse our customized components with upstream Cal.com code and accidentally suggest "fixes" that revert our changes. This spec kit prevents that.

## Rules for AI Assistants

1. **Always read this spec kit before making changes.** Start with `CHANGE-REGISTRY.md`.
2. **Never revert a registered customization.** If a file is listed in the change registry, our version is intentional.
3. **Check `UPSTREAM-BOUNDARY.md`** before touching any file to understand what's ours vs. upstream.
4. **Log every change** you make in `CHANGE-REGISTRY.md` before committing.
5. **When in doubt, ask.** Do not assume upstream Cal.com patterns are correct for this fork.

## File Index

| File | Purpose |
|------|---------|
| `ARCHITECTURE.md` | High-level system architecture and deployment info |
| `CHANGE-REGISTRY.md` | Append-only log of every customization (the most important file) |
| `COMPONENT-MAP.md` | Maps custom components to their file paths and ownership |
| `UPSTREAM-BOUNDARY.md` | Defines which parts of Cal.com we touch vs. leave alone |
| `CONVENTIONS.md` | Coding standards, naming conventions, and patterns for this fork |
