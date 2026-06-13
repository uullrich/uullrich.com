import { chromium } from 'playwright'
import sharp from 'sharp'
import { mkdir, readFile, unlink } from 'node:fs/promises'

const BASE = 'http://localhost:9000'
const OUT = 'static/og'
const W = 1200
const H = 630

const targets = [
  {
    url: `${BASE}/blog/tide-trouble/`,
    selector: 'figure',
    file: 'tide-trouble.jpg',
    bg: '#0a2e44',
  },
  {
    url: `${BASE}/blog/frida-cpp/`,
    selector:
      'figure[aria-label="Preview: Frida replaces a return value"] > div:first-of-type',
    file: 'frida-cpp.jpg',
    bg: '#14161b',
  },
]

const hexToRgb = hex => {
  const n = parseInt(hex.slice(1), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

const run = async () => {
  await mkdir(OUT, { recursive: true })
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2,
  })

  for (const t of targets) {
    await page.goto(t.url, { waitUntil: 'networkidle' })

    // Dismiss the cookie consent banner so it never appears in the shot.
    const accept = page.getByText('Accept', { exact: true })
    if (await accept.count()) {
      await accept.first().click()
      await page.waitForTimeout(300)
    }

    const el = page.locator(t.selector).first()
    await el.scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)

    const tmp = `${OUT}/_tmp.png`
    await el.screenshot({ path: tmp })

    // Fit the element onto a 1200x630 branded canvas (contain + padded bg).
    const bg = hexToRgb(t.bg)
    await sharp(await readFile(tmp))
      .resize(W, H, {
        fit: 'contain',
        background: { ...bg, alpha: 1 },
      })
      .jpeg({ quality: 88 })
      .toFile(`${OUT}/${t.file}`)
    await unlink(tmp)
    console.log(`saved ${OUT}/${t.file}`)
  }

  await browser.close()
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})
