import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const List = ({cartas}) =>{
    return (
        <>
            {cartas.map((card)=>{
                const {id, name, age, imgUrl} = card;
                return(
                    <article key={id} className="card w-25">
                        <img src={imgUrl} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}
    
export default List;