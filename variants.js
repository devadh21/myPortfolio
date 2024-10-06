export const fadeIn = (direction,duration,delay)=>{
    return {
        hidden:{
            y:direction === "up" ? 80 : direction === "down" ? -80 : 0,
            x:direction === "left" ? 80 : direction === "right" ? -80 : 0,  
            opacity:0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:duration,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
    }
};
export const parentTextTapping = (delay)=>{
    return {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition:{
                staggerChildren:delay,
            }
        }
    }
};
export const childrenTextTapping = ()=>{
    return {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
        }
    }
};
export const progressLevelSkill = ()=>{
    return {
        hiddenProgress:{
            width:0,
        },
    }
};
