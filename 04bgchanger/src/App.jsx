import { useState } from "react"
import Button from "./Button"


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2 ">
        <div className="fixed flex flex-wrap 
        justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <Button colorName="Red" changeColor={() => setColor("Red")} />
          <Button colorName="Blue" changeColor={() => setColor("Blue")} />
          <Button colorName="Green" changeColor={() => setColor("Green")} />
          <Button colorName="Yellow" changeColor={() => setColor("Yello")} />
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
