
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook-square } from '@fortawesome/free-solid-svg-icons'


export default function Landig() {
    
 
    return (
        <div className="h-screen relative">
            <div className="flex flex-col h-full pl-12 justify-center">
                <h1 className="text-xl sm:text-7xl font-extrabold text-blue-100">I'm <span className="text-red-400">Seba.</span> Ndagijimana</h1>
                <h4 className="text-white text-xl mt-4">Dev ops engineer, UI&UX designer</h4>
                <div className="mt-12">
                    {/* <a href="/"> <FontAwesomeIcon icon={'facebook-square'} size="1x" /> </a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                    <a href="/"><i class="fa fa-github"></i></a> */}

                </div>
                <img src="/art.png" alt="art " className="absolute bottom-0 right-0 h-2/6 sm:h-4/6"/>
            </div>
            
        </div>
    )
}

