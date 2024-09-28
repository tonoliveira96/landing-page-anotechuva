import { ReactNode } from 'react';

export const Footer = ({ children }: { children?: ReactNode; }) => {
  return (
    <div className='border-t-2 border-slate-900 flex flex-col justify-center items-center gap-1 p-4'>
      <strong>{`Copyright © ${new Date().getFullYear()} AnoteChuva`}</strong>
      {children}
    </div>
  );
};