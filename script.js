/* Opal Oven — Main Script */

/* ---- Macaron Data ---- */
const macarons = [
  {
    id: 1, num: "01", name: "French Vanilla", tag: "Signature",
    desc: "Tahitian vanilla bean ganache in an ivory shell, finished with a dusting of edible 24-karat gold",
    price: "$4.50",
    c1: "#F5E8C8", c2: "#D8A840", fill: "#F0D070",
    light: "#FDF4DC", shadow: "rgba(200,160,50,0.28)"
  },
  {
    id: 2, num: "02", name: "Bulgarian Rose", tag: "Floral",
    desc: "Velvety rose buttercream infused with steam-distilled Bulgarian Rosa Damascena petals",
    price: "$5.00",
    c1: "#F0BCBC", c2: "#C87080", fill: "#E89090",
    light: "#FDE0E0", shadow: "rgba(190,90,100,0.28)"
  },
  {
    id: 3, num: "03", name: "Lavender Honey", tag: "Floral",
    desc: "Provençal lavender ganache swirled with raw wildflower honey from mountain apiaries",
    price: "$5.00",
    c1: "#D4C0E4", c2: "#8870A8", fill: "#C0A8D8",
    light: "#EAE0F8", shadow: "rgba(120,90,170,0.28)"
  },
  {
    id: 4, num: "04", name: "Dark Chocolate", tag: "Classic",
    desc: "Valrhona 72% dark chocolate ganache with a whisper of smoked sea salt from Okinawa",
    price: "$4.50",
    c1: "#7A5040", c2: "#301408", fill: "#4A2010",
    light: "#A07060", shadow: "rgba(30,10,2,0.45)"
  },
  {
    id: 5, num: "05", name: "Pistachio", tag: "Classic",
    desc: "Sicilian Bronte pistachio cream with house-made marzipan and a dusting of crushed nuts",
    price: "$5.00",
    c1: "#B0D490", c2: "#70A050", fill: "#90C870",
    light: "#D0EAB8", shadow: "rgba(90,150,60,0.28)"
  },
  {
    id: 6, num: "06", name: "Raspberry", tag: "Fruity",
    desc: "Fresh Mara des Bois raspberry coulis ganache — bright, vivid, and intensely fruity",
    price: "$4.50",
    c1: "#F07090", c2: "#B81840", fill: "#E04060",
    light: "#FCBCCC", shadow: "rgba(170,25,55,0.3)"
  },
  {
    id: 7, num: "07", name: "Salted Caramel", tag: "Signature",
    desc: "Slow-cooked amber caramel ganache finished with hand-harvested Guérande fleur de sel crystals",
    price: "$4.50",
    c1: "#ECCC72", c2: "#B07828", fill: "#D09038",
    light: "#FEEE9A", shadow: "rgba(160,110,30,0.32)"
  },
  {
    id: 8, num: "08", name: "Lemon Curd", tag: "Fruity",
    desc: "Bright Meyer lemon curd with a zing of fresh citrus and a subtle hint of thyme honey",
    price: "$4.50",
    c1: "#F6F098", c2: "#D8C020", fill: "#F0E040",
    light: "#FFFAC0", shadow: "rgba(205,185,20,0.28)"
  },
  {
    id: 9, num: "09", name: "Earl Grey", tag: "Tea Series",
    desc: "Bergamot-infused white chocolate ganache with rare Darjeeling first-flush undertones",
    price: "$5.00",
    c1: "#B8C8D8", c2: "#6888A0", fill: "#A0B8CC",
    light: "#D8E4EE", shadow: "rgba(80,115,145,0.28)"
  },
  {
    id: 10, num: "10", name: "Champagne", tag: "Prestige",
    desc: "Moët & Chandon Grand Vintage champagne reduction ganache — reserved for the most celebratory moments",
    price: "$5.50",
    c1: "#F6E898", c2: "#C09828", fill: "#E0C038",
    light: "#FFFAC0", shadow: "rgba(185,150,30,0.32)"
  },
  {
    id: 11, num: "11", name: "Matcha", tag: "Tea Series",
    desc: "Ceremonial-grade Uji matcha ganache with a delicate bitterness and sublime umami earthiness",
    price: "$5.00",
    c1: "#A8CC88", c2: "#588040", fill: "#80B060",
    light: "#CAE8A8", shadow: "rgba(75,130,55,0.28)"
  },
  {
    id: 12, num: "12", name: "Blackberry Violet", tag: "Floral",
    desc: "Wild blackberry preserve layered with crystallized violet petals sourced from Toulouse",
    price: "$5.00",
    c1: "#9860A8", c2: "#481058", fill: "#6830A0",
    light: "#C898D8", shadow: "rgba(75,20,90,0.35)"
  },
  {
    id: 13, num: "13", name: "Crème Brûlée", tag: "Classic",
    desc: "Silky vanilla custard ganache with a torch-caramelized sugar note and cinnamon whisper",
    price: "$5.00",
    c1: "#F0D880", c2: "#C09030", fill: "#D8A838",
    light: "#FEEE9A", shadow: "rgba(185,140,40,0.28)"
  },
  {
    id: 14, num: "14", name: "Passion Fruit", tag: "Fruity",
    desc: "Tropical passion fruit curd ganache with toasted coconut and a kaffir lime leaf finish",
    price: "$5.00",
    c1: "#F8B860", c2: "#D07018", fill: "#E88C28",
    light: "#FFD898", shadow: "rgba(205,105,20,0.28)"
  },
  {
    id: 15, num: "15", name: "Hazelnut Praline", tag: "Classic",
    desc: "House-made hazelnut praline ganache crafted from Piedmont hazelnuts, roasted to perfection in our atelier",
    price: "$4.50",
    c1: "#C09060", c2: "#784830", fill: "#A06840",
    light: "#DEB888", shadow: "rgba(120,65,35,0.32)"
  },
  {
    id: 16, num: "16", name: "Strawberry Champagne", tag: "Prestige",
    desc: "Sun-ripened garden strawberry preserve with a Veuve Clicquot champagne ganache",
    price: "$5.00",
    c1: "#F8C8D4", c2: "#D07888", fill: "#F0A8B4",
    light: "#FFE4EA", shadow: "rgba(210,110,130,0.25)"
  },
  {
    id: 17, num: "17", name: "Espresso", tag: "Classic",
    desc: "Single-origin Ethiopian Yirgacheffe espresso ganache — dark, aromatic, and deeply satisfying",
    price: "$4.50",
    c1: "#746050", c2: "#280C05", fill: "#402010",
    light: "#9A7865", shadow: "rgba(42,15,8,0.48)"
  },
  {
    id: 18, num: "18", name: "Orange Blossom", tag: "Floral",
    desc: "Sicilian blood orange curd with orange blossom water and raw Moroccan argan honey",
    price: "$5.00",
    c1: "#F8C078", c2: "#D07030", fill: "#E89040",
    light: "#FFD898", shadow: "rgba(200,100,35,0.28)"
  },
  {
    id: 19, num: "19", name: "Blueberry Lavender", tag: "Fruity",
    desc: "Wild Maine blueberry jam with Provençal lavender cream — subtly bittersweet and deeply complex",
    price: "$5.00",
    c1: "#9090D8", c2: "#4040A0", fill: "#7070C0",
    light: "#C0C0F0", shadow: "rgba(60,60,165,0.28)"
  },
  {
    id: 20, num: "20", name: "White Chocolate", tag: "Classic",
    desc: "Venezuelan white chocolate ganache with Madagascan vanilla pearl caviar for a pure, silky finish",
    price: "$4.50",
    c1: "#FDF0DC", c2: "#E0C888", fill: "#F0D898",
    light: "#FFFAEA", shadow: "rgba(205,175,90,0.22)"
  },
  {
    id: 21, num: "21", name: "Mango Coconut", tag: "Fruity",
    desc: "Alphonso mango purée with toasted coconut cream and an aromatic kaffir lime leaf zest",
    price: "$5.00",
    c1: "#F8CC60", c2: "#D89020", fill: "#E8A830",
    light: "#FFEE88", shadow: "rgba(215,145,25,0.28)"
  },
  {
    id: 22, num: "22", name: "Cherry Blossom", tag: "Seasonal",
    desc: "Sakura-infused white chocolate ganache with a pickled cherry blossom petal pressed on top",
    price: "$5.00",
    c1: "#F8CCDC", c2: "#D880A0", fill: "#F0A8C0",
    light: "#FFE4EE", shadow: "rgba(210,120,150,0.25)"
  },
  {
    id: 23, num: "23", name: "Caramel Fleur de Sel", tag: "Prestige",
    desc: "Deeply burnished amber caramel with shards of hand-harvested Brittany sea salt for exquisite contrast",
    price: "$5.50",
    c1: "#DC9840", c2: "#9C6018", fill: "#B87828",
    light: "#FECC68", shadow: "rgba(155,90,20,0.34)"
  },
  {
    id: 24, num: "24", name: "Peach Bellini", tag: "Prestige",
    desc: "White peach purée with Italian Prosecco reduction and a delicate lychee undertone",
    price: "$5.00",
    c1: "#F8D8B0", c2: "#E0A068", fill: "#F0C080",
    light: "#FFE8C8", shadow: "rgba(215,155,85,0.25)"
  },
  {
    id: 25, num: "25", name: "Yuzu Citrus", tag: "Prestige",
    desc: "Rare Japanese yuzu citrus ganache with a bright, complex acidity and delicate floral notes",
    price: "$5.50",
    c1: "#F4F060", c2: "#CCBC18", fill: "#E8DC30",
    light: "#FFFAC0", shadow: "rgba(200,185,20,0.28)"
  },
  {
    id: 26, num: "26", name: "Burgundy Rose", tag: "Prestige",
    desc: "Deep Damask rose ganache with blackcurrant reduction and a rosehip essence finish",
    price: "$5.50",
    c1: "#A83040", c2: "#600818", fill: "#801828",
    light: "#CC7080", shadow: "rgba(98,10,22,0.4)"
  },
  {
    id: 27, num: "27", name: "Tahitian Vanilla Bean", tag: "Prestige",
    desc: "Premium Tahitian vanilla pod ganache with its distinctive exotic floral-fruity character",
    price: "$5.50",
    c1: "#F8EEC0", c2: "#E8D880", fill: "#F0E0A0",
    light: "#FFFAE0", shadow: "rgba(205,180,90,0.24)"
  },
  {
    id: 28, num: "28", name: "Honey Saffron", tag: "Prestige",
    desc: "Kashmir saffron threads steeped in raw acacia honey ganache — liquid gold in every bite",
    price: "$5.50",
    c1: "#F8B828", c2: "#D87008", fill: "#E89018",
    light: "#FFD860", shadow: "rgba(205,115,10,0.34)"
  },
  {
    id: 29, num: "29", name: "Mint Chocolate", tag: "Classic",
    desc: "Garden spearmint ganache paired with Valrhona dark chocolate and crushed candy cane",
    price: "$5.00",
    c1: "#88D8B8", c2: "#38A878", fill: "#60C090",
    light: "#AEECD8", shadow: "rgba(48,165,110,0.28)"
  },
  {
    id: 30, num: "30", name: "Cassis", tag: "Prestige",
    desc: "Intense black currant preserve ganache with crème de cassis and wild blackberry reduction",
    price: "$5.50",
    c1: "#7828A8", c2: "#380858", fill: "#500878",
    light: "#A858D8", shadow: "rgba(57,8,100,0.4)"
  }
];

/* ---- DOM References ---- */
const loader        = document.getElementById('loader');
const loaderFill    = document.getElementById('loaderFill');
const nav           = document.getElementById('nav');
const hamburger     = document.getElementById('hamburger');
const mobileMenu    = document.getElementById('mobileMenu');
const macaronGrid   = document.getElementById('macaronGrid');
const filterTabs    = document.querySelectorAll('.filter-tab');
const orderForm     = document.getElementById('orderForm');
const formSuccess   = document.getElementById('formSuccess');

/* ---- Page Loader ---- */
function runLoader() {
    setTimeout(() => { loaderFill.style.width = '100%'; }, 80);
    setTimeout(() => { loader.classList.add('hidden'); }, 1500);
}
runLoader();

/* ---- Scroll-based nav ---- */
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ---- Hamburger / Mobile Menu ---- */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

/* ---- Hero parallax ---- */
const heroBg = document.querySelector('.hero-bg-image');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
            heroBg.style.transform = `scale(1.05) translateY(${y * 0.18}px)`;
        }
    }, { passive: true });
}

/* ---- Build Macaron Cards ---- */
function buildCard(m) {
    const card = document.createElement('div');
    card.className = 'macaron-card reveal';
    card.dataset.tag = m.tag;

    card.innerHTML = `
        <div class="macaron-visual">
            <div class="macaron-disc-wrap">
                <div class="macaron-disc"
                    style="
                        --c1: ${m.c1};
                        --c2: ${m.c2};
                        --light-c: ${m.light};
                        --shadow-c: ${m.shadow};
                    ">
                </div>
                <div class="macaron-foot" style="background: ${m.c2}"></div>
                <div class="macaron-bottom" style="background: linear-gradient(to bottom, ${m.c2}, color-mix(in srgb, ${m.c2} 50%, #1E110A))"></div>
            </div>
            <span class="macaron-number-badge">${m.num}</span>
        </div>
        <div class="macaron-info">
            <span class="macaron-tag-label">${m.tag}</span>
            <h3 class="macaron-name">${m.name}</h3>
            <p class="macaron-desc">${m.desc}</p>
            <div class="macaron-footer">
                <span class="macaron-price">${m.price}</span>
            </div>
        </div>
    `;

    return card;
}

macarons.forEach(m => macaronGrid.appendChild(buildCard(m)));

/* ---- Filter Tabs ---- */
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        const cards  = macaronGrid.querySelectorAll('.macaron-card');

        cards.forEach(card => {
            const match = filter === 'all' || card.dataset.tag === filter;
            card.classList.toggle('hidden', !match);
        });

        triggerReveal();
    });
});

/* ---- Intersection Observer for reveal ---- */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function triggerReveal() {
    document.querySelectorAll('.reveal:not(.hidden)').forEach(el => {
        revealObserver.observe(el);
    });
}

triggerReveal();

/* Stagger cards in the grid */
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const siblings = [...card.parentElement.querySelectorAll('.macaron-card:not(.hidden)')];
            const idx = siblings.indexOf(card) % 4;
            card.style.transitionDelay = `${idx * 0.07}s`;
            card.classList.add('visible');
            cardObserver.unobserve(card);
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

macaronGrid.querySelectorAll('.macaron-card').forEach(card => {
    cardObserver.observe(card);
});

/* ---- Smooth Scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

/* ---- Contact Form ---- */
if (orderForm) {
    orderForm.addEventListener('submit', e => {
        e.preventDefault();

        const btn = orderForm.querySelector('button[type="submit"]');
        btn.textContent = 'Sending…';
        btn.disabled = true;

        setTimeout(() => {
            orderForm.style.opacity = '0';
            orderForm.style.transition = 'opacity 0.4s ease';
            setTimeout(() => {
                orderForm.hidden = true;
                formSuccess.hidden = false;
                formSuccess.style.opacity = '0';
                formSuccess.style.transition = 'opacity 0.5s ease';
                requestAnimationFrame(() => {
                    formSuccess.style.opacity = '1';
                });
            }, 400);
        }, 1200);
    });
}

/* ---- Pause marquee on hover ---- */
const marqueeContent = document.querySelectorAll('.marquee-content');
const marqueeStrip   = document.querySelector('.marquee-strip');

if (marqueeStrip) {
    marqueeStrip.addEventListener('mouseenter', () => {
        marqueeContent.forEach(m => m.style.animationPlayState = 'paused');
    });
    marqueeStrip.addEventListener('mouseleave', () => {
        marqueeContent.forEach(m => m.style.animationPlayState = 'running');
    });
}
