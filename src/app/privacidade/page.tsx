import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Saiba como o AnoteChuva coleta, utiliza, protege e trata dados pessoais em conformidade com a LGPD.',
};

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-3xl px-gutter pb-16 pt-28'>
        <h1 className='mb-3 text-3xl font-bold text-primary'>Política de Privacidade</h1>
        <p className='mb-8 text-on-surface-variant'>
          Esta política descreve como o AnoteChuva trata dados pessoais no site e na aplicação. Ao usar nossos serviços,
          você concorda com as práticas descritas abaixo.
        </p>

        <article className='space-y-8 text-on-surface-variant'>
          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>1. Dados que coletamos</h2>
            <p className='mb-2'>Podemos coletar dados informados diretamente por você e dados técnicos de uso da plataforma.</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Dados de cadastro, quando aplicável (ex.: nome, e-mail e telefone).</li>
              <li>Dados de uso do sistema para registrar e visualizar medições de chuva.</li>
              <li>Dados de dispositivo e navegação para segurança, desempenho e melhoria contínua.</li>
              <li>Localização aproximada ou precisa e acesso à galeria, somente quando você autoriza no dispositivo.</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>2. Como usamos os dados</h2>
            <p className='mb-2'>Os dados são utilizados para fornecer e melhorar os serviços do AnoteChuva.</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Permitir cadastro, autenticação e uso das funcionalidades da plataforma.</li>
              <li>Exibir registros, gráficos e histórico de precipitação.</li>
              <li>Viabilizar recursos opcionais, como localização no mapa e atualização de imagem de perfil.</li>
              <li>Prevenir fraudes, corrigir falhas e manter a segurança do ambiente.</li>
              <li>Gerar métricas agregadas de uso para evolução do produto.</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>3. Base legal (LGPD)</h2>
            <p>
              O tratamento de dados é realizado com fundamento nas bases legais aplicáveis da Lei Geral de Proteção de Dados
              (Lei n. 13.709/2018), incluindo execução de contrato, cumprimento de obrigação legal, legítimo interesse e
              consentimento, quando necessário.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>4. Compartilhamento de dados</h2>
            <p className='mb-2'>Não comercializamos dados pessoais. O compartilhamento pode ocorrer apenas quando necessário:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Com fornecedores que operam infraestrutura e serviços essenciais ao funcionamento da plataforma.</li>
              <li>Para cumprimento de obrigação legal, regulatória ou ordem de autoridade competente.</li>
              <li>Para proteção de direitos do AnoteChuva, usuários e terceiros, nos limites da lei.</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>5. Retenção e descarte</h2>
            <p>
              Mantemos os dados apenas pelo tempo necessário para cumprir as finalidades desta política, obrigações legais e
              auditorias aplicáveis. Após esse período, os dados são eliminados ou anonimizados de forma segura.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>6. Segurança da informação</h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda,
              alteração, divulgação ou destruição indevida. Nenhum método é totalmente infalível, mas buscamos padrões
              compatíveis com boas práticas do setor.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>7. Direitos do titular</h2>
            <p className='mb-2'>Nos termos da LGPD, você pode solicitar, quando aplicável:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Confirmação da existência de tratamento e acesso aos dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Portabilidade, revogação do consentimento e informações sobre compartilhamento.</li>
            </ul>
            <p className='mt-2'>
              Para exercer seus direitos, utilize os canais oficiais de atendimento informados no aplicativo ou no site.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>8. Links externos</h2>
            <p>
              Nosso site pode conter links para páginas de terceiros. Não somos responsáveis por conteúdo, políticas e práticas
              de privacidade desses ambientes externos.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>9. Compromisso de uso adequado</h2>
            <p className='mb-2'>Ao utilizar a plataforma, o usuário se compromete a:</p>
            <ul className='list-disc space-y-1 pl-6'>
              <li>Não realizar atividades ilícitas ou contrárias à boa-fé e à ordem pública.</li>
              <li>Não disseminar conteúdo discriminatório, fraudulento, violento, ilegal ou que viole direitos de terceiros.</li>
              <li>Não tentar comprometer a segurança dos sistemas por meio de ataques, engenharia reversa ou malware.</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>10. Atualizações desta política</h2>
            <p>
              Esta política pode ser revisada periodicamente para refletir mudanças legais, técnicas ou operacionais. A versão
              mais recente estará sempre disponível nesta página.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-xl font-semibold text-on-surface'>11. Vigência</h2>
            <p>
              Esta versão entra em vigor em <strong>23 de maio de 2026</strong>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;