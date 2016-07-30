import React from 'react';
import LeadsAPI from '../api/LeadsAPI';
import update from 'react-addons-update';

const ContactForm = React.createClass({
  getInitialState() {
    return {
      message: 'Thirsty?',
      subMessage: 'Drop us a line.',
      isSubmitting: false,
      submitted: false,
      lead: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },

  handleChange(event) {
    const newState = update(this.state, {
      lead: {
        [event.target.name]: { $set: event.target.value }
      }
    });

    this.setState(newState);
  },

  onSubmit() {
    this.setState({
      isSubmitting: true
    });

    LeadsAPI.create(this.state.lead)
      .then((response) => {
        this.setState({
          message: 'Thanks for getting in touch!',
          subMessage: 'We\'ll get back to you as soon as we can.',
          isSubmitting: false,
          submitted: true,
          lead: {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
        });
      })
      .catch((error) => {
        this.setState({
          alert: 'Something broke',
          isSubmitting: false
        });
      });
  },

  isValid() {
    return (
      this.state.lead.name !== '' &&
      this.state.lead.email !== '' &&
      this.state.lead.message !== ''
    );
  },

  renderMessage() {
    return (
      <h4>{this.state.message} <span>{this.state.subMessage}</span></h4>
    );
  },

  renderForm() {
    if (!this.state.submitted) {
      return (
        <form action="#" id="contact">
          <div className="control">
            <label htmlFor="form_name">Your Name <span className="required">*</span></label>
            <input
              id="form_name"
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.lead.name}
            />
          </div>

          <div className="control">
            <label htmlFor="form_email">Your Email <span className="required">*</span></label>
            <input
              id="form_email"
              name="email"
              onChange={this.handleChange}
              type="text"
              value={this.state.lead.email}
            />
          </div>

          <div className="control">
            <label htmlFor="form_phone">Your Phone #</label>
            <input
              id="form_phone"
              name="phone"
              onChange={this.handleChange}
              type="text"
              value={this.state.lead.phone}
            />
          </div>

          <div className="control">
            <label htmlFor="form_comments">What are you looking to do? <span className="required">*</span></label>
            <textarea
              id="form_comments"
              name="message"
              onChange={this.handleChange}
              rows="3"
              type="text"
              value={this.state.lead.message}
            />
          </div>

          <div className="control">
            <button
              className="btn btn-hollow"
              disabled={!this.isValid() || this.state.isSubmitting}
              onClick={this.onSubmit}
              type="submit">
              Get in Touch
            </button>
          </div>
        </form>
      );
    }
  },

  render() {
    return (
      <div>
        {this.renderMessage()}
        {this.renderForm()}
      </div>
    );
  }
});

export default ContactForm;
