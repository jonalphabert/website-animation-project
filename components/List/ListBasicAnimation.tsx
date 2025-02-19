"use client"

import {AnimatePresence, motion} from "framer-motion"
import {listBasicAnimation, listItemAnimation} from "@/components/List/basicAnimation";
import {useState} from "react";

export default () => {
    const list = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
    ]

    const [isOpen, setIsOpen] = useState(false)
    return <>
        <AnimatePresence>
            {
                isOpen &&
                <motion.ul
                    className="h-screen flex flex-col gap-8 bg-gray-950 text-gray-50 w-fit absolute top-0 left-0"
                    variants={listBasicAnimation}
                    initial="initial"
                    animate="enter"
                    exit="exit">
                    {list.map((item, idx) => (
                        <motion.li
                            variants={listItemAnimation}
                            className={"h-[20vh] text-4xl font-bold uppercase flex items-center px-20"}
                            key={idx}>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            }
        </AnimatePresence>

        <div className="gap-8 bg-gray-950 text-gray-50 w-fit px-6 py-4 relative cursor-pointer select-none font-bold text-lg uppercase" onClick={() => setIsOpen(!isOpen)}>
            Click me
        </div>
    </>
}