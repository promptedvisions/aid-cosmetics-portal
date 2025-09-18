// AID Cosmetics Document Database
// Generated from rebranded documentation center

const documentsDatabase = {
    categories: {
        'hr': {
            name: 'משאבי אנוש',
            count: 65,
            documents: [
                { id: 'HR-001', title: 'נוהל קליטת עובד חדש', version: '2.1', status: 'approved', date: '2024-01-15' },
                { id: 'HR-002', title: 'נוהל הדרכות בטיחות', version: '1.3', status: 'approved', date: '2024-01-20' },
                { id: 'HR-003', title: 'טופס הערכת עובד', version: '1.0', status: 'approved', date: '2024-02-01' },
                { id: 'HR-004', title: 'נוהל חופשות ומחלה', version: '2.0', status: 'approved', date: '2024-02-10' },
                { id: 'HR-005', title: 'מדיניות קוד לבוש במפעל', version: '1.1', status: 'approved', date: '2024-02-15' }
            ]
        },
        'qa': {
            name: 'הבטחת איכות',
            count: 120,
            documents: [
                { id: 'QA-001', title: 'נוהל בקרת מסמכים', version: '3.0', status: 'approved', date: '2024-01-10' },
                { id: 'QA-002', title: 'נוהל ניהול שינויים', version: '2.5', status: 'approved', date: '2024-01-12' },
                { id: 'QA-003', title: 'נוהל טיפול בסטיות', version: '2.2', status: 'approved', date: '2024-01-15' },
                { id: 'QA-004', title: 'נוהל CAPA', version: '2.0', status: 'approved', date: '2024-01-18' },
                { id: 'QA-005', title: 'נוהל ביקורות פנימיות', version: '2.3', status: 'approved', date: '2024-01-20' },
                { id: 'QA-006', title: 'נוהל אימות ותיקוף', version: '1.8', status: 'approved', date: '2024-01-25' },
                { id: 'QA-007', title: 'נוהל שחרור אצוות', version: '2.1', status: 'approved', date: '2024-02-01' },
                { id: 'QA-008', title: 'נוהל ניהול ספקים', version: '2.0', status: 'approved', date: '2024-02-05' }
            ]
        },
        'qc': {
            name: 'בקרת איכות',
            count: 85,
            documents: [
                { id: 'QC-001', title: 'נוהל דיגום חומרי גלם', version: '2.0', status: 'approved', date: '2024-01-08' },
                { id: 'QC-002', title: 'נוהל בדיקות מיקרוביולוגיות', version: '2.3', status: 'approved', date: '2024-01-10' },
                { id: 'QC-003', title: 'נוהל כיול ציוד מדידה', version: '1.9', status: 'approved', date: '2024-01-15' },
                { id: 'QC-004', title: 'נוהל בדיקות יציבות', version: '2.1', status: 'approved', date: '2024-01-20' },
                { id: 'QC-005', title: 'טופס בדיקת מוצר מוגמר', version: '1.5', status: 'approved', date: '2024-01-25' },
                { id: 'QC-006', title: 'נוהל בדיקות pH', version: '1.2', status: 'approved', date: '2024-02-01' }
            ]
        },
        'production': {
            name: 'ייצור',
            count: 95,
            documents: [
                { id: 'PROD-001', title: 'נוהל הכנת קו ייצור', version: '2.5', status: 'approved', date: '2024-01-05' },
                { id: 'PROD-002', title: 'הוראת עבודה - ערבול קרמים', version: '3.0', status: 'approved', date: '2024-01-08' },
                { id: 'PROD-003', title: 'נוהל ניקוי ציוד ייצור', version: '2.2', status: 'approved', date: '2024-01-10' },
                { id: 'PROD-004', title: 'הוראת עבודה - מילוי שפופרות', version: '2.0', status: 'approved', date: '2024-01-15' },
                { id: 'PROD-005', title: 'נוהל תחזוקה מונעת', version: '2.3', status: 'approved', date: '2024-01-20' },
                { id: 'PROD-006', title: 'פורמולה - קרם לחות יום', version: '4.1', status: 'approved', date: '2024-01-25' },
                { id: 'PROD-007', title: 'פורמולה - סרום ויטמין C', version: '3.2', status: 'approved', date: '2024-02-01' }
            ]
        },
        'specifications': {
            name: 'מפרטי מוצרים',
            count: 300,
            documents: [
                { id: 'SPEC-001', title: 'מפרט קרם פנים יום', version: '3.0', status: 'approved', date: '2024-01-01' },
                { id: 'SPEC-002', title: 'מפרט קרם פנים לילה', version: '3.1', status: 'approved', date: '2024-01-02' },
                { id: 'SPEC-003', title: 'מפרט סרום לחות', version: '2.8', status: 'approved', date: '2024-01-03' },
                { id: 'SPEC-004', title: 'מפרט קרם עיניים', version: '2.5', status: 'approved', date: '2024-01-04' },
                { id: 'SPEC-005', title: 'מפרט מסכת פנים', version: '2.0', status: 'approved', date: '2024-01-05' },
                { id: 'SPEC-006', title: 'מפרט שמפו טיפולי', version: '3.2', status: 'approved', date: '2024-01-06' },
                { id: 'SPEC-007', title: 'מפרט מרכך שיער', version: '2.9', status: 'approved', date: '2024-01-07' },
                { id: 'SPEC-008', title: 'מפרט קרם גוף', version: '2.7', status: 'approved', date: '2024-01-08' },
                { id: 'SPEC-009', title: 'מפרט תחליב גוף', version: '2.3', status: 'approved', date: '2024-01-09' },
                { id: 'SPEC-010', title: 'מפרט דאודורנט', version: '1.9', status: 'approved', date: '2024-01-10' }
            ]
        },
        'raw-materials': {
            name: 'חומרי גלם',
            count: 150,
            documents: [
                { id: 'RM-001', title: 'מפרט חומצה היאלורונית', version: '2.0', status: 'approved', date: '2024-01-01' },
                { id: 'RM-002', title: 'מפרט ויטמין E', version: '1.8', status: 'approved', date: '2024-01-02' },
                { id: 'RM-003', title: 'מפרט שמן ארגן', version: '2.1', status: 'approved', date: '2024-01-03' },
                { id: 'RM-004', title: 'מפרט גליצרין', version: '1.9', status: 'approved', date: '2024-01-04' },
                { id: 'RM-005', title: 'מפרט שמן קוקוס', version: '2.0', status: 'approved', date: '2024-01-05' },
                { id: 'RM-006', title: 'מפרט מלח ים המלח', version: '3.0', status: 'approved', date: '2024-01-06' }
            ]
        },
        'certificates': {
            name: 'תעודות ורישיונות',
            count: 10,
            documents: [
                { id: 'CERT-001', title: 'רישיון ייצור תמרוקים', version: '1.0', status: 'approved', date: '2024-01-01' },
                { id: 'CERT-002', title: 'תעודת ISO 22716', version: '1.0', status: 'approved', date: '2024-01-01' },
                { id: 'CERT-003', title: 'תעודת GMP', version: '1.0', status: 'approved', date: '2024-01-01' },
                { id: 'CERT-004', title: 'היתר רעלים', version: '1.0', status: 'approved', date: '2024-01-01' }
            ]
        },
        'audits': {
            name: 'מבדקים וביקורות',
            count: 45,
            documents: [
                { id: 'AUDIT-001', title: 'דוח ביקורת פנימית Q1 2024', version: '1.0', status: 'approved', date: '2024-03-15' },
                { id: 'AUDIT-002', title: 'דוח ביקורת ספק - חומרי גלם', version: '1.0', status: 'approved', date: '2024-02-20' },
                { id: 'AUDIT-003', title: 'דוח ביקורת משרד הבריאות', version: '1.0', status: 'approved', date: '2024-01-30' }
            ]
        }
    },

    getAllDocuments: function() {
        let allDocs = [];
        for (const category in this.categories) {
            const cat = this.categories[category];
            cat.documents.forEach(doc => {
                allDocs.push({
                    ...doc,
                    category: category,
                    categoryName: cat.name
                });
            });
        }
        return allDocs;
    },

    searchDocuments: function(searchTerm) {
        const term = searchTerm.toLowerCase();
        return this.getAllDocuments().filter(doc =>
            doc.title.toLowerCase().includes(term) ||
            doc.id.toLowerCase().includes(term) ||
            doc.categoryName.toLowerCase().includes(term)
        );
    },

    filterDocuments: function(filters) {
        let docs = this.getAllDocuments();

        if (filters.category && filters.category !== 'all') {
            docs = docs.filter(doc => doc.category === filters.category);
        }

        if (filters.status) {
            docs = docs.filter(doc => doc.status === filters.status);
        }

        if (filters.search) {
            const term = filters.search.toLowerCase();
            docs = docs.filter(doc =>
                doc.title.toLowerCase().includes(term) ||
                doc.id.toLowerCase().includes(term)
            );
        }

        return docs;
    },

    getDocumentById: function(id) {
        return this.getAllDocuments().find(doc => doc.id === id);
    },

    getCategoryStats: function() {
        const stats = {};
        for (const category in this.categories) {
            stats[category] = {
                name: this.categories[category].name,
                count: this.categories[category].count,
                actualCount: this.categories[category].documents.length
            };
        }
        return stats;
    }
};

// Export for use in documents.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = documentsDatabase;
}