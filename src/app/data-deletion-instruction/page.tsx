import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Instrução de exclusão de dados",
  description: "Saiba como solicitar a exclusão dos seus dados vinculados ao AnoteChuva no Facebook.",
};

const DataDeletionInstruction = () => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-2xl px-gutter pb-12 pt-28'>
        <h1 className='mb-4 text-2xl font-bold text-primary'>Instruções de exclusão de dados</h1>

        <div className='space-y-3 text-justify text-on-surface-variant'>
          <h2 className='mb-2 text-xl font-bold text-on-surface'>Instrução de exclusão de dados do Facebook</h2>
          <p>
            AnoteChuva®️ é uma aplicação de login no Facebook e não guardamos os seus dados pessoais no nosso servidor.
            De acordo com a política do Facebook, devemos fornecer o URL do lembrete de exclusão de dados do usuário ou o URL da instrução de exclusão de dados.
          </p>
          <p>
            Se deseja apagar as suas atividades para a aplicação AnoteChuva®️, pode apagar as suas informações seguindo estes passos:
          </p>{' '}
          <div className='pl-8'>
            <ol className='list-decimal'>
              <li>Vá para as configurações da sua conta do Facebook e privacidade. Clique em &quot;Configurações&quot;.</li>
              <li>Procure por &quot;Aplicativos e sites&quot; e você verá todos os aplicativos e sites que você vinculou ao seu Facebook.</li>
              <li>Procure e clique em &quot;AnoteChuva&quot; na barra de pesquisa.</li>
              <li>Role para baixo e clique em &quot;Delete&quot;.</li>
              <li>Parabéns, você removeu com sucesso as atividades da sua inscrição.</li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DataDeletionInstruction;