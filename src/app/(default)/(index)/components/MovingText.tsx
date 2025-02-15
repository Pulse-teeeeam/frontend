'use client'

import { motion } from "framer-motion"

export default function MovingText() {
  return (
    <div className="w-full overflow-hidden bg-indigo-600 p-4 -rotate-2 rounded-xl mt-22">
      <motion.div
        className="whitespace-nowrap flex gap-6 text-white font-bold text-xl"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ whiteSpace: 'nowrap' }} // Убедитесь, что текст не переносится на новую строку
      >
        <div>Иван Иванов Иванович</div>
        <div>Иван Иванов Иванович</div>
        <div>Иван Иванов Иванович</div>
        <div>Иван Иванов Иванович</div>
        <div>Иван Иванов Иванович</div>
      </motion.div>
    </div>
  )
}
