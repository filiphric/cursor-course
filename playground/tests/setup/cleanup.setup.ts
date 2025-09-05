import { test as setup, expect } from '@playwright/test';

setup('remove all data', async ({ request }) => {
  await request.post('/api/reset');
});