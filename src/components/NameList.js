import React from 'react'

function NameList(){
  const userNames = ['Shubham', 'John', 'Danky']
  const userList = userNames.map((name) => <h1>{name}</h1>)

  return <div>{ userList }</div>
}

export default NameList
