import { useState, type ReactNode } from 'react';
import innerLight from './photos/inner-light.webp';
import eliya from './photos/eliya.webp';
import './site.css';

const contactUrl = 'https://wa.me/972525457873?text=' + encodeURIComponent('היי אלייה, אשמח לשמוע על הליווי ולקבוע שיחת התאמה.');
const nav = [['למי זה מתאים', 'for-you'], ['הדרך שלנו', 'journey'], ['נעים להכיר', 'about'], ['שאלות נפוצות', 'questions']];
const moments = [
  ['הכול ממשיך. משהו בפנים חסר.', 'יש עבודה, משימות ושגרה, אבל לפעמים עולה השאלה: האם אלה החיים שאני באמת רוצה לעצמי?'],
  ['הרבה תשובות. מעט בהירות.', 'עוד קורס, עוד שיטה ועוד עצה. יש הרבה ידע, ועדיין חסר החיבור למה שנכון לך.'],
  ['יש בך משהו שמבקש לצאת.', 'רצון לתת מקום לקול שלך, לרצונות שנדחקו הצידה ולמה שבאת להביא לעולם.'],
];
const steps = [
  ['להיפגש', 'מתחילים בהיכרות ובבדיקת התאמה', 'בשיחה אפשר לספר מה מעסיק אותך, לשאול על הליווי ולברר יחד אם זה המקום המתאים לך.'],
  ['להעמיק', 'להכיר את מה שמתחת לשכבות', 'במפגשים נשלב כלים רגשיים ואנרגטיים להתבוננות במהות שלך, באמונות ובדפוסים שנוצרו לאורך הדרך.'],
  ['להתחבר', 'לתת לחיבור מקום בחיים', 'נפנה מקום להקשבה פנימית ולבחירה: מה מרגיש שלך, מה חשוב לך ואיך לתת לכך ביטוי ביומיום.'],
];
const faqs = [
  ['למי הליווי מתאים?', 'לנשים ולגברים שמחפשים כיוון ומשמעות, מרגישים רחוקים מעצמם או רוצים לפגוש את עצמם לעומק. גם אם קשה להגדיר בדיוק מה חסר, אפשר להתחיל מהתחושה ומהשאלות שיש עכשיו.'],
  ['צריך להגיע עם רקע רוחני?', 'אין צורך ברקע רוחני או בהיכרות עם שיטה מסוימת. המרחב פתוח לחילונים, לדתיים ולמי שמרגישים קרובים לעולם הרוח. אפשר להביא את השפה שלך, את האמונה שלך וגם שאלות וספקות.'],
  ['איפה נפגשים וכמה זמן נמשך מפגש?', 'המפגשים מתקיימים בזום או בקליניקה בזכרון יעקב ובראשון לציון. אורך מפגש הוא 60 דקות. את הזמינות ומקום המפגש מתאמים ישירות איתי.'],
  ['מה קורה בשיחת ההתאמה?', 'זו הזדמנות להכיר, לשתף במה שמביא אותך ולשאול על התהליך. אפשר לברר את אופי הליווי, העלות, התדירות והתנאים לפני שמחליטים להתחיל.'],
  ['כמה מפגשים צריך?', 'אין כאן מספר מפגשים קבוע שמתאים לכולם. את אופי התהליך והמשך הליווי מבררים יחד לפי מה שעולה במפגש ובהיכרות.'],
];
function Arrow() { return <span aria-hidden="true">←</span>; }
function ContactLink({ children = 'בואו נדבר על הדרך שלך', className = '' }: { children?: ReactNode; className?: string }) {
  return <a className={'button button-primary ' + className} href={contactUrl} target="_blank" rel="noopener noreferrer">{children}<Arrow /></a>;
}
function Diamond({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M14 13h36l11 17-29 30L3 30l11-17Z M3 30h58M14 13l18 47L50 13M14 13l18 17 18-17" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></svg>;
}
export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="eliya-site" dir="rtl" lang="he">
    <a className="skip-link" href="#main">דלג לתוכן</a>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="אלייה, חזרה לראש העמוד"><Diamond /><span><strong>אלייה</strong><small>טיפול רגשי ואנרגטי</small></span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'סגירת תפריט ×' : 'תפריט ☰'}</button>
        <nav id="main-nav" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="ניווט ראשי">
          {nav.map(([label, id]) => <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <ContactLink className="nav-contact">לשיחת התאמה</ContactLink>
        </nav>
      </div>
    </header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> מרחב להיזכר במי שאת ובמי שאתה</p>
            <h1 id="hero-title">הדרך שלך מתחילה<br /><em>בחיבור פנימה.</em></h1>
            <p className="hero-lead">להכיר את המהות שלך, להקשיב לקול הפנימי ולמצוא כיוון שיש בו משמעות עבורך.</p>
            <p className="hero-description">אני אלייה, מטפלת רגשית ואנרגטית. אני מזמינה אותך למפגש עמוק עם עצמך, למסע של התבוננות פנימית, ריפוי והתחדשות.</p>
            <div className="hero-actions"><ContactLink>אני רוצה למצוא את הכיוון שלי</ContactLink><a className="text-link" href="#journey">להכיר את הדרך <span aria-hidden="true">↓</span></a></div>
            <p className="quiet-note">אפשר להתחיל בשיחה. לא צריך להגיע עם כל התשובות.</p>
          </div>
          <figure className="hero-visual">
            <div className="image-frame"><img src={innerLight} width="1000" height="1333" alt="איור של גביש מואר לצד ענף זית, בהשראת היהלום הפנימי" fetchPriority="high" /><span className="visual-label">האור שבך, מתחת לכל השכבות</span></div>
            <figcaption><span className="tiny-diamond">◇</span> איור בהשראת הגישה של אלייה</figcaption>
          </figure>
        </div>
        <div className="container session-strip" aria-label="פרטי המפגשים"><span><b>מפגש אישי</b> בקצב שלך</span><span><b>60 דקות</b> למפגש</span><span><b>זום או קליניקה</b> זכרון יעקב · ראשון לציון</span></div>
      </section>

      <section className="section" id="for-you" aria-labelledby="for-you-title">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow">אולי משהו מזה מוכר לך</p><h2 id="for-you-title">יש לך חיים שלמים.<br />יש בהם מקום גם לך?</h2><p>לפעמים החיפוש מתחיל דווקא כשמבחוץ הכול נראה בסדר.</p></div>
          <div className="moments-grid">{moments.map(([title, body], i) => <article className="moment-card" key={title}><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <p className="section-afterword">לא צריך להפוך למישהו אחר. אפשר להתחיל בלהקשיב למה שכבר שלך.</p>
        </div>
      </section>

      <section className="section approach-section" id="approach" aria-labelledby="approach-title">
        <div className="container approach-grid">
          <div className="diamond-panel"><Diamond /><p>כל אחד מאיתנו בא לעולם<br />עם נשמה שהיא כמו<br /><strong>יהלום נקי ונוצץ.</strong></p><span>מתוך המילים של אלייה</span></div>
          <div className="section-copy"><p className="eyebrow">האור שמתחת לשכבות</p><h2 id="approach-title">לפגוש את עצמך.<br />מעבר למה שהתרגלת להיות.</h2><p>במהלך השנים אנחנו עוברים חוויות שמשאירות בנו רשמים, רגשות וזיכרונות. נוצרים דפוסי התנהגות, תבניות מחשבה ואמונות, שמכסים על אותו יהלום נוצץ כשכבות הגנה.</p><p>עם הזמן, אנחנו מתחילים להאמין שכל השכבות האלה הן מי שאנחנו.</p><p>אני יוצרת מרחב חם ומכיל לעבודה פנימית עמוקה. בעזרת כלים רגשיים ואנרגטיים נתבונן יחד בשכבות, נכיר את המהות הנשמתית ואת שפת הנשמה הייחודית לך, ונפנה מקום לחיבור מחודש לעצמך.</p><a className="text-link" href="#journey">איך נראית הדרך יחד <Arrow /></a></div>
        </div>
      </section>

      <section className="section journey-section" id="journey" aria-labelledby="journey-title">
        <div className="container"><div className="section-heading centered"><p className="eyebrow">מהיכרות לחיבור</p><h2 id="journey-title">מרחב לעומק. מקום לחיים.</h2><p>לא רק לדבר על שינוי, אלא לפגוש את מה שקורה בתוכך.</p></div>
          <div className="steps-grid">{steps.map(([label, title, body], i) => <article className="step-card" key={label}><div className="step-top"><span>0{i + 1}</span><p>{label}</p></div><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="journey-invitation"><p>הדרך לא חייבת להיות ברורה מראש.<br /><strong>אפשר להתחיל מלפגוש את מה שיש עכשיו.</strong></p><ContactLink>לבדוק אם הליווי מתאים לי</ContactLink></div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <figure className="portrait"><img src={eliya} width="800" height="994" loading="lazy" alt="אלייה, מטפלת רגשית ואנרגטית" /><figcaption>אלייה · נעים להכיר</figcaption></figure>
          <div className="section-copy"><p className="eyebrow">האדם שמלווה אותך בדרך</p><h2 id="about-title">נעים להכיר,<br />אני אלייה.</h2><p className="about-intro">מטפלת רגשית ואנרגטית, אינטואיטיבית מלידה.</p><p>את הדרך שלי לא גיליתי רק מתוך תיאוריה, אלא למדתי על בשרי. מתוך חוויות חיים מורכבות ולא פשוטות קיבלתי ידיעות ותובנות עמוקות, ומתוכן התחזקה בי האמונה בדרך שלי ובאמת שלי.</p><p>אני מאמינה שכל אדם הוא טוב מיסודו. אני מלווה תהליכים של חזרה אל המהות הגולמית והנקייה, וחיבור מחדש לעצמנו ולבורא.</p><p>אם מרגיש לך שזה הזמן לעבור את המסע הזה בליווי רגיש, אמיתי ומכיל, אני כאן בשבילך.</p><span className="signature">באהבה, אלייה</span><a className="text-link" href="#contact">אפשר להכיר בשיחה <Arrow /></a></div>
        </div>
      </section>

      <section className="section faq-section" id="questions" aria-labelledby="questions-title">
        <div className="container faq-grid"><div className="section-heading"><p className="eyebrow">לפני שעושים צעד</p><h2 id="questions-title">מותר לבוא<br />עם שאלות.</h2><p>הנה כמה דברים שאפשר לדעת כבר עכשיו. את כל השאר אפשר לשאול אותי.</p><ContactLink>יש לי שאלה לאלייה</ContactLink></div>
          <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title"><div className="container"><div className="contact-card"><Diamond /><p className="eyebrow">הצעד הראשון יכול להיות קטן</p><h2 id="contact-title">למצוא את הדרך חזרה הביתה,<br /><em>אל עצמך.</em></h2><p>אם משהו במילים האלה פגש אותך, אני מזמינה אותך לשיחת התאמה.<br />נכיר, נשאל ונבדוק יחד אם הליווי מתאים למה שחשוב לך עכשיו.</p><ContactLink>לקביעת שיחת התאמה עם אלייה</ContactLink><small>הקישור פותח את WhatsApp. ההודעה נשלחת רק לאחר אישורך באפליקציה.</small></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#top"><Diamond /><span><strong>אלייה</strong><small>טיפול רגשי ואנרגטי</small></span></a><p>ליווי אישי · זום · זכרון יעקב · ראשון לציון</p><a href="https://sites.google.com/view/eliya-emotional-spiritual-care" target="_blank" rel="noopener noreferrer">לאתר המקורי של אלייה <Arrow /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} אלייה</span><p>ליווי רגשי ואנרגטי אינו תחליף לטיפול רפואי או נפשי. אופי הליווי וההתאמה האישית נבחנים בשיחה.</p></div></footer>
  </div>;
}
