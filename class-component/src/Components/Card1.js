function Card1(props){
    const {heading,desc} = props;
    return(
        <div>
            <h3>{heading}</h3>
            <p>{desc}</p>
        </div>
    )
}
export default Card1;