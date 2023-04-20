import { useState } from 'react'
import { Logo } from './Components/Logo/index'
import { Header } from './Components/Header/index'
import { Article } from './Components/Header/Components/Article/index'
import { Footer } from './Components/Header/Components/Footer/Index'

function App() {
  return (
    <>
      <div className='px-12 py-9 flex flex-col gap-8'>
        <Logo></Logo>
        <Header></Header>
        <Article></Article>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
