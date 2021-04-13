import React from 'react'
import {useState,useEffect} from 'react'
import Navbar from '../../components/Header'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Rating from '../../components/Rating'
import axios from 'axios'


const Prod = () => {
    const router = useRouter()
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(true)


    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${router.query.id}`)
            setProduct(data)
            setLoading(false)
        }


    const timer = setTimeout(() => {
        fetchProduct();
      }, 1000);
  
      return () => clearTimeout(timer);

    },[loading])
    console.log(product)

        return (
            <>
                <Navbar />
                <div className="pt-40 px-10 flex">
                    <Link href="/" >
                        <div className="text-black font-semibold cursor-pointer">
                            Go Back
                    </div>
                    </Link>
                </div>

    
                <div className="mb-20 flex w-full space-x-5">
    
                    <div className="mx-10 w-1/2 flex">
                        <img src={product.image} />
                    </div>
    
                    <div className="w-1/3 flex flex-col">
                        <div className="w-3/4 text-2xl pb-4 text-gray-500 font-semibold border-b  border-gray-300">{product.name}</div>
    
                        <div className="w-3/4 border-gray-300 py-6 border-b">
                            <Rating value={product.rating}
                                text={`${product.numReviews} Reviews`}
                            />
                        </div>
    
                        <div className="w-3/4 text-lg text-gray-500 py-6 border-b border-gray-300">
                            Price: $ {product.price}
                        </div>
    
                        <div className="w-3/4 text-base my-6 text-gray-600">
                            {product.description}
                        </div>
    
    
                    </div>
    
                    <div className="w-1/5 px-10">
                        <div className="flex flex-col border border-gray-400 w-full">
                            <div className="text-sm border-b py-5 px-5 flex justify-between">Price:${product.price}</div>
                            <div className="text-sm py-5 px-5">Status: {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</div>
                            <button class="bg-gray-700 hover:bg-gray-400 text-white font-bold p-2 my-4 mx-5 rounded-lg">
                                ADD TO CART</button>
    
                        </div>
                    </div>
    
                </div>
    
            </>
        )
    

   
}

export default Prod
