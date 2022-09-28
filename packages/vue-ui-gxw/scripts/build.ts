import config from './../vite.config'

import {build,defineConfig,InlineConfig,UserConfig} from 'vite'
import path from 'path'
import fs from 'fs-extra'


const buildAll = async()=>{
  const srcDir = path.resolve(__dirname,"../src/")
  fs.readdirSync(srcDir).filter((name)=>{
    const componentsDir = path.resolve(srcDir,name)
    const isDir = fs.lstatSync(componentsDir).isDirectory()
    return isDir && fs.readdirSync(componentsDir).includes("index.ts")
  }).forEach(async(name)=>{
    const outDir = path.resolve(config.build.outDir||'',name)
    
    const custom = {
      lib:{
        entry:path.resolve(srcDir,name),
        name,
        fileName:'index',
        formats:['esm','umd']
      },
      outDir
    }
    Object.assign(config.build,custom)
    await build(defineConfig(config as UserConfig) as InlineConfig)

    console.log('outDir::',path.resolve(outDir,'package.json'));


    fs.writeFile(path.resolve(outDir,'package.json'),`
    {
      "name":"vue-ui-gxw/${name}",
      "main":"index.umd.js",
      "module":"index.umd.js"
    }
    `,`utf-8`)
  })
}

buildAll()

