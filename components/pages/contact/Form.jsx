'use client';

import React from "react";

import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';


export default function Form() {

  const [phoneNumber, setPhoneNumber] = React.useState('');
 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handlePhoneNumberChange = (value, country) => {
    setPhoneNumber(value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="contact-form flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group flex flex-col gap-3">
        <label htmlFor="first-name">First Name *</label>
        <input
          className="p-3 border focus:border-0 hover:border-0 outline-none focus:ring-1 hover:ring-1 rounded-md focus:ring-primaryBlue hover:ring-primaryBlue"
          type="text"
          placeholder="Enter your First Name"
          {...register(
            'first-name',
            { 
              required: 'Please enter your First Name'
            }
          )}
        />
        {errors['first-name'] && <p className="error">{errors['first-name'].message}</p>}
      </div>
      <div className="input-group flex flex-col gap-3">
        <label htmlFor="last-name">Last Name</label>
        <input
          className="p-3 border focus:border-0 hover:border-0 outline-none focus:ring-1 hover:ring-1 rounded-md focus:ring-primaryBlue hover:ring-primaryBlue"
          type="text"
          placeholder="Enter your Last Name"
          {...register(
            'last-name',
            { 
              required: 'Please enter your Last Name'
            }
          )}
        />
        {errors['last-name'] && <p className="error">{errors['last-name'].message}</p>}
      </div>
      <div className="input-group flex flex-col gap-3">
        <label htmlFor="email">Email*</label>
        <input
          className="p-3 border focus:border-0 hover:border-0 outline-none focus:ring-1 hover:ring-1 rounded-md focus:ring-primaryBlue hover:ring-primaryBlue"
          type="email"
          placeholder="Enter Your Email"
          {...register(
            'email',
            { 
              required: 'Please enter your Email',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address'
              }
            }
          )}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="input-group flex flex-col gap-3">
        <label htmlFor="phone-no">Phone Number*</label>
        <PhoneInput
          inputProps={{
            name: "phone-no",
            placeholder: "Enter phone number",
          }}
          country={'ae'}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          enableSearch
          disableSearchIcon
          {...register(
            'phone-no',
            { 
              required: 'Please enter your phone number'
            }
          )}
        />
        {errors['phone-no'] && <p className="error">{errors['phone-no'].message}</p>}
      </div>

      
      <div className="input-group flex flex-col gap-3">
        <label htmlFor="your-message">Your Message</label>
        <textarea
          className="p-3 border focus:border-0 hover:border-0 outline-none focus:ring-1 hover:ring-1 rounded-md focus:ring-primaryBlue hover:ring-primaryBlue"
          rows={4}
          placeholder="Enter your Message"
          type="text"
          {...register(
            'your-message',
            { 
              required: 'Please enter your Message'
            }
          )}
        />
        {errors['your-message'] && <p className="error">{errors['your-message'].message}</p>}
      </div>
      <button className="p-3 rounded-md bg-primaryBlue text-white" type="submit">Send Message</button>
    </form>
  );
}
