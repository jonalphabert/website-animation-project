"use client"
import styles from './style.module.scss';
import {useState} from "react";
import NavbarWrapper from "@/components/Header/NavbarWrapper";
import {AnimatePresence, motion} from "framer-motion";
import {backdrop} from "@/components/Header/anim";

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className={"fixed w-screen"}>
                <div className={"bg-gray-950 text-white"}>
                    <div className={"flex justify-between items-center container mx-auto px-4 py-2"}>
                        <div className={"text-lg uppercase"}>Jonathan</div>
                        <div className={"flex gap-2 items-center cursor-pointer"} onClick={() => setIsActive(!isActive)}>
                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                            </div>
                            <div className={"text-lg uppercase cursor-pointer"}>{isActive ? "Close" : "Menu"}</div>
                        </div>
                        <div>
                            <div className={"text-lg border-2 cursor-pointer border-gray-50 px-4"}>Login</div>
                        </div>
                    </div>
                </div>

                <motion.div variants={backdrop} initial="initial" animate={isActive ? "enter" : "exit"}
                            className={"bg-gray-950 bg-opacity-50 w-screen h-full left-0 top-0 absolute -z-10"}></motion.div>

                <AnimatePresence>
                    {isActive && <NavbarWrapper/>}
                </AnimatePresence>
            </div>
        </>
    )
}