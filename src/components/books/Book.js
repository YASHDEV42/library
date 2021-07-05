import React from 'react'
import "./Book.css"

const Book = (props) => {
    return (
        
            <div className="anime">
                <div className="poster">
                    <a href={props.book.link} target="_blank">
                        <img src={props.book.img} alt={props.book.title}/>
                    </a>
                    
                </div>
                <div className="info">
                    <h2>{props.book.title}</h2>
                    <button className="my-btn">
                        <a href={props.book.link} target="_blank">تحميل</a>
                    </button>
                </div>
            </div>
    )

}

export default Book