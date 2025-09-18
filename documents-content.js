// AID Cosmetics - Detailed Document Content Database
// ISO 22716 GMP Compliant Documentation System

const documentContent = {
    // Quality Assurance Procedures
    'QA-001': {
        title: 'נוהל בקרת מסמכים - Document Control Procedure',
        content: `
            <h2>1. מטרה (Purpose)</h2>
            <p>להבטיח שכל המסמכים במערכת האיכות של AID Cosmetics מנוהלים, מבוקרים ומעודכנים בהתאם לדרישות תקן ISO 22716 ודרישות משרד הבריאות הישראלי.</p>

            <h2>2. תחולה (Scope)</h2>
            <p>נוהל זה חל על כל המסמכים במערכת ניהול האיכות כולל:</p>
            <ul>
                <li>נהלי איכות (SOPs)</li>
                <li>הוראות עבודה (Work Instructions)</li>
                <li>טפסים (Forms)</li>
                <li>מפרטים (Specifications)</li>
                <li>רשומות איכות (Quality Records)</li>
                <li>תעודות ורישיונות (Certificates & Licenses)</li>
            </ul>

            <h2>3. הגדרות (Definitions)</h2>
            <ul>
                <li><strong>מסמך מבוקר:</strong> מסמך המאושר ומפוקח על ידי מערכת האיכות</li>
                <li><strong>Master Copy:</strong> העותק המקורי והמאושר של המסמך</li>
                <li><strong>גרסה תקפה:</strong> הגרסה העדכנית והמאושרת לשימוש</li>
                <li><strong>מסמך מבוטל:</strong> מסמך שאינו תקף יותר ומסומן כ"OBSOLETE"</li>
            </ul>

            <h2>4. אחריות (Responsibilities)</h2>
            <table class="table table-bordered">
                <tr>
                    <th>תפקיד</th>
                    <th>אחריות</th>
                </tr>
                <tr>
                    <td>מנהל איכות</td>
                    <td>אישור סופי של מסמכים, ניהול רשימת מסמכים ראשית</td>
                </tr>
                <tr>
                    <td>מנהלי מחלקות</td>
                    <td>כתיבה ועדכון נהלים, הדרכת עובדים</td>
                </tr>
                <tr>
                    <td>רכז מסמכים</td>
                    <td>ניהול שוטף, הפצה, ארכוב</td>
                </tr>
            </table>

            <h2>5. שיטה (Method)</h2>
            <h3>5.1 יצירת מסמך חדש</h3>
            <ol>
                <li>זיהוי הצורך במסמך חדש על ידי מנהל המחלקה</li>
                <li>כתיבת טיוטה בפורמט הסטנדרטי של החברה</li>
                <li>מתן מספר מסמך ייחודי לפי המבנה: XX-YYY-ZZZZ
                    <ul>
                        <li>XX = קוד מחלקה (QA, QC, PROD, HR)</li>
                        <li>YYY = מספר רץ</li>
                        <li>ZZZZ = שנה</li>
                    </ul>
                </li>
                <li>סקירה על ידי הגורמים הרלוונטיים</li>
                <li>אישור סופי על ידי מנהל איכות</li>
            </ol>

            <h3>5.2 בקרת גרסאות</h3>
            <ul>
                <li>גרסה ראשונית: 1.0</li>
                <li>שינוי מינורי: העלאת ספרה אחרי הנקודה (1.1, 1.2)</li>
                <li>שינוי מהותי: העלאת ספרה לפני הנקודה (2.0, 3.0)</li>
                <li>כל גרסה חדשה מחייבת אישור מחודש</li>
            </ul>

            <h3>5.3 הפצה</h3>
            <ol>
                <li>הפצה דרך המערכת הממוחשבת בלבד</li>
                <li>אישור קריאה אלקטרוני מכל עובד רלוונטי</li>
                <li>הדרכה פרונטלית במידת הצורך</li>
                <li>תיעוד ההדרכה בטופס QA-F-001</li>
            </ol>

            <h3>5.4 ארכוב</h3>
            <ul>
                <li>שמירת כל הגרסאות הקודמות למשך 7 שנים</li>
                <li>סימון ברור של מסמכים מבוטלים</li>
                <li>גיבוי דיגיטלי יומי</li>
            </ul>

            <h2>6. רשומות (Records)</h2>
            <ul>
                <li>QA-F-001: טופס אישור קריאת נוהל</li>
                <li>QA-F-002: רשימת מסמכים ראשית</li>
                <li>QA-F-003: טופס בקשה לשינוי מסמך</li>
            </ul>

            <h2>7. נספחים (Appendices)</h2>
            <p>נספח א': דוגמה לפורמט מסמך סטנדרטי</p>
            <p>נספח ב': רשימת קודי מחלקות</p>
        `
    },

    'QA-003': {
        title: 'נוהל ניהול שינויים - Change Control Procedure',
        content: `
            <h2>1. מטרה</h2>
            <p>להגדיר תהליך מבוקר לניהול שינויים במפעל AID Cosmetics, להבטיח שכל שינוי מתוכנן, מאושר, מתועד ומתוקף בהתאם לדרישות ISO 22716.</p>

            <h2>2. עקרונות השינוי</h2>
            <div class="alert alert-info">
                <strong>כל שינוי במפעל חייב לעבור דרך מערכת ניהול השינויים!</strong>
                <br>כולל: ציוד, תהליכים, חומרי גלם, נהלים, מבנה, מערכות תומכות
            </div>

            <h2>3. סיווג שינויים</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>סוג שינוי</th>
                        <th>דוגמאות</th>
                        <th>רמת אישור</th>
                        <th>תיקוף נדרש</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>קריטי</strong></td>
                        <td>שינוי פורמולה, ציוד ייצור ראשי, חדר נקי</td>
                        <td>ועדת שינויים + מנכ"ל</td>
                        <td>תיקוף מלא</td>
                    </tr>
                    <tr>
                        <td><strong>משמעותי</strong></td>
                        <td>שינוי ספק, עדכון נוהל, ציוד משני</td>
                        <td>ועדת שינויים</td>
                        <td>תיקוף חלקי</td>
                    </tr>
                    <tr>
                        <td><strong>מינורי</strong></td>
                        <td>עדכון טופס, שינוי קוסמטי</td>
                        <td>מנהל איכות</td>
                        <td>לא נדרש</td>
                    </tr>
                </tbody>
            </table>

            <h2>4. תהליך ניהול השינוי</h2>
            <h3>שלב 1: יזום השינוי</h3>
            <ol>
                <li>מילוי טופס בקשה לשינוי (QA-F-010)</li>
                <li>תיאור מפורט של השינוי המבוקש</li>
                <li>נימוק והצדקה עסקית/איכותית</li>
                <li>הערכת השפעה על:
                    <ul>
                        <li>איכות המוצר</li>
                        <li>בטיחות המוצר</li>
                        <li>עמידה ברגולציה</li>
                        <li>תהליכי ייצור</li>
                        <li>עלויות</li>
                    </ul>
                </li>
            </ol>

            <h3>שלב 2: הערכת סיכונים</h3>
            <div class="risk-matrix">
                <h4>מטריצת סיכונים:</h4>
                <table class="table table-bordered">
                    <tr>
                        <td></td>
                        <th>השפעה נמוכה</th>
                        <th>השפעה בינונית</th>
                        <th>השפעה גבוהה</th>
                    </tr>
                    <tr>
                        <th>סבירות גבוהה</th>
                        <td class="bg-warning">בינוני</td>
                        <td class="bg-danger">גבוה</td>
                        <td class="bg-danger">קריטי</td>
                    </tr>
                    <tr>
                        <th>סבירות בינונית</th>
                        <td class="bg-success">נמוך</td>
                        <td class="bg-warning">בינוני</td>
                        <td class="bg-danger">גבוה</td>
                    </tr>
                    <tr>
                        <th>סבירות נמוכה</th>
                        <td class="bg-success">נמוך</td>
                        <td class="bg-success">נמוך</td>
                        <td class="bg-warning">בינוני</td>
                    </tr>
                </table>
            </div>

            <h3>שלב 3: אישור השינוי</h3>
            <ul>
                <li>הצגה בפני ועדת שינויים (ישיבה דו-שבועית)</li>
                <li>משתתפי הוועדה:
                    <ul>
                        <li>מנהל איכות (יו"ר)</li>
                        <li>מנהל ייצור</li>
                        <li>מנהל QC</li>
                        <li>מנהל רגולציה</li>
                        <li>נציג הנדסה</li>
                    </ul>
                </li>
                <li>תיעוד ההחלטה בפרוטוקול</li>
            </ul>

            <h3>שלב 4: יישום השינוי</h3>
            <ol>
                <li>הכנת תוכנית יישום מפורטת</li>
                <li>עדכון מסמכים רלוונטיים</li>
                <li>הדרכת עובדים</li>
                <li>ביצוע השינוי בפועל</li>
                <li>תיעוד הביצוע</li>
            </ol>

            <h3>שלב 5: תיקוף ואימות</h3>
            <ul>
                <li>ביצוע פרוטוקול תיקוף בהתאם לסוג השינוי</li>
                <li>בדיקות קבלה</li>
                <li>ניטור ביצועים ל-3 אצוות ראשונות</li>
                <li>אישור סופי להטמעה</li>
            </ul>

            <h2>5. מעקב ובקרה</h2>
            <ul>
                <li>דו"ח חודשי של שינויים פתוחים</li>
                <li>KPI: זמן ממוצע לסגירת שינוי</li>
                <li>ניתוח מגמות שנתי</li>
            </ul>
        `
    },

    // Quality Control Procedures
    'QC-002': {
        title: 'נוהל בדיקות מיקרוביולוגיות - Microbiological Testing',
        content: `
            <h2>1. מטרה</h2>
            <p>להבטיח בטיחות מיקרוביולוגית של מוצרי הקוסמטיקה של AID Cosmetics בהתאם לתקן ISO 22716 ודרישות משרד הבריאות.</p>

            <h2>2. תקנים ומגבלות</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>פרמטר</th>
                        <th>מגבלה (CFU/g או ml)</th>
                        <th>שיטת בדיקה</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ספירה כללית (TVC)</td>
                        <td>&lt; 1000</td>
                        <td>ISO 21149</td>
                    </tr>
                    <tr>
                        <td>שמרים ועובשים</td>
                        <td>&lt; 100</td>
                        <td>ISO 16212</td>
                    </tr>
                    <tr>
                        <td>Pseudomonas aeruginosa</td>
                        <td>לא יימצא ב-0.1g</td>
                        <td>ISO 22717</td>
                    </tr>
                    <tr>
                        <td>Staphylococcus aureus</td>
                        <td>לא יימצא ב-0.1g</td>
                        <td>ISO 22718</td>
                    </tr>
                    <tr>
                        <td>Candida albicans</td>
                        <td>לא יימצא ב-0.1g</td>
                        <td>ISO 18416</td>
                    </tr>
                    <tr>
                        <td>E. coli</td>
                        <td>לא יימצא ב-1g</td>
                        <td>ISO 21150</td>
                    </tr>
                </tbody>
            </table>

            <h2>3. תכנית דיגום</h2>
            <h3>3.1 חומרי גלם</h3>
            <ul>
                <li>כל אצווה חדשה של חומר גלם</li>
                <li>דיגום לפי √n+1 (n = מספר אריזות)</li>
                <li>מינימום 100g לדגימה</li>
            </ul>

            <h3>3.2 מוצר מוגמר</h3>
            <ul>
                <li>5 יחידות מכל אצווה</li>
                <li>דיגום מתחילת, אמצע וסוף הייצור</li>
                <li>שמירת דגימות ייחוס ל-12 חודשים</li>
            </ul>

            <h2>4. הכנת דגימות</h2>
            <ol>
                <li>עבודה בתנאים אספטיים (LAF)</li>
                <li>שקילת 10g ± 0.1g מהדגימה</li>
                <li>הוספה ל-90ml של Buffered Peptone Water</li>
                <li>הומוגניזציה במשך 2 דקות</li>
                <li>דילול עשרוני סדרתי (10⁻¹ עד 10⁻⁴)</li>
            </ol>

            <h2>5. מצעי גידול וטמפרטורות אינקובציה</h2>
            <table class="table table-striped">
                <tr>
                    <th>בדיקה</th>
                    <th>מצע</th>
                    <th>טמפרטורה</th>
                    <th>זמן</th>
                </tr>
                <tr>
                    <td>ספירה כללית</td>
                    <td>TSA (Tryptic Soy Agar)</td>
                    <td>30-35°C</td>
                    <td>48-72 שעות</td>
                </tr>
                <tr>
                    <td>שמרים ועובשים</td>
                    <td>SDA (Sabouraud Dextrose Agar)</td>
                    <td>20-25°C</td>
                    <td>5-7 ימים</td>
                </tr>
                <tr>
                    <td>P. aeruginosa</td>
                    <td>Cetrimide Agar</td>
                    <td>35-37°C</td>
                    <td>24-48 שעות</td>
                </tr>
                <tr>
                    <td>S. aureus</td>
                    <td>Mannitol Salt Agar</td>
                    <td>35-37°C</td>
                    <td>24-48 שעות</td>
                </tr>
            </table>

            <h2>6. בדיקת יעילות משמרים (Challenge Test)</h2>
            <h3>מיקרואורגניזמים לבדיקה:</h3>
            <ul>
                <li>P. aeruginosa (ATCC 9027)</li>
                <li>S. aureus (ATCC 6538)</li>
                <li>E. coli (ATCC 8739)</li>
                <li>C. albicans (ATCC 10231)</li>
                <li>A. brasiliensis (ATCC 16404)</li>
            </ul>

            <h3>קריטריונים לקבלה:</h3>
            <p><strong>קריטריון A (מומלץ):</strong></p>
            <ul>
                <li>חיידקים: ירידה של 3 לוג ביום 7, ללא עלייה עד יום 28</li>
                <li>פטריות: ירידה של 2 לוג ביום 14, ללא עלייה עד יום 28</li>
            </ul>

            <h2>7. ניקוי וחיטוי המעבדה</h2>
            <ul>
                <li>ניקוי יומי עם אתנול 70%</li>
                <li>חיטוי שבועי עם Sodium Hypochlorite 0.5%</li>
                <li>ניטור סביבתי חודשי (צלחות מגע, דיגום אוויר)</li>
            </ul>

            <h2>8. תיעוד ורישום</h2>
            <ul>
                <li>QC-F-020: טופס תוצאות בדיקה מיקרוביולוגית</li>
                <li>QC-F-021: יומן מעבדה מיקרוביולוגית</li>
                <li>שמירת תוצאות ל-7 שנים</li>
            </ul>
        `
    },

    // Production SOPs
    'PROD-002': {
        title: 'הוראת עבודה - ערבול קרמים במיקסר 500 ליטר',
        content: `
            <h2>1. ציוד וחומרים</h2>
            <h3>ציוד נדרש:</h3>
            <ul>
                <li>מיקסר ואקום 500 ליטר דגם VME-500</li>
                <li>משאבת העברה פריסטלטית</li>
                <li>מד טמפרטורה דיגיטלי מכויל</li>
                <li>pH מטר מכויל</li>
                <li>ויסקומטר Brookfield</li>
            </ul>

            <h3>ציוד מגן אישי:</h3>
            <ul>
                <li>סרבל נקי (Class D)</li>
                <li>כפפות ניטריל</li>
                <li>כיסוי ראש</li>
                <li>נעלי בטיחות</li>
                <li>משקפי מגן</li>
            </ul>

            <h2>2. בדיקות טרום ייצור</h2>
            <div class="checklist">
                <h4>רשימת בדיקות:</h4>
                <ul style="list-style-type: none;">
                    <li>☐ ניקיון המיקסר - בדיקה ויזואלית + ATP</li>
                    <li>☐ תקינות אטמי הואקום</li>
                    <li>☐ כיול מד טמפרטורה (±0.5°C)</li>
                    <li>☐ לחץ אוויר: 6-8 bar</li>
                    <li>☐ זרימת מי קירור: 20 ליטר/דקה</li>
                    <li>☐ תקינות מערכת בקרה (PLC)</li>
                </ul>
            </div>

            <h2>3. שלבי הייצור</h2>
            <h3>שלב A: הכנת הפאזה המימית (60 דקות)</h3>
            <ol>
                <li><strong>מילוי מים:</strong>
                    <ul>
                        <li>פתח ברז V-01</li>
                        <li>הזרם 300 ליטר מים מטוהרים (Purified Water)</li>
                        <li>טמפרטורת מים: 25±2°C</li>
                    </ul>
                </li>
                <li><strong>חימום:</strong>
                    <ul>
                        <li>הפעל חימום עד 75°C</li>
                        <li>קצב חימום: 1°C/דקה</li>
                        <li>הפעל ערבול איטי (50 RPM)</li>
                    </ul>
                </li>
                <li><strong>הוספת חומרים מסיסים במים:</strong>
                    <ul>
                        <li>גליצרין: 25 kg</li>
                        <li>Sodium Benzoate: 1.5 kg</li>
                        <li>Disodium EDTA: 0.5 kg</li>
                        <li>ערבל 15 דקות בטמפרטורה 75°C</li>
                    </ul>
                </li>
            </ol>

            <h3>שלב B: הכנת הפאזה השמנית (45 דקות)</h3>
            <ol>
                <li><strong>במיכל נפרד (טנק 100L):</strong>
                    <ul>
                        <li>Cetyl Alcohol: 15 kg</li>
                        <li>Stearic Acid: 10 kg</li>
                        <li>Glyceryl Stearate: 12 kg</li>
                        <li>חמם ל-80°C תוך ערבול</li>
                    </ul>
                </li>
                <li><strong>הוספת שמנים:</strong>
                    <ul>
                        <li>Sweet Almond Oil: 20 kg</li>
                        <li>Jojoba Oil: 10 kg</li>
                        <li>Dimethicone: 5 kg</li>
                    </ul>
                </li>
            </ol>

            <h3>שלב C: אמולסיפיקציה (30 דקות)</h3>
            <ol>
                <li>הפעל ואקום: -0.6 bar</li>
                <li>הגבר מהירות ערבול ל-150 RPM</li>
                <li>הוסף את הפאזה השמנית לפאזה המימית באיטיות (5 דקות)</li>
                <li>הפעל הומוגנייזר: 3000 RPM למשך 10 דקות</li>
                <li>התחל קירור ל-40°C (קצב: 0.5°C/דקה)</li>
            </ol>

            <h3>שלב D: הוספת חומרים פעילים (20 דקות)</h3>
            <p>בטמפרטורה 40°C, הוסף:</p>
            <ul>
                <li>Hyaluronic Acid Solution 1%: 5 kg</li>
                <li>Vitamin E Acetate: 2 kg</li>
                <li>Panthenol: 3 kg</li>
                <li>Fragrance: 1.5 kg</li>
            </ul>

            <h3>שלב E: התאמת pH וצמיגות</h3>
            <ul>
                <li>בדוק pH: טווח יעד 5.5-6.5</li>
                <li>התאם עם Citric Acid 10% או TEA</li>
                <li>בדוק צמיגות: 15,000-25,000 cP (Spindle 6, 20 RPM)</li>
            </ul>

            <h2>4. בקרת איכות בתהליך (IPC)</h2>
            <table class="table table-bordered">
                <tr>
                    <th>שלב</th>
                    <th>פרמטר</th>
                    <th>ערך יעד</th>
                    <th>תדירות</th>
                </tr>
                <tr>
                    <td>אמולסיפיקציה</td>
                    <td>גודל חלקיקים</td>
                    <td>&lt; 5 μm</td>
                    <td>כל 10 דקות</td>
                </tr>
                <tr>
                    <td>קירור</td>
                    <td>טמפרטורה</td>
                    <td>±2°C מהיעד</td>
                    <td>רציף</td>
                </tr>
                <tr>
                    <td>סיום</td>
                    <td>pH</td>
                    <td>5.5-6.5</td>
                    <td>3 דגימות</td>
                </tr>
                <tr>
                    <td>סיום</td>
                    <td>צמיגות</td>
                    <td>15,000-25,000 cP</td>
                    <td>3 דגימות</td>
                </tr>
            </table>

            <h2>5. דגימות</h2>
            <ul>
                <li>דגימת ייחוס: 500ml בבקבוק זכוכית</li>
                <li>דגימה למיקרוביולוגיה: 100ml סטרילי</li>
                <li>דגימה לבדיקות פיזיקוכימיות: 200ml</li>
            </ul>

            <h2>6. ניקוי לאחר ייצור</h2>
            <ol>
                <li>שטיפה ראשונית במים חמים (60°C)</li>
                <li>ניקוי עם דטרגנט אלקליני 2% (15 דקות)</li>
                <li>שטיפה במים מטוהרים</li>
                <li>חיטוי עם אתנול 70%</li>
                <li>ייבוש באוויר דחוס מסונן</li>
            </ol>

            <h2>7. תיעוד</h2>
            <ul>
                <li>PROD-F-010: Batch Manufacturing Record</li>
                <li>PROD-F-011: Equipment Log</li>
                <li>PROD-F-012: Cleaning Verification</li>
            </ul>
        `
    },

    // Product Specifications
    'SPEC-002': {
        title: 'מפרט מוצר - קרם פנים לילה אנטי אייג\'ינג',
        content: `
            <h2>1. פרטי המוצר</h2>
            <table class="table table-bordered">
                <tr>
                    <td><strong>שם המוצר:</strong></td>
                    <td>AID Night Repair Cream</td>
                </tr>
                <tr>
                    <td><strong>קוד מוצר:</strong></td>
                    <td>NC-001-50</td>
                </tr>
                <tr>
                    <td><strong>גודל אריזה:</strong></td>
                    <td>50ml</td>
                </tr>
                <tr>
                    <td><strong>סוג אריזה:</strong></td>
                    <td>צנצנת זכוכית עם מכסה אלומיניום</td>
                </tr>
            </table>

            <h2>2. פורמולה (ל-100 ק"ג)</h2>
            <h3>Phase A - מים (65.5%)</h3>
            <table class="table table-striped">
                <tr>
                    <th>INCI Name</th>
                    <th>Trade Name</th>
                    <th>%</th>
                    <th>ק"ג</th>
                </tr>
                <tr>
                    <td>Aqua</td>
                    <td>Purified Water</td>
                    <td>55.0</td>
                    <td>55.0</td>
                </tr>
                <tr>
                    <td>Glycerin</td>
                    <td>Glycerin 99.5%</td>
                    <td>5.0</td>
                    <td>5.0</td>
                </tr>
                <tr>
                    <td>Butylene Glycol</td>
                    <td>1,3-Butylene Glycol</td>
                    <td>3.0</td>
                    <td>3.0</td>
                </tr>
                <tr>
                    <td>Sodium Hyaluronate</td>
                    <td>Hyaluronic Acid LMW</td>
                    <td>0.5</td>
                    <td>0.5</td>
                </tr>
                <tr>
                    <td>Carbomer</td>
                    <td>Carbopol Ultrez 10</td>
                    <td>0.3</td>
                    <td>0.3</td>
                </tr>
                <tr>
                    <td>Disodium EDTA</td>
                    <td>EDTA Disodium</td>
                    <td>0.1</td>
                    <td>0.1</td>
                </tr>
            </table>

            <h3>Phase B - שמנים (28%)</h3>
            <table class="table table-striped">
                <tr>
                    <th>INCI Name</th>
                    <th>Trade Name</th>
                    <th>%</th>
                    <th>ק"ג</th>
                </tr>
                <tr>
                    <td>Cetearyl Alcohol</td>
                    <td>Lanette O</td>
                    <td>3.0</td>
                    <td>3.0</td>
                </tr>
                <tr>
                    <td>Glyceryl Stearate</td>
                    <td>Cutina GMS</td>
                    <td>2.0</td>
                    <td>2.0</td>
                </tr>
                <tr>
                    <td>Caprylic/Capric Triglyceride</td>
                    <td>Myritol 318</td>
                    <td>8.0</td>
                    <td>8.0</td>
                </tr>
                <tr>
                    <td>Squalane</td>
                    <td>Olive Squalane</td>
                    <td>5.0</td>
                    <td>5.0</td>
                </tr>
                <tr>
                    <td>Shea Butter</td>
                    <td>Butyrospermum Parkii</td>
                    <td>3.0</td>
                    <td>3.0</td>
                </tr>
                <tr>
                    <td>Jojoba Oil</td>
                    <td>Simmondsia Chinensis</td>
                    <td>4.0</td>
                    <td>4.0</td>
                </tr>
                <tr>
                    <td>Dimethicone</td>
                    <td>Dow Corning 200/350</td>
                    <td>3.0</td>
                    <td>3.0</td>
                </tr>
            </table>

            <h3>Phase C - חומרים פעילים (5.5%)</h3>
            <table class="table table-striped">
                <tr>
                    <th>INCI Name</th>
                    <th>Trade Name</th>
                    <th>%</th>
                    <th>ק"ג</th>
                </tr>
                <tr>
                    <td>Retinyl Palmitate</td>
                    <td>Vitamin A Palmitate</td>
                    <td>0.5</td>
                    <td>0.5</td>
                </tr>
                <tr>
                    <td>Tocopheryl Acetate</td>
                    <td>Vitamin E Acetate</td>
                    <td>1.0</td>
                    <td>1.0</td>
                </tr>
                <tr>
                    <td>Niacinamide</td>
                    <td>Vitamin B3</td>
                    <td>2.0</td>
                    <td>2.0</td>
                </tr>
                <tr>
                    <td>Peptide Complex</td>
                    <td>Matrixyl 3000</td>
                    <td>2.0</td>
                    <td>2.0</td>
                </tr>
            </table>

            <h3>Phase D - משמרים וריח (1.0%)</h3>
            <table class="table table-striped">
                <tr>
                    <td>Phenoxyethanol & Ethylhexylglycerin</td>
                    <td>Euxyl PE 9010</td>
                    <td>0.8</td>
                    <td>0.8</td>
                </tr>
                <tr>
                    <td>Fragrance</td>
                    <td>Night Cream Fragrance</td>
                    <td>0.2</td>
                    <td>0.2</td>
                </tr>
            </table>

            <h2>3. מפרט פיזיקוכימי</h2>
            <table class="table table-bordered">
                <tr>
                    <th>פרמטר</th>
                    <th>מפרט</th>
                    <th>שיטת בדיקה</th>
                </tr>
                <tr>
                    <td>מראה</td>
                    <td>קרם אחיד, לבן עד קרם בהיר</td>
                    <td>ויזואלי</td>
                </tr>
                <tr>
                    <td>ריח</td>
                    <td>אופייני, נעים</td>
                    <td>אורגנולפטי</td>
                </tr>
                <tr>
                    <td>pH</td>
                    <td>5.5 - 6.5</td>
                    <td>pH meter</td>
                </tr>
                <tr>
                    <td>צמיגות</td>
                    <td>30,000 - 50,000 cP</td>
                    <td>Brookfield RV, Spindle 7, 20 RPM, 25°C</td>
                </tr>
                <tr>
                    <td>צפיפות</td>
                    <td>0.95 - 1.05 g/ml</td>
                    <td>Pycnometer</td>
                </tr>
            </table>

            <h2>4. מפרט מיקרוביולוגי</h2>
            <table class="table table-bordered">
                <tr>
                    <th>פרמטר</th>
                    <th>מגבלה</th>
                </tr>
                <tr>
                    <td>ספירה כללית</td>
                    <td>&lt; 100 CFU/g</td>
                </tr>
                <tr>
                    <td>שמרים ועובשים</td>
                    <td>&lt; 10 CFU/g</td>
                </tr>
                <tr>
                    <td>פתוגנים</td>
                    <td>לא יימצאו</td>
                </tr>
            </table>

            <h2>5. יציבות</h2>
            <ul>
                <li><strong>תנאי אחסון:</strong> 15-25°C, מוגן מאור</li>
                <li><strong>תוקף:</strong> 30 חודשים מתאריך ייצור</li>
                <li><strong>PAO:</strong> 12M (Period After Opening)</li>
            </ul>

            <h2>6. תווית</h2>
            <p>התווית תכלול:</p>
            <ul>
                <li>שם המוצר בעברית ואנגלית</li>
                <li>רשימת רכיבים (INCI)</li>
                <li>תכולה נטו</li>
                <li>תאריך ייצור ותפוגה</li>
                <li>מספר אצווה</li>
                <li>הוראות שימוש</li>
                <li>אזהרות</li>
                <li>פרטי יצרן</li>
                <li>ברקוד</li>
            </ul>
        `
    },

    // Raw Materials
    'RM-001': {
        title: 'מפרט חומר גלם - חומצה היאלורונית',
        content: `
            <h2>1. זיהוי החומר</h2>
            <table class="table table-bordered">
                <tr>
                    <td><strong>שם INCI:</strong></td>
                    <td>Sodium Hyaluronate</td>
                </tr>
                <tr>
                    <td><strong>שם כימי:</strong></td>
                    <td>Sodium salt of Hyaluronic Acid</td>
                </tr>
                <tr>
                    <td><strong>CAS Number:</strong></td>
                    <td>9067-32-7</td>
                </tr>
                <tr>
                    <td><strong>EINECS:</strong></td>
                    <td>232-678-0</td>
                </tr>
                <tr>
                    <td><strong>משקל מולקולרי:</strong></td>
                    <td>50,000 - 110,000 Da (Low MW)</td>
                </tr>
                <tr>
                    <td><strong>ספק מאושר:</strong></td>
                    <td>Bloomage Biotechnology</td>
                </tr>
            </table>

            <h2>2. מפרט טכני</h2>
            <table class="table table-striped">
                <tr>
                    <th>פרמטר</th>
                    <th>מפרט</th>
                    <th>שיטת בדיקה</th>
                </tr>
                <tr>
                    <td>מראה</td>
                    <td>אבקה לבנה עד קרם בהיר</td>
                    <td>ויזואלי</td>
                </tr>
                <tr>
                    <td>תכולת Sodium Hyaluronate</td>
                    <td>≥ 95.0%</td>
                    <td>HPLC</td>
                </tr>
                <tr>
                    <td>pH (תמיסה 0.1%)</td>
                    <td>6.0 - 7.5</td>
                    <td>USP</td>
                </tr>
                <tr>
                    <td>צמיגות (תמיסה 1%)</td>
                    <td>5 - 15 mPa.s</td>
                    <td>Brookfield</td>
                </tr>
                <tr>
                    <td>לחות</td>
                    <td>≤ 10.0%</td>
                    <td>Karl Fischer</td>
                </tr>
                <tr>
                    <td>מתכות כבדות</td>
                    <td>≤ 20 ppm</td>
                    <td>ICP-MS</td>
                </tr>
                <tr>
                    <td>ארסן</td>
                    <td>≤ 2 ppm</td>
                    <td>ICP-MS</td>
                </tr>
                <tr>
                    <td>חלבון</td>
                    <td>≤ 0.1%</td>
                    <td>Kjeldahl</td>
                </tr>
            </table>

            <h2>3. מפרט מיקרוביולוגי</h2>
            <table class="table table-bordered">
                <tr>
                    <th>פרמטר</th>
                    <th>מגבלה</th>
                </tr>
                <tr>
                    <td>ספירה כללית</td>
                    <td>≤ 100 CFU/g</td>
                </tr>
                <tr>
                    <td>שמרים ועובשים</td>
                    <td>≤ 10 CFU/g</td>
                </tr>
                <tr>
                    <td>E. coli</td>
                    <td>Negative/g</td>
                </tr>
                <tr>
                    <td>Salmonella</td>
                    <td>Negative/10g</td>
                </tr>
                <tr>
                    <td>S. aureus</td>
                    <td>Negative/g</td>
                </tr>
            </table>

            <h2>4. אחסון וטיפול</h2>
            <div class="alert alert-warning">
                <h4>תנאי אחסון:</h4>
                <ul>
                    <li>טמפרטורה: 2-8°C (מומלץ) או עד 25°C</li>
                    <li>לחות יחסית: &lt; 60%</li>
                    <li>הגנה מאור ישיר</li>
                    <li>אריזה סגורה הרמטית</li>
                </ul>
            </div>

            <h3>אמצעי זהירות:</h3>
            <ul>
                <li>החומר היגרוסקופי - למנוע חשיפה ללחות</li>
                <li>להשתמש בכלים יבשים ונקיים</li>
                <li>לסגור היטב לאחר כל שימוש</li>
                <li>FIFO - First In First Out</li>
            </ul>

            <h2>5. הכנת תמיסות</h2>
            <h3>תמיסת Stock 1%:</h3>
            <ol>
                <li>לשקול 1.0g חומצה היאלורונית</li>
                <li>להוסיף 80ml מים מטוהרים בטמפרטורת החדר</li>
                <li>לערבל באיטיות (מגנטי) למניעת קצף</li>
                <li>להמתין 2-4 שעות לפיזור מלא</li>
                <li>להשלים ל-100ml</li>
                <li>לסנן דרך 0.45μm אם נדרש</li>
            </ol>

            <h2>6. תאימות</h2>
            <h3>תואם עם:</h3>
            <ul>
                <li>pH: 4.0 - 9.0</li>
                <li>אלכוהולים עד 20%</li>
                <li>גליצרין, פרופילן גליקול</li>
                <li>רוב החומרים הפעילים הקוסמטיים</li>
            </ul>

            <h3>לא תואם עם:</h3>
            <ul>
                <li>קטיונים חזקים בריכוז גבוה</li>
                <li>Quaternary compounds מעל 0.1%</li>
                <li>חומרי חמצון חזקים</li>
            </ul>

            <h2>7. בדיקות קבלה</h2>
            <ul>
                <li>COA מהספק</li>
                <li>בדיקת זהות - IR Spectrum</li>
                <li>צמיגות תמיסה 0.5%</li>
                <li>pH</li>
                <li>מיקרוביולוגיה</li>
            </ul>

            <h2>8. תיעוד</h2>
            <ul>
                <li>RM-F-001: טופס קבלת חומר גלם</li>
                <li>RM-F-002: תעודת שחרור לשימוש</li>
                <li>תוקף: 2 שנים מתאריך ייצור</li>
                <li>Retest: כל 6 חודשים</li>
            </ul>
        `
    },

    // HR Procedures
    'HR-002': {
        title: 'נוהל הדרכות GMP לעובדי ייצור',
        content: `
            <h2>1. מטרה</h2>
            <p>להבטיח שכל עובדי הייצור ב-AID Cosmetics מקבלים הכשרה מתאימה בנושאי GMP (Good Manufacturing Practice) בהתאם לתקן ISO 22716.</p>

            <h2>2. תוכנית הדרכה לעובד חדש</h2>
            <h3>שבוע 1: הדרכות בסיס</h3>
            <table class="table table-bordered">
                <tr>
                    <th>יום</th>
                    <th>נושא</th>
                    <th>משך</th>
                    <th>מדריך</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>היכרות עם החברה ומוצריה</td>
                    <td>4 שעות</td>
                    <td>מנהל HR</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>בטיחות במפעל קוסמטיקה</td>
                    <td>4 שעות</td>
                    <td>ממונה בטיחות</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>עקרונות GMP - ISO 22716</td>
                    <td>8 שעות</td>
                    <td>מנהל איכות</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>היגיינה אישית וביגוד נקי</td>
                    <td>4 שעות</td>
                    <td>אחראי חדרים נקיים</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>התנהגות בחדרים נקיים</td>
                    <td>4 שעות</td>
                    <td>אחראי חדרים נקיים</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>תיעוד ורישום ב-GMP</td>
                    <td>4 שעות</td>
                    <td>רכז איכות</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>ניקיון וחיטוי</td>
                    <td>4 שעות</td>
                    <td>אחראי סניטציה</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>מבחן ידע בסיסי</td>
                    <td>2 שעות</td>
                    <td>מנהל איכות</td>
                </tr>
            </table>

            <h3>שבוע 2-4: הדרכה במחלקה (OJT)</h3>
            <ul>
                <li>הצמדה לעובד מנוסה (Buddy System)</li>
                <li>למידת נהלי עבודה ספציפיים</li>
                <li>תרגול מעשי תחת השגחה</li>
                <li>הסמכה על ציוד ותהליכים</li>
            </ul>

            <h2>3. נושאי הדרכת GMP</h2>
            <h3>3.1 היגיינה אישית</h3>
            <div class="alert alert-info">
                <h4>חוקי הזהב:</h4>
                <ul>
                    <li>רחיצת ידיים: לפני כניסה, אחרי הפסקה, אחרי שירותים</li>
                    <li>אין תכשיטים (מלבד טבעת נישואין חלקה)</li>
                    <li>אין איפור/לק/ריסים מלאכותיים באזורי ייצור</li>
                    <li>ציפורניים קצרות ונקיות</li>
                    <li>שיער אסוף ומכוסה במלואו</li>
                </ul>
            </div>

            <h3>3.2 ביגוד נקי</h3>
            <table class="table table-striped">
                <tr>
                    <th>אזור</th>
                    <th>דרישות ביגוד</th>
                </tr>
                <tr>
                    <td>Class D (ייצור כללי)</td>
                    <td>
                        <ul>
                            <li>סרבל נקי (מתחלף יומי)</li>
                            <li>כיסוי ראש</li>
                            <li>נעלי בטיחות ייעודיות</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Class C (אזור מילוי)</td>
                    <td>
                        <ul>
                            <li>סרבל סטרילי</li>
                            <li>כיסוי ראש מלא</li>
                            <li>מסכה</li>
                            <li>כפפות</li>
                            <li>נעליים ייעודיות/כיסוי נעליים</li>
                        </ul>
                    </td>
                </tr>
            </table>

            <h3>3.3 5S במקום העבודה</h3>
            <ol>
                <li><strong>Sort (מיון):</strong> הסרת פריטים מיותרים</li>
                <li><strong>Set in Order (סידור):</strong> מקום לכל דבר</li>
                <li><strong>Shine (ניקיון):</strong> ניקיון יומי של אזור העבודה</li>
                <li><strong>Standardize (סטנדרטיזציה):</strong> נהלים אחידים</li>
                <li><strong>Sustain (שימור):</strong> הקפדה מתמדת</li>
            </ol>

            <h2>4. הדרכות רענון</h2>
            <table class="table table-bordered">
                <tr>
                    <th>תדירות</th>
                    <th>נושא</th>
                    <th>משך</th>
                </tr>
                <tr>
                    <td>שנתי</td>
                    <td>עקרונות GMP</td>
                    <td>4 שעות</td>
                </tr>
                <tr>
                    <td>שנתי</td>
                    <td>היגיינה וחדרים נקיים</td>
                    <td>2 שעות</td>
                </tr>
                <tr>
                    <td>דו-שנתי</td>
                    <td>בטיחות וחירום</td>
                    <td>4 שעות</td>
                </tr>
                <tr>
                    <td>לפי צורך</td>
                    <td>נהלים חדשים/מעודכנים</td>
                    <td>משתנה</td>
                </tr>
            </table>

            <h2>5. הערכת יעילות הדרכה</h2>
            <ul>
                <li>מבחן ידע (ציון עובר: 80%)</li>
                <li>תצפית על ביצוע העבודה</li>
                <li>ביקורות פתע</li>
                <li>ניתוח חריגות ושגיאות</li>
            </ul>

            <h2>6. תיעוד</h2>
            <ul>
                <li>HR-F-010: כרטיס הדרכות עובד</li>
                <li>HR-F-011: טופס נוכחות בהדרכה</li>
                <li>HR-F-012: הערכת הדרכה</li>
                <li>HR-F-013: אישור הסמכה</li>
            </ul>

            <h2>7. אי-התאמות נפוצות למניעה</h2>
            <div class="alert alert-danger">
                <h4>אזהרות חשובות:</h4>
                <ul>
                    <li>❌ אכילה/שתייה באזור ייצור</li>
                    <li>❌ שימוש בטלפון נייד בחדר נקי</li>
                    <li>❌ יציאה וחזרה ללא החלפת ביגוד</li>
                    <li>❌ רישום רטרואקטיבי</li>
                    <li>❌ תיקון רשומות ללא חתימה ותאריך</li>
                </ul>
            </div>
        `
    }
};

// Function to get full document content
function getDocumentContent(docId) {
    const baseContent = documentContent[docId];
    if (!baseContent) {
        // Return generic content for documents without specific content yet
        return {
            title: 'מסמך AID Cosmetics',
            content: `
                <h2>1. מטרה</h2>
                <p>מסמך זה מהווה חלק ממערכת ניהול האיכות של AID Cosmetics בהתאם לתקן ISO 22716.</p>

                <h2>2. תחולה</h2>
                <p>נוהל זה חל על כל הפעילויות הרלוונטיות במפעל.</p>

                <h2>3. אחריות</h2>
                <p>מנהל האיכות אחראי על יישום ובקרה של נוהל זה.</p>

                <h2>4. תיאור התהליך</h2>
                <p>התהליך מתבצע בהתאם לנהלי החברה ודרישות הרגולציה.</p>

                <h2>5. תיעוד</h2>
                <p>כל הפעילויות מתועדות בהתאם לנהלי התיעוד של החברה.</p>
            `
        };
    }
    return baseContent;
}

// Export for use in documents.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { documentContent, getDocumentContent };
}