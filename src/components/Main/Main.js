import React from 'react'
import style from './Main.module.scss'
import Tab from "./Tab/Tab"
import Filter from "./Filter/Filter"
import Cards from "./Cards/Cards"
import Title from "./Title/Title"
import data from "../Main/data"
import tabData from "../Main/tabData"


const Main = () => {
   let Cardlist = data.map(product => {
    return <Cards data={product} />
   })
   let TabList = tabData.map(name => {
    return <Tab TabList={name} />
   })


  return (
    <div className={style.wrapper}>
      <div className={style.way_back}>
        <a href="#main">Главная</a>
        <a href="#catalog">Каталог</a>
        <a href="#tatoo_machine">Тату машинки</a>
      </div>
      <Title />
      <div className={style.tab_wrapper}>
        {TabList}
      </div>
      <Filter />
      <div className={style.card_wrapper}>
        {Cardlist}
      </div>
      
    </div>
  )
}

export default Main


