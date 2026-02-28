import './pages.css'

export default function Signup(){
  return (
    <main className="auth-layout">
      <section className="auth-card">
        <h1 className="brand">Create your PulseChat account</h1>
        <p className="muted">It only takes a minute to get started.</p>
        <form className="form">
          <label>
            Full name
            <input type="text" placeholder="Jane Doe" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Create password
            <input type="password" placeholder="Minimum 8 characters" />
          </label>
          <label>
            Confirm password
            <input type="password" placeholder="Repeat your password" />
          </label>
          <button type="submit" className="primary">Create account</button>
        </form>
        <p className="helper">
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </section>
    </main>
  )
}
