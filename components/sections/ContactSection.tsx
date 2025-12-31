'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name': return !value.trim() ? 'Please enter your name' : value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email': return !value.trim() ? 'Please enter your email address' : !validateEmail(value) ? 'Please enter a valid email address' : '';
      case 'subject': return !value.trim() ? 'Please enter a subject' : '';
      case 'message': return !value.trim() ? 'Please enter a message' : value.length < 10 ? 'Message must be at least 10 characters' : '';
      default: return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: validateField('name', formData.name), email: validateField('email', formData.email), subject: validateField('subject', formData.subject), message: validateField('message', formData.message) };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) return;

    setIsSubmitting(true);
    try {
      const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
      if (FORM_ENDPOINT !== 'https://formspree.io/f/YOUR_FORM_ID') {
        const response = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        if (!response.ok) throw new Error('Failed');
      } else {
        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      }
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch { alert('Failed to send message. Please try again.'); }
    finally { setIsSubmitting(false); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) setErrors({ ...errors, [name]: '' });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const } } };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, title: 'Location', value: siteConfig.location, href: null },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div className="max-w-[980px] mx-auto px-6" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">Get in Touch</h2>
          <div className="modern-divider mb-6" />
          <p className="text-[16px] text-secondary max-w-[600px] mx-auto leading-relaxed">
            Feel free to reach out for project inquiries, collaboration opportunities, or any questions you may have.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-[1200px] mx-auto">
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} className="glass-card no-hover p-6" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.5} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.href ? <a href={info.href} className="text-[14px] text-secondary hover:text-accent transition-colors">{info.value}</a> : <p className="text-[14px] text-secondary">{info.value}</p>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="lg:col-span-3 glass-card no-hover p-8">
            {submitSuccess && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-[14px]">
                Message sent successfully!
              </motion.div>
            )}

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-medium text-foreground mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`modern-input w-full ${errors.name ? 'border-red-500' : ''}`} placeholder="John Doe" />
                  {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-foreground mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`modern-input w-full ${errors.email ? 'border-red-500' : ''}`} placeholder="your.email@example.com" />
                  {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[14px] font-medium text-foreground mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} className={`modern-input w-full ${errors.subject ? 'border-red-500' : ''}`} placeholder="Project Inquiry" />
                {errors.subject && <p className="mt-1 text-[12px] text-red-500">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-[14px] font-medium text-foreground mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={6} className={`modern-input w-full resize-none ${errors.message ? 'border-red-500' : ''}`} placeholder="Please enter your message here..." />
                {errors.message && <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>}
              </div>
              <motion.button type="submit" disabled={isSubmitting} className="modern-button w-full flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {isSubmitting ? 'Sending...' : <><span>Send Message</span><Send size={16} strokeWidth={1.5} /></>}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
