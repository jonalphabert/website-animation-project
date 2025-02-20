import NavList from "@/components/Header/NavList";
import { motion } from "framer-motion";
import {height, opacity,} from "@/components/Header/anim";
import {useState} from "react";

export default function NavbarWrapper() {
    const [hoveredLink, setHoveredLink] = useState({isHovered: false, linkIndex: -1});

    const link = [
        {
            label: 'Home',
            href: '#',
        },{
            label: 'About',
            href: '#',
        },{
            label: 'Portfolio',
            href: '#',
        },{
            label: 'Testimonials',
            href: '#',
        },{
            label: 'Contact',
            href: '#',
        }
    ]
    return (
        <>
            <motion.div
                className={"bg-gray-950 text-white"}
                variants={height}
                initial="initial"
                animate="enter"
                exit="exit">
                <div className={"container mx-auto px-4 py-4"}>
                    <div className={"mb-8 flex"}>
                        <NavList link={link} hoveredLink={hoveredLink} setHoveredLink={setHoveredLink} />
                    </div>
                    <motion.div
                        className={"flex flex-col justify-between uppercase md:items-end md:flex-row gap-2"}
                        variants={opacity}
                        initial="initial"
                        animate="open"
                        exit="closed"
                    >
                        {/*  Footer of Navbar  */}
                        <div>
                            Interior Designer
                        </div>

                        <div>
                            Since 2017 <br/>
                            Over 200 Clients
                        </div>

                        <div>
                            Photo By: <br/>
                            <b>Creative Studio</b>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}