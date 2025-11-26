import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>🏠 India Dream Lucky Draw</h1>
        <h2 style={styles.subtitle}>Win a House or Land!</h2>
        
        <div style={styles.priceBox}>
          <p style={styles.price}>Entry Fee: <strong>₹3,000</strong></p>
          <p style={styles.upiText}>Pay via UPI</p>
        </div>

        <div style={styles.prizesSection}>
          <h3>🎁 Prizes</h3>
          <ul style={styles.prizeList}>
            <li>🏠 <strong>1st Prize:</strong> Residential House in India + Rental Income</li>
            <li>🌱 <strong>2nd Prize:</strong> 151 sq. yards Land Parcel</li>
            <li>🏡 <strong>3rd Prize:</strong> 151 sq. yards Land + Rental Income</li>
          </ul>
        </div>

        <div style={styles.buttonContainer}>
          <Link href="/prizes">
            <button style={styles.button}>📋 See Prize Details & Rules</button>
          </Link>
          <Link href="/payment">
            <button style={{...styles.button, ...styles.primaryButton}}>💳 Enter Now - Pay ₹3,000</button>
          </Link>
          <Link href="/dashboard">
            <button style={styles.button}>📊 View Public Dashboard</button>
          </Link>
        </div>

        <p style={styles.disclaimer}>
          ⚠️ The ₹3,000 fee is a non-refundable entry charge to participate in the lucky draw.
        </p>
      </div>
      <footer style={styles.footer}>
        © 2025 India Dream Lucky Draw | Compliant with Indian Prize Competition Act, 1955
      </footer>
    </main>
  );
}

const styles = {
  main: { padding: '40px 20px', fontFamily: 'Arial, sans-serif', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' },
  container: { maxWidth: 800, margin: 'auto', background: 'white', borderRadius: 16, padding: 40, boxShadow: '0 10px 40px rgba(0,0,0,0.2)' },
  title: { fontSize: 48, color: '#2d3748', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 28, color: '#4a5568', textAlign: 'center', marginBottom: 30 },
  priceBox: { background: '#f7fafc', padding: 20, borderRadius: 12, textAlign: 'center', marginBottom: 30 },
  price: { fontSize: 32, color: '#2d3748', marginBottom: 5 },
  upiText: { color: '#718096', fontSize: 18 },
  prizesSection: { marginBottom: 30 },
  prizeList: { listStyle: 'none', padding: 0, lineHeight: 2 },
  buttonContainer: { display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 30 },
  button: { padding: '15px 30px', fontSize: 18, border: 'none', borderRadius: 8, cursor: 'pointer', background: '#e2e8f0', color: '#2d3748', transition: 'all 0.3s' },
  primaryButton: { background: '#48bb78', color: 'white', fontWeight: 'bold' },
  disclaimer: { fontSize: 14, color: '#718096', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: 20 },
  footer: { textAlign: 'center', color: 'white', marginTop: 40, fontSize: 14 }
};
