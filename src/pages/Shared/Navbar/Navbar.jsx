/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
         <Link to= "/listing"> Listings </Link>
         <Link to= "/blog"> Blogs </Link>
        </div>
    );
};

export default Navbar;