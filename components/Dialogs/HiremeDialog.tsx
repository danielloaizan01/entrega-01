import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'
import Image from "next/image";

interface HiremeDialogProps{
    open:boolean;

}
const HiremeDialog = ({open}:HiremeDialogProps) => {
  return (
   <Dialog open={open}>
        <DialogTitle>
            <span className='text-xl font-semibold'>Sobre Mí</span>
        </DialogTitle>
        <DialogContent>
            <div className='flex justify-between px-2'>
                <span>Mi nombre es Daniel Loaiza Noreña soy un ingeniero de sistemas de la Universidad de antioqui el cual se caracteriz por su comunicacion y entusuiamso, me gustan los retos y soy demasiado decidido a terminar lo que me propongo, si se algo estoy dispuesto enseñarlo y si no lo se estoy dispusto a aprenderlo</span>
    
            </div>
        </DialogContent>
   </Dialog>
  )
}

export {HiremeDialog};