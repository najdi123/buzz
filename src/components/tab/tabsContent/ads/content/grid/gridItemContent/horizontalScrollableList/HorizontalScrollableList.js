import React from 'react';
import './horizontalScrollableList.css'
import img from '../../../../../../../../images/ps4.jpg'
import arrow from '../../../../../../../../images/Arrow.png'
import Button from "reactstrap/es/Button";

const HorizontalScrollableList = () => {

    const scrollLeft= ()=>{
            document.getElementById('container').scrollLeft -= 50;
    };

    const scrollRight= ()=>{
        document.getElementById('container').scrollLeft += 50;
    };

    return (
        <div  className='horizontalScrollableList'>
            <Button className='arrowLeft' onClick={scrollLeft}><img src={arrow}/></Button>
            <div className='imgHolder' id='container'>
                <img src={img}/>
                <img src={img}/>
                <img src={img}/>
            </div>
            <Button className='arrowRight' onClick={scrollRight}><img src={arrow}/></Button>

        </div>
    );
};

export default HorizontalScrollableList;
