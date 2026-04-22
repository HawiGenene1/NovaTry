import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      {/* Overlay to darken background */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)' }}></div>

      <div className="animate-fade-in-scale" style={{ 
        position: 'relative',
        width: '100%', 
        maxWidth: '480px', 
        padding: '3rem', 
        borderRadius: 'var(--radius-2xl)', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '0.5rem' }}>UrbanNest</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Login to access your premium dashboard</p>
        </div>

        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="animate-fade-in-up delay-100">
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-main)' }}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              id="email" 
              className="input-base" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: '1rem', border: '1px solid #e2e8f0', background: '#f8fafc' }}
              required 
            />
          </div>
          <div className="animate-fade-in-up delay-200">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label htmlFor="password" style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-main)' }}>PASSWORD</label>
              <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>Forgot?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              className="input-base" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: '1rem', border: '1px solid #e2e8f0', background: '#f8fafc' }}
              required 
            />
          </div>
          
          <button type="submit" className="btn-primary animate-fade-in-up delay-300" style={{ padding: '1rem', fontSize: '1rem', fontWeight: '700', width: '100%', marginTop: '0.5rem' }}>
            Sign in to Portal
          </button>
        </form>

        <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
            New to UrbanNest? <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: '700' }}>Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

