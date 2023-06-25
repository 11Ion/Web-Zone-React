import "./style.css";
import { Link } from "react-router-dom";
import play from "../../img/play.svg";
import imgheader from "../../img/header.svg";
const Header = () => {
    return ( 
        <>
            <div className="Header">
                <div className="container">
                    <div className="header__text">
                        <h1>
                            Virtual Reality Business Solutions
                        </h1>
                        <p>
                        We have over 15 year exprience in business consultting arena and artficial intelligence.
                        </p>
                        <div className="header__btns">

                            <div className="header__btn">
                                <Link to="/">
                                    Join Us
                                </Link>
                                </div>
                                <Link to="/">  
                            <div className="header__btn1">
                                <img src={play} draggable="false" alt="logo" /> 
                                Watch video Us                               
                                </div>
                                </Link>

                        </div>
                    </div>
                    <div className="header__image">
                        <img src={imgheader} draggable="false" alt="img" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Header;