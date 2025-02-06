import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();
  
  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className='flex justify-between items-center gap-x-10 border-b-[2px] my-2 py-5 border-gray-500'>
      <div className='w-1/3'>
        <img src={item.image} width="150px" alt=''/>
      </div>
      <div className='space-y-5'>
        <h1 className='font-semibold text-gray-800 text-xl'>{item.title}</h1>
        <p className=' text-gray-600 text-sm font-medium'>{item.description.length > 100 ? item.description.slice(0,100) + '...': item.description}</p>

        <div className='flex justify-between items-center'>
          <p className='font-bold text-green-600'>${item.price}</p>
          <div className='w-[40px] aspect-square rounded-full flex justify-center items-center bg-red-200 hover:bg-red-400 transition duration-100 ease-in cursor-pointer group' onClick={removeFromCart}>
            <MdDelete className=' text-red-900 text-xl group-hover:text-white'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem