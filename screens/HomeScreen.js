import React from 'react'
import {useState,useEffect} from 'react'
import Product from '../components/Product'
import Link from 'next/link'
import axios from 'axios'

const HomeScreen = () => {

const [products,setProducts] = useState([])

useEffect(() => {
    const fetchProducts = async () => {
        const {data} = await axios.get('/api/hello')
        setProducts(data)
    }

    fetchProducts()
},[])


    return (
        <div className="py-40 px-20">
            <h1>Latest Products</h1>
            <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4">
                    {products.map((products) => (
                        <Product key={products._id} product={products} />


                    ))}

                </div>
            </div>
        </div>
    )
}

export default HomeScreen

