import React from 'react';
import AboutCompany from '../components/AboutCompany';
import Fact from '../components/Fact';
import Faq from '../components/Faq';
import LatestBlog from '../components/LatestBlog';
import ServicePage from '../components/service/ServicePage';
import TeamContainer from '../components/team/TeamContainer';
import TeamItem from '../components/team/TeamItem';
import TeamPage from '../components/team/TeamPage';

const Home = () => {
  return (
    <React.Fragment>
      {/* <!-- Carousel Start --> */}
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../../assets/img/carousel-1.jpg")} alt="Carousel" />
            <div className="carousel-caption">
              <p className="animated fadeInRight">We Are Professional</p>
              <h1 className="animated fadeInLeft">For Your Dream Project</h1>
              <a className="btn animated fadeInUp" href="/https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={require("../../assets/img/carousel-2.jpg")} alt="Carousel" />
            <div className="carousel-caption">
              <p className="animated fadeInRight">Professional Builder</p>
              <h1 className="animated fadeInLeft">We Build Your Home</h1>
              <a className="btn animated fadeInUp" href="/https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={require("../../assets/img/carousel-3.jpg")} alt="Carousel" />
            <div className="carousel-caption">
              <p className="animated fadeInRight">We Are Trusted</p>
              <h1 className="animated fadeInLeft">For Your Dream Home</h1>
              <a className="btn animated fadeInUp" href="/https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <!-- Carousel End --> */}


      {/* <!-- Feature Start--> */}
      <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-worker"></i>
                </div>
                <div className="feature-text">
                  <h3>Expert Worker</h3>
                  <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-building"></i>
                </div>
                <div className="feature-text">
                  <h3>Quality Work</h3>
                  <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-call"></i>
                </div>
                <div className="feature-text">
                  <h3>24/7 Support</h3>
                  <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End--> */}



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


      {/* <!-- Testimonial Start --> */}
      <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-slider-nav">
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-1.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-2.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-3.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-4.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-1.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-2.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-3.jpg")} alt="Testimonial" /></div>
                <div className="slider-nav"><img src={require("../../assets/img/testimonial-4.jpg")} alt="Testimonial" /></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonial-slider">
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      <LatestBlog />
    </React.Fragment>

  );
}

export default Home;