import { useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import { LoadingSpinner } from '../common/loading/Loading';
import { sendEmail } from '../../services/email';

const validationRules = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  message: { required: true, minLength: 10 }
};

const initialState = {
  name: '',
  email: '',
  message: ''
};

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useFormValidation(initialState, validationRules);

  const onSubmit = async (formData) => {
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
      className="space-y-6 max-w-lg mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                     ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                     ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={values.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                     ${errors.message ? 'border-red-500' : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {submitStatus.message && (
        <div className={`p-4 rounded-md ${
          submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isSubmitting ? <LoadingSpinner size="small" /> : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;