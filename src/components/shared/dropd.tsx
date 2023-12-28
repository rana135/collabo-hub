"use client"
import auth from "@/redux/feature/userSlice/firebase";
import { useAppSelector } from "@/redux/hooks/hooks";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Space } from "antd";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notification from '@/components/dashboard/ui/Notification';

const Dropd = () => {
  const [navbar, setNavbar] = useState(false);
  const {user} = useAppSelector((state) => state.user)
  // dropdown
  const [isOpen, setIsOpen] = useState(false);

  /* const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }; */
  const { Header:HeaderAntDesign } = Layout;
  const items: MenuProps['items'] = [
      {
        key: '0',
        label: (
          <Button type="text" danger onClick={() => {
            signOut(auth).then(() => {
              toast.success("Log Out Sucessfull!!")
            })
          }}>Log Out</Button>
        ),
      }
   ];
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold">Collabo-Hub</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center">
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/">Home</Link>
              </li>
              

              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex justify-center  "
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <span className="flex items-center space-x-2">
                    Categories
                    {isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                  </span>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="/category/monitor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                      role="menuitem"
                    >
                      Monitor
                    </Link>
                  </div>
                </div>
              </div>
{ !user?.email ?
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/login">Login</Link>
              </li> :
              <>
              <li><Notification/></li>
              <li className="text-gray-600 hover:text-blue-600">
              <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
             <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
            </Dropdown>
              </li>
              </>
              }
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </nav>
  );
};

export default Dropd;
