import React from 'react';
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="wrapper">

      {/* <!-- Top Bar Start --> */}
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                <Link to="/">
                  <h1>Builderz</h1>
                  {/* <!-- <img src="img/logo.jpg" alt="Logo"> --> */}
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="flaticon-calendar"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Fri, 8:00 - 9:00</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="flaticon-call"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Call Us</h3>
                      <p>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="flaticon-send-mail"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top Bar End --> */}

      {/* <!-- Nav Bar Start --> */}
      <div className="nav-bar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="/single/#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Service</Link>
                <Link to="/team" className="nav-item nav-link">Team</Link>
                <Link to="/portfolio" className="nav-item nav-link">Project</Link>
                <div className="nav-item dropdown">
                  <a href="/single/#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu">
                    <Link to="/blog" className="dropdown-item">Blog Page</Link>
                    <Link to="/single" className="dropdown-item">Single Page</Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
              <div className="ml-auto">
                <div className="btn">Get A Quote</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Nav Bar End --> */}


      {/* <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Single Page</h2>
            </div>
            <div className="col-12">
              <a href="/single/#">Home</a>
              <a href="/single/#">Single Page</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- Single Post Start--> */}
      <div className="single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-content wow fadeInUp">
                <img src={require("../../assets/img/single.jpg")} alt="single" />
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, lorem eu eleifend bibendum, augue purus mollis sapien, non rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur tempor ac vel justo. In hac habitasse platea dictumst. Cras nec sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus consectetur id augue. Mauris dignissim neque felis. Phasellus mollis mi a pharetra cursus. Maecenas vulputate augue placerat lacus mattis, nec ornare risus sollicitudin.
                      </p>
                <p>
                  Mauris eu pulvinar tellus, eu luctus nisl. Pellentesque suscipit mi eu varius pulvinar. Aenean vulputate, massa eget elementum finibus, ipsum arcu commodo est, ut mattis eros orci ac risus. Suspendisse ornare, massa in feugiat facilisis, eros nisl auctor lacus, laoreet tempus elit dolor eu lorem. Nunc a arcu suscipit, suscipit quam quis, semper augue.
                      </p>
                <p>
                  Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio. Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien libero, bibendum nec viverra in, iaculis ut eros.
                      </p>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Vestibulum sit amet ullamcorper sem. Integer hendrerit elit eget purus sodales maximus. Quisque ac nulla arcu. Morbi venenatis arcu ac arcu cursus pharetra. Morbi sit amet viverra augue, ac ultricies libero. Praesent elementum lectus mi, eu elementum urna venenatis sed. Donec auctor purus ut mattis feugiat. Integer mi erat, consectetur sed tincidunt vitae, sagittis elementum libero. Vivamus a mauris consequat, hendrerit lectus in, fermentum libero. Integer mattis bibendum neque et porttitor.
                      </p>
                <p>
                  Mauris quis arcu finibus, posuere dolor eu, viverra felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In porta, ex vitae accumsan facilisis, nisi tellus dictum metus, quis fringilla dui tellus in tellus. Praesent pharetra orci at vehicula posuere. Sed molestie fringilla lorem, vel imperdiet tortor blandit at. Quisque non ultrices lorem, eget rhoncus orci. Fusce porttitor placerat diam et mattis. Nam laoreet, ex eu posuere sollicitudin, sem tortor pellentesque ipsum, quis mattis purus lectus ut lacus. Integer eu risus ac est interdum scelerisque.
                      </p>
                <h4>Lorem ipsum dolor sit amet</h4>
                <p>
                  Praesent ultricies, mauris eget vestibulum viverra, neque lorem malesuada mauris, eget rhoncus lectus enim a lorem. Vivamus at vehicula risus, eget facilisis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et posuere sapien. Fusce bibendum lorem sem, quis tincidunt felis mattis nec.
                      </p>
                <p>
                  Proin vel nulla purus. Nunc nec eros in nisi efficitur rutrum quis sed eros. Mauris felis dolor, rhoncus eget gravida vitae, pretium vel arcu. Cras blandit tellus eget tellus dictum venenatis. Sed ultricies bibendum dictum. Etiam facilisis erat id turpis tincidunt malesuada. Duis bibendum sapien eu condimentum sagittis. Proin nunc lorem, ullamcorper vel tortor sodales, imperdiet lacinia dui. Sed congue, felis id rhoncus varius, urna lacus imperdiet nunc, ut porttitor mauris mi quis mi. Integer rutrum est finibus metus eleifend scelerisque. Morbi auctor dignissim purus in interdum. Vestibulum eu dictum enim. Suspendisse et sem vitae velit feugiat facilisis.
                      </p>
                <p>
                  Nam sodales scelerisque nunc sed convallis. Vestibulum facilisis porta erat, sit amet pharetra tortor blandit id. Nunc velit tellus, consectetur sed convallis in, tincidunt finibus nulla. Integer vel ex in mauris tincidunt tincidunt nec sed elit. Etiam pretium lectus lectus, sed aliquet erat tristique euismod. Praesent faucibus nisl augue, ac tempus libero pellentesque malesuada. Vivamus iaculis imperdiet laoreet. Aliquam vel felis felis. Proin sed sapien erat. Etiam a quam et metus tempor rutrum. Curabitur in faucibus justo. Etiam imperdiet iaculis urna.
                      </p>
              </div>
              <div className="single-tags wow fadeInUp">
                <a href="/single/#">National</a>
                <a href="/single/#">International</a>
                <a href="/single/#">Economics</a>
                <a href="/single/#">Politics</a>
                <a href="/single/#">Lifestyle</a>
                <a href="/single/#">Technology</a>
                <a href="/single/#">Trades</a>
              </div>
              <div className="single-bio wow fadeInUp">
                <div className="single-bio-img">
                  <img src={require("../../assets/img/user.jpg")} alt="user" />
                </div>
                <div className="single-bio-text">
                  <h3>Author Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                          </p>
                </div>
              </div>
              <div className="single-related wow fadeInUp">
                <h2>Related Post</h2>
                <div className="owl-carousel related-slider">
                  <div className="post-item">
                    <div className="post-img">
                      <img src={require("../../assets/img/post-1.jpg")} alt="post" />
                    </div>
                    <div className="post-text">
                      <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                      <div className="post-meta">
                        <p>By<a href="/single/#">Admin</a></p>
                        <p>In<a href="/single/#">Design</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="post-img">
                      <img src={require("../../assets/img/post-2.jpg")} alt="post" />
                    </div>
                    <div className="post-text">
                      <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                      <div className="post-meta">
                        <p>By<a href="/single/#">Admin</a></p>
                        <p>In<a href="/single/#">Design</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="post-img">
                      <img src={require("../../assets/img/post-3.jpg")} alt="post" />
                    </div>
                    <div className="post-text">
                      <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                      <div className="post-meta">
                        <p>By<a href="/single/#">Admin</a></p>
                        <p>In<a href="/single/#">Design</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="post-img">
                      <img src={require("../../assets/img/post-4.jpg")} alt="post" />
                    </div>
                    <div className="post-text">
                      <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                      <div className="post-meta">
                        <p>By<a href="/single/#">Admin</a></p>
                        <p>In<a href="/single/#">Design</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-comment wow fadeInUp">
                <h2>3 Comments</h2>
                <ul className="comment-list">
                  <li className="comment-item">
                    <div className="comment-body">
                      <div className="comment-img">
                        <img src={require("../../assets/img/user.jpg")} alt="user" />
                      </div>
                      <div className="comment-text">
                        <h3><a href="/single/#">Josh Dunn</a></h3>
                        <span>01 Jan 2045 at 12:00pm</span>
                        <p>
                          Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                      </p>
                        <a className="btn" href="/single/#">Reply</a>
                      </div>
                    </div>
                  </li>
                  <li className="comment-item">
                    <div className="comment-body">
                      <div className="comment-img">
                        <img src={require("../../assets/img/user.jpg")} alt="user" />
                      </div>
                      <div className="comment-text">
                        <h3><a href="/single/#">Josh Dunn</a></h3>
                        <p><span>01 Jan 2045 at 12:00pm</span></p>
                        <p>
                          Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                      </p>
                        <a className="btn" href="/single/#">Reply</a>
                      </div>
                    </div>
                    <ul className="comment-child">
                      <li className="comment-item">
                        <div className="comment-body">
                          <div className="comment-img">
                            <img src={require("../../assets/img/user.jpg")} alt="user" />
                          </div>
                          <div className="comment-text">
                            <h3><a href="/single/#">Josh Dunn</a></h3>
                            <p><span>01 Jan 2045 at 12:00pm</span></p>
                            <p>
                              Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                                              </p>
                            <a className="btn" href="/single/#">Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="comment-form wow fadeInUp">
                <h2>Leave a comment</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Post Comment" className="btn" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget wow fadeInUp">
                  <div className="search-widget">
                    <form>
                      <input className="form-control" type="text" placeholder="Search Keyword" />
                      <button className="btn"><i className="fa fa-search"></i></button>
                    </form>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Recent Post</h2>
                  <div className="recent-post">
                    <div className="post-item">
                      <div className="post-img">
                        <img src={require("../../assets/img/post-1.jpg")} alt="post" />
                      </div>
                      <div className="post-text">
                        <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>By<a href="/single/#">Admin</a></p>
                          <p>In<a href="/single/#">Design</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src={require("../../assets/img/post-2.jpg")} alt="post" />
                      </div>
                      <div className="post-text">
                        <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>By<a href="/single/#">Admin</a></p>
                          <p>In<a href="/single/#">Design</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src={require("../../assets/img/post-3.jpg")} alt="post" />
                      </div>
                      <div className="post-text">
                        <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>By<a href="/single/#">Admin</a></p>
                          <p>In<a href="/single/#">Design</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src={require("../../assets/img/post-4.jpg")} alt="post" />
                      </div>
                      <div className="post-text">
                        <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>By<a href="/single/#">Admin</a></p>
                          <p>In<a href="/single/#">Design</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="post-item">
                      <div className="post-img">
                        <img src={require("../../assets/img/post-5.jpg")} alt="post" />
                      </div>
                      <div className="post-text">
                        <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                        <div className="post-meta">
                          <p>By<a href="/single/#">Admin</a></p>
                          <p>In<a href="/single/#">Design</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="/single/#"><img src={require("../../assets/img/blog-1.jpg")} alt="blog" /></a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="tab-post">
                    <ul className="nav nav-pills nav-justified">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div id="featured" className="container tab-pane active">
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-1.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-2.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-3.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-4.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-5.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="popular" className="container tab-pane fade">
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-1.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-2.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-3.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-4.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-5.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="latest" className="container tab-pane fade">
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-1.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-2.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-3.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-4.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="post-item">
                          <div className="post-img">
                            <img src={require("../../assets/img/post-5.jpg")} alt="post" />
                          </div>
                          <div className="post-text">
                            <a href="/single/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div className="post-meta">
                              <p>By<a href="/single/#">Admin</a></p>
                              <p>In<a href="/single/#">Design</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="/single/#"><img src={require("../../assets/img/blog-2.jpg")} alt="blog" /></a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Categories</h2>
                  <div className="category-widget">
                    <ul>
                      <li><a href="/single/#">National</a><span>(98)</span></li>
                      <li><a href="/single/#">International</a><span>(87)</span></li>
                      <li><a href="/single/#">Economics</a><span>(76)</span></li>
                      <li><a href="/single/#">Politics</a><span>(65)</span></li>
                      <li><a href="/single/#">Lifestyle</a><span>(54)</span></li>
                      <li><a href="/single/#">Technology</a><span>(43)</span></li>
                      <li><a href="/single/#">Trades</a><span>(32)</span></li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <div className="image-widget">
                    <a href="/single/#"><img src={require("../../assets/img/blog-3.jpg")} alt="blog" /></a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Tags Cloud</h2>
                  <div className="tag-widget">
                    <a href="/single/#">National</a>
                    <a href="/single/#">International</a>
                    <a href="/single/#">Economics</a>
                    <a href="/single/#">Politics</a>
                    <a href="/single/#">Lifestyle</a>
                    <a href="/single/#">Technology</a>
                    <a href="/single/#">Trades</a>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Text Widget</h2>
                  <div className="text-widget">
                    <p>
                      Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea nec eros. Nunc eu enim non turpis id augue.
                              </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Single Post End-->    */}


      {/* <!-- Footer Start --> */}
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-contact">
                <h2>Office Contact</h2>
                <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope"></i>info@example.com</p>
                <div className="footer-social">
                  <a href="/single/#"><i className="fab fa-twitter"></i></a>
                  <a href="/single/#"><i className="fab fa-facebook-f"></i></a>
                  <a href="/single/#"><i className="fab fa-youtube"></i></a>
                  <a href="/single/#"><i className="fab fa-instagram"></i></a>
                  <a href="/single/#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Services Areas</h2>
                <a href="/single/#">Building Construction</a>
                <a href="/single/#">House Renovation</a>
                <a href="/single/#">Architecture Design</a>
                <a href="/single/#">Interior Design</a>
                <a href="/single/#">Painting</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Useful Pages</h2>
                <a href="/single/#">About Us</a>
                <a href="/single/#">Contact Us</a>
                <a href="/single/#">Our Team</a>
                <a href="/single/#">Projects</a>
                <a href="/single/#">Testimonial</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="newsletter">
                <h2>Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                      </p>
                <div className="form">
                  <input className="form-control" placeholder="Email here" />
                  <button className="btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-menu">
          <div className="f-menu">
            <a href="/single/#">Terms of use</a>
            <a href="/single/#">Privacy policy</a>
            <a href="/single/#">Cookies</a>
            <a href="/single/#">Help</a>
            <a href="/single/#">FQAs</a>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; <a href="signle/#">Your Site Name</a>, All Right Reserved.</p>
            </div>
            <div className="col-md-6">
              <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
}

export default Single;