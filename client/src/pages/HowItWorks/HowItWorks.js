import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
//import SlideBar from '../../components/SlideBar/SlideBar';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass';
//import carouselConstants from '../../carouselConstants';
//import Spinner from '../../components/Spinner/Spinner';

const howItWorks = (props) => {
return (
    <>
    <Header />  
    <div className={styles.main}>
        <div className={styles.container_1}>
            <div className={styles.txt_container_1}>
                <div className={styles.wrap_blue_name}>
                    <span className={styles.blue_name}>World's #1 Naming Platform</span>
                 </div>
                <h1>How Does Squadhelp Work?</h1>
                <p>
                    Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.
                </p>
                <div className={styles.video_btn}>
                    <a href="https://vimeo.com/368584367">
                        Play Video
                    </a>
                </div>
            </div>
            <div className={styles.pict_container_1}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/ManInPhone.svg`} alt="Man In Phone" />
            </div>
            
             
        </div>
        <div className={styles.container_2}>
            <div className={styles.txt_container_2}>
            <div className={styles.wrap_blue_name_2}>
                <span class={styles.blue_name}>Our Services</span>
            </div>
            <div>
                <h2>3 Ways To Use Squadhelp</h2>
            </div>
                <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
            </div>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.card_pict}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/icon-7.svg`} alt="Card Image"/>
                    </div>
                    <div className={styles.card_title}>   
                        <h3>Launch a Contest</h3>
                    </div>
                    <div className={styles.card_txt}>
                        <p>
                            Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.
                    </p>
                    </div>
                    <div className={styles.btn}>
                        <a href="https://www.squadhelp.com/start-contest">Launch a Contest</a>
                    </div>
                </div>
                <div className={styles.card}>
                <div className={styles.card_pict}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/icon-40.svg`} alt="Card Image"/>
                    </div>
                    <div className={styles.card_title}>   
                        <h3>Explore Names For Sale</h3>
                    </div>
                    <div className={styles.card_txt}>
                        <p>
                        Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design
                        </p>
                    </div>
                    <div className={styles.btn}>
                        <a href="https://www.squadhelp.com/premium-domains-for-sale/">Explore Names For Sale</a>
                    </div>
                </div>
                <div className={styles.card}>
                <div className={styles.card_pict}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/icon-24.svg`} alt="Card Image"/>
                    </div>
                    <div className={styles.card_title}>   
                        <h3>Agency-level Managed Contests</h3>
                    </div>
                    <div className={styles.card_txt}>
                        <p>
                            Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.
                        </p>
                    </div>
                    <div className={styles.btn}>
                        <a href="https://www.squadhelp.com/managed-contests">Learn More</a>
                    </div>
                </div>
`            </div>
        </div>
        <hr className={styles.linehr} />
        <div className={styles.container_3}>
            <div className={styles.title_container_3}>
                <div className={styles.card_pict}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/icon-27.svg`} alt="Card Image"/>
                </div>
                <h2>How Do Naming Contests Work?</h2>
            </div>
            <div className={styles.pict_spisok_container_3}>
                <div className={styles.pict_container_3}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/support-man.svg`} alt="Card Image"/>
                </div>
                <div className={styles.spisok_container_3}>
                <ul>
                    <li>
                        <div className={styles.div_li}>
                            <span className={styles.blue_numb}>1.</span>
                            <p>Fill out your Naming Brief and begin receiving name ideas in minutes  </p>   
                        </div>
                    </li>
                    <li>
                        <div className={styles.div_li}>
                            <span className={styles.blue_numb}>2.</span>
                            <p>Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div_li}>
                            <span className={styles.blue_numb}>3.</span>
                            <p>Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.div_li}>
                            <span className={styles.blue_numb}>4.</span>
                            <p>Pick a Winner. The winner gets paid for their submission.</p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="4">
            <div className="nav">
                <ul>
                    <li>
                        <a class="" href="#contests">Launching A Contest</a>
                    </li>
                    <li>
                        <a class="" href="#marketplace">Buying From Marketplace</a>
                    </li>
                    <li>
                        <a class="" href="#managed">Managed Contests</a>
                    </li>
                    <li>
                        <a class="" href="#creatives">For Creatives</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <h3 className="">Launching A Contest</h3>
                <div className="react?">
                </div>
                <h3 className="">Buying From Marketplace</h3>
                <div className="react?">
                </div>
                <h3 class="">Managed Contests</h3>
                <div className="react?">
                </div>
                <h3 class="">For Creatives</h3>
                <div className="react?">
                </div>
            </div>
        </div>
        <div className="5">
            <h3 class="">Ready to get started?</h3>
            <p>
                Fill out your contest brief and begin receiving custom name suggestions within minutes.
            </p>
            <a class="" href="/start-contest">Start A Contest</a>
        </div>
        <div className="6">
            <div className="61">
                <img />
                <p>
                    <span>4.9 out of 5 stars</span>
                    from 25,000+ customers.
                </p>
            </div>
            <div className="62">
                <img />
                <p>
                    Our branding community stands 
                    <span class="bold">200,000+</span>
                    strong.
                </p>
            </div>
            <div className="63">
                <img />
                <p>
                    <span class="text-dark font-weight-semi-bold">140+ Industries</span>
                    supported across more than
                    <span class="text-dark font-weight-semi-bold">85 countries</span>
                    <br/>
                    – and counting.
                </p>
            </div>
        </div>
        <div className={styles.startContestContainer}>
              <span className={styles.scctxt}>Ready to get started? Launch a contest and start receiving submissions instantly.</span>
              <a className={styles.sccbtn} href="/start-contest">Start a Contest</a>
        </div>
        <div className="pricing_section">
            <div className="left">
                <div className="top">
                    <h4 class="">Pay a Fraction of cost vs hiring an agency</h4>
                    <p>
                        For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                    </p>
                </div>
                <div className="bottom">
                    <h4 class="">Satisfaction Guarantee</h4>
                    <p>
                        Of course! We have policies in place to ensure that you are satisfied with your experience. 
                        <a href="#satisfactionGaurenteedModal" data-modal-target="#satisfactionGaurenteedModal" data-modal-effect="fadein">Learn more</a>
                    </p>
                </div>
            </div>
            <div className="right">
                <h4 class="">Questions?</h4>
                <p>
                     Speak with a Squadhelp platform expert to learn more and get your questions answered.
                </p>
                <button>
                    Schedule Consultation
                </button>
                <span>
                    &nbsp; (877) 355-3585
                </span>
                <span className="">Call us for assistance</span>
            </div>
        </div>
    </div>
    <Footer />
    </>
)
};

export default howItWorks;