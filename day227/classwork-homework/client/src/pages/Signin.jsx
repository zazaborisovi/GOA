import './pages.css'

export default function Signin(){
  return (
    <main className="auth-layout">
      <section className="auth-card">
        <h1 className="brand">PulseChat</h1>
        <p className="muted">Welcome back! Sign in to continue the conversation.</p>
        <form className="form">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <label className="remember">
            <input type="checkbox" />
            Keep me signed in
          </label>
          <button type="submit" className="primary">Sign in</button>
        </form>
        <p className="helper">
          New here? <a href="/signup">Create an account</a>
        </p>
      </section>
    </main>
  )
}
