export default function(props) {
	var Lists=props.lists.map((list,index)=>{
		return(<option value={index} selected={index==props.listIndex}>{list.title}</option>)
	})
	return(
		<div>
			<div className="content">
				<p>{props.card.description}</p>
				<div class="input-field">
					<label>Move To:</label>
					<select className="browser-default" onChange={props.move}>
						<option value='-1'>Choose list</option>
						{Lists}
					</select>
				</div>
			</div>
			<div className="actions">
				<a className="btn-floating" onClick={props.done}>
  			 	<i className="material-icons">close</i>
			 </a>
			</div>
		</div>
	)
};
