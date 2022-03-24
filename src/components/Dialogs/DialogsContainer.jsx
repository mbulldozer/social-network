import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import * as React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let changeNewMessage = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    };

    let sendNewMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    };

    return (
        <div>
            <Dialogs
                changeNewMessage={changeNewMessage}
                sendNewMessage={sendNewMessage}
                dialogsPage={state.dialogsPage}
            />
        </div>
    )
}

export default DialogsContainer;