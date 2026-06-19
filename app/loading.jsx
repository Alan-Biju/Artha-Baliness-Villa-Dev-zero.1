export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-beige-50)',
        gap: '1.5rem',
      }}
    >
      {/* Pulsing logo ring */}
      <div
        style={{
          width: 64,
          height: 64,
          border: '2px solid var(--color-forest-100)',
          borderTopColor: 'var(--color-forest-600)',
          borderRadius: '50%',
          animation: 'spin 0.9s linear infinite',
        }}
      />
      <p
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '1.1rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          color: 'var(--color-forest-600)',
          textTransform: 'uppercase',
        }}
      >
        Artha Baliness Villa
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
