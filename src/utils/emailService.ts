export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch('https://parv-jain-cyber-verse.vercel.app/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
