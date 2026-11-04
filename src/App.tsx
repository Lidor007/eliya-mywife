import React from 'react';
import { FileCard, Header, Group, Paragraph, Text, Closing, ButtonLink, Caption, Rule } from './components/files';
import hero from './photos/inner-light.png';
import './theme.css';
import './style.css';

const moments = [
 ['החיים ממשיכים. משהו בפנים חסר.', 'העבודה, המשימות והשגרה ממלאות את היום, אבל לא תמיד ברור בשביל מה כל המרוץ הזה.'],
 ['עוד חיפוש, בלי תחושת כיוון.', 'עוד קורס, עוד שיטה ועוד עצה. הרבה ידע, ועדיין רצון להבין מה באמת נכון לך.'],
 ['יש רצון להביא משהו משלך לעולם.', 'לפעמים הקול הפנימי נבלע בתוך מה שצריך, מה שמצפים ומה שהתרגלנו להיות.'],
];
const intentions = [
 ['להקשיב פנימה', 'לתת מקום לרצונות שלך, גם לאלה שנדחקו הצידה לאורך הדרך.'],
 ['להכיר את המהות שלך', 'להתבונן במה שמרגיש שלך, ובאמונות ובדפוסים שאולי כבר אינם מתאימים.'],
 ['לפנות מקום לבחירה', 'לחקור מה נותן משמעות לחיי היומיום ואיך לבטא את מי שאת או אתה בעולם.'],
];
const faqs = [
 ['למי המרחב הזה מיועד?', 'לנשים ולגברים שמחפשים כיוון ומשמעות, מרגישים שהם חיים על אוטומט, או רוצים להעמיק את החיבור לעצמם. אין צורך לבוא עם תשובה מוכנה לשאלה מה הייעוד שלך.'],
 ['צריך להיות אדם רוחני?', 'לא. הפנייה היא גם לחילונים, גם לדתיים וגם לאנשים שמרגישים קרובים לעולם הרוח. אפשר להתחיל מהשאלות ומהחוויה האישית שלך.'],
 ['איפה מתקיימים המפגשים?', 'לפי המידע באתר של אלייה, המפגשים מתקיימים בזום או בקליניקה בזכרון יעקב ובראשון לציון. אורך מפגש הוא 60 דקות. את האפשרויות והזמינות מבררים ישירות איתה.'],
 ['מה כדאי לדעת לפני שמתחילים?', 'בשיחת התאמה אפשר לברר יחד את אופי הליווי, העלות והתנאים, ולשאול כל מה שחשוב לך. אין כאן הבטחה לתוצאה מסוימת. ליווי רגשי ואנרגטי אינו תחליף לטיפול רפואי או נפשי כשיש בו צורך.'],
];
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
export function App() {
 return <main dir="rtl" lang="he" className="eliya-site"><FileCard>
  <div className="site-top"><span className="site-name">אלייה <span>•</span> טיפול רגשי ואנרגטי</span><span className="edition">גרסת תצוגה</span></div>
  <nav className="section-nav" aria-label="ניווט באתר"><button type="button" onClick={() => go('approach')}>הגישה</button><button type="button" onClick={() => go('about')}>נעים להכיר</button><button type="button" onClick={() => go('questions')}>שאלות נפוצות</button><button type="button" onClick={() => go('contact')}>ליצירת קשר</button></nav>
  <section className="hero" aria-label="פתיחה">
   <div className="hero-copy"><span className="eyebrow">חיבור פנימה. כיוון משלך.</span><Header title="לא צריך לחפש את עצמך בכל מקום חוץ מבפנים." intro="מרחב להקשיב לקול הפנימי, להכיר את המהות שלך ולחקור מה באמת באת לתת לעולם." />
   <Paragraph>גם כשהחיים מלאים, אפשר להרגיש רחוקים מעצמנו. אני מזמינה אותך לעצור רגע את האוטומט ולפנות מקום למפגש עמוק עם עצמך.</Paragraph>
   <button type="button" className="cta primary file-hover-underline" onClick={() => go('contact')}>אני רוצה למצוא את הכיוון שלי <span aria-hidden="true">←</span></button><p className="micro">לא להפוך למישהו אחר. לפגוש את מה שכבר שלך.</p></div>
   <figure className="hero-art"><img src={hero} alt="איור של גביש שקוף עם אור רך וענף זית, כסמל להתבוננות פנימית"/><figcaption>איור רעיוני: האור שמתחת לשכבות.</figcaption></figure>
  </section>
  <section className="section-block"><Group label="אולי משהו מזה מוכר לך" heading><div className="moments">{moments.map(([title,body],i)=><article className="moment" key={title}><span className="number">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></Group></section>
  <section id="approach" className="section-block"><Group label="פחות רעש מבחוץ. יותר הקשבה מבפנים." heading><Text><Paragraph>לא עוד רשימה של מה צריך לעשות כדי להצליח. כאן יש מקום להקשיב למה שבאמת שלך, בלי לבטל את מה שכבר בנית.</Paragraph><Paragraph>הגישה של אלייה משלבת כלים רגשיים ואנרגטיים עם התבוננות במהות הנשמתית. הכוונה היא ליצור מקום לחוויה אישית ולעבודה פנימית, ולא להישאר רק ברמת התיאוריה.</Paragraph></Text><div className="intentions">{intentions.map(([title,body],i)=><article key={title}><span className="step">{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></Group></section>
  <section className="quote-section"><p>לא כל תשובה נמצאת בחוץ.</p><p>לפעמים ההתחלה היא להקשיב למה שכבר מבקש מקום בפנים.</p></section>
  <section id="about" className="section-block about"><Group label="נעים להכיר, אני אלייה" heading><div className="about-grid"><div><span className="eyebrow">מטפלת רגשית ואנרגטית</span><Paragraph>אני מלווה עבודה פנימית בעזרת כלים רגשיים ואנרגטיים, מתוך אמונה באפשרות להתקרב לעצמנו ולמהות שלנו.</Paragraph><Paragraph>אני רואה את הנשמה כמו יהלום. חוויות, אמונות ודפוסים שנצברו לאורך החיים יכולים לכסות עליו. ההזמנה שלי היא להתבונן בשכבות האלה, ולפגוש את מה שמתחתיהן.</Paragraph></div><aside className="about-aside"><h3>מרחב למה ששלך</h3><p>להכיר את עצמך מעבר לציפיות.</p><p>להקשיב בלי למהר לתשובה.</p><p>לתת מקום למה שמבקש לבוא לעולם.</p></aside></div></Group></section>
  <section id="questions" className="section-block"><Group label="לפני שמתחילים" heading><div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true" className="faq-plus">+</span></summary><p>{a}</p></details>)}</div></Group></section>
  <section id="contact" className="contact section-block"><span className="eyebrow">אפשר להתחיל בשאלה אחת</span><Group label="מה מבקש מקום בחיים שלך עכשיו?" heading><Paragraph>אם משהו כאן פגש אותך, אפשר להכיר ולבדוק אם הליווי מתאים לך.</Paragraph><ButtonLink href="https://sites.google.com/view/eliya-emotional-spiritual-care" variant="primary">לאתר של אלייה ולפרטי הקשר</ButtonLink><Caption>הקישור פותח את האתר הקיים של אלייה, שבו מופיעה האפשרות לפנות לשיחת התאמה. לא נשלחת פנייה מהדף הזה.</Caption></Group></section>
  <Rule/><Closing>אלייה המתוקה • גרסת אתר לתצוגה פרטית. התוכן מבוסס על מסמך קהל היעד ועל האתר של אלייה. אין כאן טופס איסוף מידע, תשלום או הזמנה.</Closing>
 </FileCard></main>;
}
