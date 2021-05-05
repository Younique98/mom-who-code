import { useRouther } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Tabs } from "../components/Tabs";

export default function Home({ query }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moms Who Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Tabs initialTab={query}>
          <div label="Home">
            <h2>Home</h2>
            <p>
              proident sit elit ad cupidatat nostrud occaecat aliqua. Proident
              Laborum veniam sit aliqua nisi non esse quis laborum. Qui
              cupidatat minim eu nulla pariatur fugiat labore duis ad minim eu
              cillum aliquip id reprehenderit. Exercitation in excepteur irure
              aliqua eiusmod mollit amet velit qui ex laboris. Eiusmod esse
              excepteur eiusmod ex non. Id ut laborum deserunt sint tempor culpa
              do mollit laboris labore ea. Consequat qui sit nostrud dolore.
              Aute laborum consequat cupidatat exercitation deserunt. Magna id
              ad irure adipisicing fugiat ea incididunt ad nisi occaecat amet.
              Dolore non enim ut exercitation velit anim aute culpa irure dolor
              pariatur sunt pariatur. Occaecat nisi non sunt cupidatat. Ipsum ea
              dolore deserunt irure adipisicing exercitation labore culpa minim
              elit id sit. Adipisicing laboris pariatur do aute commodo quis
              fugiat adipisicing proident commodo do qui tempor fugiat. Deserunt
              amet est eu mollit et ex velit cillum et duis occaecat
              adipisicing.
            </p>
          </div>
          <div label="Start Here">
            <h2>Start Here</h2>
            <p>
              Dolor aute reprehenderit et do et aute velit id voluptate
              consequat. Nulla labore aliqua non eiusmod. In nostrud sit dolor
              commodo Lorem velit nulla duis. Esse eiusmod id dolor culpa dolore
              eiusmod irure minim tempor ex. Ex magna amet consectetur magna.
              Dolor velit velit enim aliquip eiusmod fugiat. Dolor sit dolor eu
              velit aliquip commodo non. Dolor adipisicing ex sit aliquip ut.
              Est dolore labore aliquip consectetur adipisicing. Magna pariatur
              adipisicing veniam consequat in minim ut. In commodo non laboris
              voluptate mollit ad. Consectetur et tempor commodo deserunt sunt
              adipisicing. Consectetur minim non culpa excepteur occaecat. Irure
              laborum anim laboris occaecat tempor elit veniam cupidatat
              excepteur sunt amet et magna et. Qui dolore commodo aliqua labore
              consequat Lorem qui incididunt eu consequat consectetur aute esse
              laboris. Dolore laborum do veniam exercitation. Ullamco laborum
              reprehenderit quis laborum pariatur fugiat adipisicing consectetur
              officia aliquip anim eiusmod ut. Officia do occaecat tempor labore
              labore laboris eiusmod aliqua aliqua et elit incididunt.
              Reprehenderit commodo sint consectetur laboris. Cupidatat et
              reprehenderit eiusmod nostrud ut sit. Ut proident non occaecat
              cillum aute non nostrud cillum. Laborum veniam sit aliqua nisi non
              esse quis laborum. Qui cupidatat proident sit elit ad cupidatat
              nostrud occaecat aliqua. Proident minim eu nulla pariatur fugiat
              labore duis ad minim eu cillum aliquip id reprehenderit.
              Exercitation in excepteur irure aliqua eiusmod mollit amet velit
              qui ex laboris. Eiusmod esse excepteur eiusmod ex non. Id ut
              laborum deserunt sint tempor culpa do mollit laboris labore ea.
              Consequat qui sit nostrud dolore. Aute laborum consequat cupidatat
              exercitation deserunt. Magna id ad irure adipisicing fugiat ea
              incididunt ad nisi occaecat amet. Dolore non enim ut exercitation
              velit anim aute culpa irure dolor pariatur sunt pariatur. Occaecat
              nisi non sunt cupidatat. Ipsum ea dolore deserunt irure
              adipisicing exercitation labore culpa minim elit id sit.
              Adipisicing laboris pariatur do aute commodo quis fugiat
              adipisicing proident commodo do qui tempor fugiat. Deserunt amet
              est eu mollit et ex velit cillum et duis occaecat adipisicing.
            </p>
          </div>
          <div label="Stage 1">
            <h2>Stage 1</h2>
            <p>
              Consectetur et tempor commodo deserunt sunt adipisicing.
              Consectetur Dolor aute reprehenderit et do et aute velit id
              voluptate consequat. Nulla labore aliqua non eiusmod. In nostrud
              sit dolor commodo Lorem velit nulla duis. Esse eiusmod id dolor
              culpa dolore eiusmod irure minim tempor ex. Ex magna amet
              consectetur magna. Dolor velit velit enim aliquip eiusmod fugiat.
              Dolor sit dolor eu velit aliquip commodo non. Dolor adipisicing ex
              sit aliquip ut. Est dolore labore aliquip consectetur adipisicing.
              Magna pariatur adipisicing veniam consequat in minim ut. In
              commodo non laboris voluptate mollit ad. minim non culpa excepteur
              occaecat. Irure laborum anim laboris occaecat tempor elit veniam
              cupidatat excepteur sunt amet et magna et. Qui dolore commodo
              aliqua labore consequat Lorem qui incididunt eu consequat
              consectetur aute esse laboris. Dolore laborum do veniam
              exercitation. Ullamco laborum reprehenderit quis laborum pariatur
              fugiat adipisicing consectetur officia aliquip anim eiusmod ut.
              Officia do occaecat tempor labore labore laboris eiusmod aliqua
              aliqua et elit incididunt. Reprehenderit commodo sint consectetur
              laboris. Cupidatat et reprehenderit eiusmod nostrud ut sit. Ut
              proident non occaecat cillum aute non nostrud cillum. Laborum
              veniam sit aliqua nisi non esse quis laborum. Qui cupidatat
              proident sit elit ad cupidatat nostrud occaecat aliqua. Proident
              minim eu nulla pariatur fugiat labore duis ad minim eu cillum
              aliquip id reprehenderit. Exercitation in excepteur irure aliqua
              eiusmod mollit amet velit qui ex laboris. Eiusmod esse excepteur
              eiusmod ex non. Id ut laborum deserunt sint tempor culpa do mollit
              laboris labore ea. Consequat qui sit nostrud dolore. Aute laborum
              consequat cupidatat exercitation deserunt. Magna id ad irure
              adipisicing fugiat ea incididunt ad nisi occaecat amet. Dolore non
              enim ut exercitation velit anim aute culpa irure dolor pariatur
              sunt pariatur. Occaecat nisi non sunt cupidatat. Ipsum ea dolore
              deserunt irure adipisicing exercitation labore culpa minim elit id
              sit. Adipisicing laboris pariatur do aute commodo quis fugiat
              adipisicing proident commodo do qui tempor fugiat. Deserunt amet
              est eu mollit et ex velit cillum et duis occaecat
              adipisicing.Laborum veniam sit aliqua nisi non esse quis laborum.
              Qui cupidatat proident sit elit ad cupidatat nostrud occaecat
              aliqua. Proident minim eu nulla pariatur fugiat labore duis ad
              minim eu cillum aliquip id reprehenderit. Exercitation in
              excepteur irure aliqua eiusmod mollit amet velit qui ex laboris.
              Eiusmod esse excepteur eiusmod ex non. Id ut laborum deserunt sint
              tempor culpa do mollit laboris labore ea. Consequat qui sit
              nostrud dolore. Aute laborum consequat cupidatat exercitation
              deserunt. Magna id ad irure adipisicing fugiat ea incididunt ad
              nisi occaecat amet. Dolore non enim ut exercitation velit anim
              aute culpa irure dolor pariatur sunt pariatur. Occaecat nisi non
              sunt cupidatat. Ipsum ea dolore deserunt irure adipisicing
              exercitation labore culpa minim elit id sit. Adipisicing laboris
              pariatur do aute commodo quis fugiat adipisicing proident commodo
              do qui tempor fugiat. Deserunt amet est eu mollit et ex velit
              cillum et duis occaecat adipisicing.
            </p>
          </div>
          <div label="Stage 2">
            <h2>Stage 2</h2>
            <p>
              sit aliqua nisi non esse quis laborum. Qui cupidatat proident sit
              Dolor aute reprehenderit et do et aute velit id voluptate
              consequat. Nulla labore aliqua non eiusmod. In nostrud sit dolor
              commodo Lorem velit nulla duis. Esse eiusmod id dolor culpa dolore
              eiusmod irure minim tempor ex. Ex magna amet consectetur magna.
              Dolor velit velit enim aliquip eiusmod fugiat. Dolor sit dolor eu
              velit aliquip commodo non. Dolor adipisicing ex sit aliquip ut.
              Est dolore labore aliquip consectetur adipisicing. Magna pariatur
              adipisicing veniam consequat in minim ut. In commodo non laboris
              voluptate mollit ad. Consectetur et tempor commodo deserunt sunt
              adipisicing. Consectetur minim non culpa excepteur occaecat. Irure
              laborum anim laboris occaecat tempor elit veniam cupidatat
              excepteur sunt amet et magna et. Qui dolore commodo aliqua labore
              consequat Lorem qui incididunt eu consequat consectetur aute esse
              laboris. Dolore laborum do veniam exercitation. Ullamco laborum
              reprehenderit quis laborum pariatur fugiat adipisicing consectetur
              officia aliquip anim eiusmod ut. Officia do occaecat tempor labore
              labore laboris eiusmod aliqua aliqua et elit incididunt.
              Reprehenderit commodo sint consectetur laboris. Cupidatat et
              reprehenderit eiusmod nostrud ut sit. Ut proident non occaecat
              cillum aute non nostrud cillum. Laborum veniam elit ad cupidatat
              nostrud occaecat aliqua. Proident minim eu nulla pariatur fugiat
              labore duis ad minim eu cillum aliquip id reprehenderit.
              Exercitation in excepteur irure aliqua eiusmod mollit amet velit
              qui ex laboris. Eiusmod esse excepteur eiusmod ex non. Id ut
              laborum deserunt sint tempor culpa do mollit laboris labore ea.
              Consequat qui sit nostrud dolore. Aute laborum consequat cupidatat
              exercitation deserunt. Magna id ad irure adipisicing fugiat ea
              incididunt ad nisi occaecat amet. Dolore non enim ut exercitation
              velit anim aute culpa irure dolor pariatur sunt pariatur. Occaecat
              nisi non sunt cupidatat. Ipsum ea dolore deserunt irure
              adipisicing exercitation labore culpa minim elit id sit.
              Adipisicing laboris pariatur do aute commodo quis fugiat
              adipisicing proident commodo do qui tempor fugiat. Deserunt amet
              est eu mollit et ex velit cillum et duis occaecat
              adipisicing.Laborum veniam sit aliqua nisi non esse quis laborum.
              Qui cupidatat proident sit elit ad cupidatat nostrud occaecat
              aliqua. Proident minim eu nulla pariatur fugiat labore duis ad
              minim eu cillum aliquip id reprehenderit. Exercitation in
              excepteur irure aliqua eiusmod mollit amet velit qui ex laboris.
              Eiusmod esse excepteur eiusmod ex non. Id ut laborum deserunt sint
              tempor culpa do mollit laboris labore ea. Consequat qui sit
              nostrud dolore. Aute laborum consequat cupidatat exercitation
              deserunt. Magna id ad irure adipisicing fugiat ea incididunt ad
              nisi occaecat amet. Dolore non enim ut exercitation velit anim
              aute culpa irure dolor pariatur sunt pariatur. Occaecat nisi non
              sunt cupidatat. Ipsum ea dolore deserunt irure adipisicing
              exercitation labore culpa minim elit id sit. Adipisicing laboris
              pariatur do aute commodo quis fugiat adipisicing proident commodo
              do qui tempor fugiat. Deserunt amet est eu mollit et ex velit
              cillum et duis occaecat adipisicing.
            </p>
          </div>
        </Tabs>
      </main>

      <footer className={styles.footer}>
        <p>Created By: Erica Thompson</p>
      </footer>
    </div>
  );
}

Home.getInitialProps = ({query}) => {
  return {query}
}