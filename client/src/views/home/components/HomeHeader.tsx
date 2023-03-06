const HomeHeader = () => {
  return (
    <section id="home" className="home">
      <div className="home-decor">
        <div className="home-circle1">
          <img
            // src={`${process.env.PUBLIC_URL}/assets/images/main-banner3.png`}
            alt=""
          />
        </div>
        <div className="home-circle2">
          <img
            // src={`${process.env.PUBLIC_URL}/assets/images/main-banner12.png`}
            alt=""
          />
        </div>
        <div className="home-circle3">
          <img
            // src={`${process.env.PUBLIC_URL}/assets/images/main-banner1.png`}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="home-contain">
              <div>
                <h4>Bienvenue sur</h4>
                <h1>
                  <span className="f-bold">joya </span>
                  <span className="f-bold f-color">app</span>
                </h1>
                <p>
                  Surveillez l'état de vos plantes et apprenez à les entretenir
                  depuis votre téléphone avec l'app JOYA.
                </p>
                <a
                  href="javascript"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img
                    //src={`${process.env.PUBLIC_URL}/assets/images/appstore.png`}
                    alt="appstore"
                    className="store"
                  />
                </a>
                <a
                  href="javascript"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img
                    className="ml-10 store"
                    // src={`${process.env.PUBLIC_URL}/assets/images/play-store.png`}
                    alt="play-store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 offset-md-1">
            <div className="home-right home-contain">
              <img
                // src={`${process.env.PUBLIC_URL}/assets/images/mobile.png`}
                className="img-fluid"
                alt="mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
