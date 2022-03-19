import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/";
    return (
        <div className={classes.dialog}>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;