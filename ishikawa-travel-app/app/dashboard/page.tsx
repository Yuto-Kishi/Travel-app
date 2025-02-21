"use client";
import { useState } from "react";
import ShioriCard from "@/app/components/Shiori/ShioriCard";

interface Shiori {
    coverImage: string;
    title: string;
    startDate: string;
    endDate: string;
}

export default function Dashboard() {
    const [shioris, setShioris] = useState<Shiori[]>([]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">旅のしおり一覧</h2>
            <button
                onClick={() => alert("新規しおり作成機能を追加予定")}
                className="bg-green-500 text-white p-2 rounded"
            >
                新規しおり作成
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {shioris.map((shiori, idx) => (
                    <ShioriCard key={idx} shiori={shiori} />
                ))}
            </div>
        </div>
    );
}
