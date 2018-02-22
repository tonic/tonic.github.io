import React from 'react';
import LeadsAPI from '../api/LeadsAPI';
import update from 'react-addons-update';

const ContactForm = React.createClass({
  getInitialState() {
    return {
      message: 'Get in Touch',
      subMessage: '',
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

  onSubmit(e) {
    e.preventDefault();

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
        <form action="#" className="form-contact">
          <div className="control">
            <input
              id="form_name"
              name="name"
              onChange={this.handleChange}
              placeholder="Your Name"
              type="text"
              value={this.state.lead.name}
            />
          </div>

          <div className="control">
            <input
              id="form_email"
              name="email"
              onChange={this.handleChange}
              placeholder="Your Email"
              type="text"
              value={this.state.lead.email}
            />
          </div>

          <div className="control">
            <input
              id="form_phone"
              name="phone"
              onChange={this.handleChange}
              placeholder="Your Phone Number"
              type="text"
              value={this.state.lead.phone}
            />
          </div>

          <div className="control">
            <textarea
              id="form_comments"
              name="message"
              onChange={this.handleChange}
              placeholder="What are you looking to do?"
              rows="7"
              type="text"
              value={this.state.lead.message}
            />
          </div>

          <div className="control">
            <button
              className="btn"
              disabled={!this.isValid() || this.state.isSubmitting}
              onClick={this.onSubmit}
              type="submit">
              Submit
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
