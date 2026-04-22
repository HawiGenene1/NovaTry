import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';

const MAP_CENTER = { lat: 9.005401, lng: 38.763611 }; // Central Addis Ababa

const Properties = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [favorites, setFavorites] = useState(['1']);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  });
  
  const [activeMarker, setActiveMarker] = useState(null);

  const propertiesData = [
    { id: '1', title: 'Modern Glass Villa', location: 'Bole, Addis Ababa', price: '45,000,000 ETB', type: 'Residential', status: 'For Sale', beds: 4, baths: 3, sqft: 3500, rating: 4.8, reviews: 24, img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600', lat: 9.0000, lng: 38.7833 },
    { id: '2', title: 'Downtown Tech Loft', location: 'Kazanchis, Addis Ababa', price: '120,000 ETB/mo', type: 'Apartment', status: 'For Rent', beds: 2, baths: 2, sqft: 1200, rating: 4.9, reviews: 41, img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600', lat: 9.0167, lng: 38.7667 },
    { id: '3', title: 'Suburban Family Home', location: 'CMC, Addis Ababa', price: '25,000,000 ETB', type: 'Residential', status: 'For Sale', beds: 5, baths: 4, sqft: 4000, rating: 4.5, reviews: 15, img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600', lat: 9.0200, lng: 38.8300 },
    { id: '4', title: 'Prime Retail Space', location: 'Piazza, Addis Ababa', price: '300,000 ETB/mo', type: 'Commercial', status: 'For Rent', beds: 0, baths: 2, sqft: 2500, rating: 4.7, reviews: 8, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600', lat: 9.0300, lng: 38.7500 },
    { id: '5', title: 'Luxury Penthouse', location: 'Bole, Addis Ababa', price: '65,000,000 ETB', type: 'Apartment', status: 'For Sale', beds: 3, baths: 3.5, sqft: 2800, rating: 5.0, reviews: 32, img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600', lat: 8.9950, lng: 38.7900 },
    { id: '6', title: 'Cozy Studio', location: 'Gerji, Addis Ababa', price: '45,000 ETB/mo', type: 'Apartment', status: 'For Rent', beds: 1, baths: 1, sqft: 600, rating: 4.2, reviews: 19, img: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600', lat: 8.9900, lng: 38.8100 },
  ];

  const filteredProperties = propertiesData.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === 'All' || p.type === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="properties-page" style={{ padding: '3rem 0', minHeight: '100vh' }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Explore Properties</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Find your perfect home from our curated selection in Addis Ababa.</p>
        </div>

        {/* Floating Filter Bar */}
        <div className="filter-bar animate-fade-in-up">
          <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
            <div style={{ position: 'relative', flex: 2 }}>
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
              <input 
                type="text" 
                className="input-base" 
                placeholder="Search location, neighborhood..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '2.5rem', border: 'none', background: '#f8fafc' }}
              />
            </div>
            <select 
              className="input-base" 
              style={{ flex: 1, border: 'none', background: '#f8fafc' }} 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Residential">Residential</option>
              <option value="Apartment">Apartments</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          
          <div className="view-toggle">
            <button 
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'map' ? 'active' : ''}`}
              onClick={() => setViewMode('map')}
            >
              Map
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center' }}>
          <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>
            Showing <span style={{ color: 'var(--primary)' }}>{filteredProperties.length}</span> luxury listings
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Sort by: 
            <select style={{ border: 'none', background: 'transparent', fontWeight: '700', color: 'var(--text-main)', cursor: 'pointer', outline: 'none' }}>
              <option>Recommended</option>
              <option>Newest First</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* MAP VIEW */}
        {viewMode === 'map' && (
          <div className="animate-fade-in-up" style={{ height: '70vh', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'relative' }}>
            {!isLoaded ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', background: '#f1f5f9' }}>
                <div className="animate-pulse">Loading Google Maps...</div>
              </div>
            ) : (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={MAP_CENTER}
                zoom={13}
                options={{ 
                  styles: [{ featureType: 'all', elementType: 'all', stylers: [{ saturation: -20 }] }], 
                  disableDefaultUI: true, 
                  zoomControl: true 
                }}
              >
                {filteredProperties.map((p) => (
                  <MarkerF key={p.id} position={{ lat: p.lat, lng: p.lng }} onClick={() => setActiveMarker(p.id)}>
                    {activeMarker === p.id && (
                      <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                        <div style={{ padding: '0.5rem', maxWidth: '240px' }}>
                          <img src={p.img} alt={p.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '0.75rem' }} />
                          <h4 style={{ fontWeight: '800', marginBottom: '0.25rem' }}>{p.title}</h4>
                          <p style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem' }}>{p.price}</p>
                          <Link to={`/properties/${p.id}`} className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '0.5rem', fontSize: '0.8rem' }}>View Details</Link>
                        </div>
                      </InfoWindowF>
                    )}
                  </MarkerF>
                ))}
              </GoogleMap>
            )}
          </div>
        )}

        {/* GRID / LIST VIEW */}
        {viewMode !== 'map' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(350px, 1fr))' : '1fr', 
            gap: '2.5rem' 
          }}>
            {filteredProperties.map((p, idx) => (
              <Link to={`/properties/${p.id}`} key={p.id} className={`animate-fade-in-up delay-${(idx % 4 + 1) * 100}`}>
                <div className="property-card" style={{ 
                  display: viewMode === 'list' ? 'flex' : 'block',
                  height: viewMode === 'list' ? '280px' : 'auto'
                }}>
                  <div style={{ position: 'relative', height: viewMode === 'list' ? '100%' : '260px', width: viewMode === 'list' ? '380px' : '100%', flexShrink: 0 }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                      <span className={`badge ${p.status === 'For Sale' ? 'badge-sale' : 'badge-rent'}`}>
                        {p.status}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => toggleFavorite(e, p.id)}
                      style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      <span style={{ fontSize: '1.2rem', color: favorites.includes(p.id) ? 'var(--accent)' : '#ccc' }}>
                        {favorites.includes(p.id) ? '❤️' : '🤍'}
                      </span>
                    </button>
                  </div>
                  
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{p.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>📍 {p.location}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.25rem' }}>{p.price}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>⭐ {p.rating} ({p.reviews})</p>
                      </div>
                    </div>
                    
                    <div style={{ 
                      marginTop: 'auto',
                      paddingTop: '1.5rem', 
                      borderTop: '1px solid #f1f5f9',
                      display: 'flex', 
                      gap: '1.5rem',
                      color: 'var(--text-main)',
                      fontWeight: '600',
                      fontSize: '0.9rem'
                    }}>
                      <span>🛏️ {p.beds} Beds</span>
                      <span>🛁 {p.baths} Baths</span>
                      <span>📐 {p.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
