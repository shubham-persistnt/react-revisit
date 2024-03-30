import React from 'react'

function Person({person}){
  return <h4>I am {person.name}. I am {person.age} years old. I know {person.skills}.</h4>
}

export default Person
