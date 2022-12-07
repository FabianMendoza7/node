import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <main className='container mx-auto mt-4 md:mt-4 p-10 md:flex md:justify-left'>
        <div className='md:w-2/3 lg:w-2/5 bg-re-100'>
          <Outlet/>
        </div>
      </main>
    </>
  )
}

export default Layout