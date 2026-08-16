export default function LiveQueue() {
  return (
    <div>
      <h1 className="text-2xl mb-1.5" style={{ fontFamily: "var(--ff-display)", color: "var(--navy)" }}>Live Queue</h1>
      <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>
        Patient Portal placeholder — connect to the relevant service via src/services once the API Gateway is running.
      </p>
      <div className="bg-white border rounded-2xl p-8 text-sm" style={{ borderColor: "var(--line)", color: "var(--ink-faint)" }}>
        Content for "Live Queue" goes here.
      </div>
    </div>
  )
}
