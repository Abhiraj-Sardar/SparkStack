import React from 'react'
import './feature.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Feature() {
  return (
    <>
    <Header/>
    
    <div>
      
    <section className="banner">
        <div className="banner-main-content">
            <h2>GET THE WORLD'S LATEST TECH NEWS</h2>
            <h3>World's Leading Tech News Portal</h3>

            <button>
                <a href="#">Know More</a>
            </button>

            <div className="current-news-head">
                <h3>Apple Glasses: What we expect, what we think we are <span>by scott stein</span></h3>

                <h3>What's it's like to have Elon Musk's old phone number <span>by abrar al-heeti</span></h3>

                <h3>Watch the exact moment Chris Pratt accidentally deletes 51, 000 emials <span>by goel
                        fashingbauer</span></h3>

                <h3>Richard Branson's Virgin Orbit will launch a rocket from midair Sunday <span>by eric mack</span>
                </h3>
            </div>
        </div>

        <div className="banner-sub-content">
            <div className="hot-topic">
                <img src="https://techcrunch.com/wp-content/uploads/2023/12/openai-sam-altman.jpg?w=430&h=230&crop=1" alt=""/>

                <div className="hot-topic-content">
                    <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                    <h3>New Topic 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus
                        iusto fugit unde.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="hot-topic">
                <img src="https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1173094810-e1687944113166.jpg?w=430&h=230&crop=1" alt=""/>

                <div className="hot-topic-content">
                    <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                    <h3>New Topic 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus
                        iusto fugit unde.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="hot-topic">
                <img src="https://techcrunch.com/wp-content/uploads/2024/02/nootti-app-store.jpg?w=430&h=230&crop=1" alt=""/>

                <div className="hot-topic-content">
                    <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                    <h3>New Topic 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus
                        iusto fugit unde.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div className="hot-topic">
                <img src="https://techcrunch.com/wp-content/uploads/2023/07/Threads-GettyImages-1524134312.jpg?w=430&h=230&crop=1" alt=""/>

                <div className="hot-topic-content">
                    <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                    <h3>New Topic 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus
                        iusto fugit unde.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </section>

    <hr/>

    <main>
        <section className="main-container-left">
            <h2>Top Stories</h2>
            <div className="container-top-left">
                <article>
                    <img src="https://techcrunch.com/wp-content/uploads/2020/08/fortnite-epic-GettyImages-957063528.jpg?w=430&h=230&crop=1"/>

                    <div>
                        <h3>Best Used Cars Under $20, 000 for families</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea sint, nisi rem earum
                            fugit? Facere veritatis sapiente eveniet quibusdam.</p>

                        <a href="#">Read More <span></span></a>
                    </div>
                </article>
            </div>
            
            <div className="container-top-left">
                <article>
                    <img src="https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=430&h=230&crop=1"/>

                    <div>
                        <h3>Best Used Cars Under $20, 000 for families</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea sint, nisi rem earum
                            fugit? Facere veritatis sapiente eveniet quibusdam.</p>

                        <a href="#">Read More <span></span></a>
                    </div>
                </article>
            </div>

            <div className="container-bottom-left">
                <article>
                    <img src="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1231467577.jpg?w=430&h=230&crop=1"/>
                    <div>
                        <h3>Best smart speakers for the year</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate.
                            Explicabo, nihil?</p>

                        <a href="#">Read More <span></span></a>
                    </div>
                </article>

                <article>
                    <img src="https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-535059003.jpg?w=430&h=230&crop=1"/>
                    <div>
                        <h3>iPad Pro, reviewed: Has the iPad become my main computer now?</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate.
                            Explicabo, nihil?</p>

                        <a href="#">Read More <span></span></a>
                    </div>
                </article>

                <article>
                    <img src="https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-936151416.jpg?w=430&h=230&crop=1"/>
                    <div>
                        <h3>iPad Pro, reviewed: Has the iPad become my main computer now?</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate.
                            Explicabo, nihil?</p>

                        <a href="#">Read More <span></span></a>
                    </div>
                </article>
            </div>
        </section>

        <section className="main-container-right">
            <h2>Latest Stories</h2>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Here's how to track your stimulus check with the IRS Get My Payment Portal</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1470340715.jpg?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>The best outdoor games to play with your family</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2023/03/faraday-future-ff91.jpg?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Why walk? Check out the best electric scooters and e-bikes for 2020</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1129068363.jpg?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Disneyland Paris will stream its Lion King stage show Friday night</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2019/12/GettyImages-1187270589.jpg?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-1245156419-e1671450368800.jpg?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2024/02/Screenshot_2024-02-15_at_8.00.07-PM-transformed.png?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2017/10/voice-assistants.png?w=430&h=230&crop=1"/>
            </article>

            <article>
                <h4>just in </h4>
                <div>
                    <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                    <a href="#">Read More <span></span></a>
                </div>
                <img src="https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1574154948-e1695647511123.jpg?w=430&h=230&crop=1"/>
            </article>
        </section>
    </main>
    </div>
    <Footer/>
    </>
  )
}
