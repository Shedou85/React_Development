import React from 'react'
import style from './Tabs.module.scss'



function Tab(props) {
  

  return (
   
   <div className={style.tab_item}>
     <div className="btn_primary">{props.TabList.name}</div>
   </div>
 
  )
}

export default Tab