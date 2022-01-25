import { usePrefetch } from 'use-link-prefetch'

const Page = () => {
  const router = usePrefetch(['/about'])
  console.log(router)
  return (
    <div>
      Hello world
    </div>
  )
}

export default Page
