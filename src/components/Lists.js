import List from './List';
import { connect } from 'react-redux';
import { addList } from './../actions';
const Lists=function(props) {
  var Lists=props.lists.map((list,index)=> {
   	return(
  		<List list={list} index={index} key={index} />
    )
	});

	return (
		<div className="list-row row">
			{Lists}
			<a title="Create new List" className="btn-floating btn-large red lighten-1"  onClick={props.addList} id="create-list">
				<i className="material-icons">add</i>
			</a>
		</div>
	)      
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addList: () => {
      dispatch(addList())
    }
  }
};

const mapStateToProps = (store) => {
  return {
    lists:store.lists,

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
