import axios from 'axios';

import config from '../../env.config';

const submitEmail = async (type, data) => {
  const emailData = {
    to: config.EMAIL_ACC,
    subject: `${type} Form Submission`,
    text: Object.values(data).join('\n'),
  };

  try {
    const response = await axios.post('/api/sendEmail', emailData);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw new Error('Error sending email');
  }
};

export default submitEmail;
