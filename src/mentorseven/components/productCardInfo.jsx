import React from 'react'
import { DocumentData } from 'firebase/firestore'

const ProductCardInfo = ({products}) => {

  return (
    <div>
        {
            products.map((product) => (
                <div key={product.id}>
                <h2>{product.title}</h2>
                <img style={{width: 200,}} src={product.imageUrl} alt={`${product.title} image`} />
                </div>
            ))
        }

    </div>
  )
}

export default ProductCardInfo
