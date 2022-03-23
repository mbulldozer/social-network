const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first message', likesCount: 4},
                {id: 2, message: 'It\'s my second message', likesCount: 7},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('Stage changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 12,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let message = {
                id: 2,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(message);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendNewMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;