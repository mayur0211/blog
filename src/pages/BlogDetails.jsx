import { Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const BlogDetails = () => {

    const { slug } = useParams();
    const [blogDetail, setBlogDetail] = useState([]);
    const getBlogDetail = async () => {
        try {
            const { data } = await axios.post('http://192.168.1.25:8000/api/blogdetail', { slug });
            if (data?.status) {
                setBlogDetail(data?.data);
            }
        } catch (error) {
        }
    };
    useEffect(() => {
        getBlogDetail();
    }, [slug]);

    return (
        <div className="container mx-auto p-2">
            <div className="grid grid-cols-10 grid-flow-col">
                <div className='col-span-7 mx-2'>
                    {blogDetail == '' ? <div className='my-2 h-[calc(100vh-250px)] justify-center flex items-center'><Spin tip="Loading..." size='large' className="custom-spin"  /></div> : <>
                        <div className='border-t-2 border-black pt-5 px-4'>
                            <p className='font-bold text-4xl'>{blogDetail?.headline}</p>
                            <p className='font-semibold text-xl mt-1 '>{blogDetail?.title}</p>
                            <p className='text-md text-gray-500 my-4'>{moment(blogDetail?.created_at).format('DD/MMM/YYYY')}</p>
                            <div className='h-[440px]'>
                                <img src={blogDetail?.image} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='text-md text-gray-500 mt-4 mb-2' dangerouslySetInnerHTML={{ __html: blogDetail?.description }}></div>
                        </div>
                    </>}
                    {/* <div className='border-y-2 border-black pt-5 px-4 '>
                        <div className='flex justify-between '>
                            <p className='font-bold text-xl'>Related Posts </p>
                            <p className='text-sm text-primary'>View All</p>
                        </div>
                        <div className='grid grid-cols-3 mt-3 gap-3 mb-2'>
                            <div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                                </div>
                                <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                                <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                                <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                                </div>
                                <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                                <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                                <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                                </div>
                                <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                                <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                                <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-2 border-black pt-5 px-4 mt-4'>
                        <div className='flex justify-between '>
                            <p className='font-bold text-xl'>More Article by Anderson </p>
                            <p className='text-sm text-primary'>View All</p>
                        </div>
                        <div className='grid grid-cols-3 mt-3 gap-3 mb-2'>
                            <div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                                </div>
                                <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                                <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                                <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                                </div>
                                <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                                <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                                <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                                </div>
                                <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                                <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                                <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Layout />
            </div>
        </div>
    )

}

export default BlogDetails