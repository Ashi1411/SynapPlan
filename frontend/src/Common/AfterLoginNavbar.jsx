import React from 'react'
import '../styles/global.css'
import { Link } from 'react-router-dom';

export default function AfterLoginNavbar() {
  return (
    <div style={{ backgroundColor: "var(--navbar-background-color)"}} className='flex justify-between items-center px-8 py-3 fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md border-b border-white/30 shadow-sm z-50'>
        <div>
            Logo
        </div>
        <div>
            <nav style={{color: "var(--navbar-link-color)", fontSize : "var(--navbar-link-size)"}}>
                <ul className='flex gap-[16px]'>
                    <p> Hi Ashi 👋</p>
                    <p>{new Date().toLocaleDateString()}</p>
                    <p className='cursor-pointer'> Bell Icon </p>
                    <p className='cursor-pointer'> Profile Icon </p>
                </ul>
            </nav>
        </div>
    </div>
  )
}
