"use client";

import React from "react";
import {
  ExternalLink,
  FileSpreadsheet,
  FileText,
} from "lucide-react";
import { academicsData } from "@/data/disclosureData";

interface AcademicsSectionProps {
  viewMode: "cards" | "table";
  searchFilter?: string;
}

export default function AcademicsSection({
  viewMode,
  searchFilter = "",
}: AcademicsSectionProps) {
  const filteredItems = academicsData.filter(
    (item) =>
      item.information.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchFilter.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <h2 className="text-lg sm:text-xl font-bold text-[#001744]">
          C. Result And Academics
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
                  <th scope="col" className="py-2.5 px-4">Items</th>
                  <th scope="col" className="py-2.5 px-4 w-40 text-right">Uploaded Documents</th>
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
                      <div className="flex items-center gap-2">
                        {item.fileType === "xlsx" ? (
                          <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                        )}
                        <span>{item.information}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-[#001744] hover:text-[#38bdf8] bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap"
                        >
                          <span>Click Here</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                        </a>
                      ) : (
                        <span className="text-slate-400 text-xs">-</span>
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
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span>SL.No {item.slNo}</span>
                  <span className="text-blue-600 font-bold uppercase">{item.fileType?.toUpperCase() || "DOC"}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-900 uppercase leading-snug">
                  {item.information}
                </h3>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-end">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#001744] hover:bg-[#002b7a] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors"
                  >
                    <span>{item.linkText || "Click Here"}</span>
                    <ExternalLink className="w-3 h-3 text-[#FFD907]" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400">-</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
