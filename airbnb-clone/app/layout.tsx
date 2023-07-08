import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import {Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import { User } from './domain/entities/user'
import RentModal from './components/modals/RentModal'
import { TbMapPinCancel } from 'react-icons/tb'
import ShowMapButton from './components/ShowMapButton'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
subsets: ['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser(); 
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly > 
          <ToasterProvider />
          <RentModal />
        <RegisterModal />  
        <LoginModal />
        <Navbar currentUser={currentUser? {name: currentUser.name!, email: currentUser.email!, id: currentUser.id!, favoriteIds: currentUser.favoriteIds} : null}/>
        </ClientOnly>
  {/*  <div className='pb-20 pt-28'> {children}  </div> */}
    <div className='min-h-screen flex flex-col items-center justify-center'> 
    <ShowMapButton actionLabel='Show map'/>
     </div>
  
        </body>
    </html>
  )
}
