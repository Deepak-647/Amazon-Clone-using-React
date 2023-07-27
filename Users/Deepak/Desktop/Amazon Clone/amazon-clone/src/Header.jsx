import React from "react";
import Search from "./Search";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {   useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const cart = useSelector((state)=>state.cart.productsNumber)
  return (
    <div className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}> <img
            className="h-[35px] w-[100px] m-2"
            src={"../images/amazon.png"}
            alt="Amazon logo"
          /></Link>
          

          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">
              Rourkela,Odisha
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

          <div className="flex items-center">
            <Link to='/checkout'>
            <BsCart className="h-[40px] w-[40px] text-lg" />
            <div className="relative">
              <div className='absolute left-[17px] bottom-[9px] text-orange-600 -bold'>
               {cart}
              </div>
            </div>
            </Link>
            
            
           
          </div>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </div>
  );
};

export default Header;
