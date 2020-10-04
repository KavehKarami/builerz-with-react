import React from 'react';
import AboutCompany from '../components/AboutCompany';
import Fact from '../components/Fact';
import Faq from '../components/Faq';
import Carousel from '../components/Home/Carousel';
import CarouselItem from '../components/Home/CarouselItem';
import Feature from '../components/Home/Feature';
import FeatureItem from '../components/Home/FeatureItem';
import Testimonial from '../components/Home/testimonial/Testimonial';
import LatestBlog from '../components/LatestBlog';
import ServicePage from '../components/service/ServicePage';
import TeamContainer from '../components/team/TeamContainer';
import TeamItem from '../components/team/TeamItem';
import TeamPage from '../components/team/TeamPage';

const Home = () => {
  return (
    <React.Fragment>
      <Carousel >
        <CarouselItem className="active" imgURL={require("../../assets/img/carousel-1.jpg")} text="We Are Professional" title="For Your Dream Project" href="https://htmlcodex.com/construction-company-website-template" linkText="Get A Quote" />
        <CarouselItem imgURL={require("../../assets/img/carousel-2.jpg")} text="Professional Builder" title="We Build Your Home" href="https://htmlcodex.com/construction-company-website-template" linkText="Get A Quote" />
        <CarouselItem imgURL={require("../../assets/img/carousel-3.jpg")} text="We Are Trusted" title="For Your Dream Home" href="https://htmlcodex.com/construction-company-website-template" linkText="Get A Quote" />
      </Carousel>

      <Feature>
        <FeatureItem icon="flaticon-worker" title="Expert Worker" text="Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non" />
        <FeatureItem icon="flaticon-building" title="Quality Work" text="Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non" />
        <FeatureItem icon="flaticon-call" title="24/7 Support" text="Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non" />
      </Feature>

      <AboutCompany />

      <Fact />

      <ServicePage />


      {/* <!-- Video Start --> */}
      <div className="video wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
            <span></span>
          </button>
        </div>
      </div>

      <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video End --> */}


      <TeamPage>
        <TeamContainer >
          <TeamItem imgURL={require("../../assets/img/team-1.jpg")} dataWowDelay="0.1s" person="Adam Phillips" responsibility="CEO & Founder" />
          <TeamItem imgURL={require("../../assets/img/team-2.jpg")} dataWowDelay="0.2s" person="Dylan Adams" responsibility="Civil Engineer" />
          <TeamItem imgURL={require("../../assets/img/team-3.jpg")} dataWowDelay="0.3s" person="Jhon Doe" responsibility="Interior Designer" />
          <TeamItem imgURL={require("../../assets/img/team-4.jpg")} dataWowDelay="0.4s" person="Josh Dunn" responsibility="Painter" />
        </TeamContainer>
      </TeamPage>

      <Faq />

      <Testimonial dataWowDelay="0.1s" />

      <LatestBlog />
    </React.Fragment>

  );
}

export default Home;