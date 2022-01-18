import { Thing, usePrefetch } from 'use-link-prefetch'

const Page = () => {
  const router = usePrefetch(['/about'])
  console.log(router)
  return (
    <div>
      <Thing />
    </div>
  )
}

export default Page
