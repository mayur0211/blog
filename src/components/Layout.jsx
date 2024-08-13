import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

function Layout() {
    const [blogList, setBlogList] = useState([]);
    const getBlogList = async () => {
        try {
            const { data } = await axios.post('https://blogcontrols.fansclubworld.com/api/bloglist', { limit: 4 });
            if (data?.status) {
                setBlogList(data?.data);
            }
        } catch (error) {
        }
    };
    useEffect(() => {
        getBlogList();
    }, []);

    return (
        <>
            <div className='col-span-3 mx-2'>
                <div className='border-y border-black'>
                    <div className='border my-2'>
                        <p className='font-bold text-lg text-center border-b py-5 mx-5'>Blog</p>
                        <p className='p-6 text-center'>Immerse yourself in a world of knowledge and creativity with every page turn.</p>
                    </div>
                </div>
                <div className='border-y border-black mt-2'>
                    <div className='border my-2 sticky top-0'>
                        <div className='flex justify-between border-b py-3 mx-4'>
                            <p className='font-semibold'>Recent</p>
                            <p className='text-primary text-sm'>View All</p>
                        </div>
                        {blogList == '' ? <center className='my-2'><Spin  className="custom-spin"/></center> :
                            <>{blogList?.map((item, index) => (
                                <div key={index} className='flex p-3 '>
                                    <img src={item?.image} alt="img" className='rounded-full object-cover w-[50px] h-[50px] me-3' />
                                    <div className='w-full'>
                                        <Link to={`/blog/${item?.title_slug}`} className='cursor-pointer hover:underline'>{item?.title}</Link>
                                        <p className='text-sm text-primary mt-1'>{moment(item?.created_at).format('DD MMM, YYYY')}</p>
                                    </div>
                                </div>
                            ))}</>
                        }
                    </div>

                </div>
                <div className='border-y border-black mt-2'>
                    <div className='border my-2'>
                        <p className='font-bold text-lg border-b py-5 mx-5'>Explore Topics</p>
                        <div className='grid grid-cols-2'>
                            <div className='flex items-center px-5 gap-3 my-2'>
                                <div className='w-[50px] h-[50px]'>
                                    <img src="https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_1280.jpg" alt="img" className='rounded-full object-cover w-full h-full' />
                                </div>
                                <div>
                                    <p className='text-sm font-semibold mt-2 hover:underline cursor-pointer'>Business</p>
                                    <p className='text-sm text-gray-500 mt-1'>8 Post</p>
                                </div>
                            </div>
                            <div className='flex items-center px-5 gap-3 my-2'>
                                <div className='w-[50px] h-[50px]'>
                                    <img src="https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_1280.jpg" alt="img" className='rounded-full object-cover w-full h-full' />
                                </div>
                                <div>
                                    <p className='text-sm font-semibold mt-2 hover:underline cursor-pointer'>Business</p>
                                    <p className='text-sm text-gray-500 mt-1'>8 Post</p>
                                </div>
                            </div>
                            <div className='flex items-center px-5 gap-3 my-2'>
                                <div className='w-[50px] h-[50px]'>
                                    <img src="https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_1280.jpg" alt="img" className='rounded-full object-cover w-full h-full' />
                                </div>
                                <div>
                                    <p className='text-sm font-semibold mt-2 hover:underline cursor-pointer'>Business</p>
                                    <p className='text-sm text-gray-500 mt-1'>8 Post</p>
                                </div>
                            </div>
                            <div className='flex items-center px-5 gap-3 my-2'>
                                <div className='w-[50px] h-[50px]'>
                                    <img src="https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_1280.jpg" alt="img" className='rounded-full object-cover w-full h-full' />
                                </div>
                                <div>
                                    <p className='text-sm font-semibold mt-2 hover:underline cursor-pointer'>Business</p>
                                    <p className='text-sm text-gray-500 mt-1'>8 Post</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout