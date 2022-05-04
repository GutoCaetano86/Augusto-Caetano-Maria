import Head from "next/head"
import Menu from '../components/Menu'


function Home() {
  return (
      <div>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="robots" content="index, follow" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          <title>Sobre</title>
        </Head>
        <Menu />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="custom.js"></script>
      </div>
    )
}
export default  Home