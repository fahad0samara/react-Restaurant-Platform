import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Mail, CreditCard, QrCode } from 'lucide-react';
import QRCode from 'react-qr-code';
import Navbar from '../../components/Navbar';

const giftCardDesigns = [
  {
    id: '1',
    name: 'Classic Elegance',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Modern Dining',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80'
  }
];

export default function GiftCards() {
  const [amount, setAmount] = useState('50');
  const [selectedDesign, setSelectedDesign] = useState(giftCardDesigns[0]);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-2xl font-semibold mb-8">Gift Cards</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Select Amount</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['25', '50', '100', '150', '200', '250'].map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value)}
                    className={`py-2 rounded-md ${
                      amount === value
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-medium mb-4">Choose Design</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {giftCardDesigns.map((design) => (
                  <button
                    key={design.id}
                    onClick={() => setSelectedDesign(design)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedDesign.id === design.id ? 'ring-2 ring-red-600' : ''
                    }`}
                  >
                    <img
                      src={design.image}
                      alt={design.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-medium">{design.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-medium mb-4">Recipient Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter recipient's email"
                    />
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personal Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    rows={4}
                    placeholder="Add a personal message..."
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-medium mb-4">Preview</h3>
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedDesign.image}
                    alt={selectedDesign.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Gift className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-semibold">${amount}</div>
                      <div className="text-sm">Gift Card</div>
                    </div>
                  </div>
                </div>

                {showQR && (
                  <div className="flex justify-center mb-4">
                    <QRCode
                      value={`GIFTCARD-${selectedDesign.id}-${amount}`}
                      size={128}
                    />
                  </div>
                )}

                <button
                  onClick={() => setShowQR(!showQR)}
                  className="w-full flex items-center justify-center gap-2 py-2 border rounded-md mb-4"
                >
                  <QrCode className="h-5 w-5" />
                  {showQR ? 'Hide QR Code' : 'Show QR Code'}
                </button>

                <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 flex items-center justify-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Purchase Gift Card
                </button>
              </div>

              <div className="text-sm text-gray-600">
                <h4 className="font-medium mb-2">Terms & Conditions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gift cards are valid for 12 months from the date of purchase</li>
                  <li>Can be used for dining, events, and cooking classes</li>
                  <li>Non-refundable and cannot be exchanged for cash</li>
                  <li>Lost or stolen gift cards cannot be replaced</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}