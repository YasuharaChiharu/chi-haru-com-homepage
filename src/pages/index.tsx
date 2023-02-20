import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import MenuPanel from 'components/MenuPanel'
import Stars from 'components/Stars'

const Home: NextPage = () => {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    setDisplay(true)
  }, [])

  return (
    <div className="App">
      <Stars />
      {display && <MenuPanel />}
    </div>
  )
}

export default Home
