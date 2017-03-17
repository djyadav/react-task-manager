import { USERS, STATUS } from './../stub';
export default function(props) {
	var Status=STATUS.map((option,index)=>{
		return(<option value={index} key={index}>{option}</option>)
	});
	var Users=USERS.map((option,index)=>{
		return(<option value={index} key={index} selected={props.card.users.indexOf(index)>-1}>{option}</option>)
	})
	return(
		<div className="editing">
			<div className="content">
				<input className="text" placeholder="description" value={props.card.description} onChange={props.updateDescription}/>
				<div>
					<label> Status: </label>
					<select className="browser-default" onChange={props.updateStatus} defaultValue={props.card.status || -1}>
						<option value='-1'>Choose your option</option>
						{Status}
					</select>
				
				</div>
				<div>
					<label>Users:</label>
					<select className="browser-default" multiple onChange={props.tag}>
						{Users}
					</select>
				</div>
			</div>
			<div className="actions">
				<a className="btn-floating" onClick={props.doneEdit}>
  			 	<i className="material-icons">done</i>
  			</a>
			</div>
		</div>
	)
};
