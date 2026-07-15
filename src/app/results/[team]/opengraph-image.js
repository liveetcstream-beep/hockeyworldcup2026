import { ImageResponse } from 'next/og';

// Mock getTeamBySlug from teams data since they are local structures
const teamsData = {
  india: { name: "India", flag: "🇮🇳", pool: "Pool D", ranking: 5 },
  pakistan: { name: "Pakistan", flag: "🇵🇰", pool: "Pool D", ranking: 17 },
  belgium: { name: "Belgium", flag: "🇧🇪", pool: "Pool B", ranking: 3 },
  netherlands: { name: "Netherlands", flag: "🇳🇱", pool: "Pool A", ranking: 1 },
  germany: { name: "Germany", flag: "🇩🇪", pool: "Pool B", ranking: 4 },
  australia: { name: "Australia", flag: "🇦🇺", pool: "Pool C", ranking: 2 },
  argentina: { name: "Argentina", flag: "🇦🇷", pool: "Pool A", ranking: 8 },
  england: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pool: "Pool D", ranking: 7 },
  spain: { name: "Spain", flag: "🇪🇸", pool: "Pool A", ranking: 10 },
  france: { name: "France", flag: "🇫🇷", pool: "Pool B", ranking: 11 },
  malaysia: { name: "Malaysia", flag: "🇲🇾", pool: "Pool B", ranking: 12 },
  ireland: { name: "Ireland", flag: "🇮🇪", pool: "Pool C", ranking: 9 },
  wales: { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", pool: "Pool D", ranking: 18 },
  "south-africa": { name: "South Africa", flag: "🇿🇦", pool: "Pool A", ranking: 16 },
  "new-zealand": { name: "New Zealand", flag: "🇳🇿", pool: "Pool C", ranking: 13 },
  chile: { name: "Chile", flag: "🇨🇱", pool: "Pool C", ranking: 22 }
};

export const alt = 'Hockey World Cup 2026 Team Results';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const resolvedParams = await params;
  const team = teamsData[resolvedParams.team];
  
  if (!team) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#0f172a',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '48px',
          }}
        >
          Team Results Not Found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #07090e 0%, #111a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          padding: '60px',
          fontFamily: 'sans-serif',
          borderBottom: '12px solid #c00030',
        }}
      >
        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#ef4444',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '20px',
          }}
        >
          🏆 HWC 2026 Campaign Tracker
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: '900',
            marginBottom: '15px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <span>{team.flag}</span>
          <span>{team.name} Match Results</span>
        </div>

        {/* Group / Ranking */}
        <div
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            marginBottom: '50px',
            fontWeight: '600',
          }}
        >
          {team.pool} · FIH World Ranking: No. {team.ranking}
        </div>

        {/* Brand Tag */}
        <div
          style={{
            fontSize: '18px',
            color: '#64748b',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          hockeyworldcup2026schedule.com
        </div>
      </div>
    ),
    { ...size }
  );
}
