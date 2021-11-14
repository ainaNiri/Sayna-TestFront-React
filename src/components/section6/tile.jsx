export default function Tile(props){
    return(
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 15}}>
            <img src="https://firebasestorage.googleapis.com/v0/b/fincorp-4d39c.appspot.com/o/section6%2Fimage%2Ftick.png?alt=media&token=01593884-d636-4f5e-bc96-9663b0259ad7" alt=""  width={40}/>
            <div style={{marginLeft: 10}}>{props.content}</div>
        </div>
    );
}