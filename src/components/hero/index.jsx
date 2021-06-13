import "./style.scss"
import wink from "../../assets/img/other/wink.webp"
import big from "../../assets/img/other/big20.webp"
import carbonara from "../../assets/img/other/carbonara.webp"
import delivery from "../../assets/img/other/delivery.webp"
import dodster from "../../assets/img/other/dodster.webp"

function Hero(){
    return(
        <div className="hero">
        <div className="container">
            <div className="row hero__row">
                <div className="hero__col col-8">
                    <img className="hero__img" src={wink} alt="promotions" />
                </div>
                <div className="hero__col col-4">
                    <img className="hero__img" src={delivery} alt="delivery" />
                </div>
                <div className="hero__col col-4">
                    <img className="hero__img" src={big} alt="promotions" />
                </div>
                <div className="hero__col col-4">
                    <img className="hero__img" src={dodster} alt="dodster" />
                </div>
                <div className="hero__col col-4">
                    <img className="hero__img" src={carbonara} alt="carbonara" />
                </div>
            </div>
        </div>
    </div>
    )
}
 
export default Hero