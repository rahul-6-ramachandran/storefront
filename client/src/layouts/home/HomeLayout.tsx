

export default function HomeLayout({children}: { children: React.ReactNode }){
    return (
        <>
          <div className='flex flex-col   h-screen bg-gray-100'>
         <h1 className="my-3 text-xl w-full bg-white  text-gray-400 font-medium text-start fixed mx-4 px-4 py-3" >Products</h1>
      <div className=" w-full p-6 bg-white h-screen rounded-lg shadow-md">
       
        {children}
      </div>
  
    </div>
      
        </>
    )
}