"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import AdmissionModal from "@/components/ui/AdmissionModal";
import DisclosureHeader from "./DisclosureHeader";
import GeneralInfoSection from "./GeneralInfoSection";
import DocumentsSection from "./DocumentsSection";
import AcademicsSection from "./AcademicsSection";
import InfrastructureSection from "./InfrastructureSection";
import {
  allDisclosureItems,
  DisclosureCategory,
} from "@/data/disclosureData";

export default function DisclosureClientView() {
  const [activeTab, setActiveTab] = useState<DisclosureCategory["id"]>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("table");
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  const totalCount = allDisclosureItems.length;

  const showGeneral = activeTab === "all" || activeTab === "general";
  const showDocuments = activeTab === "all" || activeTab === "documents";
  const showAcademics = activeTab === "all" || activeTab === "academics";
  const showInfrastructure = activeTab === "all" || activeTab === "infrastructure";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-[#FFD907] selection:text-[#001744]">
      {/* 1. TOP BAR & NAVIGATION */}
      <Navbar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      <main className="flex-grow">
        {/* 2. HEADER WITH TITLE, CODES, TABS, SEARCH & TOGGLE */}
        <DisclosureHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
          totalCount={totalCount}
        />

        {/* 3. DISCLOSURE CONTENT SECTIONS */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
          {/* SECTION A: GENERAL INFORMATION */}
          {showGeneral && (
            <section id="section-general">
              <GeneralInfoSection
                viewMode={viewMode}
                searchFilter={searchQuery}
              />
            </section>
          )}

          {/* SECTION B: DOCUMENTS AND INFORMATION */}
          {showDocuments && (
            <section id="section-documents">
              <DocumentsSection
                viewMode={viewMode}
                searchFilter={searchQuery}
              />
            </section>
          )}

          {/* SECTION C: RESULT AND ACADEMICS */}
          {showAcademics && (
            <section id="section-academics">
              <AcademicsSection
                viewMode={viewMode}
                searchFilter={searchQuery}
              />
            </section>
          )}

          {/* SECTION D: SCHOOL INFRASTRUCTURE */}
          {showInfrastructure && (
            <section id="section-infrastructure">
              <InfrastructureSection
                viewMode={viewMode}
                searchFilter={searchQuery}
              />
            </section>
          )}
        </div>
      </main>

      {/* 4. FOOTER & STICKY WIDGETS */}
      <Footer />
      <WhatsAppWidget />

      {/* 5. ADMISSION ENQUIRY MODAL */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </div>
  );
}
