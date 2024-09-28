import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AnoteChuva®️ - Instrução de exclusão de dados",
};

const DataDeletionInstruction = () => {
  return (
    <>
      <div className='max-w-2xl m-auto p-8'>
        <h2 className='text-2xl font-bold mb-4'>Instruções de exclusão de dados</h2>

        <div className='text-justify space-y-2'>
          <h3 className='text-xl font-bold mb-2'>Instrução de exclusão de dados do Facebook</h3>
          <p>
            AnoteChuva®️ é uma aplicação de login no Facebook e não guardamos os seus dados pessoais no nosso servidor.
            De acordo com a política do Facebook, devemos fornecer o URL do lembrete de exclusão de dados do usuário ou o URL da instrução de exclusão de dados.
          </p>
          <p>
            Se deseja apagar as suas actividades para a aplicação AnoteChuva®️, pode apagar as suas informações seguindo estes passos:
          </p>{' '}
          <p className='pl-8'>
            <ol className="list-decimal">
              <li>Vá para as configurações da sua conta do Facebook e privacidade. Clique em &quot;Configurações&quot;.</li>
              <li>Procure por &quot;Aplicativos e sites&quot; e você verá todos os aplicativos e sites que você vinculou ao seu Facebook.</li>
              <li>Procure e clique em &quot;AnoteChuva&quot; na barra de pesquisa.</li>
              <li>Role para baixo e clique em &quot;Delete&quot;.</li>
              <li>Parabéns, você removeu com sucesso as atividades da sua inscrição.</li>
            </ol>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataDeletionInstruction;