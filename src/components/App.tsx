import React from 'react'
import pizzas from '../data/pizzas.json'
import Pizza from './Pizza'
import AppCSS from './App.Module.css'

const App = () => {
  return (
    <div className={AppCSS.container}>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} Pizza={pizza} />
        })}
      </ul>
    </div>
  )
}

export default App
