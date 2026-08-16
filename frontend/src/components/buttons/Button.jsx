import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const VARIANTS = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  outlineLight: 'btn-outline-light',
  lightSolid: 'btn-outline-light btn-light-solid',
}

// Shared CTA button. Hover/tap feedback replaces the old CSS ripple with a
// Framer Motion press animation so it works consistently across surfaces.
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  className = '',
  ...rest
}) {
  const Comp = motion[as] || motion.button
  return (
    <Comp
      className={cn('btn', VARIANTS[variant], className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
