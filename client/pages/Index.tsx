'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LOGO_URL =
  'https://50180818.fs1.hubspotusercontent-na2.net/hubfs/50180818/Intersection-Capital-white-2-2048x667.webp';
const SPEAKER_IMAGE =
  'https://50180818.fs1.hubspotusercontent-na2.net/hubfs/50180818/Oren%20-%20Headshots/L1010305-2.jpg';

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);
      setScrollY(scrollTop);

      // Show mobile CTA after scrolling past hero
      const heroHeight = window.innerHeight * 0.8;
      setShowMobileCta(scrollTop > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink overflow-x-hidden">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-transparent via-gold-2 to-transparent shadow-lg z-50"
        style={{
          width: `${scrollProgress * 100}%`,
          opacity: scrollProgress * 0.8,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/82 backdrop-blur-[18px]">
        <div className="mx-auto flex items-center justify-between gap-8 px-6 py-3 md:px-8 lg:px-12" style={{ maxWidth: '1320px' }}>
          <a href="#top" className="flex-0">
            <img src={LOGO_URL} alt="Intersection Capital" className="h-24 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-text/72 md:flex">
            <a href="#proof" onClick={() => scrollTo('proof')} className="hover:text-text transition-colors">
              Proof
            </a>
            <a href="#value" onClick={() => scrollTo('value')} className="hover:text-text transition-colors">
              What You'll Learn
            </a>
            <a href="#approach" onClick={() => scrollTo('approach')} className="hover:text-text transition-colors">
              Approach
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-5 py-3 text-sm font-bold text-ink shadow-lg hover:shadow-xl transition-all hover:translate-y-[-1px]"
          >
            Reserve Your Seat
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-ink py-16 md:py-24 lg:py-32" style={{ minHeight: 'calc(100vh - 96px)' }}>
          {/* Background decorations */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 74% 18%, rgba(201, 167, 103, 0.18), transparent 28%),
                  radial-gradient(circle at 18% 72%, rgba(38, 56, 75, 0.18), transparent 26%),
                  linear-gradient(135deg, #050506 0%, #0d1117 48%, #090c11 100%)
                `,
              }}
            />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px)
              `,
              backgroundSize: '68px 68px',
              maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 88%)',
            }} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Copy side */}
              <div className="flex flex-col justify-start">
                {/* Kicker */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-2">
                    Live webinar · Thursday, June 4 at 12:00 noon PT
                  </p>
                  <span className="rounded-full border border-gold-2/42 bg-gradient-to-br from-gold-2/18 to-gold/6 px-2.5 py-1.5 text-xs font-black uppercase tracking-wider text-text/78 shadow-inner">
                    No replay
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
                  Finding Winners
                </h1>

                {/* Lede */}
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-text/76 leading-relaxed">
                  This webinar teaches accredited investors how to identify high-upside private companies before mainstream capital notices them - using a real $120M investment return as the live case study.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-6 py-4 text-base font-bold text-ink shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
                  >
                    Reserve Your Seat
                  </button>
                  <button
                    onClick={() => scrollTo('value')}
                    className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/16 bg-white/5 px-6 py-4 text-base font-bold text-text hover:border-gold-2/42 hover:bg-white/8 transition-all"
                  >
                    What You'll Learn
                  </button>
                </div>

                {/* Invite note */}
                <div className="mt-6 max-w-2xl border-l-2 border-gold bg-gradient-to-r from-gold/14 to-gold/2 p-5 md:p-6">
                  <strong className="block text-sm font-black uppercase tracking-wider text-text">
                    Come for the thinking, not a pitch deck.
                  </strong>
                  <span className="mt-1 block text-sm text-text/62 leading-relaxed">
                    We'll talk through sourcing, diligence, and one current opportunity while the context is still fresh.
                  </span>
                </div>

                {/* Private room panel */}
                <div className="mt-8 max-w-2xl overflow-hidden rounded-lg border border-white/13 bg-gradient-to-br from-gold-2/13 to-transparent backdrop-blur-sm shadow-lg md:grid md:grid-cols-2 md:gap-0">
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-black uppercase tracking-widest text-gold-2">
                      Inside the session
                    </span>
                    <h2 className="serif mt-3 text-2xl md:text-3xl font-semibold text-text leading-tight">
                      What we'll cover
                    </h2>
                    <ul className="mt-6 space-y-3">
                      <li className="relative pl-6 text-sm text-text/68 leading-relaxed">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gold shadow-glow" />
                        How the $120M position came together
                      </li>
                      <li className="relative pl-6 text-sm text-text/68 leading-relaxed">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gold shadow-glow" />
                        What makes a private company worth real attention
                      </li>
                      <li className="relative pl-6 text-sm text-text/68 leading-relaxed">
                        <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gold shadow-glow" />
                        A live deal walkthrough and time for questions
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-px border-t border-white/10 md:border-t-0 md:border-l md:bg-white/10">
                    <div className="bg-ink/24 p-6">
                      <span className="text-xs font-black uppercase tracking-widest text-gold-2">Format</span>
                      <strong className="serif mt-2 block text-xl md:text-2xl text-text leading-tight">
                        LIVE. (no recording)
                      </strong>
                    </div>
                    <div className="bg-ink/24 p-6">
                      <span className="text-xs font-black uppercase tracking-widest text-gold-2">Session</span>
                      <strong className="serif mt-2 block text-xl md:text-2xl text-text leading-tight">
                        June 4 · <span className="nowrap">12:00 noon PT</span>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video & Form side */}
              <aside className="flex flex-col gap-6">
                {/* Video card */}
                <div className="overflow-hidden rounded-lg border border-white/14 bg-white/5 shadow-2xl backdrop-blur">
                  <div className="aspect-video bg-black">
                    <iframe
                      src="https://player.vimeo.com/video/1179700315?h=208f5bc41b&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                      title="Finding Winners webinar preview"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-ink/74 px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-text/58">
                      Speaker preview
                    </span>
                    <strong className="serif text-lg text-text">Finding Winners</strong>
                  </div>
                </div>

                {/* Form card */}
                <div className="rounded-lg border border-white/14 bg-gradient-to-br from-gold-2/12 to-transparent p-6 md:p-8 shadow-2xl backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                    Free RSVP
                  </p>
                  <h2 className="serif mt-3 text-xl md:text-2xl font-semibold text-text leading-tight">
                    Finding Winners Webinar
                  </h2>
                  <p className="mt-4 text-sm text-text/68 leading-relaxed">
                    Thursday, June 4 · 12:00 noon PT. Join live for the deal walkthrough and discussion. No replay will be sent after the session.
                  </p>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-6 py-4 text-base font-bold text-ink shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
                  >
                    Reserve Your Seat
                  </button>

                  <p className="mt-4 text-xs text-text/48 leading-relaxed">
                    This is a free live educational webinar. No recording will be distributed. By registering you agree to receive communications from Intersection Capital. Unsubscribe at any time.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="proof" className="bg-ink-2/80 py-12 md:py-16 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '$120M', label: 'Private-company position built' },
                { value: '$50M+', label: 'Capital raised through relationships' },
                { value: '380+', label: 'Investor relationships' },
                { value: '5×', label: 'Target return profile discussed' },
              ].map((metric, i) => (
                <div key={i} className="bg-gradient-to-b from-white/035 to-white/012 p-8 md:p-10">
                  <span className="serif block text-3xl md:text-4xl lg:text-5xl font-semibold text-text leading-tight font-variant-numeric">
                    {metric.value}
                  </span>
                  <p className="mt-2 text-xs md:text-sm font-bold text-text/58">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="bg-paper py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold/70">
                  A few things we'll touch
                </p>
                <h2 className="serif mt-4 max-w-2xl text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-text leading-tight">
                  The work behind finding private-company winners.
                </h2>
              </div>
            </div>

            <div className="space-y-px border-t border-dark-text/14">
              {[
                {
                  num: '01',
                  title: 'Sourcing before consensus',
                  desc: 'How opportunities show up before they become obvious to larger pools of capital.',
                },
                {
                  num: '02',
                  title: 'Operator diligence',
                  desc: 'What to ask operators, customers, and domain specialists before conviction forms.',
                },
                {
                  num: '03',
                  title: 'Investor relationships',
                  desc: 'Why trust, speed, and relevance matter when private access is limited.',
                },
                {
                  num: '04',
                  title: 'Return discipline',
                  desc: 'How upside, downside, timing, and liquidity shape the decision.',
                },
                {
                  num: '05',
                  title: 'Live deal context',
                  desc: 'A current example of how the work comes together in real time.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-4 border-b border-dark-text/14 py-8 md:grid-cols-3 md:gap-6"
                >
                  <span className="text-xs font-black uppercase tracking-wider text-gold/70">
                    {item.num}
                  </span>
                  <strong className="serif text-xl md:text-2xl font-semibold text-dark-text leading-tight">
                    {item.title}
                  </strong>
                  <p className="text-sm md:text-base text-dark-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section id="value" className="bg-paper py-16 md:py-24 lg:py-32 border-t border-dark-text/12">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold/70">
                  What you'll learn
                </p>
                <h2 className="serif mt-4 max-w-2xl text-4xl md:text-5xl font-semibold text-dark-text leading-tight">
                  A practical look at how private-market conviction gets built.
                </h2>
              </div>
              <p className="max-w-xl text-base md:text-lg text-dark-muted leading-relaxed">
                I'll share the process I use to source, evaluate, and stay close to private companies before they hit institutional radar. The goal is to make the thinking visible, not bury you in a polished deck.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: '01',
                  title: 'How the position was built',
                  desc: 'The sourcing path, relationship network, and diligence work behind a $120M private-company position.',
                },
                {
                  num: '02',
                  title: 'What catches my attention',
                  desc: 'The traits I look for before a company becomes widely talked about: customer demand, execution quality, management depth, and a credible path to liquidity.',
                },
                {
                  num: '03',
                  title: 'A live deal walkthrough',
                  desc: 'A current opportunity walkthrough designed to show the decision process while the information is still useful.',
                },
                {
                  num: '04',
                  title: 'How to think about access',
                  desc: 'Why private-market edge often comes from relationships, timing, and judgment rather than another generic allocation model.',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-lg border border-dark-text/12 bg-gradient-to-b from-white/72 to-white/36 p-6 md:p-8 shadow-inner hover:shadow-lg hover:translate-y-[-4px] transition-all"
                >
                  <span className="text-xs font-bold text-gold/70">{card.num}</span>
                  <h3 className="serif mt-6 text-xl md:text-2xl font-semibold text-dark-text leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-dark-muted leading-relaxed flex-1">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaker Section */}
        <section id="approach" className="bg-ink border-t border-white/10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Speaker visual */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg border border-white/14 bg-gradient-to-br from-gold-2/26 to-ink-2 shadow-2xl" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={SPEAKER_IMAGE}
                    alt="Speaker"
                    className="h-full w-full object-cover object-[50%_24%]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        linear-gradient(180deg, transparent 52%, rgba(5, 5, 6, 0.48)),
                        radial-gradient(circle at 50% 18%, transparent 0%, rgba(5, 5, 6, 0.2) 78%)
                      `,
                    }}
                  />
                </div>

                {/* Credential card */}
                <div className="absolute right-0 bottom-8 w-64 rounded-lg border border-white/15 bg-ink-2/78 p-5 shadow-2xl backdrop-blur-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-text/50">
                    Track record
                  </span>
                  <strong className="serif block mt-2 text-2xl text-text leading-tight">
                    $120M position
                  </strong>
                  <p className="mt-2 text-sm text-text/58 leading-relaxed">
                    Built through private-company access, operator diligence, and concentrated conviction.
                  </p>
                </div>
              </div>

              {/* Speaker copy */}
              <div className="flex flex-col justify-center">
                <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                  The approach
                </p>
                <h2 className="serif mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
                  Real companies, real operators, real diligence.
                </h2>
                <p className="mt-6 max-w-xl text-base text-text/68 leading-relaxed">
                  The focus is on businesses with tangible demand, capable teams, and a reason to believe value can compound before the broader market notices.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Real businesses', desc: 'Manufacturing businesses with real, tangible assets.' },
                    { title: 'High-quality deals', desc: 'Businesses with real demand, not just a market story.' },
                    { title: 'Proven operators', desc: 'Teams with evidence of execution and a credible plan.' },
                    { title: 'Built-in off-ramps', desc: 'Thoughtful attention to liquidity path from the start.' },
                  ].map((cred, i) => (
                    <div key={i} className="rounded-lg bg-white/5 p-4 border border-white/12">
                      <strong className="block text-sm text-text">{cred.title}</strong>
                      <span className="mt-2 block text-xs text-text/58 leading-relaxed">
                        {cred.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-orange-50 py-16 md:py-24 lg:py-32 border-t border-dark-text/12">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold/70">
                  Why this session is different
                </p>
                <h2 className="serif mt-4 text-4xl md:text-5xl font-semibold text-dark-text leading-tight">
                  Less market theater. More decision-making context.
                </h2>
              </div>
              <p className="max-w-xl text-base text-dark-muted leading-relaxed">
                This is not meant to be a broad market outlook. It is a closer look at how opportunities are sourced, filtered, and discussed before they become obvious.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-dark-text/12 bg-white/36 p-8">
                <h3 className="serif text-2xl font-semibold text-dark-text leading-tight">
                  What this is not
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    'A generic macro webinar',
                    'A stale recording repackaged as urgency',
                    'A public stock pitch',
                    'A broad allocation lecture',
                  ].map((item, i) => (
                    <li key={i} className="relative pl-6 text-sm text-dark-muted">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-gold/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-white/13 bg-ink p-8 text-text shadow-lg">
                <h3 className="serif text-2xl font-semibold leading-tight">
                  What you'll get
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    'The thinking behind a real private-company position',
                    'A current opportunity walkthrough',
                    'Specific diligence questions to ask earlier',
                    'Live context you can\'t get from a replay',
                  ].map((item, i) => (
                    <li key={i} className="relative pl-6 text-sm text-text/70">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-gold shadow-lg" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-ink py-16 md:py-24 lg:py-32 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-white/13 bg-gradient-to-br from-gold/12 to-transparent p-8 md:p-12 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                  Join live
                </p>
                <h2 className="serif mt-4 text-3xl md:text-4xl font-semibold text-text leading-tight">
                  Be in the room while the context is fresh.
                </h2>
                <p className="mt-4 text-base text-text/68 leading-relaxed">
                  If this is the kind of private-market thinking you want to sharpen, reserve a seat and join the live session on June 4.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-6 py-4 text-base font-bold text-ink shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
              >
                Reserve Your Seat
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-ink-3 py-9">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-flex-start md:justify-between">
            <div>
              <img src={LOGO_URL} alt="Intersection Capital" className="h-16 w-auto" />
              <p className="mt-2 text-sm text-text/46">
                Finding Winners Webinar · Always live, never recorded.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-text/62">
              <a href="mailto:info@intersectioncapital.com" className="hover:text-text transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-text transition-colors">
                Disclosures
              </a>
              <a href="#" className="hover:text-text transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-text transition-colors">
                Terms
              </a>
            </div>
          </div>
          <p className="mt-5 border-t border-white/8 pt-4 max-w-3xl text-xs text-text/36 leading-relaxed">
            Educational content only. Intersection Capital is not acting as your attorney, accountant, tax advisor, or financial advisor; nothing presented should be relied upon as legal, tax, accounting, investment, or financial advice.
          </p>
        </div>
      </footer>

      {/* Mobile CTA Bar */}
      {showMobileCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/12 bg-ink/90 backdrop-blur-lg md:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-text/52">
                Live webinar
              </span>
              <strong className="block text-sm text-text">
                June 4 · <span className="nowrap">12:00 noon PT</span>
              </strong>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-4 py-2.5 text-sm font-bold text-ink shadow-lg hover:shadow-xl transition-all"
            >
              Reserve
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/78 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg rounded-2xl border border-white/14 bg-gradient-to-br from-ink-2 to-ink-3 p-6 md:p-10 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-text/82 hover:border-gold-2/42 hover:bg-white/10 hover:text-text transition-all"
            >
              <X size={24} />
            </button>

            <div className="max-w-sm">
              <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                Limited live attendance
              </p>
              <h2 className="serif mt-3 text-3xl md:text-4xl font-semibold text-text leading-tight">
                Reserve Your Seat
              </h2>
              <p className="mt-3 text-sm text-text/64 leading-relaxed">
                Request access to the live June 4 session. The webinar will not be distributed as a replay.
              </p>

              <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-text/68">
                  To register, please visit our webinar registration page or contact{' '}
                  <a href="mailto:info@intersectioncapital.com" className="font-semibold text-gold-2 hover:text-gold transition-colors">
                    info@intersectioncapital.com
                  </a>
                </p>
              </div>

              <p className="mt-6 text-xs text-text/38 leading-relaxed">
                Educational webinar only. By registering you agree to receive communications from Intersection Capital. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
