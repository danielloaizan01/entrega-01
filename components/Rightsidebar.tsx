import { Social } from "@/components/Social";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube,FaGithub,FaLinkedin } from 'react-icons/fa';
const Rightsidebar = () => {
  return (
    <aside className=' w-24 flex flex-col '>
        <span className="flex-col p-5 gap-4 font-semibold">Links</span>
        <div className="flex flex-col p-6 "><Social icon={<FaGithub/>} url="https://github.com/danielloaizan01"/></div>
        <div className="flex flex-col p-6 "><Social icon={<FaLinkedin/>} url="https://www.linkedin.com/in/daniel-loaiza-noreña-503549294"/></div>
        <div className="flex flex-col p-6 "><Social icon={<FaFacebook/>} url="https://www.facebook.com/daniel.loaizanorena/"/></div>
        <div className="flex flex-col p-6 "><Social icon={<FaInstagram/>} url="https://www.instagram.com/danielloaiza99"/></div>
        <div className="flex flex-col p-6 "><Social icon={<FaTwitter/>} url="https://www.x.com/Danny_dim"/></div>        
        <div className="flex flex-col p-6 "><Social icon={<FaYoutube/>} url="https://www.youtube.com/@danielloaizanorena8406"/></div>
    </aside>
  )
}

export {Rightsidebar};