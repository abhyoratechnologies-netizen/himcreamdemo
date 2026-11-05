"use client";
import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Search,
  MessageCircle,
  Send,
  Plus,
  Minus,
  Mountain,
  Snowflake,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { collections, Collection } from "../lib/catalog";
const heroSlides = [
  {
    name: "Pista",
    title: "A little scoop.\nA lot of wonder.",
    image: "/brand/new-pista.webp",
    tone: "pista",
  },
  {
    name: "Mango",
    title: "Sunshine,\nby the spoonful.",
    image: "/brand/new-mango.webp",
    tone: "mango",
  },
  {
    name: "Chocolate",
    title: "Give in to\nsomething lovely.",
    image: "/brand/new-chocolate.webp",
    tone: "chocolate",
  },
];
const descriptions = [
  "A little nostalgia on a stick.",
  "Bright little breaks from the everyday.",
  "Crunch, scoop, and a happy ending.",
  "Little cups. Lovely moments.",
  "Make room for something special.",
  "Layers of feel-good indulgence.",
  "A deliciously different kind of crunch.",
  "Good things taste better together.",
];
export default function Home() {
  const [slide, setSlide] = useState(0),
    [menu, setMenu] = useState(false),
    [active, setActive] = useState<Collection | null>(null),
    [query, setQuery] = useState(""),
    [showAll, setShowAll] = useState(false),
    [chat, setChat] = useState(false),
    [legal, setLegal] = useState(""),
    [faq, setFaq] = useState(-1);
  const [messages, setMessages] = useState<
    { role: string; text: string; action?: string }[]
  >([
    {
      role: "assistant",
      text: "Hello, and welcome to Him Cream. Looking for a flavour, a collection, or a little help?",
    },
  ]);
  const [question, setQuestion] = useState(""),
    [busy, setBusy] = useState(false),
    [chatError, setChatError] = useState("");
  const [formState, setFormState] = useState(""),
    [saving, setSaving] = useState(false),
    [kind, setKind] = useState("General enquiry");
  const chatEnd = useRef<HTMLDivElement>(null),
    dialog = useRef<HTMLDialogElement>(null),
    lastFocus = useRef<HTMLElement | null>(null);
  const hero = heroSlides[slide],
    modalOpen = !!active || !!legal;
  useEffect(() => {
    try {
      const m = sessionStorage.getItem("him-chat");
      if (m) setMessages(JSON.parse(m));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      sessionStorage.setItem("him-chat", JSON.stringify(messages));
    } catch {}
    chatEnd.current?.scrollIntoView({ block: "nearest" });
  }, [messages, busy]);
  useEffect(() => {
    if (modalOpen) {
      lastFocus.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      lastFocus.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);
  function close() {
    setActive(null);
    setLegal("");
    setQuery("");
  }
  async function ask(value = question) {
    if (!value.trim() || busy) return;
    setQuestion("");
    setBusy(true);
    setChatError("");
    setMessages((m) => [...m, { role: "user", text: value }]);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value }),
      });
      const d = (await r.json()) as {
        error?: string;
        answer: string;
        action?: string;
        message: string;
        id: string;
      };
      if (!r.ok) throw Error(d.error || "The request could not be completed.");
      setMessages((m) => [
        ...m,
        { role: "assistant", text: d.answer, action: d.action },
      ]);
    } catch (e) {
      setChatError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  function enquire(product?: string, partner = false) {
    close();
    setKind(
      partner
        ? "Distributor partnership"
        : product
          ? "Product enquiry"
          : "General enquiry",
    );
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
      if (product) {
        const text = document.getElementById("message") as HTMLTextAreaElement;
        if (text) text.value = `I would like to enquire about ${product}.`;
      }
    }, 50);
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setFormState("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const fields=new URLSearchParams();
      for(const [key,value] of Object.entries(data))fields.append(key,String(value));
      fields.set("form-name","him-enquiries");
      const response=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:fields.toString()});
      if(!response.ok) throw Error("Your enquiry could not be submitted. Please try again.");
      setFormState("Your enquiry was submitted to the portfolio site operator.");
      form.reset();
    } catch (e) {
      setFormState((e as Error).message);
    } finally {
      setSaving(false);
    }
  }
  const faqs = [
    [
      "Can I order online?",
      "For now, this website helps you explore the range and send enquiries. Prices, stock and delivery arrangements are confirmed directly by the Him Cream team. No online payment is collected.",
    ],
    [
      "How can I become a distributor?",
      "Select Distributor partnership in the enquiry form and share your city and business requirements. You can also contact the team directly on 9960627775 or 9765607772.",
    ],
    [
      "Where can I find ingredient and allergen details?",
      "Always check the actual product packaging. For dietary requirements, allergens or nutrition information, please confirm directly with Him Cream before purchasing.",
    ],
    [
      "Where is Him Cream based?",
      "The source website lists PATIL AGRO PRODUCT COMPANY at Kalambi Road, Tal Miraj, Dist. Sangli (MH) 416 410, India.",
    ],
  ];
  return (
    <div>
      <div className="announcement">
        Independent portfolio redesign{" "}
        <span>
          Discover Him Cream <ArrowUpRight size={12} />
        </span>
      </div>
      <header>
        <a className="wordmark" href="#home" aria-label="Him Cream home">
          Him<span>Cream</span>
          <i>YE TO AMRIT HAI!</i>
        </a>
        <nav className={menu ? "nav-open" : ""} aria-label="Main navigation">
          {[
            ["Home", "home"],
            ["Our story", "story"],
            ["Our collection", "collections"],
            ["Partner with us", "partnership"],
          ].map(([label, id]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="mobile-toggle icon-btn"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section id="home" className={"hero " + hero.tone}>
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> HIMALAYAN-INSPIRED HAPPINESS
            </div>
            <h1>
              {hero.title.split("\n").map((t, i) => (
                <span key={t} className={i ? "italic" : ""}>
                  {t}
                  <br />
                </span>
              ))}
            </h1>
            <p>
              For the first bite. The last spoonful.
              <br />
              And all the little moments in between.
            </p>
            <a className="btn" href="#collections">
              Explore our collection <ArrowUpRight size={19} />
            </a>
            <a className="text-link hero-story" href="#story">
              Meet Him Cream <ArrowRight size={16} />
            </a>
            <div className="hero-bottom">
              <span className="hero-tagline">“Ye to amrit hai!”</span>
              <div className="slide-controls">
                <span>
                  0{slide + 1}
                  <i> / 03</i>
                </span>
                <button
                  aria-label="Previous featured flavour"
                  onClick={() => setSlide((slide + 2) % 3)}
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  aria-label="Next featured flavour"
                  onClick={() => setSlide((slide + 1) % 3)}
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              key={hero.image}
              src={hero.image}
              alt={`Him Cream ${hero.name} tub and lid from the official brand website`}
              fetchPriority="high"
            />
            <div className="round-stamp">
              LITTLE MOMENTS
              <br />
              <Sparkles size={24} />
              <br />
              BIG HAPPINESS
            </div>
            <div className="hero-photo-caption">
              <span>THE {hero.name.toUpperCase()} EDIT</span>
            </div>
          </div>
        </section>
        <div className="brand-ribbon">
          <span>
            <Mountain /> A little mountain inspiration
          </span>
          <i>✦</i>
          <span>
            <Snowflake /> A whole world of frozen delights
          </span>
          <i>✦</i>
          <span>
            <Sparkles /> Made for your happy moments
          </span>
        </div>
        <section id="collections" className="collections section">
          <div className="section-top">
            <div>
              <div className="eyebrow">FIND YOUR LITTLE HAPPINESS</div>
              <h2>
                A flavour for <em>every mood.</em>
              </h2>
            </div>
            <div className="collection-intro">
              <p>
                From nostalgic kulfis to treats worth sharing.
                <br />
                There’s a little something for everyone.
              </p>
              <button
                className="text-link"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll
                  ? "Show featured collections"
                  : "Explore all 8 collections"}{" "}
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
          <div className="collection-grid">
            {collections.slice(0, showAll ? 8 : 4).map((c, i) => (
              <button
                className="collection-card"
                key={c.id}
                onClick={() => {
                  setActive(c);
                  setQuery("");
                }}
              >
                <div className={"collection-photo photo-" + i}>
                  <img
                    src={c.image}
                    alt={c.name + " collection photograph"}
                    loading="lazy"
                  />
                  <span className="collection-count">
                    {c.products.length} varieties
                  </span>
                  <span className="round-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="collection-title">
                  <span>0{i + 1}</span>
                  <h3>{c.name}</h3>
                </div>
                <p>{descriptions[i]}</p>
              </button>
            ))}
          </div>
        </section>
        <section id="story" className="story section">
          <div className="story-image">
            <img
              src="/brand/mountain-pista.webp"
              alt="Him Cream Pista cup against a mountain landscape, brand promotional image"
              loading="lazy"
            />
            <span>
              INSPIRED BY THE MOUNTAINS.
              <br />
              ENJOYED IN YOUR MOMENTS.
            </span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">THE HEART OF HIM CREAM</div>
            <h2>
              A name with
              <br />a little <em>altitude.</em>
            </h2>
            <p>
              “Him” is where our story begins. Inspired by the beauty of the
              Himalayas, Him Cream brings a little mountain wonder to the
              everyday.
            </p>
            <p>
              From a familiar kulfi to a family pack passed around the table, we
              believe the smallest moments can leave the sweetest memories.
            </p>
            <div className="story-signature">
              Ye to amrit hai!<span>THAT FIRST-BITE FEELING.</span>
            </div>
            <a href="#collections" className="text-link">
              Find your next favourite <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="partnership" className="partnership">
          <div className="mountain-line" aria-hidden="true">
            <Mountain size={240} strokeWidth={0.4} />
          </div>
          <div>
            <div className="eyebrow">LET’S GROW SOMETHING SWEET</div>
            <h2>
              Bring a little Him Cream
              <br />
              to <em>your neighbourhood.</em>
            </h2>
            <p>
              For distributors and retailers who want to be part of the story.
              <br />
              Start a conversation with our team.
            </p>
          </div>
          <button
            className="btn light"
            onClick={() => enquire(undefined, true)}
          >
            Become a partner <ArrowUpRight size={19} />
          </button>
        </section>
        <section className="faq section">
          <div>
            <div className="eyebrow">A LITTLE HELP</div>
            <h2>
              Good questions.
              <br />
              <em>Simple answers.</em>
            </h2>
            <button className="text-link" onClick={() => setChat(true)}>
              Ask our assistant <MessageCircle size={18} />
            </button>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div key={q} className="faq-item">
                <button
                  aria-expanded={faq === i}
                  onClick={() => setFaq(faq === i ? -1 : i)}
                >
                  {q}
                  {faq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {faq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact section">
          <div className="contact-copy">
            <div className="eyebrow">WE’D LOVE TO HEAR FROM YOU</div>
            <h2>
              Let’s make
              <br />
              <em>something sweet.</em>
            </h2>
            <p>
              A product question, a partnership idea,
              <br />
              or just a little hello. We’re all ears.
            </p>
            <a href="tel:+919960627775">
              <Phone size={18} />
              <span>9960627775 / 9765607772</span>
            </a>
            <a href="mailto:himcream2005@gmail.com">
              <Mail size={18} />
              <span>himcream2005@gmail.com</span>
            </a>
            <div className="address">
              <MapPin size={18} />
              <span>
                PATIL AGRO PRODUCT COMPANY
                <br />
                Kalambi Road, Tal Miraj,
                <br />
                Dist. Sangli (MH) 416 410, India
              </span>
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  placeholder="A name we can call you"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                />
              </label>
              <label>
                Your city
                <input
                  name="city"
                  placeholder="Where are you based?"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="address-level2"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email address
                <input
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Phone number
                <input
                  name="phone"
                  placeholder="Your mobile number"
                  type="tel"
                  required
                  pattern="[+0-9 ()\-]{10,18}"
                  autoComplete="tel"
                />
              </label>
            </div>
            <label>
              I’m here for
              <select
                name="kind"
                value={kind}
                onChange={(e) => setKind(e.target.value)}
              >
                {[
                  "General enquiry",
                  "Product enquiry",
                  "Distributor partnership",
                  "Retail partnership",
                ].map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
            </label>
            <label>
              Your message
              <textarea
                id="message"
                name="message"
                placeholder="Tell us a little more…"
                required
                minLength={10}
                maxLength={2000}
                rows={3}
              />
            </label>
            <input
              name="website"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label className="consent">
              <input name="consent" type="checkbox" required /> I agree to have
              my details stored to handle this enquiry.{" "}
              <button type="button" onClick={() => setLegal("Privacy notice")}>
                Privacy notice
              </button>
            </label>
            <div className="form-footer">
              <button className="btn" disabled={saving}>
                {saving ? "Saving enquiry…" : "Send your enquiry"}
                <ArrowUpRight size={18} />
              </button>
              <small>
                For a direct response,
                <br />
                call or email the team.
              </small>
            </div>
            {formState && (
              <p className="form-status" role="status">
                {formState}
              </p>
            )}
          </form>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <div>
            <a className="wordmark" href="#home">
              Him<span>Cream</span>
              <i>YE TO AMRIT HAI!</i>
            </a>
            <p>Little moments. Sweet memories.</p>
          </div>
          <div>
            <span>EXPLORE</span>
            <a href="#story">Our story</a>
            <a href="#collections">Our collection</a>
            <a href="#partnership">Partner with us</a>
          </div>
          <div>
            <span>SAY HELLO</span>
            <a href="mailto:himcream2005@gmail.com">himcream2005@gmail.com</a>
            <a href="tel:+919960627775">+91 9960627775</a>
            <a href="#contact">
              Sangli, Maharashtra <ArrowUpRight size={12} />
            </a>
          </div>
          <a className="back-top" href="#home">
            Back to the top <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Him Cream. A little joy goes a long
            way.
          </span>
          <div>
            <button onClick={() => setLegal("Privacy notice")}>Privacy</button>
            <button onClick={() => setLegal("Website terms")}>Terms</button>
            <a
              href="https://www.purehimcream.com/"
              target="_blank"
              rel="noreferrer"
            >
              Brand source <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="footer-watermark" aria-hidden="true">
          a little taste of wonder.
        </div>
      </footer>
      <button
        className="chat-launcher"
        onClick={() => setChat(!chat)}
        aria-label={chat ? "Close assistant" : "Ask Him Cream assistant"}
      >
        {chat ? <X size={22} /> : <MessageCircle size={22} />}
        <span>{chat ? "Close" : "A little help?"}</span>
      </button>
      {chat && (
        <aside className="chat-panel" aria-label="Him Cream Assistant">
          <div className="chat-header">
            <div className="chat-avatar">
              <Sparkles size={20} />
            </div>
            <div>
              <strong>Him Cream Assistant</strong>
              <small>Catalog & enquiry help</small>
            </div>
            <button aria-label="Close assistant" onClick={() => setChat(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="chat-messages" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={"chat-bubble " + m.role}>
                {m.text}
                {m.action && (
                  <a href={"#" + m.action} onClick={() => setChat(false)}>
                    Take me there <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            ))}
            {busy && (
              <div className="chat-bubble assistant">Checking the catalog…</div>
            )}
            {chatError && (
              <div role="alert" className="chat-error">
                {chatError}
                <button
                  onClick={() =>
                    ask(
                      messages.filter((m) => m.role === "user").at(-1)?.text ||
                        "Help",
                    )
                  }
                >
                  Retry
                </button>
              </div>
            )}
            <div ref={chatEnd} />
          </div>
          <div className="quick-questions">
            {[
              "Explore flavours",
              "Become a distributor",
              "Contact the team",
            ].map((q) => (
              <button disabled={busy} key={q} onClick={() => ask(q)}>
                {q}
              </button>
            ))}
          </div>
          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              ask();
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a little question…"
              aria-label="Your question"
              maxLength={500}
            />
            <button
              disabled={busy || !question.trim()}
              aria-label="Send question"
            >
              <Send size={18} />
            </button>
          </form>
          <div className="chat-note">
            Catalog-based answers. Chat stays in this browser session.
          </div>
        </aside>
      )}
      <dialog
        ref={dialog}
        className="modal"
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
      >
        <button
          className="modal-close icon-btn"
          onClick={close}
          aria-label="Close dialog"
        >
          <X />
        </button>
        {active && (
          <>
            <div className="eyebrow">THE HIM CREAM COLLECTION</div>
            <h2>{active.name}</h2>
            <p className="modal-description">
              Find your favourite. Ask our team for current prices and
              availability.
            </p>
            <div className="catalog-search">
              <Search size={18} />
              <input
                aria-label="Search products"
                placeholder="Find a flavour…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span>
                {
                  active.products.filter((p) =>
                    (p.name + " " + p.size)
                      .toLowerCase()
                      .includes(query.toLowerCase()),
                  ).length
                }{" "}
                varieties
              </span>
            </div>
            <div className="product-grid">
              {active.products
                .filter((p) =>
                  (p.name + " " + p.size)
                    .toLowerCase()
                    .includes(query.toLowerCase()),
                )
                .map((p) => (
                  <article key={p.id}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} loading="lazy" />
                    ) : (
                      <div className="no-photo">
                        <Snowflake size={30} />
                        <span>Product photo coming soon</span>
                      </div>
                    )}
                    <small>{p.size}</small>
                    <h3>{p.name}</h3>
                    <button
                      className="text-link"
                      onClick={() => enquire(p.name + " " + p.size)}
                    >
                      Enquire <ArrowUpRight size={16} />
                    </button>
                  </article>
                ))}
            </div>
            {!active.products.some((p) =>
              (p.name + " " + p.size)
                .toLowerCase()
                .includes(query.toLowerCase()),
            ) && (
              <p className="empty-state">
                No matching flavours. Try another name.
              </p>
            )}
          </>
        )}
        {legal && (
          <>
            <div className="eyebrow">CLEAR & SIMPLE</div>
            <h2>{legal}</h2>
            {legal === "Privacy notice" ? (
              <div className="legal-copy">
                <p>
                  The portfolio site operator receives the name, email, phone, city,
                  enquiry type and message you submit through Netlify Forms.
                  Records are not automatically emailed to Him Cream. For a
                  direct response, use the published phone or email links.
                </p>
                <p>
                  Chat messages remain in your browser session. Questions are
                  sent to the website server to retrieve catalog answers and are
                  not saved in the enquiry database. Temporary hashed
                  identifiers support abuse prevention. No payment details are
                  collected.
                </p>
                <p>
                  Do not submit sensitive information. To request deletion of an
                  enquiry, contact the operator of this private website . A final business-approved privacy policy
                  and retention period are required before a public launch.
                </p>
              </div>
            ) : (
              <div className="legal-copy">
                <p>
                  This is a private recreation of the Him Cream brand website.
                  Catalog content and photos were retrieved from
                  purehimcream.com. Product availability, sizes, ingredients,
                  prices and delivery arrangements must be confirmed directly
                  with the business.
                </p>
                <p>
                  No payments, purchases or binding order confirmations are made
                  here.
                </p>
                <p>
                  Brand assets belong to their respective owners.
                  Business-approved legal terms must replace this notice before
                  public launch.
                </p>
              </div>
            )}
          </>
        )}
      </dialog>
    </div>
    
  );
}
