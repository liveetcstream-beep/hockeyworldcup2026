// ============================================================
// MATCH DAY DATABASE — FIH Hockey World Cup 2026
// 17 Tournament Days | Aug 15 – Aug 31, 2026
// E-E-A-T Rich | Semantic Entity Dense | July 2026 Data
// ============================================================

export const matchDays = [
  {
    date: "August 15, 2026",
    slug: "august-15-matches",
    dayNumber: 1,
    metaTitle: "August 15 Hockey World Cup 2026 Matches — Schedule, Timings & Streaming",
    metaDesc: "Complete match schedule for August 15, 2026 at the FIH Hockey World Cup. All fixtures with IST, CEST, GMT and EST timings, streaming options, and match...",
    editorial: `August 15, 2026 marks the beginning of one of the most anticipated field hockey tournaments of this decade. Day 1 of the FIH Hockey World Cup 2026 sets the tone across both host venues — Wagener Stadium in Amstelveen and Belfius Hockey Arena in Wavre. For Indian fans, August 15 carries extra emotional weight: it is India's Independence Day, and India's opening Pool D fixture against Wales on the same date creates a moment of national pride that goes beyond sport.\n\nThe opening matches of any World Cup contain a unique nervous energy. Defences are tighter than they will be in later rounds, goalkeepers are highly focused, and no team wants to drop early points that complicate their qualification path. Historically, upset results happen more frequently on Day 1 than in any subsequent group stage round — teams that are tactically conservative by nature often get caught by opponents playing with nothing to lose.\n\nWatch for Belgium vs Malaysia as the marquee opening fixture in Wavre. Belgium, as the defending co-champion and home nation, will be under enormous pressure to perform — the crowd at Belfius Arena is expected to be sold out with 8,000 Belgian fans creating an electric atmosphere. Malaysia, in contrast, arrives with low expectations but with Faizal Saari leading a fast counter-attacking setup that has caused Belgium problems in previous encounters.\n\nIn Amstelveen, India's 14:00 CEST start against Wales will draw one of the highest television audiences of the entire tournament from South Asia. Harmanpreet Singh's penalty corners against Wales' relatively inexperienced goalkeeper setup make India firm favourites, but Wales' Jacob Draper has the pace on the wings to trouble India's transitions.`,
    matches: [
      {
        matchNumber: 1,
        time_cest: "12:00",
        time_ist: "15:30",
        time_gmt: "10:00",
        time_est: "06:00",
        time_aest: "20:00",
        team1: "Netherlands", flag1: "🇳🇱",
        team2: "South Africa", flag2: "🇿🇦",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool A",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "Netherlands", channel: "NPO3 / Ziggo Sport" },
          { country: "South Africa", channel: "SuperSport" },
          { country: "India", channel: "Star Sports / Hotstar" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" }
        ]
      },
      {
        matchNumber: 2,
        time_cest: "14:00",
        time_ist: "17:30",
        time_gmt: "12:00",
        time_est: "08:00",
        time_aest: "22:00",
        team1: "India", flag1: "🇮🇳",
        team2: "Wales", flag2: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool D",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "UK/Wales", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Netherlands", channel: "Ziggo Sport" }
        ]
      },
      {
        matchNumber: 3,
        time_cest: "16:00",
        time_ist: "19:30",
        time_gmt: "14:00",
        time_est: "10:00",
        time_aest: "00:00+1",
        team1: "Belgium", flag1: "🇧🇪",
        team2: "Malaysia", flag2: "🇲🇾",
        venue: "Belfius Hockey Arena, Wavre",
        pool: "Pool B",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "Belgium", channel: "VRT / RTBF" },
          { country: "Malaysia", channel: "RTM / Astro" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" }
        ]
      },
      {
        matchNumber: 4,
        time_cest: "18:30",
        time_ist: "22:00",
        time_gmt: "16:30",
        time_est: "12:30",
        time_aest: "02:30+1",
        team1: "Germany", flag1: "🇩🇪",
        team2: "France", flag2: "🇫🇷",
        venue: "Belfius Hockey Arena, Wavre",
        pool: "Pool B",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "Germany", channel: "ZDF / DAZN" },
          { country: "France", channel: "France Télévisions / Canal+" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" }
        ]
      }
    ],
    faqs: [
      { q: "What matches are on August 15 at Hockey World Cup 2026?", a: "Four matches are scheduled on August 15: Netherlands vs South Africa (Pool A), India vs Wales (Pool D) both at Wagener Stadium Amstelveen, and Belgium vs Malaysia, Germany vs France (both Pool B) at Belfius Hockey Arena Wavre." },
      { q: "What time is India vs Wales on August 15?", a: "India vs Wales on August 15, 2026 kicks off at 14:00 CEST (17:30 IST / 12:00 GMT). Broadcast on Star Sports and Disney+ Hotstar in India." },
      { q: "Where can I watch the August 15 Hockey World Cup matches live?", a: "In India: Star Sports and Disney+ Hotstar. In the UK: BT Sport. In the USA: ESPN+. In Netherlands: Ziggo Sport. In Belgium: VRT/RTBF." },
      { q: "Is August 15 a significant date for India vs Wales?", a: "Yes — August 15 is India's Independence Day, making the India vs Wales match carry extra national significance for Indian fans." },
      { q: "What time is Germany vs France on August 15?", a: "Germany vs France starts at 18:30 CEST (22:00 IST / 16:30 GMT) at Belfius Hockey Arena, Wavre." }
    ],
    internalLinks: [
      { text: "India vs Wales — Live Score", href: "/live-scores" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "Pool B Standings", href: "/pool-b" },
      { text: "Pool A Standings", href: "/pool-a" },
      { text: "India Schedule 2026", href: "/hockey-world-cup-2026-schedule-india" },
      { text: "Belgium Schedule 2026", href: "/hockey-world-cup-2026-schedule-belgium" },
      { text: "Germany vs France Preview", href: "/matches/belgium-vs-france" }
    ]
  },
  {
    date: "August 16, 2026",
    slug: "august-16-matches",
    dayNumber: 2,
    metaTitle: "August 16 Hockey World Cup 2026 Matches — All Fixtures, Timings & Streaming",
    metaDesc: "Full fixture list for August 16 at FIH Hockey World Cup 2026. Argentina, Spain, Australia, New Zealand, Ireland, Chile match timings in IST, CEST, GMT...",
    editorial: `Day 2 of the Hockey World Cup 2026 brings Pool A, Pool C, and additional fixtures into focus. Argentina vs Spain at Wagener Stadium is the standout match of the day — two technically refined European and South American sides whose tactical approaches are polar opposites. Argentina's Los Leones prefer a physical counter-attacking game, while Spain's Red Sticks favour the short-passing tiki-taka style that made them European Championship finalists.\n\nIn Pool C at Belfius Arena, Australia vs New Zealand is an Oceania derby with genuine rivalry history. The Trans-Tasman rivalry in field hockey is the equivalent of an Ashes series — intensely personal, historically close, and always generating quality hockey. Australia's Blake Govers vs New Zealand's goalkeeper in a penalty corner situation is the specific matchup every analyst will be tracking.`,
    matches: [
      {
        matchNumber: 5,
        time_cest: "12:00",
        time_ist: "15:30",
        time_gmt: "10:00",
        time_est: "06:00",
        time_aest: "20:00",
        team1: "Argentina", flag1: "🇦🇷",
        team2: "Spain", flag2: "🇪🇸",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool A",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "Argentina", channel: "TyC Sports / ESPN Argentina" },
          { country: "Spain", channel: "Teledeporte / DAZN ES" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" }
        ]
      },
      {
        matchNumber: 6,
        time_cest: "14:00",
        time_ist: "17:30",
        time_gmt: "12:00",
        time_est: "08:00",
        time_aest: "22:00",
        team1: "Australia", flag1: "🇦🇺",
        team2: "New Zealand", flag2: "🇳🇿",
        venue: "Belfius Hockey Arena, Wavre",
        pool: "Pool C",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "Australia", channel: "Kayo Sports / Channel 7" },
          { country: "New Zealand", channel: "Sky Sport NZ" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" }
        ]
      },
      {
        matchNumber: 7,
        time_cest: "16:00",
        time_ist: "19:30",
        time_gmt: "14:00",
        time_est: "10:00",
        time_aest: "00:00+1",
        team1: "Ireland", flag1: "🇮🇪",
        team2: "Chile", flag2: "🇨🇱",
        venue: "Belfius Hockey Arena, Wavre",
        pool: "Pool C",
        matchPreviewUrl: null,
        result: null,
        streaming: [
          { country: "Ireland", channel: "RTÉ Sport" },
          { country: "Chile", channel: "Canal del Fútbol" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" }
        ]
      },
      {
        matchNumber: 8,
        time_cest: "18:30",
        time_ist: "22:00",
        time_gmt: "16:30",
        time_est: "12:30",
        time_aest: "02:30+1",
        team1: "Pakistan", flag1: "🇵🇰",
        team2: "England", flag2: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool D",
        matchPreviewUrl: "/matches/england-vs-pakistan",
        result: null,
        streaming: [
          { country: "Pakistan", channel: "PTV Sports / Ten Sports" },
          { country: "UK", channel: "BT Sport" },
          { country: "India", channel: "Star Sports" },
          { country: "USA", channel: "ESPN+" }
        ]
      }
    ],
    faqs: [
      { q: "What matches are on August 16 at Hockey World Cup 2026?", a: "Four matches on August 16: Argentina vs Spain (Pool A, Amstelveen), Australia vs New Zealand (Pool C, Wavre), Ireland vs Chile (Pool C, Wavre), and Pakistan vs England (Pool D, Amstelveen)." },
      { q: "What time is Pakistan vs England on August 16?", a: "Pakistan vs England starts at 18:30 CEST (22:00 IST / 16:30 GMT) at Wagener Stadium, Amstelveen." },
      { q: "What time is Australia vs New Zealand on August 16?", a: "Australia vs New Zealand starts at 14:00 CEST (17:30 IST / 12:00 GMT) at Belfius Hockey Arena, Wavre." },
      { q: "Where can I watch Pakistan vs England live?", a: "Pakistan vs England on August 16 is broadcast on PTV Sports / Ten Sports in Pakistan, BT Sport in the UK, Star Sports in India, and ESPN+ in the USA." },
      { q: "Is Argentina vs Spain being broadcast on August 16?", a: "Yes — Argentina vs Spain at 12:00 CEST is broadcast on TyC Sports in Argentina, Teledeporte/DAZN in Spain, and BT Sport in the UK." }
    ],
    internalLinks: [
      { text: "Pakistan Schedule 2026", href: "/hockey-world-cup-2026-schedule-pakistan" },
      { text: "England Schedule 2026", href: "/hockey-world-cup-2026-schedule-england" },
      { text: "England vs Pakistan Preview", href: "/matches/england-vs-pakistan" },
      { text: "Pool C Standings", href: "/pool-c" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "Live Scores", href: "/live-scores" }
    ]
  },
  {
    date: "August 17, 2026",
    slug: "august-17-matches",
    dayNumber: 3,
    metaTitle: "August 17 Hockey World Cup 2026 — India vs England & All Fixtures",
    metaDesc: "August 17 Hockey World Cup 2026 match schedule. India vs England is the standout Pool D clash. All fixtures with IST, CEST timings, streaming and match...",
    editorial: `August 17 is the day Indian hockey fans have circled for months. India vs England in Pool D at Wagener Stadium is the most-watched fixture in the group stage for South Asian audiences — a match with direct Quarter-Final qualification implications for both teams. England, under Mark Hager, has been one of Europe's most organised defensive teams in 2026, conceding fewer than 0.8 goals per match in the Pro League. India, under Craig Fulton, have the attacking firepower to break that record down — but it will require Harmanpreet's penalty corners to fire and the midfield to control possession through Hardik Singh.\n\nThe day's other fixtures include Argentina vs South Africa and Spain vs Netherlands in Pool A — a crucial second match that will begin to separate the Pool A table. Netherlands, as tournament favourites on home turf, will be under pressure to deliver after their opening Day 1 match.`,
    matches: [
      {
        matchNumber: 9,
        time_cest: "12:00",
        time_ist: "15:30",
        time_gmt: "10:00",
        time_est: "06:00",
        team1: "Argentina", flag1: "🇦🇷",
        team2: "South Africa", flag2: "🇿🇦",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool A",
        result: null,
        streaming: [
          { country: "Argentina", channel: "TyC Sports" },
          { country: "South Africa", channel: "SuperSport" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" }
        ]
      },
      {
        matchNumber: 10,
        time_cest: "14:00",
        time_ist: "17:30",
        time_gmt: "12:00",
        time_est: "08:00",
        team1: "India", flag1: "🇮🇳",
        team2: "England", flag2: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool D",
        matchPreviewUrl: "/matches/india-vs-england",
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Pakistan", channel: "Ten Sports" }
        ]
      },
      {
        matchNumber: 11,
        time_cest: "16:00",
        time_ist: "19:30",
        time_gmt: "14:00",
        time_est: "10:00",
        team1: "Germany", flag1: "🇩🇪",
        team2: "Malaysia", flag2: "🇲🇾",
        venue: "Belfius Hockey Arena, Wavre",
        pool: "Pool B",
        result: null,
        streaming: [
          { country: "Germany", channel: "ZDF / DAZN" },
          { country: "Malaysia", channel: "RTM / Astro" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" }
        ]
      },
      {
        matchNumber: 12,
        time_cest: "18:30",
        time_ist: "22:00",
        time_gmt: "16:30",
        time_est: "12:30",
        team1: "Spain", flag1: "🇪🇸",
        team2: "Netherlands", flag2: "🇳🇱",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool A",
        matchPreviewUrl: "/matches/australia-vs-spain",
        result: null,
        streaming: [
          { country: "Spain", channel: "Teledeporte / DAZN ES" },
          { country: "Netherlands", channel: "NPO3 / Ziggo Sport" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" }
        ]
      }
    ],
    faqs: [
      { q: "What time is India vs England on August 17?", a: "India vs England starts at 14:00 CEST (17:30 IST / 12:00 GMT) at Wagener Stadium, Amstelveen. Broadcast on Star Sports and Disney+ Hotstar in India." },
      { q: "What matches are on August 17 at Hockey World Cup 2026?", a: "Four matches on August 17: Argentina vs South Africa (Pool A), India vs England (Pool D) at Wagener Stadium, Germany vs Malaysia (Pool B) at Belfius Arena, Spain vs Netherlands (Pool A) at Wagener Stadium." },
      { q: "Who is favoured in India vs England on August 17?", a: "India are slight favourites given their higher FIH world ranking (No. 5 vs No. 7 for England) and Harmanpreet Singh's penalty corner threat. However, England's defensive organisation under Mark Hager makes them competitive." },
      { q: "Where can I watch Spain vs Netherlands on August 17?", a: "Spain vs Netherlands at 18:30 CEST is broadcast on Teledeporte/DAZN in Spain, NPO3/Ziggo Sport in the Netherlands, and BT Sport in the UK." },
      { q: "What time is Germany vs Malaysia on August 17?", a: "Germany vs Malaysia starts at 16:00 CEST (19:30 IST / 14:00 GMT) at Belfius Hockey Arena, Wavre." }
    ],
    internalLinks: [
      { text: "India vs England Match Preview", href: "/matches/india-vs-england" },
      { text: "India Schedule 2026", href: "/hockey-world-cup-2026-schedule-india" },
      { text: "England Schedule 2026", href: "/hockey-world-cup-2026-schedule-england" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "Pool A Standings", href: "/pool-a" },
      { text: "Live Scores", href: "/live-scores" }
    ]
  },
  {
    date: "August 19, 2026",
    slug: "august-19-matches",
    dayNumber: 5,
    metaTitle: "August 19 Hockey World Cup 2026 — India vs Pakistan & All Match Timings",
    metaDesc: "August 19 at Hockey World Cup 2026 features the iconic India vs Pakistan clash in Pool D. Full fixture list with IST, CEST, GMT timings, streaming and...",
    editorial: `August 19, 2026 will be one of the most-watched days in field hockey history — and the reason is simple: India vs Pakistan in Pool D at Wagener Stadium. The world's oldest and most passionate rivalry in field hockey takes centre stage in Amstelveen, where a sold-out Wagener Stadium will host what promises to be one of the defining moments of the entire tournament.\n\nIndia and Pakistan have met 186 times in international field hockey — making it the most played bilateral fixture in the sport's history. The stakes on August 19 are enormous for both nations: the Pool D winner will earn a direct Quarter-Final berth, while the runner-up faces a crossover match. For the millions watching on Star Sports in India and PTV Sports in Pakistan, this match transcends sport and touches the deepest roots of national identity.\n\nHarmanpreet Singh vs Muhammad Rizwan Sr. (Pakistan's goalkeeper) is the penalty corner battle of the tournament. Meanwhile, Pakistan's Shahnaz Ahmed vs India's defensive line will determine whether Pakistan can score in open play. The coaching chess match between Craig Fulton (India) and Siegfried Aikman (Pakistan) — both experienced European coaches — adds another fascinating tactical layer.\n\nThe day's other major fixtures include Belgium vs Germany in Pool B — the European heavyweight clash that could determine Pool B's table order.`,
    matches: [
      {
        matchNumber: 17,
        time_cest: "14:00",
        time_ist: "17:30",
        time_gmt: "12:00",
        time_est: "08:00",
        team1: "Belgium", flag1: "🇧🇪",
        team2: "Germany", flag2: "🇩🇪",
        venue: "Belfius Hockey Arena, Wavre",
        pool: "Pool B",
        matchPreviewUrl: "/matches/germany-vs-belgium",
        result: null,
        streaming: [
          { country: "Belgium", channel: "VRT / RTBF" },
          { country: "Germany", channel: "ZDF / DAZN" },
          { country: "India", channel: "Star Sports" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" }
        ]
      },
      {
        matchNumber: 18,
        time_cest: "16:00",
        time_ist: "19:30",
        time_gmt: "14:00",
        time_est: "10:00",
        team1: "India", flag1: "🇮🇳",
        team2: "Pakistan", flag2: "🇵🇰",
        venue: "Wagener Stadium, Amstelveen",
        pool: "Pool D",
        matchPreviewUrl: "/matches/india-vs-pakistan",
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "Pakistan", channel: "PTV Sports / Ten Sports" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Netherlands", channel: "Ziggo Sport" }
        ]
      }
    ],
    faqs: [
      { q: "What time is India vs Pakistan on August 19 at Hockey World Cup 2026?", a: "India vs Pakistan on August 19, 2026 kicks off at 16:00 CEST (19:30 IST / 14:00 GMT) at Wagener Stadium, Amstelveen." },
      { q: "Where can I watch India vs Pakistan live?", a: "In India: Star Sports and Disney+ Hotstar. In Pakistan: PTV Sports and Ten Sports. In the UK: BT Sport. In the USA: ESPN+. In the Netherlands: Ziggo Sport." },
      { q: "What is the India vs Pakistan head-to-head record at Hockey World Cups?", a: "India and Pakistan have played 186 times in international hockey. In World Cup encounters specifically, both teams have multiple wins each. See our head-to-head page for the full record." },
      { q: "What time is Belgium vs Germany on August 19?", a: "Belgium vs Germany starts at 14:00 CEST (17:30 IST / 12:00 GMT) at Belfius Hockey Arena in Wavre." },
      { q: "Will India vs Pakistan on August 19 be a sellout?", a: "Yes. The India vs Pakistan match at Wagener Stadium is expected to be a complete sellout. Tickets should be purchased only through the official FIH portal." }
    ],
    internalLinks: [
      { text: "India vs Pakistan Match Preview", href: "/matches/india-vs-pakistan" },
      { text: "India Schedule 2026", href: "/hockey-world-cup-2026-schedule-india" },
      { text: "Pakistan Schedule 2026", href: "/hockey-world-cup-2026-schedule-pakistan" },
      { text: "Germany vs Belgium Preview", href: "/matches/germany-vs-belgium" },
      { text: "Head-to-Head Records", href: "/h2h" },
      { text: "Pool D Standings", href: "/pool-d" },
      { text: "Live Scores", href: "/live-scores" }
    ]
  },
  {
    date: "August 27, 2026",
    slug: "august-27-matches",
    dayNumber: 13,
    metaTitle: "August 27 Hockey World Cup 2026 — Semi-Finals Schedule & Streaming",
    metaDesc: "Hockey World Cup 2026 Semi-Finals on August 27. Complete schedule, team matchups, IST and CEST timings, streaming options and tournament context.",
    editorial: `August 27, 2026 is Semi-Final day at the Hockey World Cup — the day four teams fight for their place in the final and the tournament's greatest moments are almost guaranteed. Semi-Finals in field hockey are notoriously hard to predict: the tactical adjustments coaches make between the Quarter-Finals and the semis often upend form-based forecasts completely.\n\nAt this stage of the tournament, every penalty corner counts double in psychological terms. Goalkeepers who have found their rhythm — like Krishan Bahadur Pathak for India, or Belgium's Arthur De Sloover — become even more pivotal. The teams that reach this stage have demonstrated they can win in multiple ways: from open play, from set pieces, and from shootouts. The world's best coaches now face each other with full statistical data on their opponents accumulated over 12+ days of tournament hockey.\n\nThe venues for the Semi-Finals will be confirmed once the Quarter-Final results determine which pool leaders vs pool runners-up progress. Both Wagener Stadium and Belfius Hockey Arena are equipped to host Semi-Final matches.`,
    matches: [
      {
        matchNumber: 49,
        time_cest: "14:00",
        time_ist: "17:30",
        time_gmt: "12:00",
        time_est: "08:00",
        team1: "SF1 Team A", flag1: "🏒",
        team2: "SF1 Team B", flag2: "🏒",
        venue: "TBD (Wagener Stadium or Belfius Arena)",
        pool: "Semi-Final 1",
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Belgium", channel: "VRT / RTBF" },
          { country: "Netherlands", channel: "NPO3 / Ziggo Sport" }
        ]
      },
      {
        matchNumber: 50,
        time_cest: "18:30",
        time_ist: "22:00",
        time_gmt: "16:30",
        time_est: "12:30",
        team1: "SF2 Team A", flag1: "🏒",
        team2: "SF2 Team B", flag2: "🏒",
        venue: "TBD (Wagener Stadium or Belfius Arena)",
        pool: "Semi-Final 2",
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Germany", channel: "ZDF / DAZN" },
          { country: "Australia", channel: "Kayo Sports" }
        ]
      }
    ],
    faqs: [
      { q: "When are the Hockey World Cup 2026 Semi-Finals?", a: "The Semi-Finals are scheduled for August 27, 2026 with a 14:00 CEST and 18:30 CEST start time." },
      { q: "Where will the Semi-Finals be played?", a: "Semi-Final venues will be confirmed after Quarter-Final results. Both Wagener Stadium (Amstelveen) and Belfius Hockey Arena (Wavre) are potential semi-final venues." },
      { q: "How do teams qualify for the Semi-Finals?", a: "Teams that win their Quarter-Final matches on August 24-25 advance to the Semi-Finals on August 27." },
      { q: "Where can I watch the Hockey World Cup 2026 Semi-Finals?", a: "Star Sports/Hotstar (India), BT Sport (UK), ESPN+ (USA), ZDF/DAZN (Germany), VRT (Belgium), NPO3/Ziggo (Netherlands), Kayo Sports (Australia)." },
      { q: "Has India ever reached the Hockey World Cup Semi-Finals?", a: "India's last Semi-Final appearance was in 1975 when they won the World Cup. Their most recent notable run was reaching the Quarter-Finals in 2023." }
    ],
    internalLinks: [
      { text: "Semi-Final Preview & Bracket", href: "/knockout/semi-finals" },
      { text: "Quarter-Final Results", href: "/knockout/quarter-finals" },
      { text: "Points Table", href: "/points-table" },
      { text: "Live Scores", href: "/live-scores" },
      { text: "India Schedule 2026", href: "/hockey-world-cup-2026-schedule-india" }
    ]
  },
  {
    date: "August 31, 2026",
    slug: "august-31-matches",
    dayNumber: 17,
    metaTitle: "August 31 Hockey World Cup 2026 — Final & Bronze Medal Match Schedule",
    metaDesc: "Hockey World Cup 2026 Final and Bronze Medal match on August 31. Match timings in IST, CEST, GMT, streaming guide, venue details and tournament context.",
    editorial: `August 31, 2026 — the day the Hockey World Cup 2026 champion is crowned. The Final and Bronze Medal match on the tournament's last day represent the culmination of 16 days of the finest field hockey on the planet. For the estimated 200+ million global viewers watching from India, Pakistan, Belgium, Netherlands, Germany, Australia and beyond, this is the day that will be discussed for years.\n\nThe Bronze Medal match — played earlier in the day — carries more significance than its name suggests. In a sport where qualification funding and FIH ranking points are crucial for developing nations, finishing third vs fourth can mean millions in prize money and ranking point implications that affect qualification for the next World Cup and Olympic cycles.\n\nThe Final itself, expected to kick off at 18:30 CEST in front of a packed house at one of the host venues, will determine whether Belgium defends their 2023 championship on home soil, whether the Netherlands completes a storybook home victory, or whether Australia reclaims global supremacy. If India progresses — a historic possibility — the final would be watched by over 500 million Indian viewers across platforms.`,
    matches: [
      {
        matchNumber: 55,
        time_cest: "14:00",
        time_ist: "17:30",
        time_gmt: "12:00",
        time_est: "08:00",
        team1: "Bronze Semi-Final Loser 1", flag1: "🏒",
        team2: "Bronze Semi-Final Loser 2", flag2: "🏒",
        venue: "TBD — Host Venue",
        pool: "Bronze Medal Match",
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Worldwide", channel: "FIH Official YouTube" }
        ]
      },
      {
        matchNumber: 56,
        time_cest: "18:30",
        time_ist: "22:00",
        time_gmt: "16:30",
        time_est: "12:30",
        team1: "FINAL — Semi-Final Winner 1", flag1: "🏆",
        team2: "FINAL — Semi-Final Winner 2", flag2: "🏆",
        venue: "TBD — Main Host Venue",
        pool: "Grand Final",
        result: null,
        streaming: [
          { country: "India", channel: "Star Sports / Disney+ Hotstar" },
          { country: "UK", channel: "BT Sport" },
          { country: "USA", channel: "ESPN+" },
          { country: "Belgium", channel: "VRT / RTBF" },
          { country: "Netherlands", channel: "NPO3 / Ziggo Sport" },
          { country: "Germany", channel: "ZDF / DAZN" },
          { country: "Australia", channel: "Kayo Sports / Channel 7" },
          { country: "Worldwide", channel: "FIH Official YouTube" }
        ]
      }
    ],
    faqs: [
      { q: "When is the Hockey World Cup 2026 Final?", a: "The Hockey World Cup 2026 Final is on August 31, 2026 at 18:30 CEST (22:00 IST / 16:30 GMT)." },
      { q: "When is the Hockey World Cup 2026 Bronze Medal match?", a: "The Bronze Medal match is on August 31, 2026 at 14:00 CEST (17:30 IST / 12:00 GMT)." },
      { q: "Will the Hockey World Cup 2026 Final be on free-to-air TV?", a: "The Final will be broadcast on FIH's official YouTube channel globally for free, plus on national broadcasters in each team's country." },
      { q: "Where is the Hockey World Cup 2026 Final being played?", a: "The Final venue will be confirmed after the Semi-Finals. Both Wagener Stadium (Amstelveen) and Belfius Hockey Arena (Wavre) are candidates for the Final." },
      { q: "What time is the Hockey World Cup 2026 Final in Indian time (IST)?", a: "The Final on August 31 starts at 22:00 IST (18:30 CEST / 16:30 GMT)." }
    ],
    internalLinks: [
      { text: "Final & Knockout Bracket", href: "/knockout/final" },
      { text: "Semi-Finals Preview", href: "/knockout/semi-finals" },
      { text: "Quarter-Finals", href: "/knockout/quarter-finals" },
      { text: "Points Table", href: "/points-table" },
      { text: "Live Scores", href: "/live-scores" },
      { text: "Tickets for Final", href: "/tickets" }
    ]
  }
];

// Helper functions
export function getMatchDayBySlug(slug) {
  return matchDays.find(d => d.slug === slug);
}

export const allDateSlugs = matchDays.map(d => ({ date: d.slug }));
