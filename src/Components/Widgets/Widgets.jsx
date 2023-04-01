import React from 'react';
import widget from './Widgets.module.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    
    const newArticle = (heading, subtitle)=>{
        return (
        <div className={widget.widget_article}>
            <div className={widget.widget_articleLeft}>
                <FiberManualRecordIcon className={widget.widget_icon} />
            </div>
            <div className={widget.widget_articleRight}>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

  return (
    <div className={widget.widget}>
        <div className={widget.widget_header}>
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newArticle ("Top newsletter to follow", "Top news - 1,812 readers") }
        {newArticle ("Alibaba to split, ready spinoffs", "2d ago - 4,106 readers") }
        {newArticle ("startups upbeat about hiring", "2d ago - 4,768 readers") }
        {newArticle ("Chief Data Officers in demand", "3d ago - 2,712 readers") }
        {newArticle ("Demand for office space soars", "2d ago - 1,120 readers") }
        

    </div>
  );
}

export default Widgets;