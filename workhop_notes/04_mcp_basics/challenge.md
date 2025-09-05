# MCP Basics - Challenge

- use Playwright MCP to open the application and explore it
- try using Playwright MCP to convert test cases into tests. you can use the test cases below
- try debugging your tests with Playwright MCP
- as you prompt, add and refine your project Cursor rules

| Test Case ID | Test Case Title | Preconditions | Test Steps | Expected Results |
| :--- | :--- | :--- | :--- | :--- |
| **T_LIST_01** | Create a new list on a board | - An empty board exists.<br>- User is on the board's detail page. | 1. Click the "Add a list" button.<br>2. In the input field, type "To Do".<br>3. Click the "Add list" button. | - A new list with the title "To Do" appears on the board.<br>- The list contains an "Add another card" button. |
| **T_LIST_02** | Update a list's title | - A board with a list named "Backlog" exists.<br>- User is on the board's detail page. | 1. Click on the list title "Backlog".<br>2. Type "Ready for Dev" into the input field.<br>3. Press `Enter`. | - The list title updates to "Ready for Dev".<br>- The change persists after a page refresh. |
| **T_LIST_03** | Delete an existing list | - A board with a list named "List to Remove" exists.<br>- User is on the board's detail page. | 1. Click the three-dots icon on the "List to Remove" list header.<br>2. Click on "Delete list". | - The "List to Remove" is successfully removed from the board. |

