import React from 'react'

function NameList(){
  const userNames = ['Shubham', 'John', 'Danky']
  const userList = userNames.map((name, index) => <h1 key={index}>{name}</h1>)

  return <div>{ userList }</div>
}

export default NameList
