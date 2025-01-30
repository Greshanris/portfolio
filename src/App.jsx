import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen bg-slate-900 flex flex-col justify-center items-center'>
      <h1 className='text-3xl bg-orange-800 text-white rounded-lg shadow-lg p-4'>Portfolio on Work</h1>
      <p className='text-white m-4'>- Rishav Chaudhary</p>
    </div>
    </>
  )
}

export default App
