import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const buildDirectory = resolve(root, 'dist')
const outputDirectory = resolve(root, 'artifacts')
const archive = resolve(outputDirectory, 'the-math-of-venture-capital.zip')

if (!existsSync(resolve(buildDirectory, 'index.html'))) {
  throw new Error('Missing production build. Run bun run package:site.')
}

mkdirSync(outputDirectory, { recursive: true })
// Recreate the archive so removed or renamed build files cannot linger.
rmSync(archive, { force: true })
execFileSync('zip', ['-q', '-r', '-X', archive, '.'], {
  cwd: buildDirectory,
  stdio: 'inherit',
})

// index.html sits at the archive root, alongside all bundled site assets.
execFileSync('unzip', ['-tq', archive], { stdio: 'inherit' })
console.log(`Upload: ${archive}`)
console.log(`Size: ${(statSync(archive).size / 1024 / 1024).toFixed(2)} MiB`)
