import About from './about';
import './section8.css';

export default function Section8(){
    return(
        <div className="section8">
           <footer>
                <About title='ADDRESS'>
                    <ul>
                        <li>404-401 West Georgia Street</li>
                        <li>Vancouver, BC, Canada, V6B 5A1</li>
                        <li>+1 (123) 456 7890</li>
                        <li>sales@insurance.com</li>
                    </ul>
                </About>
                <About title='FOLLOW US'>
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                    </ul>
                </About>
                <About title='ABOUT US'>
                    <div className="about-us">
                        Compellingly myocardinate market-driven infrastructures
                        before team driven manufactured products. Monotonectally
                        exploit tactical markets vis-a-vis excellent deliverables.
                    </div>
                </About>
           </footer>
           <div className='copyright'>
                Copyright 2019, Insurance LLC
           </div>
        </div>
    );
}