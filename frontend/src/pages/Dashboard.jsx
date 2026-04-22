import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bookings');
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if(params.get('tab')) {
      setActiveTab(params.get('tab'));
    }
  }, [location.search]);

  const [bookings] = useState([
    { _id: '1', property: 'Modern Glass Villa', type: 'Viewing', date: 'Oct 20, 2026', time: '10:00 AM', status: 'Confirmed', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=150' },
    { _id: '2', property: 'Downtown Tech Loft', type: 'Rental', date: 'Nov 01, 2026', time: 'N/A', status: 'Processing', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=150' },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard?tab=${tab}`);
  };

  const navItems = [
    { id: 'bookings', label: 'Bookings & Viewings', icon: '📅' },
    { id: 'saved', label: 'Saved Properties', icon: '❤️' },
    { id: 'rent', label: 'Tenancy & Payments', icon: '💳' },
    { id: 'maintenance', label: 'Maintenance', icon: '🛠️' },
    { id: 'messages', label: 'Messages', icon: '💬', count: 2 },
    { id: 'profile', label: 'Account Settings', icon: '⚙️' },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem' }}>
        
        {/* Modern Sidebar Nav */}
        <aside className="animate-fade-in-up" style={{ position: 'sticky', top: '6rem' }}>
          <div className="glass" style={{ 
            padding: '2.5rem', 
            borderRadius: 'var(--radius-2xl)', 
            background: 'white',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
               <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '900' }}>JD</div>
               <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.25rem' }}>Jane Doe</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '600' }}>PREMIUM MEMBER</p>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    width: '100%', 
                    padding: '1rem 1.25rem', 
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                    background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                    color: activeTab === item.id ? 'white' : 'var(--text-muted)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.count && (
                    <span style={{ background: activeTab === item.id ? 'rgba(255,255,255,0.2)' : 'var(--accent)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
            
            <button style={{ marginTop: '3rem', width: '100%', padding: '1rem', border: '1px solid #fee2e2', background: '#fef2f2', color: '#ef4444', borderRadius: 'var(--radius-lg)', fontWeight: '700', cursor: 'pointer' }}>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <main className="animate-fade-in-up delay-200">
           <header style={{ marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '900' }}>
                {navItems.find(i => i.id === activeTab)?.label}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>Manage your property portfolio and interactions.</p>
           </header>

           <div className="glass" style={{ minHeight: '600px', background: 'white', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-color)', padding: '2.5rem' }}>
              
              {/* BOOKINGS VIEW */}
              {activeTab === 'bookings' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   {bookings.map(b => (
                     <div key={b._id} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', border: '1px solid #f1f5f9', borderRadius: 'var(--radius-xl)', alignItems: 'center', background: '#f8fafc' }}>
                        <img src={b.img} alt={b.property} style={{ width: '120px', height: '120px', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
                        <div style={{ flex: 1 }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                             <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{b.property}</h3>
                             <span className={`badge ${b.status === 'Confirmed' ? 'badge-sale' : 'badge-rent'}`} style={{ fontWeight: '800' }}>{b.status.toUpperCase()}</span>
                           </div>
                           <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>{b.type} • {b.date} • {b.time}</p>
                        </div>
                        <button className="btn-secondary" style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-lg)' }}>Action Required</button>
                     </div>
                   ))}
                </div>
              )}

              {/* RENT & PAYMENTS VIEW */}
              {activeTab === 'rent' && (
                <div>
                   <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                      <div className="glass" style={{ padding: '2rem', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-xl)' }}>
                         <p style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', opacity: 0.8 }}>NEXT PAYMENT DUE</p>
                         <h2 style={{ fontSize: '3rem', fontWeight: '900', margin: '1rem 0' }}>120,000 ETB</h2>
                         <button style={{ padding: '1rem 2rem', background: 'white', color: 'var(--primary)', border: 'none', borderRadius: 'var(--radius-lg)', fontWeight: '800', width: '100%', marginTop: '1rem' }}>PAY NOW VIA CHAPA</button>
                      </div>
                      <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                         <p style={{ fontWeight: '700', color: 'var(--text-muted)', marginBottom: '1rem' }}>QUICK ACTIONS</p>
                         <button style={{ width: '100%', padding: '0.75rem', marginBottom: '0.5rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', background: 'white', fontWeight: '600' }}>Download Lease</button>
                         <button style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', background: 'white', fontWeight: '600' }}>Request Statement</button>
                      </div>
                   </div>
                   
                   <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '2rem 0 1rem' }}>Payment History</h3>
                   <div style={{ border: '1px solid #f1f5f9', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                      {[1,2,3].map(i => (
                        <div key={i} style={{ padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none', alignItems: 'center' }}>
                           <div>
                             <p style={{ fontWeight: '700' }}>Rent Payment - Oct 2026</p>
                             <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Transaction ID: #URB-992384</p>
                           </div>
                           <div style={{ textAlign: 'right' }}>
                             <p style={{ fontWeight: '800', color: 'var(--primary)' }}>- 120,000 ETB</p>
                             <p style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--secondary)' }}>COMPLETED</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {/* Maintenance View */}
              {activeTab === 'maintenance' && (
                <div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                      <h3 style={{ fontWeight: '800' }}>Request Center</h3>
                      <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-lg)' }}>New Maintenance Request</button>
                   </div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     {[1, 2].map(i => (
                        <div key={i} style={{ padding: '1.5rem', border: '1px solid #f1f5f9', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                           <div style={{ width: '12px', height: '12px', background: i === 1 ? 'var(--secondary)' : 'var(--accent)', borderRadius: '50%' }}></div>
                           <div style={{ flex: 1 }}>
                              <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>{i === 1 ? 'Broken AC Unit' : 'Leaking Kitchen Sink'}</p>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Submitted: Oct 18, 2026 • Status: {i === 1 ? 'Scheduled' : 'Pending Review'}</p>
                           </div>
                           <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>View Details</button>
                        </div>
                     ))}
                   </div>
                </div>
              )}

              {/* Account Settings VIEW */}
              {activeTab === 'profile' && (
                <div style={{ maxWidth: '600px' }}>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                         <div>
                            <label style={{ display: 'block', fontWeight: '700', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>FIRST NAME</label>
                            <input type="text" className="input-base" defaultValue="Jane" />
                         </div>
                         <div>
                            <label style={{ display: 'block', fontWeight: '700', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>LAST NAME</label>
                            <input type="text" className="input-base" defaultValue="Doe" />
                         </div>
                      </div>
                      <div>
                         <label style={{ display: 'block', fontWeight: '700', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>EMAIL ADDRESS</label>
                         <input type="email" className="input-base" defaultValue="jane.doe@example.com" />
                      </div>
                      <div>
                         <label style={{ display: 'block', fontWeight: '700', color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>PHONE NUMBER</label>
                         <input type="tel" className="input-base" defaultValue="+251 911 223 344" />
                      </div>
                      <button className="btn-primary" style={{ width: 'max-content', padding: '1rem 3rem', marginTop: '1rem', borderRadius: 'var(--radius-lg)' }}>Update Profile</button>
                   </div>
                </div>
              )}
           </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

