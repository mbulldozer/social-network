import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    }
};

export default store;