export default function Dashboard() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>📊 Confirmed Lucky Draw Entries</h1>
        <p style={styles.total}>Total Participants: <strong>0</strong></p>
        <div style={styles.note}>
          <p>✅ All participant entries will be displayed here transparently</p>
          <p>✅ Updated in real-time as payments are confirmed</p>
          <p>✅ Names will be partially masked for privacy</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { minHeight: '100vh', background: '#f7fafc', padding: '40px 20px' },
  container: { maxWidth: 900, margin: 'auto', padding: 40, background: 'white', borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.15)' },
  title: { fontSize: 42, textAlign: 'center', color: '#2d3748', marginBottom: 20 },
  total: { fontSize: 24, textAlign: 'center', color: '#4a5568', marginBottom: 30 },
  note: { fontSize: 16, textAlign: 'center', color: '#718096', lineHeight: 2 }
};
