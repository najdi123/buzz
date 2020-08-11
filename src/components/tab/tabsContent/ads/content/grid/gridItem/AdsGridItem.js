import React from 'react';
import img from '../../../../../../../images/ps4.jpg'
import './adsGridItem.css'
import {setStore, getStore} from "trim-redux"


const AdsGridItem = (props) => {

    const onCategoryClick = () => {
        setStore({selectedGridItemId: props.item.id});
        const selectedGridItem =  getStore('selectedGridItemId')
        console.log('you selected grid item with id ' + selectedGridItem)
    };

    return (
        <div className="gridItem" onClick={onCategoryClick}>
            <img className="itemImage" src={img}/>
            <p className={"alignRight gridItemText"}>گیفت کارت</p>
            <p className={"alignRight gridItemText"}>250.000</p>
            <p className={"alignRight gridItemText"}>تهران نازی آباد</p>
            <div className="horizontalLineGreen"/>
        </div>
    );
};

export default AdsGridItem;
