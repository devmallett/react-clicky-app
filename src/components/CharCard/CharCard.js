import React from "react";
import "./CharCard.css"


const CharCard = props => ( 
    <div className="card">
        <div className="img-container">

            {/* Image call takes in props from our App.js  */}
            <img onClick={()=>props.userClick(props.id)}alt={props.name} src={props.image}/>
        </div>

    </div>
);

export default CharCard;

// import React from "react";
// import "./CharCard.css"


// const CharCard = props => (

//     <div
//         role="img"
//         aria-label="click-item"
//         onClick={() => props.userClick(props.id)}
//         alt={props.name}
//         src={props.image}
//     />
// );

// export default CharCard;