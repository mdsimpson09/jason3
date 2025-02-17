"use client";

import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://formspree.io/f/mbldpdea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, emailTo: 'jdwaynick@gmail.com' }),
    });

    setIsSubmitting(false);
    if (response.ok) {
      alert('Submitted successfully! Thank you for reaching out!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } else {
      alert('Failed to send your message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 rounded-none shadow-md border-2 border-gray-400">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Label htmlFor="firstName" className="text-gray-800 text-lg font-medium mb-2">First Name</Label>
          <Input id="firstName" type="text" required value={formData.firstName} className="border-2 border-gray-300 focus:border-gray-400 focus:font-semibold" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-gray-800 text-lg font-medium mb-2">Last Name</Label>
          <Input id="lastName" type="text" required value={formData.lastName} className="border-2 border-gray-300 focus:border-gray-400 focus:font-semibold" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        </div>
      </div>
      <div>
        <Label htmlFor="email" className="text-lg font-medium mb-2 text-gray-800">Email</Label>
        <Input id="email" type="email" required value={formData.email} className="border-2 border-gray-300 focus:border-gray-400 focus:font-semibold" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <div>
        <Label htmlFor="phone" className="text-lg font-medium mb-2 text-gray-800">Phone Number</Label>
        <Input id="phone" type="tel" required value={formData.phone} className="border-2 border-gray-300 focus:border-gray-400 focus:font-semibold" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      </div>
      <div>
        <Label htmlFor="message" className="text-lg font-medium mb-2 text-gray-800">Message</Label>
        <Textarea id="message" rows={4} required value={formData.message} className="border-2 border-gray-300 focus:border-gray-400 focus:font-semibold" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full border-2 border-gray-400 bg-transparent text-black hover:bg-black hover:text-white py-6 text-lg font-semibold transition">
        {isSubmitting ? 'Submitting...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
