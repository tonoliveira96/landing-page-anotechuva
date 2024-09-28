"use client";
import { Card } from '@/components/Card';
import { RainCloud } from '@/components/RainCloud';
import Link from 'next/link';

import { sendGAEvent } from '@next/third-parties/google';
import Image1 from "../assets/banner01.png";
import Image2 from "../assets/banner02.png";
import Image3 from "../assets/banner03.png";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <nav className='w-full border-b-2 border-slate-900'>
        <div className='max-w-[1366px] m-auto flex justify-between items-center py-4 px-8 '>
          <h1 className='font-bold text-3xl'>AnoteChuva</h1>
          <Link
            href="https://app.anotechuva.com"
            id="login"
            onClick={() => { sendGAEvent('event', 'click_access'); }}
            className="
            text-white 
            bg-blue-700 
            hover:bg-blue-800 
            focus:outline-none 
            focus:ring-4 
            focus:ring-blue-300 
            font-medium 
            rounded-full 
            px-5 py-2.5 
            text-center 
            me-2 mb-2 
          "
          >
            Acessar
          </Link>
        </div>
      </nav>

      <section className='relative overflow-hidden h-[70vh] flex flex-col items-center justify-center p-8 gap-2'>
        <div className='abosolute max-w-screen-md text-center'>
          <h2 className='text-4xl font-bold md:text-5xl'>
            Aplicação gratuita para registro diário de chuvas
          </h2>
          <p className='text-slate-200'>
            Usando um pluviômetro o usuário diariamente realiza as medições
            e cadastrar as informações alimentando uma base de dados
            unificada.
          </p>
        </div>

        <div className='flex flex-col justify-around w-full h-full opacity-25'>
          <RainCloud animationClass='animate-leftToRigth' />
          <RainCloud animationClass='animate-rightToLeft' />
        </div>
      </section>

      <section className='flex flex-wrap gap-4 justify-center py-4 px-8'>
        <Card
          title='Conectividade'
          description='Acesse seu dados de chuvas de qualquer lugar e a qualquer momento, no
            celular, tablet ou computador. Basta ter acesso a internet.'
          imagePath={Image1}
          imageDescription='Desenho de um homem com dispositivos eletrônicos'
        />
        <Card
          title='Gráficos'
          description='Acompanhe gráficos com indicadores das chuvas que você cadastrou. Visualize as chuvas registradas por dia, mês ou ano'
          imagePath={Image2}
          imageDescription='Duas pessoas apresentando um relatório gráfico'
        />
        <Card
          title='Importação'
          description='Realize a importação em massa para cadastrar ou atualizar registros de chuvas, utilizando uma planilha.'
          imagePath={Image3}
          imageDescription='Ilustração de um homem colocando arquivos em uma nuvem'
        />
      </section>
      <div className='border-t-2 border-slate-900 flex flex-col justify-center items-center gap-1 p-4'>
        <strong>{`Copyright © ${new Date().getFullYear()} AnoteChuva`}</strong>
        <div>
          <Link className='font-medium' href="/privacy">
            Políticas de privacidade
          </Link>
        </div>
        <a href="https://storyset.com/online" className='text-sm' target='_blank'>Online illustrations by Storyset</a>
      </div>
    </div>
  );
}
