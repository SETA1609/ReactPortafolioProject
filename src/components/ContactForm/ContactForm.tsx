import React, { useRef } from 'react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { Toast } from 'bootstrap';
import { useFormik } from 'formik';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const isDarkTheme = useTheme();

  interface FormState {
    name: string;
    email: string;
    type: 'hireMe' | 'openSource' | 'other';
    message: string;
  }

  const toastRef = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastType, setToastType] = React.useState<'success' | 'danger'>('success');

  const formik = useFormik<FormState>({
    initialValues: { name: '', email: '', type: 'hireMe', message: '' },
    validate: values => {
      const errs: { [key: string]: string } = {};
      if (!values.name.trim()) errs.name = t('contact.errors.required');
      if (!values.email.trim()) {
        errs.email = t('contact.errors.required');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errs.email = t('contact.errors.invalidEmail');
      }
      if (!values.message.trim()) {
        errs.message = t('contact.errors.required');
      } else if (values.message.trim().length < 25) {
        errs.message = t('contact.errors.messageLength');
      }
      return errs;
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          setToastMessage(`Thank you ${values.name}, your message was sent successfully!`);
          setToastType('success');
          resetForm();
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
    },
  });

  return (
    <div className='form d-flex justify-content-center align-items-center text-center' id='contact'>
      <form className='d-flex flex-column gap-3' onSubmit={formik.handleSubmit} noValidate>
        <div className='fs-1'>{t('contact.title')}</div>
        <label htmlFor='name' className='form-label fw-bold mb-1'>{t('contact.name')}</label>
        <input
          id='name'
          name='name'
          type='text'
          className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className='text-danger'>{formik.errors.name}</div>
        )}

        <label htmlFor='email' className='form-label fw-bold mb-1'>{t('contact.email')}</label>
        <input
          id='email'
          name='email'
          type='email'
          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='text-danger'>{formik.errors.email}</div>
        )}

        <label htmlFor='type' className='form-label fw-bold mb-1'>{t('contact.type.label')}</label>
        <select
          id='type'
          name='type'
          className='form-select'
          value={formik.values.type}
          onChange={formik.handleChange}
        >
          <option value="hireMe">{t('contact.type.hireMe')}</option>
          <option value="openSource">{t('contact.type.openSource')}</option>
          <option value="other">{t('contact.type.other')}</option>
        </select>

        <label htmlFor='message' className='form-label fw-bold mb-1'>{t('contact.message')}</label>
        <textarea
          id='message'
          name='message'
          className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <div className='text-danger'>{formik.errors.message}</div>
        )}

        <button
          type='submit'
          className={`btn btn-${isDarkTheme ? 'light' : 'dark'} mt-2`}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
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
