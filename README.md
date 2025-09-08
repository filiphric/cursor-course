# Cursor Workshop

A comprehensive workshop repository for learning AI-powered development tools like Cursor, featuring a complete Trello clone application and structured Playwright testing examples.

## Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone https://github.com/filiphric/cursor-course.git
   cd cursor-course
   npm install
   ```

2. **Start the Trello app**:
   ```bash
   npm run app
   ```
   The application will be available at `http://localhost:3000`

3. **Run Playwright tests**:
   ```bash
   cd playground
   npx playwright test
   ```

## Project Structure

### 🎯 Trello Clone App (`playground/trelloapp/`)

A complete task management application built with:
- **Vue 3** with Composition API
- **TypeScript** for type safety  
- **Vite** for fast development
- **TailwindCSS** for styling
- **Pinia** for state management
- **JSON Server** with authentication for backend

**Key commands:**
```bash
# Start development server
npm run app                    # From root
# OR
cd playground/trelloapp && npm start
```

### 🧪 Playwright Tests (`playground/tests/`)

Structured test examples organized by workshop chapters:

**Test Types:**
- `*.example.spec.ts` - Starting templates for participants
- `*.final.spec.ts` - Complete solution implementations  
- `*.challenge.spec.ts` - Practice exercises

**Test Projects:**
- `setup` - Cleanup and setup utilities
- `examples` - Main workshop examples
- `examples (finished)` - Completed solutions
- `challenges` - Workshop exercises

**Running Tests:**

I recommend running tests using VS Code extension. Open "Show recommended extensions" in Cursor to install it.

```bash
cd playground

# All tests
npx playwright test

# Specific project
npx playwright test --project=examples

# Single test file
npx playwright test 01_cursor_basics.example.spec.ts

# Debug mode
npx playwright test --debug

# UI mode
npx playwright test --ui
```