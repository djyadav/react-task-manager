import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { If, getSelectValues } from './../utils';
import { removeCard, updateCardDescription, updateStatus, moveCard,tagUsers } from './../actions';
import ViewCard from './ViewCard';
import MoveCard from './MoveCard';
import EditableCard from './EditableCard';
const Card = React.createClass({
	getInitialState(){
		return {
			mode: 'view'
		}
	},
	render(){
		return(
			<div className="z-depth-1 list-card">
				<If test={this.state.mode == 'view'}>
					<ViewCard 
						card={this.props.card}
						edit={()=>{this.setState({mode: 'edit'})}}
						removeCard={this.props.removeCard}
						move={()=>{this.setState({mode: 'move'})}}
					/>
				</If>
				<If test={this.state.mode=='edit'}>
					<EditableCard 
						lists={this.props.lists}
						card={this.props.card}
						updateDescription={this.props.updateDescription}
						updateStatus={this.props.updateStatus}
						doneEdit={()=>{this.setState({mode: 'view'})}}
						tag={this.props.tag}
					/>
				</If>
				<If test={this.state.mode=='move'}>
					<MoveCard
						lists={this.props.lists}
						card={this.props.card}
						move={this.props.moveCard}
						listIndex={this.props.listIndex}
						done={()=>{this.setState({mode:'view'})}}
					/>
				</If>
			</div>
		)
	}
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeCard: () => {
      dispatch(removeCard(ownProps.index,ownProps.listIndex))
    },
    updateDescription: (e) => {
      dispatch(updateCardDescription({
      	index: ownProps.index,
      	listIndex: ownProps.listIndex,
      	value: e.target.value
      }))
    },
    updateStatus: (e) => {
    	dispatch(updateStatus({
    		index: ownProps.index,
    		listIndex: ownProps.listIndex,
    		value: e.target.value
    	}))
    },
    moveCard: (e) => {
  		dispatch(moveCard({
  			index: ownProps.index,
  			listIndex: ownProps.listIndex,
  			newListIndex: e.target.value
  		}))
    },
    tag: (e) => {
    	dispatch(tagUsers({
  			index: ownProps.index,
  			listIndex: ownProps.listIndex,
  			value: getSelectValues(e.target)
    	}))
    }
   
  }
};

const mapStateToProps = (store) => {
  return {
    editing: store.editing,
    lists: store.lists
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Card);
