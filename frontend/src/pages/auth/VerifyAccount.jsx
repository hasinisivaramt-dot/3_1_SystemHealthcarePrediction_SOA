export default function VerifyAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg-blue)" }}>
      <div className="bg-white border rounded-2xl p-9 w-full max-w-sm" style={{ borderColor: "var(--line)" }}>
        <h1 className="text-2xl mb-1" style={{ fontFamily: "var(--ff-display)" }}>Verify your account</h1>
        <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>Placeholder VerifyAccount form — wire up to authService.</p>
        <div className="flex flex-col gap-3">
          <input className="border rounded-lg px-3.5 py-2.5 text-sm" style={{ borderColor: "var(--line)" }} placeholder="Email" />
          <button className="btn btn-primary w-full">Continue</button>
        </div>
      </div>
    </div>
  )
}
