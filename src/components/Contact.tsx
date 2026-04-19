import { motion } from 'framer-motion';
import { Twitter, Instagram, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import { ContactInfo } from '../types';

interface ContactProps {
  contact: ContactInfo;
}

const Contact = ({ contact }: ContactProps) => {
  const socials = [
    { href: contact.twitter, icon: Twitter, name: 'Twitter' },
    { href: contact.instagram, icon: Instagram, name: 'Instagram' },
  ].filter(s => s.href);

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section id="contact" className="section-padding bg-cream border-t border-warm">
      <div className="container-max">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">07 / Contact</p>
            <h2 className="font-serif font-semibold text-ntext text-3xl md:text-4xl leading-tight">
              お問い合わせ
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-muted leading-[1.95] max-w-xl">
              採用・副業・AI 導入支援のご相談、お気軽にご連絡ください。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            className="md:col-span-5 space-y-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-ntext text-lg font-medium hover:text-muted transition-colors"
              >
                <Mail size={16} className="text-muted" />
                {contact.email}
              </a>
            </div>

            {socials.length > 0 && (
              <div>
                <p className="eyebrow mb-3">Social</p>
                <div className="flex flex-col gap-3">
                  {socials.map(({ icon: Icon, href, name }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm text-muted hover:text-ntext transition-colors"
                    >
                      <Icon size={14} />
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-warm">
              <p className="text-xs text-muted leading-relaxed">
                お仕事のご依頼、技術相談、AI 活用のご相談など、何でもどうぞ。
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-7"
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
