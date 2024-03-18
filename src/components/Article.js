import React from 'react'

const Article=(props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Article
