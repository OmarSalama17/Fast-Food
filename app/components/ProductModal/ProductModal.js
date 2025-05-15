import { motion, AnimatePresence } from "framer-motion";
import React from 'react'

const ProductModal = ({product,onClose}) => {

  return (
    <AnimatePresence>
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
                <motion.div 
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0.8 }} 
                        transition={{ duration: 0.3 }} 
                className="bg-white p-6 rounded-xl max-w-md w-full relative" onClick={(e)=> e.stopPropagation()}>
                <button
                    className="absolute top-2 right-2 text-xl"
                    onClick={() => setproduct(null)}
                    >
                    ❌
                </button>
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <img
                    src={product.url}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded mb-4"
                    />
                <p>{product.description}</p>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
                    Add to Cart
                </button>
                </motion.div>
            </motion.div>
        
    </AnimatePresence>
)
}

export default ProductModal