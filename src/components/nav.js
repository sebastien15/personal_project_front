import React, {useEffect, useState} from 'react'

export default function Nav() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }, []);
    
    if(offset > 50){
        console.log(offset)
        handleScroll();
    }else{
        const navTop = document.querySelector('.nav-top');
        if(navTop){
            removeScrollStyles();
        }
        
    }

    return (
        <div   onScroll={handleScroll}>
            <nav className="flex w-full flex-row text-white  nav-top" >
                <div className="flex flex-row  w-9/12 sm:w-full items-center p-4 sm:p-7">
                    <div className="sm:w-4/12 ">
                        <h1 className="font-extrabold text-2xl  sm:text-5xl text-gray-100 ">Sebastien .</h1>
                    </div>
                    <div className="sm:w-6/12 hidden sm:block ">
                        <a href="#" className="mr-6 hover:text-gray-400">Home</a>
                        <a href="#" className="mr-6 hover:text-gray-400">About</a>
                        <a href="#" className="mr-6 hover:text-gray-400">Blog</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="sm:w-2/12 hidden sm:flex flex-row">
                        <button className="border border-red-500 p-4 px-6 ml-auto ">Let's talk</button>
                    </div>
                </div>
                <div className="w-3/12 sm:hidden flex flex-col items-center justify-center" onClick={openNavigation}>
                    <div className="h-1 w-5 bg-indigo-100 mb-1"></div>
                    <div className="h-1 w-5 bg-indigo-100 mb-1"></div>
                    <div className="h-1 w-5 bg-indigo-100"></div>
                </div>
            </nav>
            <div className="nav-phone w-9/12  flex flex-col border-r-4  border-blue-100 text-base text-white p-6 pt-10 hidden">
                <a href="#" className="mr-6 hover:text-gray-400 mb-6">Home</a>
                <a href="#" className="mr-6 hover:text-gray-400 mb-6">About</a>
                <a href="#" className="mr-6 hover:text-gray-400 mb-6">Blog</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

function openNavigation () {
    const phoneNav = document.querySelector('.nav-phone');
    phoneNav.classList.toggle('hidden');
}



function handleScroll () {
    const navTop = document.querySelector('.nav-top');
    navTop.classList.add('bg-indigo-900');
    navTop.classList.add('fixed');
    console.log(navTop.classList)
}

function removeScrollStyles () {
    const navTop = document.querySelector('.nav-top');
    if(navTop.classList.contains('bg-indigo-900')){
        navTop.classList.remove('bg-indigo-900');
    }
}