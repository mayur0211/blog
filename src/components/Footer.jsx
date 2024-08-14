import React from 'react';
import { Layout } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="bg-gray-800 text-white py-8  bottom-0 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>

        {/* Section 2 */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="text-sm hover:underline">Home</a></li>
            <li><a href="#" className="text-sm hover:underline">Contact</a></li>
            <li><a href="#" className="text-sm hover:underline">About</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-blue-500"><FacebookOutlined /></a>
            <a href="#" className="hover:text-blue-400"><TwitterOutlined /></a>
            <a href="#" className="hover:text-pink-500"><InstagramOutlined /></a>
            <a href="#" className="hover:text-blue-700"><LinkedinOutlined /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </Footer>
  );
};

export default AppFooter;
