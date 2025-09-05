# MCP Basics

## What is MCP?
- MCP stands for Model Context Protocol
- **Standardized way to interact with AI applications** - basically, it's a standard for creating AI applications (Claude, Cursor, ChatGPT, Goose,...)
- **Cross-platform compatibility** - the idea is that you build one MCP and it could be used in all these clients (almost, check the [MCP feature support](https://modelcontextprotocol.io/clients))
- **Data fetching and action triggering** - these days it is mostly used for fetching some data from some resource, or triggering an action, but it will do so much more

### Current use cases
- Right now, you can have an MCP for Linear and fetch a task which AI can read and in Cursor you can implement it - almost like when an application makes an API call

### MCP-UI - the future
What's probably most exciting is that there's a team that's working on mcp-ui - this is an MCP that will instead of a text response render a whole UI and return it back to you. For example you'll ask "which of my recent tests were flaky?" and you'll get back a graphical representation with all the important information.

Or you can go to a shopify powered store, say you want to buy red shoes, and complete the whole flow in ChatGPT or Claude, including payment. Watch this video on a [great demo by Block](https://www.youtube.com/watch?v=GS-kmreZDgU)

### Security considerations
When it comes to MCP servers, they can be tricky when it comes to security. There are three ways MCPs servers can run:

1. **Remote server** - they run on a remote server, which means that if they change, your AI might not figure out that it should not use the updated tools
2. **Local execution** - you download and everything runs on your machine, but this also means that mcp might be allowed to go through your file system - cursor is intelligent enough to not give access to like env variables, but I'd be careful
3. **NPX command** - which is also not considered secure, because you are essentially running an executable on your machine that could do more than you want

**Important:** When you use an MCP make sure it is one that you trust.

### Installation process
- There are actually two Playwright MCPs, Cursor's official docs page is a good source to trust

## Using Playwright MCP

### Converting test cases into tests
You can use Playwright MCP to execute test cases and gather information about selectors, APIs and data management.

**Example prompt:**
```
open browser and execute these test cases one by one. gather information along the way, about selectors, apis and data management.

after you go through all of these test cases, create a new spec file in the tests folder and implement these test cases. 

be mindful of the preconditions and split the tests into multiple describe blocks if any test requires a different setup.

use api calls to seed any data needed.

refer to @playwright.config.ts for more info about the project
```

### Debugging with MCP
AI, like humans, is not perfect. Sometimes it makes mistakes. The really cool thing about Playwright MCP is that it can help you debug.

We used the playwright browser to explore the application and then write our test script. Now we can flip the order and use our test script to inform the browser what to do.

## Resources

- [Webinar by Block about MCP-UI](https://www.youtube.com/watch?v=GS-kmreZDgU)
-[MCP-UI website](https://mcpui.dev/)

