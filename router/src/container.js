import classNames from "classnames";
import styles from "./css/container.module.css";

function Container({ className, children }) {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}

export default Container;
