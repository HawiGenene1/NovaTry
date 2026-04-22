import React from 'react';

const Documents = () => {
  const documents = [
    { _id: '1', title: 'Standard Residential Lease - Villa 402', type: 'PDF', date: 'Oct 15, 2023', size: '2.4 MB', status: 'Verified' },
    { _id: '2', title: 'National Identity Proof (Scan)', type: 'JPG', date: 'Oct 10, 2023', size: '1.1 MB', status: 'Verified' },
    { _id: '3', title: 'Maintenance Request Receipt - Sept', type: 'PDF', date: 'Oct 05, 2023', size: '0.8 MB', status: 'Pending' }
  ];

  return (
    <div className="animate-fade-in-up" style={{ minHeight: '90vh', background: '#f8fafc', paddingBottom: '6rem' }}>
      {/* Header Section */}
      <div style={{ background: '#0f172a', padding: '6rem 0 10rem', color: 'white' }}>
        <div className="container">
          <span style={{ color: 'var(--primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>MANAGEMENT CONSOLE</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginTop: '1rem', marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>Document <span style={{ color: 'var(--primary)' }}>Safe</span></h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px', lineHeight: '1.6' }}>
            Encrypt and manage your property legalities with military-grade security. Access your leases, certificates, and compliance records anywhere.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) 2fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Upload Console */}
          <div className="glass" style={{ 
            padding: '3rem', 
            borderRadius: 'var(--radius-xl)', 
            background: 'white', 
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: 'var(--shadow-lg)',
            position: 'sticky',
            top: '6rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0f172a' }}>Vault Upload</h3>
            <div style={{ 
              padding: '4rem 2rem', 
              border: '2px dashed #e2e8f0', 
              borderRadius: 'var(--radius-lg)', 
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: '#f8fafc'
            }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', opacity: 0.3 }}>📂</div>
              <p style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#475569' }}>Drag and Drop Files</p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '2rem' }}>Support for PDF, DOCX, JPG (Max 50MB)</p>
              <button className="btn-primary" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}>Select from Local Storage</button>
            </div>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: 'var(--radius-lg)', background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.1)' }}>
               <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>🔐 End-to-End Encrypted</h4>
               <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.5' }}>All documents are hashed and stored in our secure private enclave. We never read your data.</p>
            </div>
          </div>

          {/* Secure Registry */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Secure Registry</h3>
            {documents.map(doc => (
              <div key={doc._id} className="glass" style={{ 
                padding: '2rem', 
                borderRadius: 'var(--radius-xl)', 
                background: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '2rem',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease'
              }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(8px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: doc.type === 'PDF' ? '#fee2e2' : '#e0f2fe', 
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: doc.type === 'PDF' ? '#ef4444' : '#0ea5e9',
                  fontWeight: '900'
                }}>
                  {doc.type}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>{doc.title}</h4>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '2rem', 
                      fontSize: '0.65rem', 
                      fontWeight: '900', 
                      background: doc.status === 'Verified' ? '#ecfdf5' : '#fff7ed',
                      color: doc.status === 'Verified' ? '#059669' : '#d97706'
                    }}>{doc.status.toUpperCase()}</span>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
                    Registered on {doc.date} • {doc.size}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'pointer' }}>👁️</button>
                  <button style={{ height: '48px', padding: '0 1.5rem', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: '700', cursor: 'pointer' }}>Download</button>
                </div>
              </div>
            ))}

            <div style={{ padding: '3rem', textAlign: 'center', border: '2px dashed #e2e8f0', borderRadius: 'var(--radius-xl)', color: '#94a3b8' }}>
               <p style={{ fontWeight: '600' }}>No more archived documents.</p>
               <p style={{ fontSize: '0.85rem' }}>Requests for older records (pre-2023) must be sent to compliance@urbannest.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Documents;

