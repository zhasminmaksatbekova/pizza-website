import "./style.scss"
import logo from "../../assets/img/svg/logo.svg"
import { Link } from 'react-router-dom'
import shop from "../../assets/img/svg/shopping-cart.svg"

function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__right">
                        <div className="header__logo">
                        <Link  to="/"> <img className="header__logo" src={logo} alt="logo" /></Link>
                        </div>
                        <div className="header__midle">
                        <h2 className="header__title">
                            REACT PIZZA
                        </h2>
                        <p className="header__description">
                            Самая вкусная пицца во вселенной
                        </p>
                      </div>
                    </div>
                   <div className="header__basket">
                       <p className="header__sum">0 ₽</p>
                       <img className="header__icon" src={shop} alt="" />
                       <p className="header__sum">0</p>
                   </div>
                </div>
            </div>
        </header>
    )
}

export default Header