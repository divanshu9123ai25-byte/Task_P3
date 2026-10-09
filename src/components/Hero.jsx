function Hero() {
  return (
    <div>
      <section className="banner">
        <img src="/assets/banner.jpg" alt="Website banner" />
        <div className="banner-text">
          Hey, I'm Divanshu Mittal
        </div>
      </section>

      <section id="about" className="profile">
        <img src="/assets/profile.jpg" alt="Profile photo" />

        <div>
          <h1>Divanshu Mittal</h1>

          <p>
            Hello! I am a Chitkara University student with a strong interest
            in web development, programming, and modern technology.
          </p>

          <p>
            I like creating creative websites and learning new programming
            skills through practical projects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;