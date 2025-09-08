import React, { useState, useRef } from 'react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { Toast } from 'bootstrap';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const isDarkTheme = useTheme();

  const [form, setForm] = useState({ name: '', email: '', type: 'hireMe', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const toastRef = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'danger'>('success');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = t('contact.errors.name');
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = t('contact.errors.email');
    if (!form.message.trim()) {
      newErrors.message = t('contact.errors.message');
    } else if (form.message.trim().length < 25) {
      newErrors.message = t('contact.errors.messageLength');
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          setToastMessage(`Thank you ${form.name}, your message was sent successfully!`);
          setToastType('success');
          setForm({ name: '', email: '', type: 'hireMe', message: '' });
        } else {
          setToastMessage('There was an error sending your message.');
          setToastType('danger');
        }
        setSubmitting(false);
        if (toastRef.current) {
          const toast = new Toast(toastRef.current);
          toast.show();
        }
      }, 1000);
    }
  };

  return (
    <div className='form d-flex justify-content-center align-items-center text-center' id='contact'>
      <form className='d-flex flex-column gap-3' onSubmit={handleSubmit} noValidate>
        <div className='fs-1'>{t('contact.title')}</div>
        <label htmlFor='name' className='form-label fw-bold mb-1'>{t('contact.name')}</label>
        <input id='name' type='text' className='form-control' value={form.name} onChange={handleChange} />
        {errors.name && <div className='text-danger'>{errors.name}</div>}

        <label htmlFor='email' className='form-label fw-bold mb-1'>{t('contact.email')}</label>
        <input id='email' type='email' className='form-control' value={form.email} onChange={handleChange} />
        {errors.email && <div className='text-danger'>{errors.email}</div>}

        <label htmlFor='type' className='form-label fw-bold mb-1'>{t('contact.type.label')}</label>
        <select id='type' name='type' className='form-select' value={form.type} onChange={handleChange}>
          <option value="hireMe">{t('contact.type.hireMe')}</option>
          <option value="openSource">{t('contact.type.openSource')}</option>
          <option value="other">{t('contact.type.other')}</option>
        </select>

        <label htmlFor='message' className='form-label fw-bold mb-1'>{t('contact.message')}</label>
        <textarea id='message' className='form-control' value={form.message} onChange={handleChange}></textarea>
        {errors.message && <div className='text-danger'>{errors.message}</div>}

        <button type='submit' className={`btn btn-${isDarkTheme ? 'light' : 'dark'} mt-2`} disabled={submitting}>
          {submitting ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              data-testid="loading-spinner"
            ></span>
          ) : (
            t('contact.submit')
          )}
        </button>
      </form>
      <div className='position-fixed top-0 start-50 translate-middle-x p-3' style={{ zIndex: 11 }}>
        <div ref={toastRef} className={`toast align-items-center text-bg-${toastType} border-0`} role='alert' aria-live='assertive' aria-atomic='true'>
          <div className='d-flex'>
            <div className='toast-body'>{toastMessage}</div>
            <button type='button' className='btn-close btn-close-white me-2 m-auto' data-bs-dismiss='toast' aria-label='Close'></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
