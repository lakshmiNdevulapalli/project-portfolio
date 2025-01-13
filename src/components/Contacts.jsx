import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState(""); // Initialize as an empty string
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); // Destructure formState for errors

    // EmailJS configuration
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_DMn31SiY5QRTPEfww6oM7";

    // Handle form submission
    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            userID
        );
        r.target.reset(); // Reset the form after submission
    };

    // Send email using EmailJS
    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs
            .send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage(
                    "Form sent successfully! I'll contact you as soon as possible."
                );
            })
            .catch((err) =>
                console.error(`Oh No! Something went wrong! ${err}`)
            );
    };

    return (
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>
                    Please fill out this form to get in touch, and I will contact you as
                    soon as I can! 😉
                </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6 col-xs-12">
                            {/* Name Input */}
                            <div className="text-center">
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name within 20 characters",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.name?.message}</span>

                            {/* Phone Input */}
                            <div className="text-center">
                                <input
                                    id="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    {...register("phone", {
                                        required: "Please enter your phone",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.phone?.message}</span>

                            {/* Email Input */}
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "Please enter your email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email format",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.email?.message}</span>

                            {/* Subject Input */}
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", {
                                        required: "Please enter the subject",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.subject?.message}</span>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6 col-xs-12">
                            {/* Description Input */}
                            <div className="text-center">
                <textarea
                    id="description"
                    className="form-control"
                    placeholder="Enter your description here..."
                    name="description"
                    {...register("description", {
                        required: "Please describe your requirements!",
                    })}
                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                {errors.description?.message}
              </span>
                            {/* Submit Button */}
                            <button className="btn-main-offer contact-btn" type="submit">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;