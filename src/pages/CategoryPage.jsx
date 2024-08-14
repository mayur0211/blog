import React, { useEffect, useState, useContext } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import { Spin } from 'antd';
import { SearchContext } from '../context';



const CategoryPage = () => {
    const { slug } = useParams();
    const [blogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchText, submitSearch } = useContext(SearchContext);

    const getBlog = async () => {
        setLoading(true)
        setBlogList(prev => [])
        try {
            const params = {
                slug,
                search: searchText,
                limit: 10000
            }
            const { data } = await axios.post('https://blogcontrols.fansclubworld.com/api/bloglist', params);
            if (data?.status) {
                setBlogList(data?.data);
                setLoading(false)
            } else {
                setLoading(false)
            }
        } catch (err) {
            setLoading(false)
        }
    }

    useEffect(() => {
        getBlog();
    }, [submitSearch])

    return (

        <div className="container mx-auto p-2">
            <div className="grid grid-cols-10 grid-flow-col">
                <div className='col-span-7 grid grid-cols-3 gap-3 mx-2'>
                    {loading ? <div className=' flex justify-center items-center col-span-3 my-5'><Spin tip="Loading..." size='large' className="custom-spin" /></div> :
                        blogList.length ? (
                            blogList?.map(item => {
                                return <BlogCard key={item?.id} blog={item} />
                            })
                        ) : <div className=' flex justify-center items-center col-span-3 my-5'>No Record Found</div>
                    }
                </div>
                <Layout />
            </div>
        </div>
    )
}

export default CategoryPage