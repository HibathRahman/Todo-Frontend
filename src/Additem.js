import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";


const Additem = ({inputValue , handleSubmit , setInputValue}) => {
  //   useRef mostlu used for input focus after click button 
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="additem">Add Item</label>
        <input 
            type="text" 
            required
            placeholder='Add Item'
            id='additem'
            autoFocus
            onChange={(e)=>setInputValue(e.target.value)}
            value = {inputValue}
            ref={inputRef}
        />
        <button
            type='submit'
            onClick={()=>inputRef.current.focus()}
         >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem