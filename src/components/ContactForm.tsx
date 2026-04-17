import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { init, send } from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'success' | 'error';

const schema = yup.object({
  name: yup.string().required('お名前は必須です'),
  email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
  subject: yup.string().required('件名は必須です'),
  message: yup.string().required('メッセージは必須です').min(10, 'メッセージは10文字以上で入力してください')
}).required();

const ContactForm = () => {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = async (data: FormData) => {
    const userID = import.meta.env.VITE_EMAIL_API_KEY;
    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

    if (userID && serviceID && templateID) {
      init(userID);
      try {
        await send(serviceID, templateID, {
          name: data.name,
          email: data.email,
          message: data.message,
          subject: data.subject,
        });
        setStatus('success');
        reset();
      } catch {
        setStatus('error');
      }
    } else {
      setStatus('error');
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-0 py-3 bg-transparent border-b text-ntext text-sm focus:outline-none transition-colors placeholder:text-muted/40 ${
      hasError ? 'border-red-500' : 'border-warm focus:border-ntext'
    }`;

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start text-left py-8 gap-5 border-t border-warm"
        >
          <CheckCircle2 size={32} className="text-ntext" strokeWidth={1.5} />
          <div>
            <p className="text-base font-medium text-ntext mb-2">送信が完了しました</p>
            <p className="text-xs text-muted leading-relaxed">
              お問い合わせありがとうございます。内容を確認の上、折り返しご連絡いたします。
            </p>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="text-[11px] tracking-[0.2em] uppercase text-muted hover:text-ntext transition-colors underline underline-offset-4"
          >
            別の問い合わせをする
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7"
        >
          <div>
            <label htmlFor="name" className="block text-[10px] text-muted tracking-[0.2em] uppercase mb-2">
              お名前
            </label>
            <input type="text" id="name" {...register('name')} className={inputClass(!!errors.name)} />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-[10px] text-muted tracking-[0.2em] uppercase mb-2">
              メールアドレス
            </label>
            <input type="email" id="email" {...register('email')} className={inputClass(!!errors.email)} />
            {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-[10px] text-muted tracking-[0.2em] uppercase mb-2">
              件名
            </label>
            <input type="text" id="subject" {...register('subject')} className={inputClass(!!errors.subject)} />
            {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-[10px] text-muted tracking-[0.2em] uppercase mb-2">
              メッセージ
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={5}
              className={`${inputClass(!!errors.message)} resize-none`}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-xs text-red-500 border border-red-500/30 px-4 py-3">
              <AlertCircle size={14} className="flex-shrink-0" />
              送信に失敗しました。時間をおいて再度お試しください。
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-ntext text-cream px-7 py-3 text-xs tracking-[0.2em] uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:bg-ntext/85 transition-colors"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-3 w-3 border-b border-cream" />
                送信中
              </>
            ) : (
              <>
                <Send size={13} />
                送信する
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
