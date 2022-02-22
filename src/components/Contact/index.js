import React, { useState } from "react";

function ContactForm() {
    //Hook that will manage the data - set initial states to empty strings
    const [formState, setFormState] = useState({ name: '', email:'', message:''});
    //destructure formState objcet into its named properties
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" defaultValue={name}>Name:</label>
                    <input type="text" onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email" defaultValue={email}>Email address:</label>
                    <input type="email" onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message" defaultValue={message}>Message:</label>
                    <textarea onChange={handleChange} name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;