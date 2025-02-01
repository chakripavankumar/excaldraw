"use client";

import { InitDraw } from "../../../draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Function to set canvas width & height to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas(); // Call once on mount
        window.addEventListener("resize", resizeCanvas); // Update on resize

        InitDraw(canvas); // Initialize drawing logic

        return () => {
            window.removeEventListener("resize", resizeCanvas); // Cleanup event listener
        };
    }, []);

    return (
        <div className="bg-black w-screen h-screen">
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
    );
}