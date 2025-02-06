import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div className='max-w-6xl mx-auto flex justify-between p-2 px-5'>
            
            <div className='w-[55%] flex flex-col p-2'>
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            <div className=' w-[40%] flex flex-col justify-between items-start mt-12 mb-4 '>
                <div>
                  <div className=' text-green-800 font-semibold text-2xl'>YOUR CART</div>
                  <div className=' text-green-700 font-bold text-5xl'>SUMMARY</div>
                  <p className='font-semibold text-gray-700 text-xl mt-5'>Total Items: <span className=' font-normal'>{cart.length}</span></p>
                </div>

                <div>
                  <p className='font-semibold text-gray-700 text-xl'>Total Amount : <span className='text-black'>${totalAmount}</span></p>
                  <button className='w-full capitalize text-white bg-green-700 py-2 px-9 rounded-lg font-bold cursor-pointer
                   hover:text-green-700 border-2 border-black border-transparent hover:border-black hover:bg-purple-50 transition duration-300 ease-in mt-5'>
                    CheckOut Now
                  </button>
                </div>
            </div>
          </div>) :
          
          (<div className=" min-h-[80vh] flex flex-col justify-center items-center gap-y-6">
            <h1 className=' font-semibold text-lg text-gray-700'>Your cart is empty!</h1>
            <Link to={"/"}>
              <button className=' uppercase text-white bg-green-700 py-3 px-9 rounded-lg font-semibold cursor-pointer
               hover:bg-white hover:text-green-700 border-2 border-transparent hover:border-green-700  transition duration-300 ease-in'>
                Shop Now
              </button>
            </Link>
          </div>)
      }

    </div>
  )
}

export default Cart