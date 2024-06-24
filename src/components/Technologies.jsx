import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiWindows } from "react-icons/di";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial : {y : -10},
    animate : {
        y : [10, -10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        },
    },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1 , y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJava className="text-7xl" style={{ color: '#007396' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJsBadge className="text-7xl" style={{ color: '#F7DF1E' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiPython className="text-7xl" style={{ color: '#3776AB' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiHtml5 className="text-7xl" style={{ color: '#E34F26' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiCss3 className="text-7xl" style={{ color: '#1572B6' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiBootstrap className="text-7xl" style={{ color: '#7952B3' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl" style={{ color: '#61DAFB' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <TbBrandNextjs className="text-7xl" />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className="text-7xl" style={{ color: '#339933' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiMysql className="text-7xl" style={{ color: '#4479A1' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl" style={{ color: '#47A248' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiGithubBadge className="text-7xl" />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiGit className="text-7xl" style={{ color: '#F05032' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiVisualstudio className="text-7xl" style={{ color: '#5C2D91' }} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiWindows className="text-7xl" style={{ color: '#0078D6' }} />
                    </motion.div>

        </motion.div>
        </div>
  );
};

export default Technologies;