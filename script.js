const translations = {
    es: {
        nos_casamos: "¡NOS CASAMOS!",
        date_month: "5 SEPTIEMBRE,",
        en: "EN",
        label_days: "DÍAS",
        label_hours: "HORAS",
        label_mins: "MINUTOS",
        label_secs: "SEGUNDOS",
        welcome_title: "BIENVENIDOS",
        story_p1: "Érase una vez... una ribatejana que decidió mudarse a España hace años." 
    },
    pt: {
        nos_casamos: "VAMOS CASAR!",
        date_month: "5 SETEMBRO,",
        en: "EM",
        label_days: "DIAS",
        label_hours: "HORAS",
        label_mins: "MINUTOS",
        label_secs: "SEGUNDOS",
        welcome_title: "BEM-VINDOS",
        story_p1: "Era uma vez... uma ribatejana que decidiu mudar-se para Espanha..."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.textContent = translations[lang][key];
    });
}

const weddingDate = new Date("Sep 5, 2026 11:30:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Formats numbers with colon as seen in the image
  document.getElementById("countdown").innerHTML =
    days +
    " : " +
    (hours < 10 ? "0" + hours : hours) +
    " : " +
    (minutes < 10 ? "0" + minutes : minutes) +
    " : " +
    (seconds < 10 ? "0" + seconds : seconds);
}, 1000);
