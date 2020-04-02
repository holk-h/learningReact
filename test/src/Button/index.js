import React from "react";
import styles from "./style.module.css"
import className from "classname"

export default function Button({ children, color, type = "primary" ,onClk }){
    return<button className={className(styles.button,{
        [styles.red]: color === "red",
        [styles.black]: color === "black",
        [styles.secondary]: type === "secondary",

    })} onClick={onClk}>{children}</button>;
}