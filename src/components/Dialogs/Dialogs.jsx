import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messagesElements = props.dialogsPage.messages.map((message) => {
        return <Message message={message.message}/>
    });

    let onNewMessageChange = (e) => {
       props.changeNewMessage(e.target.value);
    };

    let onNewMessageSend = () => {
        props.sendNewMessage();
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
                            value={props.dialogsPage.newMessageText}
                            onChange={onNewMessageChange}
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