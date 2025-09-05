# Prompting basics

## Providing context

Prompting has a few specifics in Cursor compared to e.g. ChatGPT. When writing a prompt, we want to provide context to the model. For example, if we want to write a test, it is good to disclose what kind of intention we have with the test, what is the goal of the test and so on.

Thanks to the fact that we are working inside an IDE, it will provide some of that context automatically. This is something that is good to have in mind, because it can be either a good thing or a bad thing.

Let's say that you are vague in your intentions and your prompt says "write a test that adds an item to the list". AI is going to start thinking: what kind of item, which list do you want me to test, should I write some edge cases? Should I add assertions or not? It will try to add some context itself.

Same goes for state - should I write it to the active file or should I create a new one? What is the base URL? Should I use page object model? I should probably think about the selectors that we use in this app.

### Types of context references

#### Code reference
- Add a `@code` reference to the test
- Good for refactoring or focusing on a very particular issue

#### File reference
- Add a file reference using `@filename`
- Good for providing additional context, but bear in mind that we are also adding some stuff that is irrelevant (worker information etc.)

#### Folder reference
- Reference a folder using `@foldername`
- When we use `@tests` - all the test files are going to get added to the context window
- You can just reference a folder name if you want to e.g. create a bunch of spec files in a particular folder

### Context usage indicator

- Cursor indicates the percentage of context used
- The number indicates number of tokens
- Tokens are the inputs and outputs of LLM models. They are chunks of text, often a fragment of a word, that an LLM processes one-by-one
- Check [Vellum AI LLM Leaderboard](https://www.vellum.ai/llm-leaderboard) for context window comparison

## Model selection

### Auto mode
- By default, Cursor will be set to "auto" - it has a logic to decide which model to choose for a given task
- The auto mode is also safest when it comes to cost savings
- Once you choose a model yourself, you can run into limits much faster
- Cursor has been criticized for not having a very transparent pricing model, basically it's - leave it to us, or pay a lot of money
- Personally, auto mode works decently well, sometimes I switch to Claude Sonnet 4o which is pretty good at coding
- I don't like to experiment with models too much, they seem to have a sort of a "dialect", almost as if you need to talk to each model in a slightly different way

## Prompt engineering

Prompting is a bit of an alchemy. There are endless posts on reddit and linkedin claiming they have found some magic prompt that doesn't create any bugs or makes AI behave super reliably, they are all lies.

It is hard to find a good set of rules for prompting, my suggestion is to not rely on someone else's prompt, but build your own intuition for what works and what doesn't.

Try to come back to what worked and reverse-engineer things that worked.

However - there are some good practices and you can find them on Anthropic or OpenAI docs, I've included them in materials.

### Best practices from Anthropic, OpenAI & Google docs

- **Be explicit** - instead of saying "write a test for board" - say "write a test that opens the main page, and creates a new board by typing into the input"
- **Add context** - you can add a motivation behind your instruction, so for tests you may want to tell Cursor that you want a certain functionality to work, or avoid a certain bug from happening
- **Use positive examples** - it is much better to tell AI what to do rather than what not to do, because if you think about it, the whole example of what you don't want is now taking space in the context window and you really want to be mindful of what you have there
- **Use Markdown or XML** - help structure the format of your prompt, it helps to identify what's what in your prompt
- **Utilize thinking, parallelism and eagerness** - this is bit more on the advanced side and is useful a bit later once you build a good intuition around prompting - but you can do stuff like - check the result of your work, research stuff in parallel, if the results of your research get too fuzzy, run one refined parallel batch then proceed - these are not usually things you would necessarily use in test automation, or at least not in the simpler projects, but it's good to know about

## Personal tips

- **Embrace learning mindset** - don't try to make the prompting process perfect, but iterate and learn
- **Use single agent tab for single task** - the context window indicator is a good thing to follow, but you can also tell when AI gets stuck in a loop. Even when debugging a problem, you can open a couple of agent tabs
- **Comments can guide AI** - comments annotate not just for your colleagues but for AI too. Especially if you do something "weird" or specific to your testing situation, comments can prevent AI from deleting or changing the code you actually need
- **Instruct AI to come up with multiple solutions and pick the best one** - when using AI to solve a problem and you are not sure about the root cause, then tell AI to come up with multiple solutions and then either you pick the one that's most probable, or let AI choose an option. By default, AI will try to converge to a single solution, but if you tell it not to, you'll get a bigger variety of options
- **Tell AI to add logs** - another tip is to tell AI to add console logs, sometimes even add console logs to every line of code, especially when you have sync and async code, great for debugging race conditions
- **Use git commits religiously** - AI can generate a lot of code, so make sure you don't create PRs that have thousands lines of code in them. Commit often
- **Restore checkpoints** - restoring checkpoints is really useful, you can go back in a chat conversation and restore the code you had before. Instead of telling AI to do that, just use Cursor

### Using Repomix + Gemini
Repomix is a very handy tool that can pack your codebase into an AI-friendly format. It's like a summary of your repository that you can put into your context window.

It has a [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=DorianMassoulier.repomix-runner), so you can take part of your code.

What I usually do is that I pack my code and then put it into Gemini. The reason for that is that I don't really want to use Cursor's auto mode, and I want to avoid Cursor adding stuff in the background. Usually I use Gemini to do some sort of planning for me.

For more complex tasks, you can use Repomix to provide comprehensive context

```
Write an instruction for an A.I. code assistant.

The code assistant will be tasked with writing playwright tests for following features
- board
- list
- card
- card detail
- login
- signup

The code assistant will write e2e testing scenarios for the application referred in the codebase. It will use data-testid attributes as selectors, making use of the getByTestId method.

Use your thinking capabilities to get an understanding of the application logic.

There are already spec files ready to be filled with code, in the `playground/tests/features` folder with names in the format of <feature>.final.spec.ts

The data is removed before the test run, but you can send a request to /api/reset at any time to test run.
```

### Generate test cases
Another cool thing I can do is that I can generate test cases. For this I usually add some screenshots as well.

I then copy the Gemini output to markdown and use it in cursor to generate my tests.

### Generate Mermaid diagrams
You can also use AI to create visual representations of your application flows.

Gemini can generate a Mermaid diagram, which is a Markdown notation for diagrams, and then you can use that same diagram to visualize something to the Agent.

Arguably, you could use images to provide more context, it’s kinda hard to say which one is better.
