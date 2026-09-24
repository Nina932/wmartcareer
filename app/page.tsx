"use client";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

const applyUrl =
  "https://waymart.selfrecruit.ge/e8e7ca79-c3fc-475c-9c01-bfde96354572";
const stories = [
  {
    title: "სტუმრის დახვედრა",
    copy: "მოლარე-კონსულტანტი სწრაფად და თავაზიანად ემსახურება მძღოლებს, მოგზაურებსა და მარკეტში შემოსულ სტუმრებს.",
    image: "/media/waymart-story-2.avif",
  },
  {
    title: "პროდუქტი და სივრცე",
    copy: "პროდუქტის მიღება და თაროებზე განთავსება ყოველდღიური რიტმის ნაწილია. მოწესრიგებული სივრცე სტუმარს სასიამოვნო პაუზას უქმნის.",
    image: "/media/waymart-story-1.avif",
  },
  {
    title: "გუნდი ერთ ცვლაში",
    copy: "შეთანხმებული გრაფიკი, პასუხისმგებლობა და კოლეგებთან თანამშრომლობა ეხმარება გუნდს, რომ თითოეული ცვლა კარგად წარიმართოს.",
    image: "/media/waymart-storefront.jpg",
  },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [story, setStory] = useState(0);
  return (
    <main className="site">
      <header className="nav">
        <a href="#home" className="brand-logo" aria-label="Way Mart">
          WAY MART
        </a>
        <span className="nav-tag">CAREERS / GEORGIA</span>
        <button
          className="nav-toggle"
          onClick={() => setMenu(!menu)}
          aria-label="მენიუ"
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#brand">Way Mart</a>
          <a href="#people">გუნდი</a>
          <a href="#role">პოზიცია</a>
          <a
            className="nav-apply"
            href={applyUrl}
            target="_blank"
            rel="noreferrer"
          >
            განაცხადი <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" /> WAYMART RECRUIT & WIN
            </div>
            <h1>
              შენი გზა
              <br />
              <em>იწყება აქ.</em>
            </h1>
            <p>
              გაიცანი Way Mart, ყოველდღიური საქმე და გუნდი. დატრიალდი, შეიტყვე
              მეტი და ნახე, როგორ შეგიძლია შემოგვიერთდე.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#brand">
                გაიცანი Way Mart <ChevronRight size={18} />
              </a>
              <a className="text-link" href="#role">
                ნახე სამუშაო პირობები <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-wheel">
            <div className="wheel-kicker">
              ორი დატრიალება
              <br />
              <strong>ერთი ახალი დასაწყისი</strong>
            </div>
            <RecruitWheel />
          </div>
        </div>
        <div className="hero-bottom">
          <span>WAY MART CAREERS</span>
          <div className="marquee">
            ყავა <b>✦</b> ჰოთდოგი <b>✦</b> გუნდი <b>✦</b> შენი მეგობარი გზაზე{" "}
            <b>✦</b>
          </div>
          <span>
            ქვევით <ArrowDown size={12} />
          </span>
        </div>
      </section>
      <section className="intro" id="brand">
        <div className="section-label">01 / ბრენდი</div>
        <div className="intro-copy">
          <h2>
            შენი მეგობარი
            <br />
            <span>გზაზე.</span>
          </h2>
          <p>
            Way Mart სოკარის ავტოგასამართ სადგურებთან არსებული მარკეტების
            ქსელია. 70-ზე მეტ ლოკაციაზე ის მოგზაურებსა და მძღოლებს სთავაზობს
            გზისთვის საჭირო პროდუქტებს, სწრაფ მომსახურებას და სასიამოვნო პაუზას.
          </p>
          <div className="brand-facts">
            <b>
              70+ <small>ლოკაცია</small>
            </b>
            <b>
              ყავა <small>იტალიური გემო</small>
            </b>
            <b>
              24/7 <small>გზის რიტმი</small>
            </b>
          </div>
          <p className="brand-note">
            Way Mart-ის პოზიციაა, გზაზე მყოფი ადამიანებისთვის იყოს ახლო,
            საიმედო და მოსახერხებელი მეგობარი.
          </p>
        </div>
        <div className="intro-image">
          <Image
            src="/media/waymart-storefront.jpg"
            alt="Way Mart-ის მაღაზია SOCAR-ის სადგურზე"
            fill
            sizes="(max-width: 800px) 100vw, 40vw"
          />
          <span>WAY MART / YOUR FRIEND ON THE ROAD</span>
        </div>
      </section>
      <section className="products">
        <div className="section-label">02 / Way Mart-ის არჩევანი</div>
        <h2 className="products-heading">
          გზისთვის საჭირო
          <br />
          <span>გემო და არჩევანი.</span>
        </h2>
        <div className="product-row">
          <div className="product-card red">
            <span>01 / COFFEE</span>
            <strong>იტალიური ყავა</strong>
            <small>პატარა პაუზა გზის გასაგრძელებლად.</small>
          </div>
          <div className="product-card photo">
            <Image
              src="/media/waymart-story-1.avif"
              alt="Way Mart-ის პროდუქტი და მაღაზიის გარემო"
              fill
              sizes="30vw"
            />
            <strong>
              ცხელი ჰოთდოგი
              <br />
              და ცომეული
            </strong>
          </div>
          <div className="product-card lime">
            <span>03 / EVERYDAY</span>
            <strong>
              გზის
              <br />
              პროდუქტები
            </strong>
            <small>ექსკლუზიური არჩევანი და პერიოდული შეთავაზებები.</small>
          </div>
        </div>
        <div className="offers-note">
          <b>აქციები და სიახლეები</b>
          <span>
            Way Mart-ში პერიოდულად იცვლება ფასდაკლებები, ქულების აქციები,
            საკვებისა და სასმელის შეთავაზებები და სეზონური სიახლეები.
          </span>
        </div>
      </section>
      <section className="people" id="people">
        <div className="section-label">03 / ცვლის ამბები</div>
        <div className="people-head">
          <h2>
            გაიცანი საქმე
            <br />
            <span>და შენი გუნდი.</span>
          </h2>
          <div className="story-controls">
            <button
              onClick={() => setStory((story + 1) % stories.length)}
              aria-label="შემდეგი ამბავი"
            >
              <ChevronRight />
            </button>
            <span>
              0{story + 1} / 0{stories.length}
            </span>
          </div>
        </div>
        <div className="story-panel">
          <div className="story-photo">
            <Image
              src={stories[story].image}
              alt="Way Mart-ის სამუშაო გარემო"
              fill
              sizes="50vw"
            />
            <span>STORE LIFE / 0{story + 1}</span>
          </div>
          <div className="story-copy">
            <p className="story-kicker">{stories[story].title}</p>
            <p className="story-quote">{stories[story].copy}</p>
            <div className="story-person">
              <strong>მოლარე-კონსულტანტის ყოველდღიურობა</strong>
              <span>რეალური მოვალეობები ვაკანსიის აღწერიდან</span>
            </div>
            <button
              className="story-next"
              onClick={() => setStory((story + 1) % stories.length)}
            >
              შემდეგი ამბავი <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <section className="role" id="role">
        <div className="role-heading">
          <div className="section-label">04 / ღია პოზიცია · თბილისი</div>
          <h2>
            მოლარე-
            <br />
            <span>კონსულტანტი.</span>
          </h2>
          <p>სრული განაკვეთი · 24-საათიანი ცვლის რეჟიმი</p>
          <a
            className="role-cta"
            href={applyUrl}
            target="_blank"
            rel="noreferrer"
          >
            შეავსე განაცხადი <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="role-facts">
          <Fact n="01" t="ანაზღაურება" d="110–120₾ თითო ცვლაში" />
          <Fact
            n="02"
            t="გრაფიკი"
            d="ყოველ მესამე დღეს 24-საათიანი ცვლა · თვეში 10–11 ცვლა · ცვლის შემდეგ 2 დღე დასვენება"
          />
          <Fact n="03" t="ბონუსი" d="200–250₾ თვეში" />
          <Fact
            n="04"
            t="დამატებითი პირობები"
            d="ჯანმრთელობის დაზღვევა · თბილისის შეუზღუდავი სატრანსპორტო ბარათი · ანაზღაურებადი შვებულება და ავადმყოფობის დღეები"
          />
          <Fact
            n="05"
            t="რას გააკეთებ"
            d="სტუმრის მომსახურება · სალაროს ოპერაციები · პროდუქტის მიღება და განთავსება · მაღაზიის სისუფთავე და წესრიგი"
          />
          <p className="role-note">
            მომსახურების გამოცდილება უპირატესობაა. მნიშვნელოვანია კომუნიკაცია,
            გუნდური მუშაობა, პასუხისმგებლობა, ღიმილი და ენერგია.
          </p>
        </div>
      </section>
      <section className="final">
        <div className="final-label">შემდეგი ნაბიჯი</div>
        <h2>
          გაიცანი.
          <br />
          <span>შემოგვიერთდი.</span>
        </h2>
        <a
          className="final-button"
          href={applyUrl}
          target="_blank"
          rel="noreferrer"
        >
          შეავსე განაცხადი <ArrowUpRight size={22} />
        </a>
      </section>
      <footer>
        <a className="brand-logo" href="#home">
          WAY MART
        </a>
        <span>შენი მეგობარი გზაზე</span>
        <div>
          <a
            href="https://www.facebook.com/WayMartGeorgia/"
            target="_blank"
            rel="noreferrer"
          >
            FACEBOOK
          </a>
          <a
            href="https://www.tiktok.com/@waymart"
            target="_blank"
            rel="noreferrer"
          >
            TIKTOK
          </a>
        </div>
      </footer>
    </main>
  );
}

function Fact({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="fact">
      <b>{n}</b>
      <div>
        <strong>{t}</strong>
        <span>{d}</span>
      </div>
    </div>
  );
}
function RecruitWheel() {
  const [spins, setSpins] = useState(0);
  const [busy, setBusy] = useState(false);
  const [reward, setReward] = useState("");
  function spin() {
    if (busy || spins >= 2) return;
    setBusy(true);
    const next = spins + 1;
    setSpins(next);
    window.setTimeout(() => {
      setReward(next === 2 ? "50₾ ვაუჩერი" : "ყავა ან ჰოთდოგი");
      setBusy(false);
    }, 950);
  }
  return (
    <div className="game">
      <div className="game-top">
        <span>WAYMART / REWARDS</span>
        <b>{String(spins + 1).padStart(2, "0")} / 02</b>
      </div>
      <div className="wheel-box">
        <div
          className={
            "wheel " + (busy ? "turning " : "") + (spins === 1 ? "second" : "")
          }
        >
          <i>ყავა</i>
          <i>სიურპრიზი</i>
          <i>ჰოთდოგი</i>
          <i>ბონუსი</i>
          <i>ვაუჩერი</i>
          <i>კიდევ სცადე</i>
        </div>
        <div className="wheel-pin">▼</div>
        <div className="wheel-core">{busy ? "..." : reward || "SPIN"}</div>
      </div>
      <div className="game-result">
        {reward ? (
          <>
            <strong>{reward}</strong>
            <small>
              {spins === 2
                ? "გააგრძელე განაცხადით და გაიგე კამპანიის პირობები."
                : "პირველი საჩუქარი გახსნილია. მეორე დატრიალება 50₾ ვაუჩერია."}
            </small>
          </>
        ) : (
          <small>
            პირველი დატრიალება — ყავა ან ჰოთდოგი. მეორე — 50₾ ვაუჩერი.
          </small>
        )}
      </div>
      <button onClick={spin} disabled={busy || spins >= 2}>
        {busy
          ? "იტრიალებს..."
          : spins >= 2
            ? "ორი საჩუქარი გახსნილია"
            : "დაატრიალე " + (spins + 1) + " / 2"}
      </button>
    </div>
  );
}
