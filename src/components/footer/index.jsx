import "./style.scss"
function Footer(){
    return(
       <footer> 
         <div className="container">
             <h2 className="footer__title">
                Доставка и оплата
             </h2>
             <div className="row footer__row">
                 <div className="col-4">
                   <h4 className="footer__subtitle">
                       60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО
                   </h4>
                   <p className="footer__description">
                      Если мы не успеем доставить любые продукты, кроме сувенирной продукции и соусов, в течение 60 минут, курьер подарит вам сертификат на большую пиццу.
                   </p>
                 </div>
                 <div className="col-4">
                     <h4 className="footer__subtitle">
                        345 ₽
                     </h4>
                     <p className="footer__description">
                        Минимальная сумма доставки без учета товаров из категории «Другие товары»
                     </p>
                     <h4 className="footer__subtitle">
                        7 000 ₽
                     </h4>
                     <p className="footer__description">
                         Максимальная сумма при оплате наличными
                     </p>
                     <p className="footer__description">
                     Изображения продуктов могут отличаться от продуктов в заказе.
                     </p>
                 </div>
                 <div className="col-4">
                     <h4 className="footer__subtitle">ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h4>
                     <iframe className="footer__map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1462.367161765861!2d74.56306185327641!3d42.85734268000097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1623505356898!5m2!1sru!2skg"></iframe>
                     <span className="footer__zone">Зона доставки</span>
                 </div>
             </div>
         </div>
       </footer>
    )
}

export default Footer