import './quote.css'

export default function Quote(props){
    return(
        <div className='quote'>
            <img src={props.image} alt="" className='shield' width={110} height={110}/>
            <div className='card-quote'>
                <div className='text'>
                    <div style={{fontSize: 22, fontWeight: 600, marginBottom: 10}}>
                        {props.title}
                    </div>
                    <div style={{color: 'gray', fontSize: 15}}>
                        {props.subTitle}
                    </div>
                </div>
                <button className='button-quote'>
                    Get your free Quote
                </button>
            </div>
        </div>
    ); 
} 