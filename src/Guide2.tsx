import { useState } from 'react';
import portrait from './photos/eliya.webp';
import crystal from './photos/inner-light.webp';
import './site.css';
import './guide.css';

export const guideSteps = [
  {
    title: 'לתת מילים למה שחסר',
    subtitle: 'לפעמים החיפוש מתחיל במשפט שעדיין לא הרשינו לעצמנו להגיד.',
    time: '3 דקות',
    body: 'יכול להיות שהיום שלך מלא בדברים חשובים. ועדיין, כשמגיע רגע שקט, עולה תחושה שמשהו שלך נשאר בחוץ. לפני שממהרים לפתור אותה, אפשר פשוט לתת לה מילים.',
    prompts: ['באיזה רגע בשבוע האחרון הרגשת ריחוק מעצמך?', 'מה היה שם בפועל? אפשר לכתוב על רגע אחד, בלי לנסות להסביר את כל החיים.', 'אפשר להשלים את המשפט: בתוך כל מה שאני עושה, חסר לי מקום ל…'],
    example: '״סיימתי יום עבודה, וראיתי שלא היה בו אפילו רגע אחד של יצירה.״',
    label: 'הרגע שלי, ומה שחסר בו',
    takeaway: 'לרגע הזה מגיע מקום, גם כשיש בחיים הרבה דברים טובים.',
  },
  {
    title: 'לשמוע מי מדבר בתוכך',
    subtitle: 'לפני שמחליטים לאן ללכת, כדאי להקשיב למי שבוחר את הדרך.',
    time: '4 דקות',
    body: 'לאורך החיים אנחנו אוספים עצות, ציפיות ומשפטים על איך צריך לחיות. חלקם עוזרים לנו. חלקם ממשיכים להוביל גם כשהם כבר לא מתאימים. כאן אפשר לבדוק מה עדיין נכון לך.',
    prompts: ['מהו משפט ה״צריך״ שחוזר אצלך כשחושבים על עבודה, בחירות או ייעוד?', 'ממי למדת אותו, ומה הוא ניסה לשמור עבורך?', 'איזה רצון שלך היה מקבל יותר מקום אם היה מותר לבחון את המשפט הזה מחדש?'],
    example: '״צריך להישאר במקום בטוח. אני רוצה לבדוק אם אפשר לשלב בו גם משהו שמסקרן אותי.״',
    label: 'הציפייה שלמדתי, והרצון שלי לצידה',
    takeaway: 'אפשר לכבד את מה שבנית ולפנות בתוכו מקום לבחירה חדשה.',
  },
  {
    title: 'להיזכר איפה יש בך חיים',
    subtitle: 'לא תמיד צריך למצוא תשובה חדשה. לפעמים יש כבר רמז בחוויה מוכרת.',
    time: '4 דקות',
    body: 'חיבור לעצמך יכול להופיע ברגע פשוט: שיחה, הליכה, לימוד, עשייה בידיים או עזרה למישהו. בלי לחפש רגע מושלם, אפשר להיזכר במשהו שעשית והרגיש שלך.',
    prompts: ['מתי לאחרונה הרגשת עניין, חיות או שקט בתוך משהו שעשית?', 'מה בדיוק היה שם? עם מי היית, ומה היה התפקיד שלך?', 'איזה חלק בך קיבל שם מקום: סקרנות, יצירתיות, קרבה, חופש או משהו אחר?'],
    example: '״כשעזרתי לחברה לעשות סדר ברעיון שלה, הרגשתי סקרנות וקרבה. היה לי נעים להקשיב ולחבר בין דברים.״',
    label: 'הרגע שהרגיש שלי, ומה הוא מזכיר לי',
    takeaway: 'הרגע הזה הוא רמז שכדאי להכיר. הוא לא מחייב להפוך אותו למקצוע.',
  },
  {
    title: 'לתת לרצון שלך משפט',
    subtitle: 'מותר לרצון להופיע לפני שיש תוכנית שיודעת להסביר אותו.',
    time: '4 דקות',
    body: 'אחרי שהקשבת למה שחסר ולמה שכבר מרגיש שלך, אפשר להתקרב לשאלה: למה הייתי רוצה לתת יותר מקום בחיים שלי? התשובה יכולה להיות צנועה ולא לגמרי ברורה.',
    prompts: ['מה היית רוצה להרגיש יותר בתוך השבוע הרגיל שלך?', 'מה היית רוצה להביא לאנשים שסביבך, גם בלי תואר או תפקיד חדש?', 'אפשר להשלים: חשוב לי לתת יותר מקום ל… כי…'],
    example: '״חשוב לי לתת יותר מקום ליצירה, כי יש לי דרכה אפשרות משלי לבטא את מה שעובר עליי.״',
    label: 'המשפט שאני רוצה לקחת איתי',
    takeaway: 'אין צורך להתחייב שזה הייעוד שלך לכל החיים. מספיק שזה כיוון שראוי לבדיקה עכשיו.',
  },
  {
    title: 'להפוך את הכיוון לצעד',
    subtitle: 'לתת לקול הפנימי שעה ביומן.',
    time: '5 דקות',
    body: 'אפשר לבחור משהו קטן שאפשר לנסות בשלושת הימים הקרובים. צעד שמאפשר לפגוש את הרצון במציאות, בלי לבטל התחייבויות ובלי להחליט החלטה גדולה לפני שהכרת אותו.',
    prompts: ['מהו צעד של 15 דקות שיכול לתת מקום לרצון שכתבת?', 'מתי ואיפה הצעד הזה יקרה? כדאי לבחור זמן מסוים, מעבר ל״כשיתפנה לי״.', 'אחרי הניסיון, מה יהיה חשוב לבדוק: מה סיקרן, מה התאים ומה כדאי לשנות?'],
    example: '״ביום שלישי בשמונה בערב אפנה 15 דקות לכתיבה. אחר כך אבדוק איך היה לי, בלי לדרוש מעצמי תוצאה.״',
    label: 'הצעד שלי, הזמן שקבעתי והשאלה שאבדוק אחריו',
    takeaway: 'הצעד הקטן נותן לך חוויה שאפשר ללמוד ממנה. גם אם יתבהר אחריו כיוון אחר.',
  },
];
const whatsapp = 'https://wa.me/972525457873?text=' + encodeURIComponent('היי אלייה, קראתי את המדריך לחיבור פנימה ואשמח לשמוע על שיחת התאמה.');

export function Guide2() {
  const [answers, setAnswers] = useState<string[]>(() => guideSteps.map(() => ''));
  const completed = answers.filter(answer => answer.trim()).length;
  function download() {
    const text = ['החיים ממשיכים. ומה איתך?', 'מדריך אישי לחיבור פנימה ולבחירת צעד קטן | אלייה', '',
      ...guideSteps.flatMap((step, i) => [String(i + 1) + '. ' + step.title, step.body, ...step.prompts.map(p => '• ' + p), '', 'המילים שלי:', answers[i].trim() || '(עדיין לא כתבתי)', '', step.takeaway, '']),
      'אפשר לחזור למילים האלה בעוד שבוע ולבדוק מה התבהר ומה השתנה.', 'https://eliya-mywife.vercel.app/guide2'].join('\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF' + text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'eliya-my-inner-direction.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <div className="eliya-site guide-page" dir="rtl" lang="he">
    <a className="skip-link" href="#guide-main">דלג למדריך</a>
    <header className="site-header"><div className="container header-inner"><a className="brand" href="/" title="לעמוד הבית"><span className="guide-brand-symbol" aria-hidden="true">◇</span><span><strong>אלייה</strong><small>טיפול רגשי ואנרגטי</small></span></a><a className="guide-back" href="/">בחזרה לאתר של אלייה <span aria-hidden="true">←</span></a></div></header>
    <main id="guide-main">
      <section className="guide-hero"><div className="container guide-hero-grid"><div><p className="eyebrow">מדריך במתנה מאלייה · כ־20 דקות לעצמך</p><h1>החיים ממשיכים.<br /><em>ומה איתך?</em></h1><p className="guide-lead">חמש עצירות בדרך אל הקול שלך.<br />כדי לתת מילים למה שחסר, להרגיש מה באמת שלך ולבחור צעד קטן מבפנים.</p><p className="guide-opening">עוד יום עובר. ענית, הספקת, טיפלת במה שצריך.<br />ובתוך כל זה, יש חלק בך שעוד מחכה שתהיה לך דקה בשבילו.</p><a className="button button-primary" href="#guide-start">אני רוצה רגע לעצמי <span aria-hidden="true">↓</span></a><div className="guide-facts"><span>5 תרגילי כתיבה</span><span>ללא הרשמה</span><span>בקצב שלך</span></div></div><figure className="guide-cover"><img src={crystal} alt="גביש מואר וענף זית, בהשראת היהלום הפנימי" width="1000" height="1333" /><figcaption><span>לחזור אל הקול שלך</span><small>מילים · הקשבה · צעד אחד</small></figcaption></figure></div></section>
      <section className="guide-intro section" id="guide-start"><div className="guide-reading"><p className="eyebrow">לפני שמתחילים</p><h2>אפשר להניח לרגע<br />את השאלה הגדולה.</h2><p>״מה הייעוד שלי?״ יכולה להיות שאלה כל כך גדולה, עד שקשה לדעת מאיפה להתחיל. אפשר להתחיל מרגע בחיים שלך. ממשהו שחסר. מרצון קטן שממשיך לחזור.</p><p>באתר שלי אני מתארת את הנשמה כמו יהלום נקי ונוצץ. לאורך השנים מצטברות סביבו חוויות, אמונות ודפוסים. לפעמים אנחנו כבר רגילים אליהם כל כך, שקשה להרגיש מה נמצא מתחת.</p><p>המדריך הזה הוא הזמנה לעצור ולהקשיב. לפנות מקום למילים שלך, בלי להידרש לדעת כבר עכשיו לאן כל זה יוביל.</p><div className="guide-preparation"><strong>מה צריך?</strong><p>כ־20 דקות, פינה שאפשר לשבת בה ודף. אפשר גם לכתוב כאן בעמוד. אם אין תשובה, מותר לכתוב ״עדיין אין לי תשובה״ ולהמשיך בקצב שלך.</p><p className="privacy-note" id="guide-privacy">התשובות נשארות בעמוד הפתוח בדפדפן ואינן נשלחות לאלייה או לשרת. אין שמירה אוטומטית. לפני יציאה או רענון, אפשר לשמור אותן בקובץ במכשיר שלך.</p></div></div></section>
      <nav className="guide-step-nav container" aria-label="חמש העצירות במדריך">{guideSteps.map((step, i) => <a href={'#guide-step-' + (i + 1)} key={step.title}><span>0{i + 1}</span>{['מה חסר', 'של מי הקול', 'מה מחבר', 'מה הכיוון', 'הצעד שלי'][i]}</a>)}</nav>
      <div className="guide-workbook" id="guide-steps">
        {guideSteps.map((step, i) => <section id={'guide-step-' + (i + 1)} className={'guide-step section ' + (i % 2 ? 'guide-step-alt' : '')} key={step.title} aria-labelledby={'step-title-' + i}><div className="guide-reading"><div className="guide-step-meta"><span>עצירה 0{i + 1}</span><span>{step.time}</span></div><h2 id={'step-title-' + i}>{step.title}</h2><p className="guide-step-subtitle">{step.subtitle}</p><p>{step.body}</p><ol className="guide-prompts">{step.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ol><details className="guide-example"><summary>אפשר לראות דוגמה?</summary><p>{step.example}</p><small>זו דוגמה בלבד. למילים שלך יש מקום משלהן.</small></details><div className="guide-answer"><label htmlFor={'answer-' + i}>{step.label}</label><textarea id={'answer-' + i} value={answers[i]} onChange={e => setAnswers(previous => previous.map((value, index) => index === i ? e.target.value : value))} placeholder="כאן אפשר להתחיל לכתוב…" rows={5} maxLength={3000} aria-describedby="guide-privacy" /><div className="print-answer">{answers[i] || '________________________________________________________________\n\n________________________________________________________________'}</div></div><p className="guide-takeaway"><span aria-hidden="true">◇</span>{step.takeaway}</p></div></section>)}
      </div>
      <section className="section guide-save"><div className="guide-reading"><p className="eyebrow">המילים שלך, להמשך הדרך</p><h2>שווה לשמור<br />את מה שפגשת כאן.</h2><p>אפשר לחזור למילים האלה בעוד שבוע. לבדוק מה עדיין מרגיש נכון, מה קיבל מקום ומה התבהר דרך הניסיון.</p><p className="guide-progress" role="status" aria-live="polite">{completed ? 'כתבת ב־' + completed + ' מתוך 5 העצירות. אפשר לשמור גם באמצע.' : 'המדריך זמין גם להדפסה ולכתיבה על דף.'}</p><div className="guide-save-actions"><button className="button button-primary" onClick={download}>שמירת המדריך והתשובות בקובץ <span aria-hidden="true">↓</span></button><button className="guide-print button" onClick={() => window.print()}>הדפסה / שמירה כ־PDF</button></div><noscript><p>אפשר לקרוא ולתרגל גם בלי JavaScript. לשמירה, השתמשו באפשרות ההדפסה של הדפדפן או כתבו על דף.</p></noscript><small className="privacy-note">קובץ התשובות נשמר במכשיר לפי בחירתך. מומלץ לשמור אותו במקום פרטי.</small></div></section>
      <section className="section guide-next"><div className="guide-reading"><p className="eyebrow">אם עלה רצון להמשיך</p><h2>יש דברים שנעים<br />לפגוש יחד.</h2><p>לפעמים כתיבה פותחת שאלה שעדיין אין לה מילים. לפעמים ברור מה רוצים, ובכל זאת קשה לפנות לזה מקום בחיים.</p><div className="guide-author"><img src={portrait} alt="אלייה, מטפלת רגשית ואנרגטית" width="800" height="994" loading="lazy" /><div><strong>אני אלייה.</strong><p>אני מלווה עבודה פנימית בעזרת כלים רגשיים ואנרגטיים. אם מתעורר בך רצון להעמיק, אני מזמינה אותך לשיחת התאמה. נכיר ונבדוק יחד אם הליווי מתאים לך.</p></div></div><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">אשמח להכיר ולבדוק התאמה <span aria-hidden="true">←</span></a><p className="quiet-note">הקישור פותח הודעת WhatsApp מוכנה. התשובות שלך מהמדריך אינן מצורפות אליה.</p></div></section>
    </main>
    <footer className="site-footer"><div className="guide-reading"><p>אלייה · טיפול רגשי ואנרגטי</p><p className="guide-footer-note">המדריך מיועד להתבוננות אישית ואינו אבחון או תחליף לטיפול. אפשר לעצור בכל שלב ולבחור מה מתאים לך.</p><a href="/">לעמוד הבית <span aria-hidden="true">←</span></a></div></footer>
  </div>;
}
