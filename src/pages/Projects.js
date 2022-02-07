const FeaturedProjects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='section-title' data-aos='zoom-in' data-aos-duration='1500'>
        Some Things I've Built
      </h2>

      <div className='section-content'>
        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <h3>Lorem ipsumr</h3>
          <p className='section-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae lacinia dolor. Vestibulum ut elit eget sem egestas
            vehicula. Curabitur a feugiat mauris. Ut imperdiet facilisis libero
            ac faucibus.
          </p>
          <div className='technologies'>
            <p>React</p>
            <p>Styled Components</p>
            <p>Express</p>
            <p>MongoDB</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/'>
              test
            </a>
            <a href='http://github.com/'>
              test
            </a>
          </div>
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Lorem ipsum</h3>
          <p className='section-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae lacinia dolor. Vestibulum ut elit eget sem egestas
            vehicula. Curabitur a feugiat mauris. Ut imperdiet facilisis libero
            ac faucibus.
          </p>
          <div className='technologies'>
            <p>React</p>
            <p>CSS3</p>
            <p>RapidApi</p>
            <p>Open Weather Map</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/'>
              test
            </a>
            <a href='https://github.com/'>
              test
            </a>
          </div>
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1200'
        >
          <h3>Lorem ipsum</h3>
          <p className='section-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vitae lacinia dolor. Vestibulum ut elit eget sem egestas
            vehicula. Curabitur a feugiat mauris. Ut imperdiet facilisis libero
            ac faucibus.
          </p>
          <div className='technologies'>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/'>
              test
            </a>
            <a href='https://github.com/'>
              test
            </a>
          </div>
        </div>
        {/* End of Project */}
      </div>
    </section>
  );
};

export default FeaturedProjects;