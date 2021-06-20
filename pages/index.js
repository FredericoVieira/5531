import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
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
            className={styles["video-content"]}
          >
            <source src="/video-intro.mp4" type="video/mp4" />
          </video>
        </section>

        <section className={styles.presentation}>
          <img src="/presentation.png" alt="5531 apresentação" />
          <div className={styles.content}>
            <h1 className={styles.title}>Cachaça brasileira</h1>
            <h2 className={styles["short-description"]}>
              De um jeito que você nunca viu
            </h2>
            <p className={styles.description}>
              Bebiba mista de cachaça saborizada com os melhores ingredientes.
            </p>
            <p className={styles.description}>
              Ideal para dividir com pessoas ou suas personalidades. Sirva
              gelada.
            </p>
          </div>
        </section>

        <section className={styles["shop-now"]}>
          <h3 className={styles.title}>Para uma experiência única</h3>
          <a
            href="https://api.whatsapp.com/send?phone=5531984233332&text=Quero%20um%20experi%C3%AAncia%20%C3%BAnica!"
            target="blank"
          >
            <div className={styles.button}>Compre agora</div>
          </a>
        </section>

        <section className={styles.product}>
          <img src="/p1.png" alt="Cachaça honey" />
          {/* <div className={styles.content}>
            <h1 className={styles.title}>Cachaça brasileira</h1>
            <h1 className={styles.description}>
              De um jeito que você nunca viu
            </h1>
          </div> */}
        </section>

        <section className={styles.product}>
          <img src="/p2.png" alt="Cachaça" />
          {/* <div className={styles.content}>
            <h1 className={styles.title}>Cachaça brasileira</h1>
            <h1 className={styles.description}>
              De um jeito que você nunca viu
            </h1>
          </div> */}
        </section>

        <section className={styles.product}>
          <img src="/p3.png" alt="Cachaça pink-lemonade" />
          {/* <div className={styles.content}>
            <h1 className={styles.title}>Cachaça brasileira</h1>
            <h1 className={styles.description}>
              De um jeito que você nunca viu
            </h1>
          </div> */}
        </section>

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
