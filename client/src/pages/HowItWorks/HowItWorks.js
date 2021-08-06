import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/SlideBar';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass';
//import carouselConstants from '../../carouselConstants';
//import Spinner from '../../components/Spinner/Spinner';

const howItWorks = (props) => {
return (
    <>
    <Header />
    <div >

    <img class="js-svg-injector" src={`${CONSTANTS.STATIC_IMAGES_PATH}HIW/ManInPhone.svg`} alt="Image Description" />
    </div>

    <Footer />
    </>
)
};

export default connect(null, )(howItWorks);