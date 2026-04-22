import { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  // MOCK DATA
  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 7800 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 8500 },
  ];

  const occupancyData = [
    { name: 'Jan', rate: 85 },
    { name: 'Feb', rate: 88 },
    { name: 'Mar', rate: 92 },
    { name: 'Apr', rate: 90 },
    { name: 'May', rate: 95 },
    { name: 'Jun', rate: 93 },
  ];

  const [users] = useState([
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'owner', status: 'Active' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'agent', status: 'Suspended' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user', status: 'Active' },
  ]);

  const [approvals] = useState([
    { id: 'P1', title: 'Sunset Penthouse', submittedBy: 'Alice Smith', date: '2026-10-21', status: 'Pending' },
    { id: 'P2', title: 'Forest Retreat', submittedBy: 'Jane Doe', date: '2026-10-20', status: 'Pending' },
  ]);

  const navItems = [
    { id: 'analytics', label: 'Executive Analytics', icon: '📊' },
    { id: 'users', label: 'User Directory', icon: '👥' },
    { id: 'approvals', label: 'Listings Approval', icon: '✅', count: approvals.length },
    { id: 'disputes', label: 'Resolution Center', icon: '⚖️' },
    { id: 'settings', label: 'Global Settings', icon: '⚙️' },
    { id: 'logs', label: 'Audit & Security', icon: '🛡️' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      
      {/* Dark Sidebar */}
      <aside style={{ width: '320px', backgroundColor: '#0f172a', color: 'white', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '3rem 2rem', borderBottom: '1px solid #1e293b' }}>
          <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: '900', letterSpacing: '-0.5px' }}>
            Urban<span style={{ color: 'var(--primary)' }}>Admin</span>
          </h2>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Platform Control</p>
        </div>
        
        <nav style={{ flex: 1, padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{ 
                width: '100%', 
                textAlign: 'left', 
                padding: '1rem 1.5rem', 
                background: activeTab === item.id ? 'rgba(255,255,255,0.05)' : 'transparent', 
                color: activeTab === item.id ? 'white' : '#94a3b8', 
                border: 'none', 
                borderLeft: activeTab === item.id ? '4px solid var(--primary)' : '4px solid transparent',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderRadius: '0 0.5rem 0.5rem 0'
              }}
            >
              <span>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.count ? (
                <span style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '0.1rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem' }}>{item.count}</span>
              ) : null}
            </button>
          ))}
        </nav>

        <div style={{ padding: '2rem', borderTop: '1px solid #1e293b' }}>
           <button style={{ width: '100%', padding: '1rem', background: '#334155', color: 'white', border: 'none', borderRadius: 'var(--radius-lg)', fontWeight: '700', cursor: 'pointer' }}>
             Logout Center
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '4rem', overflowY: 'auto' }}>
        
        <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>
              {navItems.find(i => i.id === activeTab)?.label}
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.25rem', marginTop: '0.5rem' }}>Real-time operations & administrative management.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button className="btn-secondary" style={{ padding: '0.75rem 2rem' }}>Download Report</button>
             <button className="btn-primary" style={{ padding: '0.75rem 2rem' }}>System Status: OK</button>
          </div>
        </header>

        {/* ANALYTICS VIEW */}
        {activeTab === 'analytics' && (
          <div className="animate-fade-in-up">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
              {[
                { label: 'GROSS REVENUE', value: '$124,500', trend: '+14.5%', color: 'var(--primary)' },
                { label: 'ACTIVE LISTINGS', value: '1,432', trend: '+5.2%', color: 'var(--secondary)' },
                { label: 'OCCUPANCY RATE', value: '93%', trend: '-2.0%', color: 'var(--accent)' }
              ].map((stat, i) => (
                <div key={i} className="glass" style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-2xl)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-md)' }}>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>{stat.label}</p>
                  <h3 style={{ margin: '1rem 0', fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' }}>{stat.value}</h3>
                  <span style={{ color: stat.trend.startsWith('+') ? '#10b981' : '#f43f5e', fontWeight: '800', fontSize: '0.9rem' }}>{stat.trend} <span style={{ color: '#94a3b8', fontWeight: '500' }}>vs last month</span></span>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              <div className="glass" style={{ padding: '2.5rem', background: 'white', borderRadius: 'var(--radius-2xl)', border: '1px solid #e2e8f0' }}>
                 <h3 style={{ margin: '0 0 2rem 0', fontWeight: '900', fontSize: '1.25rem' }}>Revenue Performance</h3>
                 <div style={{ height: '350px' }}>
                   <ResponsiveContainer width="100%" height="100%">
                     <LineChart data={revenueData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600}} />
                       <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600}} tickFormatter={(v) => `$${v}`} />
                       <RechartsTooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: 'var(--shadow-lg)' }} />
                       <Line type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={6} dot={{ r: 6, fill: 'var(--primary)', strokeWidth: 2, stroke: '#white' }} activeDot={{ r: 10 }} />
                     </LineChart>
                   </ResponsiveContainer>
                 </div>
              </div>

              <div className="glass" style={{ padding: '2.5rem', background: 'white', borderRadius: 'var(--radius-2xl)', border: '1px solid #e2e8f0' }}>
                 <h3 style={{ margin: '0 0 2rem 0', fontWeight: '900', fontSize: '1.25rem' }}>Listing Health</h3>
                 <div style={{ height: '350px' }}>
                   <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={occupancyData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600}} />
                       <RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '1rem', border: 'none' }} />
                       <Bar dataKey="rate" fill="var(--secondary)" radius={[8, 8, 0, 0]} />
                     </BarChart>
                   </ResponsiveContainer>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* Generic Table View for Users/Logs */}
        {(activeTab === 'users' || activeTab === 'logs') && (
           <div className="animate-fade-in-up" style={{ backgroundColor: 'white', borderRadius: 'var(--radius-2xl)', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ padding: '2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
                 <input type="text" placeholder="Filter records..." className="input-base" style={{ maxWidth: '400px' }} />
                 <button className="btn-secondary">Export CSV</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                 <thead style={{ background: '#f8fafc' }}>
                    <tr>
                       <th style={{ padding: '1.25rem 2rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>{activeTab === 'users' ? 'User' : 'Action'}</th>
                       <th style={{ padding: '1.25rem 2rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>{activeTab === 'users' ? 'Role' : 'Resource'}</th>
                       <th style={{ padding: '1.25rem 2rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Status / Time</th>
                       <th style={{ padding: '1.25rem 2rem', textAlign: 'right', fontSize: '0.75rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase' }}>Actions</th>
                    </tr>
                 </thead>
                 <tbody>
                    {activeTab === 'users' ? users.map(u => (
                      <tr key={u.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                         <td style={{ padding: '1.5rem 2rem' }}>
                            <p style={{ fontWeight: '800', color: '#0f172a' }}>{u.name}</p>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{u.email}</p>
                         </td>
                         <td style={{ padding: '1.5rem 2rem' }}>
                            <span style={{ padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '900', background: '#e0e7ff', color: '#4338ca' }}>{u.role.toUpperCase()}</span>
                         </td>
                         <td style={{ padding: '1.5rem 2rem' }}>
                            <span style={{ color: u.status === 'Active' ? '#10b981' : '#f43f5e', fontWeight: '800', fontSize: '0.85rem' }}>● {u.status}</span>
                         </td>
                         <td style={{ padding: '1.5rem 2rem', textAlign: 'right' }}>
                            <button style={{ border: 'none', background: 'none', color: 'var(--primary)', fontWeight: '800', cursor: 'pointer' }}>Manage</button>
                         </td>
                      </tr>
                    )) : null}
                 </tbody>
              </table>
           </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;

