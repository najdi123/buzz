import React, {useState} from 'react';
import arrow from "../../../../../../../images/Arrow.png";
import './subitem.css'

const SubItem = (props) => {
    const [expBox, setExpBox] = useState(false);
    const onCategoryClick = () => {
        setExpBox(!expBox);
    };
    return (
        <div>
            <div className='categoryItem'>
                <div className='categoryItemSection1'>
                    <div className='flexItem'><img onClick={onCategoryClick} src={arrow}/></div>
                    <p className='flexItem'>{props.content}</p>
                </div>
                <div className={`expandableBox ${expBox ? "expandedBoxNoAnim" : "collapsedBoxNoAnim"}`}>
                    <p>some items</p>
                    <p>some items</p>
                </div>
            </div>
        </div>
    );
};

export default SubItem;
