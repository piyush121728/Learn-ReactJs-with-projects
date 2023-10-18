import { useState } from "react"
import Button from "./Button"


function App() {
  const [color, setColor] = useState("black")

  return (
    
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="... flex items-center justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Piyush <span className="text-blue-600 dark:text-blue-500">Kumar</span></h1>

      </div>
      
      <div className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2 ">
        <div className="fixed flex flex-wrap 
        justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <Button colorName="Red" changeColor={() => setColor("Red")} />
          <Button colorName="Blue" changeColor={() => setColor("Blue")} />
          <Button colorName="Green" changeColor={() => setColor("Green")} />
          <Button colorName="Yellow" changeColor={() => setColor("Yellow")} />
          <Button colorName="Pink" changeColor={() => setColor("Pink")} />
          <Button colorName="Purple" changeColor={() => setColor("Purple")} />
          <Button colorName="Lavender" changeColor={() => setColor("Lavender")} />
          <Button colorName="Gray" changeColor={() => setColor("Gray")} />
          <Button colorName="Black" changeColor={() => setColor("Black")} />



        </div>
      </div>
    </div>
  )
}

export default App
