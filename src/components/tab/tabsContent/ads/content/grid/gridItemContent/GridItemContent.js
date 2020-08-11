import React, {useState} from 'react';
import './GridItemContent.css'
import img from '../../../../../../../images/ps4.jpg'
import HorizontalScrollableList from "./horizontalScrollableList/HorizontalScrollableList";
import {getStore} from "trim-redux";
import gridItemContentData from "./gridItemContentData";


const GridItemContent = () => {
    const [item, setItem] = useState({
        'itemAddress': 'گیم باز/ صفحه اصلی پلی استیشن / کنسول',
        'product': 'پلی استیشن 4 در حد نو',
        'userAddress': 'تهران نازی آباد',
        'description1': 'دستگاه بسیار تمیز به همراه 2 دسته، کپی خور نیست',
        'description2': 'کاملا نو و در حد آکبند',
        'description3': 'همراه دو دسته',
        'description4': 'بدون خط و خش',
        'description5': 'بازی اورجینال به ارزش 4 میلیون تومان 5',
    });

    return (
        <div className='GridItemContent'>
            <p className='alignRight'>{item.itemAddress}</p>
            <div className='gridItemContentSection'>
                <div className='gridItemContentImage'>
                    <img src={img}/>
                </div>
                <div>
                    <p className='alignRight gridItemContentTitle'>{item.product}</p>
                    <p className='alignRight gridItemContentLocation'>{item.userAddress}</p>
                    <p className='alignRight gridItemContentFeatures'>{item.description1}</p>
                    <p className='alignRight gridItemContentFeatures'>{item.description2}</p>
                    <p className='alignRight gridItemContentFeatures'>{item.description3}</p>
                    <p className='alignRight gridItemContentFeatures'>{item.description4}</p>
                    <p className='alignRight gridItemContentFeatures'>{item.description5}</p>
                </div>
            </div>
            <div className='gridItemContentSection'>
                <div>
                    <div className='gridItemContentSubSection1'><HorizontalScrollableList/></div>
                    <div className='gridItemContentSubSection2'>bb</div>
                    <p>گیم باز هیچ گونه منفعت و مسوولیتی در قبال معامله شما ندارد.</p>
                </div>
                <div>
                    <div className='gridItemContentSubSection1'>zzzz</div>
                    <div className='gridItemContentSubSection2'>bb</div>
                    <p>گیم باز هیچ گونه منفعت و مسوولیتی در قبال معامله شما ندارد.</p>
                </div>
            </div>
        </div>
    );
};

export default GridItemContent;
