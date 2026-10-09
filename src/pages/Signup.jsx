
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await setDoc(doc(db, "users", credential.user.uid), {
        name: name.trim(),
        email: email.trim(),
        createdAt: serverTimestamp(),
      });

      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (err.code === "auth/weak-password") {
        setError("Please choose a stronger password.");
      } else {
        setError(
          "Registration failed. Check your connection and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-layout">
      <section className="auth-card signup-card">
        <h1>Create a DEV@Deakin Account</h1>

        <form onSubmit={handleSignup}>
          <div className="form-row">
            <label htmlFor="signup-name">Name*</label>
            <input
              id="signup-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="signup-email">Email*</label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="signup-password">Password*</label>
            <input
              id="signup-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="confirm-password">Confirm password*</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          {error && <p className="form-error" role="alert">{error}</p>}

          <button className="primary-button" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>
        </form>

        <p className="switch-auth">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;