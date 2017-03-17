export const loadState = (argument)=> {
	var lists=localStorage.getItem('lists');
	if(lists == null){
		lists=[];
	}else{
		lists=JSON.parse(lists);
	}
	return {
		lists
	}
}
export const saveState = (state)=>{
	if(state && state.lists){
		localStorage.setItem('lists',JSON.stringify(state.lists));
	};
};
