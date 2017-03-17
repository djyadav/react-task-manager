export const addList = (text) => ({
    type: 'ADD_LIST',
    title:''
});

export const updateTitle = (index,title) => ({
    type: 'UPDATE_TITLE',
    index,
    title
});

export const addCard = (index) => ({
    type: 'ADD_CARD',
    index,
});

export const deleteList = (index) => ({
    type: 'DELETE_LIST',
    index,
});

export const removeCard = (index,listIndex) => ({
    type: 'REMOVE_CARD',
    index,
    listIndex
});

export const moveCard = (payload) => ({
    type: 'MOVE_CARD',
    payload
});

export const updateCardDescription = (payload) => ({
    type: 'UPDATE_CARD_DESCRIPTION',
    payload
});

export const updateStatus = (payload) => ({
    type: 'UPDATE_STATUS',
    payload
});

export const tagUsers = (payload) => ({
    type: 'TAG_USERS',
    payload
});
