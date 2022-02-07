const ContactPage = () => {
  return (
    <section className='contact' id='contact'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Contact
        </h2>
        <div className='section-content'>
          <p>I am looking for job opportunities, and would love to connect! 
           <br />Have a look at my Socials, Email, or my Resume
          </p>
          <div className='project-social'>
            <a href='https://github.com/Alexander-Ramirez/' target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href='https://www.linkedin.com/in/alexander-ramirez-b44445224/' target="_blank" rel="noopener noreferrer">
             Linkedin
            </a>
            <a href='mailto: aleramirez201@gmail.com'>
             Gmail
            </a>
            <a href='https://docs.google.com/document/d/1QibdvibK1iP5eEXiQMCVpYd3j9wxB5NCmRmui6bRlWo/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
             Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;