const list = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      let lists = state.lists.slice();
      let newState = Object.assign({}, state);
      newState.lists = [...lists,{
        title: 'New List',
        cards: []
      }];
      return newState;
    }
    case 'UPDATE_TITLE': {
	    let lists = state.lists.slice();
      lists[action.index].title = action.title;
      let newState = Object.assign({}, state);
      newState.lists = lists.slice();
      return newState;
    }
    case 'ADD_CARD': {
	  let lists = state.lists.slice();
      let cards = lists[action.index].cards.slice();
      cards.push({
      	description: 'New Card',
      	state: -1,
      	users: []
      });
      lists[action.index].cards = cards;
      let newState = Object.assign({}, state);
      newState.lists = lists.slice();
      return newState;
    }
    case 'DELETE_LIST': {
      console.log(state);
  	 	let lists = state.lists.slice();
  	 	lists.splice(action.index,1);
    	let newState = Object.assign({}, state);
    	newState.lists = lists.slice();
    	console.log(newState);
      return newState;
  }
    case 'REMOVE_CARD': {
    	let lists = state.lists.slice();
	    let cards = lists[action.listIndex].cards.slice();
	    cards.splice(action.index,1);
	    lists[action.listIndex].cards = cards;
        let newState = Object.assign({}, state);
	    newState.lists = lists.slice();
	    return newState;
    }
    case 'MOVE_CARD': {
    	let lists = state.lists.slice();
	    let cards = lists[action.payload.listIndex].cards.slice();
	    let newCards = lists[action.payload.newListIndex].cards.slice();
	    newCards=newCards.concat(cards.splice(action.payload.index,1));
	    lists[action.payload.listIndex].cards = cards;
	    lists[action.payload.newListIndex].cards = newCards;
     	let newState = Object.assign({}, state);
      	newState.lists = lists.slice();
      	return newState;
    }
    case 'UPDATE_CARD_DESCRIPTION': {
    	let lists = state.lists.slice();
	    let cards = lists[action.payload.listIndex].cards.slice();
	   	let selectedCard = Object.assign({},cards[action.payload.index]);
	    selectedCard.description = action.payload.value;
      cards[action.payload.index] = selectedCard;
	    lists[action.payload.listIndex].cards = cards;
	    let newState = Object.assign({}, state);
	    newState.lists = lists.slice();
   		return newState;
    }
     case 'UPDATE_STATUS': {
    	let lists = state.lists.slice();
	    let cards = lists[action.payload.listIndex].cards.slice();
	   	let selectedCard = Object.assign({},cards[action.payload.index]);
	    selectedCard.status = action.payload.value;
      cards[action.payload.index] = selectedCard;
	    lists[action.payload.listIndex].cards = cards;
	    let newState = Object.assign({}, state);
	    newState.lists = lists.slice();
	    return newState;
    }
     case 'TAG_USERS': {
    	let lists = state.lists.slice();
	    let cards = lists[action.payload.listIndex].cards.slice();
	   	let selectedCard = Object.assign({},cards[action.payload.index]);
	    selectedCard.users = action.payload.value.slice();
      cards[action.payload.index] = selectedCard;
	    lists[action.payload.listIndex].cards = cards;
	    let newState = Object.assign({}, state);
	    newState.lists = lists.slice();
	    return newState;
    }
    default:
      return state
  };
};
export default list;
