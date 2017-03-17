import { USERS, STATUS } from './../stub';
export default function(props) {
	var Users=props.card.users.map((id)=>{
		return(<span className="chip" key={id}>{USERS[id]}</span>)
	})
	return(
		<div>
			<div className="content">
				<div>
					<label>Description</label>
					<p>{props.card.description}</p>
				</div>
				<div>
					<label>Status</label>
					<div><span className="chip">{STATUS[props.card.status] || 'None'}</span></div>
				</div>
				<div>
					<label>Users</label>
					<div>{Users}</div>
				</div>
			</div>
			<div className="actions">
				<a className="btn-floating" onClick={props.edit}>
  			 	<i className="material-icons">edit</i>
  			</a>
			  <a className="btn-floating delete" onClick={props.removeCard}>
        	<i className="material-icons">delete</i>
  			</a>
			  <a className="btn-floating delete" onClick={props.move}>
          <i className="material-icons">swap_horiz</i>
			 </a>
			</div>
		</div>
		)
};
