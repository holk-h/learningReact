import React from "react";
import styles from "./style.module.css"
import className from "classname"

export default function Button({ children, color, type = "primary" ,oncl1ck }){
    return<button className={className(styles.button,{
        [styles.red]: color === "red",
        [styles.black]: color === "black",
        [styles.secondary]: type === "secondary",
    })} onClick={oncl1ck}>{children}</button>;
}