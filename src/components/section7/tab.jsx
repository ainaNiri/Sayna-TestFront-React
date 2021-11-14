import './section7.css'
export default function Tab(props){
    return(
        <div className='tab'>
            <div className="tab-up">
                <div>
                    {props.content}
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section7%2Fimage%2Farrow-down-com.svg?alt=media&token=b3ff4a51-f386-498a-8c68-3bd5504c2a5c" alt="" />
                </div>
            </div>
            <div style={{display: props.display}} className='tab-down'>
                A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.
            </div>
        </div>
    );
}