import Component1 from "./component";
import './section1.css';

function Section1(){
    return (
        <div className='section1'>
            <div className='head'>
                <header>
                    <nav>   
                        <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section1%2Fimage%2Flogo.png?alt=media&token=6debb893-0583-4591-9f60-d36a0555b80c" alt="" className="logo" width={90} height={30}/>
                        <ul className='nav-bar'>
                            <li>
                                <a href='/'>For You & Family</a>
                            </li>
                            <li>
                                <a href='/'>For Business</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="head-bottom">
                    <div className='head-left'>
                        <p>HELLO, WE ARE FINCORP</ p>
                        <h1>Insurance<br/> made easy. </h1>
                        <button className='button'>Get your free Quote</button>
                    </div>
                    <div className='head-right'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section1%2Fimage%2Fbanner-1.png?alt=media&token=84e75d71-b220-4dd9-bae9-5a418713fc99" width={900} className="banner" alt=""/>
                    </div>
                </div>
            </div>
            <div className='center'>
                <div style={{fontSize: 30, fontWeight: 700}}> A new take on insurance</div>
                <p> Great for individuals and business</p>
            </div>
            <div className='foot'>
                <img className="family" src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section1%2Fimage%2Fhealth-family-1.png?alt=media&token=9a463edf-d87a-4570-a04c-0d7de51e9633" alt="" width={1000}/>
                <div className='foot-right'>
                    <div className="section">Monotonectally deploy seamless data and  ressource maximizing systems</div>
                    <h4>Great for individuals and small  families up to 4 numbers.</h4>
                    <p>A strong, up to date, employee benefits health insurance programm is vital for attracting and retaining good employees. It takes diligence, creativity and attention to detail to ensure you are getting the best "bang for your buck" each and every year </p>
                    <Component1 
                        title='COMPREHENSIVE INSURANCE'
                        subtitle='Dynamically repurpose e-business users rather than granular products.'
                    />
                    <Component1 
                        title='SUPPORT IS JUST A CALL AWAY'
                        subtitle='Rapidiously customize value-added platforms compliant action items.'
                    />
                    <Component1 
                        title='SAY GOODBYE TO PAPERWORK'
                        subtitle='Globally deliver economiclly sound communities relationships.'
                    />
                </div>
            </div>
        </div>
    );
}

export default Section1;