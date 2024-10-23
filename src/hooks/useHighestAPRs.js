import { useState, useEffect } from 'react'
import { getHighestAPRs } from '../services/auraService'

export default function useHighestAPRs() {
  const [aprs, setAPRs] = useState({ ethAPR: null, usdAPR: null })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchHighestAPRs() {
      try {
        const result = await getHighestAPRs()
        setAPRs(result)
      } catch (err) {
        console.error('Error in useHighestAPRs:', err)
        setError(err.message || 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchHighestAPRs()
  }, [])

  return { aprs, isLoading, error }
}
