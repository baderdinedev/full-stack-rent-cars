import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCar, FaUsers, FaCalendarAlt, FaMoneyBillWave, 
  FaChartLine, FaCog, FaBell, FaSearch, 
  FaFilter, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import CountUp from 'react-countup';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ApexCharts from 'react-apexcharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Sample data - replace with your actual data
  const stats = [
    { id: 1, title: 'Total Bookings', value: 1243, icon: <FaCalendarAlt />, change: +12.5 },
    { id: 2, title: 'Active Vehicles', value: 87, icon: <FaCar />, change: +5.2 },
    { id: 3, title: 'Registered Users', value: 2541, icon: <FaUsers />, change: +18.7 },
    { id: 4, title: 'Total Revenue', value: 584200, icon: <FaMoneyBillWave />, prefix: 'TND ', change: +22.3 }
  ];

  const bookingData = [
    { id: 1, customer: 'Mohamed Ali', car: 'Toyota RAV4', date: '2023-06-15', status: 'Completed', amount: 450 },
    { id: 2, customer: 'Amina Ben Salah', car: 'Mercedes S-Class', date: '2023-06-16', status: 'Ongoing', amount: 1200 },
    { id: 3, customer: 'Youssef Trabelsi', car: 'Hyundai Tucson', date: '2023-06-17', status: 'Upcoming', amount: 350 },
    { id: 4, customer: 'Leila Ben Ammar', car: 'Volkswagen Golf', date: '2023-06-18', status: 'Upcoming', amount: 280 }
  ];

  const revenueData = [
    { name: 'Jan', revenue: 40000 },
    { name: 'Feb', revenue: 30000 },
    { name: 'Mar', revenue: 60000 },
    { name: 'Apr', revenue: 48000 },
    { name: 'May', revenue: 90000 },
    { name: 'Jun', revenue: 105000 }
  ];

  const vehicleTypeData = [
    { name: 'Sedan', value: 35 },
    { name: 'SUV', value: 25 },
    { name: 'Luxury', value: 20 },
    { name: 'Electric', value: 15 },
    { name: 'Others', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // Calendar events
  const calendarEvents = [
    { title: 'Booking: Mohamed - Mercedes', start: '2023-06-15T10:00:00', end: '2023-06-18T10:00:00' },
    { title: 'Maintenance: Toyota RAV4', start: '2023-06-16T09:00:00', end: '2023-06-16T12:00:00' },
    { title: 'Insurance Renewal', start: '2023-06-20' }
  ];

  // ApexCharts configuration
  const chartOptions = {
    series: [{
      name: 'Revenue',
      data: [40000, 30000, 60000, 48000, 90000, 105000]
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ['#4F46E5'],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 2 },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      tooltip: {
        y: {
          formatter: (val) => `TND ${val.toLocaleString()}`
        }
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white shadow-lg z-10"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary-900 flex items-center gap-2">
            <FaCar className="text-accent-500" />
            <span>Tunisia</span><span className="text-accent-500">Rent</span>
          </h1>
        </div>
        <nav className="mt-6">
          {[
            { name: 'Overview', icon: <FaChartLine />, tab: 'overview' },
            { name: 'Bookings', icon: <FaCalendarAlt />, tab: 'bookings' },
            { name: 'Vehicles', icon: <FaCar />, tab: 'vehicles' },
            { name: 'Customers', icon: <FaUsers />, tab: 'customers' },
            { name: 'Finances', icon: <FaMoneyBillWave />, tab: 'finances' },
            { name: 'Settings', icon: <FaCog />, tab: 'settings' }
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`flex items-center w-full px-6 py-3 text-left transition-colors ${activeTab === item.tab ? 'bg-accent-50 text-accent-600 border-r-4 border-accent-500' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="relative w-96">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search dashboard..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-gray-500 hover:text-gray-700"
              >
                <FaBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white">
                    <span>MA</span>
                  </div>
                  <span className="hidden md:inline text-gray-700">Admin</span>
                  {userMenuOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                </button>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
                    >
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-100">Sign out</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Overview Tab */}
          <AnimatePresence mode='wait'>
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.id}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                          <p className="text-2xl font-bold mt-1">
                            {stat.prefix || ''}
                            <CountUp 
                              end={stat.value} 
                              duration={2.5} 
                              separator=","
                            />
                          </p>
                        </div>
                        <div className={`p-3 rounded-lg ${stat.change >= 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                          {stat.icon}
                        </div>
                      </div>
                      <p className={`text-sm mt-3 ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}% from last month
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {/* Revenue Chart */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
                    <ApexCharts 
                      options={chartOptions.options} 
                      series={chartOptions.series} 
                      type="area" 
                      height={350} 
                    />
                  </div>

                  {/* Vehicle Types Pie Chart */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Vehicle Types</h3>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={vehicleTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {vehicleTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value} vehicles`, 'Count']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Recent Bookings & Calendar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Bookings */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Recent Bookings</h3>
                      <button className="flex items-center text-sm text-accent-500 hover:text-accent-600">
                        <FaFilter className="mr-1" /> Filter
                      </button>
                    </div>
                    <div className="h-[400px]">
                      <DataGrid
                        rows={bookingData}
                        columns={[
                          { field: 'customer', headerName: 'Customer', width: 150 },
                          { field: 'car', headerName: 'Vehicle', width: 150 },
                          { field: 'date', headerName: 'Date', width: 120 },
                          { 
                            field: 'status', 
                            headerName: 'Status', 
                            width: 120,
                            renderCell: (params) => (
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                params.value === 'Completed' ? 'bg-green-100 text-green-800' :
                                params.value === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {params.value}
                              </span>
                            )
                          },
                          { 
                            field: 'amount', 
                            headerName: 'Amount', 
                            width: 120,
                            renderCell: (params) => (
                              <span className="font-medium">TND {params.value}</span>
                            )
                          }
                        ]}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection={false}
                      />
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Schedule</h3>
                    <FullCalendar
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                      }}
                      events={calendarEvents}
                      height="400px"
                      eventColor="#4F46E5"
                      nowIndicator
                      editable
                      selectable
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Tabs */}
            {activeTab !== 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center h-64"
              >
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-500">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
                  </h3>
                  <p className="text-gray-400 mt-2">Content for {activeTab} will appear here</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Notifications Panel */}
      <AnimatePresence>
        {notificationsOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-20"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-medium">Notifications</h3>
              <button 
                onClick={() => setNotificationsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <div className="text-center py-8 text-gray-400">
                No new notifications
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;