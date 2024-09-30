const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const yearName = date.getFullYear();

const heading = "Card 1";
const text = "My name is Muammar Shahriar Khan Dhrubo.I am a Civil Engineer but also a web developer by passion";


function Card(){
    return <div className="card">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-text">{text}</p>
        <p className="card-footer">{dateName + '/' + monthName + '/' + yearName}</p>
    </div>
}
export default Card;