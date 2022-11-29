import React from 'react'
import style  from './Cards.module.scss'

function Cards(props) {
  return (
    <div className={style.card}>
      <div className={style.card_item}>
         <div className={style.card_item_img}>
            <img src={props.data.img} alt='logo' />
         </div>
         <div className={style.carusel}> 
            <p>oooo</p>
         </div>
         <div className={style.title}>{props.data.title}</div>
         <div className={style.price}>{props.data.price}</div>
      </div>
      </div>
  )
}

export default Cards