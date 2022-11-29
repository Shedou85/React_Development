import React from 'react'
import style from './Main.module.scss'
import Tabs from "./Tabs/Tabs"
import Filter from "./Filter/Filter"
import Cards from "./Cards/Cards"
import data from "../Main/data"
import Title from "./Title/Title"


const Main = () => {
   let list = data.map(product => {
    return <Cards data={product} />
   })



  return (
    <div className={style.wrapper}>
      <div className={style.way_back}>
        <a href="#main">Главная</a>
        <a href="#catalog">Каталог</a>
        <a href="#tatoo_machine">Тату машинки</a>
      </div>
      <Title />
      <Tabs />
      <Filter />
      <div className={style.card_wrapper}>
        {list}
      </div>
      
    </div>
  )
}

export default Main


