import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div className='mb-6'>
            <div className='h-[230px]'>
                <img src={blog?.image} alt="img" className='object-cover h-full w-full' />
            </div>
            <p className='text-sm text-orange-400 hover:underline mt-2 mb-1'>{blog?.sub_category?.name}</p>
            <Link to={`/blog/${blog.title_slug}`} className='text-lg font-semibold hover:underline mt-2'>{blog?.title}</Link>
            <p className='text-sm text-gray-500 mt-3'>{moment(blog?.created_at).format('DD MMM, YYYY')}</p>
        </div>
    )
}

export default BlogCard