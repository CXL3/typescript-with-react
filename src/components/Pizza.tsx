import React from 'react'

interface Pizza {
  id: number
  name: string
  description: string
  price: number
}

interface Props {
  Pizza: Pizza
}

const Pizza: React.FC<Props> = ({ Pizza }) => {
  return (
    <li>
      <h2>{Pizza.name}</h2>
      <p>{Pizza.description}</p>
      <p>{Pizza.price}</p>
    </li>
  )
}

export default Pizza
