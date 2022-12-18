import React from "react";

function Navbar() {
    return (
        <>
            <div className="navbar pl-4 pr-4 pt-2 pb-3 flex justify-between items-center">
                <div className="left flex justify-center items-center mdx:order-2">
                    <div className="hamburger inline-block p-1 mx-1 mdx:hidden">
                        <div className="line bg-black w-6  h-0.5 my-1"></div>
                        <div className="line bg-black w-6 h-0.5 my-1"></div>
                        <div className="line bg-black w-6 h-0.5 my-1"></div>
                    </div>
                    <div className="search mx-1 mdx:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 stroke-1 cursor-pointer"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="middel flex items-center mx-1 mdx:order-1 px-2">
                    <div className="cursor-pointer flex">
                        <div className="logo mx-1 xl:text-lg">
                            <img src="./images/logo/ms_logo.jpeg" className="w-6 h-6" alt="" />
                        </div>
                        <div className="microsoft mr-3 xl:text-lg">Microsoft</div>
                    </div>
                    <div className="flex ml-3 space-x-3 text-sm mdxl:text-xs lg:text-base xl:text-lg">
                        <div className="logo cursor-pointer mx-1 hover:underline hidden mdx:block">
                            Microsoft 365
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdx:block">
                            Office
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdx:block">
                            Windows
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdx:block">
                            Surface
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdx:block">
                            More
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdx:block mdxl:hidden">
                            ^
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdxl:block">
                            Xbox
                        </div>
                        <div className="microsoft cursor-pointer hover:underline mx-1 hidden mdxl:block">
                            Support
                        </div>
                    </div>
                </div>
                <div className="right flex items-center mx-1 text-sm mdxl:text-xs mdx:order-3 lg:text-base xl:text-lg">
                    <div className="hidden cursor-pointer search mx-1 mdx:block">All Microsoft</div>
                    <div className="hidden cursor-pointer search mx-1 mdx:block">^</div>
                    <div className="hidden cursor-pointer search mx-1 mdx:block">Search</div>
                    <div className="search mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 cursor-pointer stroke-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </div>
                    <div className="hidden cursor-pointer search mx-1 mdx:block">Sign-in</div>
                    <div className="search mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-8 cursor-pointer stroke-slate-400"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
