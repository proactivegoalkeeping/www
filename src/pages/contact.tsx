import React, { useState } from 'react';

import { Aside } from '../components/aside';
import { LayoutDefault } from '../layouts/default';
import SEO from '../components/seo';
import styles from './contact.module.scss';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function checkIsValid(event) {
  const name = document.getElementById('contactform-sendername').value;
  const email = document.getElementById('contactform-email').value;
  const subject = document.getElementById('contactform-subject').value;
  const message = document.getElementById('contactform-message').value;
  let isValid = true;
  let errorMessage = '';

  if (!name) {
    errorMessage = 'Please enter your name!';
    isValid = false;
    return;
  }

  if (!email) {
    errorMessage = 'Please enter your e-mail!';
    isValid = false;
  }

  if (!isValidEmail(email)) {
    errorMessage = 'Please enter a correct e-mail address!';
    isValid = false;
  }

  if (!subject) {
    errorMessage = 'Please provide a subject for the message!';
    isValid = false;
  }

  if (!message) {
    errorMessage = 'Please enter your message!';
    isValid = false;
  }

  if (message && message.length < 10) {
    errorMessage = 'Your message is too short!';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
    window.alert(errorMessage);
  }
}

const ContactPage = () => {
  return (
    <LayoutDefault>
      <SEO title="Contact" />
      <div className="row">
        <Aside />
        <section className="col-md-8">
          <h2 className="text-center my-4">Contact us</h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
          </p>

          <div className="row">
            <div className="col-md-8 pb-5">
              <form
                name="ayfc-contact"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <p className="hidden">
                  <label htmlFor="bot-field">
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="name"
                        id="contactform-sendername"
                        className="form-control"
                        maxLength="24"
                        required
                      />
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="email"
                        id="contactform-email"
                        maxLength="50"
                        className="form-control"
                        required
                      />
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="subject"
                        id="contactform-subject"
                        maxLength="24"
                        className="form-control"
                        required
                      />
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        name="message"
                        id="contactform-message"
                        maxLength="200"
                        rows="7"
                        className="form-control md-textarea"
                        required
                      ></textarea>
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={checkIsValid}
                  >
                    Send
                  </button>
                </div>
              </form>

              <div className="status"></div>
            </div>
            <div className="col-md-4 text-left">
              <h5>Contact Postal address:</h5>
              <p>Postal address</p>
              <div className={styles.map}>
                <a
                  href="https://www.google.com/maps/place/Manor+House+Sports+Pavilion,+Abbots+Langley+WD5+0BU,+Wielka+Brytania/@51.7033278,-0.4237042,17z/data=!4m5!3m4!1s0x48764035f97c4df5:0xf3a4423c8cfe64ca!8m2!3d51.7034674!4d-0.4215726"
                  target="_blank"
                >
                  club map image
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutDefault>
  );
};

export default ContactPage;
