import React from 'react'
import { useState } from "react";

const Emoji = () => {

    const [emoji, setEmoji] = useState("😇");

    const handleReset = () =>
    {
          setEmoji("😇")
    }

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Emoji App 🐱👤🐺</h1>
        <hr />
        <div className="text-center">
        <h2 className="mt-4 mb-4">El emoji es: {emoji}</h2>
        <button className="btn btn-success" onClick={()=>setEmoji("😁")}>Feliz</button>
        <button className="btn btn-info ms-2" onClick={handleReset}>Resetar</button>
        <button className="btn btn-danger ms-2" onClick={()=>{setEmoji("😥")}}>Triste</button>
        </div>
      </div>
    </>
  )
}

export default Emoji