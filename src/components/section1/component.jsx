import './section1.css'

function Component1(props){
    return(
        <div className='c-1'>
            <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section1%2Fimage%2Ftick.png?alt=media&token=3c864f88-869a-462d-aece-8cc50ac5a061" alt="" width={69} height={69}/>
            <div className="tick">
                <div className="title">{props.title}</div>
                <div className="subTitle">{props.subtitle}</div>
            </div>
        </div>
    ); 
}
export default Component1;