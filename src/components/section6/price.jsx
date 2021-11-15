import './section6.css'
import Tile from './tile';

export default function Price(props){
    return(
        <div className="price-card" style={{height: props.height}}>
            <div style={{color: props.textColor}}>
                {props.title}
            </div>
            {props.pro ? <div className='pro'>Save 20%</div> : <div></div>}
            <div style={{color: props.numberColor, background: props.backgroundColor}} className="price-number">
                {props.number}
            </div>
            <div>
                <Tile content="Rapidiously strategize value"/>
                <Tile content="Progressively vizualize leadership"/>
                <Tile content="Equity invested supply chains"/>
                {props.children}
            </div>
            <button style={{background: props.buttonColor}} className='price-button'>
                Choose Plan
            </button>
        </div>
    );

}