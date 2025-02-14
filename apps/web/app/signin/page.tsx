"use client"

import { SigninSchema } from "@repo/common/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value

        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = SigninSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                fieldErrors[err.path[0]] = err.message
            });
            setErrors(fieldErrors);
            return;
        }
        try {
            const res = await fetch("http://localhost:3200/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Sign-in failed")
            localStorage.setItem("token", data.token); 
            router.push("/");
        } catch (error) {
            console.log(error)
            setErrors({ general: "Network error" });
        }
    }
    return (
        <div className=" min-h-screen flex items-center justify-center">
            <div className="w-full p-6 max-w-md shadow-md rounded-lg">
                <h2 className=" text-2xl font-semibold text-center mb-4"> Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input type="email" name="email" placeholder="Email" value={formData.email}
                            onChange={handleChange} className="w-full p-2 border rounded-md" />
                        {errors.username && <p className="text-sm text-red-500"> {errors.username}</p>}
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={formData.password}
                            onChange={handleChange} className="w-full p-2 border rounded-md" />
                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>
                    {errors.general && <p className="text-sm text-red-500">{errors.general}</p>}
                    <button type="submit" className="w-full  bg-blue-500 text-white p-2 rounded-md">   Sign In</button>
                    <p className="text-sm text-center">Dont have an account?{" "}
                        <Link href="/signup" className="text-blue-500">
                            Sign up
                        </Link>
                    </p>
                </form>

            </div>
        </div>
    )
}