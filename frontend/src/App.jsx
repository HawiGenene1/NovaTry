import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Dashboard from './pages/Dashboard';
import MapSearch from './pages/MapSearch';
import Documents from './pages/Documents';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isAdmin && (
        <nav className="glass sticky-nav" style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          padding: '1.25rem 0',
          borderBottom: '1px solid var(--border-color)',
          transition: 'all 0.3s ease'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="logo-brand" style={{ margin: 0, fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-0.025em' }}>
              <Link to="/" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🏘️</span>
                UrbanNest
              </Link>
            </h1>
            
            <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              <Link to="/properties" className="nav-link">Properties</Link>
              <Link to="/map" className="nav-link">Map Search</Link>
              <Link to="/documents" className="nav-link">Documents</Link>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </div>
            
            <div className="nav-actions" style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/login" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-md)', fontWeight: '600', color: 'var(--text-main)' }}>Login</Link>
              <Link to="/signup" className="btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>Sign Up</Link>
            </div>
          </div>
        </nav>
      )}

      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/map" element={<MapSearch />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;
