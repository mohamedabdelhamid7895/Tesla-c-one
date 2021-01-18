import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './item.css'
const Item = ({title,description,descLink,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnText,rightBtnLink,twoButtons,first}) => {
    return (
        <div className="item" style={{
            backgroundImage:`url(${backgroundImg})`
        }}>
          
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_textDesc">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                <div className="item_buttons">
                  <Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
                  {
                      twoButtons&& (
                          <Button imp='secondary' text ={rightBtnText} link={rightBtnLink} />

                      )
                  }
                </div>
                {first && (
                    <div className="item_expand">
                    <ExpandMoreIcon />
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Item
