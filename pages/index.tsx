import { Centerside } from "@/components/Centerside";
import { Leftsidebar } from "@/components/Leftsidebar";
import { Rightsidebar } from "@/components/Rightsidebar";


const Home =()=>{
  return (
  <div className='bg-black h-screen flex flex-shrink'>
    <Leftsidebar/>
    <Centerside/>
    <Rightsidebar/>
  </div>)
}
export default Home;