function Footer() {
function handleSubscribe(event) {
event.preventDefault();


const email = document.getElementById('footer-email').value;

document.getElementById('footer-message').innerText =
  'Thank you for subscribing, ' + email + '!';

document.getElementById('footer-email').value = '';


}

return ( <footer className="footer">


  {/* Newsletter Signup */}
  <div className="signup">
    <h3>SIGN UP FOR OUR DAILY INSIDER</h3>

    <form onSubmit={handleSubscribe}>
      <input
        type="email"
        id="footer-email"
        placeholder="Enter your email"
        required
      />

      <button type="submit">Subscribe</button>
    </form>

    <p id="footer-message"></p>
  </div>

  {/* Footer Links */}
  <div className="footer-content">

    <div>
      <h3>Explore</h3>
      <p>Home</p>
      <p>Questions</p>
      <p>Articles</p>
      <p>Tutorials</p>
    </div>

    <div>
      <h3>Support</h3>
      <p>FAQs</p>
      <p>Help</p>
      <p><a href="#contact">Contact Us</a></p>
    </div>

    <div>
      <h3>Stay Connected</h3>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Instagram</p>
    </div>

  </div>
  

  {/* Contact Section */}
  <section id="contact" className="contact">
    <h3>Contact Me</h3>

    <p>
      Email:{' '}
      <a href="mailto:divanshu9123.ai25@chikara.edu.in">
        divanshu9123.ai25@chikara.edu.in
      </a>
    </p>

    <p>
      GitHub:{' '}
      <a
        href="https://github.com/divanshu9123ai25-byte"
        target="_blank"
        rel="noreferrer"
      >
        divanshu9123ai25-byte
      </a>
    </p>
  </section>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <h3>DEV@Deakin 2026</h3>

    <div className="footer-links">
      <span>Privacy Policy</span>
      <span>Terms</span>
      <span>Code of Conduct</span>
    </div>
  </div>

</footer>


);
}

export default Footer;
