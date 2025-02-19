'use client'
import { motion } from "framer-motion";
import {basicAnimation} from "@/components/Button/basic";

export default () => {
    return (
        <>
            <motion.div
                className="px-6 py-2 rounded text-lg uppercase font-bold cursor-pointer bg-amber-950 text-amber-50 select-none"
                variants={basicAnimation}
                initial="initial"
                whileHover={"onHover"}
                whileTap={"onPressed"}
                animate={"enter"}
            >
                Try This Animation
            </motion.div>
        </>
    )
}