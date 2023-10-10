import { ProgressBar } from "./Progressbar";
import Image from "next/image";

const Leftsidebar = () => {
    return (
        <aside className=' w-80 p-10 flex flex-col gap-2' >
            <div className="flex-shrink">
                <div className=" flex-col px-2 gap-6 text-center flex-shrink">
                    <div className="rounded-full overflow-hidden w-32 h-32 mx-auto">
                        <Image src="/images/foto2.png" alt="Foto de Daniel Loaiza Noreña" width={300} height={500} />
                    </div>
                    <div className="flex flex-col py-3 gap-4 text-center ">
                        <span className="font-semibold">Daniel Loaiza Noreña</span>
                        <span className="text-gray-500 font-semibold">Ingeniero de sistemas</span>
                    </div>
                    <hr className="border-gray-500 flex-shrink" /> 
                </div>

            
                <div className="flex-col px-2 gap-4 flex-shrink">
                    <div className="flex items-center justify-between ">
                        <span className="font-semibold text-xs">EDAD:</span><span className="text-xs">24</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs">RESIDECIA:</span>
                        <span className=" text-xs ">MED</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs">FRELANCE:</span>
                        <span className="text-xs text-green-600">AVAILABLE</span>
                    </div>    
                        <hr className="border-gray-500 my-2 flex-shrink" />      
                </div>  

                <div className="flex-col px-2 gap-2 flex-shrink" >
                        <span className="text-sm font-semibold">LENGUAJES</span>  
                        <ProgressBar percentage={100} text="ESPAÑOL"/>
                        <ProgressBar percentage={80} text="INGLES"/>
                        <hr className="border-gray-500 my-2 flex-shrink" />
                </div>
                <div className="flex-col px-2 gap-2 flex-shrink" >                
                        <span className="text-xs font-semibold">LENGUAJES DE PROGRAMACIÓN</span>  
                        <ProgressBar percentage={85} text="PYTHON"/>
                        <ProgressBar percentage={80} text="HTML"/>
                        <ProgressBar percentage={75} text="CSS"/>
                        <ProgressBar percentage={75} text="JAVA"/>
                        <hr className="border-gray-500 my-2 flex-shrink" /> 
                </div>


                
            </div>
                   
        </aside>
    )
  }
  
  export {Leftsidebar};