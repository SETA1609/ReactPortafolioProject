import React from 'react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className='form text-center' id='contact'>
      <form>
    <div className='fs-1'>
    {t('contact.title')}
    </div>
        <label htmlFor='name'>{t('contact.name')}</label>
        <input id='name' type='text' className='form-control' />

        <label htmlFor='email'>{t('contact.email')}</label>
        <input id='email' type='email' className='form-control' />

        <label htmlFor='type'>{t('contact.type.label')}</label>  
        <select id='type' name='type' className='form-select'>
          <option value="hireMe">{t('contact.type.hireMe')}</option>
          <option value="openSource">{t('contact.type.openSource')}</option>
          <option value="other">{t('contact.type.other')}</option>
        </select>

        <label htmlFor='comment'>{t('contact.message')}</label>
        <textarea id='comment' className='form-control'></textarea>

        <button type='submit' className='btn btn-primary mt-2'>{t('contact.submit')}</button>
      </form>
    </div>
  );
}

export default ContactForm;
