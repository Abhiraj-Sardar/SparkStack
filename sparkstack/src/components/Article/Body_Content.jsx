import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Body.css"
import "./Body_part.css"
// import three from './images/three.jpg'




const Body_Content = () => {
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
		<div>
		
			{news.map((article) => (
				<section id="center" class="clearfix">
					<div class="container">
						<div class="row">
							<div class="col-sm-12 padding_all">
								<div class="col-sm-8">
									<div class="blog_1">
										<ul>
										<li><a href="#">{article.author}</a></li>
										</ul>
										<h2></h2>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="col-sm-3 padding_all">
											<div class="blog_2">
												<h4><a href="#">MASSA CONUBIA</a>, MARCH 17, 2017</h4>
											</div>
										</div>
										<div class="col-sm-7"></div>
										<div class="col-sm-2 padding_all">
											<div class="blog_3">
												<ul>
													<li>11 <i class="fa fa-eye"></i></li>
													<li><a href="#">5</a> <i class="fa fa-comment"></i></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="col-sm-1 padding_all">
											<div class="blog_4">
												<h4>2</h4>
												<p>CONUBIA</p>
											</div>
										</div>
										<div class="col-sm-11 padding_all">
											<div class="blog_5">
												<ul>
													<li class="well_7"><a href="#"><i class="fa fa-facebook"></i>Share</a></li>
													<li class="well_8"><a href="#"><i class="fa fa-twitter"></i>Tweet</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_1">
											<p></p>
											<p></p>
											<p></p>
											<h3>1.<a href="#"> Lacinia Arcu</a></h3>
											<p></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="blog_11">
											<p><a href="#"><img src="" alt="" width="100%" /></a></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_1">
											<h3>2.<a href="#"> Conubia Nostra</a></h3>
											<p>{article.description}</p>
											<p>{article.description}</p>
											<p>{article.description}</p>
											<p></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="blog_11">
											<p><a href="#"><img src="" width="100%" /></a></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_1">
											<h3>3.<a href="#"> Vestibulum Lacinia Arcu Eget</a></h3>
											<p>{news.description}</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="blog_11">
											<p><a href="#"><img src="" width="100%" /></a></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_1">
											<h3>4.<a href="#"> Integer Nec Odionec</a></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="blog_11">
											<p><a href="#"><img src="" width="100%" /></a></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_1">
											<h3>5.<a href="#"> Integer Nec Odionec</a></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="blog_11">
											<p><a href="#"><img src="" width="100%" /></a></p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_1">
											<h3>6.<a href="#"> Dignissim Lacinia</a></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.!Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Integer nec odionec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
												nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
												augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. torquent per
												conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed dignissim
												lacinia nunc.</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio.Sed
												cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
												sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
												massa. Vestibulum lacinia arcu eget nulla.
												torquent per conubia nostra, per inceptos . Curabitursodales ligula in libero. Sed
												dignissim lacinia nunc.</p>
										</div>
									</div>
									<div class="col-sm-12 padding_all">
										<div class="details_4">
											<h5>Lacinia Nunc</h5>
											<p>Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa *</p>
										</div>
										<div class="details_5">
											<label for="comment">Comment</label>
											<textarea placeholder="" class="form-control"></textarea>
										</div>
										<div class="details_6">
											<label for="comment">Name *</label>
											<input type="text" class="form-control" placeholder="" />
										</div>
										<div class="details_6">
											<label for="comment">Email *</label>
											<input type="text" class="form-control" placeholder="" />
										</div>
										<div class="details_6">
											<label for="comment">Website</label>
											<input type="text" class="form-control" placeholder="" />
										</div>
										<div class="details_7">
											<p><a href="#">Post Comment</a></p>
										</div>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/11.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="center_9">
												<p><a href="#"><img src="img/16.jpg" /></a></p>
											</div>
											<div class="center_6">
												<h3>SIGN IN</h3>
											</div>
											<div class="center_10">
												<p>Dignissim Lacinia</p>
											</div>
											<div class="center_11">
												<p><input type="text" name="Email" placeholder="Email Address" required="" /></p>
											</div>
											<div class="center_12">
												<p><a href="#">Submit</a></p>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/53.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/54.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/55.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/56.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/58.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/59.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/60.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div class="center_main clearfix">
										<div class="center_6">
											<p><a href="#"><img src="img/57.jpg" width="100%" /></a></p>
											<h3>PRAESENT MAURIS</h3>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/12.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/13.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/14.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
										<div class="col-sm-12 padding_all">
											<div class="col-sm-4 padding_all">
												<div class="center_7">
													<p><a href="#"><img src="img/15.jpg" /></a></p>
												</div>
											</div>
											<div class="col-sm-8 padding_all">
												<div class="center_8">
													<h5><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
														nec odionec</a></h5>
													<p>MARCH 3, 2017</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			
			))}
		</div>
	)
}

export default Body_Content;


