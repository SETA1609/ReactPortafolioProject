import React from 'react';
import "./ContactForm.css";

function ContactForm() {
    return (
        <div className='form' id='contact'>
            <form>
                <label htmlFor='name'></label>
                <input id='name' type='text' placeholder='Name' />
                <label htmlFor='email'></label>
                <input id='email' type='email' placeholder='Email' />
                <label htmlFor='type'></label>
                <select id='type' name='type'>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor='comment'></label>
                <textarea id='comment' placeholder='Your message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
