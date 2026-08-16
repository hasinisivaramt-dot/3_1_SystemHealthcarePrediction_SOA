export default function Container({ children, className = '' }) {
  return <div className={`wrap ${className}`}>{children}</div>
}
