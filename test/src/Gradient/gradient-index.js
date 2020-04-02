import React, {useState} from "react"
import Button from "../Button";
import styles from "./styles.module.css"

export default function Gradient() {

    const [color1, setColor1] = useState("#00F260");
    const [color2, setColor2] = useState("#0575E6");

    function handleInputChange($) {
        const { name, value } = $.target;
        if (name === "color1"){
            setColor1(value);
        }
        if (name === "color2"){
            setColor2(value);
        }
    }

    function handleClick($) {
        setColor1('#00F260');
        setColor2('#0575E6');
    }

    return(
        <div className={styles.container} style={{background:`linear-gradient(75deg,${color1}, ${color2}`}}>
            <div className={styles.inputGroup}>
                <label>请选择第一个颜色</label>
                <input
                    type="color"
                    value={color1}
                    name="color1"
                    className={styles.inputColor}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputGroup}>
                <label>请选择第二个颜色</label>
                <input
                    type="color"
                    value={color2}
                    name="color2"
                    className={styles.inputColor}
                    onChange={handleInputChange}
                />
            </div>
            <button className={styles.button1} onClick={handleClick}>重置为默认</button>
            <Button>默认按钮</Button>
            <Button color="red">红色按钮</Button>
            <Button color="black">黑色按钮</Button>
            <Button type="secondary">默认按钮</Button>
            <Button color="red" type="secondary">红色按钮</Button>
            <Button color="black" type="secondary">黑色按钮</Button>
        </div>
    )
}