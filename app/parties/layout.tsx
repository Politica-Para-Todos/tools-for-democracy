import { Layout } from 'antd';
import LayoutFooter from '../components/footer/BaseFooter';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function PartiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout.Content className='party-section'>
        {children}
      </Layout.Content>
      <LayoutFooter />
    </>
  )
}
