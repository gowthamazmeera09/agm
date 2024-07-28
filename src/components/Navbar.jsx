import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';


function Navbar() {
    const {cartItems} = useContext(CartContext);
    return (
        <div>
            <header className="text-gray-600 body-font fixed w-full top-0 bg-white z-10 shadow">
                <div class="container mx-auto flex flex-wrap p-2 flex-col fixed-top md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link className="navbar" to="/">gowtham</Link>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link class="mr-5 hover:text-gray-900" to="/">Home</Link>
                        <Link class="mr-5 hover:text-gray-900" to="Products">Products</Link>
                        <Link class="mr-5 hover:text-gray-900" to="About">About</Link>
                        <Link class="mr-5 hover:text-gray-900" to="Contact">Contact</Link>
                    </nav>
                    <div className='Cart-buttons'>
                        <Link to="Cart" class="flex mx-auto mt-0 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Cart
                        <span className='Cart-length'>{cartItems.length}</span>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;