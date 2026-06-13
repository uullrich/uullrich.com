import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const W = 1200
const H = 630
const BG = '#14161b'
const ACCENT = '#3eb0ef'
const AMBER = '#f3b31b'

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1b1e26"/>
      <stop offset="100%" stop-color="${BG}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="${ACCENT}"/>
  <text x="90" y="270" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" fill="#ffffff">Uwe Ullrich</text>
  <rect x="92" y="300" width="120" height="8" rx="4" fill="${AMBER}"/>
  <text x="90" y="380" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="500" fill="#c7cdd6">Fullstack Software Engineer</text>
  <text x="90" y="450" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#8a93a3">React · Node.js · C++ · Qt</text>
  <text x="90" y="560" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="600" fill="${ACCENT}">uullrich.com</text>
</svg>`

const run = async () => {
  await mkdir('static', { recursive: true })
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile('static/og-default.jpg')
  console.log('saved static/og-default.jpg')
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})
