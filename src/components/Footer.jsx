function Footer() {
  return (
    <footer className="footer">

      <div className="signup">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>


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
          <p>Contact Us</p>
        </div>


        <div>
          <h3>Stay Connected</h3>

          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

      </div>


      <div className="footer-bottom">

        <h3>DEV@Deakin 2026</h3>

        <div>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;