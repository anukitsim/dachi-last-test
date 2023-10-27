import '@styles/globals.css'
import Sidebar from '@components/Sidebar'
import Image from 'next/image'

export const metadata = {
  title: 'Dachi-Giorgi Garuchava',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#DBDBDBE2]'>
        <div className="flex md:flex-row sm:flex-col overflow-x-hidden">
          <div className="flex flex-col items-start sm:ml-5 sm:mt-5 md:mt-20 md:ml-24 z-0"  >
          <Sidebar />
          </div>
      
          <div className="md:w-9/12 grid grid-cols-6">
            <div className='col-start-6 col-span-1 row-start-1 sm:hidden md:block'>
            <Image
  src="/images/garbage3.webp"
  alt="garbage3"
  width={700}
  height={475}
  sizes="(min-width: 1200px) calc(13.06vw - 17px), 16.7vw"
 priority

/>
            </div>
            <div className='cols-start-1 col-span-5 row-start-1'>
            {children}
            </div>
          
             
            
          </div>
        </div>
      </body>
    </html>
  )
}
