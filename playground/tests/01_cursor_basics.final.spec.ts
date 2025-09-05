import { test, expect } from '@playwright/test';

// Test to create a board, list, and card in sequence
test('create board, list, and card workflow', async ({ page }) => {
  // Step 1: Create a new board
  await test.step('create a new board', async () => {
    // Navigate to the home page
    await page.goto('/');

    // Fill the "first-board" input with the board name
    await page.getByTestId('first-board').fill('Test board');
    // Press Enter to submit and create the board
    await page.getByTestId('first-board').press('Enter');
    
    // Expect the URL to change to the new board's page
    await expect(page).toHaveURL('/board/1');
  });

  // Step 2: Create a new list on the board
  await test.step('create a new list', async () => {
    // Fill the "add-list-input" with the list name
    await page.getByTestId('add-list-input').fill('Test list');
    // Press Enter to submit and create the list
    await page.getByTestId('add-list-input').press('Enter');

    // Expect the new list to be visible on the page
    await expect(page.getByTestId('list')).toBeVisible();
  });

  // Step 3: Create a new card in the list
  await test.step('create a new card', async () => {
    // First click the "Add another card" button to show the input
    await page.getByTestId('new-card').click();
    
    // Then fill the card input field and submit
    await page.getByTestId('new-card-input').fill('Test card');
    await page.getByTestId('new-card-input').press('Enter');

    // Verify the card is visible
    await expect(page.getByTestId('card')).toBeVisible();
  });
});