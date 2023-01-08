import {useState} from "react";

export const Clipboard = () => {
  const [isSave, setIsSave] = useState<boolean>(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText('data from clipboard')
    setIsSave(true)
  }

  return (
    <>
      {isSave && <p id="result">saved!</p>}

      <button id="copy_clipboard" onClick={handleClick}>Save Clipboard</button>
    </>
  )
}