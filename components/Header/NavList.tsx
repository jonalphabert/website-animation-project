import { motion } from "framer-motion";
import Link from "next/link";
import React, {ReactNode} from "react";
import {blur, translate} from "@/components/Header/anim";

interface State {
    isHovered: boolean;
    linkIndex: number;
}

export default function NavList({link, hoveredLink, setHoveredLink} : {
    link: {
        label: string,
        href: string,
        image?: string
    }[],
    hoveredLink: State,
    setHoveredLink: React.Dispatch<React.SetStateAction<State>>
}) {
    const getChars = (word: string) => {
        let chars: ReactNode[] = [];
        word.split("").forEach( (char, i) => {
            chars.push(
                <motion.span
                    key={char + i}
                    custom={[i * 0.03, (word.length - i) * 0.01]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    {char}
                </motion.span>
            )
        })
        return chars;
    }

    return (
        <>
            <div className={"flex flex-col md:flex-row gap-x-12 gap-y-4 flex-wrap"}>
                {link.map((item, index) => (
                    <Link key={`link_${index}`} href={item.href} className={"text-4xl md:text-6xl uppercase block w-fit relative"}>
                        <motion.p
                            className={"overflow-hidden flex"}
                            onMouseOver={() => setHoveredLink({isHovered: true, linkIndex: index})}
                            onMouseLeave={() => setHoveredLink({isHovered: false, linkIndex: index})}
                            variants={blur}
                            initial="initial"
                            animate={hoveredLink.isHovered && hoveredLink.linkIndex !== index ? 'enter' : "exit"}
                        >
                            {getChars(item.label)}
                        </motion.p>
                    </Link>
                ))}
            </div>
        </>
    )
}