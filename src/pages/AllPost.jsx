import React from 'react'
import Layout from '../components/Layout'


const AllPost = () => {
   

    return (

        <div className="container mx-auto p-2">
            <div className="grid grid-cols-10 grid-flow-col">
                <div className='col-span-7 grid grid-cols-3 gap-3 mx-2'>
                    <div className='mb-6'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                        </div>
                        <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                        <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                        <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                        </div>
                        <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                        <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                        <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                        </div>
                        <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                        <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                        <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                        </div>
                        <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                        <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                        <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                        </div>
                        <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                        <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                        <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2022/05/19/01/34/bird-7206444_1280.jpg" alt="img" className='object-cover' />
                        </div>
                        <p className='text-sm text-orange-400 hover:underline mt-2'>Business</p>
                        <p className='text-lg font-semibold hover:underline mt-3'>Leveraging Data Analytics for Better Decision-Making in Business</p>
                        <p className='text-sm text-gray-500 mt-3'>May 19, 2022</p>
                    </div>
                </div>
                <Layout />
            </div>
        </div>
    )
}

export default AllPost