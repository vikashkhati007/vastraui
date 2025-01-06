'use client'

import React from 'react'

interface CardAnimationComponentProps {
    children?: React.ReactNode
}

export default function BorderAnimationCardComponent({ children }: CardAnimationComponentProps) {
    const width = '190px';
    const height = '254px';

    return (
        <div className="card">
            <span className="glass"></span>
            <div className="content">
                {children}
            </div>

            <style jsx>{`
                .card {
                    width: ${width};
                    height: ${height};
                    background: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0px 0px 3px 1px #00000088;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                }

                .card .content {
                    border-radius: 10px;
                    background: black;
                    width: calc(${width} - 4px);
                    height: calc(${height} - 4px);
                    z-index: 1;
                    padding: 20px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .content::before {
                    opacity: 0;
                    transition: opacity 300ms;
                    content: " ";
                    display: block;
                    background: #fff5;
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    filter: blur(50px);
                }

                .card:hover .content::before {
                    opacity: 1;
                }

                .card::before {
                    opacity: 1;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 60%;
                    height: 150%;
                    transform: rotate(0deg) translateY(50%);
                    background: linear-gradient(90deg, #ff2288, transparent);
                    transition: opacity 300ms;
                    animation: rotation_9018 3000ms infinite linear;
                    animation-play-state: paused;
                }

                .card::after {
                    opacity: 1;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 60%;
                    height: 150%;
                    transform: rotate(0deg) translateY(-50%);
                    background: linear-gradient(90deg, transparent, #2268ff);
                    transition: opacity 300ms;
                    animation: rotation_9019 3000ms infinite linear;
                    animation-play-state: paused;
                }

                .card:hover::before {
                    opacity: 1;
                    animation-play-state: running;
                }

                .card:hover::after {
                    opacity: 1;
                    animation-play-state: running;
                }

                .card:hover .glass {
                    opacity: 0;
                }

                .glass {
                    position: absolute;
                    content: "";
                    display: block;
                    width: ${width};
                    height: ${height};
                    background: #17171733;
                    backdrop-filter: blur(50px);
                    z-index: 1;
                    transition-duration: 0.5s;
                }

                @keyframes rotation_9018 {
                    0% {
                        transform: rotate(0deg) translateY(50%);
                    }
                    100% {
                        transform: rotate(360deg) translateY(50%);
                    }
                }

                @keyframes rotation_9019 {
                    0% {
                        transform: rotate(0deg) translateY(-50%);
                    }
                    100% {
                        transform: rotate(360deg) translateY(-50%);
                    }
                }
            `}</style>
        </div>
    )
}
