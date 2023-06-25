import "../style/style.css";
import Header from "../components/header/header";
import read_m_img from "../img/rmoi.png";
import { Link } from "react-router-dom";
import {dataList, dataList2} from "../components/Data/dataList";
import read_m2_img from "../img/man-working-using-virtual-reality-4019408-3337377@0 1.png";
import icon_skype from "../img/skype1.svg";
import icon_ln from "../img/linkedin1.svg";
import icon_tw from "../img/twitter1.svg";
import icon_fb from "../img/Frame.svg";
import icon_sub from "../img/subit.svg";
const Home = () => {
    return ( 
    <>
    <Header />
    <section className="services">
        <div className="container">
        <h1>Our Service</h1>
        <p>We turn information into actionable insights We work to understand your issues
 and are driven to ask better questions in the pursuit of making work.</p>
        </div>
        <ul className="services__items">
            {dataList.map((item, id) => (
            <li className="services__item" key={id}> 
                <div className="services__item__content">
                    <div className="services__item__image">
                        <img src={item.img} draggable="false" alt="img"/>
                    </div>
                    <div className="services__item__title">
                        {item.title}
                    </div>
                    <div className="services__item__text">
                    {item.text}
                </div>
                    <div className="services__item__link"><Link to="/ "> Learn moore 
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.121 0.293031C7.93353 0.480558 7.82821 0.734866 7.82821 1.00003C7.82821 1.26519 7.93353 1.5195 8.121 1.70703L11.413 5.00003L1 5.00703C0.734784 5.00703 0.48043 5.11239 0.292893 5.29992C0.105357 5.48746 0 5.74181 0 6.00703C0 6.27225 0.105357 6.5266 0.292893 6.71414C0.48043 6.90167 0.734784 7.00703 1 7.00703L11.414 7.00003L8.121 10.293C8.02549 10.3853 7.94931 10.4956 7.8969 10.6176C7.84449 10.7396 7.8169 10.8709 7.81575 11.0036C7.8146 11.1364 7.8399 11.2681 7.89018 11.391C7.94046 11.5139 8.01471 11.6255 8.10861 11.7194C8.2025 11.8133 8.31415 11.8876 8.43705 11.9379C8.55994 11.9881 8.69162 12.0134 8.8244 12.0123C8.95718 12.0111 9.0884 11.9835 9.2104 11.9311C9.33241 11.8787 9.44275 11.8025 9.535 11.707L13.121 8.12203C13.3996 7.84345 13.6207 7.51271 13.7715 7.1487C13.9222 6.78469 13.9999 6.39454 13.9999 6.00053C13.9999 5.60652 13.9222 5.21637 13.7715 4.85236C13.6207 4.48835 13.3996 4.15761 13.121 3.87903L9.535 0.293031C9.34747 0.10556 9.09316 0.000244141 8.828 0.000244141C8.56284 0.000244141 8.30853 0.10556 8.121 0.293031Z" fill="white"/>
                    </svg>
                    </Link>
                    </div>
                </div>
            </li>
                  ))}
        </ul>
    </section>
    <section className="read_moore">
        <div className="container">
            <div className="read_more__image">
                <img src={read_m_img} draggable="false" alt="img" />
            </div>
            <div className="read_more__text">
                <h1>
                We complete every projects
                extra care as customer need
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. 
                </p>
                <Link to="/"
                className="read_more_link"
                >
                    Read more
                </Link>
            </div>
        </div>
    </section>
    <section className="section3">
        <div className="container">
        <div className="read_more__image">
                <img src={read_m2_img} draggable="false" alt="img" />
            </div>
            <div className="read_more__text">
                <h1>
                We complete every projects
                extra care as customer need
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. 
                </p>
                <Link to="/"
                className="read_more_link"
                >
                    Read more
                </Link>
            </div>
        </div>
    </section>
    <section className="section4">
        <div className="container">
            <div className="section4__title">
                Met Our Team
            </div>
            <div className="section4__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis 
                accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </div>
            <ul className="section4__items">
            {dataList2.map((item, id) => (
            <li className="section4__item" key={id}>
                <div className="section4__item__img">
                    <img src={item.img} draggable="false" alt="img"/>
                </div>
                <div className="section4__item__name">
                    {item.name}
                </div>
                <div className="section4__item__job">
                    {item.job}
                </div>
                <div className="section4__item__contacts">
                    <Link to="/"
                    >
                        <img src={icon_skype} draggable="false" alt="icon" />
                        <img src={icon_ln} draggable="false" alt="icon" />
                        <img src={icon_tw} draggable="false" alt="icon" />
                        <img src={icon_fb} draggable="false" alt="icon" />

                    </Link>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </section>
    <section className="section5">
        <div className="container">
            <div className="section5__box">
                <div className="section5__box__title">
                Subscribe to get the Latest News
                </div>
                <div className="section5__box__text">
                    We recommended you to subscribe to our newspaper,drop your email below to get daily update about us
                </div>
                <div className="section5__box__form">
                    <form method="GET">
                        <div className="form__input">
                            <input type="email" placeholder="Enter your email addres">

                            </input>
                        </div>
                        <div className="form__btns">
                            <button className="form__button">
                                <img src={icon_sub} draggable="false" alt="img" />
                                Subscribe
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </> );
}
 
export default Home;