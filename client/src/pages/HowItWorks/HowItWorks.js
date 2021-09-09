import React, { useState} from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass';
import faq from './faq.json';
import FaqLi from '../../components/HowItWorks'

const HowItWorks = (props) => {
  
    const [openId1, setOpenId1] = useState(0);
    const [openId2, setOpenId2] = useState(0);
    const [openId3, setOpenId3] = useState(0);
    const [openId4, setOpenId4] = useState(0);

    const onButtonClick = (event) => {

        const button = event.target;
        const liId = parseInt(button.parentElement.getAttribute("liId"));
        const ulId = button.id;

        switch(ulId) {
            case 'ul1':
                setOpenId1(openId1 === liId ? -1 : liId);
                break;
            case 'ul2': 
                setOpenId2(openId2 === liId ? -1 : liId);
                break;
            case 'ul3':  
                setOpenId3(openId3 === liId ? -1 : liId);
                break;
            case 'ul4':  
                setOpenId4(openId4 === liId ? -1 : liId);
                break;
            default:
                break;
          }
    }
    
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
            
                <h2>3 Ways To Use Squadhelp</h2>
            
                <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
            </div>
            <div className={styles.main_card_container_2}>
                <div className={styles.card_container_2}>
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
                    <div className={styles.btn_container_2}>
                        <a href="https://www.squadhelp.com/start-contest">Launch a Contest</a>
                    </div>
                </div>
                <div className={styles.card_container_2}>
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
                    <div className={styles.btn_container_2}>
                        <a href="https://www.squadhelp.com/premium-domains-for-sale/">Explore Names For Sale</a>
                    </div>
                </div>
                <div className={styles.card_container_2}>
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
                    <div className={styles.btn_container_2}>
                        <a href="https://www.squadhelp.com/managed-contests">Learn More</a>
                    </div>
                </div>
`            </div>
        </div>
        <hr className={styles.line_hr} />
        <div className={styles.container_3}>
            <div className={styles.title_container_3}>
                <div className={styles.card_pict}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/icon-27.svg`} alt="Card Image"/>
                </div>
                <h2>How Do Naming Contests Work?</h2>
            </div>
            <div className={styles.content_container_3}>
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
        <hr className={styles.line_hr} />
        <div className={styles.container_4}>
            <div className={styles.stickyBlock}>
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
            <div className={styles.txt_container_4}>
                <FaqLi lis = {faq[0]} h3={"Launching A Contest"} ulId={"ul1"} openId = {openId1} onButtonClick={onButtonClick} />
                <hr className={styles.line_hr}/>
                <FaqLi lis = {faq[1]} h3={"Buying From Marketplace"} ulId={"ul2"} openId = {openId2} onButtonClick={onButtonClick} />
                <hr className={styles.line_hr}/>
                <FaqLi lis = {faq[2]} h3={"Managed Contests"} ulId={"ul3"} openId = {openId3} onButtonClick={onButtonClick} />
                <hr className={styles.line_hr}/>
                <FaqLi lis = {faq[3]} h3={"For Creatives"} ulId={"ul4"} openId = {openId4} onButtonClick={onButtonClick} />
            </div>
        </div>
        <div className={styles.container_5}>
            <div className={styles.container_5_img_left}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/abstract-shapes-8.svg`} alt=""/>
            </div>
            <div className={styles.container_5_img_right}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/abstract-shapes-5.svg`} alt=""/>
            </div>
            <div className={styles.txt_container_5}>
                <h3 class="">Ready to get started?</h3>
                <p>
                    Fill out your contest brief and begin receiving custom name suggestions within minutes.
                </p>
                <a class="" href="/start-contest">Start A Contest</a>
            </div>
        </div>
        <div className={styles.container_6}>
            <div className={styles.content_container_6}>
                <div className={styles.img_container_6}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/stars.svg`} alt="star"/>
                </div>
                <p className={styles.with_after}>
                    <span>4.9 out of 5 stars </span>
                    from 25,000+ customers.
                </p>
            </div>
            <div className={styles.content_container_6}>
                <div className={styles.img_container_6}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/faces.png`} alt="faces"/>
                </div>
                <p className={styles.with_after}>
                    Our branding community stands 
                    <span> 200,000+ </span>
                    strong.
                </p>
            </div>
            <div className={styles.content_container_6}>
                <div className={styles.img_container_6}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/note.svg`} alt="note"/>
                </div>
                <p className={styles.without_after}>
                    <span>140+ Industries </span>
                    supported across more than
                    <span> 85 countries </span>
                    <br/>
                    – and counting.
                </p>
            </div>
        </div>
        <div className={styles.container_7}>
            <div className={styles.wrapper_container_7}>
                <div className={styles.left_container_7}>
                    <div className={styles.top_left_container_7}>
                        <span></span>
                        <div>
                            <h4>Pay a Fraction of cost vs hiring an agency</h4>
                            <p>
                                For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottom_left_container_7}>
                        <span></span>
                        <div>
                            <h4>Satisfaction Guarantee</h4>
                            <p>
                                Of course! We have policies in place to ensure that you are satisfied with your experience. 
                                <a href="#satisfactionGaurenteedModal"> Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.right_container_7}>
                <h4>Questions?</h4>
                <p>
                     Speak with a Squadhelp platform expert to learn more and get your questions answered.
                </p>
                <button onClick="consaltClick" >
                    Schedule Consultation
                </button>
                <br/>
                <br/>
                <div className={styles.img_container_7}>
                    <a href="#">
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/phone.svg`} alt="phone"/>
                        &nbsp; (877) 355-3585
                    </a>
                </div>
                <br/>
                <span>Call us for assistance</span>
            </div>
            </div>
        </div>
        <div className={styles.container_8}>
            <div className={styles.txt_container_8}>
                <h6>Featured In</h6>
            </div>  
            <div className={styles.img_container_8}>
                <div>
                    <a href="#" target="_blank">
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/forbes.svg`} alt="forbes"/>
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank">
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/tnw.svg`} alt="tnw"/>
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank">
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/chicago.svg`} alt="chicago"/>
                    </a>
                </div>
                <div>
                    <a href="#" target="_blank">
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/Mashable.svg`} alt="Mashable"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
)
};


export default  HowItWorks;