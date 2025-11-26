import Link from "next/link";

export default function Prizes() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎁 Prizes & Rules</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Prize Details</h2>
        <div style={styles.prizeCard}>
          <h3>🏠 1st Prize</h3>
          <p><strong>Residential House in India</strong></p>
          <p>✅ Modern construction with rental income stream</p>
          <p>✅ Clear legal title and documentation</p>
          <p>✅ Estimated value: ₹50-75 Lakhs</p>
        </div>

        <div style={styles.prizeCard}>
          <h3>🌱 2nd Prize</h3>
          <p><strong>151 sq. yards Land Parcel</strong></p>
          <p>✅ Clear title property</p>
          <p>✅ Development-ready plot</p>
          <p>✅ Estimated value: ₹25-35 Lakhs</p>
        </div>

        <div style={styles.prizeCard}>
          <h3>🏡 3rd Prize</h3>
          <p><strong>151 sq. yards Land + Rental Income</strong></p>
          <p>✅ Existing tenant with active lease</p>
          <p>✅ Monthly rental income included</p>
          <p>✅ Estimated value: ₹30-40 Lakhs</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📜 Rules & Terms</h2>
        <ol style={styles.rulesList}>
          <li>Entry fee is ₹3,000 per participant (non-refundable)</li>
          <li>Payment accepted via UPI only through Razorpay gateway</li>
          <li>Only confirmed payments are eligible for the draw</li>
          <li>Lucky draw is random and conducted transparently</li>
          <li>Winners will be announced publicly on the dashboard</li>
          <li>Winner verification and prize transfer within 30 days</li>
          <li>Participants must be 18+ years and Indian residents</li>
          <li>All legal compliance and taxes handled by organizers</li>
          <li>Draw date announced once minimum entries reached</li>
        </ol>
      </section>

      <div style={styles.buttonContainer}>
        <Link href="/"><button style={styles.backButton}>← Back to Home</button></Link>
        <Link href="/payment"><button style={styles.enterButton}>Enter Now →</button></Link>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: 900, margin: '40px auto', padding: '0 20px', minHeight: '100vh', background: '#f7fafc' },
  title: { fontSize: 42, textAlign: 'center', color: '#2d3748', marginBottom: 40, paddingTop: 20 },
  section: { marginBottom: 50, background: 'white', padding: 30, borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  sectionTitle: { fontSize: 28, color: '#4a5568', marginBottom: 20, borderBottom: '3px solid #667eea', paddingBottom: 10 },
  prizeCard: { background: '#f7fafc', padding: 20, borderRadius: 8, marginBottom: 20, borderLeft: '4px solid #48bb78' },
  rulesList: { lineHeight: 2, fontSize: 16, color: '#4a5568' },
  buttonContainer: { display: 'flex', gap: 20, justifyContent: 'center', marginTop: 40, paddingBottom: 40 },
  backButton: { padding: '12px 30px', fontSize: 16, border: '2px solid #667eea', background: 'white', color: '#667eea', borderRadius: 8, cursor: 'pointer' },
  enterButton: { padding: '12px 30px', fontSize: 16, border: 'none', background: '#48bb78', color: 'white', borderRadius: 8, cursor: 'pointer' }
};
