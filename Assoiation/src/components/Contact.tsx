import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: t('success_message') });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || t('error_message') });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: t('error_message') });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative bg-[#050505] text-white py-24 px-4 md:px-[70px] overflow-hidden" id="contact">
      
      {/* Background Grid Pattern (From Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-4 block">{t('contact_header')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('get_in_touch')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('contact_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden h-full">
            <h3 className="text-2xl font-bold mb-8 text-white">{t('contact_info_title')}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#FACC15]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">{t('phone')}</h4>
                  <p className="text-gray-400 hover:text-[#FACC15] transition-colors">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#FACC15]">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">{t('email')}</h4>
                  <p className="text-gray-400 hover:text-[#FACC15] transition-colors">info@association.com</p>
                  <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#FACC15]">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">{t('office_label')}</h4>
                  <p className="text-gray-400">123 Business Avenue</p>
                  <p className="text-gray-500 text-sm mt-1">Suite 100, Tech City, TC 90210</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              {['X', 'Facebook', 'LinkedIn'].map((social, idx) => (
                <button key={idx} className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300 text-gray-400">
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" opacity="0.5"/> 
                    {/* Placeholder icon path, keeping it simple as specific paths were long */}
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0a0a0a] rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">{t('send_message_title')}</h3>
            
            {status.type && (
              <div className={`mb-6 p-4 rounded-xl text-sm ${
                status.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                  : 'bg-red-500/10 border border-red-500/20 text-red-400'
              }`}>
                {status.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t('full_name_label')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all duration-200 outline-none placeholder-gray-600"
                    placeholder={t('placeholder_name')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t('email_address_label')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all duration-200 outline-none placeholder-gray-600"
                    placeholder={t('placeholder_email')}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">{t('subject_label')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all duration-200 outline-none placeholder-gray-600"
                  placeholder={t('placeholder_subject')}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{t('message_label')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#FACC15] focus:border-transparent transition-all duration-200 outline-none resize-none placeholder-gray-600"
                  placeholder={t('placeholder_message')}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#EAB308] transform hover:-translate-y-0.5'} bg-[#FACC15] text-black font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-[#FACC15]/20 transition-all duration-200 flex items-center justify-center space-x-2`}
              >
                <span>{loading ? t('sending_btn') : t('send_message_btn')}</span>
                {!loading && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
