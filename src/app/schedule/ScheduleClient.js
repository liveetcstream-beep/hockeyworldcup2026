"use client";

import React, { useState, useMemo } from "react";

const ALL_MATCHES = [
  // ==================== AUGUST 15, 2026 (Day 1) ====================
  { id: 1, date: "August 15, 2026", timeCET: "11:30", teamA: "India", flagA: "in", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 2, date: "August 15, 2026", timeCET: "13:00", teamA: "Germany", flagA: "de", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 3, date: "August 15, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "Chile", flagB: "cl", gender: "Women", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 4, date: "August 15, 2026", timeCET: "15:30", teamA: "England", flagA: "gb-eng", teamB: "Pakistan", flagB: "pk", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 5, date: "August 15, 2026", timeCET: "15:30", teamA: "Argentina", flagA: "ar", teamB: "England", flagB: "gb-eng", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 6, date: "August 15, 2026", timeCET: "18:00", teamA: "Belgium", flagA: "be", teamB: "France", flagB: "fr", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 7, date: "August 15, 2026", timeCET: "18:00", teamA: "Belgium", flagA: "be", teamB: "China", flagB: "cn", gender: "Women", pool: "Pool A", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 8, date: "August 15, 2026", timeCET: "20:30", teamA: "Germany", flagA: "de", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool B", venue: "Wagener Stadium, Amstelveen (NL)" },

  // ==================== AUGUST 16, 2026 (Day 2) ====================
  { id: 9, date: "August 16, 2026", timeCET: "11:30", teamA: "Australia", flagA: "au", teamB: "Ireland", flagB: "ie", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 10, date: "August 16, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 11, date: "August 16, 2026", timeCET: "13:00", teamA: "United States", flagA: "us", teamB: "Spain", flagB: "es", gender: "Women", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 12, date: "August 16, 2026", timeCET: "15:30", teamA: "Spain", flagA: "es", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 13, date: "August 16, 2026", timeCET: "15:30", teamA: "New Zealand", flagA: "nz", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 14, date: "August 16, 2026", timeCET: "18:00", teamA: "Argentina", flagA: "ar", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 15, date: "August 16, 2026", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 16, date: "August 16, 2026", timeCET: "20:30", teamA: "South Korea", flagA: "kr", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool D", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 17, 2026 (Day 3) ====================
  { id: 17, date: "August 17, 2026", timeCET: "11:30", teamA: "France", flagA: "fr", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 18, date: "August 17, 2026", timeCET: "13:00", teamA: "Germany", flagA: "de", teamB: "Belgium", flagB: "be", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 19, date: "August 17, 2026", timeCET: "13:00", teamA: "China", flagA: "cn", teamB: "Chile", flagB: "cl", gender: "Women", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 20, date: "August 17, 2026", timeCET: "15:30", teamA: "Pakistan", flagA: "pk", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 21, date: "August 17, 2026", timeCET: "15:30", teamA: "Netherlands", flagA: "nl", teamB: "Belgium", flagB: "be", gender: "Women", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 22, date: "August 17, 2026", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 23, date: "August 17, 2026", timeCET: "18:00", teamA: "England", flagA: "gb-eng", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 24, date: "August 17, 2026", timeCET: "20:30", teamA: "Argentina", flagA: "ar", teamB: "Germany", flagB: "de", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 18, 2026 (Day 4) ====================
  { id: 25, date: "August 18, 2026", timeCET: "11:30", teamA: "New Zealand", flagA: "nz", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 26, date: "August 18, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "Argentina", flagB: "ar", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 27, date: "August 18, 2026", timeCET: "13:00", teamA: "United States", flagA: "us", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 28, date: "August 18, 2026", timeCET: "15:30", teamA: "India", flagA: "in", teamB: "England", flagB: "gb-eng", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 29, date: "August 18, 2026", timeCET: "15:30", teamA: "New Zealand", flagA: "nz", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 30, date: "August 18, 2026", timeCET: "18:00", teamA: "England", flagA: "gb-eng", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 31, date: "August 18, 2026", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "Spain", flagB: "es", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 32, date: "August 18, 2026", timeCET: "20:30", teamA: "Ireland", flagA: "ie", teamB: "South Korea", flagB: "kr", gender: "Women", pool: "Pool D", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 19, 2026 (Day 5) ====================
  { id: 33, date: "August 19, 2026", timeCET: "11:30", teamA: "Belgium", flagA: "be", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 34, date: "August 19, 2026", timeCET: "13:00", teamA: "Germany", flagA: "de", teamB: "France", flagB: "fr", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 35, date: "August 19, 2026", timeCET: "13:00", teamA: "Belgium", flagA: "be", teamB: "Chile", flagB: "cl", gender: "Women", pool: "Pool A", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 36, date: "August 19, 2026", timeCET: "15:30", teamA: "India", flagA: "in", teamB: "Pakistan", flagB: "pk", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 37, date: "August 19, 2026", timeCET: "15:30", teamA: "Netherlands", flagA: "nl", teamB: "China", flagB: "cn", gender: "Women", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 38, date: "August 19, 2026", timeCET: "18:00", teamA: "Ireland", flagA: "ie", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 39, date: "August 19, 2026", timeCET: "18:00", teamA: "Germany", flagA: "de", teamB: "England", flagB: "gb-eng", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 40, date: "August 19, 2026", timeCET: "20:30", teamA: "Argentina", flagA: "ar", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool B", venue: "Wagener Stadium, Amstelveen (NL)" },

  // ==================== AUGUST 20, 2026 (Day 6) ====================
  { id: 41, date: "August 20, 2026", timeCET: "11:30", teamA: "Argentina", flagA: "ar", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 42, date: "August 20, 2026", timeCET: "13:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 43, date: "August 20, 2026", timeCET: "13:00", teamA: "Spain", flagA: "es", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool C", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 44, date: "August 20, 2026", timeCET: "15:30", teamA: "Australia", flagA: "au", teamB: "Spain", flagB: "es", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 45, date: "August 20, 2026", timeCET: "15:30", teamA: "New Zealand", flagA: "nz", teamB: "South Korea", flagB: "kr", gender: "Women", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 46, date: "August 20, 2026", timeCET: "18:00", teamA: "England", flagA: "gb-eng", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 47, date: "August 20, 2026", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "United States", flagB: "us", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 48, date: "August 20, 2026", timeCET: "20:30", teamA: "Ireland", flagA: "ie", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool D", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 21, 2026 (Day 7 - Knockouts & Classifications) ====================
  { id: 49, date: "August 21, 2026", timeCET: "11:30", teamA: "2nd Pool A", flagA: "un", teamB: "3rd Pool B", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 50, date: "August 21, 2026", timeCET: "13:00", teamA: "2nd Pool B", flagA: "un", teamB: "3rd Pool A", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 51, date: "August 21, 2026", timeCET: "13:00", teamA: "4th Pool A", flagA: "un", teamB: "4th Pool B", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 52, date: "August 21, 2026", timeCET: "15:30", teamA: "2nd Pool A", flagA: "un", teamB: "3rd Pool B", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 53, date: "August 21, 2026", timeCET: "15:30", teamA: "4th Pool C", flagA: "un", teamB: "4th Pool D", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 54, date: "August 21, 2026", timeCET: "18:00", teamA: "2nd Pool B", flagA: "un", teamB: "3rd Pool A", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 55, date: "August 21, 2026", timeCET: "18:00", teamA: "4th Pool A", flagA: "un", teamB: "4th Pool B", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 56, date: "August 21, 2026", timeCET: "20:30", teamA: "4th Pool C", flagA: "un", teamB: "4th Pool D", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 22, 2026 (Day 8) ====================
  { id: 57, date: "August 22, 2026", timeCET: "11:30", teamA: "2nd Pool C", flagA: "un", teamB: "3rd Pool D", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 58, date: "August 22, 2026", timeCET: "13:00", teamA: "2nd Pool D", flagA: "un", teamB: "3rd Pool C", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 59, date: "August 22, 2026", timeCET: "13:00", teamA: "1st Pool A", flagA: "un", teamB: "Winner Crossover 3", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 60, date: "August 22, 2026", timeCET: "15:30", teamA: "2nd Pool C", flagA: "un", teamB: "3rd Pool D", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 61, date: "August 22, 2026", timeCET: "15:30", teamA: "1st Pool B", flagA: "un", teamB: "Winner Crossover 4", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 62, date: "August 22, 2026", timeCET: "18:00", teamA: "2nd Pool D", flagA: "un", teamB: "3rd Pool C", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 63, date: "August 22, 2026", timeCET: "18:00", teamA: "1st Pool A", flagA: "un", teamB: "Winner Crossover 3", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 64, date: "August 22, 2026", timeCET: "20:30", teamA: "1st Pool B", flagA: "un", teamB: "Winner Crossover 4", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 23, 2026 (Day 9) ====================
  { id: 65, date: "August 23, 2026", timeCET: "13:00", teamA: "Winner Pool C", flagA: "un", teamB: "Winner Crossover 1", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 66, date: "August 23, 2026", timeCET: "15:30", teamA: "Winner Pool D", flagA: "un", teamB: "Winner Crossover 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 67, date: "August 23, 2026", timeCET: "18:00", teamA: "Winner Pool C", flagA: "un", teamB: "Winner Crossover 1", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 68, date: "August 23, 2026", timeCET: "20:30", teamA: "Winner Pool D", flagA: "un", teamB: "Winner Crossover 2", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },

  // ==================== AUGUST 27, 2026 (Day 10 - Semifinals) ====================
  { id: 69, date: "August 27, 2026", timeCET: "15:30", teamA: "Winner QF 1", flagA: "un", teamB: "Winner QF 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 70, date: "August 27, 2026", timeCET: "18:00", teamA: "Winner QF 3", flagA: "un", teamB: "Winner QF 4", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 71, date: "August 27, 2026", timeCET: "18:00", teamA: "Winner QF 1", flagA: "un", teamB: "Winner QF 2", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 72, date: "August 27, 2026", timeCET: "20:30", teamA: "Winner QF 3", flagA: "un", teamB: "Winner QF 4", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },

  // ==================== AUGUST 29, 2026 (Day 11) ====================
  { id: 73, date: "August 29, 2026", timeCET: "16:00", teamA: "Loser SF 1", flagA: "un", teamB: "Loser SF 2", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 74, date: "August 29, 2026", timeCET: "19:00", teamA: "Winner SF 1", flagA: "un", teamB: "Winner SF 2", flagB: "un", gender: "Women", pool: "Knockouts", venue: "Wagener Stadium, Amstelveen (NL)" },

  // ==================== AUGUST 30, 2026 (Day 12) ====================
  { id: 75, date: "August 30, 2026", timeCET: "16:00", teamA: "Loser SF 1", flagA: "un", teamB: "Loser SF 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 76, date: "August 30, 2026", timeCET: "19:00", teamA: "Winner SF 1", flagA: "un", teamB: "Winner SF 2", flagB: "un", gender: "Men", pool: "Knockouts", venue: "Belfius Hockey Arena, Wavre (BE)" }
];

const WARMUP_MATCHES = [
  { id: 101, date: "August 10, 2026", timeCET: "14:00", teamA: "India", flagA: "in", teamB: "Germany", flagB: "de", gender: "Men", pool: "Warm-Up", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 102, date: "August 10, 2026", timeCET: "17:00", teamA: "Netherlands", flagA: "nl", teamB: "Argentina", flagB: "ar", gender: "Women", pool: "Warm-Up", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 103, date: "August 11, 2026", timeCET: "15:00", teamA: "Belgium", flagA: "be", teamB: "Australia", flagB: "au", gender: "Men", pool: "Warm-Up", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 104, date: "August 11, 2026", timeCET: "18:00", teamA: "England", flagA: "gb-eng", teamB: "Spain", flagB: "es", gender: "Men", pool: "Warm-Up", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 105, date: "August 12, 2026", timeCET: "14:00", teamA: "India", flagA: "in", teamB: "Australia", flagB: "au", gender: "Women", pool: "Warm-Up", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 106, date: "August 12, 2026", timeCET: "17:00", teamA: "Netherlands", flagA: "nl", teamB: "Belgium", flagB: "be", gender: "Men", pool: "Warm-Up", venue: "Wagener Stadium, Amstelveen (NL)" },
  { id: 107, date: "August 13, 2026", timeCET: "15:00", teamA: "Germany", flagA: "de", teamB: "Argentina", flagB: "ar", gender: "Men", pool: "Warm-Up", venue: "Belfius Hockey Arena, Wavre (BE)" },
  { id: 108, date: "August 13, 2026", timeCET: "18:00", teamA: "England", flagA: "gb-eng", teamB: "United States", flagB: "us", gender: "Women", pool: "Warm-Up", venue: "Belfius Hockey Arena, Wavre (BE)" }
];

const ITEMS_PER_PAGE = 15;

export default function ScheduleClient() {
  const [selectedTimezone, setSelectedTimezone] = useState("CET");
  const [genderFilter, setGenderFilter] = useState("All");
  const [poolFilter, setPoolFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("official");

  // Timezone Converter Logic
  const getConvertedTime = (timeCET, tz) => {
    if (tz === "CET") return `${timeCET} CET`;
    const [h, m] = timeCET.split(":").map(Number);
    if (tz === "PST") {
      const newH = (h + 3) % 24;
      return `${String(newH).padStart(2, "0")}:${String(m).padStart(2, "0")} PST`;
    }
    if (tz === "IST") {
      let newM = m + 30;
      let newH = h + 3;
      if (newM >= 60) {
        newM -= 60;
        newH += 1;
      }
      newH = newH % 24;
      return `${String(newH).padStart(2, "0")}:${String(newM).padStart(2, "0")} IST`;
    }
    if (tz === "EST") {
      let newH = h - 6;
      if (newH < 0) newH += 24;
      const period = newH >= 12 ? "PM" : "AM";
      const displayH = newH % 12 === 0 ? 12 : newH % 12;
      return `${String(displayH).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period} EDT`;
    }
    return timeCET;
  };

  const getFlagUrl = (flagCode) => {
    if (flagCode === "un") return "https://flagcdn.com/w40/un.png";
    return `https://flagcdn.com/w40/${flagCode}.png`;
  };

  // Filter & Search matches
  const filteredMatches = useMemo(() => {
    const list = ALL_MATCHES.filter((match) => {
      const matchesGender = genderFilter === "All" || match.gender === genderFilter;
      const matchesPool = poolFilter === "All" || match.pool === poolFilter;
      const matchesSearch = 
        match.teamA.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.teamB.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.venue.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesGender && matchesPool && matchesSearch;
    });

    // Chronological date & time sorting
    return list.sort((a, b) => {
      const dayA = parseInt(a.date.match(/\d+/)[0]);
      const dayB = parseInt(b.date.match(/\d+/)[0]);
      if (dayA !== dayB) return dayA - dayB;
      
      const [hA, mA] = a.timeCET.split(":").map(Number);
      const [hB, mB] = b.timeCET.split(":").map(Number);
      return (hA * 60 + mA) - (hB * 60 + mB);
    });
  }, [genderFilter, poolFilter, searchTerm]);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter, poolFilter, searchTerm]);

  // Pagination bounds
  const totalPages = Math.ceil(filteredMatches.length / ITEMS_PER_PAGE) || 1;
  const paginatedMatches = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMatches.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMatches, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* Interactive Timezone & Search Bar Row */}
      <section className="mb-8">
        <div className="timezone-card" style={{ padding: "1.8rem" }}>
          <div className="timezone-header" style={{ marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
            <h3 className="text-lg font-bold text-white">Filter & Search Fixtures</h3>
            <div className="timezone-select-wrapper">
              <span className="timezone-label-text">Select Timezone:</span>
              <select 
                className="timezone-select" 
                value={selectedTimezone} 
                onChange={(e) => setSelectedTimezone(e.target.value)}
                aria-label="Select Timezone"
              >
                <option value="CET">Central European Time (CET)</option>
                <option value="IST">Indian Standard Time (IST)</option>
                <option value="PST">Pakistan Standard Time (PST)</option>
                <option value="EST">US Eastern Time (EDT)</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", width: "100%" }}>
            {/* Search Bar */}
            <div style={{ flex: "1 1 300px" }}>
              <input
                type="text"
                placeholder="🔍 Search by team name or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            {/* Gender Filter */}
            <div style={{ flex: "1 1 150px" }}>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <option value="All">All Genders</option>
                <option value="Men">Men's Tournament</option>
                <option value="Women">Women's Tournament</option>
              </select>
            </div>

            {/* Pool Filter */}
            <div style={{ flex: "1 1 150px" }}>
              <select
                value={poolFilter}
                onChange={(e) => setPoolFilter(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <option value="All">All Stages / Pools</option>
                <option value="Pool A">Pool A</option>
                <option value="Pool B">Pool B</option>
                <option value="Pool C">Pool C</option>
                <option value="Pool D">Pool D</option>
                <option value="Knockouts">Knockouts / Finals</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Switcher for Official vs Warm-Up Matches */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          onClick={() => setActiveTab("official")}
          style={{
            flex: "1",
            padding: "1rem",
            borderRadius: "12px",
            background: activeTab === "official" ? "linear-gradient(135deg, var(--primary) 0%, #0ea5e9 100%)" : "var(--bg-secondary)",
            border: activeTab === "official" ? "none" : "1px solid var(--border-color)",
            color: "#fff",
            fontWeight: "800",
            fontSize: "0.95rem",
            cursor: "pointer",
            boxShadow: activeTab === "official" ? "0 4px 15px rgba(244, 63, 94, 0.25)" : "none",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.03em"
          }}
        >
          🏆 Official Tournament Fixtures
        </button>
        <button
          onClick={() => setActiveTab("warmup")}
          style={{
            flex: "1",
            padding: "1rem",
            borderRadius: "12px",
            background: activeTab === "warmup" ? "linear-gradient(135deg, var(--primary) 0%, #0ea5e9 100%)" : "var(--bg-secondary)",
            border: activeTab === "warmup" ? "none" : "1px solid var(--border-color)",
            color: "#fff",
            fontWeight: "800",
            fontSize: "0.95rem",
            cursor: "pointer",
            boxShadow: activeTab === "warmup" ? "0 4px 15px rgba(244, 63, 94, 0.25)" : "none",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.03em"
          }}
        >
          🏒 Pre-Tournament Warm-Up Matches
        </button>
      </div>

      {/* Fixtures List Section */}
      {activeTab === "official" ? (
        <section style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 className="text-xl font-bold text-white">Official Tournament Fixtures</h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>
              Showing {filteredMatches.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}-
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredMatches.length)} of {filteredMatches.length} matches
            </span>
          </div>

          {paginatedMatches.length === 0 ? (
            <div className="text-center py-12" style={{ background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border-color)", padding: "3rem 1rem" }}>
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>🏑</span>
              <h3 className="text-lg font-bold text-white mb-2">No Matches Found</h3>
              <p className="text-sm text-slate-400">We couldn't find any matches matching your search or filters. Try adjusting your search query.</p>
            </div>
          ) : (
            <div className="schedule-grid" style={{ display: "grid", gap: "1.5rem" }}>
              {paginatedMatches.map((match) => (
                <div key={match.id} className="match-card">
                  <div className="match-meta">
                    <span>🗓️ {match.date}</span>
                    <span className="text-sky-400 font-bold">⏱️ Timings: {getConvertedTime(match.timeCET, selectedTimezone)}</span>
                  </div>
                  <div className="match-teams-container">
                    <div className="team-display">
                      <div className="team-badge-wrap">
                        <img src={getFlagUrl(match.flagA)} width="36" height="24" alt={`${match.teamA} flag`} style={{ borderRadius: "4px" }} />
                      </div>
                      <span className="team-name">{match.teamA} ({match.gender})</span>
                    </div>
                    <div className="vs-badge">VS</div>
                    <div className="team-display">
                      <div className="team-badge-wrap">
                        <img src={getFlagUrl(match.flagB)} width="36" height="24" alt={`${match.teamB} flag`} style={{ borderRadius: "4px" }} />
                      </div>
                      <span className="team-name">{match.teamB} ({match.gender})</span>
                    </div>
                  </div>
                  <div className="match-details-row">
                    <span className="match-venue">🏟️ {match.venue}</span>
                    <span className="channel-tag">{match.pool}</span>
                  </div>
                  <div className="match-actions">
                    <a href="/broadcasters" className="match-btn match-btn-primary">Watch Live</a>
                    <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {filteredMatches.length > ITEMS_PER_PAGE && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "2rem", marginBottom: "3rem" }}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                style={{
                  background: currentPage === 1 ? "rgba(255,255,255,0.02)" : "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: currentPage === 1 ? "var(--text-muted)" : "#fff",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                ← Previous
              </button>
              
              <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: "600" }}>
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                style={{
                  background: currentPage === totalPages ? "rgba(255,255,255,0.02)" : "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  color: currentPage === totalPages ? "var(--text-muted)" : "#fff",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Next →
              </button>
            </div>
          )}
        </section>
      ) : (
        <section style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2 className="text-xl font-bold text-white">Pre-Tournament Warm-Up Matches</h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>
              Showing {WARMUP_MATCHES.length} matches
            </span>
          </div>

          <div className="schedule-grid" style={{ display: "grid", gap: "1.5rem" }}>
            {WARMUP_MATCHES.map((match) => (
              <div key={match.id} className="match-card">
                <div className="match-meta">
                  <span>🗓️ {match.date}</span>
                  <span className="text-sky-400 font-bold">⏱️ Timings: {getConvertedTime(match.timeCET, selectedTimezone)}</span>
                </div>
                <div className="match-teams-container">
                  <div className="team-display">
                    <div className="team-badge-wrap">
                      <img src={getFlagUrl(match.flagA)} width="36" height="24" alt={`${match.teamA} flag`} style={{ borderRadius: "4px" }} />
                    </div>
                    <span className="team-name">{match.teamA} ({match.gender})</span>
                  </div>
                  <div className="vs-badge">VS</div>
                  <div className="team-display">
                    <div className="team-badge-wrap">
                      <img src={getFlagUrl(match.flagB)} width="36" height="24" alt={`${match.teamB} flag`} style={{ borderRadius: "4px" }} />
                    </div>
                    <span className="team-name">{match.teamB} ({match.gender})</span>
                  </div>
                </div>
                <div className="match-details-row">
                  <span className="match-venue">🏟️ {match.venue}</span>
                  <span className="channel-tag">{match.pool}</span>
                </div>
                <div className="match-actions">
                  <a href="/broadcasters" className="match-btn match-btn-primary">Watch Live</a>
                  <a href="https://fih.hockey" target="_blank" rel="noopener noreferrer" className="match-btn match-btn-secondary">Official Stats</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PDF Schedule Download Section for SEO */}
      <section style={{ 
        background: "rgba(14, 165, 233, 0.05)", 
        border: "1px dashed var(--primary)", 
        borderRadius: "16px", 
        padding: "2.2rem 1.5rem", 
        textAlign: "center", 
        marginTop: "1rem", 
        marginBottom: "3rem" 
      }}>
        <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>📄</span>
        <h3 className="text-xl font-bold text-white mb-2" style={{ fontStyle: "italic" }}>Save Full Hockey World Cup 2026 Schedule (PDF)</h3>
        <p className="text-sm text-slate-300" style={{ maxWidth: "580px", margin: "0 auto 1.5rem auto", lineHeight: "1.6" }}>
          Need a print-friendly copy of the 2026 match schedule? You can download, print, or save the complete fixture list (with Amstelveen and Wavre stadium codes) directly as a PDF file on your device.
        </p>
        <button 
          onClick={() => window.print()} 
          className="view-more-btn"
          style={{ cursor: "pointer", border: "none", display: "inline-flex" }}
        >
          💾 Print & Save PDF Fixtures
        </button>
      </section>

      {/* PRINT-ONLY CONTAINER FOR SAVING/PRINTING BEAUTIFUL PDF */}
      <div className="print-only-schedule">
        <div className="print-header">
          <h1>FIH Hockey World Cup 2026</h1>
          <p>Official Tournament Fixtures & Match Schedule</p>
          <p style={{ fontSize: "0.85rem", marginTop: "8px", opacity: 0.9 }}>
            Co-Hosted by Belgium & Netherlands | Official Timings in CET (Central European Time)
          </p>
        </div>

        {/* Men's Section */}
        <div className="print-section-title">Men's Tournament Matches</div>
        <div className="print-grid">
          {ALL_MATCHES.filter(m => m.gender === "Men").map(match => (
            <div key={match.id} className="print-match-card">
              <div className="print-match-meta">
                <span>🗓️ {match.date}</span>
                <span className="print-match-time">⏱️ {match.timeCET} CET</span>
              </div>
              <div className="print-match-teams">
                <div className="print-team">
                  <img src={getFlagUrl(match.flagA)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamA}</span>
                </div>
                <span className="print-vs">VS</span>
                <div className="print-team">
                  <img src={getFlagUrl(match.flagB)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamB}</span>
                </div>
              </div>
              <div className="print-match-footer">
                <span className="print-venue">🏟️ {match.venue}</span>
                <span>{match.pool}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Women's Section */}
        <div className="print-section-title" style={{ pageBreakBefore: "always" }}>Women's Tournament Matches</div>
        <div className="print-grid">
          {ALL_MATCHES.filter(m => m.gender === "Women").map(match => (
            <div key={match.id} className="print-match-card">
              <div className="print-match-meta">
                <span>🗓️ {match.date}</span>
                <span className="print-match-time">⏱️ {match.timeCET} CET</span>
              </div>
              <div className="print-match-teams">
                <div className="print-team">
                  <img src={getFlagUrl(match.flagA)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamA}</span>
                </div>
                <span className="print-vs">VS</span>
                <div className="print-team">
                  <img src={getFlagUrl(match.flagB)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamB}</span>
                </div>
              </div>
              <div className="print-match-footer">
                <span className="print-venue">🏟️ {match.venue}</span>
                <span>{match.pool}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Warm-Up Section */}
        <div className="print-section-title" style={{ pageBreakBefore: "always" }}>Pre-Tournament Warm-Up Matches</div>
        <div className="print-grid">
          {WARMUP_MATCHES.map(match => (
            <div key={match.id} className="print-match-card">
              <div className="print-match-meta">
                <span>🗓️ {match.date}</span>
                <span className="print-match-time">⏱️ {match.timeCET} CET</span>
              </div>
              <div className="print-match-teams">
                <div className="print-team">
                  <img src={getFlagUrl(match.flagA)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamA}</span>
                </div>
                <span className="print-vs">VS</span>
                <div className="print-team">
                  <img src={getFlagUrl(match.flagB)} width="20" height="13" alt="" style={{ borderRadius: "2px" }} />
                  <span>{match.teamB}</span>
                </div>
              </div>
              <div className="print-match-footer">
                <span className="print-venue">🏟️ {match.venue}</span>
                <span>{match.pool}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
