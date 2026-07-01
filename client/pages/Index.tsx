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

      {/* Header */}
      <header className="sticky top-0 z-40 overflow-hidden border-b border-white/10 bg-[#07090c]/92 shadow-[0_18px_70px_rgba(0,0,0,0.30)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-2/40 to-transparent" aria-hidden />
        <div className="relative mx-auto grid min-h-[116px] w-full max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-0 md:min-h-[144px] md:px-6 lg:min-h-[164px] lg:px-8 xl:min-h-[188px]">
          <a href="#top" className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 justify-self-center leading-none" aria-label="Oren Klaff home">
            <img src={LOGO_URL} alt="Oren Klaff" className="h-auto w-[92vw] max-w-[420px] md:w-[520px] md:max-w-[56vw] lg:w-[620px] xl:w-[720px]" />
          </a>

          <div className="hidden xl:block" aria-hidden />

          {/* CTA Button */}
          <button
            onClick={() => scrollTo('register')}
            className="col-start-3 z-20 hidden justify-self-end rounded-md border border-gold-2/45 bg-gold-2 px-4 py-2 text-[12px] font-black uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(176,138,74,0.20)] transition-all hover:-translate-y-0.5 hover:bg-[#C09A56] hover:shadow-[0_18px_44px_rgba(176,138,74,0.26)] md:inline-flex md:flex-none lg:px-5"
          >
            Reserve Your Seat
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#07090c] py-10 md:py-14 lg:py-16">
          {/* Background decorations */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 18% 18%, rgba(176,138,74, 0.22), transparent 28%),
                  radial-gradient(circle at 86% 42%, rgba(255, 255, 255, 0.055), transparent 30%),
                  linear-gradient(140deg, #07090c 0%, #10151b 48%, #080b0f 100%)
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

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(390px,0.78fr)] lg:items-stretch lg:gap-12 xl:gap-16">
              <div className="flex flex-col gap-7 lg:h-full">
                <div className="flex max-w-[760px] flex-col gap-6 lg:h-full lg:justify-between">
                  <div className="space-y-5" data-scroll-reveal data-scroll-reveal-delay="80">
                    <p className="text-[15px] font-black uppercase tracking-[0.2em] text-text/62">
                      What's "AFTER" OK Stone? NEW DEALS, NEW IDEAS:
                    </p>
                    <h1 className="max-w-[720px] text-[2.25rem] font-black leading-[0.96] tracking-tight text-text sm:text-[3rem] md:text-[3.75rem] lg:text-[4.05rem] xl:text-[4.45rem]">
                      <span className="block">Go beyond <span className="whitespace-nowrap text-[0.94em] text-gold-2 sm:text-[1em]">"Game of Money"</span> <span className="whitespace-nowrap">- now introducing</span> <em className="whitespace-nowrap text-[0.94em] sm:text-[1em]">FINDING WINNERS</em></span>
                    </h1>
                  </div>

                  <p className="max-w-[650px] text-lg font-medium leading-[1.5] tracking-[-0.01em] text-text/72 md:text-xl lg:text-[1.35rem]" data-scroll-reveal data-scroll-reveal-delay="160">
                    By the time you hear about most tech companies, the deal's already done — the early money got in cheap and you're being offered the same thing at full freight.&nbsp;
                  </p>

                </div>
              </div>

              <aside
                className="relative lg:sticky lg:top-24 lg:self-start"
                data-scroll-reveal
                data-scroll-reveal-delay="120"
              >
                <div className="overflow-hidden rounded-lg border border-white/14 bg-[#090c10] shadow-[0_30px_90px_rgba(0,0,0,0.34),0_0_70px_rgba(176,138,74,0.08)]">
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
                  <div className="grid gap-1.5 border-t border-white/10 bg-white/[0.035] px-5 py-4">
                    <span className="text-[13px] font-black uppercase tracking-[0.18em] text-gold-2">
                      No replay
                    </span>
                    <strong className="serif text-2xl font-semibold leading-tight text-text">
                      Finding Winners Webinar
                    </strong>
                    <p className="text-sm font-medium leading-relaxed text-text/62">
                      Thursday, July 2nd · 9:00 AM PST.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-3" data-scroll-reveal data-scroll-reveal-delay="240">
                  <button
                    onClick={() => scrollTo('register')}
                    className="inline-flex flex-1 basis-[11.5rem] items-center justify-center rounded-md bg-gold-2 px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_48px_rgba(176,138,74,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#C09A56]"
                  >
                    Reserve Your Seat
                  </button>
                  <button
                    onClick={() => scrollTo('value')}
                    className="inline-flex flex-1 basis-[11.5rem] items-center justify-center rounded-md border border-white/16 bg-white/[0.035] px-6 py-4 text-base font-bold text-text transition-all hover:border-gold-2/42 hover:bg-white/8"
                  >
                    What You'll Learn
                  </button>
                </div>
              </aside>
            </div>

          </div>
        </section>

        <section id="register" className="relative overflow-hidden bg-white py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="relative overflow-hidden p-0">
              <div className="min-h-[434px] overflow-hidden bg-[#080b0f]">
                <HubSpotFormFrame className="h-full min-h-[434px]" />
              </div>
              <p className="mt-4 pt-4 text-sm leading-relaxed text-dark-muted">
                This is a free live educational webinar. No recording will be distributed. By registering you agree to receive communications from Intersection Capital. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#080b0f] py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="mx-auto grid w-full max-w-4xl gap-4 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-7 text-center md:px-10 md:py-8">
              <p className="text-lg font-black uppercase tracking-[0.18em] text-gold-2 md:text-xl">
                This webinar is for:
              </p>
              <ul className="grid gap-2 text-lg leading-relaxed text-text/68 md:text-xl">
                <li>Investors looking to find private-market deals</li>
                <li>Operators and founders deploying personal capital</li>
                <li>Private Equity professionals</li>
                <li>People who want a repeatable evaluation framework — not stock tips</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-dark-text/10 bg-paper py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div
              className="w-full overflow-hidden rounded-lg border border-dark-text/10 bg-white shadow-[0_24px_70px_rgba(18,24,32,0.10)] md:grid md:grid-cols-[1fr_auto] md:items-stretch"
              data-scroll-reveal
              data-scroll-reveal-delay="80"
            >
              <div className="p-6 md:p-8 lg:p-10">
                <span className="text-[15px] font-black uppercase tracking-widest text-gold-2">
                  Inside the session
                </span>
                <h2 className="serif mt-2 text-xl font-semibold leading-snug text-dark-text md:text-2xl">
                  What we'll cover:&nbsp;This is the breakdown of one real deal on the front pages NOW: how it got spotted early, what the first signal was, and the no-frills way to catch it before everyone else. Walked through live.&nbsp; No replay.
                </h2>
                <ul className="mt-5 grid gap-3 md:grid-cols-3 md:gap-5">
                  <li className="relative pl-6 text-base leading-relaxed text-dark-muted md:text-base">
                    <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-gold shadow-glow" />
                    Top 30 Private Companies in America
                  </li>
                  <li className="relative pl-6 text-base leading-relaxed text-dark-muted md:text-base">
                    <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-gold shadow-glow" />
                    What makes a private company worth real attention
                  </li>
                  <li className="relative pl-6 text-base leading-relaxed text-dark-muted md:text-base">
                    <span className="absolute left-0 top-2.5 h-2 w-2 rounded-full bg-gold shadow-glow" />
                    A live deal walkthrough and time for questions
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 divide-x divide-dark-text/10 border-t border-dark-text/10 bg-paper-2/55 md:min-w-[18rem] md:grid-cols-1 md:divide-x-0 md:divide-y md:border-l md:border-t-0 lg:min-w-[22rem]">
                <div className="flex flex-col justify-center gap-1.5 px-5 py-5 md:px-7">
                  <span className="text-[15px] font-black uppercase tracking-[0.16em] text-gold-2">Format</span>
                  <strong className="serif block text-lg leading-[1.05] text-dark-text sm:text-xl lg:text-2xl">
                    LIVE. (no recording)
                  </strong>
                </div>
                <div className="flex flex-col justify-center gap-1.5 px-5 py-5 md:px-7">
                  <span className="text-[15px] font-black uppercase tracking-[0.16em] text-gold-2">Session</span>
                  <strong className="serif block text-lg leading-[1.05] text-dark-text sm:text-xl lg:text-2xl">
                    Thursday, July 2nd · <span className="nowrap">9:00 AM PST</span>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="proof" className="relative overflow-hidden border-y border-white/10 bg-[#080b0f] py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(176,138,74,0.16),transparent_34%),linear-gradient(180deg,#080b0f_0%,#0f141b_100%)]" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-2/60 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-12 h-40 w-[min(860px,88vw)] -translate-x-1/2 rounded-full bg-gold-2/10 blur-3xl" aria-hidden />
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="relative z-10">
              <div className="mb-10 flex items-center justify-center gap-5 md:gap-8">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-2/45" aria-hidden />
                <h2 className="serif text-center text-4xl italic font-semibold leading-none text-text md:text-5xl lg:text-6xl">
                  The deal:
                </h2>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-2/45" aria-hidden />
              </div>
            <div className="grid grid-cols-1 gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.28)] sm:grid-cols-2 lg:grid-cols-4" data-scroll-reveal="stagger">
              {[
                { value: '$5B rev', label: 'Private-company with real revenues' },
                { value: '$20B+', label: 'Capital raised through relationships' },
                { value: 'A+', label: 'Management Team' },
                { value: '60%+', label: 'YoY Growth' },
              ].map((metric, i) => (
                <div key={i} className="scroll-reveal-item rounded-md border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.035] to-white/[0.018] p-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:p-8 lg:p-9">
                  <CountUpMetric
                    value={metric.value}
                    delay={i * 120}
                    className="serif block text-4xl font-semibold leading-none text-gold-2 font-variant-numeric tabular-nums md:text-5xl lg:text-[3.45rem]"
                  />
                  <p className="mx-auto mt-4 max-w-[14rem] text-sm font-bold leading-snug text-text/66 md:text-base">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="bg-paper py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between" data-scroll-reveal>
              <div>
                <h2 className="serif mt-4 max-w-2xl text-3xl font-semibold leading-[1.06] text-gold md:text-4xl lg:text-5xl">
                  LIVE PRESENTATION: This is how I share my work with 400+ current investors&nbsp;
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
                  <span className="text-4xl font-black uppercase leading-none tracking-tight text-gold md:text-5xl lg:text-6xl">
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
                  <span className="text-sm font-bold text-gold/70">{card.num}</span>
                  <h3 className="serif mt-6 text-xl md:text-2xl font-semibold text-dark-text leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base text-dark-muted leading-relaxed flex-1">
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
                  <span className="text-[15px] font-bold uppercase tracking-wider text-text/50">
                    Track record
                  </span>
                  <strong className="serif block mt-2 text-2xl text-text leading-tight">
                    $120M position
                  </strong>
                  <p className="mt-2 text-base text-text/58 leading-relaxed">
                    Built through private-company access, operator diligence, and concentrated conviction.
                  </p>
                </div>
              </div>

              {/* Speaker copy */}
              <div className="flex flex-col justify-center" data-scroll-reveal data-scroll-reveal-delay="120">
                <p className="text-[15px] font-black uppercase tracking-widest text-gold-2">
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
                    { title: 'High-quality deals', desc: 'Businesses with real demand, not just a market story.' },
                    { title: 'Proven operators', desc: 'Teams with evidence of execution and a credible plan.' },
                    { title: 'Built-in off-ramps', desc: 'Thoughtful attention to liquidity path from the start.' },
                  ].map((cred, i) => (
                    <div key={i} className="scroll-reveal-item rounded-lg bg-white/5 p-4 border border-white/12">
                      <strong className="block text-sm text-text">{cred.title}</strong>
                      <span className="mt-2 block text-sm text-text/58 leading-relaxed">
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
                <p className="text-[15px] font-black uppercase tracking-widest text-gold/70">
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
                    <li key={i} className="relative pl-6 text-base text-dark-muted">
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
                <p className="text-[15px] font-black uppercase tracking-widest text-gold-2">
                  Join live
                </p>
                <h2 className="serif mt-4 text-3xl md:text-4xl font-semibold text-text leading-tight">
                  Be in the room while the analysis is still fresh.
                </h2>
                <p className="mt-4 text-base text-text/68 leading-relaxed">
                  If this is the kind of private-market thinking you want to sharpen, reserve a seat and join the live session on Thursday, July 2nd at 9:00 AM PST.
                </p>
              </div>
              <button
                onClick={() => scrollTo('register')}
                className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
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
          <p className="mt-5 border-t border-white/8 pt-4 max-w-3xl text-sm text-text/36 leading-relaxed">
            Educational content only. Intersection Capital is not acting as your attorney, accountant, tax advisor, or financial advisor; nothing presented should be relied upon as legal, tax, accounting, investment, or financial advice.
          </p>
        </div>
      </footer>

      {/* Mobile CTA Bar */}
      {showMobileCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/12 bg-ink/90 backdrop-blur-lg md:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
            <div>
              <span className="block text-[15px] font-bold uppercase tracking-wider text-text/52">
                Live webinar
              </span>
              <strong className="block text-sm text-text">
                Thursday, July 2nd · <span className="nowrap">9:00 AM PST</span>
              </strong>
            </div>
            <button
              onClick={() => scrollTo('register')}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-br from-gold-2 to-gold px-4 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all"
            >
              Reserve
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
