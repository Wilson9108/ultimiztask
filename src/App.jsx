import { use, useState } from 'react'

import './App.css'

function App() {
  const [product, setproduct] = useState("")
  const [price, setprice] = useState("")
  const[perror,setperror] = useState("")
  const [priceerror,setPriceError] = useState("")
  const[value,setValues] = useState("")
  const [priceValue,setPriceValue] = useState("")
  const [productData,setProductData]= useState([])

  console.log(price)
  function handleForm(e){
    e.preventDefault()
    if(!product){
      setperror("product name cannot  be empty")
      
    }else{
      setperror("")
    }
    if(!price){
      setPriceError("PRICE CANNOT BE EMPTY")
      return
    }
    else{
      setPriceError("")
    }
    // setValues(product)
    // setPriceValue(price)
    setProductData([...productData,{product,price:Number(price)}])
  }

  let totalPrice = productData.reduce((acc,curr)=>{
    return acc+Number(curr.price)
  },0)


  



  return (
    <>
    <div>
      <form onSubmit={handleForm}>
      <input type="text" placeholder='productname' value={product} onChange={(e)=>setproduct(e.target.value)}/>
      <small>{perror}</small>
      <br></br>
      <input type='text' placeholder='product price' value={price} onChange={(e)=>setprice(e.target.value)}  />
      <small>{priceerror}</small>
      <br></br>
      <button>submit</button>
      </form>
      {/* <h1>{product}</h1>
      <h1>{price}</h1> */}
      <div>
      <h3>Output Result</h3>
      <h4>SalePrice</h4>

      {productData.map(item=>(
              <ul>
              <li>{item.product} <span style={{margin:"0px 5px"}}>{item.price}</span></li>

            </ul>

      ))}

      </div>
      <div>
        <h4>Total Price</h4>
        <p>{totalPrice}</p>
       
      </div>
      
    </div>
    
    </>
  )
}

export default App
