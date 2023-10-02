import glob from 'fast-glob'
import * as path from 'path'

async function importDemo(demoFilename) {
  let { meta, default: component } = await import(
    `../pages/demos/${demoFilename}`
  )
  return {
    slug: demoFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllDemos() {
  let demoFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/demos'),
  })

  let demos = await Promise.all(demoFilenames.map(importDemo))

  return demos.sort((a, z) => new Date(z.date) - new Date(a.date))
}
