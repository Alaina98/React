import React, { useState } from 'react'

export default function Counter() {
    let [x,xset]=useState(0)
  return (
    <>
    <h1>count is :{x}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={deincrement}>deincrement</button>
    
    </>
  )
  function increment(){
    xset(++x)
  }
  function deincrement(){
    xset(--x)
  }
}
