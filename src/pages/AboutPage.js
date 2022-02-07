const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2 className='section-title' data-aos='zoom-in' data-aos-duration='1500'>
          About Me
        </h2>
        <div className='section-content'>
          <p className='section-text'>
            I am a Front End Web Developer.
            <br />
            I finished a Full Stack Coding Bootcamp through SMU and with the skills and technologies that i have
            learned I can say I am fully confident in my skills to become a Front End Developer.
            <br />
            Here are a few technologies I've been working with:
          </p>

          <div className='technologies'>
            <div className='single-technology'>
              <p>HTML</p>
            </div>
            <div className='single-technology'>
              <p>CSS</p>
            </div>
            <div className='single-technology'>
              <p>JavaScript</p>
            </div>
            <div className='single-technology'>
              <p>React</p>
            </div>
            <div className='single-technology'>
              <p>MySQL</p>
            </div>
            <div className='single-technology'>
              <p>Node.js</p>
            </div>
            <div className='single-technology'>
              <p>HandleBars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;