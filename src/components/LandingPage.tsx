"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const COLORS = {
  bg: "#0a0926",
  surface: "#16162a",
  pink: "#e94560",
  blue: "#2196f3",
  gold: "#e5c558",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.72, 0.24, 0.98] }}
      className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-10 flex items-end justify-between gap-8">
        <div>
          {eyebrow ? (
            <div className="font-display text-xs uppercase tracking-[0.32em] text-[rgba(242,244,255,0.72)]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="font-display mt-3 text-2xl sm:text-3xl tracking-tight text-[rgba(242,244,255,0.92)]">
            {title}
          </h2>
        </div>
        <div className="hidden sm:block text-xs text-[rgba(242,244,255,0.55)]">
          HUD // Focus Grid
        </div>
      </div>
      {children}
    </motion.section>
  );
}

function NeonButton({
  color,
  children,
  href,
}: {
  color: "pink" | "blue";
  children: React.ReactNode;
  href: string;
}) {
  const ring =
    color === "pink"
      ? "border-[rgba(233,69,96,0.55)] hover:neon-pink hover:border-[rgba(233,69,96,0.85)]"
      : "border-[rgba(33,150,243,0.55)] hover:neon-blue hover:border-[rgba(33,150,243,0.85)]";

  const bg =
    color === "pink"
      ? "from-[rgba(233,69,96,0.22)] to-[rgba(233,69,96,0.06)]"
      : "from-[rgba(33,150,243,0.22)] to-[rgba(33,150,243,0.06)]";

  return (
    <a
      href={href}
      className={cx(
        "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3",
        "glass hud-border border transition-all duration-300",
        "text-sm font-semibold tracking-wide text-[rgba(242,244,255,0.92)]",
        "hover:-translate-y-0.5 active:translate-y-0",
        ring
      )}
    >
      <span
        className={cx(
          "pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-90",
          "bg-linear-to-b",
          bg
        )}
      />
      <span className="font-display text-xs tracking-[0.24em] opacity-80">
        Download
      </span>
      <span className="h-4 w-px bg-white/15" />
      <span className="text-sm">{children}</span>
      <span
        className={cx(
          "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300",
          color === "pink"
            ? "bg-[radial-gradient(circle_at_30%_20%,rgba(233,69,96,0.35),transparent_55%)] group-hover:opacity-100"
            : "bg-[radial-gradient(circle_at_30%_20%,rgba(33,150,243,0.35),transparent_55%)] group-hover:opacity-100"
        )}
      />
    </a>
  );
}

function CountUp({
  value,
  duration = 1.1,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 120, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [spring]);

  useEffect(() => {
    if (!inView) return;
    mv.set(0);
    const controls = animate(mv, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, mv, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
    </span>
  );
}

function FocusTimerMock() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[28px]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(233,69,96,0.32), transparent 55%), radial-gradient(circle at 70% 80%, rgba(33,150,243,0.26), transparent 55%)",
          filter: "blur(4px)",
        }}
      />
      <motion.div
        initial={{ rotateX: 10, rotateY: -18, y: 6 }}
        animate={{ rotateX: 12, rotateY: -14, y: [6, -10, 6] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className={cx(
          "glass hud-border rounded-[28px] border border-white/10",
          "w-[320px] sm:w-[360px] p-5"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="font-display text-xs tracking-[0.28em] text-white/70">
            FOCUS TIMER
          </div>
          <div className="text-[10px] text-white/50">SYNC // GRID</div>
        </div>

        <div className="mt-4 rounded-2xl bg-[rgba(10,9,38,0.6)] border border-white/10 p-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-xs text-white/60">Deep Work</div>
              <div className="font-display text-lg tracking-tight text-white/90">
                25:00
              </div>
            </div>
            <div className="text-xs text-white/55">Streak +3</div>
          </div>

          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(233,69,96,1), rgba(33,150,243,1))",
                }}
                initial={{ width: "28%" }}
                animate={{ width: ["28%", "78%", "28%"] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-white/55">
              <span>Focus</span>
              <span>Energy</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Do", c: COLORS.pink },
            { k: "Plan", c: COLORS.blue },
            { k: "Garden", c: COLORS.gold },
          ].map((it) => (
            <div
              key={it.k}
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
              style={{
                boxShadow: `0 0 0 1px ${it.c}33, 0 0 18px ${it.c}22`,
              }}
            >
              <div className="font-display text-[11px] tracking-[0.22em] text-white/75">
                {it.k.toUpperCase()}
              </div>
              <div className="mt-1 text-xs text-white/55">HUD module</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function BarChart() {
  const data = [42, 64, 55, 70, 46, 82, 61];
  const max = Math.max(...data);
  return (
    <div className="glass hud-border rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div className="font-display text-xs tracking-[0.28em] text-white/70">
          WEEKLY FOCUS
        </div>
        <div className="text-[10px] text-white/50">SCAN // 7D</div>
      </div>
      <svg viewBox="0 0 420 140" className="mt-4 h-36 w-full">
        <defs>
          <linearGradient id="bar" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={COLORS.blue} stopOpacity="0.95" />
            <stop offset="100%" stopColor={COLORS.pink} stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path
          d="M10 10 H410"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
        <path
          d="M10 50 H410"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <path
          d="M10 90 H410"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        {data.map((v, i) => {
          const h = (v / max) * 100;
          const x = 18 + i * 56;
          const y = 120 - h;
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={34}
                height={h}
                rx={10}
                fill="url(#bar)"
                opacity="0.92"
              />
              <rect
                x={x}
                y={y}
                width={34}
                height={h}
                rx={10}
                fill="transparent"
                stroke={i % 2 === 0 ? COLORS.blue : COLORS.pink}
                strokeOpacity="0.35"
              />
            </g>
          );
        })}
      </svg>
      <div className="text-xs text-white/55">
        High-contrast neon lines for instant pattern recognition.
      </div>
    </div>
  );
}

function PieChart() {
  const center = 70;
  const r = 54;

  const slices = useMemo(
    () => [
      { label: "Do", value: 38, color: COLORS.pink },
      { label: "Plan", value: 27, color: COLORS.blue },
      { label: "Delegate", value: 18, color: "rgba(33,150,243,0.65)" },
      { label: "Eliminate", value: 17, color: "rgba(229,197,88,0.78)" },
    ],
    []
  );

  const segments = useMemo(() => {
    const total = slices.reduce((a, s) => a + s.value, 0);
    const round = (n: number) => Number(n.toFixed(6));
    const arc = (a0: number, a1: number) => {
      const x0 = round(center + r * Math.cos(a0));
      const y0 = round(center + r * Math.sin(a0));
      const x1 = round(center + r * Math.cos(a1));
      const y1 = round(center + r * Math.sin(a1));
      const largeArc = a1 - a0 > Math.PI ? 1 : 0;
      return `M ${center} ${center} L ${x0} ${y0} A ${r} ${r} 0 ${largeArc} 1 ${x1} ${y1} Z`;
    };

    let start = -Math.PI / 2;
    return slices.map((s) => {
      const sweep = (s.value / total) * Math.PI * 2;
      const a0 = start;
      const a1 = start + sweep;
      start = a1;
      const mid = a0 + sweep / 2;
      return { ...s, path: arc(a0, a1), mid };
    });
  }, [slices]);

  return (
    <div className="glass hud-border rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <div className="font-display text-xs tracking-[0.28em] text-white/70">
          TASK DISTRIBUTION
        </div>
        <div className="text-[10px] text-white/50">MATRIX // LIVE</div>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <svg viewBox="0 0 140 140" className="h-40 w-40 shrink-0">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {segments.map((s, idx) => {
            return (
              <g key={s.label}>
                <path
                  d={s.path}
                  fill={s.color}
                  fillOpacity="0.62"
                  filter="url(#glow)"
                />
                <path
                  d={s.path}
                  fill="transparent"
                  stroke={idx % 2 === 0 ? COLORS.blue : COLORS.pink}
                  strokeOpacity="0.25"
                />
                <circle
                  cx={center + (r + 10) * Math.cos(s.mid)}
                  cy={center + (r + 10) * Math.sin(s.mid)}
                  r="1.6"
                  fill="rgba(255,255,255,0.6)"
                />
              </g>
            );
          })}
          <circle cx={center} cy={center} r="30" fill={COLORS.surface} opacity="0.7" />
          <circle
            cx={center}
            cy={center}
            r="30"
            fill="transparent"
            stroke="rgba(255,255,255,0.10)"
          />
        </svg>

        <div className="flex-1 space-y-2">
          {segments.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: s.color, boxShadow: `0 0 14px ${s.color}55` }}
                />
                <span className="text-sm text-white/80">{s.label}</span>
              </div>
              <span className="text-sm font-semibold text-white/80">
                {s.value}%
              </span>
            </div>
          ))}
          <div className="pt-2 text-xs text-white/55">
            A neon HUD view of how your time distributes across the grid.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-full">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.72, 0.24, 0.98] }}
            >
              <div className="inline-flex items-center gap-2 rounded-2xl glass hud-border px-4 py-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: COLORS.pink,
                    boxShadow: `0 0 16px ${COLORS.pink}`,
                  }}
                />
                <span className="font-display text-[11px] uppercase tracking-[0.28em] text-white/80">
                  Focus Grid // Productivity HUD
                </span>
              </div>

              <h1 className="font-display mt-6 text-4xl sm:text-5xl leading-[1.05] tracking-tight text-white/95">
                Master Your Time in the Digital Grid
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
                An Eisenhower Matrix fused with RPG progression—turn deep work into
                a high-score run, and let focus sessions grow your Virtual Garden.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <NeonButton color="pink" href="#download-ios">
                  iOS
                </NeonButton>
                <NeonButton color="blue" href="#download-android">
                  Android
                </NeonButton>
                <div className="sm:ml-2 text-xs text-white/50">
                  No ads. Your grid, your rules.
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  { label: "Matrix", v: "2×2" },
                  { label: "Deep Work", v: "Timer" },
                  { label: "RPG", v: "Levels" },
                ].map((it, idx) => (
                  <div
                    key={it.label}
                    className="glass hud-border rounded-2xl p-4"
                    style={{
                      boxShadow:
                        idx === 0
                          ? `0 0 24px ${COLORS.blue}14`
                          : idx === 1
                            ? `0 0 24px ${COLORS.pink}14`
                            : `0 0 24px ${COLORS.gold}14`,
                    }}
                  >
                    <div className="text-xs text-white/55">{it.label}</div>
                    <div className="font-display mt-2 text-lg text-white/90">
                      {it.v}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-center lg:justify-end">
              <FocusTimerMock />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 1: MATRIX */}
      <Section
        id="eisenhower"
        eyebrow="Feature 01"
        title="The Eisenhower Matrix — Four Quadrants, One Command Center"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass hud-border rounded-3xl p-6">
            <div className="font-display text-xs tracking-[0.28em] text-white/70">
              GRID // 2×2
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                { t: "DO", d: "Urgent + Important", c: COLORS.pink },
                { t: "PLAN", d: "Not Urgent + Important", c: COLORS.blue },
                { t: "DELEGATE", d: "Urgent + Not Important", c: "rgba(33,150,243,0.7)" },
                { t: "ELIMINATE", d: "Not Urgent + Not Important", c: "rgba(229,197,88,0.8)" },
              ].map((q) => (
                <div
                  key={q.t}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  style={{
                    boxShadow: `0 0 0 1px ${q.c}66, 0 0 22px ${q.c}26`,
                  }}
                >
                  <div className="font-display text-sm tracking-[0.26em] text-white/85">
                    {q.t}
                  </div>
                  <div className="mt-2 text-xs text-white/60">{q.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-white/55">
              Sort tasks at a glance. Execute like a pilot flying a neon HUD.
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                h: "Do",
                p: "Lock in critical tasks. Start a Focus Timer and push them across the finish line.",
                c: COLORS.pink,
              },
              {
                h: "Plan",
                p: "Schedule high-impact work. Protect it with Deep Work sessions.",
                c: COLORS.blue,
              },
              {
                h: "Delegate",
                p: "Send low-leverage tasks out. Keep your grid uncluttered.",
                c: "rgba(33,150,243,0.7)",
              },
              {
                h: "Eliminate",
                p: "Cut noise. Your attention is the rarest currency in the system.",
                c: "rgba(229,197,88,0.8)",
              },
            ].map((it) => (
              <div
                key={it.h}
                className="glass hud-border rounded-3xl p-5"
                style={{ boxShadow: `0 0 28px ${it.c}14` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="font-display text-sm tracking-[0.22em] text-white/85">
                    {it.h.toUpperCase()}
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: it.c, boxShadow: `0 0 14px ${it.c}66` }}
                  />
                </div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {it.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURE 2: VIRTUAL GARDEN */}
      <Section
        id="garden"
        eyebrow="Feature 02"
        title="Virtual Garden — Plants Grow Only During Deep Work"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="glass hud-border rounded-3xl p-6">
              <div className="font-display text-xs tracking-[0.28em] text-white/70">
                GARDEN // DIGITAL PLANTS
              </div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Your garden is a visual ledger of attention. Plants grow only while
                you’re in Deep Work—pause the session and growth pauses too.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { n: "Neon Fern", s: "Sprout", c: COLORS.blue },
                  { n: "Synth Orchid", s: "Bloom", c: COLORS.pink },
                  { n: "Gold Cactus", s: "Rare", c: COLORS.gold },
                  { n: "Circuit Ivy", s: "Climb", c: "rgba(33,150,243,0.7)" },
                  { n: "Pulse Moss", s: "Spread", c: "rgba(233,69,96,0.75)" },
                  { n: "Aurora Lily", s: "Epic", c: "rgba(229,197,88,0.85)" },
                ].map((p) => (
                  <motion.div
                    key={p.n}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                    style={{
                      boxShadow: `0 0 0 1px ${p.c}55, 0 0 20px ${p.c}22`,
                    }}
                  >
                    <div className="font-display text-[11px] tracking-[0.22em] text-white/80">
                      {p.s.toUpperCase()}
                    </div>
                    <div className="mt-2 text-sm text-white/85">{p.n}</div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: p.c }}
                        initial={{ width: "18%" }}
                        whileHover={{ width: "78%" }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass hud-border rounded-3xl p-6">
            <div className="font-display text-xs tracking-[0.28em] text-white/70">
              DEEP WORK // RULES
            </div>
            <div className="mt-5 space-y-3">
              {[
                {
                  k: "Growth",
                  v: "Only ticks while timer is running.",
                  c: COLORS.blue,
                },
                {
                  k: "Streak",
                  v: "Chain sessions to unlock rare seeds.",
                  c: COLORS.pink,
                },
                {
                  k: "Rewards",
                  v: "Earn Cyber Gold for consistent focus.",
                  c: COLORS.gold,
                },
              ].map((r) => (
                <div
                  key={r.k}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  style={{ boxShadow: `0 0 18px ${r.c}18` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-display text-sm tracking-[0.22em] text-white/85">
                      {r.k.toUpperCase()}
                    </div>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: r.c, boxShadow: `0 0 14px ${r.c}66` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-white/65">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* RPG GAMIFICATION */}
      <Section
        id="rpg"
        eyebrow="RPG Systems"
        title="Gamification — Level Up With Every Deep Work Run"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass hud-border rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div className="font-display text-xs tracking-[0.28em] text-white/70">
                USER STATS // HUD
              </div>
              <div className="text-[10px] text-white/50">ONLINE</div>
            </div>

            <div className="mt-5 flex items-end justify-between gap-6">
              <div>
                <div className="text-xs text-white/60">Level</div>
                <div className="font-display text-3xl text-white/90 tracking-tight">
                  12
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/60">Coins</div>
                <div
                  className="font-display text-2xl text-white/90 tracking-tight"
                  style={{ textShadow: `0 0 18px ${COLORS.gold}55` }}
                >
                  <CountUp value={8450} />{" "}
                  <span className="text-xs text-white/55">CG</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>EXP</span>
                <span>3,420 / 5,000</span>
              </div>
              <div className="mt-3 h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(33,150,243,1), rgba(233,69,96,1))",
                    boxShadow: `0 0 24px ${COLORS.blue}22`,
                  }}
                  initial={{ width: "12%" }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="mt-5 text-xs text-white/55">
              Coins roll up when you hit the viewport—like in-game loot counters.
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                h: "Daily quests",
                p: "Turn your matrix into quests. The grid tells you what to fight today.",
                c: COLORS.pink,
              },
              {
                h: "Loot & upgrades",
                p: "Earn Cyber Gold, unlock boosters, and customize your HUD.",
                c: COLORS.gold,
              },
              {
                h: "Skill tree",
                p: "Build streaks, discipline, and focus resilience—one run at a time.",
                c: COLORS.blue,
              },
            ].map((it) => (
              <div
                key={it.h}
                className="glass hud-border rounded-3xl p-6"
                style={{ boxShadow: `0 0 26px ${it.c}14` }}
              >
                <div className="flex items-center justify-between">
                  <div className="font-display text-sm tracking-[0.22em] text-white/85">
                    {it.h.toUpperCase()}
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: it.c, boxShadow: `0 0 14px ${it.c}66` }}
                  />
                </div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {it.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CYBERPUNK ANALYTICS */}
      <Section
        id="analytics"
        eyebrow="Telemetry"
        title="Cyberpunk Analytics — See Your Focus Like a Signal"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <BarChart />
          <PieChart />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{
            background:
              "linear-gradient(90deg, rgba(233,69,96,0.28), rgba(33,150,243,0.18), rgba(229,197,88,0.18))",
          }}
        />
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <div className="glass hud-border rounded-3xl p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-display text-lg tracking-tight text-white/95">
                  Focus Grid
                </div>
                <div className="mt-1 text-sm text-white/60">
                  A synthwave HUD for modern productivity.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:text-white hover:neon-blue"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:text-white hover:neon-pink"
                  href="/terms"
                >
                  Terms
                </Link>
                <a
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:text-white hover:neon-gold"
                  href="#social"
                >
                  Social
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-white/55">
              <span>
                ©{" "}
                <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
                Focus Grid
              </span>
              <span>GRID STATUS: STABLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

