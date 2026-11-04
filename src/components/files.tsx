import React, { type ReactNode } from 'react';

export function FileCard({ children }: { children: ReactNode }) {
  return <div className="file-card">{children}</div>;
}

export function Header({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="file-header">
      <h1>{title}</h1>
      {intro ? <p className="file-intro">{intro}</p> : null}
    </header>
  );
}

export function Group({ label, heading, children }: { label: string; heading?: boolean; children: ReactNode }) {
  return (
    <div className="file-group">
      {heading ? <h2 className="file-group-label">{label}</h2> : <p className="file-group-label">{label}</p>}
      {children}
    </div>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function Text({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function Closing({ children }: { children: ReactNode }) {
  return <footer className="file-closing">{children}</footer>;
}

export function ButtonLink({ href, variant, children }: { href: string; variant?: string; children: ReactNode }) {
  return (
    <a className={`file-button${variant === 'primary' ? ' is-primary' : ''}`} href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return <p className="file-caption">{children}</p>;
}

export function Rule() {
  return <hr className="file-rule" />;
}
