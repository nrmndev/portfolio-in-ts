import TopBannerForm from "./typewriter";

const TopBanner = () => {
  return (
    <>
      <section id="AboutMeSection" className="topBanner flex-center">
        <div className="container z-2">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-12 mb-5 mb-md-0 z-2  ox-hidden">
              <TopBannerForm />
            </div>
          </div>
        </div>
      </section>
      <div className="fixed-overlay"></div>
    </>
  );
};

export default TopBanner;
