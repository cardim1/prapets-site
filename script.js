const PLACEHOLDER_PHOTO = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <rect width="400" height="500" fill="#F5F5F3"/>
  <circle cx="200" cy="330" r="70" fill="#E4E3E0"/>
  <circle cx="140" cy="220" r="34" fill="#E4E3E0"/>
  <circle cx="200" cy="160" r="36" fill="#E4E3E0"/>
  <circle cx="260" cy="220" r="34" fill="#E4E3E0"/>
</svg>`);

const PLACEHOLDER_AVATAR = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="60" fill="#F5F5F3"/>
  <circle cx="60" cy="48" r="22" fill="#E4E3E0"/>
  <circle cx="60" cy="118" r="40" fill="#E4E3E0"/>
</svg>`);

const ENDERECO_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Fisioprapets+-+Centro+de+Reabilita%C3%A7%C3%A3o+Veterin%C3%A1ria%2C+Rua+Frei+Henrique+Ascoli%2C+514%2C+Feira+de+Santana+BA";

const PRAPETS_INSTAGRAM = "https://www.instagram.com/prapetsespecialidades/";

const PLANOS = {
  petlove: { nome: "Petlove", logo: "img/plano-petlove.png" },
  plamev: { nome: "Plamev", logo: "img/plano-plamev.png" }
};

const PROFESSIONALS = [
  {
    nome: "Dr. Robson Rodrigues",
    especialidade: "Fisiatra",
    foto: "img/robson.jpg",
    descricao: "Atua na área da fisiatria e reabilitação, voltado à qualidade de vida dos animais, ajudando-os a recuperar movimento, conforto e bem-estar.",
    whatsapp: "5575981548153",
    mensagem: "Olá, Dr. Robson! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/fisioprapets?igsi=czBpNW9yMXR5bTg0",
  planos: []
  },
  {
    nome: "Dra. Samara Soares",
    especialidade: "Clínica Geral - Medicina Preventiva",
    foto: "img/samara.jpg",
    descricao: "Apaixonada pelo bem-estar animal, atua na clínica geral, com foco em medicina preventiva, prezando sempre o cuidado individualizado, acolhimento e muito carinho a cada paciente.",
    whatsapp: "5575992298260",
    mensagem: "Olá, Dra. Samara! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/mv.samarassz?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  planos: []
  },
    {
    nome: "Dra. Renata Monção",
    especialidade: "Oftamologista",
    foto: "img/renata.jpg",
    descricao: "Atua como especialista em oftalmologia, combinando tecnologia e experiência para diagnósticos mais precisos e tratamentos individualizados voltados à saúde ocular dos pets.",
    whatsapp: "5575982449731",
    mensagem: "Olá, Dra. Renata! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/dra.renatamoncao?igsi=MTlmMWs4ZzVyMXU3OQ%3D%3D",
    planos: []
    },

  {
    nome: "Dra. Isabelle Coutinho",
    especialidade: "Dermatologista",
    foto: "img/isabelle.jpg",
    descricao: "Atua na área da dermatologia com foco em saúde da pele, pelos e unhas de cães e gatos, aliando paixão e ciência para oferecer diagnósticos precisos e personalizados.",
    whatsapp: "5575991555350",
    mensagem: "Olá, Dra. Isabelle! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/draisabellecoutinho?igsi=bGptNDYwZjE0YTUy",
  planos: ["petlove", "plamev"]
  },
    {
    nome: "Dr. João Pavani",
    especialidade: "Clínico Geral - Medicina Preventiva",
    foto: "img/pavani.jpg",
    descricao: "Atua na clínica geral dedicando-se ao acompanhamento integral de cães e gatos, baseando-se na necessidade de cada paciente.",
    whatsapp: "5575981795882",
    mensagem: "Olá, Dr. João! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/vet_pavani?igsi=c3R6NW52dnllNGtr",
  planos: []
  },
  {
    nome: "Dra. Bárbara Cássia",
    especialidade: "Cardiologista",
    foto: "img/barbara.jpg",
    descricao: "Atua na cardiologia veterinária, área que exige precisão técnica e sensibilidade, buscando oferecer tempo de qualidade e conforto aos seus pacientes.",
    whatsapp: "5571991202289",
    mensagem: "Olá, Dra. Bárbara! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/vet.barbaracassia?igsi=YzdrOGN2bHk0MHA4",
  planos: []
  },
  {
    nome: "Dra. Viviane Ferraz",
    especialidade: "Cardiologista",
    foto: "img/viviane.jpg",
    descricao: "Atua na área da cardiologia veterinária, unindo conhecimento e cuidado, com foco em saúde cardiovascular, focada em oferecer qualidade, segurança e bem-estar aos pets.",
    whatsapp: "5575999913046",
    mensagem: "Olá, Dra. Viviane! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/vimferraz?igsi=MWR4eGxucDQzb3hw",
  planos: []
  },
  {
    nome: "Dra. Yasmim Carvalho",
    especialidade: "Nefrologista e Urologista",
    foto: "img/yasmim.jpeg",
    descricao: "Atua na área de nefrologia, urologia e na clínica de felinos. Dedica seu trabalho ao cuidado individualizado e à saúde dos pacientes, buscando construir um futuro mais saudável.",
    whatsapp: "75988369833",
    mensagem: "Olá, Dra. Yasmim! Gostaria de agendar uma consulta / solicitar um orçamento.",
    instagram: "https://www.instagram.com/mimcarvalhonfvet/",
  planos: []
  }
];

const SERVICES = {
  banhoTosa: {
    whatsapp: "5575981109850",
    mensagem: "Olá! Gostaria de agendar um banho e tosa.",
    instagram: "https://www.instagram.com/unic.pet_?igsi=Nm8zYmVueTlhMWdh",
    responsavel: {
      nome: "Ellen Amorim",
      foto: "img/ellen.jpg"
    }
  },
  farmacia: {
    whatsapp: "0",
    mensagem: "Olá! Gostaria de tirar uma dúvida sobre um medicamento / produto.",
    instagram: "https://www.instagram.com/prapets.farm/",
    responsavel: {
      nome: "Liane Barbosa",
      foto: "img/liane.jpg"
    }
  }
};

const PARTNERS = [
  { nome: "Ultravet", logo: "img/parceiro-ultravet.png" },
  { nome: "Essência Vitae", logo: "img/parceiro-essencia-vitae.png" },
  { nome: "Focus Saúde Animal", logo: "img/parceiro-focus.png" },
  { nome: "Zoetis", logo: "img/parceiro-zoetis.png" },
  { nome: "Biovet", logo: "img/parceiro-biovet.png" },
  { nome: "Organact", logo: "img/parceiro-organact.png" },
  { nome: "Ourofino", logo: "img/parceiro-ourofino.png" },
  { nome: "Cristo Rei Crematório Pet", logo: "img/parceiro-cristo-rei.png" },
  { nome: "Tia Gal Pet Sitter", logo: "img/parceiro-tia-gal.png" }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("mapLink").href = ENDERECO_MAPS_URL;
  document.getElementById("prapetsInsta").href = PRAPETS_INSTAGRAM;

  renderTeam();
  renderServiceLinks();
  renderPartners();
  setupHeaderScroll();
  setupMobileMenu();
  setupScrollReveal();
  setupGenericReveal();
  setupHeroPaws();
  setupCounter();
  setupHeroParallax();
});

function renderPartners(){
  const track = document.getElementById("parceirosTrack");
  const tooltip = document.getElementById("partnerTooltip");
  if(!track || !PARTNERS.length) return;

  const lista = [...PARTNERS, ...PARTNERS];

  track.innerHTML = lista.map(p => `
    <div class="partner-item" data-nome="${p.nome}">
      <img src="${p.logo}" alt="${p.nome}" loading="lazy" />
    </div>
  `).join("");

  if(!tooltip) return;

  track.querySelectorAll(".partner-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      const rect = item.getBoundingClientRect();
      tooltip.textContent = item.dataset.nome;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top - 10}px`;
      tooltip.classList.add("is-visible");
    });
    item.addEventListener("mouseleave", () => {
      tooltip.classList.remove("is-visible");
    });
  });

  track.querySelectorAll(".partner-item").forEach(item => {
    item.addEventListener("touchstart", () => {
      const rect = item.getBoundingClientRect();
      tooltip.textContent = item.dataset.nome;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top - 10}px`;
      tooltip.classList.add("is-visible");
      clearTimeout(tooltip._hideTimer);
      tooltip._hideTimer = setTimeout(() => tooltip.classList.remove("is-visible"), 1400);
    }, { passive: true });
  });
}

function whatsappLink(numero, mensagem){
  const texto = encodeURIComponent(mensagem || "Olá! Gostaria de agendar uma consulta.");
  return `https://wa.me/${numero}?text=${texto}`;
}

function renderTeam(){
  const grid = document.getElementById("teamGrid");
  if(!grid) return;

  grid.innerHTML = PROFESSIONALS.map(cardHTML).join("");
}

function cardHTML(p){
  const link = whatsappLink(p.whatsapp, p.mensagem);
  const planos = p.planos || [];
  const badges = planos.map(chave => {
    const plano = PLANOS[chave];
    if(!plano) return "";
    return `
      <span class="plan-badge" data-tooltip="Atende ${plano.nome}">
        <img src="${plano.logo}" alt="${plano.nome}" loading="lazy" />
      </span>
    `;
  }).join("");

  return `
    <article class="team-card">
      <div class="team-photo">
        <div class="team-photo-inner">
          <img src="${p.foto}" alt="Foto de ${p.nome}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_PHOTO}';" />
        </div>
        ${badges ? `<div class="plan-badges">${badges}</div>` : ""}
      </div>
      <div class="team-body">
        <h4 class="team-name">${p.nome}</h4>
        <p class="team-role">${p.especialidade}</p>
        <p class="team-desc">${p.descricao}</p>
        <div class="team-actions">
          <a class="team-whats" href="${link}" target="_blank" rel="noopener">
            ${whatsIconSVG}
            Agendar no WhatsApp
          </a>
          <a class="team-insta" href="${p.instagram}" target="_blank" rel="noopener" aria-label="Instagram de ${p.nome}">
            ${instaIconSVG}
          </a>
        </div>
      </div>
    </article>
  `;
}

const whatsIconSVG = `<svg viewBox="0 0 32 32"><path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.699 4.61 1.902 6.484L4 29l7.723-1.865A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3Zm6.53 17.02c-.28.786-1.64 1.512-2.27 1.573-.6.06-1.19.24-4-1.05-3.386-1.567-5.56-4.94-5.72-5.17-.16-.226-1.36-1.813-1.36-3.46 0-1.646.85-2.453 1.153-2.786.3-.333.65-.417.867-.417.216 0 .433.003.622.013.2.01.47-.076.735.56.28.667.947 2.313 1.03 2.48.083.166.14.36.026.586-.116.226-.174.366-.343.563-.17.196-.356.437-.508.587-.166.166-.34.346-.146.68.196.333.867 1.43 1.86 2.317 1.28 1.14 2.36 1.493 2.693 1.66.333.166.526.14.72-.086.196-.226.833-.973 1.06-1.306.226-.333.453-.28.76-.166.31.113 1.966.926 2.303 1.093.336.166.56.25.646.39.086.14.086.806-.194 1.59Z"/></svg>`;

const instaIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>`;

function renderServiceLinks(){
  const banho = document.getElementById("banhoTosaWhats");
  if(banho) banho.href = whatsappLink(SERVICES.banhoTosa.whatsapp, SERVICES.banhoTosa.mensagem);

  const banhoInsta = document.getElementById("banhoTosaInsta");
  if(banhoInsta) banhoInsta.href = SERVICES.banhoTosa.instagram;

  const banhoAvatar = document.getElementById("banhoTosaAvatar");
  if(banhoAvatar){
    banhoAvatar.alt = SERVICES.banhoTosa.responsavel.nome;
    banhoAvatar.onerror = () => { banhoAvatar.onerror = null; banhoAvatar.src = PLACEHOLDER_AVATAR; };
    banhoAvatar.src = SERVICES.banhoTosa.responsavel.foto;
  }

  const farmacia = document.getElementById("farmaciaWhats");
  if(farmacia) farmacia.href = whatsappLink(SERVICES.farmacia.whatsapp, SERVICES.farmacia.mensagem);

  const farmaciaInsta = document.getElementById("farmaciaInsta");
  if(farmaciaInsta) farmaciaInsta.href = SERVICES.farmacia.instagram;

  const farmaciaAvatar = document.getElementById("farmaciaAvatar");
  if(farmaciaAvatar){
    farmaciaAvatar.alt = SERVICES.farmacia.responsavel.nome;
    farmaciaAvatar.onerror = () => { farmaciaAvatar.onerror = null; farmaciaAvatar.src = PLACEHOLDER_AVATAR; };
    farmaciaAvatar.src = SERVICES.farmacia.responsavel.foto;
  }
}

function setupHeaderScroll(){
  const header = document.getElementById("header");
  if(!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupMobileMenu(){
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if(!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupScrollReveal(){
  const cards = document.querySelectorAll(".team-card");
  if(!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting){
        setTimeout(() => entry.target.classList.add("is-visible"), i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));
}

function setupGenericReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
}

function setupHeroParallax(){
  const art = document.querySelector(".hero-art");
  if(!art || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const blob = art.querySelector(".art-blob");
  const ring = art.querySelector(".art-ring");
  if(!blob || !ring) return;

  art.addEventListener("mousemove", (e) => {
    const rect = art.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    blob.style.translate = `${x * 16}px ${y * 16}px`;
    ring.style.translate = `${x * -10}px ${y * -10}px`;
  });

  art.addEventListener("mouseleave", () => {
    blob.style.translate = "0 0";
    ring.style.translate = "0 0";
  });
}

function setupHeroPaws(){
  const wrap = document.getElementById("heroPaws");
  if(!wrap) return;

  const total = 6;
  for(let i = 0; i < total; i++){
    const paw = document.createElement("span");
    const leftPos = 4 + i * (92 / total);
    const topOffset = i % 2 === 0 ? 0 : 14;
    paw.style.left = `${leftPos}%`;
    paw.style.top = `${topOffset}px`;
    paw.style.animationDelay = `${0.15 * i}s`;
    wrap.appendChild(paw);
  }
}

function setupCounter(){
  const el = document.querySelector(".counter");
  if(!el) return;

  const target = parseInt(el.dataset.target, 10) || 0;
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !started){
        started = true;
        animateCount(el, target);
        observer.disconnect();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(el);
}

function animateCount(el, target){
  const duration = 900;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
