import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href={`/product/${product._id}`} class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={product.image} alt="" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{product.brand}</span>
                                    <h2 class="mt-2 mb-2  font-bold">{product.name.substring(0,19)}</h2>
                                    <p class="text-sm">{product.description.substring(0,50)}</p>
                                    <div class="mt-3 flex items-center">
                                        <span class="text-sm font-semibold"></span>&nbsp;<span class="font-bold text-xl">{product.price}</span>&nbsp;<span class="text-sm font-semibold">€</span>
                                    </div>
                                </div>
                                <div class="p-4 border-t border-b text-xs text-gray-700">
                                    <span class="flex items-center mb-1">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-900 mr-2 w-4 h-4" /> In Stock {product.countInStock}
          </span>
                                    <span class="flex items-center">
                                    <FontAwesomeIcon icon={faCreditCard} className="text-gray-900 mr-2 w-4 h-4" /> Credit Card
          </span>
                                </div>
                                <div class="p-4 items-center text-sm text-gray-600">
                                    <Rating value={product.rating}
                                    text={`${product.numReviews} Reviews`}
                                    />
                                    </div>
                            </a>
                        </div>


              
        </>
    )
}

export default Product
