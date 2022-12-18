import React from 'react';

const contact = () => {
  return (
    <div className="d-flex align-items-center justify-content-between gap-3">
      <div className="contact-form-wrapper d-flex justify-content-center">
        <form action="#" className="contact-form">
          <h5 className="title">Bize Ulaşın</h5>
          <p className="description">
            Sakarya Üniversitesi Hakkında Sorularınızı Bize Sorun
          </p>
          <div>
            <input
              type="text"
              className="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="İsim Soyisim"
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control rounded border-white mb-3 form-input"
              placeholder="E-Posta"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              className="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Mesaj"
              required
            />
          </div>
          <div className="submit-button-wrapper">
            <input type="submit" value="Gönder" />
          </div>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12091.645753895873!2d30.3321715!3d40.7419742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7996fa884f94c03!2sSakarya%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1671297990241!5m2!1str!2str"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default contact;
