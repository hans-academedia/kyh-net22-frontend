import React, { useEffect } from 'react'
import { useProductContext } from '../contexts/ProductContext'

const FeaturedProducts = () => {
    const { featured } = useProductContext()

    

    return (
        <div>
            { featured.map(product => (<div>{product.name}</div>)) }
        </div>
    )
}

export default FeaturedProducts