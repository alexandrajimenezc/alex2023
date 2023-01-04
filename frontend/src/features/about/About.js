import React, { useState } from "react";
import style from "./about.module.css";
export const About = () => {
    const [showTech, setShowTech]=useState(false)
    const openTech=()=>{
        console.log('click')
        setShowTech(!showTech)
    }
  return (
    <div className={style.about__container}>
         <span className={style.text}>
          <code>
            <span className={style.span}>&lt;h1&gt; </span>
           ¡ Me gusta mucho la
            <span className={style.span}> programación!,</span> y 
            Javascript.
            <span className={style.span}> &lt;/h1&gt;</span>
          </code>
        </span>
      <p>
       
        Además de estar constantemente aprendiendo
        cosas nuevas.
      
        Mis primeros pasos en el desarrollo web fueron de forma autodidacta
      </p>

      <div>
        También hago uso frecuente de plataformas como:
        <ul>
          <li>Freecodecamp</li>
          <li>Google Activate</li>
          <li>Platzi</li>
          <li>Geekshubs</li>
        </ul>
      </div>

      <div>
        <span className={style.text__cool}>I love backend</span> , 
        con un front bonito. Esta página web, esta construida con diferentes
        tecnologias:
        <ul>
          <li onClick={ openTech} className={style.tech }> React <span className={ showTech ? style.showData: style.noData }>+3 años </span> </li>
          <li onClick={ openTech} className={style.tech }>RTK <span className={ showTech ? style.showData: style.noData }>+6 meses </span></li>
          <li onClick={ openTech} className={style.tech}>Docker  <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
          <li onClick={ openTech} className={style.tech}>Nestjs  <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
          <li onClick={ openTech} className={style.tech}>TypeORM <span className={ showTech ? style.showData: style.noData }>+3 años </span></li>
          <li onClick={ openTech} className={style.tech}>mysql <span className={ showTech ? style.showData: style.noData }>+3 años </span> </ li>
          <li onClick={ openTech} className={style.tech}>Swagger <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
        </ul>
        <div>
          {" "}
          Utilizo visual studio code como entorno de trabajo. Sin embargo he
          podido utilizar también phpStorm y tecnologias/framework como:
          <ul>
            <li onClick={ openTech} className={style.tech}>Angular  <span className={ showTech ? style.showData: style.noData }>+1 año </span></li>
            <li onClick={ openTech} className={style.tech}>PHP <span className={ showTech ? style.showData: style.noData }>+2 años </span> </li>
            <li onClick={ openTech} className={style.tech}>Vue <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
            <li onClick={ openTech} className={style.tech}>Vuex <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
            <li onClick={ openTech} className={style.tech}>Jest <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
            <li onClick={ openTech} className={style.tech}>Cypress <span className={ showTech ? style.showData: style.noData }>+2 años </span></li>
            <li onClick={ openTech} className={style.tech}>Travis CI <span className={ showTech ? style.showData: style.noData }>+1 año </span></li>
            <li onClick={ openTech} className={style.tech}>Rabbitmq <span className={ showTech ? style.showData: style.noData }>+1 año </span></li>
            <li onClick={ openTech} className={style.tech}>express <span className={ showTech ? style.showData: style.noData }>+3 años </span></li>
            <li onClick={ openTech} className={style.tech}>python<span className={ showTech ? style.showData: style.noData }>+1 año </span></li>
          </ul>
        </div>
        Si hablamos de idiomas, ingles conversacional; Por ahora, aprendo chino
        por mi cuenta en los tiempos libres. Me gusta el ánime , asi que debes
        en cuando practico Hiragana, ya luego aprenderé katakana
      </div>
      <p>
        {" "}
        Gracias por visitar mi sitio web. Puedes conectar conmigo a traves de mi
        perfil de{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexandra-jimenez-4b6459167/"
          className={style.text__cool}>
          Linkedin
        </a>{" "}
        y dejar tú feedback.
      </p>
    </div>
  );
};
