import { useState } from 'react';

const BookingModal = ({ property, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    purpose: '',
    moveInDate: '',
    leaseDuration: '1 Year',
    occupants: '1',
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card', 
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.innerText = 'Processing...';
    setTimeout(() => {
      onComplete(formData);
    }, 1200);
  };

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      backgroundColor: 'rgba(15, 23, 42, 0.4)', 
      backdropFilter: 'blur(12px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      zIndex: 1000, 
      padding: '2rem' 
    }}>
      <div className="glass animate-fade-in-up" style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.98)', 
        width: '100%', 
        maxWidth: '680px', 
        borderRadius: 'var(--radius-2xl)', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        maxHeight: '90vh',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        
        {/* Header */}
        <div style={{ padding: '2.5rem 3rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#0f172a', margin: 0, letterSpacing: '-0.5px' }}>
              {property.status === 'Rent' ? 'Secure Your Stay' : 'Executive Consultation'}
            </h2>
            <p style={{ margin: '0.25rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>Complete the steps below to initialize your request.</p>
          </div>
          <button onClick={onClose} style={{ 
            background: '#f1f5f9', 
            border: 'none', 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            fontSize: '1.25rem', 
            color: '#64748b', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}>&times;</button>
        </div>

        {/* Content */}
        <div style={{ padding: '0 3rem 3rem', overflowY: 'auto' }}>
          
          {/* Progress Bar */}
          <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0 2.5rem' }}>
            <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
            <div style={{ flex: 1, height: '6px', backgroundColor: step >= 2 ? 'var(--primary)' : '#e2e8f0', borderRadius: '3px', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
          </div>

          {/* Property Summary Widget */}
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            marginBottom: '3rem', 
            padding: '1.25rem', 
            backgroundColor: '#f8fafc', 
            borderRadius: 'var(--radius-xl)', 
            border: '1px solid #e2e8f0' 
          }}>
            <img src={property.images[0]} alt="Prop" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0 0 0.25rem 0', color: '#0f172a' }}>{property.title}</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>📍 {property.location}</p>
              <div style={{ fontWeight: '900', color: 'var(--primary)', marginTop: '0.75rem', fontSize: '1.1rem' }}>
                ${property.price.toLocaleString()}
                <span style={{ fontSize: '0.85rem', fontWeight: '600', opacity: 0.7 }}>{property.status === 'Rent' ? '/month' : ' (Est. Price)'}</span>
              </div>
            </div>
          </div>

          {step === 1 ? (
            <form onSubmit={handleNext} className="animate-fade-in">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px' }}>1. Scheduling & Logistics</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>PREFERRED VISIT DATE</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="input-base" min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>TIME WINDOW</label>
                  <select required name="time" value={formData.time} onChange={handleChange} className="input-base">
                    <option value="" disabled>Select window</option>
                    <option value="Morning">Morning (09:00 - 12:00)</option>
                    <option value="Afternoon">Afternoon (13:00 - 17:00)</option>
                    <option value="Evening">Evening (18:00 - 20:00)</option>
                  </select>
                </div>
              </div>

              {property.status === 'Rent' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>TARGET MOVE-IN</label>
                    <input required type="date" name="moveInDate" value={formData.moveInDate} onChange={handleChange} className="input-base" />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1.5 }}>
                       <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>TENURE</label>
                       <select required name="leaseDuration" value={formData.leaseDuration} onChange={handleChange} className="input-base">
                         <option value="6 Months">6 Months</option>
                         <option value="1 Year">1 Year</option>
                         <option value="2+ Years">2+ Years</option>
                       </select>
                    </div>
                    <div style={{ flex: 1 }}>
                       <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>GUESTS</label>
                       <input required type="number" name="occupants" min="1" value={formData.occupants} onChange={handleChange} className="input-base" />
                    </div>
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>NOTES FOR THE HOST</label>
                <textarea required name="purpose" value={formData.purpose} onChange={handleChange} className="input-base" placeholder="Tell us more about your requirements..." rows="3"></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                <span onClick={onClose} style={{ color: '#94a3b8', cursor: 'pointer', fontWeight: '700', fontSize: '0.95rem' }}>Discard Request</span>
                <button type="submit" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>Continue to Details &rarr;</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px' }}>2. Identity & Verified Payment</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>LEGAL FULL NAME</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="input-base" placeholder="Jane Doe" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>EMAIL ADDRESS</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="input-base" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.85rem', fontWeight: '800', color: '#475569' }}>PHONE</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-base" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>

              <div style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-2xl)', marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: '900', color: '#0f172a', display: 'flex', justifyContent: 'space-between' }}>
                  CHOOSE PAYMENT GATEWAY
                  <span style={{ fontSize: '0.7rem', color: '#10b981' }}>🛡️ SSL ENCRYPTED</span>
                </h4>
                
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  {[
                    { id: 'card', name: 'CREDIT CARD', icon: '💳' },
                    { id: 'telebirr', name: 'TELEBIRR', icon: '📱' },
                    { id: 'chapa', name: 'CHAPA', icon: '💰' }
                  ].map(method => (
                    <label key={method.id} style={{ 
                      flex: 1, 
                      padding: '1.25rem 0.5rem', 
                      border: formData.paymentMethod === method.id ? '2px solid var(--primary)' : '1px solid #e2e8f0', 
                      borderRadius: 'var(--radius-xl)', 
                      cursor: 'pointer', 
                      textAlign: 'center', 
                      backgroundColor: formData.paymentMethod === method.id ? '#f5f7ff' : 'white',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={handleChange} style={{ display: 'none' }} />
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{method.icon}</div>
                      <span style={{ fontWeight: '800', fontSize: '0.75rem', color: formData.paymentMethod === method.id ? 'var(--primary)' : '#64748b' }}>{method.name}</span>
                    </label>
                  ))}
                </div>

                {formData.paymentMethod === 'card' ? (
                  <div className="animate-fade-in">
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '800', color: '#94a3b8' }}>CARD NUMBER</label>
                      <input required type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="input-base" placeholder="•••• •••• •••• ••••" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '800', color: '#94a3b8' }}>EXPIRY</label>
                        <input required type="text" name="expiry" value={formData.expiry} onChange={handleChange} className="input-base" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '800', color: '#94a3b8' }}>CVC</label>
                        <input required type="text" name="cvc" value={formData.cvc} onChange={handleChange} className="input-base" placeholder="•••" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in" style={{ textAlign: 'center', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic' }}>
                    Redirecting to {formData.paymentMethod === 'chapa' ? 'Chapa' : 'TeleBirr'} secure environment...
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#94a3b8', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer' }}>&larr; Back to Logistics</button>
                <button type="submit" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.05rem' }}>
                  Initialize Secure Transaction 🛡️
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default BookingModal;

