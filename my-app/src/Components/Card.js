const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const yearName = date.getFullYear();


function Card(props){
    const {heading,text} = props;
    return <div className="card">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-text">{text}</p>
        <p className="card-footer">{dateName + '/' + monthName + '/' + yearName}</p>
    </div>
}
export default Card;