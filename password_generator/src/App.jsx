import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const pswdRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pswd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqerrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+-={}[]`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pswd += str.charAt(char)
    }

    setPassword(pswd)
  }, [length, numAllow, charAllow, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])
  
  const copyPassword = useCallback(() => {
    pswdRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <h1 className="text-4xl text-center text-white pt-16 pb-7">Password Generator</h1>      
      <div className="w-full max-w-xl mx-auto shadow-lg rounded-lg px-8 py-6 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 mt-3" placeholder="Password" readOnly ref={pswdRef} />
          <button className="outline-none bg-blue-600 text-white px-3 py-1 shrink-0 mt-3" onClick={copyPassword} >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" value={length} min={6} max={100} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllow} id="numInput" onChange={() => {setNumAllow((prev) =>   !prev)}}/>
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllow} id="charInput" onChange={() => {setCharAllow((prev) => !prev)}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
