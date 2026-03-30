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
    welcome_story: `<p>Érase una vez... una ribatejana que decidió mudarse a España hace 11 años. ¿El plan? Vivir una aventura. Lo que no sabía es que el destino tenía preparado algo mejor: encontrar el amor.</p>
                        <p>Y no con cualquier español... sino con un madrileño-gallego que, curiosamente, ¡es más portugués que muchos portugueses!</p>
                        <p>El 5 de septiembre de 2026, por fin nos daremos el “sí, quiero”.</p>
                        <p><strong>Bienvenidos a nuestra historia</strong></p>`,
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
    welcome_story: `<p>Era uma vez... (Waiting for your PT translation!)</p>`,
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((elem) => {
    const key = elem.getAttribute("data-key");
    if (key === "welcome_story") elem.innerHTML = translations[lang][key];
    else elem.textContent = translations[lang][key];
  });
}

// Set default text on load
setLanguage("es");

// Countdown
const weddingDate = new Date("Sep 5, 2026 11:30:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const d = weddingDate - now;
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d % 86400000) / 3600000);
  const mins = Math.floor((d % 3600000) / 60000);
  const secs = Math.floor((d % 60000) / 1000);
  document.getElementById(
    "countdown"
  ).innerHTML = `${days} : ${hours} : ${mins} : ${secs}`;
}, 1000);
