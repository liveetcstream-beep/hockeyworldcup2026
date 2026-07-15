import { ImageResponse } from 'next/og';
import { getPlayerBySlug } from '../../../data/players';

export const alt = 'Hockey World Cup 2026 Player Profile';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const resolvedParams = await params;
  const p = getPlayerBySlug(resolvedParams.slug);
  
  if (!p) {
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
          Player Profile Not Found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #090d16 0%, #151e33 100%)',
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
          🏆 FIH Hockey World Cup 2026 Profile
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
          <span>{p.flag}</span>
          <span>{p.name}</span>
        </div>

        {/* Position / Team */}
        <div
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            marginBottom: '50px',
            fontWeight: '600',
          }}
        >
          {p.position} · {p.team}
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'flex',
            gap: '80px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px 60px',
            borderRadius: '16px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Caps</span>
            <span style={{ fontSize: '44px', fontWeight: '900', color: '#fff' }}>{p.caps}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '80px' }}>
            <span style={{ fontSize: '18px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Goals</span>
            <span style={{ fontSize: '44px', fontWeight: '900', color: '#fff' }}>{p.goals}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
