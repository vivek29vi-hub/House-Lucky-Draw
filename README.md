# 🏠 India Dream Lucky Draw

A complete Next.js website for running a transparent lucky draw competition with UPI payment integration.

## 🎯 Features

- **Secure UPI Payments**: Integration with Razorpay for ₹3,000 entry fee
- **Beautiful UI**: Responsive design with gradient backgrounds
- **Public Dashboard**: Transparent display of all confirmed participants
- **Prize Details**: Clear information about house and land prizes
- **Email/SMS Notifications**: Automated confirmations

## 🏆 Prizes

1. **1st Prize**: Residential House + Rental Income (₹50-75 Lakhs)
2. **2nd Prize**: 151 sq. yards Land Parcel (₹25-35 Lakhs)
3. **3rd Prize**: 151 sq. yards Land + Rental Income (₹30-40 Lakhs)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Razorpay account (merchant credentials)
- MongoDB Atlas account (free tier)

### Installation

```bash
# Clone the repository
git clone https://github.com/vivek29vi-hub/House-Lucky-Draw.git
cd House-Lucky-Draw

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
MONGODB_URI=your_mongodb_connection_string
```

## 📁 Project Structure

```
House-Lucky-Draw/
├── pages/
│   ├── index.js          # Landing page
│   ├── prizes.js         # Prizes & rules
│   ├── payment.js        # Payment form
│   ├── dashboard.js      # Public entries
│   ├── _app.js           # App wrapper
│   └── api/
│       ├── payment.js    # Payment API
│       └── entries.js    # Entries API
├── components/
│   └── Footer.js         # Footer component
├── styles/
│   └── globals.css       # Global styles
└── public/
    └── (images)
```

## 🔐 Security Features

- Razorpay secure payment gateway
- Server-side payment verification
- Masked participant names on public dashboard
- Environment variables for sensitive data

## 📝 Legal Compliance

⚠️ **Important**: This lottery/raffle system involves paid entries and valuable prizes. Ensure compliance with:

- Indian Prize Competition Act, 1955
- State-specific lottery laws
- GST registration for business
- Legal consultation recommended before launch

## 🛠️ Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Payments**: Razorpay UPI
- **Hosting**: Vercel (recommended)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Deploy to Other Platforms

- **Netlify**: Use `next export` for static build
- **Azure**: Use Azure Web App for Node.js
- **AWS**: Use Amplify or EC2

## 📞 Support

For questions or issues, contact: [your-email@example.com]

## 📄 License

MIT License - feel free to use for your own projects

---

**Built with ❤️ for transparent lucky draw competitions**
