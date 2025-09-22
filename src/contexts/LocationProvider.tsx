
import { motion, AnimatePresence } from "framer-motion";

interface LocationProviderProps {
    children: string | JSX.Element | JSX.Element[];
}
export const  LocationProvider = ({children}: LocationProviderProps) => {
    return (
        <AnimatePresence>
            {children}
        </AnimatePresence>
    )
}
