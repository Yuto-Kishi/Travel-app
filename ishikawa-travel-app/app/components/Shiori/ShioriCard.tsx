import React from "react";
import { Shiori } from "@/types/Shiori"; // パスを修正して型定義ファイルを正確にインポート

interface ShioriProps {
    shiori: Shiori;
}

export default function ShioriCard({ shiori }: ShioriProps) {
    return (
        <div className="border p-4 rounded shadow-lg bg-white">
            <img
                src={shiori.coverImage}
                alt="しおり画像"
                className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{shiori.title}</h3>
            <p>{`${shiori.startDate} ~ ${shiori.endDate}`}</p>
        </div>
    );
}