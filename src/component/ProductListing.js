import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/action/productActions'

export default function ProductListing() {

    const dispatch = useDispatch()
    
    const {data,isLoading} = useSelector((state)=> state.product) 
    
    console.log("data",data)
    useEffect(()=>{
        dispatch(addProduct())
    },[])

  return (
    <div>
      <h1>test</h1>

      {isLoading ? (<>
        Loading...
      </>) : (<>
        <div className="ui grid container">
        {data.map((item) => {
          return (
            <div className="four wide column" key={item.id}>
              <Link to={`/product/${item.id}`}>
                  <div className="ui link cards">
                      <div className="card">
                          <div className="image">
                              <img src={item.image} alt={item.title} />
                          </div>
                          <div className="content">
                              <div className="header">{item.title}</div>
                              <div className="meta price">$ {item.price}</div>
                              <div className="meta">{item.category}</div>
                          </div>
                      </div>
                  </div>
              </Link>
          </div>
          )
        })}
      </div>

      </>)}

    </div>
  )
}
