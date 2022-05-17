import {useState} from 'react'
import Head from "next/head"
import Menu from '../components/Menu'


function Contato() {

  const [DataForm, setDataForm] = useState ({
    name: '',
    email: '',
    subject: '',
    content: ''
  })

  const [response, setResponse] = useState({
    type: '',
    mensagem: ''
  })

  const onChangeInput = e => {
    setDataForm( {...DataForm, [e.target.name]: e.target.value})
  }

  const sendContact = async e => {
    
    if(DataForm.name == '' || DataForm.email == '' || DataForm.subject == '' || DataForm.content == ''){
      setResponse({
        type: 'error',
        mensagem: "ERRO: Preencha todos os dados!"
      })
    } else {
    
      e.preventDefault()

      try{
        const res = await fetch('http://localhost:8080/add-msg-contact', {
          method: 'POST',
          body: JSON.stringify(DataForm),
          headers: { 'Content-Type': 'application/json'}
        });

        const responseEnv = await res.json();

        if(responseEnv.erro) {
          setResponse({
            type: 'error',
            mensagem: responseEnv.mensagem
          });
        }else {
          setResponse({
          type: 'success',
            mensagem: responseEnv.mensagem
          });

          setDataForm({
            name: '',
            email: '',
            subject: '',
            content: ''
          });
        }
      } 
      
      catch(err){
        setResponse({
          type: 'error',
          mensagem: "ERRO: Tente mais tarde!"
        });
      }
    }
  }

  return (
      <div>
        <Head>
          <meta charset="UTF-8"/>
          <meta name="robots" content="index, follow" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
          <title>Contato</title>
        </Head>
        <Menu />
        <br /><br />
        <section className='contact'>
          <div className='max-width'>
            <h2 className='title'>Contato</h2>
            <div className='contact-content'>
              <div className='column left'>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, 
                  print, and publishing industries for previewing layouts and visual 
                  mockups.</p>
                  
                  <div className='icons'>
                    <div className='row'>
                      <i class="fas fa-user"></i>
                      <div className='info'>
                        <div className='head'>
                          Empresa
                        </div>
                        <div className='sub-title'>
                          Augusto
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <i class="fas fa-map-marker-alt"></i>
                      <div className='info'>
                        <div className='head'>
                          Endereço
                        </div>
                        <div className='sub-title'>
                          Olavo Bilac, 2014
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <i class="fas fa-envelope"></i>
                      <div className='info'>
                        <div className='head'>
                          E-mail
                        </div>
                        <div className='sub-title'>
                          augusto.caetano86@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              
              <div className='column right'>
                <div className='text'>
                  Formulário de contato
                </div>

                {response.type === 'error' ? <p className='alert-danger'>{response.mensagem}</p> : ""}
                {response.type === 'success' ? <p className='alert-success'>{response.mensagem}</p> : ""}


                <form onSubmit={sendContact}>
                  <div className='fields'>
                    <div className='field name'>
                      <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} value={DataForm.name}/>
                    </div>

                    <div className='field email'>
                      <input type="text" name="email" placeholder="Digite o seu melhor email" onChange={onChangeInput} value={DataForm.email}/>
                    </div>

                    <div className='field subject'>
                      <input type="text" name="subject" placeholder="Digite o assunto da mensagem" onChange={onChangeInput} value={DataForm.subject}/>
                    </div>

                    <div className='field content'>
                      <input type="text" name="content" placeholder="Digite o conteudo da mensagem" onChange={onChangeInput} value={DataForm.content}/>
                    </div>

                    <div className='button-area'>
                      <button type="Submit">Enviar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script src="custom.js"></script>
          </div>
        </section>
      </div>
    )
}
export default  Contato
