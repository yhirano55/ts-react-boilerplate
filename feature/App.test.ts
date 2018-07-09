import { Page } from "puppeteer"

declare const page: Page
declare const host: string

describe("App", () => {
  beforeAll(async () => {
    await page.goto(`http://${host}/`)
  })

  it("should display 'Hello from TypeScript and React!' text on page", async () => {
    const text = await page.evaluate(() => document.body.textContent)
    expect(text).toContain("Hello from TypeScript and React!")
  })
})
