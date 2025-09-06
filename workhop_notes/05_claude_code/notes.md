# Claude Code

## What is Claude Code?

Claude Code is a CLI coding agent built by Anthropic. It is a separate thing from Cursor, but it can be integrated really nicely - they are actually kind of competitors, but I find myself switching between them depending on the task.

## Installation and setup

### Installation
```
npm install -g @anthropic-ai/claude-code
```

### Adding MCP support
```
claude mcp add playwright npx @playwright/mcp@latest
```

## Using Claude Code

### Basic usage
- **@ for referencing files** - use @ symbol to reference specific files
- **/ for commands** - use / for executing commands
- **Ctrl + V to paste images** - can handle visual input
- **CLAUDE.md** - similar to AGENTS.md that we talked about in the cursor chapter

### Two modes
Claude has these two modes, executing and planning, and you can use shift-tap to switch between them.

### Key difference from Cursor
I think the biggest difference between Cursor and Claude is that with Cursor, the IDE is at the center of the experience, and you have an Agent that can help you complete certain tasks. With Claude code, you have an agent that you can program to perform anything you need.

## Creating specialized agents

Cursor allows you to create predictable agents that help you complete certain tasks. These task can use MCPs for a true multi-agent experience.

## When to use Claude Code vs Cursor

- **Use Claude Code when** you need specialized agents for specific tasks
- **Use Cursor when** you want IDE-centric development with AI assistance
- **Switch between them** depending on the task at hand
- **Combine both** for maximum productivity
