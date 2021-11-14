import './quote.css'

export default function Quote(props){
    return(
        <div className='quote'>
            <img src={props.image} alt="" className='shield' width={80} style={{left: props.left}}/>
            <div className='card-quote' style={{paddingTop: props.paddingTop, paddingBottom: props.paddingBottom, width: props.width}}>
                <div className='text'>
                    <div style={{fontSize: 22, fontWeight: 600, marginBottom: 10}}>
                        {props.title}
                    </div>
                    <div style={{color: 'gray', fontSize: 15}}>
                        {props.subTitle}
                    </div>
                </div>
                <div className='button-quote'>
                    Get your free Quote
                </div>
            </div>
        </div>
    ); 
} 