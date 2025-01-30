import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
      <h1 className='text-4xl bg-orange-800 text-white rounded-lg shadow-lg p-4'>Portfolio in working</h1>
      <p className='text-white p-4'>- Rishav Chaudhary</p>
    </div>
    </>
  )
}

export default App
