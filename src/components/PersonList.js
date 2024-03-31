import React from 'react'
import Person from './Person'

function PersonList(){
  const persons = [
      {
        id: 1,
        name: 'Shubham',
        age: 30,
        skills: 'Ruby on Rails, react'
      },
      {
        id: 2,
        name: 'John',
        age: 40,
        skills: 'Ruby on Rails'
      },
      {
        id: 3,
        name: 'Danky',
        age: 50,
        skills: 'React'
      }
    ]
    
  const personList = persons.map(person => <Person key={person.id} person={person} />)

  return <div>{personList}</div>
}

export default PersonList
