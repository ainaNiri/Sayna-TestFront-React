import './section3.css' 

function Card3(props){
    return(
        <div className="card">
            <div className='number-container' style={{background : props.color, color: props.textColor}}>
                {props.number}
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}
export default Card3;