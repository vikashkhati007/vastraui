"use client"
import React, { useEffect, useRef } from 'react'

const ParallexStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const stars = [700, 200, 100] // Number of stars for each layer
    const layers = stars.map((count, i) => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: i + 1,
        speed: (i + 1) * 0.5
      }))
    })

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#FFF'

      layers.forEach((layer, i) => {
        layer.forEach(star => {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2)
          ctx.fill()

          star.y += star.speed
          if (star.y > height) {
            star.y = 0
          }
        })
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  return (
    <div className="parallax-stars">
    <canvas ref={canvasRef} />
    <div id="title">
      <span>PURE CSS</span>
      <br />
    </div>
    <style jsx>{`
      .parallax-stars {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
      }
      canvas {
        position: absolute;
        top: 0;
        left: 0;
      }
      #title {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        color: #FFF;
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 50px;
        letter-spacing: 10px;
        margin-top: -60px;
        padding-left: 10px;
      }
    `}</style>
  </div>
  )
}

export default ParallexStars