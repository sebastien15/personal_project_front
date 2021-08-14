import React from 'react'

export default function LetsTalk() {
    return (
        <div className="sm:p-10 mb-54">
            
            <h2 className="text-2xl sm:text-7xl font-extrabold m-auto text-center text-white mb-20 capitalize z-10">Let's Talk</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:w-4/5 m-auto z-10 p-5">
                <div className="w-full sm:w-7/12 border border-red-500 p-4 sm:p-14 rounded-md mb-10">
                    <h4 className="text-xl sm:text-3xl font-extrabold m-auto text-center text-white mb-10 capitalize">Get in touch</h4>
                    <div>
                        <div className="flex justify-between">
                            <input placeholder="First name" name="firstName" className="outline-none w-5/12 text-white text-base p-2 py-4 bg-transparent border-transparent border-b border-red-500"/>
                            <input placeholder="last name" name="lastName" className="outline-none w-5/12 text-white text-base p-2 py-4 bg-transparent border-transparent border-b border-red-500"/>
                        </div>
                        <input placeholder="Email" name="Email" className="w-full outline-none text-white text-base p-2 py-4 bg-transparent border-transparent border-b border-red-500"/>
                        <input placeholder="Subject" name="Subject" className="w-full outline-none text-white text-base p-2 py-4 bg-transparent border-transparent border-b border-red-500"/>
                        <textarea name="firstName" className="mb-10 w-full outline-none text-white text-base p-2 py-4 bg-transparent border-transparent border-b border-red-500"> Message </textarea>
                        <button className="w-full p-3 border border-red-400 text-white">Send</button>
                    </div>
                </div>
                <div className="w-full sm:w-4/12">
                    
                    <div className="border border-red-500 rounded-md p-5 mb-5 text-white text-center py-5">
                        <h5 className="font-bold text-xl">Rwanda, Kigali KG316st</h5>
                        <div>
                            <span></span>
                            <h5>Office Address</h5>
                        </div>
                    </div>
                    <div className="border border-red-500 rounded-md p-5 mb-5 text-white text-center py-5">
                        <h5 className="font-semibold text-xl">ndase15ba@gmail.com</h5>
                        <div>
                            <span></span>
                            <h5>Email Address</h5>
                        </div>
                    </div>
                    <div className="border border-red-500 rounded-md p-5 mb-5 text-white text-center py-5">
                        <h5 className="font-bold text-xl">+250 788 451 691</h5>
                        <div>
                            <span></span>
                            <h5>Phone Number</h5>
                        </div>
                    </div>
                    <div className="border border-red-500 rounded-md p-5 mb-5 text-white text-center py-5">
                        <h5 className="font-bold text-xl mb-10">You want more?</h5>
                        <div>
                            <span></span>
                            <a href="/resume.docx" download className="border border-red-500 p-2 ">Download my cv</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="/sectionbg.jpg" alt="section background" className="absolute w-screen top-0 h-screen z-0 left-0"/> */}
        </div>
    )
}
