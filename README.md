![image](https://user-images.githubusercontent.com/69138026/149915882-9354c15f-df43-4157-a15f-6737ad32c53a.png)
# use-prefetch-link

A highly simple library that fetches multiple links at once.  
> To be used with **Next.js only**

[![NPM](https://img.shields.io/npm/v/use-link-prefetch.svg)](https://www.npmjs.com/package/use-link-prefetch)
![Downloads](https://badgen.net/npm/dw/use-link-prefetch)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Size without zipping](https://badgen.net/bundlephobia/min/use-link-prefetch)
![License](https://badgen.net/npm/license/use-link-prefetch)
![Types included](https://badgen.net/npm/types/use-link-prefetch)

## Installation


```bash
npm i use-prefetch-link
```
```bash
yarn add use-prefetch-link
```
## Usage 📖

```js
import { usePrefetch } from 'use-link-prefetch'

const Page = () => {

  const router = usePrefetch(['/dashboard', '/support'])

  return (
    <div>
      Hello world
    </div>
  )
}

export default Page
```
