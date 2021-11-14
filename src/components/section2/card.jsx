import './section2.css' 

function Card(props){
    return(
        <div className="card">
            <div className='image-container' style={{background : props.color}}>
                <img src={props.image} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}
export default Card;