# Rules and workflows

## What you'll learn

- What types of rules there are
- How to create and generate rules
- Recommendations
- How to create and use workflows

## Types of rules

Rules are attached to the context window, so they are basically another set of instructions that get added every time you prompt Cursor.

### User rules
- Set in settings, applied across all projects
- Global rules that affect all your Cursor usage

### Project rules
- Saved in `.cursor/rules` folder, applied only to the project
- There are different ways of how these rules can be applied
- These are saved as `.mdc` files

### AGENT.md
- Sort of like a README file for AI
- Covers basic information about a project
- Includes how to run tests, how to seed database, code style guidelines and so on
- It is an effort to unify basic instructions for users so that if within your team some people use Cursor, some use Windsurf, they can all have a common starting point

## Creating and using rules

### Recommendations
- There are rules on the internet that you can download, but same as prompt engineering, it can turn into a little bit of an alchemy
- My suggestion is to always reverse-engineer your rules + experiment
- So build your rules based on what you know works
- Rules are basically abstractions - you want to not repeat yourself when you prompt AI to do something
- As with all abstractions, you don't want to start to apply them before they make sense

### Example rule structure
```
---
globs: **/*.spec.ts
alwaysApply: false
---
Locator Strategy
Priority Order:

1. data-testid attributes (preferred)
2. role with accessible names
3. Stable CSS selectors
4. Text content (only for unique, stable text)
```

## Workflows

Workflows are similar to rules, but they are more of a step by step set of instructions for AI to follow.

### When to use workflows
- They make more sense when you have a specific task ahead of you
- Remember, you don't want to push too much irrelevant information into your context window
- Workflows are a great way to force AI into repeat a certain pattern, but also have some leeway to adjust to the task at hand


## Resources

[Awesome Cursor Rules Repo](https://github.com/PatrickJS/awesome-cursorrules)
