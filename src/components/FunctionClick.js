import React from 'react'

function FunctionClick(){
  
  function logName(){
    console.log("Clicked from Function")
  }

  return(
    <div>
      <button onClick={logName}>Click me</button>
    </div>
  )
}

export default FunctionClick
