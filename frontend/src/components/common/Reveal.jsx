import { motion } from 'framer-motion'

// Scroll-reveal wrapper used across every landing-page section, replacing
// manual IntersectionObserver wiring with a declarative Framer Motion variant.
export default function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
