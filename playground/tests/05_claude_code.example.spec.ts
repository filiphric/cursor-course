import { test, expect } from '@playwright/test';

test('create a new board', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('first-board').fill('Test board');
  await page.getByTestId('first-board').press('Enter');
  
  await expect(page).toHaveURL('/board/1');

  await page.getByTestId('add-list-input').fill('Test list');
  await page.getByTestId('add-list-input').press('Enter');

  await expect(page.getByTestId('list')).toBeVisible();

  await page.getByText('Add card').click();
  
  await page.getByTestId('new-card-input').fill('Test card');
  await page.getByTestId('new-card-input').press('Enter');

  await expect(page.getByTestId('card')).toBeVisible();
});