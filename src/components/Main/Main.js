import React, {useState} from 'react'
import style from './Main.module.scss'
import Tab from "./Tab/Tab"
import Filter from "./Filter/Filter"
import Cards from "./Cards/Cards"
import Title from "./Title/Title"
import data from "../Main/data"
import tabData from "../Main/tabData"
import Carticon from "./Carticon"

const Main = () => {
  let [counter, setCounter] = useState(0)

  let addCart = () => {
   setCounter(prev => prev +1)
  }

   let Cardlist = data.map((product,idx) => {
    return <Cards key={idx} data={product} handleclick={addCart}/>
   })
   let TabList = tabData.map((name, idx) => {
    return <Tab key={idx} TabList={name} />
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
      <div className={style.counter}>
        <span><Carticon /> <span className={style.amount}>{counter}</span></span>
      </div> 
      <Filter /> 
      <div className={style.card_wrapper}>
        {Cardlist}
      </div>
      
    </div>
  )
}

export default Main


