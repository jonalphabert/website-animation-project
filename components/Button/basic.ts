export const basicAnimation = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    onHover:{
        scale: 1.1,
        transition: {
            duration: 1,
            type: "spring",
            bounce: 0.7
        }
    },
    onPressed:{
        scale: 0.6
    },
    enter:{
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            bounce: 0.5,

        }
    }
}