import React, { useState } from "react"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState();
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_DMn31SiY5QRTPEfww6oM7"

    const onSubmit = (data, r) => {
        sendEmail(serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent Successfully! I'll contact you as soon as possible.")
          }).catch(err => console.error(`Oh No! Something went wrong! ${err}`))
      }

    return (
        <div id="contact" className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out this form to get in touch and I will contact you as soon as I can! 😉 </p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <div className="text-center">
                                <input id="name" type="text" className="form-control" placeholder="Name" name="name" 
                                    ref={register({required: "Please enter your name", maxLength: {value: 20, message: "Please enter a name within 20 characters"}})}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.name && errors.name.message}</span>
                            {/* Phone Input */}
                            <div className="text-center">
                                <input id="phone" type="text" className="form-control" placeholder="Phone Number" name="phone"
                                    ref={register({required: "Please enter your phone"})}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.phone && errors.phone.message}</span>
                            {/* Email Input */}
                            <div className="text-center">
                                <input id="email" type="email" className="form-control" placeholder="Email" name="email"
                                    ref={register({required: "Please enter your email", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email"}})}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.email && errors.email.message}</span>
                            {/* Name Input */}
                            <div className="text-center">
                                <input id="subject" type="text" className="form-control" placeholder="Subject" name="subject"
                                    ref={register({required: "Oye! Common you forgot the subject Mate!"})}
                                />
                                <div className="line"></div>
                            </div>    
                            <span className="error-message">{errors.subject && errors.subject.message}</span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* Description Input */}
                            <div className="text-center">
                                <textarea id="description" type="text" className="form-control" placeholder="Enter your description here..." name="description"
                                    ref={register({required: "Please describe your requirements!"})}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.description && errors.description.message}</span>
                            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
