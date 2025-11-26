import { useState } from "react";

export default function Payment() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const order = await response.json();
      if (order && order.id) {
        const opts = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: order.amount,
          currency: order.currency,
          name: "India Dream Lucky Draw",
          description: "Lucky Draw Entry Fee - ₹3,000",
          order_id: order.id,
          handler: async function (response) {
            const verifyResponse = await fetch("/api/entries", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...form, paymentId: response.razorpay_payment_id, orderId: response.razorpay_order_id }),
            });
            if (verifyResponse.ok) {
              alert("✅ Payment successful! You're entered in the draw.");
              window.location.href = "/dashboard";
            }
          },
          prefill: { name: form.name, email: form.email, contact: form.phone },
          theme: { color: "#667eea" },
        };
        const rzp = new window.Razorpay(opts);
        rzp.open();
      } else {
        alert("❌ Error creating payment order. Please try again.");
      }
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>💳 Enter the Lucky Draw</h1>
        <p style={styles.subtitle}>Fill in your details and pay ₹3,000 to enter</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name *</label>
          <input type="text" placeholder="Enter your full name" required style={styles.input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <label style={styles.label}>Email Address *</label>
          <input type="email" placeholder="your.email@example.com" required style={styles.input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <label style={styles.label}>Phone Number *</label>
          <input type="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required style={styles.input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <button type="submit" disabled={loading} style={styles.button}>{loading ? "Processing..." : "Pay ₹3,000 & Enter Draw"}</button>
        </form>
        <p style={styles.note}>🔒 Secure payment via Razorpay UPI Gateway<br />⚠️ Entry fee is non-refundable</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' },
  container: { maxWidth: 500, margin: 'auto', padding: 30, background: 'white', borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.15)' },
  title: { fontSize: 32, textAlign: 'center', color: '#2d3748' },
  subtitle: { textAlign: 'center', color: '#718096', marginBottom: 30 },
  form: { display: 'flex', flexDirection: 'column', gap: 15 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#4a5568' },
  input: { padding: 12, fontSize: 16, border: '2px solid #e2e8f0', borderRadius: 8, outline: 'none' },
  button: { padding: 15, fontSize: 18, background: '#48bb78', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 'bold', marginTop: 10 },
  note: { fontSize: 14, color: '#718096', textAlign: 'center', marginTop: 20, lineHeight: 1.8 }
};
