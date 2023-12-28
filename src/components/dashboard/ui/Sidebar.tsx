"use client"

import { useState } from "react";
import {Layout, Menu} from 'antd'; 
import { USER_ROLE } from "@/constant/role";
import { SidebarItems } from "@/constant/sidebaritems";

const { Sider } = Layout;
 
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.USER;
    return (
    <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          

        <h2 className="text-center lg:text-1xl text-[#fff] font-bold mt-5">{USER_ROLE.USER}</h2>
        <h2 className="text-center lg:text-2xl text-[#fff] font-bold mb-5">DashBoard</h2> 

        <Menu theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          style={{ "padding": "10px" }}
          items={SidebarItems(role)}
        />
      </Sider>
  )
}

export default Sidebar