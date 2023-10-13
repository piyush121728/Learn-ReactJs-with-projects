import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  //Required Variables
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // passwordGenerator using react useCallback hook which generate the password in optimize way
  const passwordGenerator = useCallback(() => {

    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";

    if (numAllowed) { str += "0123456789"; }

    if (charAllowed) { str += "!@#$%^&*-_+=[]{}~`"; }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  // copyPassword using react useCallback hook which copy the password to clipboard in optimize way
  const copyPassword = useCallback(() => {

    //code snipet to highlight the selected content
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);

    //code snipet to copy the password
    window.navigator.clipboard.writeText(password);

  }, [password]);

  // Here, we use the react useEffect hook to call the passwordGenerator function when user tigger any of the variable and state among length, charAllowed, numAllowed and passwordGenerator
  useEffect(() => { passwordGenerator() }, [length, charAllowed, numAllowed, passwordGenerator]);



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-8 text-orange-500 bg-gray-700">

        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg 
        overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className=" outline-none bg-blue-700
          text-white px-3 py-0.5 shrink-0 hover:bg-sky-700 ..."
            onClick={copyPassword}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => { setNumAllowed((prev) => !prev) }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label>Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
