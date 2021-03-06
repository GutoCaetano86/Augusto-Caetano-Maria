import axios from "axios";
import Head from "next/head"
import Menu from '../components/Menu'


export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080`);
    const data = await response.json();

    return { props: { data } };
}

export default function Home( {data}) {
  return (
      <div>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="robots" content="index, follow" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          <title>Augusto Caetano Maria</title>
        </Head>
        <Menu />

        <section className="top">
            <div className="max-width">
                <div className="top-content">
                    <div className="text-1">
                        {data.datahome.text_one}
                    </div>
                    <div className="text-2">
                        {data.datahome.text_two}
                    </div>
                    <div className="text-3">
                        {data.datahome.text_three}
                    </div>
                    <a href={data.datahome.btn_link}>{data.datahome.btn_title}</a>
                </div>
            </div>
        </section>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="custom.js"></script>
      </div>
    )
}
