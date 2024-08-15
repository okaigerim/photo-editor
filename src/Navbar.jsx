import React from 'react'

export const Navbar = ({setBackground}) => {
  return (
    <div className='navbar'>
      <span>Photo Editor</span>
      <input 
        type='text' 
        placeholder='Image link'
        onChange={(e) => {setBackground(e.target.value)}} 
      />
    </div>
  )
}
