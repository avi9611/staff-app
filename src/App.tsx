import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StaffList from './pages/StaffList';
import StaffCreate from './pages/StaffCreate';
import StaffDetail from './pages/StaffDetail';
import StaffEdit from './pages/StaffEdit';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StaffList />} />
        <Route path="staff/create" element={<StaffCreate />} />
        <Route path="staff/:id" element={<StaffDetail />} />
        <Route path="staff/:id/edit" element={<StaffEdit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;