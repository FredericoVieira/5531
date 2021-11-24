import { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 640) setIsDesktop(false);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cachaça 5531</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Cachaça 5531, experiência única em cachaça"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </Head>

      <main className={styles.main}>
        <section className={styles.video}>
          <video
            playsInline
            webkit-playsInline
            autoPlay
            muted
            loop
            className={styles["video__content"]}
          >
            <source src="/video-intro.mp4" type="video/mp4" />
          </video>
        </section>

        <section className={styles.presentation}>
          <img
            src="/presentation.png"
            alt="5531 apresentação"
            className={styles["presentation__image"]}
          />
          <div id="trigger" className={styles["presentation__content"]}>
            <h1 className={styles["presentation__content__title"]}>
              Cachaça brasileira
            </h1>
            <Controller>
              <Scene classToggle="fadein" triggerElement="#trigger">
                <h2
                  className={styles["presentation__content__short-description"]}
                >
                  De um jeito que você nunca viu
                </h2>
              </Scene>
            </Controller>
            <p className={styles["presentation__content__description"]}>
              Bebiba mista de cachaça saborizada com os melhores ingredientes.
            </p>
            <p className={styles["presentation__content__description"]}>
              Ideal para dividir com pessoas ou suas personalidades. <br />
              Sirva gelada.
            </p>
          </div>
        </section>

        <section className={styles["shop-now"]}>
          <h3 className={styles["shop-now__title"]}>
            Para uma experiência única
          </h3>
          <a
            href="https://api.whatsapp.com/send?phone=5531984233332&text=Quero%20um%20experi%C3%AAncia%20%C3%BAnica!"
            target="blank"
            className={styles["shop-now__link"]}
          >
            <div className={styles["shop-now__link__button"]}>Compre agora</div>
          </a>
        </section>

        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <div>
            <Scene pin enabled={isDesktop}>
              <section className={styles.product}>
                <img
                  src="/cachaca-honey.png"
                  alt="Cachaça honey"
                  className={styles["product__image"]}
                />
              </section>
            </Scene>

            <Scene pin enabled={isDesktop}>
              <section className={styles.product}>
                <img
                  src="/cachaca.png"
                  alt="Cachaça"
                  className={styles["product__image"]}
                />
              </section>
            </Scene>

            <Scene pin enabled={isDesktop}>
              <section className={styles.product}>
                <img
                  src="/cachaca-pink-lemonade.png"
                  alt="Cachaça pink-lemonade"
                  className={styles["product__image"]}
                />
              </section>
            </Scene>
          </div>
        </Controller>
        <footer className={styles.footer}>5531&reg;</footer>
      </main>
    </div>
  );
}
