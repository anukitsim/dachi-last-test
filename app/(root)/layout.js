import '@styles/globals.css'

import dynamic from 'next/dynamic'

export const metadata = {
  title: 'Dachi-Giorgi Garuchava',
}

const DynamicSidebar = dynamic(() => import('@components/Sidebar'))

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#DBDBDBE2]'>
        <div className="flex md:flex-row sm:flex-col">
          <div className="flex flex-col items-start sm:ml-5 sm:mt-5 md:mt-20 md:ml-24 z-0"  >
          <DynamicSidebar />
          </div>
      
          <div className="md:w-9/12 mr-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
