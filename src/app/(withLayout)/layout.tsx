import Sidebar from "@/components/dashboard/ui/Sidebar";
import { Layout } from 'antd';
import Contents from '../../components/dashboard/ui/Contents';

const DashboardLayout = ({children} : { children: React.ReactNode }) => {
    return (
      <Layout hasSider>
          <Sidebar/>
          <Contents>
              {children}
          </Contents>
      </Layout>
    );
  };
  export default  DashboardLayout;