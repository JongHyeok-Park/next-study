export default function Cart() {
  let cartItems = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      {
        cartItems.map((item, i) => {
          return <CartItem name={item} key={i} />
        })
      }
    </div>
  )
} 

function CartItem(props) {
  // Next에서는 컴포넌트 내에서 fetch로 가져오는 경우도 꽤 있음
  // hook을 사용하게 되면 use client 해야하므로 SSR이 불가능하게 됨
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}