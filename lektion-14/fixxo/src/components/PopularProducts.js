import React, { useEffect } from 'react'
import { useProductContext } from '../contexts/ProductContext'

const PopularProducts = () => {
    const { popular } = useProductContext()    

    return (
        <div>
            { popular.map(product => (<div>{product.name}</div>)) }
        </div>
    )
}

export default PopularProducts