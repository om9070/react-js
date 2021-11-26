import React from "react";
function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">{props.para}</p>
                    <a href="#" className="btn btn-primary">{props.btn}</a>
                </div>
            </div>
        </>
    )
}
export default Card;