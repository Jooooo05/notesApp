// import { useState } from 'react'
import HeaderNote from "../components/HeaderNote"
import BuatCatatan from "../components/BuatCatatan"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main className="bg-[#202124] text-white px-28">
      <div className="">
        <HeaderNote />
      </div>

      {/* body */}
      <div className="">
        {/* buat catatan */}
        <div className="mt-8 mb-5 flex justify-center">
          <BuatCatatan />
        </div>
        {/* buat catatan */}
      </div>
      {/* body */}
    </main>  
    </>
  )
}

export default App
