import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.map(eachOne => {
        total += eachOne.price * eachOne.quantity
      })
      return (
        <>
          <div className="cart-summary">
            <h1 className="heading">
              Order Total: <span className="span-amount"> RS {total}/-</span>
            </h1>
            <p className="para">3 items in cart</p>
            <button className="checkout">Checkout</button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
