import React from 'react'
import { Badge } from '@chakra-ui/react'

const RadioPrice = (props) => {
    return (
        <div onClick={props.onClick} className={props.active ? 'card-price-active' : 'card-price'}>
            {props.desc && <Badge className='card-badge-desc' colorScheme='yellow'>{props.desc}</Badge>}
            {props.active && <Badge className='card-badge' colorScheme='blue'><i className="fa-solid fa-check"></i></Badge>}
            <h5>{props.property}</h5>
            <small style={{ margin: '10px 0 0 5px' }}>{props.price}</small>
        </div>
    )
}

export default RadioPrice