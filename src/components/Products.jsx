import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext';

function Products() {
    var [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setItems(res.data);
            setAllItems(res.data)
        })
    }, [])
    if (!items) {
        return <div>Loading.......</div>
    }
    var filterItems = (category) => {
        var updatedItems = allItems.filter((item) => item.category === category);
        setItems(updatedItems);
    };
    return (
        <div className='product-page md:mx-3'>
            <div className='container'>
                <div className='row my-5 p-4'>
                    <h1>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className='buttons text-center mb-5'>
                <button className='me-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg' onClick={() => setItems(allItems)}>All</button>
                <button className='me-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg' onClick={() => filterItems("men's clothing")}>Men's</button>
                <button className='me-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg' onClick={() => filterItems("women's clothing")}>Women's</button>
                <button className='me-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg' onClick={() => filterItems("jewelery")}>Jewelery</button>
                <button className='me-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg' onClick={() => filterItems("electronics")}>Electronics</button>
            </div>


            <div className='Products-row'>
                {
                    items.map((product) => {
                        return <div className='product-list' key={product.id}>
                            <a href={`Pro/${product.id}`}> <img src={product.image} className='product-img' width="200px" alt={product.title} /></a>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">${product.price}</h2>
                            <div className='card-btn'>
                                <a class="flex mx-auto mt-0 text-white bg-indigo-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded text-lg" href={`Pro/${product.id}`}>view details</a>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="flex mx-auto mt-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Products;
