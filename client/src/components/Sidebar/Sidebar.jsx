import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
const [toggle, setToggle] = useState(false);

  return (
    <div className='absolute left-0 top-0 z-[5]'>
        { toggle ? (
         <div className='flex flex-col gap-5 relative bg-slate-400 bg-opacity-90 w-[320px] lg:hidden p-3 rounded-r-md'>
            <div 
                className='absolute top-1 right-4 rounded-[50%] hover:scale-110 text-black hover:text-slate-500'
                onClick={() => setToggle(!toggle)}
                >x</div>
            <div className="item">
                <Link className ="link" to="/about">Про нас</Link>
            </div>
            <div className="item">
                <Link className ="link" to="/contact">Контакти</Link>
            </div>
            <div className="item">
                <Link className ="link" to="/">Магазини</Link>
            </div>
            <div className="item">
                <Link className ="link" to="/products/1">Жінки</Link>
            </div>
            <div className="item">
                <Link className ="link" to="/products/2">Чоловіки</Link>
            </div>
            <div className="item">
                <Link className ="link" to="/products/3">Чоловіки</Link>
            </div>
          </div>
        ) : (
            <div 
                onClick={() => setToggle(!toggle)}
                className='lg:hidden text-sm w-[55px] h-[35px] text-black  pt-5 pl-5 rounded-md bg-slate-400 relative top-5 left-5'>
                <h1 className='absolute top-2 left-2 text-center hover:text-slate-500'>
                    Menu
                </h1>
               
            </div>
        ) }
    </div>    
  )
}

export default Sidebar
