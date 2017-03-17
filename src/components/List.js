import React from 'react';
import { connect } from 'react-redux';
import { editTitle, updateTitle, addCard, deleteList } from './../actions';
import { If } from './../utils';
import Cards from './Cards';
const List = React.createClass({
	getInitialState(){
		return {
			editingTitle:false,
		}
	},
	toggleEditTitle(){
		this.setState({
			editingTitle:!(this.state.editingTitle),
		})
	},
	render(){
		return (
			<div className="col m4 list" key={this.props.index}>
	     	<div className="card">
	        <If test={this.state.editingTitle}>
	      		<div className="card-title list-title editing">
	      			<input type="text" onChange={this.props.updateTitle} value={this.props.list.title}/>
	      			<a className="btn-floating save-list" onClick={this.toggleEditTitle}>
	      			 	<i className="material-icons">done</i>
	      			</a>
	      		</div>
	        </If>
	        <If test={!this.state.editingTitle}>
	       		<div className="card-title list-title"  onClick={this.toggleEditTitle}>
	      			<small>{this.props.list.title}<i className="material-icons">edit</i></small>
	      		</div>
	        </If>
	       	<div className="card-content ">
	          <Cards cards={this.props.list.cards} index={this.props.index}/>
	        </div>
		     	<div className="card-action list-actions">
	          <button className="btn" onClick={this.props.addCard}>Add Card</button>
	          <button className="btn grey lighten-1" onClick={this.props.delete}>Delete List</button>
	      	</div>
	      </div>
	    </div>
  	)
	}
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateTitle:(e)=> {
    	dispatch(updateTitle(ownProps.index,e.target.value))
    },
    addCard:()=>{
    	dispatch(addCard(ownProps.index))
    },
    delete:()=>{
    	dispatch(deleteList(ownProps.index))
    }
  }
};

const mapStateToProps = (store) => {
  return {
    editing:store.editing,
    lists:store.lists
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
