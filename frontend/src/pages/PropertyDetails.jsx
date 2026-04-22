import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Stubbing fetch using the ID
    setTimeout(() => {
      // Mock Data 
      const mockDb = {
        '1': { _id: '1', title: 'Modern Glass Villa', price: '45,000,000 ETB', status: 'Sale', type: 'residential', location: 'Bole, Addis Ababa', bedrooms: 4, bathrooms: 3, sqft: 3500, description: 'Experience the pinnacle of modern luxury in this stunning glass villa. Featuring floor-to-ceiling windows, an infinity pool, and integrated smart home technology, this property offers unparalleled views of the city. Perfect for families looking for an elegant retreat.', amenities: ['Infinity Pool', 'Smart Home', 'Garage', 'Home Theater', 'Garden'], images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'] },
        '2': { _id: '2', title: 'Downtown Tech Loft', price: '120,000 ETB/mo', status: 'Rent', type: 'apartments', location: 'Kazanchis, Addis Ababa', bedrooms: 2, bathrooms: 2, sqft: 1200, description: 'An industrial-chic loft in the heart of downtown. Features exposed brick walls, 15ft ceilings, and a chef\'s kitchen. Walking distance to major tech hubs and transit.', amenities: ['Exposed Brick', 'Gym Access', 'Rooftop Lounge', 'Doorman'], images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'] }
      };
      
      const prop = mockDb[id] || { _id: id, title: 'Luxury Family Estate', price: '25,000,000 ETB', status: 'Sale', type: 'residential', location: 'CMC, Addis Ababa', bedrooms: 3, bathrooms: 2, sqft: 1800, description: 'A wonderful property waiting for its next owner. This spacious home offers a fantastic layout, plenty of natural light, and modern amenities.', amenities: ['Wi-Fi', 'Parking', 'AC', 'Balcony'], images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800'] };
      
      setProperty(prop);
      setLoading(false);
    }, 400);
  }, [id]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <div className="animate-pulse" style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>Curating Property Details...</div>
      </div>
    );
  }

  if (!property) {
    return <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>Property not found. <Link to="/properties" style={{ color: 'var(--primary)', fontWeight: '700' }}>Explore others</Link></div>;
  }

  const handleBookingComplete = (bookingData) => {
    setIsBookingModalOpen(false);
    navigate('/dashboard?tab=bookings');
  };

  return (
    <div className="property-details-page animate-fade-in-up">
      {/* Immersive Bento Gallery */}
      <div className="container" style={{ paddingTop: '2rem', marginBottom: '3rem' }}>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '400px', gap: '1rem', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <div style={{ gridColumn: 'span 2', position: 'relative', overflow: 'hidden' }}>
              <img src={property.images[0]} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ gridColumn: 'span 1', overflow: 'hidden' }}>
              <img src={property.images[1] || property.images[0]} alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ gridColumn: 'span 1', display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '1rem' }}>
               <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                 <img src={property.images[2] || property.images[0]} alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
               <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                  <img src={property.images[0]} alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', cursor: 'pointer' }}>
                    + {property.images.length} PHOTOS
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) 1fr', gap: '4rem', paddingBottom: '8rem' }}>
        
        {/* Detail Content */}
        <div className="main-content">
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
               <span className={`badge ${property.status === 'Sale' ? 'badge-sale' : 'badge-rent'}`} style={{ padding: '0.4rem 1rem' }}>
                 For {property.status}
               </span>
               <span className="badge" style={{ backgroundColor: '#f1f5f9', color: 'var(--text-main)', padding: '0.4rem 1rem' }}>
                 {property.type.toUpperCase()}
               </span>
            </div>
            
            <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1.1', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              {property.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📍 {property.location}
            </p>
          </div>

          {/* Key Specs Bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '2rem', 
            background: 'white', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--border-color)',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{property.bedrooms}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>BEDROOMS</div>
            </div>
            <div style={{ borderLeft: '1px solid #f1f5f9' }}></div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{property.bathrooms}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>BATHROOMS</div>
            </div>
            <div style={{ borderLeft: '1px solid #f1f5f9' }}></div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{property.sqft}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>SQ. FOOTAGE</div>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.25rem' }}>Description</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {property.description}
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.5rem' }}>Key Amenities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {property.amenities.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
                  <span style={{ color: 'var(--primary)' }}>✦</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Booking Sidebar */}
        <aside className="sidebar">
          <div className="glass" style={{ 
            position: 'sticky', 
            top: '6rem', 
            padding: '2.5rem', 
            borderRadius: 'var(--radius-xl)', 
            background: 'white',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ marginBottom: '2rem' }}>
               <p style={{ color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.875rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>LISTING PRICE</p>
               <h2 style={{ fontSize: '2.75rem', fontWeight: '900', color: 'var(--primary)' }}>{property.price}</h2>
            </div>
            
            <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem' }}>
                 <span style={{ color: 'var(--text-muted)' }}>Status</span>
                 <span style={{ fontWeight: '700', color: 'var(--secondary)' }}>Available Now</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem' }}>
                 <span style={{ color: 'var(--text-muted)' }}>Security Deposit</span>
                 <span style={{ fontWeight: '700' }}>1 Month Rent</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem' }}>
                 <span style={{ color: 'var(--text-muted)' }}>Contract Term</span>
                 <span style={{ fontWeight: '700' }}>1 Year Min.</span>
               </div>
            </div>

            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-primary" 
              style={{ width: '100%', padding: '1.25rem', marginBottom: '1rem', borderRadius: 'var(--radius-lg)', fontSize: '1.125rem' }}
            >
              Start Your Application
            </button>
            <button className="btn-secondary" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-lg)', fontWeight: '700' }}>
              Schedule a Tour
            </button>

            {/* Agent Info */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="https://i.pravatar.cc/150?img=33" alt="Agent" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontWeight: '800', margin: 0 }}>Robert Fox</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Senior Property Advisor</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {isBookingModalOpen && (
        <BookingModal 
          property={property} 
          onClose={() => setIsBookingModalOpen(false)} 
          onComplete={handleBookingComplete} 
        />
      )}
    </div>
  );
};

export default PropertyDetails;

