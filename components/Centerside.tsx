import { ButtonLearn } from "@/components/Buttonlearn";
import { Card } from "./Card";
import Image from "next/image";
import { Buttonhireme } from "./Buttonhireme";
import { Portfoliocard } from "./Portfoliocard";
const Centerside = () => {
  return (
    <main className=' bg-slate-700 w-full flex flex-col overflow-y-auto'>
    <section className=" flex  px-11">
      <div className="bg-black justify-between flex   w-full ">
        <div className="flex flex-col  gap-2 py-11 px-6">
         <h1 className="font-bold text-2xl">DANIEL LOAIZA NOREÑA</h1>
         <h1 className="font-bold text-2xl">INGENIERO DE SISTEMAS</h1>
         <span className="text-gray-500 text-sm">actualmente soy estudiante del area de la ingenieria de sistemas de la Universidad de Antioquia, tambien soy community manager de pequeñas empresas que se estan abriendo en mundo digital.</span>


         <Buttonhireme/>
        </div>
        <div className=" flex items-center ">
        <Image className="flex items-center" src="/images/fotoG.png" alt="Foto de Daniel Loaiza Noreña" width={500} height={500}/>
        </div>
        
      </div>
    </section>
    <section className="flex flex-col items-center px-11">
      <h1 className="py-4 text-xl font-semibold">Mi Conocimiento</h1>
      <h2 className="py-2 px-24 text-center text-gray-500 font-semibold">Los conocimientos aqui encontrados, son aquellos que se han obetnido durante todo el desarrollo de la formacion como profesional y dado por experiencias y cursos</h2>
      <div className="flex gap-7 p-6 items-center">
        <Card imagesrc="/images/data.png" title="Data Science" subtitle="Python data science"/>
        <Card imagesrc="/images/design.png" title="UX/UI Design" subtitle="Graphic and interface designer"/>
        <Card imagesrc="/images/coding.png"title="Web Development" subtitle="Blog, e-commerce"/>
      </div>
      <div className="flex gap-7 p-6">
        <Card imagesrc="/images/game.png" title="Game Developer" subtitle="Games development"/>
        <Card imagesrc="/images/support.png"title="App support" subtitle="Testing aplications"/>
        <Card imagesrc="/images/database.png"title="DB Management" subtitle="Data Base manager"/>
      </div>
    </section>
    <section className="flex px-11 py-4 ">
      
      <div className="bg-black justify-between flex flex-col  w-full ">
        <div className="flex justify-between">
          <div className=" flex flex-col">
            <span>Universidad de Antioquia</span>
            <div className="gap-3">
            <span className=" gap-3 px-2 text-xs">estudiante</span>
            <span className=" gap-3 px-2 bg-red-500 text-xs">junio 2017 - diciembre 2024 </span>
            </div>
          </div>
          <div className=" flex flex-col gap-2 p-2">
            
            <span className=" gap-3 px-2 t">Pregrado</span>
            <span className=" gap-3 px-2 text-sm">mis estudios se han realizado en la universidad de Antioquia desde el año 2017 en cual adquirido varios conocimientos</span>
            
          </div>
        </div>
        <hr className="border-gray-500"/>
        <div className="flex justify-between">
          <div className=" flex flex-col">
            <span>Academia Blendex</span>
            <div className="gap-3">
            <span className=" gap-3 px-2 text-xs">estudiante</span>
            <span className=" gap-3 px-2 bg-red-500 text-xs">enero 2017 - diciembre 2019 </span>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            
            <span className=" gap-3 px-2 textxl">Certificado de inlges</span>
            <span className=" gap-3 px-2 text-sm">he realizado una certificacion en la academia blendex consiguiendo asi el certificado b1 para habla inglesa</span>
            
          </div>
        </div>
      </div>  

    </section>
    <section className="flex flex-col items-center px-11 py-6">
        <h1 className="py-4 text-xl font-semibold">Portfolio</h1>
        <h2 className="py-2 px-24 text-center text-gray-500 font-semibold">aca encontraras todos los proyectos realizados por mi y que han dejdo un gran impacto a mi carrera</h2>
 
        <div className="flex gap-6 ">
         <Portfoliocard imagesrc="/images/arrows.png" title="portfolio titulo" text="no hay actualmente informacion relevante para agregar al portfolio"/>
         <Portfoliocard imagesrc="/images/arrows.png" title="portfolio titulo" text="no hay actualmente informacion relevante para agregar al portfolio"/>
         <Portfoliocard imagesrc="/images/arrows.png" title="portfolio titulo" text="no hay actualmente informacion relevante para agregar al portfolio"/>
         
        </div>

    </section>
    <footer></footer>
  </main>
  )
}

export {Centerside};