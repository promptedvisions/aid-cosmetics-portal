/**
 * AID COSMETICS Portal - Authentication System
 * Simple client-side authentication for demonstration purposes
 */

// User credentials (In production, this would be server-side!)
const USERS = {
    // Admin users
    'admin': {
        password: 'Aid2024Admin!',
        role: 'admin',
        name: 'מנהל מערכת',
        permissions: ['view', 'edit', 'delete', 'approve', 'manage_users']
    },
    'igor': {
        password: 'Igor2024Boss!',
        role: 'admin',
        name: 'איגור - מנהל',
        permissions: ['view', 'edit', 'delete', 'approve', 'manage_users']
    },
    
    // Project managers
    'project.manager': {
        password: 'Manage2024!',
        role: 'manager',
        name: 'מנהל פרויקט',
        permissions: ['view', 'edit', 'submit', 'track']
    },
    'sarah.cohen': {
        password: 'Sarah2024PM!',
        role: 'manager',
        name: 'שרה כהן',
        permissions: ['view', 'edit', 'submit', 'track']
    },
    
    // Inspectors
    'moh.inspector': {
        password: 'Inspect2024!',
        role: 'inspector',
        name: 'מפקח משרד הבריאות',
        permissions: ['view', 'comment', 'approve', 'reject']
    },
    'gmp.consultant': {
        password: 'GMP2024Pro!',
        role: 'consultant',
        name: 'יועץ GMP',
        permissions: ['view', 'comment', 'suggest']
    },
    
    // Viewers
    'viewer': {
        password: 'View2024!',
        role: 'viewer',
        name: 'צופה',
        permissions: ['view']
    },
    'stakeholder': {
        password: 'Stake2024!',
        role: 'viewer',
        name: 'בעל עניין',
        permissions: ['view']
    },
    
    // Test users
    'demo': {
        password: 'demo123',
        role: 'viewer',
        name: 'משתמש הדגמה',
        permissions: ['view']
    },
    'test': {
        password: 'test123',
        role: 'manager',
        name: 'משתמש בדיקה',
        permissions: ['view', 'edit']
    }
};

// Session management
class AuthManager {
    constructor() {
        this.SESSION_KEY = 'aid_cosmetics_session';
        this.SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours
    }

    // Hash password (simple implementation, use bcrypt in production!)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }

    // Login function
    login(username, password) {
        const user = USERS[username.toLowerCase()];
        
        if (!user) {
            return { success: false, message: 'שם משתמש לא קיים' };
        }
        
        if (user.password !== password) {
            return { success: false, message: 'סיסמה שגויה' };
        }
        
        // Create session
        const session = {
            username: username.toLowerCase(),
            name: user.name,
            role: user.role,
            permissions: user.permissions,
            loginTime: Date.now(),
            expiresAt: Date.now() + this.SESSION_DURATION
        };
        
        // Store session
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
        
        // Store "remember me" if checked
        if (document.getElementById('rememberMe')?.checked) {
            localStorage.setItem('aid_cosmetics_remember', username);
        }
        
        return { success: true, session };
    }

    // Logout function
    logout() {
        localStorage.removeItem(this.SESSION_KEY);
        window.location.href = 'login.html';
    }

    // Check if user is logged in
    isLoggedIn() {
        const session = this.getSession();
        if (!session) return false;
        
        // Check if session expired
        if (Date.now() > session.expiresAt) {
            this.logout();
            return false;
        }
        
        return true;
    }

    // Get current session
    getSession() {
        const sessionStr = localStorage.getItem(this.SESSION_KEY);
        if (!sessionStr) return null;
        
        try {
            return JSON.parse(sessionStr);
        } catch (e) {
            return null;
        }
    }

    // Check permission
    hasPermission(permission) {
        const session = this.getSession();
        if (!session) return false;
        return session.permissions.includes(permission);
    }

    // Extend session
    extendSession() {
        const session = this.getSession();
        if (session) {
            session.expiresAt = Date.now() + this.SESSION_DURATION;
            localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
        }
    }
}

// Initialize auth manager
const authManager = new AuthManager();

// Login form handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const spinner = document.querySelector('.spinner-border');
        const btnText = document.getElementById('btnText');
        const alertMessage = document.getElementById('alertMessage');
        const successMessage = document.getElementById('successMessage');
        
        // Show loading
        spinner.classList.add('show');
        btnText.textContent = 'מתחבר...';
        alertMessage.classList.remove('show');
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Attempt login
        const result = authManager.login(username, password);
        
        spinner.classList.remove('show');
        
        if (result.success) {
            // Show success message
            successMessage.classList.add('show');
            btnText.textContent = 'התחברת בהצלחה!';
            
            // Redirect after short delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            // Show error message
            alertMessage.classList.add('show');
            document.getElementById('alertText').textContent = result.message;
            btnText.textContent = 'כניסה למערכת';
            
            // Shake animation
            document.querySelector('.login-card').style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.querySelector('.login-card').style.animation = '';
            }, 500);
        }
    });
}

// Check authentication on protected pages
function checkAuth() {
    if (!authManager.isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    
    // Extend session on activity
    authManager.extendSession();
    
    // Update UI with user info
    updateUserInterface();
    
    return true;
}

// Update UI based on user session
function updateUserInterface() {
    const session = authManager.getSession();
    if (!session) return;
    
    // Add user info to navbar if exists
    const userInfo = document.getElementById('userInfo');
    if (userInfo) {
        userInfo.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="bi bi-person-circle me-2"></i>
                <span>${session.name}</span>
                <span class="badge bg-secondary ms-2">${session.role}</span>
                <button class="btn btn-sm btn-outline-danger ms-3" onclick="authManager.logout()">
                    <i class="bi bi-box-arrow-right"></i> יציאה
                </button>
            </div>
        `;
    }
    
    // Show/hide elements based on permissions
    document.querySelectorAll('[data-permission]').forEach(element => {
        const requiredPermission = element.dataset.permission;
        if (!authManager.hasPermission(requiredPermission)) {
            element.style.display = 'none';
        }
    });
    
    // Add role-based classes
    document.body.classList.add(`role-${session.role}`);
}

// Auto-fill remembered username
if (document.getElementById('username')) {
    const remembered = localStorage.getItem('aid_cosmetics_remember');
    if (remembered) {
        document.getElementById('username').value = remembered;
        document.getElementById('rememberMe').checked = true;
    }
}

// Protect pages - add this to top of protected pages
if (window.location.pathname !== '/login.html' && !window.location.pathname.endsWith('login.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        // List of pages that require authentication
        const protectedPages = ['index.html', 'submission-tracker.html'];
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (protectedPages.includes(currentPage)) {
            checkAuth();
        }
    });
}

// Activity tracker - extend session on user activity
let activityTimer;
document.addEventListener('click', () => {
    clearTimeout(activityTimer);
    activityTimer = setTimeout(() => {
        if (authManager.isLoggedIn()) {
            authManager.extendSession();
        }
    }, 1000);
});

// Session expiry warning
setInterval(() => {
    const session = authManager.getSession();
    if (session) {
        const timeLeft = session.expiresAt - Date.now();
        
        // Warn 5 minutes before expiry
        if (timeLeft < 5 * 60 * 1000 && timeLeft > 4 * 60 * 1000) {
            if (!document.getElementById('sessionWarning')) {
                const warning = document.createElement('div');
                warning.id = 'sessionWarning';
                warning.className = 'alert alert-warning position-fixed top-0 start-50 translate-middle-x mt-3';
                warning.style.zIndex = '9999';
                warning.innerHTML = `
                    <i class="bi bi-exclamation-triangle"></i>
                    ההתחברות שלך תפוג בעוד 5 דקות
                    <button class="btn btn-sm btn-primary ms-2" onclick="authManager.extendSession(); this.parentElement.remove();">
                        הארך התחברות
                    </button>
                `;
                document.body.appendChild(warning);
            }
        }
    }
}, 60000); // Check every minute

// CSS shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Export for use in other scripts
window.authManager = authManager;