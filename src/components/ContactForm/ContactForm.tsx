import React from 'react';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className='form' id='contact'>
      <form>
        <label htmlFor='name'></label>
        <input id='name' type='text' className='form-control' placeholder={t('contact.name')} />
        <label htmlFor='email'></label>
        <input id='email' type='email' className='form-control' placeholder={t('contact.email')} />
        <label htmlFor='type'></label>
        <select id='type' name='type' className='form-select'>
          <option value="hireMe">{t('contact.type.hireMe')}</option>
          <option value="openSource">{t('contact.type.openSource')}</option>
          <option value="other">{t('contact.type.other')}</option>
        </select>
        <label htmlFor='comment'></label>
        <textarea id='comment' className='form-control' placeholder={t('contact.message')}></textarea>
        <button type='submit' className='btn btn-primary mt-2'>{t('contact.submit')}</button>
      </form>
    </div>
  );
}

export default ContactForm;
