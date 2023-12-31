import { Content } from 'antd/es/layout/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TfD - Parties',
  description: 'Generated by create next app',
}

export default function PartiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Content className='party-section'>
        {children}
      </Content>
    </>
  )
}
