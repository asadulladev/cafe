
import React, {useState} from 'react';
import img from "../../img/lineabout.svg"
import img2 from "../../img/line2.svg"
import {AiOutlineArrowRight} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import {MdLocalPhone} from 'react-icons/md'
import user from "../../img/user.png"
import tel from "../../img/tel.png"
import {BsFillTelephoneFill} from "react-icons/bs";


const Home = () => {
    const [open,setOpen] = useState(false)
    function getOpen(){
        if (open === false){
            setOpen(true)
        } else {
            return setOpen(false)
        }
    }



    return (
        <div style={{
            overflow:"hidden",
        }}>
            <div  style={{
                backdropFilter:open ? "blur(4px)" : "blur(0)",
            }}  id="home">
                <div className="container">
                    <hr className="home__line-top"/>
                    <hr className="home__line-bottom"/>
                    <hr className="home__line-left"/>
                    <div className="home">
                        <div className="home--block">
                            <img src={img} alt=""/>
                            <h4>Delicious</h4>
                            <img src={img2} alt=""/>
                        </div>
                        <div className="home--main">
                            <h1>Italian Cuisine</h1>
                            <p className="home--main__par">Classic steak & delicious with delightfully unexpenced twists.
                                The Restaurant`s sunny decor was inspired by the diners</p>
                            <div className="home--main__decor">
                                <div/>
                                <button onClick={() =>getOpen() }>
                                    <h1>Reserve Your Table </h1><AiOutlineArrowRight/></button>
                                <div/>
                            </div>
                            <div className="home--main__modal" style={{
                                // display:open ? "block" : "none",
                                transform : open ? "translateX(200px)" : "translateX(650px)",
                            }}>
                                <div className="home--main__modal--window">
                                    <div className="home--main__modal--window__block">
                                        <div className="home--main__modal--window__block--card">
                                            <img src={user} alt="img"/>
                                            <p style={{
                                                fontSize:"12px"
                                            }}>
                                                NAME
                                                <br/>
                                                <span style={{
                                                    fontSize:"17px"
                                                }}><span style={{color:"blue"}}>
                                                |
                                            </span>Enter your name</span>
                                            </p>
                                        </div>
                                        <div className="home--main__modal--window__block--second">
                                            <img src={tel} alt=""/>
                                            <p>
                                                PHONE
                                                <br/>
                                                <span>Enter your name</span>
                                            </p>
                                        </div>
                                        <button onClick={getOpen}>Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home--absence">
                            <div className="home--absence__archive">
                                <h1>Location</h1>
                                <div/>
                                <ImLocation2 className="home--absence__archive--icon"/>
                                <h4>Rua da media 1g,1200-275,Portugal</h4>
                            </div>
                            <div className="home--absence__select">
                                <h1>Hotline</h1>
                                <div/>
                                <MdLocalPhone className="home--absence__select--icon"/>
                                <a style={{color:'white'}} href="tel:+1234567890">+1 (234) 567-890</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

);
};
export default Home;