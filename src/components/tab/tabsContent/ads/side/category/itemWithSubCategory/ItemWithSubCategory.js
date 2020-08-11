import React, {useState} from 'react';
import arrow from "../../../../../../../images/Arrow.png";
import './itemWithSubCategory.css'
import CategoryItem from "../item/CategoryItem";
import LastItem from "../lastItem/LastItem";
import SubItem from "../subitem/SubItem";

const ItemWithSubCategory = (props) => {

    const [expBox, setExpBox] = useState(false);
    const [height, setHeight] = useState(0);

    const onCategoryClick = () => {
        setExpBox(!expBox);
    };

    return (
        <div className='categoryItem'>
            <div className='categoryItemSection1'>
                <div className='flexItem'><img onClick={onCategoryClick} src={arrow}/></div>
                <p className='flexItem'>{props.content}</p>
            </div>
            <div style={{}} className={`expandableBox ${expBox ? "expandedBox" : "collapsedBox"}`}>
                <SubItem   content={"استان"}/>
                <SubItem   content={"شهر"}/>
            </div>
            <div className='horizontalLine'/>
        </div>
    );
};

export default ItemWithSubCategory;
