import { test, expect } from '@playwright/test';

test('create a new board', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('first-board').fill('Test board');
  await page.getByTestId('first-board').press('Enter');
  
  await expect(page).toHaveURL('/board/1');
});