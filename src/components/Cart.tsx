import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import CartCSS from './Cart.module.css'

interface Props {}

interface State {
  //Keep a flag to decide whether to show or hide the card
  isOpen: boolean
}

// Pass the two interface
class Cart extends React.Component<Props, State> {
  //Initialize the state, create a constructor, take props as arguement, describe it as Props
  constructor(props: Props) {
    //super- constructor of the parent class.
    super(props)
    //Initializd the state
    this.state = {
      // has it closed on the start
      isOpen: false,
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // if ((e.target as HTMLElement).nodeName === 'SPAN') {
    //   (e.target as HTMLSpanElement).;
    // }
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button
          className={CartCSS.button}
          type='button'
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>2 pizza(s) </span>
        </button>
        <div
          className={CartCSS.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none',
          }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Cart
