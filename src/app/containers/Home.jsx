import React from 'react';
import AboutCompany from '../components/AboutCompany';
import Fact from '../components/Fact';
import Faq from '../components/Faq';
import Carousel from '../components/Home/Carousel';
import CarouselItem from '../components/Home/CarouselItem';
import Feature from '../components/Home/Feature';
import FeatureItem from '../components/Home/FeatureItem';
import Testimonial from '../components/Home/testimonial/Testimonial';
import Video from '../components/Home/Video';
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

      <Video dataWowDelay="0.1s" id="videoModal" videoURL="https://www.youtube.com/embed/DWRcNpR6Kdc" />

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