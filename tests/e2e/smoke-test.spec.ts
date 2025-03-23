import { test, expect } from '@playwright/test'

test('smoke test', async ({ page }) => {
  await page.goto('/')

  // app home
  await expect(page.locator('h1')).toHaveText('Blitzkrieg! Solo Helper')
  await page.getByRole('link', { name: 'Play Game' }).click()

  // setup game
  await expect(page.locator('h1')).toHaveText('Setup Game')
  await page.getByRole('button', { name: 'Difficulty: Easy' }).click()
  await page.getByRole('link', { name: 'Medium' }).click()
  await page.getByRole('button', { name: 'Randomize Regions' }).click()
  await page.getByRole('button', { name: 'Start Game' }).click()

  // play a few rounds
  await page.getByRole('link', { name: 'Next Round' }).click()
  await page.getByRole('link', { name: 'Next Round' }).click()
  await page.getByRole('link', { name: 'Back' }).click()
  await page.getByRole('link', { name: 'Next Round' }).click()
  await page.getByRole('link', { name: 'Next Round' }).click()

  // finish game
  await page.getByRole('button', { name: 'Finish Game' }).click()
  await page.locator('#endGameModal').getByRole('button', { name: 'Finish Game' }).click()

  // app home
  await expect(page.locator('h1')).toHaveText('Blitzkrieg! Solo Helper')
})
