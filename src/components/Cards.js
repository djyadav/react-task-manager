import Card from './Card';
const Cards = (props)=> {
 	var Cards_List = props.cards.map((item,i)=>{
 		return(<Card card={item} index={i} listIndex={props.index} key={i}/>)
 	})
 	return (
 		<div className="list-cards">{Cards_List}</div>
 	)
 }
 export default Cards;
 