import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const getCategories = async () => {
        try {
            const { data } = await axios.post('http://192.168.1.25:8000/api/category');
            if (data?.status) {
                setCategory(data?.data);
            }
        } catch (error) {
        }
    };
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <nav className="bg-white border-b">
            <div className="container mx-auto px-2 lg:px-6">
                <div className=" flex items-center h-16">
                    <div className="flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
                            {/* <span className="sr-only">Open main menu</span> */}
                            <svg
                                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className=" text-xl font-bold text-gray-800">
                            Blog
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {
                                    category?.map((item, index) => (
                                        <div key={index} className="relative group text-nowrap">
                                            <span className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">{item?.name}</span>
                                            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-full text-center">
                                                <a href="#" className="block  py-1 text-gray-800 hover:bg-gray-200"> Item 1</a>
                                                <a href="#" className="block  py-1 text-gray-800 hover:bg-gray-200"> Item 2</a>
                                                <a href="#" className="block  py-1 text-gray-800 hover:bg-gray-200"> Item 3</a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" sm:flex sm:items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 pl-10 border rounded-full text-gray-800 outline-none"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </div>
                        </div>
                        {/* <div className="ml-3 space-x-2">
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* <a href="#" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium" > Business </a>
                    <a href="#" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium" > Technology </a>
                    <a href="#" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium" > Economy </a>
                    <a href="#" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium" > Fashion </a>
                    <a href="#" className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium" > Author </a> */}
                    <div className="relative group">
                        <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">All Post</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Business</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Technology</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Economy</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Fashion</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 3</a>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Author</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 2</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"> Item 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
