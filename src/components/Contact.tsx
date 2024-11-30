import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Visit Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-gray-600">123 Gourmet Street<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Thursday: 5:00 PM - 10:00 PM<br />
                  Friday - Saturday: 5:00 PM - 11:00 PM<br />
                  Sunday: 5:00 PM - 9:00 PM
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-gray-600">(212) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-600">reservations@saveur.com</p>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Map integration would go here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Integration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}