export default async function handler(req, res) {
  if (req.method === "GET") {
    // Return empty entries for now - connect to MongoDB later
    res.status(200).json({ entries: [] });
  } else if (req.method === "POST") {
    // Save entry to database - connect to MongoDB later
    const { name, email, phone, paymentId, orderId } = req.body;
    
    // TODO: Save to MongoDB
    console.log("New entry:", { name, email, phone, paymentId, orderId });
    
    res.status(200).json({ success: true, message: "Entry saved" });
  } else {
    res.status(405).end();
  }
}
