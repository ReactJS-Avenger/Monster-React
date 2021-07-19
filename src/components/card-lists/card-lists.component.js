import React from 'react';
import { Cards } from '../cards/cards.component';

import './card-list.styles.css'

export const CardList = (props) =>{
    return(
        <div className='card-list'>
            {props.monsters.map((monster) => <Cards key={monster.id} monster={monster}/>)}
        </div>
    )
}