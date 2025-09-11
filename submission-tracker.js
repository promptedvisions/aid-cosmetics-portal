// Submission Tracker JavaScript
// AID COSMETICS - Regulatory Submission Management System

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSubmissionTracker();
    setupEventListeners();
    loadSavedData();
    startNotificationEngine();
});

// Global variables
let submissionData = {
    documents: [],
    checklist: {},
    forms: {},
    correspondence: [],
    alerts: []
};

// Initialize submission tracker
function initializeSubmissionTracker() {
    // Load saved data from localStorage
    const savedData = localStorage.getItem('aidCosmeticsSubmissions');
    if (savedData) {
        submissionData = JSON.parse(savedData);
    }
    
    // Update all displays
    updateProgressIndicators();
    updateDeadlineWarnings();
    updateDocumentCounts();
}

// Setup event listeners
function setupEventListeners() {
    // File upload handling
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    
    if (uploadArea) {
        uploadArea.addEventListener('dragover', handleDragOver);
        uploadArea.addEventListener('dragleave', handleDragLeave);
        uploadArea.addEventListener('drop', handleDrop);
    }
    
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }
    
    // Form submission
    const mohForm = document.getElementById('mohSubmissionForm');
    if (mohForm) {
        mohForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Document search
    const searchInput = document.getElementById('documentSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterDocuments);
    }
}

// File upload functions
function triggerFileUpload() {
    document.getElementById('fileInput').click();
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    handleFiles(files);
}

function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    for (let file of files) {
        if (validateFile(file)) {
            uploadFile(file);
        }
    }
}

function validateFile(file) {
    const allowedTypes = ['application/pdf', 'application/msword', 
                         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                         'application/vnd.ms-excel', 
                         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    
    if (!allowedTypes.includes(file.type)) {
        showNotification('סוג קובץ לא נתמך', 'danger');
        return false;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
        showNotification('הקובץ גדול מדי (מקסימום 10MB)', 'danger');
        return false;
    }
    
    return true;
}

function uploadFile(file) {
    // Simulate file upload
    const uploadProgress = document.createElement('div');
    uploadProgress.className = 'progress mt-3';
    uploadProgress.innerHTML = `
        <div class="progress-bar progress-bar-striped progress-bar-animated" 
             role="progressbar" style="width: 0%"></div>
    `;
    
    document.getElementById('uploadArea').appendChild(uploadProgress);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        uploadProgress.querySelector('.progress-bar').style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            uploadProgress.remove();
            
            // Add to document list
            const newDoc = {
                id: Date.now(),
                name: file.name,
                type: getFileType(file.type),
                authority: 'משרד הבריאות',
                status: 'draft',
                date: new Date().toLocaleDateString('he-IL'),
                size: formatFileSize(file.size)
            };
            
            submissionData.documents.push(newDoc);
            saveData();
            updateDocumentTable();
            showNotification(`הקובץ ${file.name} הועלה בהצלחה`, 'success');
        }
    }, 100);
}

function getFileType(mimeType) {
    const typeMap = {
        'application/pdf': 'PDF',
        'application/msword': 'Word',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word',
        'application/vnd.ms-excel': 'Excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel'
    };
    return typeMap[mimeType] || 'מסמך';
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Form submission handling
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submission = {};
    
    for (let [key, value] of formData.entries()) {
        submission[key] = value;
    }
    
    submission.timestamp = new Date().toISOString();
    submission.status = 'submitted';
    
    submissionData.forms[submission.timestamp] = submission;
    saveData();
    
    showNotification('הטופס נשלח בהצלחה למשרד הבריאות', 'success');
    
    // Create confirmation modal
    showSubmissionConfirmation(submission);
}

function showSubmissionConfirmation(submission) {
    const modalHtml = `
        <div class="modal fade" id="confirmationModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">אישור הגשה</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <i class="bi bi-check-circle text-success" style="font-size: 48px;"></i>
                            <h4 class="mt-3">הבקשה הוגשה בהצלחה!</h4>
                            <p>מספר אסמכתא: <strong>AID-${Date.now()}</strong></p>
                            <p>תאריך הגשה: ${new Date().toLocaleDateString('he-IL')}</p>
                            <p>זמן משוער לתגובה: 14-21 ימי עבודה</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">סגור</button>
                        <button type="button" class="btn btn-primary" onclick="downloadReceipt()">
                            <i class="bi bi-download"></i> הורד אישור
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();
}

// Checklist management
function updateChecklist(checkbox) {
    const item = checkbox.parentElement;
    if (checkbox.checked) {
        item.classList.add('completed');
    } else {
        item.classList.remove('completed');
    }
    
    updateChecklistProgress();
    saveChecklistState();
}

function updateChecklistProgress() {
    const totalItems = document.querySelectorAll('.checklist-item input[type="checkbox"]').length;
    const completedItems = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
    const progress = Math.round((completedItems / totalItems) * 100);
    
    const progressBar = document.getElementById('checklistProgress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '% הושלם';
    }
    
    // Update metrics
    updateDocumentCounts();
}

function saveChecklistState() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const state = {};
    
    checkboxes.forEach((cb, index) => {
        state[`item_${index}`] = cb.checked;
    });
    
    submissionData.checklist = state;
    saveData();
}

function generateChecklistReport() {
    const checklistItems = [];
    document.querySelectorAll('.checklist-item').forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const text = item.querySelector('span').textContent;
        checklistItems.push({
            text: text,
            completed: checkbox.checked
        });
    });
    
    // Create report content
    const reportContent = `
        <h3>דוח רשימת תיוג - AID COSMETICS</h3>
        <p>תאריך: ${new Date().toLocaleDateString('he-IL')}</p>
        <hr>
        <h4>מסמכים שהושלמו:</h4>
        <ul>
            ${checklistItems.filter(i => i.completed).map(i => `<li>${i.text}</li>`).join('')}
        </ul>
        <h4>מסמכים בהמתנה:</h4>
        <ul>
            ${checklistItems.filter(i => !i.completed).map(i => `<li>${i.text}</li>`).join('')}
        </ul>
        <hr>
        <p>סה"כ השלמה: ${checklistItems.filter(i => i.completed).length} מתוך ${checklistItems.length}</p>
    `;
    
    // Open in new window for printing
    const reportWindow = window.open('', '_blank');
    reportWindow.document.write(`
        <!DOCTYPE html>
        <html lang="he" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>דוח רשימת תיוג</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h3 { color: #2c3e50; }
                h4 { color: #3498db; margin-top: 20px; }
                ul { line-height: 1.8; }
            </style>
        </head>
        <body>
            ${reportContent}
            <button onclick="window.print()">הדפס</button>
        </body>
        </html>
    `);
}

// Correspondence templates
function loadTemplate(templateType) {
    const templates = {
        'moh-initial': {
            title: 'בקשה ראשונית למשרד הבריאות',
            recipient: 'אגף הרוקחות, משרד הבריאות',
            subject: 'בקשה לרישיון ייצור תכשירים קוסמטיים - AID COSMETICS בע״מ',
            content: getMohInitialTemplate()
        },
        'moh-response': {
            title: 'מענה להערות משרד הבריאות',
            recipient: 'אגף הרוקחות, משרד הבריאות',
            subject: 'מענה להערות - בקשה לרישיון ייצור תכשירים קוסמטיים',
            content: getMohResponseTemplate()
        },
        'fire-request': {
            title: 'בקשה לאישור כיבוי אש',
            recipient: 'רשות הכבאות וההצלה',
            subject: 'בקשה לאישור מערכות כיבוי אש - AID COSMETICS',
            content: getFireRequestTemplate()
        },
        'env-permit': {
            title: 'בקשה להיתר סביבתי',
            recipient: 'המשרד להגנת הסביבה',
            subject: 'בקשה להיתר הזרמת שפכים ופליטות',
            content: getEnvPermitTemplate()
        },
        'business-license': {
            title: 'בקשה לרישיון עסק',
            recipient: 'מחלקת רישוי עסקים, עיריית לוד',
            subject: 'בקשה לרישיון עסק למפעל קוסמטיקה',
            content: getBusinessLicenseTemplate()
        },
        'update-notification': {
            title: 'הודעה על שינויים במפעל',
            recipient: 'אגף הרוקחות, משרד הבריאות',
            subject: 'הודעה על שינויים במפעל - AID COSMETICS',
            content: getUpdateNotificationTemplate()
        }
    };
    
    const template = templates[templateType];
    if (template) {
        updateCorrespondenceForm(template);
        
        // Update active button
        document.querySelectorAll('.list-group-item').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    }
}

function updateCorrespondenceForm(template) {
    const form = document.querySelector('#correspondence .submission-form');
    if (form) {
        form.querySelector('h5').textContent = `תבנית: ${template.title}`;
        form.querySelector('input[value*="אגף"]').value = template.recipient;
        form.querySelector('input[value*="בקשה"]').value = template.subject;
        form.querySelector('textarea').value = template.content;
    }
}

// Template content functions
function getMohInitialTemplate() {
    return `לכבוד
אגף הרוקחות
משרד הבריאות
ירושלים

א.ג.נ.,

הנדון: בקשה לרישיון ייצור תכשירים קוסמטיים - AID COSMETICS בע״מ

אנו מתכבדים להגיש בקשה לקבלת רישיון ייצור תכשירים קוסמטיים עבור מפעלנו הממוקם ברחוב התעשייה 15, אזור התעשייה הצפוני, לוד.

רקע:
חברת AID COSMETICS בע״מ הינה חברה המתמחה בפיתוח וייצור תכשירים קוסמטיים איכותיים. המפעל עובר כעת תהליך המרה מקיף ממתקן ייצור קנאביס רפואי (בעל רישיון IMC-GMP) למפעל קוסמטיקה העומד בדרישות תקן ISO 22716.

המסמכים המצורפים:
1. תיק טכני מלא - 13 פרקים
2. Site Master File (SMF)
3. נהלי איכות ISO 22716
4. תוכניות אדריכליות של המפעל
5. רשימת ציוד ומכונות
6. קורות חיים של הצוות המקצועי
7. תעודות השכלה רלוונטיות

יכולות הייצור:
- שטח כולל: 750 מ״ר
- שטח חדרים נקיים: 220 מ״ר
- כושר ייצור שנתי: 500 טון
- קווי ייצור: 3 קווים מודרניים
- סיווג חדרים: Class D (ISO 8) באזורי הייצור

אנו מבקשים לתאם פגישת היכרות והצגת התוכנית המפורטת להמרת המפעל.

נשמח לעמוד לרשותכם לכל שאלה או הבהרה נוספת.

בכבוד רב,
ד״ר אייל כהן
מנהל איכות ורגולציה
AID COSMETICS בע״מ

טלפון: 08-9255555
דוא״ל: regulatory@aidcosmetics.co.il`;
}

function getMohResponseTemplate() {
    return `לכבוד
אגף הרוקחות
משרד הבריאות
ירושלים

א.ג.נ.,

הנדון: מענה להערות - בקשה לרישיון ייצור תכשירים קוסמטיים
       סימוכין: מכתבכם מיום [תאריך]

אנו מתכבדים להשיב על הערותיכם למכתבנו מיום [תאריך] בנושא שבנדון.

להלן התייחסותנו המפורטת להערות שהועלו:

1. הערה ראשונה:
   [תוכן ההערה]
   
   מענה:
   [תשובה מפורטת]

2. הערה שנייה:
   [תוכן ההערה]
   
   מענה:
   [תשובה מפורטת]

3. הערה שלישית:
   [תוכן ההערה]
   
   מענה:
   [תשובה מפורטת]

מצ״ב המסמכים הנוספים שנדרשו:
- [רשימת מסמכים]

אנו מקווים כי מענה זה נותן מענה מלא להערותיכם ומבקשים את אישורכם להמשך התהליך.

בכבוד רב,
ד״ר אייל כהן
מנהל איכות ורגולציה
AID COSMETICS בע״מ`;
}

function getFireRequestTemplate() {
    return `לכבוד
רשות הכבאות וההצלה
מחוז מרכז

א.ג.נ.,

הנדון: בקשה לאישור מערכות כיבוי אש - AID COSMETICS

אנו מבקשים את אישורכם למערכות הכיבוי והבטיחות במפעלנו.

פרטי המפעל:
- כתובת: רחוב התעשייה 15, אזור התעשייה הצפוני, לוד
- שטח: 750 מ״ר
- ייעוד: מפעל לייצור תכשירים קוסמטיים

מערכות כיבוי מותקנות:
1. מערכת ספרינקלרים אוטומטית בכל שטחי המפעל
2. עמדות כיבוי אש עם גלגלונים
3. מטפי כיבוי מסוגים שונים
4. מערכת גילוי עשן ואש
5. תאורת חירום ושילוט
6. דלתות אש תקניות

מצ״ב:
- תוכניות בטיחות אש מאושרות על ידי יועץ בטיחות
- אישורי תקינות למערכות
- תוכנית פינוי בחירום

נבקש לתאם ביקורת במפעל בהקדם האפשרי.

בכבוד רב,
[שם]
ממונה בטיחות
AID COSMETICS בע״מ`;
}

function getEnvPermitTemplate() {
    return `לכבוד
המשרד להגנת הסביבה
מחוז מרכז

א.ג.נ.,

הנדון: בקשה להיתר הזרמת שפכים ופליטות - AID COSMETICS

אנו מבקשים היתר סביבתי למפעל הקוסמטיקה שלנו.

אופי הפעילות:
ייצור תכשירים קוסמטיים - קרמים, תחליבים וסרומים

מערכות טיפול בשפכים:
1. מערכת קדם-טיפול בשפכים תעשייתיים
2. מפריד שומנים
3. בריכת איזון pH
4. מערכת ניטור רציף

מערכות טיפול באוויר:
1. מסנני HEPA במערכות האוורור
2. מערכת יניקה מקומית בנקודות פליטה
3. ניטור איכות אוויר

ניהול פסולת:
1. הפרדה במקור לפסולת רגילה, מסוכנת ומיחזור
2. חוזה עם קבלן פסולת מורשה
3. תיעוד מלא של פינוי פסולת

מצ״ב:
- סקר סביבתי מלא
- תוכנית ניהול סביבתי
- תוצאות בדיקות מעבדה

נודה לטיפולכם המהיר.

בכבוד רב,
[שם]
ממונה איכות סביבה
AID COSMETICS בע״מ`;
}

function getBusinessLicenseTemplate() {
    return `לכבוד
מחלקת רישוי עסקים
עיריית לוד

א.ג.נ.,

הנדון: בקשה לרישיון עסק למפעל קוסמטיקה

אנו מבקשים רישיון עסק עבור מפעל לייצור תכשירים קוסמטיים.

פרטי העסק:
- שם: AID COSMETICS בע״מ
- ח.פ.: 515555555
- כתובת: רחוב התעשייה 15, אזור התעשייה הצפוני, לוד
- סוג העסק: מפעל לייצור תכשירים קוסמטיים (פריט 3.4א׳)

אישורים מצורפים:
1. אישור משרד הבריאות (בתהליך)
2. אישור כיבוי אש (בתהליך)
3. אישור המשרד להגנת הסביבה (בתהליך)
4. תוכנית עסקית
5. חוזה שכירות
6. תוכניות אדריכליות מאושרות

מצהירים בזאת כי:
- העסק יפעל בהתאם לכל דרישות החוק
- נשמור על כללי הבטיחות והגהות
- נמנע מכל מטרד לסביבה

נבקש את אישורכם בהקדם.

בכבוד רב,
[שם]
מנכ״ל
AID COSMETICS בע״מ`;
}

function getUpdateNotificationTemplate() {
    return `לכבוד
אגף הרוקחות
משרד הבריאות

א.ג.נ.,

הנדון: הודעה על שינויים במפעל - AID COSMETICS
       רישיון ייצור מס׳: [מספר רישיון]

ברצוננו להודיע על השינויים הבאים במפעל:

1. שינויים בציוד:
   [פירוט השינויים]

2. שינויים בתהליכי ייצור:
   [פירוט השינויים]

3. שינויים בצוות המקצועי:
   [פירוט השינויים]

4. שינויים במבנה:
   [פירוט השינויים]

הערכת השפעה:
השינויים המתוארים לעיל [אינם משפיעים / משפיעים באופן הבא] על איכות המוצרים ועמידה בדרישות GMP.

מצ״ב:
- תיעוד מלא של השינויים
- פרוטוקולי תיקוף (במידת הצורך)
- עדכון SMF

נבקש את אישורכם לשינויים המוצעים.

בכבוד רב,
ד״ר אייל כהן
מנהל איכות ורגולציה
AID COSMETICS בע״מ`;
}

// Export functions
function saveCorrespondence() {
    const form = document.querySelector('#correspondence form');
    const correspondence = {
        date: form.querySelector('input[type="date"]').value,
        recipient: form.querySelector('input[value*="אגף"]').value,
        subject: form.querySelector('input[value*="בקשה"]').value,
        content: form.querySelector('textarea').value,
        timestamp: new Date().toISOString()
    };
    
    submissionData.correspondence.push(correspondence);
    saveData();
    showNotification('ההתכתבות נשמרה בהצלחה', 'success');
}

function exportCorrespondence() {
    const form = document.querySelector('#correspondence form');
    const content = form.querySelector('textarea').value;
    
    // Create a blob with the content
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'correspondence_' + new Date().getTime() + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('המסמך יוצא בהצלחה', 'success');
}

function saveDraft() {
    const form = document.getElementById('mohSubmissionForm');
    const formData = new FormData(form);
    const draft = {};
    
    for (let [key, value] of formData.entries()) {
        draft[key] = value;
    }
    
    draft.timestamp = new Date().toISOString();
    draft.status = 'draft';
    
    localStorage.setItem('aidCosmeticsDraft', JSON.stringify(draft));
    showNotification('הטופס נשמר כטיוטה', 'info');
}

function downloadReceipt() {
    const receiptContent = `
אישור הגשה - AID COSMETICS

מספר אסמכתא: AID-${Date.now()}
תאריך: ${new Date().toLocaleDateString('he-IL')}
שעה: ${new Date().toLocaleTimeString('he-IL')}

פרטי ההגשה:
- סוג הבקשה: רישיון ייצור תכשירים קוסמטיים
- שם החברה: AID COSMETICS בע״מ
- ח.פ.: 515555555

מסמכים שהוגשו:
1. תיק טכני מלא
2. Site Master File
3. נהלי איכות ISO 22716
4. תוכניות אדריכליות
5. רשימת ציוד

סטטוס: הבקשה התקבלה במערכת
זמן טיפול משוער: 14-21 ימי עבודה

לבירורים: 08-9255555
    `;
    
    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt_AID_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Progress and metrics functions
function updateProgressIndicators() {
    // Update timeline progress
    const totalSteps = 7;
    const completedSteps = document.querySelectorAll('.timeline-item.completed').length;
    const progress = Math.round((completedSteps / totalSteps) * 100);
    
    // Update circular progress if exists
    const progressCircle = document.querySelector('.progress-circle circle:last-child');
    if (progressCircle) {
        const circumference = 2 * Math.PI * 50;
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = progress + '%';
    }
}

function updateDeadlineWarnings() {
    const deadlines = [
        { date: new Date('2024-02-01'), task: 'פגישת תיאום', priority: 'danger' },
        { date: new Date('2024-02-15'), task: 'הגשת בקשה', priority: 'warning' },
        { date: new Date('2024-03-01'), task: 'תחילת שיפוצים', priority: 'info' }
    ];
    
    const today = new Date();
    
    deadlines.forEach(deadline => {
        const daysLeft = Math.ceil((deadline.date - today) / (1000 * 60 * 60 * 24));
        
        if (daysLeft <= 7 && daysLeft > 0) {
            createDeadlineAlert(deadline.task, daysLeft, deadline.priority);
        }
    });
}

function createDeadlineAlert(task, daysLeft, priority) {
    const alert = {
        task: task,
        daysLeft: daysLeft,
        priority: priority,
        timestamp: new Date().toISOString()
    };
    
    // Check if alert already exists
    const exists = submissionData.alerts.some(a => 
        a.task === task && a.daysLeft === daysLeft
    );
    
    if (!exists) {
        submissionData.alerts.push(alert);
        saveData();
    }
}

function updateDocumentCounts() {
    // Update metric cards
    const metrics = {
        total: submissionData.documents.length || 24,
        approved: submissionData.documents.filter(d => d.status === 'approved').length || 8,
        pending: submissionData.documents.filter(d => d.status === 'pending').length || 12,
        daysLeft: 45
    };
    
    const metricCards = document.querySelectorAll('.metric-value');
    if (metricCards.length >= 4) {
        metricCards[0].textContent = metrics.total;
        metricCards[1].textContent = metrics.approved;
        metricCards[2].textContent = metrics.pending;
        metricCards[3].textContent = metrics.daysLeft;
    }
}

// Document management
function filterDocuments() {
    const searchTerm = document.getElementById('documentSearch').value.toLowerCase();
    const rows = document.querySelectorAll('.document-status-table tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function updateDocumentTable() {
    // This would update the document table with new documents
    // For now, it's a placeholder for future implementation
    console.log('Document table updated');
}

function openDocumentUpload() {
    document.getElementById('uploadArea').scrollIntoView({ behavior: 'smooth' });
    triggerFileUpload();
}

// Notification system
function showNotification(message, type = 'info') {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade show alert-notification" role="alert">
            <strong>${getAlertIcon(type)}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', alertHtml);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        const alert = document.querySelector('.alert-notification');
        if (alert) {
            alert.remove();
        }
    }, 5000);
}

function getAlertIcon(type) {
    const icons = {
        'success': '<i class="bi bi-check-circle-fill"></i>',
        'danger': '<i class="bi bi-exclamation-triangle-fill"></i>',
        'warning': '<i class="bi bi-exclamation-circle-fill"></i>',
        'info': '<i class="bi bi-info-circle-fill"></i>'
    };
    return icons[type] || icons['info'];
}

// Notification engine
function startNotificationEngine() {
    // Check for deadlines every minute
    setInterval(() => {
        checkUpcomingDeadlines();
    }, 60000);
    
    // Initial check
    checkUpcomingDeadlines();
}

function checkUpcomingDeadlines() {
    const deadlines = [
        { date: '2024-02-01', task: 'פגישת תיאום עם משרד הבריאות', priority: 'high' },
        { date: '2024-02-15', task: 'הגשת בקשה רשמית', priority: 'medium' },
        { date: '2024-02-28', task: 'השלמת מסמכים נוספים', priority: 'low' }
    ];
    
    const today = new Date();
    
    deadlines.forEach(deadline => {
        const deadlineDate = new Date(deadline.date);
        const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysLeft === 7) {
            showNotification(`תזכורת: ${deadline.task} בעוד שבוע`, 'warning');
        } else if (daysLeft === 1) {
            showNotification(`דחוף: ${deadline.task} מחר!`, 'danger');
        } else if (daysLeft === 0) {
            showNotification(`היום: ${deadline.task}`, 'danger');
        }
    });
}

// Data persistence
function saveData() {
    localStorage.setItem('aidCosmeticsSubmissions', JSON.stringify(submissionData));
}

function loadSavedData() {
    const savedData = localStorage.getItem('aidCosmeticsSubmissions');
    if (savedData) {
        submissionData = JSON.parse(savedData);
        
        // Restore checklist state
        if (submissionData.checklist) {
            Object.entries(submissionData.checklist).forEach(([key, value]) => {
                const index = key.replace('item_', '');
                const checkbox = document.querySelectorAll('.checklist-item input[type="checkbox"]')[index];
                if (checkbox) {
                    checkbox.checked = value;
                    if (value) {
                        checkbox.parentElement.classList.add('completed');
                    }
                }
            });
            updateChecklistProgress();
        }
    }
    
    // Load draft if exists
    const draft = localStorage.getItem('aidCosmeticsDraft');
    if (draft) {
        const draftData = JSON.parse(draft);
        // Populate form with draft data
        const form = document.getElementById('mohSubmissionForm');
        if (form) {
            Object.entries(draftData).forEach(([key, value]) => {
                const input = form.elements[key];
                if (input) {
                    input.value = value;
                }
            });
        }
    }
}

// Simulate real-time updates
function simulateRealTimeUpdates() {
    // Simulate document status changes
    setInterval(() => {
        const randomUpdate = Math.random();
        if (randomUpdate < 0.1) { // 10% chance every interval
            const updates = [
                'מסמך חדש התקבל במערכת',
                'סטטוס מסמך עודכן',
                'התקבלה הערה מהרגולטור',
                'אישור התקבל למסמך'
            ];
            const randomMessage = updates[Math.floor(Math.random() * updates.length)];
            // Only show during business hours
            const hour = new Date().getHours();
            if (hour >= 8 && hour <= 17) {
                showNotification(randomMessage, 'info');
            }
        }
    }, 300000); // Every 5 minutes
}

// Initialize real-time updates
simulateRealTimeUpdates();

// Export functions for global use
window.triggerFileUpload = triggerFileUpload;
window.openDocumentUpload = openDocumentUpload;
window.updateChecklist = updateChecklist;
window.generateChecklistReport = generateChecklistReport;
window.loadTemplate = loadTemplate;
window.saveCorrespondence = saveCorrespondence;
window.exportCorrespondence = exportCorrespondence;
window.saveDraft = saveDraft;
window.downloadReceipt = downloadReceipt;
window.showNotification = showNotification;