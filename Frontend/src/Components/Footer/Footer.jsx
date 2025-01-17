import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="border-t bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
                <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>

                <motion.div
                    className="flex items-center gap-6 text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <a href="#" className="hover:text-blue-500 transition duration-300">
                        <FaFacebook />
                    </a>
                    <a href="#" className="hover:text-pink-500 transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">
                        <FaLinkedin />
                    </a>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer;
