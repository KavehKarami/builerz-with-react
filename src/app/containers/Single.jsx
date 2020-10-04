import React from 'react';
import PageHeader from '../components/PageHeader';
import CommentItem from '../components/single/CommentItem';
import PostItem from '../components/single/PostItem';
import SingleBio from '../components/single/SingleBio';
import SingleComment from '../components/single/SingleComment';
import SingleContent from '../components/single/SingleContent';
import SingleRelated from '../components/single/SingleRelated';
import SingleTags from '../components/single/SingleTags';

const Single = () => {
  return (
    <React.Fragment>
      <PageHeader name="Single Page" />

      {/* <!-- Single Post Start--> */}
      <div className="single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <SingleContent imgURL={require("../../assets/img/single.jpg")} />

              <SingleTags />

              <SingleBio imgURL={require("../../assets/img/user.jpg")} author="Author Name" >
                <p>
                  Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                </p>
              </SingleBio>

              <SingleRelated>
                <PostItem imgURL={require("../../assets/img/post-1.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
                <PostItem imgURL={require("../../assets/img/post-2.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
                <PostItem imgURL={require("../../assets/img/post-3.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
                <PostItem imgURL={require("../../assets/img/post-4.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
              </SingleRelated>

              <SingleComment>
                <CommentItem imgURL={require("../../assets/img/user.jpg")} person="Josh Dunn" when="01 Jan 2045 at 12:00pm">
                  <p>
                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                  </p>
                </CommentItem>
                <CommentItem imgURL={require("../../assets/img/user.jpg")} person="Josh Dunn" when="01 Jan 2045 at 12:00pm">
                  <p>
                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                  </p>
                </CommentItem>
                <CommentItem imgURL={require("../../assets/img/user.jpg")} person="Josh Dunn" when="01 Jan 2045 at 12:00pm">
                  <p>
                    Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                  </p>
                </CommentItem>
              </SingleComment>

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
    </React.Fragment>
  );
}

export default Single;