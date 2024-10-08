import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import moment from 'moment';
import { Spin } from 'antd';
import { GetBlogListByLimit, GetBlogListBySlug } from '../api';

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  const [topThree, setTothree] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogList = async () => {
    setLoading(true);
    try {
      const { data } = await GetBlogListByLimit({ limit: 50 });
      if (data?.status) {
        setBlogList(data?.data);
        setLoading(false);
      } else {
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
    }
  };
  const getCategoryWiseBlog = async () => {
    try {
      const { data } = await GetBlogListBySlug({ slug: "fitness-exercise" });
      if (data?.status) {
        setTothree(data?.data.slice(0, 3));
      }
    } catch (err) {
    }
  };
  useEffect(() => {
    getBlogList();
    getCategoryWiseBlog();
  }, []);

  return (
    <>
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-10 grid-flow-col">
          {loading ? <div className='col-span-7 flex items-center justify-center '><Spin tip="Loading..." size='large' className="custom-spin" /></div> :
            blogList.length ? (<div className='col-span-7 mx-2'>
              <div className='flex justify-between border-t-2 border-black pt-5 px-4'>
                <p className='font-bold text-lg'>Fitness Exercise </p>
                <Link to="/category/fitness-exercise"> <p className=' hover:underline text-sm text-primary'>View All</p></Link>
              </div>
              <div className="grid grid-cols-10 border-b-2 border-black">
                <div className='col-span-6'>
                  <div className='p-3'>
                    <div className='h-[540px]'>
                      <img src={topThree?.[0]?.image} alt="" className='w-full h-full object-cover' />
                    </div>
                    <p className='text-sm text-orange-400 mt-2'>{topThree?.[0]?.sub_category?.name}</p>
                    <Link to={`/blog/${topThree?.[0]?.title_slug}`} className=' hover:underline font-semibold text-3xl mb-3' >{topThree?.[0]?.title}</Link>
                    <p className='text-md text-gray-500 mt-4'>{moment(topThree?.[0]?.created_at)?.format('DD MMM, YYYY')}</p>
                  </div>
                </div>
                <div className='col-span-4'>
                  {[topThree[1], topThree[2]].filter(item => item).map((item, index) => (
                    <div className='p-3'>
                      <div key={index} className='h-[200px]'>
                        <img src={item?.image} alt="" className='w-full h-full object-cover' />
                      </div>
                      <p className='text-sm text-orange-400 mt-2'>{item?.sub_category?.name}</p>
                      <Link to={`/blog/${item?.title_slug}`} className='hover:underline font-semibold text-xl mb-2'>{item?.title}</Link>
                      <p className='text-md text-gray-500 mt-2'>{moment(item?.created_at)?.format('DD MMM, YYYY')}</p>
                    </div>))}
                </div>
              </div>
              <div className='flex justify-between my-5'>
                <p className='font-bold text-lg'>Latest</p>
              </div>
              {blogList?.map((item, index) => (
                <div key={index} className='flex items-center justify-between mb-4'>
                  <div className='w-full'>
                    <p className="text-sm text-orange-400 mt-2">{item?.sub_category?.name}</p>
                    <Link to={`/blog/${item?.title_slug}`}><p className='hover:underline font-semibold text-xl mb-2'>{item?.title}</p></Link>
                    <div className="text-md text-gray-500 mt-2 line-clamp-2 " dangerouslySetInnerHTML={{ __html: item?.description }}></div>
                  </div>
                  <img src={item?.image} alt="img" className='object-cover w-[100px] h-[100px] ms-2 rounded-lg' />
                </div>
              ))
              }
            </div>) : <div>data not found</div>
          }
          <Layout />
        </div>
      </div>

    </>
  )
}

export default Home