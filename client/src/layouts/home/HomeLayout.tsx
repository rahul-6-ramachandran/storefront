import Navbar from "../../components/navbar/Navbar";


export default function HomeLayout({children}: { children: React.ReactNode }){
    return (
        <>
          <div className='flex flex-col   h-screen bg-gray-100'>
            <Navbar/>
            <h1 className="my-3 text-xl w-full bg-white   text-gray-400 font-medium text-start    px-4 py-3" >Products</h1>
      <div className=" w-full bg-white h-screen rounded-lg shadow-md flex flex-col">
     
        {children}
      </div>
  
    </div>
      
        </>
    )
}