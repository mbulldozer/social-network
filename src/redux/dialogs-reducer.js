const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Petya'},
        {id: 2, name: 'Yura'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Andru'},
        {id: 5, name: 'Blade'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Where are you from?'},
        {id: 1, message: 'How old are you?'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 2,
                message: state.newMessageText,
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;