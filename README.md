# simple-preact-signals

A tiny Preact + Signals playground where you can add teammates in a clean little dashboard, perfect for seeing shared state, simple computed logic, and Tailwind styling work side by side without a ton of boilerplate.

## Features

- Minimal roster dashboard built with Preact + TypeScript
- Global state handled via Preact Signals (draft user, roster, helpers)
- Tailwind CSS for quick, readable styling
- Friendly empty state and trimmed form inputs

## Tech Stack

- [Preact](https://preactjs.com/) + [@preact/signals](https://github.com/preactjs/signals)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh/) (dependency manager + dev server)

## Getting Started

1. **Install dependencies**
   ```bash
   bun install
   ```
2. **Start the dev server**
   ```bash
   bun dev
   ```
3. Open `http://localhost:5173` and add your first teammate.

## Scripts

| Command      | Description                   |
| ------------ | ----------------------------- |
| `bun dev`    | Start Vite dev server         |
| `bun run build` | Type-check + build for prod |
| `bun preview` | Preview the production build |

## Project Notes

- Shared state lives in `src/signals/store.tsx` with signals, computed state (`roster`), and helpers (`prependUser`, `resetUserDraft`).
- The form (`src/components/UserForm.tsx`) writes to `userDraft`, trims values, and prepends a new user.
- The table (`src/components/UserTable.tsx`) reads `roster.value` and shows a Thai empty message when no records exist.

Feel free to fork, tweak the styles, or extend the roster logic to practice more with Signals.
