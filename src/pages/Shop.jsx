import React, {useState, useEffect } from 'react'
import {db} from '../firebase'
import {getDocs, collection} from 'firebase/firestore'
const Shop = () => {
    const[products, setProducts] = useState([]);
    const productsCollectionRef = collection(db, 'products');
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
          
         const filterData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  
        }
        getProducts();
    }, [])
  return (
    <div>
      <h1>i am shop page</h1>
    </div>
  )
}

export default Shop
