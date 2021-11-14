export default function About(props){
    return(
        <div className="about">
            <div style={{fontSize: 20, fontWeight: 600}}>{props.title}</div>
            {props.children}
        </div>
    );
}