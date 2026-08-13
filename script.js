// Edit this list whenever a domain is added, sold, or removed.
const domains = [
  {
    name: "BookwormDreams.com",
    description: "A warm, imaginative .com for children’s reading, publishing, literary content, or book-inspired products.",
    tags: ["Books", "Publishing", "Education", "Family"],
    status: "Available",
    buyNow: 299,
    minOffer: 149,
    saleUrl: "https://bookwormdreams.com",
    detailsUrl: "bookwormdreams/",
    saleLabel: "View domain details"
  },
  {
    name: "ImpossibleSky.com",
    description: "An evocative .com with a sense of ambition and wonder—ideal for space, gaming, media, or adventure brands.",
    tags: ["Space", "Gaming", "Media", "Adventure"],
    status: "Available",
    buyNow: 1495,
    minOffer: 650,
    saleUrl: "https://impossiblesky.com",
    detailsUrl: "impossiblesky/",
    saleLabel: "View domain details"
  },
  {
    name: "Jefik.com",
    description: "A compact, distinctive five-letter .com ready for a technology product, digital platform, or modern global brand.",
    tags: ["5 letters", "Technology", "Digital", "Brandable"],
    status: "Available",
    buyNow: 899,
    minOffer: 450,
    saleUrl: "https://jefik.com",
    detailsUrl: "jefik/",
    saleLabel: "View domain details"
  },
  {
    name: "LegitSales.com",
    description: "A clear, credible .com for sales enablement, verified leads, CRM tools, or a results-driven B2B platform.",
    tags: ["Sales", "CRM", "B2B", "Lead generation"],
    status: "Available",
    buyNow: 699,
    minOffer: 299,
    saleUrl: "https://legitsales.com",
    detailsUrl: "legitsales/",
    saleLabel: "View domain details"
  },
  {
    name: "Qubok.com",
    description: "A short, distinctive .com for quantum optimization, AI, SaaS, and next-generation technology brands.",
    tags: ["5 letters", "Technology", "AI", "SaaS"],
    status: "Available",
    buyNow: 199,
    minOffer: 100,
    saleUrl: "https://qubok.com",
    detailsUrl: "qubok/",
    saleLabel: "View domain details"
  }
];

const domainGrid = document.querySelector("#domain-grid");

function splitDomain(name) {
  const dot = name.lastIndexOf(".");
  return `${name.slice(0, dot)}<span>${name.slice(dot)}</span>`;
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}

domains.forEach((domain, index) => {
  const article = document.createElement("article");
  article.className = "domain-card";
  const subject = encodeURIComponent(`Inquiry about ${domain.name}`);
  article.innerHTML = `
    <div class="domain-top">
      <span class="status">${domain.status}</span>
      <span class="domain-index">${String(index + 1).padStart(2, "0")}</span>
    </div>
    <h3>${splitDomain(domain.name)}</h3>
    <p>${domain.description}</p>
    <div class="tags">${domain.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
    <div class="domain-pricing" aria-label="Pricing for ${domain.name}">
      <div><span>Buy now</span><strong>${formatPrice(domain.buyNow)}</strong></div>
      <div><span>Offers from</span><strong>${formatPrice(domain.minOffer)}</strong></div>
    </div>
    <div class="domain-actions">
      <a class="domain-link" href="${domain.detailsUrl}">
        <span>${domain.saleLabel}</span><b aria-hidden="true">→</b>
      </a>
      <a class="domain-question" href="mailto:contact@reach.edgeflint.com?subject=${subject}">Ask a question about ${domain.name}</a>
    </div>
  `;
  domainGrid.appendChild(article);
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("open", !open);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
