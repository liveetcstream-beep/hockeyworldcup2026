/**
 * Official FIH Hockey World Cup 2026 Master Schedule (100 Matches)
 * Belgium (Wavre - Belfius Hockey Arena) & Netherlands (Amstelveen - Wagener Stadium)
 * 
 * Timezone: Central European Summer Time (CEST, UTC+2) — Official Venue Local Time
 * Match Codes: W1–W50 (Women's Tournament), M1–M50 (Men's Tournament)
 */

export const ALL_MATCHES = [
  // ==================== WOMEN'S TOURNAMENT FIXTURES (W1 to W50) ====================
  { id: 1, matchCode: "W1", date: "August 15, 2026", timeCEST: "10:00", timeCET: "10:00", teamA: "Australia", flagA: "au", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 2, matchCode: "W2", date: "August 15, 2026", timeCEST: "11:30", timeCET: "11:30", teamA: "Germany", flagA: "de", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 3, matchCode: "W3", date: "August 15, 2026", timeCEST: "16:00", timeCET: "16:00", teamA: "Netherlands", flagA: "nl", teamB: "Chile", flagB: "cl", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 4, matchCode: "W4", date: "August 15, 2026", timeCEST: "17:30", timeCET: "17:30", teamA: "Argentina", flagA: "ar", teamB: "United States", flagB: "us", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 5, matchCode: "W5", date: "August 16, 2026", timeCEST: "10:00", timeCET: "10:00", teamA: "England", flagA: "gb-eng", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 6, matchCode: "W6", date: "August 16, 2026", timeCEST: "16:00", timeCET: "16:00", teamA: "China", flagA: "cn", teamB: "India", flagB: "in", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 7, matchCode: "W7", date: "August 16, 2026", timeCEST: "17:30", timeCET: "17:30", teamA: "Belgium", flagA: "be", teamB: "New Zealand", flagB: "nz", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 8, matchCode: "W8", date: "August 16, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "Spain", flagA: "es", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 9, matchCode: "W9", date: "August 17, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "Chile", flagA: "cl", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 10, matchCode: "W10", date: "August 17, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "United States", flagA: "us", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 11, matchCode: "W11", date: "August 17, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "Germany", flagA: "de", teamB: "Argentina", flagB: "ar", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 12, matchCode: "W12", date: "August 17, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "Australia", flagA: "au", teamB: "Netherlands", flagB: "nl", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 13, matchCode: "W13", date: "August 18, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "New Zealand", flagA: "nz", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 14, matchCode: "W14", date: "August 18, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "England", flagA: "gb-eng", teamB: "China", flagB: "cn", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 15, matchCode: "W15", date: "August 18, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "India", flagA: "in", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 16, matchCode: "W16", date: "August 18, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "Spain", flagA: "es", teamB: "Belgium", flagB: "be", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 17, matchCode: "W17", date: "August 19, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "Chile", flagA: "cl", teamB: "Australia", flagB: "au", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 18, matchCode: "W18", date: "August 19, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "Argentina", flagA: "ar", teamB: "Scotland", flagB: "gb-sct", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 19, matchCode: "W19", date: "August 19, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "United States", flagA: "us", teamB: "Germany", flagB: "de", gender: "Women", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 20, matchCode: "W20", date: "August 19, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Women", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 21, matchCode: "W21", date: "August 20, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "China", flagA: "cn", teamB: "South Africa", flagB: "za", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 22, matchCode: "W22", date: "August 20, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "New Zealand", flagA: "nz", teamB: "Spain", flagB: "es", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 23, matchCode: "W23", date: "August 20, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "India", flagA: "in", teamB: "England", flagB: "gb-eng", gender: "Women", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 24, matchCode: "W24", date: "August 20, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "Belgium", flagA: "be", teamB: "Ireland", flagB: "ie", gender: "Women", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  // Second Group Stage (Pools E, F, G, H)
  { id: 25, matchCode: "W25", date: "August 21, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "3rd Pool D", flagA: "un", teamB: "4th Pool A", flagB: "un", gender: "Women", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 26, matchCode: "W26", date: "August 21, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "3rd Pool A", flagA: "un", teamB: "4th Pool D", flagB: "un", gender: "Women", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 27, matchCode: "W27", date: "August 21, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "1st Pool D", flagA: "un", teamB: "2nd Pool A", flagB: "un", gender: "Women", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 28, matchCode: "W28", date: "August 21, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "1st Pool A", flagA: "un", teamB: "2nd Pool D", flagB: "un", gender: "Women", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 29, matchCode: "W29", date: "August 22, 2026", timeCEST: "11:30", timeCET: "11:30", teamA: "3rd Pool C", flagA: "un", teamB: "4th Pool B", flagB: "un", gender: "Women", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 30, matchCode: "W30", date: "August 22, 2026", timeCEST: "14:30", timeCET: "14:30", teamA: "3rd Pool B", flagA: "un", teamB: "4th Pool C", flagB: "un", gender: "Women", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 31, matchCode: "W31", date: "August 22, 2026", timeCEST: "17:30", timeCET: "17:30", teamA: "1st Pool C", flagA: "un", teamB: "2nd Pool B", flagB: "un", gender: "Women", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 32, matchCode: "W32", date: "August 22, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "1st Pool B", flagA: "un", teamB: "2nd Pool C", flagB: "un", gender: "Women", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 33, matchCode: "W33", date: "August 23, 2026", timeCEST: "10:00", timeCET: "10:00", teamA: "4th Pool A", flagA: "un", teamB: "4th Pool D", flagB: "un", gender: "Women", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 34, matchCode: "W34", date: "August 23, 2026", timeCEST: "13:00", timeCET: "13:00", teamA: "3rd Pool A", flagA: "un", teamB: "3rd Pool D", flagB: "un", gender: "Women", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 35, matchCode: "W35", date: "August 23, 2026", timeCEST: "16:00", timeCET: "16:00", teamA: "1st Pool A", flagA: "un", teamB: "1st Pool D", flagB: "un", gender: "Women", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 36, matchCode: "W36", date: "August 23, 2026", timeCEST: "19:00", timeCET: "19:00", teamA: "2nd Pool A", flagA: "un", teamB: "2nd Pool D", flagB: "un", gender: "Women", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 37, matchCode: "W37", date: "August 24, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "4th Pool C", flagA: "un", teamB: "4th Pool B", flagB: "un", gender: "Women", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 38, matchCode: "W38", date: "August 24, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "3rd Pool C", flagA: "un", teamB: "3rd Pool B", flagB: "un", gender: "Women", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 39, matchCode: "W39", date: "August 24, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "2nd Pool C", flagA: "un", teamB: "2nd Pool B", flagB: "un", gender: "Women", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 40, matchCode: "W40", date: "August 24, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "1st Pool C", flagA: "un", teamB: "1st Pool B", flagB: "un", gender: "Women", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  // Women's Classification & Semi-Finals (August 27, 2026)
  { id: 41, matchCode: "W41", date: "August 27, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "3rd Pool G", flagA: "un", teamB: "3rd Pool H", flagB: "un", gender: "Women", pool: "13th-16th Playoff", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 42, matchCode: "W42", date: "August 27, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "4th Pool G", flagA: "un", teamB: "4th Pool H", flagB: "un", gender: "Women", pool: "15th-16th Match", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 43, matchCode: "W43", date: "August 27, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "2nd Pool G", flagA: "un", teamB: "2nd Pool H", flagB: "un", gender: "Women", pool: "11th-12th Match", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 44, matchCode: "W44", date: "August 27, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "1st Pool G", flagA: "un", teamB: "1st Pool H", flagB: "un", gender: "Women", pool: "9th-10th Match", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 45, matchCode: "W45", date: "August 27, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "3rd Pool E", flagA: "un", teamB: "3rd Pool F", flagB: "un", gender: "Women", pool: "5th-8th Playoff", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 46, matchCode: "W46", date: "August 27, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "4th Pool E", flagA: "un", teamB: "4th Pool F", flagB: "un", gender: "Women", pool: "7th-8th Match", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 47, matchCode: "W47", date: "August 27, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "1st Pool E", flagA: "un", teamB: "2nd Pool F", flagB: "un", gender: "Women", pool: "Semi-Final 1", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 48, matchCode: "W48", date: "August 27, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "1st Pool F", flagA: "un", teamB: "2nd Pool E", flagB: "un", gender: "Women", pool: "Semi-Final 2", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  // Women's Medal Matches (Saturday, August 29, 2026 — Wagener Stadium)
  { id: 49, matchCode: "W49", date: "August 29, 2026", timeCEST: "13:00", timeCET: "13:00", teamA: "Loser Match W47", flagA: "un", teamB: "Loser Match W48", flagB: "un", gender: "Women", pool: "Bronze Medal Match 🥉", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 50, matchCode: "W50", date: "August 29, 2026", timeCEST: "16:00", timeCET: "16:00", teamA: "Winner Match W47", flagA: "un", teamB: "Winner Match W48", flagB: "un", gender: "Women", pool: "Grand Final 🏆", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  // ==================== MEN'S TOURNAMENT FIXTURES (M1 to M50) ====================
  { id: 51, matchCode: "M1", date: "August 15, 2026", timeCEST: "13:00", timeCET: "13:00", teamA: "India", flagA: "in", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 52, matchCode: "M2", date: "August 15, 2026", timeCEST: "14:30", timeCET: "14:30", teamA: "Germany", flagA: "de", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 53, matchCode: "M3", date: "August 15, 2026", timeCEST: "19:00", timeCET: "19:00", teamA: "England", flagA: "gb-eng", teamB: "Pakistan", flagB: "pk", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 54, matchCode: "M4", date: "August 15, 2026", timeCEST: "21:00", timeCET: "21:00", teamA: "Belgium", flagA: "be", teamB: "France", flagB: "fr", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 55, matchCode: "M5", date: "August 16, 2026", timeCEST: "11:30", timeCET: "11:30", teamA: "Australia", flagA: "au", teamB: "Ireland", flagB: "ie", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 56, matchCode: "M6", date: "August 16, 2026", timeCEST: "14:30", timeCET: "14:30", teamA: "Spain", flagA: "es", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 57, matchCode: "M7", date: "August 16, 2026", timeCEST: "16:00", timeCET: "16:00", teamA: "Netherlands", flagA: "nl", teamB: "New Zealand", flagB: "nz", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 58, matchCode: "M8", date: "August 16, 2026", timeCEST: "19:00", timeCET: "19:00", teamA: "Argentina", flagA: "ar", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 59, matchCode: "M9", date: "August 17, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "Pakistan", flagA: "pk", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 60, matchCode: "M10", date: "August 17, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "France", flagA: "fr", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 61, matchCode: "M11", date: "August 17, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "India", flagA: "in", teamB: "England", flagB: "gb-eng", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 62, matchCode: "M12", date: "August 17, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "Germany", flagA: "de", teamB: "Belgium", flagB: "be", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 63, matchCode: "M13", date: "August 18, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "New Zealand", flagA: "nz", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 64, matchCode: "M14", date: "August 18, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "Spain", flagA: "es", teamB: "Australia", flagB: "au", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 65, matchCode: "M15", date: "August 18, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "Ireland", flagA: "ie", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 66, matchCode: "M16", date: "August 18, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "Argentina", flagA: "ar", teamB: "Netherlands", flagB: "nl", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 67, matchCode: "M17", date: "August 19, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "England", flagA: "gb-eng", teamB: "Wales", flagB: "gb-wls", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 68, matchCode: "M18", date: "August 19, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "Pakistan", flagA: "pk", teamB: "India", flagB: "in", gender: "Men", pool: "Pool D", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 69, matchCode: "M19", date: "August 19, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "France", flagA: "fr", teamB: "Germany", flagB: "de", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 70, matchCode: "M20", date: "August 19, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "Belgium", flagA: "be", teamB: "Malaysia", flagB: "my", gender: "Men", pool: "Pool B", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 71, matchCode: "M21", date: "August 20, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "Australia", flagA: "au", teamB: "South Africa", flagB: "za", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 72, matchCode: "M22", date: "August 20, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "New Zealand", flagA: "nz", teamB: "Argentina", flagB: "ar", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 73, matchCode: "M23", date: "August 20, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "Ireland", flagA: "ie", teamB: "Spain", flagB: "es", gender: "Men", pool: "Pool C", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 74, matchCode: "M24", date: "August 20, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "Netherlands", flagA: "nl", teamB: "Japan", flagB: "jp", gender: "Men", pool: "Pool A", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  // Second Group Stage (Men: Pools E, F, G, H)
  { id: 75, matchCode: "M25", date: "August 21, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "3rd Pool B", flagA: "un", teamB: "4th Pool C", flagB: "un", gender: "Men", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 76, matchCode: "M26", date: "August 21, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "3rd Pool C", flagA: "un", teamB: "4th Pool B", flagB: "un", gender: "Men", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 77, matchCode: "M27", date: "August 21, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "1st Pool C", flagA: "un", teamB: "2nd Pool B", flagB: "un", gender: "Men", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 78, matchCode: "M28", date: "August 21, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "1st Pool B", flagA: "un", teamB: "2nd Pool C", flagB: "un", gender: "Men", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 79, matchCode: "M29", date: "August 22, 2026", timeCEST: "10:00", timeCET: "10:00", teamA: "3rd Pool A", flagA: "un", teamB: "4th Pool D", flagB: "un", gender: "Men", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 80, matchCode: "M30", date: "August 22, 2026", timeCEST: "13:00", timeCET: "13:00", teamA: "3rd Pool D", flagA: "un", teamB: "4th Pool A", flagB: "un", gender: "Men", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 81, matchCode: "M31", date: "August 22, 2026", timeCEST: "16:00", timeCET: "16:00", teamA: "1st Pool A", flagA: "un", teamB: "2nd Pool D", flagB: "un", gender: "Men", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 82, matchCode: "M32", date: "August 22, 2026", timeCEST: "19:00", timeCET: "19:00", teamA: "1st Pool D", flagA: "un", teamB: "2nd Pool A", flagB: "un", gender: "Men", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  { id: 83, matchCode: "M33", date: "August 23, 2026", timeCEST: "11:30", timeCET: "11:30", teamA: "4th Pool B", flagA: "un", teamB: "4th Pool C", flagB: "un", gender: "Men", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 84, matchCode: "M34", date: "August 23, 2026", timeCEST: "14:30", timeCET: "14:30", teamA: "3rd Pool B", flagA: "un", teamB: "3rd Pool C", flagB: "un", gender: "Men", pool: "Pool H", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 85, matchCode: "M35", date: "August 23, 2026", timeCEST: "17:30", timeCET: "17:30", teamA: "1st Pool B", flagA: "un", teamB: "1st Pool C", flagB: "un", gender: "Men", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 86, matchCode: "M36", date: "August 23, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "2nd Pool B", flagA: "un", teamB: "2nd Pool C", flagB: "un", gender: "Men", pool: "Pool F", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  { id: 87, matchCode: "M37", date: "August 24, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "4th Pool A", flagA: "un", teamB: "4th Pool D", flagB: "un", gender: "Men", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 88, matchCode: "M38", date: "August 24, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "3rd Pool A", flagA: "un", teamB: "3rd Pool D", flagB: "un", gender: "Men", pool: "Pool G", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 89, matchCode: "M39", date: "August 24, 2026", timeCEST: "14:45", timeCET: "14:45", teamA: "2nd Pool A", flagA: "un", teamB: "2nd Pool D", flagB: "un", gender: "Men", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 90, matchCode: "M40", date: "August 24, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "1st Pool A", flagA: "un", teamB: "1st Pool D", flagB: "un", gender: "Men", pool: "Pool E", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },

  // Men's Classification & Semi-Finals (Friday, August 28, 2026)
  { id: 91, matchCode: "M41", date: "August 28, 2026", timeCEST: "09:30", timeCET: "09:30", teamA: "3rd Pool G", flagA: "un", teamB: "3rd Pool H", flagB: "un", gender: "Men", pool: "13th-16th Playoff", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 92, matchCode: "M42", date: "August 28, 2026", timeCEST: "11:00", timeCET: "11:00", teamA: "4th Pool G", flagA: "un", teamB: "4th Pool H", flagB: "un", gender: "Men", pool: "15th-16th Match", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 93, matchCode: "M43", date: "August 28, 2026", timeCEST: "12:30", timeCET: "12:30", teamA: "2nd Pool G", flagA: "un", teamB: "2nd Pool H", flagB: "un", gender: "Men", pool: "11th-12th Match", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 94, matchCode: "M44", date: "August 28, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "1st Pool G", flagA: "un", teamB: "1st Pool H", flagB: "un", gender: "Men", pool: "9th-10th Match", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 95, matchCode: "M45", date: "August 28, 2026", timeCEST: "15:00", timeCET: "15:00", teamA: "3rd Pool E", flagA: "un", teamB: "3rd Pool F", flagB: "un", gender: "Men", pool: "5th-8th Playoff", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 96, matchCode: "M46", date: "August 28, 2026", timeCEST: "17:00", timeCET: "17:00", teamA: "4th Pool E", flagA: "un", teamB: "4th Pool F", flagB: "un", gender: "Men", pool: "7th-8th Match", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 97, matchCode: "M47", date: "August 28, 2026", timeCEST: "18:00", timeCET: "18:00", teamA: "1st Pool E", flagA: "un", teamB: "2nd Pool F", flagB: "un", gender: "Men", pool: "Semi-Final 1", venue: "Wagener Hockey Stadium, Amstelveen (NED)" },
  { id: 98, matchCode: "M48", date: "August 28, 2026", timeCEST: "20:30", timeCET: "20:30", teamA: "1st Pool F", flagA: "un", teamB: "2nd Pool E", flagB: "un", gender: "Men", pool: "Semi-Final 2", venue: "Belfius Hockey Arena, Wavre (BEL)" },

  // Men's Medal Matches (Sunday, August 30, 2026 — Belfius Hockey Arena, Wavre)
  { id: 99, matchCode: "M49", date: "August 30, 2026", timeCEST: "14:00", timeCET: "14:00", teamA: "Loser Match M47", flagA: "un", teamB: "Loser Match M48", flagB: "un", gender: "Men", pool: "Bronze Medal Match 🥉", venue: "Belfius Hockey Arena, Wavre (BEL)" },
  { id: 100, matchCode: "M50", date: "August 30, 2026", timeCEST: "16:30", timeCET: "16:30", teamA: "Winner Match M47", flagA: "un", teamB: "Winner Match M48", flagB: "un", gender: "Men", pool: "Grand Final 🏆", venue: "Belfius Hockey Arena, Wavre (BEL)" }
];
