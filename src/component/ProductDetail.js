import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/action/productActions'

export default function ProductDetail() {

    const dispatch = useDispatch()
    const { id } = useParams()

    const { data, isLoading } = useSelector((state) => state.selectedProduct)

    useEffect(() => {
        dispatch(selectedProduct(id))
    }, [id,dispatch])

    return (
        <div>
            {isLoading ? (<>
                Loading...
            </>) : (<>
                <div className="ui grid container">
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                        <div className="column lp">
                            <img alt="{data.title}" className="ui fluid image" src={data.image} />
                        </div>
                        <div className="column rp">
                            <h1>{data.title}</h1>
                            <h2>
                            <h2 className="ui teal tag label">${data.price}</h2>
                            </h2>
                            <h3 className="ui brown block header">{data.category}</h3>
                            <p>{data.description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content">
                                <i className="shop icon"></i>
                            </div>
                            <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>)}



        </div>
    )
}
