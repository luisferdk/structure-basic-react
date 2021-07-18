import React from 'react'
import List from '../../components/List'
const Users = () => {
  const items = ["Luis", "Sidney", "Alejandro"]
  return (
    <div>
      <h4>Soy el Users</h4>
      <List items={items} />
    </div>
  )
}

export default Users
