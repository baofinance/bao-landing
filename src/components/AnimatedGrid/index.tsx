import React, { useEffect, useRef } from 'react'

interface AnimatedGridProps {
  color?: string
  altColor?: string
  cols?: number
  rows?: number
  opacity?: number
}

export function AnimatedGrid({
  color = '#e21a53',
  altColor = '#faf2e3',
  cols = 80,
  rows = 40,
  opacity = 0.1,
}: AnimatedGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let squares: (Square | null)[][] = []
    let lastFrame = new Date().getTime()
    let delta = 0
    let mousePos: { x: number; y: number } | null = null
    let isClicked = false

    const properties = {
      cols,
      rows,
      color,
      altColor,
      baoPink: '#e21a53',
      sLength: 0,
      activeAmt: 0.25,
      easeIn: 0.5,
      trailFadeSpeed: 0.05, // New property for trail fade speed
    }

    class Square {
      col: number
      row: number
      life: number
      color: string
      initialLife: number
      animIn: boolean
      opacity: number
      isHovered: boolean
      trailOpacity: number // New property for trail effect

      constructor(
        c: number,
        r: number,
        life: number,
        animIn = true,
        color?: string
      ) {
        this.col = c
        this.row = r
        this.life = life
        this.color = color || properties.color
        this.initialLife = life
        this.animIn = animIn
        this.opacity = animIn ? 0 : 1
        this.isHovered = false
        this.trailOpacity = 0 // Initialize trail opacity
      }

      step(ctx: CanvasRenderingContext2D) {
        this.render(ctx)
        if (this.animIn) {
          this.opacity = this.opacity + (1 / properties.easeIn) * delta * 0.5
          if (this.opacity >= 1) {
            this.opacity = 1
            this.animIn = false
          }
        } else {
          this.life = this.life - delta * 0.5
          if (this.life < 0) {
            this.life = 0
          }
          this.opacity = Math.round(
            (1 * (this.life / this.initialLife) * 1000) / 1000
          )
        }

        // Fade trail effect
        if (this.trailOpacity > 0) {
          this.trailOpacity = Math.max(
            0,
            this.trailOpacity - properties.trailFadeSpeed * delta
          )
        }
      }

      render(ctx: CanvasRenderingContext2D) {
        const l = properties.sLength
        ctx.globalAlpha = this.isHovered
          ? 1
          : Math.max(this.opacity * 0.5, this.trailOpacity)
        ctx.fillStyle = this.color
        ctx.fillRect(this.col * l, this.row * l, l, l)
      }

      reset() {
        this.opacity = 1
        this.life = this.initialLife
      }

      setColor(color: string) {
        this.color = color
      }

      setHovered(isHovered: boolean) {
        this.isHovered = isHovered
        if (isHovered) {
          this.trailOpacity = 1 // Set full opacity when hovered
        }
      }
    }

    function init() {
      canvas.width = canvas.offsetWidth
      canvas.height = (canvas.offsetWidth / properties.cols) * properties.rows
      properties.sLength = canvas.offsetWidth / properties.cols

      for (let r = 0; r < properties.rows; r++) {
        squares[r] = []
        for (let c = 0; c < properties.cols; c++) {
          squares[r][c] = null
        }
      }

      canvas.addEventListener('mousemove', (evt) => {
        mousePos = getMousePos(evt)
      })

      canvas.addEventListener('mouseout', () => {
        mousePos = null
      })

      canvas.addEventListener('mousedown', (evt) => {
        mousePos = getMousePos(evt)
        isClicked = true
      })

      canvas.addEventListener('mouseup', () => {
        isClicked = false
      })
    }

    function step() {
      delta = (new Date().getTime() - lastFrame) / 1000
      lastFrame = new Date().getTime()

      const spawnMultiplier = 6
      for (
        let i = 0;
        i < Math.ceil(properties.cols * delta * spawnMultiplier);
        i++
      ) {
        const c = Math.floor(Math.random() * properties.cols)
        const r = Math.floor(Math.random() * properties.rows)
        if (squares[r] && squares[r][c] == null) {
          const duration = Math.round(8 * (Math.random() + 0.5))
          squares[r][c] = new Square(c, r, duration)
        }
      }

      if (mousePos != null) {
        const col = Math.floor((mousePos.x / canvas.width) * properties.cols)
        const row = Math.floor((mousePos.y / canvas.height) * properties.rows)

        for (let r = 0; r < properties.rows; r++) {
          for (let c = 0; c < properties.cols; c++) {
            if (squares[r] && squares[r][c]) {
              squares[r][c]!.setHovered(r === row && c === col)
            }
          }
        }

        if (
          row >= 0 &&
          row < properties.rows &&
          col >= 0 &&
          col < properties.cols
        ) {
          if (isClicked) {
            squares[row][col] = new Square(
              col,
              row,
              5,
              false,
              properties.baoPink
            )
            isClicked = false
          } else if (squares[row][col]) {
            squares[row][col]?.setColor(properties.baoPink)
          } else {
            squares[row][col] = new Square(
              col,
              row,
              10,
              false,
              properties.baoPink
            )
          }
        }
      }

      for (let r = 0; r < properties.rows; r++) {
        for (let c = 0; c < properties.cols; c++) {
          if (squares[r][c] != null && squares[r][c]!.life <= 0) {
            squares[r][c] = null
          }
        }
      }

      render()

      requestAnimationFrame(step)
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let r = 0; r < properties.rows; r++) {
        for (let c = 0; c < properties.cols; c++) {
          if (squares[r][c] != null) {
            squares[r][c]!.step(ctx)
          }
        }
      }
    }

    function getMousePos(evt: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      }
    }

    init()
    requestAnimationFrame(step)

    return () => {
      canvas.removeEventListener('mousemove', () => {})
      canvas.removeEventListener('mouseout', () => {})
      canvas.removeEventListener('mousedown', () => {})
      canvas.removeEventListener('mouseup', () => {})
    }
  }, [color, altColor, cols, rows])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: opacity }}
    />
  )
}
