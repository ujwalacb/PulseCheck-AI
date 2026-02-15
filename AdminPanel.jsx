import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API = '/api'

export default function AdminPanel() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`${API}/admin/stats`)
        if (res.ok) {
          const data = await res.json()
          setStats(data)
        }
      } catch (_) {}
      setLoading(false)
    }
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="page-header">
        <p>Loading…</p>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="page-header">
        <h1>Admin panel</h1>
        <p>Overview and system statistics.</p>
      </div>
      <div className="admin-stats-grid">
        <div className="card stat-card">
          <span className="stat-value">{stats?.totalPatients ?? 0}</span>
          <span className="stat-label">Total patients</span>
        </div>
        <div className="card stat-card">
          <span className="stat-value">{stats?.triageCount ?? 0}</span>
          <span className="stat-label">Triage assessments</span>
        </div>
        <div className="card stat-card stat-high">
          <span className="stat-value">{stats?.highUrgency ?? 0}</span>
          <span className="stat-label">High urgency</span>
        </div>
        <div className="card stat-card stat-medium">
          <span className="stat-value">{stats?.mediumUrgency ?? 0}</span>
          <span className="stat-label">Medium urgency</span>
        </div>
        <div className="card stat-card stat-low">
          <span className="stat-value">{stats?.lowUrgency ?? 0}</span>
          <span className="stat-label">Low urgency</span>
        </div>
      </div>
      <div className="card admin-actions-card">
        <h2 className="form-section-title">Quick actions</h2>
        <div className="admin-actions">
          <Link to="/patient-input" className="btn btn-primary">New triage</Link>
          <Link to="/triage" className="btn btn-secondary">Triage dashboard</Link>
          <Link to="/history" className="btn btn-secondary">Patient history</Link>
        </div>
      </div>
    </div>
  )
}
