
//    LOGIN SYSTEM FOR CLUB PORTAL
  
//  OPEN & CLOSE LOGIN MODAL

// Get modal and close button
const loginSection = document.getElementById('login-section');
const loginClose = document.getElementById('login-close');

// Find the login button in navbar by its text (safe for different pages)
const loginBtn = Array.from(document.querySelectorAll('.navlink'))
  .find(link => link.textContent.trim().toLowerCase().includes('login'));

// When login button clicked → show modal
if (loginBtn) {
  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    loginSection.style.display = 'flex';
  });
}

// When close (×) button clicked → hide modal
if (loginClose) {
  loginClose.addEventListener('click', function () {
    loginSection.style.display = 'none';
  });
}



//  CLUB LOGIN CREDENTIALS
// (Demo only — in real projects, use a database or backend for security)

const credentials = {
  sports: {
    president: { id: '111123007', password: 'raihan1234' },
    generalSecretary: { id: 'spclub-GS', password: 'gs@2025' },
    vicePresident: { id: 'SPclub-VP', password: 'vp@2025' },
    financialSecretary: { id: 'SPclub-FS', password: 'fs@2025' }
  },
  culture: {
    president: { id: '111123007', password: 'raihan1234' },
    generalSecretary: { id: 'culture-GS', password: 'gs@2025' },
    vicePresident: { id: 'culture-VP', password: 'vp@2025' },
    financialSecretary: { id: 'culture-FS', password: 'fs@2025' }
  }
};



//  LOGIN FORM VALIDATION


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const enteredId = document.getElementById('club-id').value.trim();
  const enteredPass = document.getElementById('club-pass').value.trim();
  const selectedClub = document.getElementById('club-type').value;

  // Check if club selected
  if (!selectedClub) {
    alert('Please select a club');
    return;
  }

  // Get that club’s credentials
  const clubCred = credentials[selectedClub];

  // Check all roles under the club (President, GS, VP, FS)
  const validRole = Object.entries(clubCred).find(
    ([role, user]) => user.id === enteredId && user.password === enteredPass
  );

  if (validRole) {
    // Login successful
    const [roleName] = validRole;
    alert(`Login successful! Welcome, ${roleName.toUpperCase()} 🎉`);

    // Redirect to correct club page
    if (selectedClub === 'sports') {
      window.location.href = 'sports-club.html';
    } else if (selectedClub === 'culture') {
      window.location.href = 'culture-club.html';
    }
  } else {
    // Wrong ID or password
    alert('❌ Invalid ID or Password!');
  }
});
