import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { SearchContext } from "../context";
import { GetCategory } from "../api";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const { searchText, setSearchText, setSubmitSearch } = useContext(SearchContext);
    const getCategories = async () => {
        try {
            const { data } = await GetCategory();
            if (data?.status) {
                setCategory(data?.data);
            }
        } catch (error) {
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitSearch(prev => prev + 5);
        navigate(`/allcategory`);
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <nav className="bg-white">
            <div className="container mx-auto px-2 lg:px-6 ">
                <div className="flex items-center h-16">
                    <div className="flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            {isOpen ? <CloseOutlined className="h-6 w-6" /> : <MenuOutlined className="h-6 w-6" />}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
                        <div className="text-xl font-bold text-gray-800">
                            <Link to="/">
                                <img src="/assets/imgs/1.png" alt="png" className="h-[70px] py-2" />
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6 w-full">
                            <Menu mode="horizontal">
                                <SubMenu title={<div onClick={e => navigate(`/allcategory`)}> All Post </div>} >
                                </SubMenu>
                                {
                                    category?.map((item, index) => (
                                        <>
                                            <SubMenu key={index} title={item?.name} >
                                                {item?.sub_categories?.map((subItem, subIndex) => (
                                                    <Menu.Item key={`${index}-${subIndex}`}>
                                                        <div onClick={e => navigate(`/category/${subItem.name_slug}`)}>{subItem?.name}</div>
                                                    </Menu.Item>
                                                ))}
                                            </SubMenu>
                                        </>
                                    ))
                                }
                            </Menu>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center">
                        <form className="relative" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 pl-10 border rounded-full text-gray-800 outline-none"
                                onChange={(e) => setSearchText(e.target.value)}
                                value={searchText}
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchOutlined className="text-gray-800" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <Menu mode="inline">
                        <SubMenu title={<div onClick={e => navigate(`/allcategory`)}> All Post </div>} >
                        </SubMenu>
                        {category?.map((item, index) => (
                            <SubMenu key={index} title={item?.name}>
                                {item?.sub_categories?.map((subItem, subIndex) => (
                                    <Menu.Item key={`${index}-${subIndex}`} >
                                        <div onClick={e => navigate(`/category/${subItem.name_slug}`)}>{subItem?.name}</div>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        ))}
                    </Menu>
                </div>
            )}
        </nav>

    );
};

export default Navbar;
