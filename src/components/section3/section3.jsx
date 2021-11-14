import Card3 from './card';
import './section3.css'

function Section2(){
    return(
        <div className="section3">
            <h1>Choose your assurance</h1>
            <span>Easy as one, two, three</span>
            <div className="card-container">
                <Card3 textColor = '#97e0ee' color='#adf3fe' number='1' title='Report Claim' content='Lorem ipsum sit amet, consectectur adipiscing elit. Proin quis nunc vitae rutrum suscipit non et'/>
                <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section3%2Fimage%2Fafter-blue.png?alt=media&token=fea75293-c68f-4a93-8fc5-6c92e01263a8" alt="" className='after'/>
                <Card3 textColor = '#e8b3ec' color='#fbd1ff' number='2' title='Report Claim' content='Lorem ipsum sit amet, consectectur adipiscing elit. Proin quis nunc vitae rutrum suscipit non et'/>
                <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section3%2Fimage%2Fafter-pink.png?alt=media&token=330021cc-b3f5-4886-a533-b9457f3df537" alt="" className='after'/>
                <Card3 textColor = '#b8e6ad' color='#d9fed2' number='3' title='Report Claim' content='Lorem ipsum sit amet, consectectur adipiscing elit. Proin quis nunc vitae rutrum suscipit non et'/>            
            </div>
        </div>
    );
}
export default Section2;