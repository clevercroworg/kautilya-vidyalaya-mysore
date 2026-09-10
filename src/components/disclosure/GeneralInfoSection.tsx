"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { generalInformationData } from "@/data/disclosureData";

interface GeneralInfoSectionProps {
  viewMode: "cards" | "table";
  searchFilter?: string;
}

export default function GeneralInfoSection({
  viewMode,
  searchFilter = "",
}: GeneralInfoSectionProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const filteredItems = generalInformationData.filter(
    (item) =>
      item.information.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchFilter.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <h2 className="text-lg sm:text-xl font-bold text-[#001744]">
          A. General Information
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
                  <th scope="col" className="py-2.5 px-4 w-2/5">Information</th>
                  <th scope="col" className="py-2.5 px-4">Details</th>
                  <th scope="col" className="py-2.5 px-4 w-28 text-right">Action</th>
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
                    <td className="py-2.5 px-4 text-center font-bold text-slate-500">
                      {item.slNo}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-slate-700">
                      {item.information}
                    </td>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">
                      {item.detail}
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-[#001744] hover:text-[#38bdf8] text-xs underline underline-offset-2"
                        >
                          <span>{item.linkText || "Open"}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      ) : (
                        <button
                          onClick={() => handleCopy(item.detail, `gen-${item.slNo}`)}
                          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700"
                          title="Copy"
                        >
                          {copiedField === `gen-${item.slNo}` ? (
                            <span className="text-emerald-600 font-bold flex items-center gap-1">
                              <Check className="w-3 h-3" /> Copied
                            </span>
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
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
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {item.information}
                </h3>
                <p className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                  {item.detail}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#001744] hover:text-[#38bdf8]"
                  >
                    <span>{item.linkText || "Open"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400 text-[11px]">Official Record</span>
                )}

                <button
                  onClick={() => handleCopy(item.detail, `card-gen-${item.slNo}`)}
                  className="text-slate-400 hover:text-slate-700 text-xs"
                >
                  {copiedField === `card-gen-${item.slNo}` ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
