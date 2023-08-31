//import "./comp1.scss" // 全局引入

//模塊化引入 用styles來做對象接收
import styles from "./comp1.module.scss"
function Comp(){
return(
    <div className={styles.box}>
        <p>this is Comp1裡面的內容</p>
    </div>
)

}
export default Comp