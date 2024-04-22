import React, { useState } from 'react'
import "./switchtabs.scss";

const SwitchTabs = ({data,onTabchange}) => {
    
  let [selectedTab,setSelectedTab] = useState(0);
  let [left,setLeft] = useState(0);

  const activeTab = (tab,index)=>{
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabchange(tab,index);
  }

  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {data.map((tab,index) =><span onClick={() => activeTab(tab,index)} key={index} className={`tabItem ${selectedTab == index ? "active" : ""}`}> {tab}</span>)}
        </div>
        <span className="movingBg" style={{left : left}}></span>
    </div>
  )
}

export default SwitchTabs
