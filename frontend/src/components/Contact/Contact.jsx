import classes from './Contact.module.css';

const Contact = () => {
   return (
       <div className={classes.contact}>
           <p>
           Welcome to our contact page. We are delighted to receive your inquiries, comments, and suggestions. If you need to get in touch with us, please use the following information:
           </p>
              <p>
            Phone: +1 234 567 8901
            Email: info@taskify.com

            You can also visit us at our physical location:

            Address: 123 Fictional Street
            City: Imaginary City
            Country: Wonderland

            Customer Service Hours:
            Monday to Friday: 9:00 AM - 5:00 PM
            Saturdays: 10:00 AM - 2:00 PM

            Feel free to give us a call or drop us a line for any questions related to our services. Our customer service team will be happy to assist you. If you prefer an email response, we'll strive to get back to you within 24 business hours.

            Thank you for your interest in our website, and we look forward to assisting you soon!
           </p>
       </div>
    );
}

export default Contact;