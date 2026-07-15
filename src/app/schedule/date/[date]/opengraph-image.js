import { ImageResponse } from 'next/og';
import { getMatchDayBySlug } from '../../../../data/datepages';

export const alt = 'Hockey World Cup 2026 Daily Match Schedule';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const resolvedParams = await params;
  const day = getMatchDayBySlug(resolvedParams.date);
  
  if (!day) {
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
          Daily Schedule Not Found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #060b12 0%, #10192b 100%)',
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
          📅 Tournament Matchday Schedule
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: '900',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          Hockey World Cup 2026 Matches — {day.date}
        </div>

        {/* Matches summary */}
        <div
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            marginBottom: '50px',
            fontWeight: '600',
          }}
        >
          Day {day.dayNumber} Overview · {day.matches.length} Matches Programmed
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
