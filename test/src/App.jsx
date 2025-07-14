import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import LoginPage from './components/LoginPage'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = () => {
    auth.signOut()
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          color: 'white',
          fontSize: '18px',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
        }}>
          Loading...
        </div>
      </div>
    )
  }

  if (!user) {
    return <LoginPage />
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          Welcome, {user.displayName || user.email}!
        </h1>

        <div style={{
          background: '#f7fafc',
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#2d3748' }}>User Information:</h3>
          <p style={{ margin: '8px 0', color: '#4a5568' }}>
            <strong>Email:</strong> {user.email}
          </p>
          {user.displayName && (
            <p style={{ margin: '8px 0', color: '#4a5568' }}>
              <strong>Name:</strong> {user.displayName}
            </p>
          )}
          <p style={{ margin: '8px 0', color: '#4a5568' }}>
            <strong>Login Method:</strong> {user.providerData[0]?.providerId || 'Email/Password'}
          </p>
          <p style={{ margin: '8px 0', color: '#4a5568' }}>
            <strong>Account Created:</strong> {new Date(user.metadata.creationTime).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default App
