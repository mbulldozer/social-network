import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/";
    return (
        <div className={classes.dialog}>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Petya'},
        {id: 2, name: 'Yura'},
        {id: 3, name: 'Olya'},
        {id: 4, name: 'Andru'},
        {id: 5, name: 'Blade'}
    ];

    let dialogsElements = dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Where are you from?'},
        {id: 1, message: 'How old are you?'},
    ];

    let messagesElements = messages.map((message) => {
        return <Message message={message.message}/>
    });

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;