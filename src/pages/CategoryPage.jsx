import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import { Spin } from 'antd';


const CategoryPage = () => {
    const { slug } = useParams();
    const [blogList, setBlogList] = useState([])
    const getBlog = async () => {
        try {
            const { data } = await axios.post('https://blogcontrols.fansclubworld.com/api/bloglist', { slug });
            if (data?.status) {
                setBlogList(data?.data);
            }
        } catch (err) {

        }
    }
    useEffect(() => {
        getBlog();
    }, [slug])


    return (

        <div className="container mx-auto p-2">
            <div className="grid grid-cols-10 grid-flow-col">
                <div className='col-span-7 grid grid-cols-3 gap-3 mx-2'>
                    {blogList == '' ? <div className=' flex justify-center items-center col-span-3 my-5'><Spin tip="Loading..." size='large' className="custom-spin" /></div> :
                        (
                            blogList?.map(item => {
                                return <BlogCard key={item?.id} blog={item} />
                            })
                        )
                    }
                </div>
                <Layout />
            </div>
        </div>
    )
}

export default CategoryPage