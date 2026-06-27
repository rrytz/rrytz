"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

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

  const togglePanel = (label: string) => {
    setOpenPanel(openPanel === label ? null : label);
  };

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

  const getEvidenceContent = (label: string) => {
    switch (label) {
      case "Client Side":
        return (
          <div className="evidence-content">
            <div className="live-demo">
              <div className="live-demo-label">Live React component, rendered in-page</div>
              <div className="react-counter">
                <button onClick={() => {}}>−</button>
                <span>0</span>
                <button onClick={() => {}}>+</button>
              </div>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-keyword">const</span> [<span className="syntax-function">useState</span>] = <span className="syntax-function">React</span>.<span className="syntax-function">useState</span>(<span className="syntax-number">0</span>);</code></pre>
            </div>
            <div className="live-demo">
              <div className="live-demo-label">Tailwind CSS utility classes</div>
              <div className="tailwind-demo-card">
                <h4>Styled with Tailwind</h4>
                <p>Built purely with utility classes</p>
                <button>Action</button>
              </div>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-tag">&lt;div</span> <span className="syntax-attr">className</span>=<span className="syntax-string">"bg-gradient-to-br from-[#3fffa8]/10 to-[#00c2ff]/10 border border-[#3fffa8]/30 rounded-xl p-6"</span><span className="syntax-tag">&gt;</span></code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-tag">&lt;article&gt;</span>
  <span className="syntax-tag">&lt;header&gt;</span><span className="syntax-tag">&lt;h1&gt;</span>Title<span className="syntax-tag">&lt;/h1&gt;</span><span className="syntax-tag">&lt;/header&gt;</span>
  <span className="syntax-tag">&lt;p&gt;</span>Content<span className="syntax-tag">&lt;/p&gt;</span>
  <span className="syntax-tag">&lt;footer&gt;</span>Meta<span className="syntax-tag">&lt;/footer&gt;</span>
<span className="syntax-tag">&lt;/article&gt;</span></code></pre>
            </div>
            <div className="live-demo">
              <div className="live-demo-label">Bootstrap responsive grid</div>
              <div className="bootstrap-grid-demo">
                <div className="col">Col 1</div>
                <div className="col">Col 2</div>
                <div className="col">Col 3</div>
              </div>
            </div>
          </div>
        );
      case "Server Side":
        return (
          <div className="evidence-content">
            <div className="live-demo">
              <div className="live-demo-label">Vanilla JS — live DOM manipulation</div>
              <div className="js-string-tool">
                <input type="text" placeholder="Type something..." />
                <div className="stats">
                  <div className="stat">
                    <div className="stat-label">Reversed</div>
                    <div className="stat-value">-</div>
                  </div>
                  <div className="stat">
                    <div className="stat-label">Words</div>
                    <div className="stat-value">0</div>
                  </div>
                  <div className="stat">
                    <div className="stat-label">Chars</div>
                    <div className="stat-value">0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment"># Used in Simple Banking System</span>
<span className="syntax-keyword">@app</span>.<span className="syntax-function">get</span>(<span className="syntax-string">"/users/&#123;user_id&#125;"</span>)
<span className="syntax-keyword">async def</span> <span className="syntax-function">get_user</span>(user_id: <span className="syntax-type">int</span>, db: <span className="syntax-type">Session</span> = <span className="syntax-function">Depends</span>(<span className="syntax-function">get_db</span>)):
    <span className="syntax-keyword">return</span> db.<span className="syntax-function">query</span>(<span className="syntax-type">User</span>).<span className="syntax-function">filter</span>(<span className="syntax-type">User</span>.id == user_id).<span className="syntax-function">first</span>()</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-keyword">public class</span> <span className="syntax-type">BankAccount</span> &#123;
    <span className="syntax-keyword">private double</span> balance;
    
    <span className="syntax-keyword">public void</span> <span className="syntax-function">deposit</span>(<span className="syntax-keyword">double</span> amount) &#123;
        balance += amount;
    &#125;
    
    <span className="syntax-keyword">public void</span> <span className="syntax-function">withdraw</span>(<span className="syntax-keyword">double</span> amount) &#123;
        <span className="syntax-keyword">if</span> (balance &gt;= amount) balance -= amount;
    &#125;
&#125;</code></pre>
            </div>
          </div>
        );
      case "Database":
        return (
          <div className="evidence-content">
            <div className="code-block">
              <pre><code><span className="syntax-comment">-- Used in Simple Banking System</span>
<span className="syntax-keyword">SELECT</span> u.name, <span className="syntax-function">COUNT</span>(t.id) <span className="syntax-keyword">AS</span> transaction_count
<span className="syntax-keyword">FROM</span> users u
<span className="syntax-keyword">LEFT JOIN</span> transactions t <span className="syntax-keyword">ON</span> u.id = t.user_id
<span className="syntax-keyword">WHERE</span> t.created_at &gt;= <span className="syntax-string">'2024-01-01'</span>
<span className="syntax-keyword">GROUP BY</span> u.id
<span className="syntax-keyword">ORDER BY</span> transaction_count <span className="syntax-keyword">DESC</span>;</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">-- Simple Grading System</span>
<span className="syntax-keyword">CREATE TABLE</span> students (
    id <span className="syntax-type">INT</span> <span className="syntax-keyword">PRIMARY KEY</span>,
    name <span className="syntax-type">VARCHAR</span>(<span className="syntax-number">100</span>),
    grade <span className="syntax-type">DECIMAL</span>(<span className="syntax-number">5</span>,<span className="syntax-number">2</span>)
);

<span className="syntax-keyword">INSERT INTO</span> students <span className="syntax-keyword">VALUES</span> (<span className="syntax-number">1</span>, <span className="syntax-string">'John'</span>, <span className="syntax-number">95.5</span>);</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Used in ShoeHub — real-time product queries</span>
<span className="syntax-keyword">const</span> &#123; data, error &#125; = <span className="syntax-keyword">await</span> supabase
  .<span className="syntax-function">from</span>(<span className="syntax-string">'products'</span>)
  .<span className="syntax-function">select</span>(<span className="syntax-string">'*'</span>)
  .<span className="syntax-function">eq</span>(<span className="syntax-string">'category'</span>, <span className="syntax-string">'shoes'</span>);</code></pre>
            </div>
          </div>
        );
      case "Tools & Workflow":
        return (
          <div className="evidence-content">
            <div className="code-block">
              <pre><code><span className="syntax-comment"># My Git workflow</span>
git checkout -b feature/auth-flow
git add .
git commit -m <span className="syntax-string">"feat: add JWT authentication"</span>
git push origin feature/auth-flow
<span className="syntax-comment"># Pull request → code review → merge</span></code></pre>
            </div>
            <div className="live-demo">
              <div className="live-demo-label">Recent commits</div>
              <div className="github-commits">
                <div className="github-commit">
                  <div className="commit-dot"></div>
                  <div className="commit-msg">Add comprehensive animations</div>
                  <div className="commit-date">Today</div>
                </div>
                <div className="github-commit">
                  <div className="commit-dot"></div>
                  <div className="commit-msg">Modernize portfolio design</div>
                  <div className="commit-date">Yesterday</div>
                </div>
                <div className="github-commit">
                  <div className="commit-dot"></div>
                  <div className="commit-msg">Add testing category</div>
                  <div className="commit-date">2 days ago</div>
                </div>
              </div>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// vite.config.js</span>
<span className="syntax-keyword">export default</span> <span className="syntax-function">defineConfig</span>(&#123;
  plugins: [<span className="syntax-function">react</span>()],
  server: &#123; port: <span className="syntax-number">3000</span> &#125;
&#125;);</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment"># docker-compose.yml</span>
<span className="syntax-keyword">version</span>: <span className="syntax-string">'3.8'</span>
<span className="syntax-keyword">services</span>:
  app:
    build: .
    ports:
      - <span className="syntax-string">"3000:3000"</span></code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// package.json scripts</span>
<span className="syntax-string">"scripts"</span>: &#123;
  <span className="syntax-string">"dev"</span>: <span className="syntax-string">"vite"</span>,
  <span className="syntax-string">"build"</span>: <span className="syntax-string">"vite build"</span>,
  <span className="syntax-string">"test"</span>: <span className="syntax-string">"vitest"</span>
&#125;</code></pre>
            </div>
          </div>
        );
      case "Design & Prototyping":
        return (
          <div className="evidence-content">
            <div className="live-demo">
              <div className="live-demo-label">Figma wireframe recreation</div>
              <div className="tailwind-demo-card">
                <h4>UI Component</h4>
                <p>Designed in Figma, built in code</p>
                <button>View in Figma →</button>
              </div>
            </div>
            <div className="live-demo">
              <div className="live-demo-label">Adobe XD prototype</div>
              <div className="tailwind-demo-card" style={{ background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(96, 165, 250, 0.1))', borderColor: 'rgba(167, 139, 250, 0.3)' }}>
                <h4>Interactive Prototype</h4>
                <p>Click-through mockups</p>
                <button style={{ background: '#A78BFA' }}>View Prototype →</button>
              </div>
            </div>
          </div>
        );
      case "Testing / QA":
        return (
          <div className="evidence-content">
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Jest test example</span>
<span className="syntax-function">test</span>(<span className="syntax-string">'adds 1 + 2 to equal 3'</span>, () =&gt; &#123;
  <span className="syntax-function">expect</span>(<span className="syntax-function">sum</span>(<span className="syntax-number">1</span>, <span className="syntax-number">2</span>)).<span className="syntax-function">toBe</span>(<span className="syntax-number">3</span>);
&#125;);</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Vitest test example</span>
<span className="syntax-function">describe</span>(<span className="syntax-string">'API'</span>, () =&gt; &#123;
  <span className="syntax-function">it</span>(<span className="syntax-string">'should return user data'</span>, <span className="syntax-keyword">async</span> () =&gt; &#123;
    <span className="syntax-keyword">const</span> data = <span className="syntax-keyword">await</span> <span className="syntax-function">fetchUser</span>(<span className="syntax-number">1</span>);
    <span className="syntax-function">expect</span>(data).<span className="syntax-function">toBeDefined</span>();
  &#125;);
&#125;);</code></pre>
            </div>
            <div className="code-block">
              <pre><code><span className="syntax-comment">// Postman collection example</span>
<span className="syntax-string">GET</span> /api/users/&#123;&#123;userId&#125;&#125;
Headers: Authorization: Bearer &#123;&#123;token&#125;&#125;
Tests: pm.test(<span className="syntax-string">"Status is 200"</span>, () =&gt; &#123;
  pm.response.to.have.status(<span className="syntax-number">200</span>);
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
            Toolkit
          </div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-white/45 text-base leading-[1.7] max-w-[540px]">
            The tools and technologies I use to design, build, and ship interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackGroups.map((group, idx) => (
            <div
              key={group.label}
              className={`glass p-8 rounded-[20px] scroll-reveal-section stagger-card-${idx + 1}`}
            >
              <div className="flex items-center gap-2.5 text-[0.72rem] font-bold text-[#A78BFA] uppercase tracking-[0.1em] mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={group.icon} />
                </svg>
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tech-tag px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-[0.8rem] font-medium text-white/80 cursor-default"
                    title={item}
                  >
                    <span className="mr-1.5">{getTechIcon(item)}</span>
                    {item}
                  </span>
                ))}
              </div>
              <button
                onClick={() => togglePanel(group.label)}
                className={`evidence-toggle ${openPanel === group.label ? 'open' : ''}`}
              >
                Show Evidence
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`evidence-panel ${openPanel === group.label ? 'open' : ''}`}>
                <div className="evidence-header">Here's how I actually use {group.label} →</div>
                {getEvidenceContent(group.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
