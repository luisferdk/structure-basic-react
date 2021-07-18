import React from 'react'

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  )
}

export default List
