import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* pc versition */}
        <ul>
          <div className='flex justify-between w-7xl mx-auto'>
            <div className='flex gap-5'>
              <NavLink><li>Home</li></NavLink>
              <NavLink><li>Product-1</li></NavLink>
              <NavLink><li>Product-2</li></NavLink>
              <NavLink><li>Product-3</li></NavLink>
            </div>


            {/* pc versition right side */}
            <div className='flex gap-5'>
              <NavLink to='users'><li>Users</li></NavLink>
              <NavLink to='login'><li>Sign In</li></NavLink>
              <NavLink to='sign-up'><li>Sign Up</li></NavLink>
              <NavLink to='add-products'><li>Add Product</li></NavLink>
            </div>
          </div>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;