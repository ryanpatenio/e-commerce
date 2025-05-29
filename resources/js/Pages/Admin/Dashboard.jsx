
import StatsCards from '../../Components/Admin/Dashboard/StatsCard';
import TopProducts from '../../Components/Admin/Dashboard/TopProducts';
import RecentOrders from '../../Components/Admin/Dashboard/RecentOrders';
import OrderStatus from '../../Components/Admin/Dashboard/OrderStatus';
import SalesReport from '../../Components/Admin/Dashboard/SalesReport';
import AdminLayout from '../../Layouts/AdminLayout';

 function Dashboard() {
  return (
    <div className="container-fluid">
      <h1 className="h2">E-commerce</h1>
      
      <div className="row">
        <StatsCards />
      </div>

      <div className="row">
        <TopProducts />
        <RecentOrders /> 
      </div>
                
      <div className="row">
         <OrderStatus />
      </div>
      
      <div className="row">
        <SalesReport />
      </div>
    </div>
  );
}

Dashboard.layout = page => <AdminLayout children={page} title="Dashboard" />

export default Dashboard;