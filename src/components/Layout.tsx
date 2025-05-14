import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <motion.main 
        className="flex-grow p-4 md:p-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </motion.main>
      <footer className="bg-white py-4 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-neutral-500 text-center">
            &copy; {new Date().getFullYear()} Staff Management System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;