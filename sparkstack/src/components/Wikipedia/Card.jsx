import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div class="card">
            <h2 class="card-title">{props.title}</h2>
            <div class="card-content">
                <p dangerouslySetInnerHTML={{__html:props.desc}}></p>
            </div>
            <a href={props.visit} target="__blank" rel='noreferrer'><button class="read-more-button">Read More</button></a>
        </div>
    )
}

export default Card
