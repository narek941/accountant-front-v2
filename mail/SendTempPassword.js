// import { MAIL_SENDER_EMAIL } from '../constants/index';
// import { mailTransporter } from '../config/index';

// const sendTempPassword = async (tmpPwd) => {
//   const mailSubject = 'Temporary Password';
//   const mailHTML = `
//       <h1>Read - Your temporary password</h1>
//       <p>Your temporary password is: <strong>${tmpPwd.code}</strong></p>
//     `;

//   const mailOptions = {
//     from: MAIL_SENDER_EMAIL,
//     to: tmpPwd.email,
//     subject: mailSubject,
//     html: mailHTML,
//   };

//   await mailTransporter.sendMail(mailOptions);
// };

// export default sendTempPassword;
