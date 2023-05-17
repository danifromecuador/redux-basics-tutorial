import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/ModalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currenty emtpy</h4>
        </header>
      </section>
    )
  }

  return <section className="cart">
    <header>
      <h2>your bag</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
    <footer>
      <hr />
      <div className="cart-total">
        <h4>total <span>${total.toFixed(2)}</span> </h4>
      </div>
      <button className="btn clear-btn" onClick={() => dispatch(openModal()) }>clear cart</button>
    </footer>
  </section>

  return (
    <div>CartContainer</div>
  )
}

export default CartContainer;