import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  SERVICE_ID: "service_9b6htgh", 
  TEMPLATE_ID: "template_3al7eoe",
  PUBLIC_KEY: "a-SMuzuTvSEsSfHwp",
};

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      formData,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};
