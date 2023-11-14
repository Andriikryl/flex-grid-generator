import Image from "next/image";
import React from "react";
import CatImage from "public/face/Nomads Cat.png";
import style from "./style.module.css";
export default function About() {
  return (
    <div className={style.about__box}>
      <div className={style.image__box}>
        <Image src={CatImage} width={358} height={226} alt="cat" />
      </div>
      <div className={style.info__block}>
        <p className={style.about__description}>
          Hi everyone! My name is Andrii and this is my little guide / progect
          about how css flex and css grid works.
        </p>
        <p className={style.info__description}>
          I am a highly motivated junior front-end developer and know HTML, CSS,
          and JavaScript. Now, I am learning React and Typescript . I can work
          with Git and familiar with Webpack. My strengths are high motivation,
          critical and analytical thinking, responsibility and hard-working. I
          want to develop my skills further in a team of like-minded people, who
          are keen on development just like me.
        </p>
      </div>
    </div>
  );
}
