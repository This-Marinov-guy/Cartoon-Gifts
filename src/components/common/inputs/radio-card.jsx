import React from 'react'
import { Badge } from '@chakra-ui/react'

const RadioCard = (props) => {
    return (
        <div onClick={props.onClick} className={`${props.active && 'card-price-active'} card-price`} style={{padding: '5px 15px'}}>
            {props.desc && <Badge className='card-badge-desc' colorScheme='yellow'>{props.desc}</Badge>}
            {props.active && <Badge className='card-badge' colorScheme='blue'><i className="fa-solid fa-check"></i></Badge>}
            <h5>{props.property}</h5>
        </div>
    )
}

export default RadioCard