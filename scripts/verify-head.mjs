import { chromium } from 'playwright'

const BASE = 'http://localhost:9000'
const pages = ['/', '/blog/frida-cpp/']

const run = async () => {
  const browser = await chromium.launch()
  let failures = 0

  for (const path of pages) {
    const page = await browser.newPage()
    const errors = []
    page.on('console', m => {
      if (m.type() === 'error') errors.push(m.text())
    })
    page.on('pageerror', e => errors.push(String(e)))

    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' })

    const meta = await page.evaluate(() => {
      const get = sel =>
        document.querySelector(sel)?.getAttribute('content') ?? null
      return {
        lang: document.documentElement.lang,
        title: document.title,
        description: get('meta[name="description"]'),
        canonical:
          document
            .querySelector('link[rel="canonical"]')
            ?.getAttribute('href') ?? null,
        ogTitle: get('meta[property="og:title"]'),
        ogType: get('meta[property="og:type"]'),
        ogImage: get('meta[property="og:image"]'),
        ogUrl: get('meta[property="og:url"]'),
        twitterCard: get('meta[name="twitter:card"]'),
        robots: get('meta[name="robots"]'),
        keywords: get('meta[name="keywords"]'),
        h1count: document.querySelectorAll('h1').length,
        h1text: [...document.querySelectorAll('h1')].map(h =>
          h.textContent?.trim()
        ),
        jsonLdType: (() => {
          const s = document.querySelector('script[type="application/ld+json"]')
          if (!s) return null
          try {
            return JSON.parse(s.textContent)['@type']
          } catch {
            return 'PARSE_ERROR'
          }
        })(),
      }
    })

    // Verify OG image actually resolves (not 404).
    const imgStatus = meta.ogImage
      ? (await page.request.get(meta.ogImage)).status()
      : 'none'

    console.log(`\n=== ${path} ===`)
    console.log(JSON.stringify({ ...meta, ogImageStatus: imgStatus }, null, 2))
    console.log(`console errors: ${errors.length}`)
    if (errors.length) console.log(errors)

    if (meta.lang !== 'en') failures++
    if (meta.h1count !== 1) failures++
    if (!meta.canonical) failures++
    if (!meta.ogImage || imgStatus !== 200) failures++
    if (meta.keywords) failures++
    if (errors.length) failures++

    await page.close()
  }

  await browser.close()
  console.log(
    `\n${failures === 0 ? 'ALL CHECKS PASSED' : `FAILURES: ${failures}`}`
  )
  process.exit(failures === 0 ? 0 : 1)
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})
