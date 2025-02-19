export const listBasicAnimation = {
    initial: {
        opacity: 0,
        x: "-100%",
    },
    enter: {
        opacity: 1,
        x: "0%",
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
            bounce: 0
        }
    },
    exit: {
        opacity: 0,
        x: "-100%",
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        }
    }
}

export const listItemAnimation = {
    initial: {
        opacity: 0,
        x: "-100%",
    },
    enter: {
        opacity: 1,
        x: "0%",
        transition: {
            duration: 0.2,
        }
    },
    exit: {
        opacity: 0,
        x: "-100%",
        transition: {
            duration: 0.2,
        }
    }
}