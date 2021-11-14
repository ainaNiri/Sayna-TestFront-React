import Tab from './tab'
import './section7.css'
import Quote from '../quote/quote';

export default function Section7(){
    return(
        <div className="section7">
            <div className="section7-background">
                <div className="question">
                    <Tab content="What are the document required for claiming?"/>
                    <Tab content="Which are the network hospitals in your vicinity?"/>
                    <Tab content="Will I get covered for my pre-exisiting illness?"/>
                    <Tab content="Is maternity covered for my pre-existing illness?"/>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section7%2Fimage%2Ffamily-illustration-1.png?alt=media&token=d28f5f4a-62bf-4775-9c31-6df48b3a863f" alt="" className="family-illustration"/>
            </div>
            <div className="quote-7">
                <Quote
                    image="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section7%2Fimage%2Fshield-1.png?alt=media&token=2e146c96-2031-495a-aa06-83a7bc7664ab"
                    title='Insurance made easy'
                    subTitle='At fincorp, we are commited top-notch services to our customers.'
                    paddingTop={50}
                    paddingBottom={50}
                    left={-40}
                />
            </div>
        </div>
    );
}