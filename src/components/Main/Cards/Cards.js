import React, {useState} from 'react'
import style  from './Cards.module.scss'


function Cards(props) {
   
   let [heart, setHeart] = useState(props.data.isFavorited);
   let heartClass = heart ? './assets/images/heartlike.svg' : './assets/images/heart.svg'
   let changeFavorite = () => {
      setHeart(prev => !prev)
   }

   let [number, setNumber] = useState(0)
   let addMore = () => {
      setNumber(prev => prev +1)
   
   }
   let addLess = () => {
      setNumber(prev => {
         if(prev === 1) {
            changeCartState()
            return 0
         }
         else { 
            return prev - 1
         }
      })
   }

   let [showCart, setShowCart] = useState(true)
   function changeCartState() {
      setShowCart(prev => !prev)
      addMore()
   }

  return (
    <div className={style.card}>
      <div className={style.card_item}>
         <div className={style.card_item_img}>
            <div className={style.count}></div>
            <img src={props.data.img} alt='logo' />
            <div className={style.like}>  
               <div className={heartClass} onClick={changeFavorite}>
                <img  src={heartClass} alt='Like' />
               </div>
            </div>
         </div>
         <div className={style.carusel}> 
            <p>oooo</p>
         </div>
         <div className={style.title}>{props.data.title}</div>
         <div className={style.price}>{props.data.price}</div>
         <div className={style.btn_wrapper}>
            
            {
               showCart &&
            <div className={style.btn_buy} onClick={changeCartState} >Добавить в корзину</div>
            }
         </div>
         {
            !showCart &&
            <div className={style.amount} >
            <div className={style.less} onClick={addLess}>-</div>
            <div className={style.total} onClick={props.handleclick}>{number} <p>В корзинy</p></div>
            <div className={style.more} onClick={addMore}>+</div>
         </div>
         }
         
      </div>
      </div>
  )
}   
export default Cards