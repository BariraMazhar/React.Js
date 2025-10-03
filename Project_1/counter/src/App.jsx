import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const Increase = () => {
    if(counter >= 100)
      counter = 100
    else
      setCounter(counter + 1)
  }

   const Decrease = () => {
    if(counter <= 0 )
      counter = 0
    else
      setCounter(counter -  1)
  }

  return (
    <>
     <div className='text-center m-50 p-10'> 
      <h2 className='font-bold text-lg'>{counter}</h2>
      <div className='flex justify-center gap-2 '>
        <button onClick={Increase} className='bg-amber-600 text-black text-lg font-semibold hover:bg-amber-500 mt-10 px-4 py-2 rounded-xl'>Increase</button>
        <button onClick={Decrease} className='bg-amber-600 text-black text-lg font-semibold hover:bg-amber-500 mt-10 px-4 py-2 rounded-xl'>Decrease</button>
      </div>
      
     </div>
    </>
  )
}

export default App
