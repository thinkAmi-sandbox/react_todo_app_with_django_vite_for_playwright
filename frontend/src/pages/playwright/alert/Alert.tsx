import {useState} from "react";

export const Alert = () => {
  const [isAlert, setIsAlert] = useState<boolean>(false)

  const handleClick = () => {
    alert('show alert')
    setIsAlert(true)
  }

  return (
    <>
      {isAlert && <p id="result">done alert</p>}

      <button id="show_alert" onClick={handleClick}>Show Alert</button>
    </>
  )
}