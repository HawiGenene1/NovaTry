import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#0f172a', 
      color: '#94a3b8', 
      paddingTop: '6rem', 
      paddingBottom: '3rem', 
      marginTop: 'auto',
      borderTop: '1px solid #1e293b'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
        gap: '4rem', 
        marginBottom: '6rem' 
      }}>
        {/* Brand Section */}
        <div style={{ paddingRight: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'white', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
            Urban<span style={{ color: 'var(--primary)' }}>Nest</span>
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '2rem', fontSize: '1rem' }}>
            We are redefining the property journey through innovation, transparency, and a commitment to excellence. Find your sanctuary with UrbanNest.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
             {/* Social Mock Icons */}
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>FB</div>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>TW</div>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>IG</div>
          </div>
        </div>
        
        {/* Links Sections */}
        <div>
          <h3 style={{ fontSize: '0.875rem', color: 'white', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '2px' }}>Directory</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li><Link to="/properties" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Marketplace</Link></li>
            <li><Link to="/properties?type=rent" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Rentals</Link></li>
            <li><Link to="/properties?type=sale" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Sales</Link></li>
            <li><Link to="/dashboard" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Portal</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ fontSize: '0.875rem', color: 'white', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '2px' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li><Link to="#" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Governance</Link></li>
            <li><Link to="#" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Privacy Policy</Link></li>
            <li><Link to="#" style={{ color: 'inherit', fontWeight: '500', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>Cookie Terms</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ fontSize: '0.875rem', color: 'white', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '2px' }}>Global Headquarters</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
            123 Nest Avenue, Suite 400<br/>
            New York, NY 10012<br/>
            <span style={{ color: 'white', fontWeight: '600' }}>+1 (555) 123-4567</span>
          </p>
          <button style={{ 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '1rem',
            width: '100%',
            borderRadius: 'var(--radius-lg)',
            color: 'white',
            fontWeight: '700',
            cursor: 'pointer'
          }}>
            Contact Support &rarr;
          </button>
        </div>
      </div>
      
      <div className="container" style={{ borderTop: '1px solid #1e293b', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} UrbanNest Technologies Ltd. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
           <span>SECURITY</span>
           <span>ISO CERTIFIED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

