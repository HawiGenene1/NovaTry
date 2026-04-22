import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?search=${searchQuery}&type=${propertyType}`);
  };

  const categories = [
    { id: 'residential', title: 'Residential', icon: '🏠', count: '1,200+' },
    { id: 'apartments', title: 'Apartments', icon: '🏢', count: '850+' },
    { id: 'villas', title: 'Villas', icon: '🌴', count: '320+' },
    { id: 'commercial', title: 'Office', icon: '🏬', count: '450+' },
  ];

  const featured = [
    { id: 1, title: 'Modern Glass Villa', location: 'Beverly Hills, CA', price: '$4,500/mo', beds: 4, baths: 3, img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Downtown Tech Loft', location: 'San Francisco, CA', price: '$3,200/mo', beds: 2, baths: 2, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Azure Beachfront Condo', location: 'Miami, FL', price: '$2,800/mo', beds: 3, baths: 2, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  ];

  const testimonials = [
    { name: 'Sarah Jenkins', role: 'Tenant', text: 'UrbanNest made finding my dream apartment incredibly easy. The interface is just beautiful.', avatar: 'https://i.pravatar.cc/150?img=44' },
    { name: 'Michael Chen', role: 'Owner', text: 'The best platform for property management. The analytics dashboard is a game changer.', avatar: 'https://i.pravatar.cc/150?img=11' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        position: 'relative',
        height: '92vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.3)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container animate-fade-in-up" style={{ zIndex: 10 }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(99, 102, 241, 0.1)', 
              border: '1px solid rgba(99, 102, 241, 0.2)',
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              color: '#dbeafe',
              backdropFilter: 'blur(10px)',
              marginBottom: '2rem'
            }}>
              <span style={{ color: '#6366f1' }}>✦</span>
              <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>ELEVATING MODERN LIVING</span>
            </div>
            
            <h1 style={{ 
              fontSize: '5rem', 
              fontWeight: '900', 
              color: 'white', 
              lineHeight: '1', 
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              Find Your <span style={{ color: 'var(--primary)' }}>Sanctuary</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              Discover a curated selection of premium properties designed for the modern lifestyle. Secure, seamless, and stunning.
            </p>

            <div className="glass" style={{ 
              padding: '0.75rem', 
              borderRadius: 'var(--radius-xl)', 
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              marginTop: '3.5rem'
            }}>
              <form onSubmit={handleSearch} style={{ 
                display: 'flex', 
                width: '100%', 
                gap: '0.75rem',
                alignItems: 'stretch'
              }}>
                <input 
                  type="text" 
                  placeholder="Location or Property Name..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ 
                    flex: 1, 
                    padding: '1.25rem 1.5rem', 
                    borderRadius: 'var(--radius-lg)', 
                    border: 'none', 
                    background: 'white',
                    fontSize: '1.1rem',
                    outline: 'none',
                    lineHeight: '1'
                  }} 
                />
                <button type="submit" className="btn-primary" style={{ 
                  padding: '0 2.5rem', 
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '1rem',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '60px'
                }}>
                  Search Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Categories */}
      <section className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {categories.map((cat, idx) => (
            <div key={cat.id} className={`glass animate-fade-in-up delay-${(idx+1)*100}`} style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ fontSize: '2rem', background: '#f5f7ff', padding: '0.75rem', borderRadius: '1rem' }}>{cat.icon}</div>
              <div>
                <h3 style={{ fontWeight: '700', fontSize: '1.125rem' }}>{cat.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{cat.count} Listings</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="container" style={{ padding: '8rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Featured Estates</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Handpicked properties that offer exceptional value and superior design.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {featured.map((item, idx) => (
            <div key={item.id} className={`animate-fade-in-scale delay-${(idx+1)*100}`} style={{ transition: 'all 0.3s' }}>
              <div style={{ 
                background: 'white', 
                borderRadius: 'var(--radius-xl)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                    <span className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '1rem', fontWeight: '700', color: 'var(--primary)', background: 'rgba(255,255,255,0.9)' }}>
                      {item.price}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📍 {item.location}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    paddingTop: '1.5rem', 
                    borderTop: '1px solid #f1f5f9',
                    color: 'var(--text-main)',
                    fontWeight: '600'
                  }}>
                    <span>🛏️ {item.beds} Beds</span>
                    <span>🛁 {item.baths} Baths</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'var(--text-main)', 
        padding: '8rem 0', 
        borderRadius: 'var(--radius-xl)', 
        margin: '0 1.5rem 8rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Partner with UrbanNest</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto' }}>
            List your property today and reach thousands of qualified buyers and tenants.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/signup" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

