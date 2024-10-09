import React, { useState, useEffect, useMemo } from 'react'
import styles from './TwinklingBackground.module.css'

const TwinklingBackground = ({ color, squareSize, coverage }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const squares = useMemo(() => {
    if (!isClient) return []

    const width = window.innerWidth
    const height = window.innerHeight
    const cols = Math.ceil(width / squareSize)
    const rows = Math.ceil(height / squareSize)
    const totalCells = cols * rows
    const visibleCells = Math.floor(totalCells * coverage)

    const cells = new Array(totalCells).fill(false)
    for (let i = 0; i < visibleCells; i++) {
      let index
      do {
        index = Math.floor(Math.random() * totalCells)
      } while (cells[index])
      cells[index] = true
    }

    return cells.reduce((acc, isVisible, index) => {
      if (isVisible) {
        acc.push({
          x: (index % cols) * squareSize,
          y: Math.floor(index / cols) * squareSize,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
      return acc
    }, [])
  }, [squareSize, coverage, isClient])

  if (!isClient) return null

  return (
    <div
      className={styles.twinklingBackground}
      style={{
        gridTemplateColumns: `repeat(auto-fill, ${squareSize}px)`,
        gridTemplateRows: `repeat(auto-fill, ${squareSize}px)`,
      }}
    >
      {squares.map((square, index) => (
        <div
          key={index}
          className={styles.twinklingSquare}
          style={{
            backgroundColor: color,
            opacity: square.opacity,
            gridColumn: `${square.x / squareSize + 1} / span 1`,
            gridRow: `${square.y / squareSize + 1} / span 1`,
          }}
        />
      ))}
    </div>
  )
}

TwinklingBackground.displayName = 'TwinklingBackground'

export { TwinklingBackground }
