"use client";

import React from "react";
import {
  ExternalLink,
  Play,
} from "lucide-react";
import { infrastructureData } from "@/data/disclosureData";

interface InfrastructureSectionProps {
  viewMode: "cards" | "table";
  searchFilter?: string;
}

export default function InfrastructureSection({
  viewMode,
  searchFilter = "",
}: InfrastructureSectionProps) {
  const filteredItems = infrastructureData.filter(
    (item) =>
      item.information.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchFilter.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <h2 className="text-lg sm:text-xl font-bold text-[#001744]">
          D. School Infrastructure
        </h2>
      </div>

      {viewMode === "table" ? (
        /* Clean Official Table */
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#001744] text-white uppercase text-[11px] font-bold">
                <tr>
                  <th scope="col" className="py-2.5 px-4 w-16 text-center">SL.No</th>
                  <th scope="col" className="py-2.5 px-4">Information</th>
                  <th scope="col" className="py-2.5 px-4 w-48 text-right">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {filteredItems.map((item, idx) => (
                  <tr
                    key={item.slNo}
                    className={`hover:bg-slate-50 transition-colors ${
                      idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 text-center font-bold text-slate-500">
                      {item.slNo}
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-900 leading-snug">
                      {item.information}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap"
                        >
                          <Play className="w-3.5 h-3.5 text-rose-600 fill-current" />
                          <span>Click Here</span>
                          <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                        </a>
                      ) : (
                        <span className="font-bold text-slate-900">{item.detail}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Simple Clean Cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.slNo}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-400">
                  SL.No {item.slNo}
                </span>
                <h3 className="text-xs font-bold text-slate-700 uppercase leading-snug mt-1">
                  {item.information}
                </h3>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  {item.detail}
                </span>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-rose-600 hover:text-rose-700 text-xs"
                  >
                    <span>Watch Video</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
