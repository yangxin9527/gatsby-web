import React from "react"

const Person = ({ pageContext }) => {
  const { name, age } = pageContext
  return (
    <div>
      person
      <div>
        {name},{age}
      </div>
    </div>
  )
}

export default Person
