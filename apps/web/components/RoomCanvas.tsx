"use client";

import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { WS_URL } from "../config";

export default function RoomCanvas({ roomId }: { roomId: string }) {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token"); // Fetch token from local storage
        if (!token) {
            console.error("No token found in local storage.");
            return; // Exit if token is missing
        }
        const ws = new WebSocket(`${WS_URL}?token=${token}`);

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({ type: "join_room", roomId }));
        };

        ws.onerror = (error) => console.error("WebSocket error:", error);
        ws.onclose = () => console.log("WebSocket closed.");

        return () => ws.close(); // Cleanup on unmount
    }, [roomId]); // Re-run if roomId changes

    if (!socket) return <div>Connecting to server...</div>;

    return <Canvas roomId={roomId} socket={socket} />;
}