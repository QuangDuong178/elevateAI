import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}
export const LayoutHome = (props: Props) => {
  const { children } = props;
  return <div className='h-screen bg-bg-grey-184'>
    {children}
  </div>;
};