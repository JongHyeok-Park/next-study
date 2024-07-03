export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        products.map((item, i) => {
          return (
            <div className="food" key={i}>
              <img src={'/food' + i + '.png'} alt="food" width="100%"/>
              <h4>{item} $40</h4>
            </div>
          )
        })
      }
    </div>
  )
}