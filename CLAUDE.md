# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **workshop/course repository** focused on teaching AI tools like Cursor. It contains:

1. **Trello Clone App** (`playground/trelloapp/`) - Vue 3 + TypeScript + Vite + TailwindCSS application used for testing and demonstrations
2. **Playwright Tests** (`playground/tests/`) - Organized test examples for workshop chapters
3. **Presentation Slides** (`slides/`) - Bun-based slide presentation system

## Development Commands

### Main Application (Trello Clone)
- **Start the app**: `npm run app` (runs from root) or `cd playground/trelloapp && npm start`
- **Lint code**: `cd playground/trelloapp && npm run lint` (includes Prettier, ESLint auto-fix)
- **Type check**: `cd playground/trelloapp && npm run typecheck` (TypeScript + Vue type checking)

### Playwright Testing
- **Run all tests**: `cd playground && npx playwright test`
- **Run specific project**: `cd playground && npx playwright test --project=examples`
- **Run single test**: `cd playground && npx playwright test 01_cursor_basics.example.spec.ts`
- **Debug mode**: `cd playground && npx playwright test --debug`
- **UI mode**: `cd playground && npx playwright test --ui`

Available test projects:
- `setup` - Setup/cleanup tests
- `examples` - Workshop example tests (*.example.spec.ts)
- `examples (finished)` - Completed examples (*.final.spec.ts) 
- `challenges` - Workshop challenges (*.challenge.spec.ts)

### Slides Presentation
- **Install**: `cd slides && bun install`
- **Run**: `cd slides && bun run index.ts`

## Architecture Overview

### Test Organization Pattern
The workshop uses a structured approach to Playwright tests:
- **Example files** (`.example.spec.ts`) - Starting templates for workshop participants
- **Final files** (`.final.spec.ts`) - Completed implementations showing solutions
- **Challenge files** (`.challenge.spec.ts`) - Exercise files for participants

### Trello App Structure
- **Frontend**: Vue 3 with Composition API, TypeScript, Pinia for state management
- **Backend**: JSON Server with authentication (json-server-auth)
- **Styling**: TailwindCSS with custom configurations
- **Build**: Vite for fast development and building

### Test Configuration
- Base URL: `http://localhost:3000`
- Timeout: 5 seconds per test
- Serial execution (fullyParallel: false)
- HTML reporter enabled
- Web server auto-starts Trello app before tests

## Key Files and Locations

- `playground/playwright.config.ts` - Main Playwright configuration
- `playground/trelloapp/vite.config.ts` - Vite build configuration
- `playground/trelloapp/src/` - Vue application source code
- `playground/tests/setup/cleanup.setup.ts` - Test cleanup utilities
- `playground/trelloapp/backend/` - JSON server backend implementation

## Development Notes

- The Trello app runs on port 3000 when started
- Playwright automatically starts/stops the web server during testing
- All test dependencies are managed at the root level
- The workshop is designed around incremental learning with numbered chapters