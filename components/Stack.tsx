"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [stats, setStats] = useState({ reversed: "-", words: 0, chars: 0 });
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".scroll-reveal-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setStats({
      reversed: inputText ? inputText.split("").reverse().join("") : "-",
      words: inputText ? inputText.trim().split(/\s+/).filter(Boolean).length : 0,
      chars: inputText.length,
    });
  }, [inputText]);

  const togglePanel = (label: string) => {
    setOpenPanel((prev) => (prev === label ? null : label));
  };

  const stackGroups = [
    { label: "Client Side", icon: "M2 3h20v14H2z M8 21h8M12 17v4", items: skills.clientSide },
    { label: "Server Side", icon: "M22 12h-4l-3 9L9 3l-3 9H2", items: skills.serverSide },
    { label: "Database", icon: "M21 5c0 1.66-4 3-9 3s-9-1.34-9-3 M21 12c0 1.66-4 3-9 3s-9-1.34-9-3 M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5", items: skills.database },
    { label: "Tools & Workflow", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", items: skills.tools },
    { label: "Design & Prototyping", icon: "M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z", items: skills.design },
    { label: "Testing / QA", icon: "M9 12l2 2 4-4 M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z", items: skills.testing ?? ["Jest", "Vitest", "Postman"] },
  ];

  const techIcon: Record<string, string> = {
    "React": "⚛️", "Tailwind CSS": "🎨", "HTML": "🌐", "Bootstrap": "🅱️",
    "JavaScript": "📜", "Python (FastAPI)": "🐍", "Java": "☕",
    "PostgreSQL": "🐘", "MySQL": "🗄️", "Supabase": "⚡",
    "Git": "📦", "GitHub": "🐙", "Vite": "⚡", "npm": "📦", "Docker": "🐳",
    "Figma": "🎨", "Adobe XD": "🖌️", "Jest": "🧪", "Vitest": "🧪", "Postman": "🔬",
  };

  const getEvidence = (label: string) => {
    switch (label) {
      case "Client Side":
        return (
          <div className="space-y-4">
            <div className="live-demo">
              <div className="live-demo-label">Live React component — useState hook</div>
              <div className="react-counter">
                <button onClick={() => setCount((c) => Math.max(0, c - 1))}>−</button>
                <span>{count}</span>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
              </div>
            </div>
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment">// Tailwind CSS — this portfolio</span>
                <span className="syntax-tag">&lt;div</span> <span className="syntax-attr">className</span>=<span className="syntax-string">"glass p-8 rounded-[20px]"</span><span className="syntax-tag">&gt;</span>
              </code></pre>
            </div>
          </div>
        );
      case "Server Side":
        return (
          <div className="space-y-4">
            <div className="live-demo">
              <div className="live-demo-label">Vanilla JS — live DOM manipulation</div>
              <div className="js-string-tool">
                <input
                  type="text"
                  placeholder="Type something..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <div className="stats">
                  <div className="stat"><div className="stat-label">Reversed</div><div className="stat-value" style={{ fontSize: "0.8rem" }}>{stats.reversed.slice(0, 10)}</div></div>
                  <div className="stat"><div className="stat-label">Words</div><div className="stat-value">{stats.words}</div></div>
                  <div className="stat"><div className="stat-label">Chars</div><div className="stat-value">{stats.chars}</div></div>
                </div>
              </div>
            </div>
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment"># FastAPI — Simple Banking System</span>
                <span className="syntax-keyword">@app</span>.<span className="syntax-function">get</span>(<span className="syntax-string">"/users/&#123;user_id&#125;"</span>)
                <span className="syntax-keyword">async def</span> <span className="syntax-function">get_user</span>(user_id: <span className="syntax-type">int</span>):
                <span className="syntax-keyword">return</span> db.<span className="syntax-function">query</span>(<span className="syntax-type">User</span>).<span className="syntax-function">filter</span>(<span className="syntax-type">User</span>.id == user_id).<span className="syntax-function">first</span>()
              </code></pre>
            </div>
          </div>
        );
      case "Database":
        return (
          <div className="space-y-4">
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment">-- PostgreSQL — Simple Banking System</span>
                <span className="syntax-keyword">SELECT</span> u.name, t.amount, t.created_at
                <span className="syntax-keyword">FROM</span> users u
                <span className="syntax-keyword">JOIN</span> transactions t <span className="syntax-keyword">ON</span> u.id = t.user_id
                <span className="syntax-keyword">WHERE</span> t.status = <span className="syntax-string">'completed'</span>
                <span className="syntax-keyword">ORDER BY</span> t.created_at <span className="syntax-keyword">DESC</span>;
              </code></pre>
            </div>
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment">-- MySQL — Simple Grading System</span>
                <span className="syntax-keyword">CREATE TABLE</span> students (
                id   <span className="syntax-type">INT</span> <span className="syntax-keyword">PRIMARY KEY AUTO_INCREMENT</span>,
                name <span className="syntax-type">VARCHAR</span>(<span className="syntax-number">100</span>) <span className="syntax-keyword">NOT NULL</span>
                );
              </code></pre>
            </div>
          </div>
        );
      case "Tools & Workflow":
        return (
          <div className="space-y-4">
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment"># Git workflow — feature branch strategy</span>
                git checkout -b <span className="syntax-string">feature/auth-flow</span>
                git add .
                git commit -m <span className="syntax-string">"feat: add JWT auth middleware"</span>
                git push origin <span className="syntax-string">feature/auth-flow</span>
                <span className="syntax-comment"># Pull request → review → merge to main</span>
              </code></pre>
            </div>
            <div className="live-demo">
              <div className="live-demo-label">Recent commits</div>
              <div className="github-commits">
                {["Add animation polish", "Add tech evidence panels", "Implement scroll reveals", "Add profile card tilt"].map((msg, i) => (
                  <div className="github-commit" key={i}>
                    <div className="commit-dot" />
                    <div className="commit-msg">{msg}</div>
                    <div className="commit-date">Today</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Design & Prototyping":
        return (
          <div className="space-y-4">
            <div className="live-demo">
              <div className="live-demo-label">UI component designed in Figma, built in Tailwind</div>
              <div className="tailwind-demo-card">
                <h4>Design → Code</h4>
                <p>Every section of this portfolio was wireframed in Figma before development.</p>
                <button>View in Figma ↗</button>
              </div>
            </div>
          </div>
        );
      case "Testing / QA":
        return (
          <div className="space-y-4">
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment">// Jest — component test</span>
                <span className="syntax-function">test</span>(<span className="syntax-string">'renders hero section'</span>, () =&gt; &#123;
                <span className="syntax-keyword">const</span> &#123; getByText &#125; = <span className="syntax-function">render</span>(<span className="syntax-tag">&lt;Hero /&gt;</span>);
                <span className="syntax-function">expect</span>(<span className="syntax-function">getByText</span>(<span className="syntax-string">/Ritz Lloyd/i</span>)).<span className="syntax-function">toBeInTheDocument</span>();
                &#125;);
              </code></pre>
            </div>
            <div className="code-block">
              <pre><code>
                <span className="syntax-comment">// Postman — API endpoint test</span>
                <span className="syntax-keyword">GET</span> /api/users/1
                <span className="syntax-comment">// Expected: 200 OK + JSON user object</span>
              </code></pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="stack" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 scroll-reveal-section">
          <div className="eyebrow">Toolkit</div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            The tools and technologies I use to design, build, and ship interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group, idx) => {
            const isOpen = openPanel === group.label;
            return (
              <div
                key={group.label}
                className={[
                  "glass p-8 rounded-[20px] scroll-reveal-section flex flex-col",
                  `stagger-card-${idx + 1}`,
                  idx < 3 ? "stack-card-left" : "stack-card-right",
                ].join(" ")}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 text-[0.72rem] font-bold text-[#A78BFA] uppercase tracking-[0.1em] mb-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={group.icon} />
                  </svg>
                  {group.label}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 flex-grow">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tech-tag px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-[0.8rem] font-medium text-white/80 cursor-default"
                    >
                      <span className="mr-1.5">{techIcon[item] ?? "•"}</span>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Show Evidence toggle */}
                <button
                  onClick={() => togglePanel(group.label)}
                  className="mt-6 flex items-center justify-between w-full text-[0.72rem] font-bold text-[#3fffa8]/60 hover:text-[#3fffa8] uppercase tracking-[0.08em] transition-colors duration-200 group/btn"
                >
                  <span>{isOpen ? "Hide Evidence" : "Show Evidence"}</span>
                  <svg
                    className={`chevron-icon ${isOpen ? "open" : ""} w-4 h-4`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Evidence panel — grid-rows trick for smooth open */}
                <div className={`evidence-wrapper ${isOpen ? "open" : ""} mt-2`}>
                  <div className="evidence-inner">
                    <div className="evidence-border" />
                    <div className="evidence-content-fade pl-4 pt-4">
                      <p className="text-[0.72rem] font-semibold text-[#3fffa8]/60 uppercase tracking-[0.06em] mb-3">
                        Here's how I actually use {group.label} →
                      </p>
                      {getEvidence(group.label)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
