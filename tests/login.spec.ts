import { test, expect, Page } from '@playwright/test'

test('should not login with an invalid password', async ({ page }) => {
  await login(page, 'tomsmith', 'test')
  await flashMessages(page, 'Your password is invalid!')
})

test('should not login with an invalid username', async ({ page }) => {
  await login(page, 'admin', 'SuperSecretPassword!')
  await flashMessages(page, 'Your username is invalid!')
})

test('should login with valid credentials', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!')
  await flashMessages(page, 'You logged into a secure area!')
})

const flashMessages = async (page: Page, message: string) => {
  const target = page.locator('#flash')
  await expect(target).toContainText(message)
}

const login = async (page: Page, user: string, pass: string) => {
  await page.goto('/login')

  const username = page.locator('#username')
  const password = page.locator('#password')

  user
    ? await username.fill(user) : null

  pass
    ? await password.fill(pass) : null

  await page.click('button[type="submit"]')
}
