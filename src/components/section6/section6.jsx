import Price from "./price";
import Tile from "./tile"
import "./section6.css";

export default function Section6(){
    return(
        <div className='section6'>
            <div className="section6-foot">
                <h1>
                    Honest Pricing
                </h1>
                <div>
                    Simple & honest pricing. No problem fees
                </div>
                <div className="price-container">
                    <Price height={400} textColor= "blue" title="Basic" numberColor="#48cab0" backgroundColor="#abffd9" number="$9" buttonColor="#00cfa0">
                    </Price>
                    <Price pro={true} height={500} textColor= "red" title="PROFESSIONAL" numberColor="white" backgroundColor="#ffaa89" number="$19" buttonColor="#ffaa89">
                        <Tile content="Proactively leverage"/>
                    </Price>
                    <Price height={400} textColor= "blue" title="PREMIUM" numberColor="#5bc0ee" backgroundColor="#cff4fe" number="$49" buttonColor="#008bfe">
                    </Price>
                </div>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section6%2Fimage%2Fbg-image4.png?alt=media&token=14dcff56-8c83-42bb-ad99-3d5fa68a2e64" alt="" width={1525} style={{position: "absolute", zIndex: 15}}/>
        </div>
    );
} 