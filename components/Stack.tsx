"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills, proficiency, stackApproach } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [stats, setStats] = useState({ reversed: "-", words: 0, chars: 0 });
  const [openPanels, setOpenPanels] = useState<Record<string, boolean>>({});

  const togglePanel = (label: string) => {
    setOpenPanels(prev => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.scroll-reveal-section');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setStats({
      reversed: inputText ? inputText.split('').reverse().join('') : "-",
      words: inputText ? inputText.trim().split(/\s+/).filter(w => w).length : 0,
      chars: inputText.length
    });
  }, [inputText]);

  const stackGroups = [
    { label: "Client Side", icon: "M2 3h20v14H2z M8 21h8M12 17v4", items: skills.clientSide },
    { label: "Server Side", icon: "M22 12h-4l-3 9L9 3l-3 9H2", items: skills.serverSide },
    { label: "Database", icon: "M21 5c0 1.66-4 3-9 3s-9-1.34-9-3 M21 12c0 1.66-4 3-9 3s-9-1.34-9-3 M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5", items: skills.database },
    { label: "Tools & Workflow", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", items: skills.tools },
    { label: "Design & Prototyping", icon: "M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z", items: skills.design },
    { label: "Testing / QA", icon: "M9 12l2 2 4-4 M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z", items: skills.testing || ["Jest", "Vitest", "Postman"] },
  ];

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      "React": "⚛️",
      "Tailwind CSS": "🎨",
      "HTML": "🌐",
      "Bootstrap": "🅱️",
      "JavaScript": "📜",
      "Python (FastAPI)": "🐍",
      "Java": "☕",
      "PostgreSQL": "🐘",
      "MySQL": "🗄️",
      "Supabase": "⚡",
      "Git": "📦",
      "GitHub": "🐙",
      "Vite": "⚡",
      "npm": "📦",
      "Docker": "🐳",
      "Figma": "🎨",
      "Adobe XD": "🖌️",
      "Jest": "🧪",
      "Vitest": "🧪",
      "Postman": "📬",
    };
    return icons[tech] || "•";
  };

  const getInlineEvidence = (label: string) => {
    switch (label) {
      case "Client Side":
        return (
          <div className="mt-6 space-y-4">
            <div className="live-demo">
              <div className="live-demo-label">Live React component (this portfolio uses React)</div>
              <div className="react-counter">
                <button onClick={() => setCount(c => Math.max(0, c - 1))}>−</button>
                <span>{count}</span>
                <button onClick={() => setCount(c => c + 1)}>+</button>
              </div>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-keyword">const</span> [count, setCount] = <span className="syntax-function">useState</span>(<span className="syntax-number">0</span>);</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// This portfolio uses Tailwind CSS</span>
<span className="syntax-tag">&lt;div</span> <span className="syntax-attr">className</span>=<span className="syntax-string">&quot;glass p-8 rounded-[20px]&quot;</span><span className="syntax-tag">&gt;</span></code></pre>
            </div>
          </div>
        );
      case "Server Side":
        return (
          <div className="mt-6 space-y-4">
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
                  <div className="stat">
                    <div className="stat-label">Reversed</div>
                    <div className="stat-value">{stats.reversed}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-label">Words</div>
                    <div className="stat-value">{stats.words}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-label">Chars</div>
                    <div className="stat-value">{stats.chars}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Used in Simple Banking System</span>
<span className="syntax-keyword">@app</span>.<span className="syntax-function">get</span>(<span className="syntax-string">&quot;/users/&#123;user_id&#125;&quot;</span>)
<span className="syntax-keyword">async def</span> <span className="syntax-function">get_user</span>(user_id: <span className="syntax-type">int</span>):
    <span className="syntax-keyword">return</span> db.<span className="syntax-function">query</span>(<span className="syntax-type">User</span>).<span className="syntax-function">filter</span>(<span className="syntax-type">User</span>.id == user_id).<span className="syntax-function">first</span>()</code></pre>
            </div>
          </div>
        );
      case "Database":
        return (
          <div className="mt-6 space-y-4">
            <div className="code-block">
              <pre><code><span className="syntax-comment">// This portfolio uses Next.js with PostgreSQL</span>
<span className="syntax-keyword">SELECT</span> * <span className="syntax-keyword">FROM</span> projects <span className="syntax-keyword">WHERE</span> status = <span className="syntax-string">&apos;live&apos;</span></code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Simple Grading System</span>
<span className="syntax-keyword">CREATE TABLE</span> students (
    id <span className="syntax-type">INT</span> <span className="syntax-keyword">PRIMARY KEY</span>,
    name <span className="syntax-type">VARCHAR</span>(<span className="syntax-number">100</span>)
);</code></pre>
            </div>
          </div>
        );
      case "Tools & Workflow":
        return (
          <div className="mt-6 space-y-4">
            <div className="code-block">
              <pre><code><span className="syntax-comment"># This project is version controlled with Git</span>
git add .
git commit -m <span className="syntax-string">&quot;add feature&quot;</span>
git push</code></pre>
            </div>
            <div className="live-demo">
              <div className="live-demo-label">Recent GitHub activity</div>
              <div className="github-commits">
                <div className="github-commit">
                  <div className="commit-dot"></div>
                  <div className="commit-msg">Add evidence panels</div>
                  <div className="commit-date">Today</div>
                </div>
                <div className="github-commit">
                  <div className="commit-dot"></div>
                  <div className="commit-msg">Add animations</div>
                  <div className="commit-date">Today</div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Design & Prototyping":
        return (
          <div className="mt-6 space-y-4">
            <div className="live-demo">
              <div className="live-demo-label">UI designed in Figma</div>
              <div className="tailwind-demo-card">
                <h4>This Card</h4>
                <p>Designed in Figma, built with Tailwind</p>
              </div>
            </div>
          </div>
        );
      case "Testing / QA":
        return (
          <div className="mt-6 space-y-4">
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Jest test example</span>
<span className="syntax-function">test</span>(<span className="syntax-string">&apos;renders correctly&apos;</span>, () =&gt; &#123;
  <span className="syntax-function">expect</span>(screen).<span className="syntax-function">toBeInTheDocument</span>();
&#125;);</code></pre>
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
          <div className="eyebrow">
            Approach
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            How I build
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[560px] mb-6">
            {stackApproach}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group, idx) => {
            const isOpen = !!openPanels[group.label];
            const evidence = getInlineEvidence(group.label);
            return (
              <div
                key={group.label}
                className={`glass p-8 rounded-[20px] flex flex-col justify-between scroll-reveal-section stagger-card-${idx + 1} ${idx < 3 ? 'stack-card-left' : 'stack-card-right'}`}
              >
                <div>
                  <div className="flex items-center gap-2.5 text-[0.72rem] font-bold text-[#A78BFA] uppercase tracking-[0.1em] mb-6">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={group.icon} />
                    </svg>
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.items.map((item) => (
                      <div key={item} className="group/tech relative">
                        <span
                          className="tech-tag px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-[0.8rem] font-medium text-white/80 cursor-default inline-block"
                          title={item}
                        >
                          <span className="mr-1.5">{getTechIcon(item)}</span>
                          {item}
                        </span>
                        {/* Proficiency tooltip */}
                        {proficiency[item] && (
                          <div className="proficiency-tooltip">
                            {proficiency[item]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {evidence && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => togglePanel(group.label)}
                      className="flex items-center justify-between w-full text-left text-[0.78rem] font-bold text-[#3fffa8] uppercase tracking-[0.08em] hover:opacity-80 transition-opacity py-1"
                    >
                      <span>{isOpen ? 'Hide Evidence' : 'Show Evidence'}</span>
                      <svg 
                        className={`chevron-icon w-4 h-4 ${isOpen ? 'open' : ''}`} 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <div className={`evidence-wrapper ${isOpen ? 'open' : ''}`}>
                      <div className="evidence-inner pl-4 my-2">
                        <div className="evidence-border" />
                        <div className="evidence-content-fade">
                          {evidence}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
