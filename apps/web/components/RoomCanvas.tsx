"use client"

import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { WS_URL } from "../config";
export default function RoomCanvas({ roomId }: { roomId: string }) {

    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGFiZWUzZi0zOWFjLTQ4YmMtYmI0My03MWU0MzZhOTk5ZTUiLCJpYXQiOjE3MzgwNjk4OTd9.shMOmjCPFo7ykHpwFhvfKheyz0jD2xtmw_52R0XWGzo`)
        ws.onopen = () => {
            setSocket(ws);
            const data = JSON.stringify({
                type: "join_room",
                roomId
            });
            ws.send(data);
        }
    },)
    if (!socket) {
        return <div>Connecting to server....</div>
    }
    return (
        <div>
            <Canvas roomId={roomId} socket={socket} />
        </div>
    )
}