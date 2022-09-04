import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

const style = {
  wrapper: 'h-screen w-screen flex flex-col'
}

const Home: NextPage = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
