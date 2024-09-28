import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AnoteChuva®️ - Políticas de Privacidade",
  description: "A sua privacidade é importante para nós. Entenda como tratamos seus dados.",
};

const Privacy = () => {
  return (
    <>
      <div className='max-w-2xl m-auto p-8'>
        <h2 className='text-lg font-bold mb-2'>AnoteChuva®️ - Política Privacidade</h2>
        <div className='text-justify space-y-2'>
          <p>
            A sua privacidade é importante para nós. É política do Aplicativo
            AnoteChuva®️ respeitar a sua privacidade em relação a qualquer
            informação sua que possamos coletar no site AnoteChuva®️, e outros
            sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos por
            que estamos coletando e como será usado.{' '}
          </p>{' '}
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>{' '}
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>{' '}
          <p>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por suas
            respectivas políticas de privacidade .
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais,
            entendendo que talvez não possamos fornecer alguns dos serviços
            desejados.
          </p>{' '}
          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de Aviso de Privacidade e informações
            pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do
            usuário e informações pessoais, entre em contacto connosco.
          </p>
          <h3 className='text-md font-bold my-2'>Como coletamos os Dados</h3>
          <p>
            O cliente nos fornece as respectivas informações quando:
            <ul>
              <li>Acesso a localização exata ou aproximada.</li>
              <li>Acesso a galeria com concetimento do usuário.</li>
            </ul>
          </p>
          <h3 className='text-md font-bold my-2'>Como utilizamos os Dados do Cliente</h3>
          <p>
            Podemos usar os respectivos Dados Pessoais para:
            <ul>
              <li>Ter acesso a localização no mapa exibido no dispositivo.</li>
              <li>Para que o usário possa atualizar a imagem de perfil.</li>
            </ul>
          </p>
          <h3 className='text-md font-bold my-2'>Compromisso do Usuário</h3>{' '}
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o AnoteChuva®️ oferece no site e com caráter
            enunciativo, mas não limitativo:
          </p>{' '}
          <ul>
            {' '}
            <li>
              A- Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </li>{' '}
            <li>
              B- Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de
              apologia ao terrorismo ou contra os direitos humanos;
            </li>{' '}
            <li>
              C- Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do AnoteChuva®️, de seus fornecedores ou terceiros,
              para introduzir ou disseminar vírus informáticos ou quaisquer outros
              sistemas de hardware ou software que sejam capazes de causar danos
              anteriormente mencionados.
            </li>{' '}
          </ul>{' '}
          <p>
            Está política é efetiva a partir de <strong>Julho</strong>/
            <strong>2022</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;