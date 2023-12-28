import { 
     
    TableOutlined,
    UserAddOutlined,
    DatabaseOutlined,
    FileExcelOutlined,
    SolutionOutlined,
    CarryOutOutlined,
    FundOutlined,
    ReconciliationOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
import Link from 'next/link';
import { USER_ROLE } from './role';


export const SidebarItems = (role : string) => {
     

    const AdminSidebarItems: MenuProps["items"] = [
        {
          label: <Link href={`/${role}/user-management`}>User Management</Link>,
          icon: <UserAddOutlined />,
          key: `/${role}/user-management,`,
        },
        {
          label: <Link href={`/${role}/service-management`}>Service Management</Link>,
          icon: <TableOutlined />,
          key: `/${role}/service-management`,
        },
        {
          label: <Link href={`/${role}/booking-management`}>Booking Management</Link>,
          icon: <DatabaseOutlined />,
          key: `/${role}/booking-management`,
        },{
          label: <Link href={`/${role}/content-management`}>Content Management</Link>,
          icon: <FileExcelOutlined />,
          key: `/${role}/content-management`,
        },{
          label: <Link href={`/${role}/profile-management`}>Profile Management</Link>,
          icon: <SolutionOutlined />,
          key: `/${role}/profile-management`,
        },
      ];
    
      const UserSidebarItems: MenuProps["items"] = [
        {
          label: "Profile  ",
          key: "profile ",
          icon: <UserOutlined />,
          children: [
            {
              label: <Link href={`/${role}/profile-summary`}>User Profile Summary</Link>,
              key: `/${role}/profile-summary`,
            },
            {
              label: <Link href={`/${role}/edit-profile`}>Edit Profile</Link>,
              key: `/${role}/edit-profile`,
            } 
          ],
        }, 
        {
          label: <Link href={`/${role}/activites-overview`}>Activities Overview</Link>,
          key: `/${role}/activites-overview`,
          icon: <CarryOutOutlined />
        },
        {
          label: <Link href={`/${role}/booking-history`}>Booking History</Link>,
          key: `/${role}/booking-history`,
          icon: <FundOutlined />
        }, {
          label: <Link href={`/${role}/current-booking-status`}>Current Booking Status</Link>,
          key: `/${role}/current-booking-status`,
          icon: <ReconciliationOutlined />
        },
      ]; 

      if (role === USER_ROLE.ADMIN) return AdminSidebarItems; 
      else {
        return UserSidebarItems;
      }

}