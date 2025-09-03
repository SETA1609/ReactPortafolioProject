import React from 'react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const isDarkTheme = useTheme();
  return (
    <div className='form d-flex justify-content-center align-items-center text-center' id='contact'>
      <form className='d-flex flex-column gap-3'>
        <div className='fs-1'>{t('contact.title')}</div>
        <label htmlFor='name' className='form-label fw-bold mb-1'>{t('contact.name')}</label>
        <input id='name' type='text' className='form-control' />

        <label htmlFor='email' className='form-label fw-bold mb-1'>{t('contact.email')}</label>
        <input id='email' type='email' className='form-control' />

        <label htmlFor='type' className='form-label fw-bold mb-1'>{t('contact.type.label')}</label>
        <select id='type' name='type' className='form-select'>
          <option value="hireMe">{t('contact.type.hireMe')}</option>
          <option value="openSource">{t('contact.type.openSource')}</option>
          <option value="other">{t('contact.type.other')}</option>
        </select>

        <label htmlFor='comment' className='form-label fw-bold mb-1'>{t('contact.message')}</label>
        <textarea id='comment' className='form-control'></textarea>

        <button type='submit' className={`btn btn-${isDarkTheme ? 'light' : 'dark'} mt-2`}>
          {t('contact.submit')}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
