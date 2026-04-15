const translations = {
  es: {
    menu_home: "Inicio",
    menu_welcome: "Bienvenidos",
    menu_schedule: "El Gran Dia",
    menu_church: "La Iglesia",
    menu_finca: "La Finca",
    menu_bus: "Autobuses",
    menu_rsvp: "Confirmacion De Asistencia",
    menu_travel: "Planifica Tu Viaje",
    menu_hotels: "Hoteles y Restaurantes",
    menu_tourism: "Puntos De Interés Turisticos",
    menu_faqs: "FAQS",
    menu_contact: "Contactos",
    nos_casamos: "¡NOS CASAMOS!",
    date_month: "5 SEPTIEMBRE,",
    en: "EN",
    label_days: "DÍAS",
    label_hours: "HORAS",
    label_mins: "MINUTOS",
    label_secs: "SEGUNDOS",
    welcome_title: "BIENVENIDOS",
    welcome_story: `<p>Érase una vez... una ribatejana que decidió mudarse a<br>
            España hace 11 años. ¿El plan? Vivir una aventura. Lo que no<br>
            sabía es que el destino tenía preparado algo mejor:<br>
            encontrar el amor.</p>
            
            <p>Y no con cualquier español... sino con un madrileño-gallego<br>
            que, curiosamente, ¡es más portugués que muchos<br>
            portugueses! 🇵🇹</p>
            
            <p>Entre viajes, risas, momentos inesperados y mil historias<br>
            que contar, fuimos escribiendo nuestra propia aventura...<br>
            hasta llegar al capítulo más importante.</p>
            
            <p>El 5 de septiembre de 2026, por fin nos daremos el “sí,<br>
            quiero”. Y por supuesto, no podía ser sin vosotros, las<br>
            personas que hacen todo esto aún más especial.</p>
            
            <p class="welcome-footer-text">Bienvenidos a nuestra historia ❤️</p>`,
    schedule_title: "EL GRAN DIA",
    schedule_intro: `Queremos compartir con vosotros cada<br>
            momento especial de este día tan importante.<br>
            Aquí tenéis el cronograma para que todos<br>
            podáis disfrutar de la celebración sin<br>
            preocupaciones`,
    timeline_title: "HORARIO",
    event_1: "CEREMONIA RELIGIOSA",
    event_2: "SALIDA HACIA LA FINCA",
    event_3: "COCTEL",
    event_4: "COMIDA",
    event_5: "CENA",
    event_6: "FIESTA / DJ",
    church_title: "UBICACION DE LA IGLESIA",
    church_info: `LA CEREMONIA TENDRÁ LUGAR EN<br>
      LA IGLESIA DE S. PEDRO DE ALCANENA`,
    finca_title: "UBICACION DE LA FINCA",
    finca_info: `DESPUÉS DE LA CEREMONIA, NOS DIRIGIREMOS A LA<br>FINCA DONDE CONTINUARÁ LA CELEBRACIÓN, CON<br>BANQUETE, TARTA Y FIESTA.`,
    bus_title: "AUTOBUSES",
    bus_intro:
      "PARA FACILITAR EL DESPLAZAMIENTO DE TODOS, <br>PONDREMOS A DISPOSICIÓN AUTOBUSES EN LOS <br>SIGUIENTES HORARIOS:",
    bus_route_1: "DE FÁTIMA A LA IGLESIA:",
    bus_point: "HORA Y PUNTO DE ENCUENTRO:",
    bus_route_2: "DE LA IGLESIA A LA FINCA:",
    bus_departure: "SALIDA PREVISTA: 13:H00M",
    bus_route_3: "DE LA FINCA A ALCANENA (CON PARADA EN FÁTIMA):",
    bus_return: "HORA DE REGRESO: 00H00M Y 03H00M",
    bus_path: "RECORRIDO: FINCA → FÁTIMA → ALCANENA",
    bus_note:
      "OS PEDIMOS POR FAVOR, QUE INDIQUÉIS EN EL FORMULARIO, SI VAIS A <br>UTILIZAR EL AUTOBÚS Y, SI VAIS ACOMPAÑADOS, HACED LO MISMO CON <br>LAS PREFERENCIAS DE VUESTROS ACOMPAÑANTES.",
    rsvp_title: "CONFIRMACION DE ASISTENCIA",
    rsvp_intro:
      "VUESTRA PRESENCIA ES LO QUE HARÁ DE ESTE DÍA <br>ALGO REALMENTE ESPECIAL PARA NOSOTROS. OS <br>PEDIMOS POR FAVOR QUE CONFIRMÉIS VUESTRA <br>ASISTENCIA A TRAVÉS DEL FORMULARIO DISPONIBLE<br> AL FINAL DE LA PAGINA.",
    rsvp_button: "RELLENAR FORMULARIO",
    dietary_title: "RESTRICCIONES ALIMENTARIAS",
    dietary_info: `QUEREMOS QUE TODOS DISFRUTÉIS PLENAMENTE DEL DÍA. SI 
      <br>ALGUNO DE VOSOTROS TIENE RESTRICCIONES ALIMENTARIAS
      <br>(ALERGIAS, INTOLERANCIAS, DIETAS ESPECÍFICAS O REQUISITOS
      <br>RELIGIOSOS), OS AGRADECEMOS QUE NOS LO INDIQUÉIS EN EL FORMULARIO.`,
    dietary_note: `BASTA UNA RESPUESTA POR FAMILIA; POR FAVOR, RELLENAD LOS
      <br>DATOS DE CADA MIEMBRO.`,
    dietary_deadline:
      "AGRADECEMOS QUE RELLENÉIS EL FORMULARIO ANTES DEL DÍA 30/06/2026.",
    travel_title: "PLANEA TU VIAJE",
    travel_intro: `PARA QUE PODÁIS VIVIR LA AUTÉNTICA EXPERIENCIA
      <br>PORTUGUESA DEL RIBATEJO, AQUÍ OS DEJAMOS
      <br>ALGUNAS SUGERENCIAS DE HOTELES, RESTAURANTES,
      <br>CAFETERÍAS Y PUNTOS TURÍSTICOS DE INTERÉS. AL
      <br>FINAL DE LA PAGINA, ENCONTRARÉIS UN ENLACE Y UN
      <br>QR CON TODO DISPONIBLE.`,
    hotels_title: "HOTELES",
    hotels_desc_1: `PARA QUIENES VIENEN DE FUERA O PREFIEREN ALOJARSE CERCA DE LOS
      <br>LUGARES DEL EVENTO, DEJAMOS ALGUNAS SUGERENCIAS DE HOTELES EN
      <br>LA ZONA DE FÁTIMA Y ALCANENA.`,
    hotels_desc_2: `EN FÁTIMA, TENEMOS UN CÓDIGO DE DESCUENTO DE 10% EN EL GRUPO DE
      <br>HOTELES DE “UNITED HOTELS” CONSTITUIDOS POR 6 HOTELES, EN LAS
      <br>NOCHES DEL 4/09 AL 6/09: <strong>ANAMJOSEM</strong>`,
    link_text_hotel: "SOLO RESERVAS A TRAVÉS DE LA WEB:",
    restaurants_title: "RESTAURANTES",
    restaurants_desc: `PARA FACILITAR LA PLANIFICACIÓN DE LOS DÍAS PREVIOS A LA BODA, HEMOS
      <br>REUNIDO UNA LISTA DE RESTAURANTES RECOMENDADOS EN LA ZONA DE
      <br>ALCANENA Y ALREDEDORES. ESTA SELECCIÓN INCLUYE DESDE TABERNAS
      <br>TRADICIONALES HASTA RESTAURANTES CON ESTRELLA MICHELIN.`,
    tourism_title: "PUNTOS TURÍSTICOS DE INTERÉS",
    tourism_desc: `SI ESTÁIS PENSANDO EN PASAR UNOS DÍAS POR LA HERMOSA ZONA DEL
      <br>RIBATEJO Y ALREDEDORES, OS DEJAMOS UNA SERIE DE SUGERENCIAS DE
      <br>LUGARES PARA VISITAR O SIMPLEMENTE PASEAR POR EL CAMPO O DARSE
      <br>UN BAÑO EN LA PLAYA.`,
    links_intro: `AQUÍ OS DEJAMOS EL ENLACE ASÍ COMO UN CÓDIGO QR QUE OS LLEVARÁ DIRECTAMENTE
      <br>A UN GRUPO QUE HEMOS CREADO EN GOOGLE MAPS CON LAS RECOMENDACIONES
      <br>ORGANIZADAS POR CATEGORÍAS.`,
    maps_box_text:
      "Encuentra negocios locales, mira mapas y obtén direcciones de conducción en Google Maps.",
    links_help: `SI TENÉIS DUDAS O QUERÉIS SABER MÁS, OS DEJAMOS EL LINK PARA LA PÁGINA
      <br>WEB DE VISIT PORTUGAL:`,
    faqs_title: "FAQS",
    faqs_content: `
            <strong>¿LA FINCA TIENE ACCESIBILIDAD PARA PERSONAS CON MOVILIDAD REDUCIDA?</strong>
            SÍ, EXISTEN RAMPAS EN TODAS LAS INSTALACIONES; DE TODOS MODOS, SI TENÉIS UNA NECESIDAD ESPECÍFICA, POR FAVOR COMUNICÁRNOSLO.
            <br>
            <strong>¿PUEDO CAMBIARME DE MESA?</strong>
            LOS LUGARES ESTÁN ASIGNADOS.
            <br>
            <strong>¿HAY SITIO PARA APARCAR EN LA FINCA?</strong>
            SÍ, JUNTO A LA FINCA HAY UN PARKING PRIVADO GRATUITO.
            <br>
            <strong>¿CUÁL ES EL CÓDIGO DE VESTIMENTA?</strong>
            NOS ENCANTARÁ VEROS CON VUESTROS MEJORES LOOKS: EL CÓDIGO DE VESTIMENTA SERÁ ELEGANTE FORMAL Y DE FIESTA.
            <br>
            <strong>¿QUÉ CLIMA DEBO ESPERAR?</strong>
            EN ALCANENA, EL CLIMA A PRINCIPIOS DE SEPTIEMBRE TIENDE A SER CALUROSO, SECO Y DESPEJADO. EN RESUMEN, UN DÍA DE VERANO AVANZADO CON MAÑANAS AGRADABLES, TARDES CALUROSAS Y NOCHES FRESCAS.
            <br>
            <strong>¿CÓMO PUEDO OBSEQUIAR A LOS NOVIOS?</strong>
            YA TENEMOS CASA, YA TENEMOS AMOR, SOLO NOS FALTA LA LUNA DE MIEL. SI QUERÉIS HACERLA INOLVIDABLE PODÉIS CONTRIBUIR CON UN DETALLE.
        `,
    contact_title: "CONTACTOS",
    contact_intro:
      "SI TENÉIS DUDAS O QUERÉIS CONTACTARNOS POR CUALQUIER OTRO MOTIVO, POR FAVOR NO DUDÉIS EN LLAMARNOS O MANDAR UN MENSAJE:",
    driving_title: "SI VIENES EN COCHE",
    driving_intro: "EN PORTUGAL EXISTEN DOS TIPOS DE PEAJES:",
    toll_autopistas: `EN <strong>AUTOPISTAS</strong> - CON BARRERA, QUE SE PUEDEN PAGAR EN LAS CABINAS O BIEN PASANDO POR VÍA VERDE CON TU VIA- T INSTALADO EN EL COCHE.`,
    toll_autovia:
      "EN <strong>AUTOVÍA</strong> - LOS PEAJES ELECTRÓNICOS PARA LOS CUALES TAMBIÉN TE VALDRIA EL VIA-T O LAS SIGUIENTES OPCIONES:",
    toll_opt_1_title: "EASYTOLL (LA OPCIÓN MÁS SENCILLA PARA VIAJES CORTOS)",
    toll_opt_1_desc:
      "REGISTRAS TU MATRÍCULA + TARJETA EN MÁQUINAS SITUADAS EN LA FRONTERA. <br>FUNCIONA DURANTE 30 DÍAS.",
    toll_opt_2_title: "TOLLCARD",
    toll_opt_2_desc:
      "TARJETAS PREPAGO DE 5, 10, 20 O 40 €. <br>SE ACTIVAN ONLINE CON TU MATRÍCULA. <br>VALEN DURANTE 1 AÑO.",
    toll_opt_3_title: "TOLLSERVICE",
    toll_opt_3_desc:
      "PASES DE 3 DÍAS O RUTAS CONCRETAS (POR EJEMPLO, DESDE AEROPUERTOS). <br>ÚTIL SI VAS A HACER TRAYECTOS MUY ESPECÍFICOS.",

    purchase_title: "DONDE COMPRAR Y MÁS INFORMACIÓN",
    purchase_intro_1: "PARA EL EASYTOLL O TOLLCARD ENTRÁIS EN LA WEB:",
    purchase_intro_2:
      "DONDE TENÉIS TODA LA INFORMACIÓN PARA COMPRAR ONLINE, SABER DONDE PODER COMPRAR Y QUE CARRETERAS LO NECESITAN.",
    purchase_intro_3: "AQUÍ TENÉIS MÁS INFORMACIÓN TAMBIÉN:",
  },
  pt: {
    menu_home: "Início",
    menu_welcome: "Bem-vindos",
    menu_schedule: "O Grande Dia",
    menu_church: "A Igreja",
    menu_finca: "A Quinta",
    menu_bus: "Autocarros",
    menu_rsvp: "Confirmação De Presença",
    menu_travel: "Planeia a Tua Viagem",
    menu_hotels: "Hotéis e Restaurantes",
    menu_tourism: "Pontos Turísticos de Interesse",
    menu_faqs: "FAQS",
    menu_contact: "Contactos",
    nos_casamos: "VAMOS CASAR!",
    date_month: "5 SETEMBRO,",
    en: "EM",
    label_days: "DIAS",
    label_hours: "HORAS",
    label_mins: "MINUTOS",
    label_secs: "SEGUNDOS",
    welcome_title: "BEM-VINDOS",
    welcome_story: `<p>Era uma vez… uma ribatejana que decidiu mudar-se para<br>
            Espanha há 11 anos. O plano? Viver uma aventura. O que ela<br>
            não sabia era que o destino já tinha outro plano preparado:<br>
            encontrar o amor.</p>

            <p>E não foi com um espanhol qualquer… foi com um<br>
            madrilenho-galego que, surpreendentemente, é mais<br>
            português do que muitos portugueses!</p>

            Entre viagens, gargalhadas, momentos improváveis e muitas<br>
            histórias para contar, fomos escrevendo a nossa própria<br>
            aventura… até chegarmos ao capítulo mais importante.</p>

            <p>No dia 5 de setembro de 2026, vamos finalmente dar o nó, e<br>
            claro, não podia ser sem vocês, as pessoas que fazem tudo<br>
            ter ainda mais sentido.</p>

            <p>Bem-vindos à nossa história ❤️</p>`,
    schedule_title: "O GRANDE DIA",
    schedule_intro: `Queremos partilhar convosco cada momento<br>
            especial deste dia tão importante. Aqui está o<br>
            programa para que todos possam desfrutar da<br>
            celebração sem preocupações`,
    timeline_title: "HORÁRIO",
    event_1: "CERIMÓNIA RELIGIOSA",
    event_2: "PARTIDA PARA A QUINTA",
    event_3: "COCKTAIL",
    event_4: "ALMOÇO",
    event_5: "COPO D'ÁGUA",
    event_6: "FESTA / DJ",
    church_title: "LOCALIZAÇÃO DA IGREJA",
    church_info: `A CERIMÓNIA TERÁ LUGAR NA<br>
          IGREJA DE S.PEDRO DE ALCANENA`,
    finca_title: "LOCALIZAÇÃO DA QUINTA",
    finca_info: `DEPOIS DA CERIMÓNIA, IREMOS PARA A QUINTA ONDE A<br>CELEBRAÇÃO CONTINUARÁ, COM UM ALMOÇO, BOLO E <br>FESTA.`,
    bus_title: "AUTOCARROS",
    bus_intro:
      "PARA FACILITAR A TRANSPORTE DE TODOS,<br> DISPONIBILIZAREMOS AUTOCARROS NOS SEGUINTES <br>HORÁRIOS:",
    bus_route_1: "DE FÁTIMA ATÉ À IGREJA:",
    bus_point: "HORA E PONTO DE ENCONTRO:",
    bus_route_2: "DA IGREJA PARA A QUINTA:",
    bus_departure: "PARTIDA PREVISTA: 13:H00M",
    bus_route_3: "DA QUINTA PARA ALCANENA (COM PARAGEM EM FÁTIMA):",
    bus_return: "HORA DE REGRESSO: 00H00M E 03H00M",
    bus_path: "PERCURSO: QUINTA → FÁTIMA → ALCANENA",
    bus_note:
      "PEDIMOS-VOS QUE INDIQUEM NO FORMULÁRIO, SE VÃO UTILIZAR O <br>AUTOCARRO E, CASO ESTEJAM ACOMPANHADOS, FAÇAM O MESMO EM <br>RELAÇÃO ÀS PREFERÊNCIAS DOS VOSSOS ACOMPANHANTES.",
    rsvp_title: "CONFIRMAÇÃO DE PRESENÇA",
    rsvp_intro:
      "A VOSSA PRESENÇA É O QUE FARÁ DESTE DIA <br>VERDADEIRAMENTE ESPECIAL PARA NÓS. PEDIMOS-VOS<br>CONFIRMEM POR FAVOR ATRAVÉS DO <br>FORMULÁRIO DISPONÍVEL NO FINAL DA PÁGINA.",
    rsvp_button: "PREENCHER FORMULÁRIO",
    dietary_title: "RESTRIÇÕES ALIMENTARES",
    dietary_info: `QUEREMOS QUE TODOS APROVEITEM AO MÁXIMO O DIA. SE ALGUM <br>
      DE VÓS TIVER RESTRIÇÕES ALIMENTARES(ALERGIAS, <br>
      INTOLERÂNCIAS, DIETAS ESPECÍFICAS OU REQUISITOS RELIGIOSOS),
      <br>AGRADECEMOS QUE NOS INDIQUEM ISSO NO FORMULÁRIO.`,
    dietary_note: `BASTA UMA RESPOSTA POR FAMÍLIA; POR FAVOR, PREENCHAM OS
      <br>DADOS DE CADA MEMBRO.`,
    dietary_deadline:
      "AGRADECEMOS QUE PREENCHAM O FORMULÁRIO ATÉ AO DIA 30/06/2026.",
    travel_title: "PLANEIA A TUA VIAGEM",
    travel_intro: `PARA QUE POSSAM VIVER A AUTÊNTICA EXPERIÊNCIA 
      <br>PORTUGUESA DO RIBATEJO, DEIXAMOS AQUI ALGUMAS
      <br>SUGESTÕES DE HOTÉIS, RESTAURANTES, CAFÉS E
      <br>PONTOS TURÍSTICOS DE INTERESSE. NO FINAL DA
      <br>PÁGINA, ENCONTRARÃO UM LINK E UM QR CODE COM
      <br>TODAS AS INFORMAÇÕES DISPONÍVEIS.`,
    hotels_title: "HOTÉIS",
    hotels_desc_1: `PARA QUEM VEM DE FORA OU PREFERE FICAR PERTO DOS 
      <br>LOCAIS DO EVENTO, DEIXAMOS ALGUMAS SUGESTÕES DE HOTÉIS NA
      <br>ZONA DE FÁTIMA E ALCANENA.`,
    hotels_desc_2: `EM FÁTIMA, TEMOS UM CÓDIGO DE DESCONTO DE 10% PARA A CADEIA DE
      <brR>HOTÉIS “UNITED HOTELS” CONSTITUÍDO POR 6 HOTÉIS, NAS NOITES DE
      <br>4/09 A 6/09: <strong>ANAMJOSEM</strong>`,
    link_text_hotel: "SÓ PARA RESERVAS ATRAVÉS DO SITE:",
    restaurants_title: "RESTAURANTES",
    restaurants_desc: `PARA FACILITAR O PLANEAMENTO DOS DIAS QUE ANTECEDEM O CASAMENTO,
      <br>REUNIMOS UMA LISTA DE RESTAURANTES RECOMENDADOS NA ZONA DE
      <br>ALCANENA E ARREDORES. ESTA SELEÇÃO INCLUI DESDE TABERNAS
      <<br>TRADICIONAIS ATÉ RESTAURANTES COM ESTRELA MICHELIN.`,
    tourism_title: "PONTOS TURÍSTICOS DE INTERESSE",
    tourism_desc: `SE ESTÃO A PENSAR PASSAR UNS DIAS NA BELA REGIAO DO RIBATEJO E
      <br>ARREDORES, DEIXAMOS AQUI ALGUMAS SUGESTÕES DE LOCAIS PARA
      <br>VISITAR, DAR UM PASSEIO PELO CAMPO OU DAR UM MERGULHO NA PRAIA.`,
    links_intro: `AQUI DEIXAMOS O LINK, BEM COMO UM CÓDIGO QR QUE VOS LEVARÁ DIRETAMENTE A UM
      <br>GRUPO QUE CRÍAMOS NO GOOGLE MAPS COM AS RECOMENDAÇÕES ORGANIZADAS POR
      <br>CATEGORIAS.`,
    maps_box_text:
      "Encontre empresas locais, veja mapas e obtenha direções de condução no Google Maps.",
    links_help: `SE TIVEREM DÚVIDAS OU QUISEREM SABER MAIS, DEIXAMOS O LINK PARA
      <br> O SITE DA VISIT PORTUGAL:`,
    faqs_title: "FAQS",
    faqs_content: `
            <strong>A QUINTA TEM ACESSIBILIDADE PARA PESSOAS COM MOBILIDADE REDUZIDA?</strong>
            SIM, EXISTEM RAMPAS EM TODAS AS INSTALAÇÕES; NO ENTANTO, SE TIVEREM UMA NECESSIDADE ESPECÍFICA, POR FAVOR INFORMEM-NOS.
            <br>
            <strong>POSSO MUDAR DE MESA?</strong>
            OS LUGARES ESTÃO MARCADOS.
            <br>
            <strong>HÁ ESTACIONAMENTO NA PROPRIEDADE?</strong>
            SIM, JUNTO À PROPRIEDADE EXISTE UM PARQUE DE ESTACIONAMENTO PRIVADO GRATUITO.
            <br>
            <strong>QUAL É O CÓDIGO DE VESTUÁRIO?</strong>
            ADORARÍAMOS VER-VOS COM OS VOSSOS MELHORES LOOKS: O CÓDIGO DE VESTUÁRIO SERÁ ELEGANTE FORMAL E DE FESTA.
            <br>
            <strong>QUE CLIMA DEVO ESPERAR?</strong>
            EM ALCANENA, O CLIMA NO INÍCIO DE SETEMBRO TENDE A SER QUENTE, SECO E LIMPO, PODENDO ENCONTRAR-SE CÉUS LIMPOS E TEMPERATURAS ENTRE OS 20º E OS 30º. EM RESUMO, UM DIA DE VERÃO AVANÇADO COM MANHÃS AGRADÁVEIS, TARDES QUENTES E NOITES FRESCAS.
            <br>
            <strong>COMO POSSO OFERECER UM PRESENTE AOS NOIVOS?</strong>
            JÁ TEMOS CASA... JÁ TEMOS AMOR... SÓ NOS FALTA MESMO A LUA DE MEL, SE QUISEREM AJUDAR-NOS A TORNÁ-LA INESQUECÍVEL PODEM CONTRIBUIR COM UM MIMINHO.
        `,
    contact_title: "CONTACTOS",
    contact_intro:
      "SE TIVEREM DÚVIDAS OU QUISEREM CONTACTAR-NOS POR QUALQUER OUTRO MOTIVO, POR FAVOR NÃO HESITEM EM LIGAR-NOS OU MANDAR UMA MENSAGEM:",
  },
};

const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});

function closeMenu() {
  menuToggle.classList.remove("active");
  menuOverlay.classList.remove("active");
}

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((elem) => {
    const key = elem.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });

  // CONDITIONAL VISIBILITY FOR DRIVING PAGES
  const drivingPage = document.getElementById("driving-page");
  const purchasePage = document.getElementById("purchase-page");

  if (lang === "es") {
    drivingPage.style.display = "flex";
    purchasePage.style.display = "flex";
  } else {
    drivingPage.style.display = "none";
    purchasePage.style.display = "none";
  }
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
