import { motion } from "framer-motion"

export default function HeroAnimation() {
  return (
    <div className="relative h-64 w-full rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-3xl font-black italic tracking-tighter"
      >
        MODERN UI
      </motion.div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  )
}
