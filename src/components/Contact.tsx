import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';
import { ContactInfo } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  contact: ContactInfo;
}

const Contact = ({ contact }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.contact-heading', {
        y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-parchment overflow-hidden">
      <div className="container-max">
        <div className="divider mb-16" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-[11px] tracking-[0.25em] text-muted uppercase mb-3">Get In Touch</p>
            <h2 className="contact-heading font-serif font-black text-5xl md:text-6xl text-ntext leading-none">Contact</h2>
          </div>
          <p className="text-xs text-muted max-w-sm leading-relaxed">
            新しいプロジェクトのご相談や、お問い合わせがございましたら、
            お気軽にご連絡ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">Connect</h3>
              <p className="text-sm text-ntext/70 leading-relaxed mb-6">
                下記のフォームまたはSNSからご連絡ください。お仕事のご依頼、技術相談、何でもお気軽にどうぞ。
              </p>

              <div className="flex gap-4">
                {contact.twitter && (
                  <motion.a
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-warm flex items-center justify-center text-muted hover:bg-accent hover:text-cream hover:border-accent transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter size={16} />
                  </motion.a>
                )}
                {contact.instagram && (
                  <motion.a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-warm flex items-center justify-center text-muted hover:bg-accent hover:text-cream hover:border-accent transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={16} />
                  </motion.a>
                )}
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-warm p-6">
              <p className="text-[10px] tracking-widest text-muted uppercase mb-2">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-medium text-ntext hover:underline underline-offset-4 transition-all"
              >
                {contact.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
