// Open login modal when navbar login clicked
const loginBtn = document.querySelector('.navlink[href=""]'); // your Login link
const loginSection = document.getElementById('login-section');
const loginClose = document.getElementById('login-close');

loginBtn.addEventListener('click', function(e){
  e.preventDefault();
  loginSection.style.display = 'flex';
});

loginClose.addEventListener('click', function(){
  loginSection.style.display = 'none';
});

// Hardcoded credentials (for demo)

  const credentials = {
  sports: {
    president: { id: 'sport-club-president', password: 'pres@2025' },
    generalSecretary: { id: 'spclub-GS', password: 'gs@2025' },
    vicePresident: { id: 'SPclub-VP', password: 'vp@2025' },
    financialSecretary: { id: 'SPclub-FS', password: 'fs@2025' }
  },
  culture: {
    president: { id: 'culture-club-president', password: 'pres@2025' },
    generalSecretary: { id: 'culture-GS', password: 'gs@2025' },
    vicePresident: { id: 'culture-VP', password: 'vp@2025' },
    financialSecretary: { id: 'culture-FS', password: 'fs@2025' }
  }
};



const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  
  const enteredId = document.getElementById('club-id').value.trim();
  const enteredPass = document.getElementById('club-pass').value.trim();
  const selectedClub = document.getElementById('club-type').value;

  if(!selectedClub) {
    alert('Please select a club');
    return;
  }

  const clubCred = credentials[selectedClub];
  
  if(clubCred && clubCred.id === enteredId && clubCred.password === enteredPass){
    alert('Login successful! Redirecting...');
    // Redirect to the club page (replace with your actual page)
    if(selectedClub === 'sports') window.location.href = 'sports-club.html';
    else if(selectedClub === 'culture') window.location.href = 'culture-club.html';
  } else {
    alert('Invalid ID or Password!');
  }
});
