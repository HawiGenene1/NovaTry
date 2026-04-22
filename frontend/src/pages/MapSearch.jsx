import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MapSearch = () => {
  const [activeProperty, setActiveProperty] = useState({
    id: '3',
    title: 'Paramount Palace',
    location: 'Bole, Addis Ababa',
    price: '$1,250,000',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
    rating: 4.9,
    beds: 5,
    baths: 4
  });

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 72px)', background: '#e2e8f0', overflow: 'hidden' }}>
      
      {/* Map Engine Layer (Placeholder) */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/38.7636,9.0054,12,0/1200x800?access_token=YOUR_TOKEN")', // Mock static map
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'contrast(1.05) brightness(0.95)'
      }}>
        {/* Animated Pulsing Markers */}
        <div style={{ position: 'absolute', top: '40%', left: '30%' }}>
           <div className="marker-pulse" style={{ width: '20px', height: '20px', background: 'var(--primary)', borderRadius: '50%', border: '3px solid white', boxShadow: 'var(--shadow-lg)' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '60%', left: '55%' }}>
           <div className="marker-pulse" style={{ width: '20px', height: '20px', background: 'var(--primary)', borderRadius: '50%', border: '3px solid white', boxShadow: 'var(--shadow-lg)' }}></div>
        </div>
        
        <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.8)', padding: '1rem 2rem', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(8px)' }}>
           <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '800' }}>MAP ENGINE INITIALIZING</h3>
           <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Connected to Global Sat-Link</p>
        </div>
      </div>

      {/* Floating Header Controls */}
      <div style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '900px', zIndex: 10 }}>
        <div className="glass" style={{ padding: '0.75rem', borderRadius: 'var(--radius-xl)', display: 'flex', gap: '0.75rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <div style={{ flex: 1, position: 'relative' }}>
             <span style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
             <input type="text" className="input-base" placeholder="Search districts, neighborhoods, or specific addresses..." style={{ paddingLeft: '3rem', border: 'none', background: '#f8fafc', fontWeight: '600' }} />
          </div>
          <select className="input-base" style={{ width: '180px', border: 'none', background: '#f8fafc', fontWeight: '600' }}>
            <option>All Prices</option>
            <option>$100k - $500k</option>
            <option>$500k+</option>
          </select>
          <button className="btn-primary" style={{ padding: '0 2rem', borderRadius: 'var(--radius-lg)' }}>Filter Results</button>
        </div>
      </div>

      {/* Bottom Floating Card (Active Detail) */}
      <div className="animate-fade-in-up" style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 10 }}>
        <div className="glass" style={{ 
          width: '380px', 
          padding: '1.25rem', 
          borderRadius: 'var(--radius-2xl)', 
          background: 'white',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255,255,255,0.8)'
        }}>
          <div style={{ position: 'relative' }}>
            <img src={activeProperty.img} alt="Property" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-xl)' }} />
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
               ⭐ {activeProperty.rating}
            </div>
          </div>
          
          <div style={{ padding: '1rem 0.5rem 0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>{activeProperty.title}</h4>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>{activeProperty.price}</p>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.25rem', fontWeight: '500' }}>📍 {activeProperty.location}</p>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700' }}>
                 <span>🛏️</span> {activeProperty.beds} Beds
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700' }}>
                 <span>🛁</span> {activeProperty.baths} Baths
               </div>
            </div>

            <Link to={`/properties/${activeProperty.id}`} className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '1rem', borderRadius: 'var(--radius-lg)', fontWeight: '700' }}>
              Explore Detail Page &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Legend / Stats */}
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', zIndex: 10 }}>
        <div className="glass" style={{ padding: '1rem 1.5rem', borderRadius: 'var(--radius-lg)', background: 'rgba(15,23,42,0.9)', color: 'white' }}>
           <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '1px', marginBottom: '0.5rem' }}>LIVE MARKET DATA</div>
           <div style={{ display: 'flex', gap: '1.5rem' }}>
             <div>
               <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>148</div>
               <div style={{ fontSize: '0.65rem', opacity: 0.6 }}>ACTIVE LISTINGS</div>
             </div>
             <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}></div>
             <div>
               <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>$4.2M</div>
               <div style={{ fontSize: '0.65rem', opacity: 0.6 }}>AVG. ASSET VAL.</div>
             </div>
           </div>
        </div>
      </div>
      
      <style>{`
        .marker-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
      `}</style>
    </div>
  );
};

export default MapSearch;

