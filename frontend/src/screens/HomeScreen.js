import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <div className="paralax-container" id="header">
        <div className="img-header">
          <div className="welcome">
            <img className="disk" src="/images/uploads/disk.png" alt="" />
          </div>
        </div>

        <div className="skew-abajo"></div>
      </div>
      <section className="about-me">
        <div className="info-container">
          <h1 className="info-container__h1">
            <span data-dark>Hi! 👋🏻</span>
            <img
              className="hello-avatar"
              src={'/images/uploads/profile-avatar.png'}
              alt="eduardojasso"
            />
          </h1>
          <div className="sibillingContainer">
            <div className="socialMediaContainerSibilling"></div>
            <div className="socialMediaContainer">
              <ul className="socialMediaContainer__list">
                <li className="socialMediaContainer__list-item">
                  <Link>
                    <i className="fa-brands fa-facebook socialMediaContainer__list-item-icon"></i>
                  </Link>
                </li>
                <li className="socialMediaContainer__list-item">
                  <div className="socialMediaContainer__list-item-a">
                    <i className="fa-brands fa-instagram socialMediaContainer__list-item-icon"></i>
                  </div>
                </li>
                <li className="socialMediaContainer__list-item">
                  <Link>
                    <i className="fa-brands fa-linkedin socialMediaContainer__list-item-icon"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h1 data-dark>About me:</h1>
          <p data-dark>
            Alvar here. I´m an Artist who loves music. This is the only way, for
            me, to express my feelings. I've been creating music since I was a
            little child. But I can't perform in front of an audience. Also,
            there are demons in my head, that kept me from showing my work to
            the world. Right now, I'm living that stage in life called -when
            rent killed Art- Because it's difficult to be an artist. But I'm
            doing my best, I'm putting all my effort into creating new songs. My
            goal is to create a song for each Zodiac Sign. As you may know,
            Gemini and Pisces are already uploaded to my profile. I'm finishing
            the last details with -Cancer- and the next piece will be -Taurus-
            Your help is truly appreciated, Keep on dreaming!
          </p>
        </div>
      </section>

      <section className="our-projects">
        <div className="skew-arriba"></div>
        <div className="deg-background"></div>

        <div className="ejeZproject">
          <div className="container-project">
            <div className="project-title">
              <h2>BLOGS</h2>
            </div>
            <div className="project-img">
            <img src="/images/uploads/rap.jpg" alt="" />
              <img src="/images/uploads/rock.jpg" alt="" />
              <img src="/images/uploads/pop.jpg" alt="" />
              <img src="/images/uploads/classic.jpg" alt="" />
              <img src="/images/uploads/ambient.jpg" alt="" />
              <img src="/images/uploads/jazz.jpg" alt="" />
              <img src="/images/uploads/experimental.jpg" alt="" />
              <img src="/images/uploads/electronic.jpg" alt="" />
              <img src="/images/uploads/folk.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <section id="session3" className="section"></section>
      <section id="session4" className="section"></section>
      <section id="session5" className="section"></section>
      <section id="session6" className="section"></section>
      <section id="session7" className="section"></section>
      <section id="session8" className="section"></section>
      <section id="session9" className="section"></section>
      <section id="session10" className="section"></section>

      <section id="session11" className="section"></section>
      <section id="session12" className="section"></section> */}
    </div>
  );
}

export default HomeScreen;
