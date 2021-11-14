import './section4.css'

function Section4(){
    return(
        <div className="section4">
            <div className='image-zone'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section4%2Fimage%2FComposed-layer-2.png?alt=media&token=3a1eeffe-e0c5-4f2d-b7fe-f91c606eeb39" alt="" width={1500}/>
            </div>
            <div className="text-zone">
                <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section4%2Fimage%2Fquote.png?alt=media&token=3c073de7-0fe2-48d1-942d-5220f6ff11a0" alt="" width={40}/>
                <h2>
                    I need to understood what's going on-it's my health and I want to feel secure in it. With my previous health insurance, I didn't know how any of it worked.
                </h2>
                <div style={{color: "blue", fontSize: 17}}>
                    Matthew Young
                </div>
                <div style={{fontSize: 14, color: "gray"}}>
                    Legal Consultant, United States
                </div>
            </div>
        </div>
    );
}
export default Section4;