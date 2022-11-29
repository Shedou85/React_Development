import React from 'react'
import style from './Tabs.module.scss'



function Tabs() {
  return (
   <div className={style.tabs}>
   <div className={style.tabs_item}>
     <div className="btn_primary">Для начинающих</div>
     <div className="btn_primary">От билдеров</div>
     <div className="btn_primary">Для профессионалов</div>
     <div className="btn_primary">Расходники</div>
   </div>
 </div>
  )
}

export default Tabs