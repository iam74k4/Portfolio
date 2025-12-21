'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'お名前を入力してください';
        else if (value.length < 2) error = 'お名前は2文字以上で入力してください';
        break;
      case 'email':
        if (!value.trim()) error = 'メールアドレスを入力してください';
        else if (!validateEmail(value)) error = '有効なメールアドレスを入力してください';
        break;
      case 'subject':
        if (!value.trim()) error = '件名を入力してください';
        break;
      case 'message':
        if (!value.trim()) error = 'メッセージを入力してください';
        else if (value.length < 10) error = 'メッセージは10文字以上で入力してください';
        break;
    }

    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Formspreeを使用する場合、以下のURLを置き換えてください
      // https://formspree.io/ でフォームを作成し、URLを取得
      const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
      
      // 本番環境でFormspreeが設定されている場合
      if (FORM_ENDPOINT !== 'https://formspree.io/f/YOUR_FORM_ID') {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      } else {
        // 開発環境: mailtoリンクを使用
        const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('メッセージの送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: siteConfig.location,
      href: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-40 relative">
      <motion.div
        className="max-w-[980px] mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="modern-divider mb-6" />
          <p className="text-[16px] text-secondary max-w-[600px] mx-auto leading-relaxed">
            プロジェクトのご相談やお仕事のご依頼など、お気軽にお問い合わせください
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-[1200px] mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="modern-card">
                  <div className="flex items-start gap-4">
                    <Icon size={20} strokeWidth={1} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-body font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[14px] text-secondary hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[14px] text-secondary">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="lg:col-span-3 modern-card"
          >
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-[14px]"
              >
                ✓ メッセージが送信されました！
              </motion.div>
            )}

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[14px] font-medium text-foreground mb-2"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`modern-input w-full ${
                      errors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="山田太郎"
                  />
                  {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-medium text-foreground mb-2"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`modern-input w-full ${
                      errors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[14px] font-medium text-foreground mb-2"
                >
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`modern-input w-full ${
                    errors.subject ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="プロジェクトについて"
                />
                {errors.subject && (
                  <p className="mt-1 text-[12px] text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[14px] font-medium text-foreground mb-2"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={6}
                  className={`modern-input w-full resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="お問い合わせ内容をご記入ください..."
                />
                {errors.message && (
                  <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="modern-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

