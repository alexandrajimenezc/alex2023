import React from "react";
import style from "./home.module.css";
export const Home = () => {
  return (
    <div>
      <div className={style.text__container}>
        <span className={style.text}>
          <code>
            {" "}
            <span className={style.span}>&lt;h1&gt; </span>
            Hola, me llamo{" "}
            <span className={style.span}>¡Alexandra Jiménez!,</span> soy
            desarrolladora de software.
            <span className={style.span}> &lt;/h1&gt;</span>
          </code>
        </span>
      </div>
    </div>
  );
};
