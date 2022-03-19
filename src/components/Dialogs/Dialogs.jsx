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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Petya" id='1' />
                <DialogItem name="Yura" id='2' />
                <DialogItem name="Olya" id='3' />
                <DialogItem name="Andru" id='4' />
                <DialogItem name="Blade" id='5' />
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Where are you from?" />
                <Message message="How old are you?" />
            </div>
        </div>
    )
}

export default Dialogs;