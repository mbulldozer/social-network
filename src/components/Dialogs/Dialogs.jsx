import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";
import * as React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messagesElements = props.state.messages.map((message) => {
        return <Message message={message.message}/>
    });

    let newMessageElement = React.createRef();

    let onNewMessageChange = (e) => {
        props.dispatch(updateNewMessageTextActionCreator(e.target.value));
    };

    let onNewMessageSend = () => {
        props.dispatch(sendNewMessageActionCreator());
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={props.state.newMessageText}
                            onChange={onNewMessageChange}
                            ref={newMessageElement}
                            placeholder="Enter your message">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onNewMessageSend}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;