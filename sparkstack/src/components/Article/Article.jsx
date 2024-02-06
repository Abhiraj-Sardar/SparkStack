import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Article.css";
import Header from '../Header/Header';
import "./bootstrapMin.css";
  const Article = () => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://newsapi.org/v2/top-headlines',
            {
              params: {
                country: 'us', // You can change the country code as needed
                apiKey: 'f4430a1387be4504b8a812b68afed4c0', // Replace with your actual API key
              },
            }
          );
  
          setNews(response.data.articles);
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <React.Fragment>
      <Header/>

{news.map((article) => (
    
      <section id="stories">
        <div className="container">
        
        
          <div className="row">
            <div className="col-sm-3">
              <div className="stories_1">
                <h5>Trending News</h5>
                <a href="Body_content.jsx"><img src="poonam.avif" width="100%" /></a>
                <ul>
                  <li className="border_bottom_1 bold_1"><a href="#">{article.title}</a></li>
                  <li className="border_bottom_1"><a href="#">Lorem</a></li>
                  <li className="border_bottom_1"><a href="#"></a></li>
                  <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh  imperdiet.</a></li>
                  <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris.</a></li>
                  <li className="border_bottom_1"><a href="#"> Fusce nec tellus sed augue semper porta.</a></li>
                  <li className="border_bottom_1"><a href="#">Vestibulum lacinia arcu eget nulla</a></li>
                  <li className="border_bottom_1"><a href="#">className aptent taciti sociosqu ad litora </a></li>
                  <li><a href="#">className aptent taciti sociosqu ad litora </a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="stories_2">
                <h1 className="text-center"><a href="#">Curabitursodales</a></h1>
                <div className="story_image">
                  <div><a href="#"><img src="poonam.avif" width="100%" /></a></div>
                  <div className="story_heading"><h5>LATEST STORIES</h5></div>
                </div>
                <div className="stories_3">
                  <a className="a_1" href="#"> Curabitursodales ligula in libero. Sed dignissim lacinia nunc.</a>
                  <p><a href="#"><span>Inceptos:</span> Sed dignissim lacinia </a>
                    <a href="#"><span>Take a Look:</span> 5 Month to go </a>
                    <a href="#"><span>Target:</span> We finished</a>
                    <a className="border_none_1" href="#">'Thank you' Text</a></p>

                </div>
              </div>
            </div>
          </div>
          
        
        </div>
      </section>
      
))}

      

      <section id="buzz">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="stories_1">
                <h5>Story and Area</h5>
                <a href="#"><img src="3.jpg" width="100%" /></a>
                <ul>
                  <li className="border_bottom_1"><a href="#">Curabitursodales ligula in libero</a></li>
                  <li className="border_bottom_1"><a href="#">className aptent taciti sociosqu ad litora</a></li>
                  <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta.</a></li>
                  <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh imperdiet.</a></li>
                  <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris.</a></li>
                  <li className="border_bottom_1"><a href="#">Consectetur adipiscing elit integer nec</a></li>
                  <li className="border_bottom_1"><a href="#">Tellus sed augue semper porta  massa.</a></li>
                  <li className="border_bottom_1"><a href="#">Vestibulum lacinia arcu eget nulla</a></li>
                  <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh imperdiet.</a></li>
                  <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris.</a></li>
                  <li><a href="#">Curabitursodales ligula in libero</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="stories_1 feature_1">
                <h5>Popular</h5>
                <a href="#"><img src="4.jpg" width="100%" /></a>
                <div className="buzz_1">
                  <a href="#">Duis sagittis ipsum. Praesent mauris</a>
                </div>
              </div>
              <div className="col-sm-12 buzz_main">
                <div className="col-sm-5 buzz_inner">
                  <div className="buzz_2">
                    <img src="5.jpg" width="100%" />
                  </div>
                </div>
                <div className="col-sm-7 buzz_inner_1">
                  <a href="#">Quis sem at nibh elementum imperdiet</a>
                  <p className="para_next">  Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                </div>
              </div>
              <div className="col-sm-12 buzz_main">
                <div className="col-sm-5 buzz_inner">
                  <div className="buzz_2">
                    <img src="6.jpg" width="100%" />
                  </div>
                </div>
                <div className="col-sm-7 buzz_inner_1 border_top_1">
                  <a href="#">Quis sem at nibh elementum imperdiet</a>
                  <p className="para_next">  Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="buzz_3">
                <a href="#"><img src="7.jpg" width="100%" height="250px" /></a>
                <h5>Most Famous</h5>
                <div className="col-sm-12 buzz_3_main">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="8.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_2">
                      <a href="#">The world which can't  be defeated</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="9.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <p><a href="#">Trending Context</a></p>
                      <a href="#">The world is in your own hand</a>
                      <p><a href="#">Which belongs to you</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="10.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_2">
                      <a href="#">The world which can't be defeated</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="11.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <p><a href="#">Trending Context</a></p>
                      <a href="#">The world is in your own hand</a>
                      <p><a href="#">Which belongs to you</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section id="detail">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="stories_1">
                <h5>Take a deep action</h5>
                <a href="#"><img src="12.jpg" width="100%" /></a>
                <ul>
                  <li className=" bold_1"><a href="#">Which is universily correct and appealing</a></li>
                </ul>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="13.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="14.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Latest  items of this year</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="15.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Is this thing is worthy</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="16.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Sed cursus ante dapibus diam. Sed nisi.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="stories_1 feature_1">

                <a href="#"><img src="17.jpg" width="100%" height="200px" /></a>
                <div className="buzz_1">
                  <a href="#">Nulla quis sem at nibh elementum imperdiet duis sagittis ipsum</a>
                </div>
              </div>
              <div className="col-sm-12 buzz_3_main border_top_1">
                <div className="col-sm-4">
                  <div className="spot_1">
                    <a href="#"><img src="18.jpg" width="100%" /></a>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="spot_3">
                    <a href="#">Trending context the world is in your own hand</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 buzz_3_main border_top_1">
                <div className="col-sm-4">
                  <div className="spot_1">
                    <a href="#"><img src="19.jpg" width="100%" /></a>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="spot_3">
                    <a href="#">Trending context the world is in your own hand</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 buzz_3_main border_top_1">
                <div className="col-sm-4">
                  <div className="spot_1">
                    <a href="#"><img src="20.jpg" width="100%" /></a>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="spot_3">
                    <a href="#">Trending context the world is in your own hand</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="stories_1">
                <h5>Comments</h5>
                <a href="#"><img src="21.jpg" width="100%" /></a>
                <ul>
                  <li className=" bold_1"><a href="#">Elementum quis  sagittis ipsum nulla quis sem at nibh </a></li>
                </ul>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="22.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Lorem ipsum  consectetur adipiscing elit</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="23.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Elementum quis sagittis ipsum nulla quis sem.</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="24.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Which is universily correct and appealing honest</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 buzz_3_main border_top_1">
                  <div className="col-sm-4">
                    <div className="spot_1">
                      <a href="#"><img src="25.jpg" /></a>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="spot_3">
                      <a href="#">Which is universily correct and appealing honest</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="features_1">
                <h2>Featuring Prasent</h2>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="features_2">
                <div className="col-sm-4 f_1">
                  <div className="stories_1">
                    <a className="heading_tag" href="#"><h5>Game</h5></a>
                    <a href="#"><img src="26.jpg" width="100%" /></a>
                    <ul>
                      <li className="border_bottom_1 bold_1"><a href="#">Consectetur adipiscing elit. Integer nec odio.</a></li>
                      <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam. </a></li>
                      <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris sagittis </a></li>
                      <li className="border_bottom_1"><a href="#">Trending context the world is in your own hand</a></li>
                      <li><a href="#">Elementum quis sagittis ipsum nulla quis sem. </a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 ">
                  <div className="stories_1">
                    <a className="heading_tag" href="#"><h5>Journey</h5></a>
                    <a href="#"><img src="27.jpg" width="100%" /></a>
                    <ul>
                      <li className="border_bottom_1 bold_1"><a href="#">Consectetur adipiscing elit. Integer nec odio.</a></li>
                      <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam. </a></li>
                      <li className="border_bottom_1"><a href="#">Trending context the world is in your own hand</a></li>
                      <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris sagittis</a></li>
                      <li><a href="#">Elementum quis sagittis ipsum nulla quis sem.</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 ">
                  <div className="stories_1">
                    <a href="#"><img className="thumb_1" src="28.jpg" width="100%" height="250px" /></a>
                    <h5>Related World Content</h5>
                    <ul>
                      <li className="border_bottom_1"><a href="#">Elementum quis sagittis ipsum nulla.<span>WORLD Current System</span></a></li>
                      <li className="border_bottom_1"><a href="#">Elementum quis sagittis ipsum nulla.<span> WORLD Current System</span> </a></li>
                      <li><a href="#">Elementum quis sagittis ipsum nulla. <span>WORLD Current System</span> </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          <section id="features" className="fetur_1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="features_2">
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Fashion</h5></a>
                        <a href="#"><img src="29.jpg" width="100%" /></a>
                        <ul>
                          <li className="border_bottom_1 bold_1"><a href="#">Nulla quis sem at nibh elementum imperdiet.</a></li>
                          <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta. </a></li>
                          <li className="border_bottom_1"><a href="#">Trending context the world is in your own hand </a></li>
                          <li className="border_bottom_1"><a href="#">Elementum quis sagittis ipsum nulla quis sem.</a></li>
                          <li><a href="#">Vestibulum lacinia arcu eget nulla</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>WORLD Currency</h5></a>
                        <a href="#"><img src="30.png" width="100%" /></a>
                        <ul>
                          <li className="border_bottom_1 bold_1"><a href="#">Nulla quis sem at nibh elementum imperdiet.</a></li>
                          <li className="border_bottom_1"><a href="#">Vestibulum lacinia arcu eget nulla</a></li>
                          <li className="border_bottom_1"><a href="#">Elementum quis sagittis ipsum nulla quis sem. </a></li>
                          <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta. </a></li>
                          <li><a href="#">Trending context the world is in your own hand </a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Trending Project</h5></a>
                        <a href="#"><img src="31.jpg" width="100%" /></a>
                        <ul>
                          <li className="border_bottom_1 bold_1"><a href="#">Nulla quis sem at nibh elementum imperdiet.</a></li>
                          <li className="border_bottom_1"><a href="#">Elementum quis sagittis ipsum nulla quis sem. </a></li>
                          <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta.</a></li>
                          <li className="border_bottom_1"><a href="#">Trending context the world is in your own hand </a></li>
                          <li className="border_bottom_1"><a href="#">Vestibulum lacinia arcu eget nulla </a></li>
                          <li><a href="#">className aptent taciti sociosqu ad litora </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="preview">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="features_1">
                    <h2>Preview</h2>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="preview_1">
                    <a href="#"><h4>Important videos</h4></a>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="32.jpg" width="100%" /></a>
                      <p><a href="#">Duis sagittis ipsum. Praesent mauris</a></p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="33.jpg" width="100%" /></a>
                      <p><a href="#">Duis sagittis ipsum. Praesent mauris</a></p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="34.jpg" width="100%" /></a>
                      <p><a href="#">Duis sagittis ipsum. Praesent mauris</a></p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="35.jpg" width="100%" /></a>
                      <p><a href="#">Duis sagittis ipsum. Praesent mauris</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 preview_main">
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="36.jpg" width="100%" /></a>
                      <p><a href="#">Fusce nec tellus sed augue semper porta.</a></p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="37.jpg" width="100%" /></a>
                      <p><a href="#">Fusce nec tellus sed augue semper porta.</a></p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="38.png" width="100%" /></a>
                      <p><a href="#">Fusce nec tellus sed augue semper porta.</a></p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="preview_2">
                      <a href="#"><img src="39.jpg" width="100%" /></a>
                      <p><a href="#">Fusce nec tellus sed augue semper porta.</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="trending">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="features_1">
                    <h2>Libero nec  libero  odio</h2>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="col-sm-9">
                    <div className="col-sm-12 trend_1">
                      <div className="col-sm-4">
                        <div className="preview_2">
                          <a href="#"><img src="40.jpg" width="100%" /></a>
                          <p><a href="#">Consectetur adipiscing elit</a></p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="preview_2">
                          <a href="#"><img src="41.jpg" width="100%" /></a>
                          <p><a href="#">Integer nec Praesent libero.</a></p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="preview_2">
                          <a href="#"><img src="42.jpg" width="100%" /></a>
                          <p><a href="#">Sed cursus ante dapibus diam.</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 trend">
                      <div className="col-sm-4">
                        <div className="preview_2">
                          <a href="#"><img src="43.jpg" width="100%" /></a>
                          <p><a href="#">Fusce nec tellus sed augue semper porta.</a></p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="preview_2">
                          <a href="#"><img src="44.jpg" width="100%" /></a>
                          <p><a href="#">Fusce nec tellus sed augue semper porta...</a></p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="preview_2">
                          <a href="#"><img src="45.jpg" width="100%" /></a>
                          <p><a href="#">Fusce nec tellus sed augue semper porta.</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="trending_1">
                      <img src="46.jpg" width="100%" height="250px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="content">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="features_1">
                    <h2>Ante Dapibus cursus</h2>
                  </div>
                </div>
                <div className="col-sm-12 count_1">
                  <div className="features_2">
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>WORLD Main Transport</h5></a>
                        <a href="#"><img src="47.jpg" width="100%" /></a>
                        <ul>
                          <li className="border_bottom_1 bold_1"><a href="#">Libero / Dapibus a Nulla quis Transport?</a></li>
                          <li className="border_bottom_1"><a href="#">Tellus sed augue semper porta massa. </a></li>
                          <li><a href="#">Duis sagittis ipsum. Praesent mauris sagittis</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Currency Main World</h5></a>
                        <a href="#"><img src="48.jpg" width="100%" /></a>
                        <ul>
                          <li className="border_bottom_1 bold_1"><a href="#">Libero / Dapibus a Nulla quis Transport?</a></li>
                          <li className="border_bottom_1"><a href="#">Tellus sed augue semper porta massa. </a></li>
                          <li><a href="#">Duis sagittis ipsum. Praesent mauris sagittis </a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>National Currency Product</h5></a>
                        <a href="#"><img src="49.jpg" width="100%" /></a>
                        <ul>
                          <li className="border_bottom_1 bold_1"><a href="#">Libero / Dapibus a Nulla quis Transport?</a></li>
                          <li className="border_bottom_1"><a href="#">Tellus sed augue semper porta massa. </a></li>
                          <li><a href="#">Duis sagittis ipsum. Praesent mauris sagittis</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 count_1">
                  <div className="features_2">
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Newly Offers!</h5></a>
                        <ul>
                          <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam </a></li>
                          <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh elementum imperdiet </a></li>
                          <li><a href="#">Fusce nec tellus sed augue semper porta</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Currency In Overseas</h5></a>
                        <ul>
                          <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta </a></li>
                          <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam </a></li>
                          <li><a href="#">Nulla quis sem at nibh elementum imperdiet</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Progress Business World</h5></a>
                        <ul>
                          <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam </a></li>
                          <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh elementum imperdiet </a></li>
                          <li><a href="#">Fusce nec tellus sed augue semper porta</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 count_1">
                  <div className="features_2">
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Fitness World</h5></a>
                        <ul>
                          <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta </a></li>
                          <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam </a></li>
                          <li><a href="#">Nulla quis sem at nibh elementum imperdiet</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>About Your State</h5></a>
                        <ul>
                          <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam </a></li>
                          <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh elementum imperdiet </a></li>
                          <li><a href="#">Fusce nec tellus sed augue semper porta</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4 f_1">
                      <div className="stories_1">
                        <a className="heading_tag" href="#"><h5>Your Computer World</h5></a>
                        <ul>
                          <li className="border_bottom_1"><a href="#">Fusce nec tellus sed augue semper porta </a></li>
                          <li className="border_bottom_1"><a href="#">Sed cursus ante dapibus diam </a></li>
                          <li><a href="#">Nulla quis sem at nibh elementum imperdiet</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="copyright">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="features_1">
                    <h2>In Same You Called It</h2>
                  </div>
                </div>
                <div className="col-sm-12 count_2">
                  <div className="col-sm-7">
                    <div className="stories_1 feature_1">
                      <a href="#"><img src="50.jpg" width="100%" height="260px" /></a>
                      <div className="buzz_1">
                        <a href="#"> Mauris massa.Vestibulum lacinia arcu eget nulla.className aptent taciti </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="stories_1">
                      <ul>
                        <li className="border_bottom_1"><a href="#">className aptent taciti sociosqu ad litora  </a></li>
                        <li className="border_bottom_1"><a href="#">Curabitursodales ligula in libero</a></li>
                        <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris sagittis</a></li>
                        <li className="border_bottom_1"><a href="#">Vestibulum lacinia arcu eget nulla </a></li>
                        <li className="border_bottom_1"><a href="#">Tellus sed augue semper porta massa.?</a></li>
                        <li className="border_bottom_1"><a href="#">Consectetur adipiscing elit integer nec</a></li>
                        <li className="border_bottom_1"><a href="#">Duis sagittis ipsum. Praesent mauris. </a></li>
                        <li className="border_bottom_1"><a href="#">Nulla quis sem at nibh imperdiet.</a></li>
                        <li className="border_bottom_1"><a href="#">'Fusce nec tellus sed augue semper porta.?'</a></li>
                        <li className="border_bottom_1"><a href="#">className aptent taciti sociosqu ad litora</a></li>
                        <li className="border_none_1"><a href="#">Curabitursodales ligula in libero </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    
        </React.Fragment>
        )
}

export default Article;