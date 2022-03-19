let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'It\'s my first message', likesCount: 4},
            {id: 2, message: 'It\'s my second message', likesCount: 7},
        ]
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
    },
};

export default state;