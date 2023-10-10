interface ButtonhiremeProps{
    handleClick:()=>void;

}
const Buttonhireme = ({handleClick=()=>{}}:ButtonhiremeProps) => {
    return (
        
      <button onClick={handleClick} className=" bg-orange-500 hover:scale-105  text-left w-24 rounded-md" >
        
          <span className="bg-orange-500 font-semibold text-right h-full">Sobre Mí</span> 
      </button>
    )
  }
  
  export  {Buttonhireme};