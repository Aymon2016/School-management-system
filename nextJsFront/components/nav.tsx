'use client'
import { useState } from "react";
import NavWithTitle from "./fullNav";
import NavWithoutTitle from "./hideNav";

const Nav = () => {
    const [open , setOpen] = useState(true)
 
    const handleOpen = () => {

        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }
    return (
        open ? <NavWithTitle close = {handleClose} /> : <NavWithoutTitle open={handleOpen} />
    );
};

export default Nav;