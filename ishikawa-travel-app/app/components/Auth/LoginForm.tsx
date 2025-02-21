"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        // ✅ IDとパスワードを小文字の英字のみ、8〜20文字にバリデーション
        const regex = /^[a-z]{8,20}$/;

        if (regex.test(userId) && regex.test(password)) {
            router.push("/dashboard");
        } else {
            alert("ユーザーIDとパスワードは8〜20文字の小文字英字のみ使用できます。");
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <input
                type="text"
                placeholder="ユーザーID (小文字英字 8〜20文字)"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />
            <input
                type="password"
                placeholder="パスワード (小文字英字 8〜20文字)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />
            <button
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white p-2 rounded"
            >
                ログイン
            </button>
        </div>
    );
}