import { Spin } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SubPage = () => {
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
    }, []);

    return (
        <div className="container mx-auto p-2">
            <div className="grid grid-cols-10 grid-flow-col">
                <div className='col-span-7 mx-2'>
                    {blogDetail == '' ?  <center className='my-2'><Spin  className="custom-spin"/></center> : <>
                        <div className='border-t-2 border-black pt-5 px-4'>
                            <p className='font-bold text-4xl'>{blogDetail?.headline}</p>
                            <p className='font-semibold text-xl mt-1 '>{blogDetail?.title}</p>
                            <p className='text-md text-gray-500 my-4'>{moment(blogDetail?.created_at).format('DD/MMM/YYYY')}</p>
                            <div className='h-[440px]'>
                                <img src={blogDetail?.image} alt="" className='w-full h-full object-cover' />
                            </div>
                            <p className='text-md text-gray-500 mt-4'>{blogDetail?.description}</p>

                            {/* <div className='mt-8'>
                            <p className='text-lg font-bold text-gray-500 my-1'>1. Regulatory Landscape and Market Sentiment</p>
                            <p>
                                <strong className='text-lg font-bold text-gray-500' >●    Uncertainty and Speculation:</strong> Cryptocurrency prices often react to regulatory announcements and policy changes by governments and regulatory bodies worldwide. Uncertainty surrounding legal frameworks, taxation, and compliance requirements can lead to heightened market volatility.
                            </p>
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg font-bold text-gray-500 my-1'>2. Regulatory Landscape and Market Sentiment</p>
                            <p>
                                <strong className='text-lg font-bold text-gray-500' >●    Uncertainty and Speculation:</strong> Cryptocurrency prices often react to regulatory announcements and policy changes by governments and regulatory bodies worldwide. Uncertainty surrounding legal frameworks, taxation, and compliance requirements can lead to heightened market volatility.
                            </p>
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg font-bold text-gray-500 my-1'>3. Regulatory Landscape and Market Sentiment</p>
                            <p>
                                <strong className='text-lg font-bold text-gray-500' >●    Uncertainty and Speculation:</strong> Cryptocurrency prices often react to regulatory announcements and policy changes by governments and regulatory bodies worldwide. Uncertainty surrounding legal frameworks, taxation, and compliance requirements can lead to heightened market volatility.
                            </p>
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg font-bold text-gray-500 my-1'>4. Regulatory Landscape and Market Sentiment</p>
                            <p>
                                <strong className='text-lg font-bold text-gray-500' >●    Uncertainty and Speculation:</strong> Cryptocurrency prices often react to regulatory announcements and policy changes by governments and regulatory bodies worldwide. Uncertainty surrounding legal frameworks, taxation, and compliance requirements can lead to heightened market volatility.
                            </p>
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg font-bold text-gray-500 my-1'>5. Regulatory Landscape and Market Sentiment</p>
                            <p>
                                <strong className='text-lg font-bold text-gray-500' >●    Uncertainty and Speculation:</strong> Cryptocurrency prices often react to regulatory announcements and policy changes by governments and regulatory bodies worldwide. Uncertainty surrounding legal frameworks, taxation, and compliance requirements can lead to heightened market volatility.
                            </p>
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg font-bold text-gray-500 my-1'>6 Regulatory Landscape and Market Sentiment</p>
                            <p>
                                <strong className='text-lg font-bold text-gray-500' >●    Uncertainty and Speculation:</strong> Cryptocurrency prices often react to regulatory announcements and policy changes by governments and regulatory bodies worldwide. Uncertainty surrounding legal frameworks, taxation, and compliance requirements can lead to heightened market volatility.
                            </p>
                        </div>
                        <div className='mt-8 mb-4'>
                            <p className='text-lg font-bold text-gray-500 my-1'>Conclusion</p>
                            <p>
                                Cryptocurrency volatility remains intertwined with regulatory uncertainties, reflecting evolving attitudes towards digital assets and blockchain technology. Regulatory concerns impact market sentiment, liquidity, and institutional adoption, influencing price fluctuations and investment decisions. As global regulatory frameworks continue to evolve, achieving clarity and consensus may mitigate volatility, enhance investor confidence, and foster sustainable growth in the cryptocurrency market. Balancing innovation with regulatory compliance remains pivotal in shaping the future landscape of digital finance and blockchain innovation.
                            </p>
                        </div> */}
                        </div>
                    </>}
                    <div className='border-y-2 border-black pt-5 px-4 '>
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
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubPage