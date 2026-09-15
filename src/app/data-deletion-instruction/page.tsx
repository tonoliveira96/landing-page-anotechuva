import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Instrução de exclusão de dados",
  description: "Saiba como excluir permanentemente sua conta e seus dados no AnoteChuva.",
};

const DataDeletionInstruction = () => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-2xl px-gutter pb-12 pt-28'>
        <h1 className='mb-4 text-2xl font-bold text-primary'>Instruções de exclusão de dados</h1>

        <div className='space-y-3 text-justify text-on-surface-variant'>
          <h2 className='mb-2 text-xl font-bold text-on-surface'>Como excluir sua conta e seus dados</h2>
          <p>
            O AnoteChuva®️ guarda apenas os dados que você mesmo registra: seu e-mail de cadastro, as localizações que você
            adiciona e as medições de chuva que você anota. Você pode excluir permanentemente sua conta e todos esses dados
            a qualquer momento, diretamente pelo aplicativo.
          </p>
          <p>
            Para isso:
          </p>{' '}
          <div className='pl-8'>
            <ol className='list-decimal'>
              <li>Acesse sua conta em app.anotechuva.com.</li>
              <li>Vá até as configurações da sua conta.</li>
              <li>Selecione a opção de excluir conta e confirme a exclusão.</li>
              <li>Seus dados de perfil, localizações e registros de chuva são removidos permanentemente do nosso servidor.</li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DataDeletionInstruction;