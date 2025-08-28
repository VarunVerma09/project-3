import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IconsManifest } from 'react-icons/lib';

const Nav = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-5 fixed-top">

        <div className="container-fluid">

          <Link className="navbar-brand" to="#">Production</Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link" to="#"><i className="bi bi-geo-alt-fill"></i> Up-NCR, 245206</Link>
              </li>
            </ul>

            <form className="d-flex mx-auto search-box">
              <input className="form-control me-2" type="search" placeholder="What are you looking for?" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>


            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item h4 accout"><Link className="nav-link " to="/userpage">Account</Link> <div><button className='btn1 ' >LogIN</button></div></li>
              <li className="nav-item"><Link className="nav-link" to="#"><FaRegHeart className='h3' /></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cardpage"><AiOutlineShoppingCart className='h3' /></Link></li>
            </ul>
          </div>
        </div>

      </nav>
    <div className="container-fluid col-md-12 d-flex px-5 cus-mar">
  <ul className="nav py-2 w-100 justify-content-between">
    <li className="nav-item"><Link className="nav-link" to="#">Balls</Link></li>
    <li className="nav-item"><Link className="nav-link" to="#">Cricket Kits</Link></li>
    <li className="nav-item"><Link className="nav-link" to="#">Cricket Bats</Link></li>
  </ul>
</div>

    </>
  );
}

export default Nav;
