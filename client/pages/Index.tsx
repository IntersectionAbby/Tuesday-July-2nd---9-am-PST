'use client';

import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useHubSpotFormScript } from '@/hooks/use-hubspot-form-script';
import HubSpotFormFrame from '@/components/HubSpotFormFrame';
import CountUpMetric from '@/components/CountUpMetric';

const LOGO_URL = 'https://assets.cdn.filesafe.space/WZTY4UMXmenzef3d9OQF/media/6a3c6d466a414441907cae15.png';
const SPEAKER_IMAGE =
  'https://assets.cdn.filesafe.space/WZTY4UMXmenzef3d9OQF/media/6a3c6dceae7d476839552805.png';
const VIMEO_EMBED_URL =
  'https://player.vimeo.com/video/1195793478?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1';

export default function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useScrollReveal();
  useHubSpotFormScript();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);

      // Show mobile CTA after scrolling past hero
      const heroHeight = window.innerHeight * 0.8;
      setShowMobileCta(scrollTop > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-2 md:flex md:justify-between md:gap-8 md:px-8 md:py-3 lg:px-12" style={{ maxWidth: '1320px' }}>
          <a href="#top" className="col-start-2 justify-self-center md:flex-0">
            <img src={LOGO_URL} alt="Oren Klaff" className="h-16 w-auto md:h-28" />
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
            onClick={() => scrollTo('register')}
            className="col-start-3 hidden justify-self-end md:flex md:flex-0 items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-5 py-3 text-sm font-bold text-ink shadow-lg hover:shadow-xl transition-all hover:translate-y-[-1px]"
          >
            Reserve Your Seat
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-ink py-10 md:py-14 lg:py-16"
          style={{ minHeight: 'calc(100vh - 96px)' }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="hero-glow hero-glow--gold" aria-hidden="true" />
            <div className="hero-glow hero-glow--blue" aria-hidden="true" />
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

          <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-10">
              {/* Copy side */}
              <div className="flex h-full min-h-0 flex-col justify-start gap-5 lg:min-h-full lg:gap-6">
                <div className="flex flex-col gap-4 lg:gap-5">
                {/* Kicker */}
                <div className="flex flex-wrap items-center gap-2.5" data-scroll-reveal data-scroll-reveal-delay="0">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-2">
                    Live webinar · Tuesday, July 2 at 9:00 AM PST
                  </p>
                  <span className="rounded-full border border-gold-2/42 bg-gradient-to-br from-gold-2/18 to-gold/6 px-2.5 py-1.5 text-xs font-black uppercase tracking-wider text-text/78 shadow-inner">
                    No replay
                  </span>
                </div>

                {/* Headline */}
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-text sm:text-[0.9375rem] md:mb-3" data-scroll-reveal data-scroll-reveal-delay="40">
                  FOR OK STONE INVESTORS - ALL NEW PRESENTATION
                </p>
                <h1 className="text-3xl font-bold text-text leading-[1.1] tracking-tight md:text-[2.35rem] lg:text-[2.45rem] xl:text-[2.65rem]" data-scroll-reveal data-scroll-reveal-delay="80">
                  <span className="block" style={{ fontSize: '48px' }}>Go beyond <span className="whitespace-nowrap">"Game of Money"</span></span>
                  <span className="block" style={{ fontSize: '48px' }}>to FINDING WINNERS.</span>
                  <span className="block" style={{ fontSize: '48px' }}>Be the first to see it.</span>
                </h1>

                {/* Lede */}
                <div className="relative" data-scroll-reveal data-scroll-reveal-delay="160">
                  <div
                    className="hero-lede-glow pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 sm:-inset-x-6 sm:-inset-y-4"
                    aria-hidden
                  />
                  <p className="relative text-sm leading-[1] tracking-tight text-gold-2">
                    By the time you hear about most tech companies, the deal's already done — the early money got in cheap and you're being offered the same thing at full freight. This is the breakdown of one real deal on the front pages NOW: how it got spotted early, what the first signal was, and the no-frills way to catch it before everyone else. Walked through live.&nbsp; No replay.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-2.5" data-scroll-reveal data-scroll-reveal-delay="240">
                  <button
                    onClick={() => scrollTo('register')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-5 py-3 text-base font-bold text-ink shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
                  >
                    Reserve Your Seat
                  </button>
                  <button
                    onClick={() => scrollTo('value')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/16 bg-white/5 px-5 py-3 text-base font-bold text-text hover:border-gold-2/42 hover:bg-white/8 transition-all"
                  >
                    What You'll Learn
                  </button>
                </div>

                {/* Invite note */}
                <div className="border-l-2 border-gold bg-gradient-to-r from-gold/14 to-gold/2 p-4 md:p-4 lg:py-3" data-scroll-reveal data-scroll-reveal-delay="320">
                  <strong className="block text-sm font-black uppercase tracking-wider text-text">
                    This webinar is for:
                  </strong>
                  <ul className="mt-3 space-y-1.5 text-sm text-text/62 leading-relaxed">
                    <li>Investors looking to find private-market deals</li>
                    <li>Operators and founders deploying personal capital&nbsp;</li>
                    <li>Private Equity professionals</li>
                    <li>People who want a repeatable evaluation framework — not stock tips</li>
                  </ul>
                </div>

                </div>
              </div>

              {/* Video & Form side */}
              <aside className="flex h-full min-h-0 flex-col justify-start gap-4 lg:min-h-full items-center lg:items-stretch" data-scroll-reveal data-scroll-reveal-delay="120">
                {/* Video card */}
                <div className="shrink-0 overflow-hidden rounded-lg border border-white/14 bg-white/5 shadow-2xl backdrop-blur">
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <iframe
                      src={VIMEO_EMBED_URL}
                      title="Finding Winners"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-ink/74 px-5 py-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-text/58">
                      oren klaff
                    </span>
                    <strong className="serif text-lg text-text">Finding Winners</strong>
                  </div>
                </div>

                {/* Form card */}
                <div id="register" className="flex min-h-0 flex-1 flex-col rounded-lg border border-white/14 bg-gradient-to-br from-gold-2/12 to-transparent p-5 md:p-6 shadow-2xl backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                    free webinar
                  </p>
                  <h2 className="serif mt-2 text-xl md:text-2xl font-semibold text-text leading-tight">
                    Finding Winners Webinar
                  </h2>
                  <p className="mt-3 text-sm text-text/68 leading-relaxed">
                    Tuesday, July 2 · 9:00 AM PST. Join live for the deal walkthrough and discussion. No replay will be sent after the session.
                  </p>

                  <HubSpotFormFrame className="mt-4" />

                  <p className="mt-3 text-xs text-text/48 leading-relaxed">
                    This is a free live educational webinar. No recording will be distributed. By registering you agree to receive communications from Intersection Capital. Unsubscribe at any time.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-ink py-10 md:py-14 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div
              className="w-full overflow-hidden rounded-lg border border-white/13 bg-gradient-to-br from-gold-2/13 to-transparent shadow-lg backdrop-blur-sm md:grid md:grid-cols-[1fr_auto] md:items-stretch"
              data-scroll-reveal
              data-scroll-reveal-delay="80"
            >
              <div className="p-6 md:p-8 lg:p-10">
                <span className="text-xs font-black uppercase tracking-widest text-gold-2">
                  Inside the session
                </span>
                <h2 className="serif mt-2 text-2xl font-semibold leading-tight text-text md:text-3xl">
                  What we'll cover
                </h2>
                <ul className="mt-5 grid gap-3 md:grid-cols-3 md:gap-5">
                  <li className="relative pl-6 text-sm leading-relaxed text-text/72 md:text-base">
                    <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-gold shadow-glow" />
                    Top 30 Private Companies in America
                  </li>
                  <li className="relative pl-6 text-sm leading-relaxed text-text/72 md:text-base">
                    <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-gold shadow-glow" />
                    What makes a private company worth real attention
                  </li>
                  <li className="relative pl-6 text-sm leading-relaxed text-text/72 md:text-base">
                    <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-gold shadow-glow" />
                    A live deal walkthrough and time for questions
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-white/[0.06] md:min-w-[18rem] md:grid-cols-1 md:divide-x-0 md:divide-y md:border-l md:border-t-0 lg:min-w-[22rem]">
                <div className="flex flex-col justify-center gap-1.5 px-5 py-5 md:px-7">
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-gold-2 sm:text-xs">Format</span>
                  <strong className="serif block text-lg leading-[1.05] text-text sm:text-xl lg:text-2xl">
                    LIVE. (no recording)
                  </strong>
                </div>
                <div className="flex flex-col justify-center gap-1.5 px-5 py-5 md:px-7">
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-gold-2 sm:text-xs">Session</span>
                  <strong className="serif block text-lg leading-[1.05] text-text sm:text-xl lg:text-2xl">
                    July 2 · <span className="nowrap">9:00 AM PST</span>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="proof" className="bg-ink-2/80 py-12 md:py-16 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4" data-scroll-reveal="stagger">
              {[
                { value: '$5B rev', label: 'Private-company with real revenues' },
                { value: '$20B+', label: 'Capital raised through relationships' },
                { value: 'A+', label: 'Management Team' },
                { value: '60%+', label: 'YoY Growth' },
              ].map((metric, i) => (
                <div key={i} className="scroll-reveal-item bg-gradient-to-b from-white/035 to-white/012 p-8 md:p-10">
                  <CountUpMetric
                    value={metric.value}
                    delay={i * 120}
                    className="serif block text-3xl md:text-4xl lg:text-5xl font-semibold text-text leading-tight font-variant-numeric tabular-nums"
                  />
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
            <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between" data-scroll-reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold/70">
                  A few things we'll touch
                </p>
                <h2 className="serif mt-4 max-w-2xl text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-text leading-tight">
                  This is how I share my work with 400+ current investors&nbsp;
                </h2>
              </div>
            </div>

            <div className="space-y-px border-t border-dark-text/14" data-scroll-reveal="stagger">
              {[
                {
                  num: '01',
                  title: 'Sourcing',
                  desc: 'How I find deals before they hit the open market.',
                },
                {
                  num: '02',
                  title: 'Pattern recognition',
                  desc: 'What I look for in a winner that everyone else misses.',
                },
                {
                  num: '03',
                  title: 'How Much to Invest',
                  desc: 'How I price risk, time entries, and project exit.',
                },
                {
                  num: '04',
                  title: '400+ investors',
                  desc: 'I share my work with 400+ current investors and we do deals together.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="scroll-reveal-item grid grid-cols-1 gap-5 border-b border-dark-text/14 py-10 md:grid-cols-3 md:gap-8 lg:py-12"
                >
                  <span className="text-sm font-black uppercase tracking-wider text-gold/70 md:text-base">
                    {item.num}
                  </span>
                  <strong className="serif text-2xl font-semibold text-dark-text leading-tight md:text-3xl lg:text-4xl">
                    {item.title}
                  </strong>
                  <p className="text-base text-dark-muted leading-relaxed md:text-lg lg:text-xl">
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
            <div className="mb-12 max-w-3xl flex flex-col gap-4 md:gap-5" data-scroll-reveal>
              <h2 className="serif text-4xl md:text-5xl font-semibold text-dark-text leading-tight">
                What you'll learn
              </h2>
              <p className="serif max-w-2xl text-2xl md:text-3xl font-semibold text-dark-text leading-snug">
                Single Deal Focus: practical look at how private-market conviction about a single deal gets built.
              </p>
              <p className="max-w-2xl text-base md:text-lg text-dark-muted leading-relaxed">
                I'll share the process I use to source, evaluate, and stay close to private companies. The goal is to make the thinking visible, not bury you in a polished deck.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" data-scroll-reveal="stagger">
              {[
                {
                  num: '01',
                  title: 'How the position was built',
                  desc: 'The sourcing path, relationship network, and diligence work that goes into identifying a company.',
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
                  className="scroll-reveal-item flex flex-col rounded-lg border border-dark-text/12 bg-gradient-to-b from-white/72 to-white/36 p-6 md:p-8 shadow-inner hover:shadow-lg hover:translate-y-[-4px] transition-all"
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
              <div className="relative" data-scroll-reveal>
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
              <div className="flex flex-col justify-center" data-scroll-reveal data-scroll-reveal-delay="120">
                <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                  The approach
                </p>
                <h2 className="serif mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
                  Learn the process 400+ investors used to invest $50 million
                </h2>
                <p className="mt-6 max-w-xl text-base text-text/68 leading-relaxed">
                  The focus is on businesses with tangible demand, capable teams, and a reason to believe value can compound before the broader market notices.
                </p>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-scroll-reveal="stagger">
                  {[
                    { title: 'Exit Strategies', desc: 'Manufacturing or Software businesses with real, tangible assets.' },
                    { title: 'More Demand than Supply', desc: 'Businesses with real demand, not just a market story.' },
                    { title: 'Proven operators', desc: 'Teams with evidence of execution and a credible plan.' },
                    { title: 'Built-in off-ramps', desc: 'Thoughtful attention to liquidity path from the start.' },
                  ].map((cred, i) => (
                    <div key={i} className="scroll-reveal-item rounded-lg bg-white/5 p-4 border border-white/12">
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
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end" data-scroll-reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gold/70">
                  Why this session is different
                </p>
                <h2 className="serif mt-4 text-4xl md:text-5xl font-semibold text-dark-text leading-tight">
                  Less market theater. More Decision Making on Actual Deals.
                </h2>
              </div>
              <p className="max-w-xl text-base text-dark-muted leading-relaxed">
                This is not meant to be a broad market outlook. It is a closer look at how opportunities are sourced, filtered, and discussed before they become obvious.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-scroll-reveal="stagger">
              <div className="scroll-reveal-item rounded-lg border border-dark-text/12 bg-white/36 p-8">
                <h3 className="serif text-2xl font-semibold text-dark-text leading-tight">
                  What this is not
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    'Not a generic "intro level" webinar',
                    'Not "Last Years" Presentation&nbsp;',
                    'Not a public stock pitch',
                    'Not a wealth management lecture',
                  ].map((item, i) => (
                    <li key={i} className="relative pl-6 text-sm text-dark-muted">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-gold/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scroll-reveal-item rounded-lg border border-white/13 bg-ink p-8 text-text shadow-lg">
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
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-white/13 bg-gradient-to-br from-gold/12 to-transparent p-8 md:p-12 md:flex-row md:items-center" data-scroll-reveal>
              <div className="max-w-xl">
                <p className="text-xs font-black uppercase tracking-widest text-gold-2">
                  Join live
                </p>
                <h2 className="serif mt-4 text-3xl md:text-4xl font-semibold text-text leading-tight">
                  Be in the room while the analysis is still fresh.
                </h2>
                <p className="mt-4 text-base text-text/68 leading-relaxed">
                  If this is the kind of private-market thinking you want to sharpen, reserve a seat and join the live session on Tuesday, July 2 at 9:00 AM PST.
                </p>
              </div>
              <button
                onClick={() => scrollTo('register')}
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
              <img src={LOGO_URL} alt="Oren Klaff" className="h-10 w-auto sm:h-12" />
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
                July 2 · <span className="nowrap">9:00 AM PST</span>
              </strong>
            </div>
            <button
              onClick={() => scrollTo('register')}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-4 py-2.5 text-sm font-bold text-ink shadow-lg hover:shadow-xl transition-all"
            >
              Reserve
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
