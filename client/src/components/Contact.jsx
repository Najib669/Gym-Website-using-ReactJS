import React from "react";


function Contact() {
  return (
    <div class="contact">
      <input className="text" type="text" placeholder="Full Name" required />
      <input className="text" type="email" placeholder="Type Your E-Mail" required />
      <textarea className="text" placeholder="Write Here ........"></textarea>
      <input className="send"  type="Submit" value="Send" />
    </div>
  );
}

export default Contact;
