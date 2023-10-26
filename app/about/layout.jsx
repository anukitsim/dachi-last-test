import '@styles/globals.css'
import Sidebar from '@components/Sidebar'

export const metadata = {
  title: 'Dachi-Giorgi Garuchava',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#DBDBDBE2]'>
        <div className="flex md:flex-row sm:flex-col">
          <div className="flex flex-col items-start sm:ml-5 sm:mt-5 md:mt-20 md:ml-24 z-0"  >
          <Sidebar />
          </div>
      
          <div className="md:w-9/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
