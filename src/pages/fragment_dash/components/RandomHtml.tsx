    import styles from './randomHtml.module.css'
import {motion} from "framer-motion";

const routeVariants = {
    initialLeft: {
        x: '-100vw'
    },
    initialRight: {
        x: '100vw'
    },
    initialBottom: {
        y: '50vh',
    },
    final: {
        x: '0vw',
        transition: {
            type: "spring",
            mass: 0.4,
        },
    },
    final2: {
      y: '0vh',
      transition: {
          type: "spring",
          mass: 0.4,
          duration: 0.5,
          delay: 0.5,
      },
    }
}

interface randomBsObject {
    fizz: string;
    buzz: string | null
}
interface randomHtmlProps {
    randomBs?: randomBsObject | null;
}
export const RandomHtml = ({randomBs}: randomHtmlProps) => {
    console.log(randomBs?.buzz)

    return <div className={styles.container}>
        <h1>Check this out Yo</h1>
        <div
            className={styles.middleContainer}
        >
            <motion.div
                className={styles.middleLeft}
                variants={routeVariants}
                initial="initialLeft"
                animate="final"
                exit="initialLeft"
            >
                Boom
            </motion.div>
            <motion.div
                className={styles.middleLeft}
                variants={routeVariants}
                initial="initialRight"
                animate="final"
                exit="initialRight"
            >
                Drop the mic
            </motion.div>
        </div>
        <motion.div
            className={styles.footer}
            variants={routeVariants}
            initial="initialBottom"
            animate="final2"
            exit="initialBottom"
        ></motion.div>
    </div>
}
