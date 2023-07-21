import React from 'react';
import "./ContactForm.css";

function ContactForm() {
    return (
        <div className='form'>
            <form>
                <label htmlFor='name'></label>
                <input id='name' type='text' placeholder='Name'></input>
                <label htmlFor='email'></label>
                <input id='email' type='email' placeholder='Email'></input>
                <label htmlFor='type'></label>
                <select id='type' name='type'>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor='comment'></label>
                <textarea id='comment' placeholder='Your message' >Your message</textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;