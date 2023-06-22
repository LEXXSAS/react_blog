import React from 'react'
import { useEffect, useState } from "react"
import { DocumentData } from 'firebase/firestore'
import ProductCardInfo from './productCardInfo'
import {db} from '../firebase'
import { collection, onSnapshot, doc, addDoc, deleteDoc, orderBy, query, getDocs } from 'firebase/firestore'
import { AppContext } from '../components/context'


const ProductCards = () => {
    const {products, setProducts} = React.useContext(AppContext)

    const recipesCollectionRef = collection(db, 'cups')
    const q = query(recipesCollectionRef)

    useEffect(() => {
      onSnapshot(q, snapshot => {
        setProducts(snapshot.docs.map(doc => {
        const productsMap = {id: doc.id, viewing: false, ...doc.data()}
          return productsMap;
      }))
    })
    }, [])


  return (
    <div>
        <ProductCardInfo products={products} />
    </div>
  )
}

export default ProductCards
