// Hebrew content — copied verbatim from the live Hebrew pages of nissimtal.com
// (home-1, about-1, blank-2, blank-1-1, blank-1-1-1, blank-1-1-1-1, blank-1-1-2, blank-1-1-2-1)
// on 2026-07-10. Keep `id` fields identical to content.ts so anchor links and images stay in sync.
import type { Site, About, ProjectSection } from "./content";

export const site: Site = {
  name: "נסים טל",
  tagline: "מחכים לרולינג סטונס, דיסלדורף גרמניה, 2022, שמן על בד, 200×100 ס״מ",
  email: "nissimtal@gmail.com",
  heroImage: "/images/hero/hero.jpeg",
};

export const about: About = {
  photo: "/images/about/portrait.jpeg",
  bio: [
    'יליד ירושלים, בוגר תואר ראשון בכלכלה ויחסים בינלאומיים מהאוניברסיטה העברית, ותואר שני בחינוך מאוניברסיטת קולומביה, ניו יורק. את לימודי האמנות השלמתי באקדמיה "בצלאל" בירושלים (1979–1983). את דרכי המקצועית התחלתי במגוון תפקידים באגף התקציבים במשרד האוצר בירושלים.',
    'לאורך השנים שילבתי בין יצירה אמנותית לבין תפקידי ניהול של מוסדות תרבות ואמנות בישראל. בין היתר, כיהנתי בתפקיד מנהל אגף במוזיאון ישראל בירושלים, סמנכ"ל מוזיאון בית התפוצות ("אנו") בתל אביב, מנכ"ל מושבת האמנויות במצפה רמון, ובמשך 25 שנים ניהלתי את ששת מוזיאוני חיפה.',
    "החל משנת 2019, אני פועל כיועץ אסטרטגי להקמה, להתחדשות ולניהול של מוזיאונים. במקביל, אני מקדיש את עיקר זמני לעשייה אמנותית ענפה בתחומי הציור, הצילום והווידאו. עבודותיי הוצגו בתערוכות יחיד מקיפות, בהן בבית האמנים בתל אביב ובמוזיאון העיר דיסלדורף שבגרמניה, אשר רכש את אחת מעבודותיי לאוסף הקבע שלו.",
  ],
};

export const soloExhibitions: ProjectSection[] = [
  {
    id: "solo-exhibition-dusseldorf",
    title: "קהל מזדמן, רקדנים ושחקנים",
    meta: 'תערוכת יחיד, מוזיאון העיר דיסלדורף: 3 בפברואר 2026 · אוצרת התערוכה: ד"ר סוזאנה אנה, מנהלת מוזיאון העיר דיסלדורף',
    statement: [
      'בתערוכה זו נעשה ניסיון לבחון את הטבע החולף של האינטראקציה האנושית במרחב העירוני, תוך התמקדות בעיר דיסלדורף. העבודות לוכדות עוברי אורח מקריים כשהם נפגשים במרחבים ציבוריים, באולמות תיאטרון ובמופעים תחת כיפת השמיים, וממירות את "הרגע היומיומי המקרי" לנושא למחשבה.',
      "בין אם מדובר בתיעוד קבוצה חולפת של נוסעים בתחנת הרכבת או בקהל המשתתף באירוע תחת כיפת השמיים, הציורים והתצלומים מציגים אנשים אלה כפי שז'אן-פול סארטר ראה בהם – כמין שכפולים של הפרט, המאפשרים לכל אחד להתקיים כישות נפרדת ולכולם יחד כקבוצה קולקטיבית. הפרטים מוצגים באופן אקראי ומונוטוני, ללא ייחודיות מובחנת וכשהם נראים דומים זה לזה, בחירה ההופכת את היומיומי הרגיל למשהו מרתק ומושך.",
      "התערוכה מעמיקה גם בדיאלוג שבין הקהל לשחקנים ולרקדנים, ומתעדת את האנרגיה והתגובות המשותפות שביניהם. גוף עבודות זה, שפותח בחלקו הגדול במהלך שהותי ברזידנסי מטעם עיריית דיסלדורף בגרמניה, משמש כיומן חזותי של זמן, מקום והמונים אנונימיים המגדירים את החיים העירוניים.",
    ],
    works: [],
    seriesLinksLabel: "תוכן התערוכה",
    seriesLinks: [
      { label: "קהל מזדמן", href: "#solo-exhibition-artists-house", image: "/images/passersby/waiting-for-the-rolling-stones.jpeg" },
      { label: "רקדניות", href: "#dancers", image: "/images/dancers/dancer-1.jpeg" },
      { label: "מופע בפארק", href: "#park-performance", image: "/images/park-performance/performer-pedestal.jpeg" },
    ],
  },
  {
    id: "solo-exhibition-artists-house",
    title: "קהל מזדמן",
    meta: "תערוכת יחיד, בית האמנים תל אביב: 9 בנובמבר 2023 · אוצר התערוכה: אריה ברקוביץ",
    statement: [
      'הציורים בתערוכה מציגים עוברי אורח אנונימיים, מקרים והתרחשויות חברתיות אקראיות. הפרטים מוצגים בצורה מקרית, מונוטונית; הם דומים זה לזה ואין בהם ייחוד. אבל דווקא הרגיל, הנורמלי והיומיומי, הרגע החד-פעמי, הופך לעיתים למרתק ולמושך. כך, למשל, אחד הציורים מתעד רגע נתון בתחנת רכבת - קבוצה מקרית של אנשים, שתוחלף בעוד כמה רגעים בקבוצה אנונימית אחרת. אין הבדל גדול בהתרחשות בין הקבוצות השונות. בציורים אחרים אנשים ממתינים בתור לכניסה לגלריה, או להופעה של להקת "האבנים המתגלגלות".',
      'מוריס בלאנשו כתב: "היומיום הוא התנועה שבאמצעותה מתקיים הפרט, בבלי דעת לכאורה, באנונימיות אנושית. ביומיום אנו חסרי שם, בעלי קורטוב של מציאות אישית, כמעט חסרי-פנים, ממש כשם שאנו נעדרים הגדרה חברתית, שתקיים או תחבוק אותנו... היומיום אינו מצוי במקומות המגורים שלנו, ואף לא במשרדים או בכנסיות או בספריות או במוזיאונים. אם הוא מצוי במקום כלשהו, הרי זה ברחוב".',
      "ברקע קבוצת האנשים המקרית בציורים נמצאים תמיד פריטי תפאורה יומיומיים: כרזות רחוב, מסכי וידיאו, שילוט רחוב. הם אינם קשורים לעובר האורח המקרי החולף לידם, והם משתנים בהתאם לסיטואציה ומחזקים את אקראיות הקיום היומיומי ברחוב. למרות האנונימיות המשטחת ומאחדת את הדמויות במבט מרחוק, כאשר מתקרבים לציור אפשר להבחין בפרטים רבים, שמבדילים כל דמות מרעותה; אפשר לחוש ביחסים בין הדמויות: לעיתים אלה הם בני זוג, לעיתים חברים בקבוצה. המבט מקרוב חושף פרטי לבוש מעניינים ותנועות המייחדות את הדמויות.",
      'הציור מבקש ללכוד את הרגע החולף של עוברי האורח האנונימיים במרחב הציבורי. לעיתים הם מתגבשים לכדי קבוצה מקרית בעלת אינטרס משותף, אבל מרביתם פועלים בניכור לסביבתם, מתוך היררכיה פנימית, שנקבעת לפי מיקומם בתור, סדר הגעתם וכדומה. "האנשים נבדלים זה מזה בגילם ובמעמדם, ולרוב הם אינם מדברים זה עם זה. הם פשוט מתקיימים זה לצד זה בריבוי בדידויות", כתב זאן-פול סארטר. שלא כמו בצילום, בציורים ניכר מגע המכחול, והכתמיות הצבעונית הופכת לדמות או לחפץ באמצעות מבטו של הצופה המיומן. בחלקים מהרקע משיחות מכחול רחבות ולא מדויקות מעניקות לציורים את אופיים החופשי.',
    ],
    works: [
      { title: "מחכים לרולינג סטונס", details: "דיסלדורף גרמניה, 2022, שמן על בד, 200×100 ס״מ", image: "/images/passersby/waiting-for-the-rolling-stones.jpeg" },
      { title: "מחכים למטרו 1", details: "תחנת היינריך היינה, דיסלדורף גרמניה, 2023, שמן על בד, 190×64 ס״מ", image: "/images/passersby/waiting-for-metro-1.jpeg" },
      { title: "מחכים למטרו 2", details: "תחנת היינריך היינה, דיסלדורף גרמניה, 2023, שמן על בד, 160×64 ס״מ", image: "/images/passersby/waiting-for-metro-2.jpeg" },
      { title: "טובלים בנהר", details: "קאסל, גרמניה, 2023, שמן על בד, 183×140 ס״מ", image: "/images/passersby/immersing-in-the-river.jpeg" },
      { title: "Highline", details: "ניו יורק, 2023, שמן על בד, 160×85 ס״מ", image: "/images/passersby/highline.jpeg" },
      { title: "אקספו", details: "דובאי, 2023, שמן על בד, 230×90 ס״מ", image: "/images/passersby/expo.jpeg" },
      { title: "מיצג רחוב 2", details: "מנייפסטה פאלרמו, 2023, שמן על בד, 145×140 ס״מ", image: "/images/passersby/street-performance-2.jpeg" },
      { title: "פסטיבל ישראל", details: "ירושלים, 2023, שמן על בד, 215×100 ס״מ", image: "/images/passersby/israel-festival.jpeg" },
      { title: 'תיעוד התערוכה "קהל מזדמן"', details: "בית האמנים תל אביב, חורף 2023", image: "/images/passersby/exhibition-documentation.jpeg" },
    ],
  },
];

export const projects: ProjectSection[] = [
  {
    id: "passersby",
    title: "קהל מזדמן",
    meta: "מתוך התערוכה: בית האומנים תל אביב, חורף 2023 · אוצר: אריה ברקוביץ",
    statement: [
      'בסידרת הציורים מוצגים עוברי אורח אנונימיים, מקרים והתרחשויות חברתיות אקראיות. הפרטים מוצגים בצורה מקרית, מונוטונית; הם דומים זה לזה ואין בהם ייחוד. אבל דווקא הרגיל, הנורמלי והיומיומי, הרגע החד-פעמי, הופך לעיתים למרתק ולמושך. כך, למשל, אחד הציורים מתעד רגע נתון בתחנת רכבת - קבוצה מקרית של אנשים, שתוחלף בעוד כמה רגעים בקבוצה אנונימית אחרת. אין הבדל גדול בהתרחשות בין הקבוצות השונות. בציורים אחרים אנשים ממתינים בתור לכניסה לגלריה, או להופעה של להקת "האבנים המתגלגלות".',
      'מוריס בלאנשו כתב: "היומיום הוא התנועה שבאמצעותה מתקיים הפרט, בבלי דעת לכאורה, באנונימיות אנושית. ביומיום אנו חסרי שם, בעלי קורטוב של מציאות אישית, כמעט חסרי-פנים, ממש כשם שאנו נעדרים הגדרה חברתית, שתקיים או תחבוק אותנו... היומיום אינו מצוי במקומות המגורים שלנו, ואף לא במשרדים או בכנסיות או בספריות או במוזיאונים. אם הוא מצוי במקום כלשהו, הרי זה ברחוב".',
      "ברקע קבוצת האנשים המקרית בציורים נמצאים תמיד פריטי תפאורה יומיומיים: כרזות רחוב, מסכי וידיאו, שילוט רחוב. הם אינם קשורים לעובר האורח המקרי החולף לידם, והם משתנים בהתאם לסיטואציה ומחזקים את אקראיות הקיום היומיומי ברחוב. למרות האנונימיות המשטחת ומאחדת את הדמויות במבט מרחוק, כאשר מתקרבים לציור אפשר להבחין בפרטים רבים, שמבדילים כל דמות מרעותה; אפשר לחוש ביחסים בין הדמויות: לעיתים אלה הם בני זוג, לעיתים חברים בקבוצה. המבט מקרוב חושף פרטי לבוש מעניינים ותנועות המייחדות את הדמויות.",
      '"הציור מבקש ללכוד את הרגע החולף של עוברי האורח האנונימיים במרחב הציבורי. לעיתים הם מתגבשים לכדי קבוצה מקרית בעלת אינטרס משותף, אבל מרביתם פועלים בניכור לסביבתם, מתוך היררכיה פנימית, שנקבעת לפי מיקומם בתור, סדר הגעתם וכדומה. "האנשים נבדלים זה מזה בגילם ובמעמדם, ולרוב הם אינם מדברים זה עם זה. הם פשוט מתקיימים זה לצד זה בריבוי בדידויות", כתב זאן-פול סארטר. שלא כמו בצילום, בציורים ניכר מגע המכחול, והכתמיות הצבעונית הופכת לדמות או לחפץ באמצעות מבטו של הצופה המיומן. בחלקים מהרקע משיחות מכחול רחבות ולא מדויקות מעניקות לציורים את אופיים החופשי.',
    ],
    works: [
      { title: "מיצג רחוב 1", details: "מנייפסטה פאלרמו, 2023, שמן על בד, 145×140 ס״מ", image: "/images/passersby/street-performance-1.jpeg" },
      { title: "מיצג רחוב 2", details: "מנייפסטה פאלרמו, 2023, שמן על בד, 145×140 ס״מ", image: "/images/passersby/street-performance-2.jpeg" },
      { title: "מחכים לקוסמה", details: "ניו יורק, 2023, שמן על בד, 160×65 ס״מ", image: "/images/passersby/waiting-for-kusama.jpeg" },
      { title: "מחכים לקוסמה 2", details: "ניו יורק, 2023, שמן על בד, 63×242 ס״מ", image: "/images/passersby/waiting-for-kusama-2.jpeg" },
      { title: "Highline", details: "ניו יורק, 2023, שמן על בד, 160×85 ס״מ", image: "/images/passersby/highline.jpeg" },
      { title: 'ביקור ב"מומה"', details: "ניו יורק, 2023, שמן על בד, 95×148 ס״מ", image: "/images/passersby/visiting-the-moma.jpeg" },
      { title: "טיים סקוויר 1", details: "ניו יורק, 2023, שמן על בד, 120×156 ס״מ", image: "/images/passersby/time-square-1.jpeg" },
      { title: "טיים סקוויר 2", details: "ניו יורק, 2023, שמן על בד, 146×112 ס״מ", image: "/images/passersby/time-square-2.jpeg" },
      { title: "טובלים בנהר", details: "קאסל, גרמניה, 2023, שמן על בד, 183×140 ס״מ", image: "/images/passersby/immersing-in-the-river.jpeg" },
      { title: "אקספו", details: "דובאי, 2023, שמן על בד, 230×90 ס״מ", image: "/images/passersby/expo.jpeg" },
      { title: "מחכים למטרו 1", details: "תחנת היינריך היינה, דיסלדורף גרמניה, 2023, שמן על בד, 190×64 ס״מ", image: "/images/passersby/waiting-for-metro-1.jpeg" },
      { title: "מחכים למטרו 2", details: "תחנת היינריך היינה, דיסלדורף גרמניה, 2023, שמן על בד, 160×64 ס״מ", image: "/images/passersby/waiting-for-metro-2.jpeg" },
      { title: "מחכים למטרו 4", details: "דיסלדורף גרמניה, 2023, שמן על בד", image: "/images/passersby/waiting-for-metro-4.jpeg" },
      { title: "מחכים לרולינג סטונס", details: "דיסלדורף גרמניה, 2022, שמן על בד, 200×100 ס״מ", image: "/images/passersby/waiting-for-the-rolling-stones.jpeg" },
      { title: "פסטיבל ישראל", details: "ירושלים, 2023, שמן על בד, 215×100 ס״מ", image: "/images/passersby/israel-festival.jpeg" },
      { title: "מחכים לברנקוזי", details: "טימישוארה, רומניה, 2024, שמן על בד, 115×400 ס״מ", image: "/images/passersby/waiting-for-brancusi-exhibition.jpeg" },
      { title: "מחכים למטרו 3", details: "תחנת היינריך היינה, דיסלדורף גרמניה, 2023, שמן על בד", image: "/images/passersby/waiting-for-metro-3.jpeg" },
    ],
  },
  {
    id: "park-performance",
    title: "מופע בפארק",
    meta: "תערוכה: מוזיאון העיר דיסלדורף, גרמניה — 3 בפברואר 2026",
    works: [
      { title: "קהל", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-01-hat-woman.jpeg" },
      { title: "רקדניות בפארק", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-02-duo-jump.jpeg" },
      { title: "שחקנית וקהל 2", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-03-pedestal.jpeg" },
      { title: "שחקנית וקהל 3", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-04-nude-portrait.jpeg" },
      { title: "שחקנית וקהל 4", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-05-crowd-wide.jpeg" },
      { title: "שחקנית וקהל 5", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-06-crop-top.jpeg" },
      { title: "שחקנית וקהל 6", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-07-duo-robe.jpeg" },
      { title: "שחקנית וקהל", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-08-orange-hair.jpeg" },
      { title: "מופע בפארק", details: "צילום, דיסלדורף, 2024", image: "/images/park-performance/park-he-09-audience-wide.jpeg" },
    ],
  },
  {
    id: "dancers",
    title: "רקדניות",
    meta: "2024 · תל אביב",
    works: [
      { title: "רקדנית 1", details: "שמן על בד, 65×62 ס״מ, 2024", image: "/images/dancers/dancer-1.jpeg" },
      { title: "רקדנית 2", details: "שמן על בד, 100×60 ס״מ, 2024", image: "/images/dancers/dancer-2.jpeg" },
      { title: "רקדנית 3", details: "שמן על בד, 61×65 ס״מ, 2024", image: "/images/dancers/dancer-3.jpeg" },
      { title: "רקדנית 4", details: "שמן על בד, 50×66 ס״מ, 2024", image: "/images/dancers/dancer-4.jpeg" },
      { title: "רקדנית ואיש עם בקבוק", details: "שמן על בד, 100×106 ס״מ, 2024", image: "/images/dancers/dancer-and-man-with-bottle.jpeg" },
      { title: "קהל 1", details: "שמן על בד, 2024", image: "/images/dancers/audience-1.jpeg" },
    ],
  },
  {
    id: "passersby-dancers-actors",
    title: "רקדניות ושחקנים",
    meta: "תערוכה: מוזיאון העיר דיסלדורף, גרמניה — 3 בפברואר 2026",
    statement: [
      "חלק זה בתערוכה מציג קהל מזדמן שהגיע לצפות במופע ריקוד או תיאטרון, בין אם באולם סגור ובין אם במרחב ציבורי פתוח.",
      "העבודות מתמקדות באינטראקציה: הן בין הפרטים בקהל עצמו, והן בקשר המיוחד הנוצר בינם לבין השחקנים. מאחר שמדובר במופעי פרינג' או רחוב, האינטראקציה עמוקה ומהותית.",
      "בציורים ובצילומים, הדמויות מוצגות בתקריב בניסיון ללכוד את הרגע החולף, את התנועה, ואת התנוחות והמחוות הייחודיות של הרקדנים והשחקנים. הקהל הצופה משתתף באינטראקציה עם האמנים, בניגוד למופע הדינמי המשתנה ללא הרף.",
    ],
    works: [
      { title: "מאחורי הקלעים 1", details: "2025, שמן על בד", image: "/images/passersby-dancers-actors/backstage-1.jpeg" },
      { title: "מאחורי הקלעים 2", details: "2025, שמן על בד", image: "/images/passersby-dancers-actors/backstage-2.jpeg" },
      { title: "מאחורי הקלעים 3", details: "2025, שמן על בד", image: "/images/passersby-dancers-actors/backstage-3.jpeg" },
      { title: "מאחורי הקלעים 4", details: "2025, שמן על בד", image: "/images/passersby-dancers-actors/backstage-4.jpeg" },
      { title: "מאחורי הקלעים 5", details: "2025, שמן על בד", image: "/images/passersby-dancers-actors/backstage-5.jpeg" },
      { title: "ארנב 1", details: "2025, שמן על בד", image: "/images/passersby-dancers-actors/rabbit-1.jpeg" },
      { title: "שחקן 10", details: "שמן על בד, 70×63 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-10.jpeg" },
      { title: "שחקן 12", details: "שמן על בד, 75×70 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-12.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 75×60 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-a.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 75×60 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-b.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 50×60 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-c.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 72×69 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-d.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 75×60 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-e.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 70×69 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-f.jpeg" },
      { title: "שחקן 11", details: "שמן על בד, 72×65 ס״מ, 2025", image: "/images/passersby-dancers-actors/actor-11-g.jpeg" },
    ],
  },
  {
    id: "the-king",
    title: "המלך",
    meta: "2024 · חיפה",
    works: [
      { title: "המלך 1", details: "שמן על בד, 45×48 ס״מ, 2024", image: "/images/king/king-1.jpeg" },
      { title: "המלך 2", details: "שמן על בד, 45×48 ס״מ, 2024", image: "/images/king/king-2.jpeg" },
      { title: "המלך 3", details: "שמן על בד, 45×48 ס״מ, 2024", image: "/images/king/king-3.jpeg" },
      { title: "המלך 4", details: "שמן על בד, 45×48 ס״מ, 2024", image: "/images/king/king-4.jpeg" },
      { title: "המלך 5", details: "שמן על בד, 45×48 ס״מ, 2024", image: "/images/king/king-5.jpeg" },
      { title: "המלך 6", details: "שמן על בד, 45×48 ס״מ, 2024", image: "/images/king/king-6.jpeg" },
    ],
  },
  {
    id: "belly-dancer",
    title: "ריקוד בטן",
    meta: "2025 · תל אביב",
    works: [
      { title: "רקדנית 1", details: "שמן על בד, 50×70 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-1.jpeg" },
      { title: "רקדנית 2", details: "שמן על בד, 50×35 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-2.jpeg" },
      { title: "רקדנית 3", details: "שמן על בד, 42×53 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-3.jpeg" },
      { title: "רקדנית 4", details: "שמן על בד, 43×55 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-4.jpeg" },
      { title: "רקדנית 5", details: "שמן על בד, 43×51 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-5.jpeg" },
      { title: "רקדנית 6", details: "שמן על בד, 43×55 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-6.jpeg" },
      { title: "רקדנית 7", details: "שמן על בד, 60×80 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-7.jpeg" },
      { title: "רקדנית 8", details: "שמן על בד, 33×55 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-8.jpeg" },
      { title: "רקדנית 9", details: "שמן על בד, 50×70 ס״מ, 2025", image: "/images/belly-dancer/belly-dancer-9.jpeg" },
    ],
  },
  {
    id: "performance",
    title: "מופע",
    meta: "2025 · תל אביב",
    works: [
      { title: "מופע 1", details: "שמן על בד, 73×54 ס״מ, 2025", image: "/images/performance/performance-1.jpeg" },
      { title: "מופע 2", details: "שמן על בד, 65×70 ס״מ, 2025", image: "/images/performance/performance-2.jpeg" },
      { title: "מופע 3", details: "2025, שמן על בד", image: "/images/performance/performance-3.jpeg" },
    ],
  },
];
