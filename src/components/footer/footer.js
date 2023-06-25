import logo from "../../img/logo.svg";
import icon1 from "../../img/Location.svg";
import icon2 from "../../img/Calling.svg";
import icon3 from "../../img/Message.svg";
import icon4 from "../../img/facebook.svg";
import icon5 from "../../img/twitter.svg";
import icon6 from "../../img/instagram.svg";
import icon7 from "../../img/pinterest.svg";
import "./style.css";
import React, { useState } from "react";


const Footer = () => {
    const [elementStates, setElementStates] = useState({
        service: false,
        company: false,
        support: false,
        resources: false,
      });
    
      const handleToggle = (elementId) => {
        setElementStates((prevState) => ({
          ...prevState,
          [elementId]: !prevState[elementId],
        }));
      };
    return ( 
        <footer className="Footer">
            <div className="container">
                <div className="footer__info">
                    
                    <ul className="footer__items">   
                        <li className="footer__item">
                            <img src={logo} draggable="false" alt="logo" />
                              Zone.
                        </li>
                        <li className="footer__item">
                            <img src={icon1} draggable="false" alt="logo" />
                            Dhaka, Bangladesh
                        </li>
                        <li className="footer__item">
                            <img src={icon2} draggable="false" alt="logo" />
                            0943833399
                        </li>
                        <li className="footer__item">
                            <img src={icon3} draggable="false" alt="logo" />
                            support@zone.com
                        </li>
                        <li className="footer__item">
                            <img src={icon4} draggable="false" alt="logo" />
                            <img src={icon5} draggable="false" alt="logo" />
                            <img src={icon6} draggable="false" alt="logo" />
                            <img src={icon7} draggable="false" alt="logo" />
                        </li>
                    </ul>

                    <ul className="footer2__items2">
                        <li className="footer__item2" onClick={() => handleToggle("service")}>
                        Service
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#FFFFFF"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#FFFFFF"/>
                        </svg>
                        </li>

                        <li className={`footer__item2 act${elementStates["service"] ? "hidden" : ""}`}>
                        Order Management
                        </li>
                        <li className={`footer__item2 act${elementStates["service"] ? "hidden" : ""}`}>
                        Social Assistant
                        </li>
                        <li className={`footer__item2 act${elementStates["service"] ? "hidden" : ""}`}>
                        Crypto Platform
                        </li>
                        <li className={`footer__item2 act${elementStates["service"] ? "hidden" : ""}`}>
                        Analyzer of the News
                        </li>
                    </ul>

                    <ul className="footer2__items2">
                    <li className="footer__item2" onClick={() => handleToggle("company")}>
                        Company
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#FFFFFF"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#FFFFFF"/>
                        </svg>
                        </li>
                        <li className={`footer__item2 act${elementStates["company"] ? "hidden" : ""}`}>
                        About Us
                        </li>
                        <li className={`footer__item2 act${elementStates["company"] ? "hidden" : ""}`}>
                        News 
                        </li>
                        <li className={`footer__item2 act${elementStates["company"] ? "hidden" : ""}`}>
                        Our trusted partner
                        </li>
                        <li className={`footer__item2 act${elementStates["company"] ? "hidden" : ""}`}>
                        New users FAQ
                        </li>
                    </ul>

                    <ul className="footer2__items2">
                        <li className="footer__item2" onClick={() => handleToggle("support")}>
                        Supports
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#FFFFFF"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#FFFFFF"/>
                        </svg>
                        </li>
                        <li className={`footer__item2 act${elementStates["support"] ? "hidden" : ""}`}>
                        Help center 
                        </li>
                        <li className={`footer__item2 act${elementStates["support"] ? "hidden" : ""}`}>
                        Feedbcak
                        </li>
                        <li className={`footer__item2 act${elementStates["support"] ? "hidden" : ""}`}>
                        Contact us
                        </li>
                        <li className={`footer__item2 act${elementStates["support"] ? "hidden" : ""}`}>
                        Terms conditins
                        </li>
                    </ul>

                    <ul className="footer2__items2">
                    <li className="footer__item2" onClick={() => handleToggle("resources")}>
                        Resources 
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 23.1289C6.07 23.1289 1.25 18.3089 1.25 12.3789C1.25 6.44891 6.07 1.62891 12 1.62891C17.93 1.62891 22.75 6.44891 22.75 12.3789C22.75 18.3089 17.93 23.1289 12 23.1289ZM12 3.12891C6.9 3.12891 2.75 7.27891 2.75 12.3789C2.75 17.4789 6.9 21.6289 12 21.6289C17.1 21.6289 21.25 17.4789 21.25 12.3789C21.25 7.27891 17.1 3.12891 12 3.12891Z" fill="#FFFFFF"/>
                        <path d="M12.0002 15.3888C11.8102 15.3888 11.6202 15.3188 11.4702 15.1688L7.94016 11.6388C7.65016 11.3488 7.65016 10.8688 7.94016 10.5788C8.23016 10.2888 8.71016 10.2888 9.00016 10.5788L12.0002 13.5788L15.0002 10.5788C15.2902 10.2888 15.7702 10.2888 16.0602 10.5788C16.3502 10.8688 16.3502 11.3488 16.0602 11.6388L12.5302 15.1688C12.3802 15.3188 12.1902 15.3888 12.0002 15.3888Z" fill="#FFFFFF"/>
                        </svg>
                        </li>
                        <li className={`footer__item2 act${elementStates["resources"] ? "hidden" : ""}`}>
                        Download app
                        </li>
                        <li className={`footer__item2 act${elementStates["resources"] ? "hidden" : ""}`}>
                            Blog
                        </li>
                        <li className={`footer__item2 act${elementStates["resources"] ? "hidden" : ""}`}>
                        Blog What’s new 
                        </li>
                        <li className={`footer__item2 act${elementStates["resources"] ? "hidden" : ""}`}>
                        Sitemap
                        </li>

                    </ul>

                </div>
            </div>
            <div className="footer__end">
                    <div className="footer__end__info">
                        <p>© 2021 Zone. - All rights reserved.</p>
                        <ul className="footer__end__items">
                            <li className="footer__end__item">
                                Privacy
                            </li>
                            <li className="footer__end__item">
                                Security
                            </li>
                            <li className="footer__end__item">
                                Terms
                            </li>
                        </ul>
                    </div>
                </div>
        </footer>
     );
}
 
export default Footer;