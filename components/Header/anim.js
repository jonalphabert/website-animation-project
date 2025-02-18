const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]};

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.8},
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
    }
}

export const height = {
    initial: {
        height: 0
    },
    enter: {
        height: "auto",
        transition
    },
    exit: {
        height: 0,
        transition
    }
}

export const blur = {
    initial: {
        filter: "blur(0px)",
    },
    enter: {
        filter: "blur(4px)",
        transition: {duration: 0.3}
    },
    exit: {
        filter: "blur(0px)",
        transition: {duration: 0.3}
    }
}

export const translate = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0]}
    }),
    exit: (i) => ({
        y: "100%",
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1]}
    })
}

export const backdrop = {
    initial: {
        height: 0,
    },
    enter: {
        height: "100vh",
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        height: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    }
}