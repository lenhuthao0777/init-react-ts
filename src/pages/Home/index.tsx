import { useAppSelector } from '@/src/store/hook'
function Home() {
  const state = useAppSelector((state) => state.auth)

  console.log(state)

  return (
    <>
      <h2>Home</h2>
    </>
  )
}

export default Home
