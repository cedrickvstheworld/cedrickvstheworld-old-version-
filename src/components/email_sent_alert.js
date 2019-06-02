import React, { Component } from 'react'


// css
import '../static/css/email_sent.css';

class EmailSent extends Component {
  constructor() {
    super();
    this.close_email_sent_modal = this.close_email_sent_modal.bind(this);
  }


  close_email_sent_modal() {
      document.getElementById('email-sent-container').style.backgroundColor = 'transparent';
      let delete_memo_modal = document.getElementById('email-sent-container');
      delete_memo_modal.classList.add('animated');
      delete_memo_modal.classList.add('bounceOutDown');
      setTimeout(() => {
          delete_memo_modal.className = '';
          delete_memo_modal.style.display = 'none';
          delete_memo_modal.style.backgroundColor = 'rgba(0, 0, 0, 0.397)';
      clearTimeout();
      }, 1000);

  }

  render() {
    return (
      <div className="EmailSent">
          <div id="email-sent-container">
            <div id="email-sent-confirm-box" className="animated bounceInUp light-green darken-3">
                <div className="center">
                    <span id="email-sent-close"><i onClick={this.close_email_sent_modal} className="fas fa-times white-text"></i></span>
                    <h6 id="alert-email-sent" className="white-text">Your message was sent.<br />
                        Thank you for pinging me!</h6><br />
                </div>    
            </div>
        </div>
      </div>
    )
  }
}

export default EmailSent;