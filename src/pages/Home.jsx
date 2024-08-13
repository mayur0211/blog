import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from 'axios';

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  const getBlogList = async () => {
    try {
      const { data } = await axios.post('http://192.168.1.25:8000/api/bloglist', { limit: 6 });
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
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-10 grid-flow-col">
          <div className='col-span-7 mx-2'>
            <div className='flex justify-between border-t-2 border-black pt-5 px-4'>
              <p className='font-bold text-lg'>Editor's Pick </p>
              <p className='text-sm text-primary'>View All</p>
            </div>

            <div className="grid grid-cols-10 border-b-2 border-black">
              <div className='col-span-6'>
                <div className='p-3'>
                  <div className='h-[540px]'>
                    <img src="https://cdn.pixabay.com/photo/2024/06/18/21/37/bali-8838762_640.jpg" alt="" className='w-full h-full object-cover' />
                  </div>
                  <p className='text-sm text-orange-400 mt-2'>TECHNOLOGY</p>
                  <Link to="allpost">
                    <p className='hover:underline font-semibold text-3xl mb-3'>Self-Driving Cars: Everything You Need to Know aszdfasdf</p>
                  </Link>
                  <p className='text-md text-gray-500 mt-4'>Sep 14, 2023</p>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='p-3'>
                  <div className='h-[200px]'>
                    <img src="https://cdn.pixabay.com/photo/2024/07/26/01/58/bird-8922501_640.jpg" alt="" className='w-full h-full object-cover' />
                  </div>
                  <p className='text-sm text-orange-400 mt-2'>TECHNOLOGY</p>
                  <p className='hover:underline font-semibold text-xl mb-2'>Self-Driving Cars: Everything You Need to Know aszdfasdf</p>
                  <p className='text-md text-gray-500 mt-2'>Sep 14, 2023</p>
                </div>
                <div className='p-3'>
                  <div className='h-[200px]'>
                    <img src="https://cdn.pixabay.com/photo/2024/08/01/10/18/bird-8936789_1280.jpg" alt="" className='w-full h-full object-cover' />
                  </div>
                  <p className='text-sm text-orange-400 mt-2'>TECHNOLOGY</p>
                  <p className='hover:underline font-semibold text-xl mb-2'>Self-Driving Cars: Everything You Need to Know aszdfasdf</p>
                  <p className='text-md text-gray-500 mt-2'>Sep 14, 2023</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between my-5'>
              <p className='font-bold text-lg'>Trends</p>
              <p className='text-sm text-primary'>View All</p>
            </div>
            <div className='grid grid-cols-2 gap-4 border-b-2 border-black py-4'>
              <div>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2024/01/09/13/08/wooden-house-8497574_1280.jpg" alt="img" className='object-cover' />
                </div>
                <p className='text-md text-gray-500 mt-2 mb-4'>Sep 14, 2023</p>
                <p className='hover:underline font-semibold text-xl'>The Importance of Corporate Social Responsibility</p>
                <p className='text-md text-gray-500 mt-2'>The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.</p>
                <div className='flex justify-between gap-4 mt-4'>
                  <div className='w-1/3'>
                    <img src="https://cdn.pixabay.com/photo/2024/01/09/13/08/wooden-house-8497574_1280.jpg" alt="img" className='object-cover' />
                  </div>
                  <div>
                    <p className='hover:underline font-semibold text-sm'>Global Chip shortage to Hurt Computer Firms During Festive Season</p>
                    <p className='text-md text-gray-500 mt-2'>Sep 14, 2023</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2024/01/09/13/08/wooden-house-8497574_1280.jpg" alt="img" className='object-cover' />
                </div>
                <p className='text-md text-gray-500 mt-2 mb-4'>Sep 14, 2023</p>
                <p className='hover:underline font-semibold text-xl'>The Importance of Corporate Social Responsibility</p>
                <p className='text-md text-gray-500 mt-2'>The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.</p>
                <div className='flex justify-between gap-4 mt-4'>
                  <div className='w-1/3'>
                    <img src="https://cdn.pixabay.com/photo/2024/01/09/13/08/wooden-house-8497574_1280.jpg" alt="img" className='object-cover' />
                  </div>
                  <div>
                    <p className='hover:underline font-semibold text-sm'>Global Chip shortage to Hurt Computer Firms During Festive Season</p>
                    <p className='text-md text-gray-500 mt-2'>Sep 14, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between my-5'>
              <p className='font-bold text-lg'>Latest</p>
            </div>
            {blogList?.map((item, index) => (
              <div key={index} className='flex items-center justify-between mb-4'>
                {/* <div key={index} className='grid grid-cols-2 mb-4'> */}
                <div className='w-full'>
                  <p className="text-sm text-orange-400 mt-2">{item?.sub_category?.name}</p>
                  <Link to={`/blog/${item?.title_slug}`}><p className='hover:underline font-semibold text-xl mb-2'>{item?.title}</p></Link>
                  <div className="text-md text-gray-500 mt-2 line-clamp-2 " dangerouslySetInnerHTML={{ __html: item?.description }}></div>
                </div>
                  <img src={item?.image} alt="img" className='object-cover w-[100px] h-[100px] ms-2 rounded-lg' />
              </div>

            ))}
            {/* <button className='border-primary border rounded-full py-1 px-4 text-primary'>View More</button> */}
          </div>
          <Layout />
        </div>
      </div>

    </>
  )
}

export default Home