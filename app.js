"use strict";

const pets = [
  {
    name: "Golden Retriever", category: "Dogs", emoji: "🐕",
    image: "photo-1552053831-71594a27632d",
    description: "A friendly, active dog often known for its gentle nature and eagerness to learn.",
    characteristics: "Sociable, intelligent, energetic",
    lifespan: "10–12 years", size: "Large",
    diet: "Complete dog food suited to age and activity; fresh water.",
    care: "Daily exercise, companionship, training, brushing, and routine veterinary care.",
    detail: "Golden Retrievers thrive with regular activity and positive, reward-based training. Their thick coat benefits from frequent brushing, especially during shedding seasons."
  },
  {
    name: "Beagle", category: "Dogs", emoji: "🐶",
    image: "photo-1505628346881-b72b27e84530",
    description: "A curious scent hound with a cheerful personality and a strong sense of smell.",
    characteristics: "Curious, outgoing, determined",
    lifespan: "10–15 years", size: "Small to medium",
    diet: "Measured portions of complete dog food; monitor treats and weight.",
    care: "Daily walks, scent games, secure outdoor spaces, and regular ear checks.",
    detail: "Beagles enjoy exploring scents and can be persistent when following one. Keep them safely leashed outdoors and offer enrichment that engages their nose."
  },
  {
    name: "Domestic Shorthair", category: "Cats", emoji: "🐈",
    image: "photo-1514888286974-6c03e2ca1dba",
    description: "A varied group of mixed-breed cats with many coat colours and individual personalities.",
    characteristics: "Adaptable, playful, independent",
    lifespan: "12–18 years", size: "Small",
    diet: "Complete cat food appropriate to life stage; fresh water daily.",
    care: "Clean litter, play and climbing opportunities, brushing, and routine check-ups.",
    detail: "Domestic Shorthairs are not one single breed, so temperament and appearance vary. Provide safe places to rest, scratch, hide, and play."
  },
  {
    name: "Ragdoll", category: "Cats", emoji: "🐱",
    image: "photo-1573865526739-10659fec78a5",
    description: "A large, long-haired cat often described as calm and people-oriented.",
    characteristics: "Gentle, social, relaxed",
    lifespan: "12–17 years", size: "Medium to large",
    diet: "Balanced cat food in measured portions, with clean drinking water.",
    care: "Regular coat brushing, indoor enrichment, dental care, and veterinary visits.",
    detail: "Ragdolls need regular grooming to help prevent tangles. Like all cats, they benefit from daily play, scratching surfaces, and safe spaces."
  },
  {
    name: "Holland Lop", category: "Rabbits", emoji: "🐰",
    image: "photo-1585110396000-c9ffd4e4b308",
    description: "A small lop-eared rabbit that needs room to move and gentle, patient handling.",
    characteristics: "Alert, social, curious",
    lifespan: "7–12 years", size: "Small",
    diet: "Unlimited grass hay, leafy greens, clean water, and appropriate pellets.",
    care: "Spacious housing, daily exercise, safe chewing items, and rabbit-savvy veterinary care.",
    detail: "Rabbits are social prey animals and should be handled carefully with their body supported. Hay is essential for healthy digestion and dental wear."
  },
  {
    name: "Netherland Dwarf", category: "Rabbits", emoji: "🐇",
    image: "photo-1535241749838-299277b6305f",
    description: "A compact rabbit breed with a small frame and lively, observant behaviour.",
    characteristics: "Bright, sensitive, active",
    lifespan: "10–12 years", size: "Small",
    diet: "Mostly grass hay, with suitable greens, pellets, and fresh water.",
    care: "Room to hop, rabbit-proofed space, enrichment, grooming, and regular check-ups.",
    detail: "Small size does not mean low care needs. Provide a secure exercise area and allow a new rabbit to approach and build trust at its own pace."
  },
  {
    name: "Budgerigar", category: "Birds", emoji: "🦜",
    image: "photo-1552728089-57bdde30beb3",
    description: "A small, active parakeet that benefits from social interaction and mental stimulation.",
    characteristics: "Social, vocal, curious",
    lifespan: "5–10 years", size: "Small",
    diet: "A balanced bird diet with suitable vegetables; fresh water daily.",
    care: "A roomy, safe enclosure, supervised flight, toys, social time, and avian veterinary care.",
    detail: "Budgerigars are intelligent flock birds. Provide daily interaction and enrichment, and avoid fumes such as smoke or overheated non-stick cookware near birds."
  },
  {
    name: "Cockatiel", category: "Birds", emoji: "🐤",
    image: "photo-1549608276-5786777e6587",
    description: "A sociable parrot with a distinctive crest and expressive body language.",
    characteristics: "Affectionate, alert, vocal",
    lifespan: "15–25 years", size: "Small to medium",
    diet: "Balanced formulated bird food with suitable vegetables and clean water.",
    care: "Daily interaction, a large safe enclosure, enrichment, and regular avian vet visits.",
    detail: "Cockatiels need companionship and activities, not just a cage. Learn their body language and provide a safe, supervised environment outside the enclosure."
  },
  {
    name: "Betta", category: "Fish", emoji: "🐠",
    image: "photo-1524704654690-b56c05c78a00",
    description: "A tropical freshwater fish that needs stable, clean water and suitable tank space.",
    characteristics: "Observant, territorial, active",
    lifespan: "3–5 years", size: "Small",
    diet: "Quality betta pellets with occasional suitable frozen or live foods.",
    care: "Heated, filtered, cycled aquarium; regular water testing and partial water changes.",
    detail: "A small bowl is not an adequate long-term home. Learn aquarium cycling and water-quality basics before bringing a betta home; avoid housing two males together."
  },
  {
    name: "Goldfish", category: "Fish", emoji: "🐟",
    image: "photo-1522069169874-c58ec4b76be5",
    description: "A freshwater fish that can grow larger than many people expect and produces substantial waste.",
    characteristics: "Active, social, hardy with proper care",
    lifespan: "10–15+ years", size: "Varies by variety",
    diet: "Quality goldfish food in small portions; remove uneaten food.",
    care: "A spacious, filtered aquarium or pond, stable water quality, and regular maintenance.",
    detail: "Goldfish need far more room and filtration than a typical bowl provides. Tank size depends on the fish and setup; research the particular variety and consult an aquatic specialist."
  },
  {
    name: "Syrian Hamster", category: "Hamsters", emoji: "🐹",
    image: "photo-1425082661705-1834bfd09dca",
    description: "A solitary, mostly nocturnal hamster that needs deep bedding and room to explore.",
    characteristics: "Curious, nocturnal, solitary",
    lifespan: "2–3 years", size: "Medium",
    diet: "Complete hamster food, suitable small portions of vegetables, and fresh water.",
    care: "Large secure enclosure, deep bedding, wheel, hides, chew items, and gentle handling.",
    detail: "Syrian hamsters should generally live alone. They are most active in the evening and need a safe enclosure with enough space to burrow and explore."
  },
  {
    name: "Dwarf Hamster", category: "Hamsters", emoji: "🐹",
    image: "photo-1450778869180-41d0601e046e",
    description: "A tiny, quick-moving hamster whose small size still comes with substantial habitat needs.",
    characteristics: "Alert, active, quick",
    lifespan: "1.5–3 years", size: "Small",
    diet: "Complete hamster food, modest suitable fresh foods, and clean water.",
    care: "Secure spacious enclosure, deep bedding, wheel, hides, and calm handling.",
    detail: "Dwarf hamsters are small and fast, so use a secure enclosure and handle them close to a safe surface. Ask an exotic-animal veterinarian about their specific needs."
  }
];

const petGrid = document.querySelector("#pet-grid");
const searchInput = document.querySelector("#pet-search");
const categoryFilter = document.querySelector("#category-filter");
const noResults = document.querySelector("#no-results");
const resultsCount = document.querySelector("#results-count");
const dialog = document.querySelector("#pet-dialog");

function imageUrl(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=720&q=85`;
}

function renderPets() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = pets.filter((pet) => {
    const matchesSearch = `${pet.name} ${pet.category} ${pet.description}`.toLowerCase().includes(search);
    return matchesSearch && (category === "all" || pet.category === category);
  });

  petGrid.innerHTML = filtered.map((pet) => {
    const index = pets.indexOf(pet);
    return `
      <article class="pet-card">
        <div class="pet-image-wrap">
          <img src="${imageUrl(pet.image)}" alt="${pet.name}" loading="lazy">
          <span class="pet-category">${pet.category}</span>
        </div>
        <div class="pet-card-body">
          <h3>${pet.emoji} ${pet.name}</h3>
          <p>${pet.description}</p>
          <dl class="pet-facts">
            <div><dt>Size</dt><dd>${pet.size}</dd></div>
            <div><dt>Lifespan</dt><dd>${pet.lifespan}</dd></div>
          </dl>
          <button class="text-button learn-more" type="button" data-index="${index}">Learn more <span aria-hidden="true">→</span></button>
        </div>
      </article>`;
  }).join("");

  noResults.hidden = filtered.length !== 0;
  resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "pet" : "pets"} shown`;
}

function showPetDetails(index) {
  const pet = pets[index];
  if (!pet) return;

  document.querySelector("#dialog-content").innerHTML = `
    <img class="dialog-image" src="${imageUrl(pet.image)}" alt="${pet.name}">
    <p class="eyebrow">${pet.category}</p>
    <h2 id="dialog-title">${pet.emoji} ${pet.name}</h2>
    <p>${pet.detail}</p>
    <dl class="dialog-facts">
      <div><dt>Characteristics</dt><dd>${pet.characteristics}</dd></div>
      <div><dt>Average lifespan</dt><dd>${pet.lifespan}</dd></div>
      <div><dt>Typical size</dt><dd>${pet.size}</dd></div>
      <div><dt>Diet</dt><dd>${pet.diet}</dd></div>
      <div><dt>Care requirements</dt><dd>${pet.care}</dd></div>
    </dl>`;
  dialog.showModal();
}

petGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".learn-more");
  if (button) showPetDetails(Number(button.dataset.index));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

searchInput.addEventListener("input", renderPets);
categoryFilter.addEventListener("change", () => {
  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.category === categoryFilter.value);
  });
  renderPets();
});

document.querySelectorAll(".category-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    categoryFilter.value = pill.dataset.category;
    document.querySelectorAll(".category-pill").forEach((item) => item.classList.remove("active"));
    pill.classList.add("active");
    renderPets();
  });
});

// Client-side validation with an accessible message.
const form = document.querySelector(".feedback-form");
form.addEventListener("submit", (event) => {
  const error = document.querySelector("#form-error");
  error.hidden = true;
  error.textContent = "";

  if (!form.checkValidity()) {
    event.preventDefault();
    error.textContent = "Please complete all required fields and enter a valid email address.";
    error.hidden = false;
    form.reportValidity();
  }
});

// Set the date/time input to the user's local current time.
const dateField = document.querySelector("#submitted-at");
const localNow = new Date();
localNow.setMinutes(localNow.getMinutes() - localNow.getTimezoneOffset());
dateField.value = localNow.toISOString().slice(0, 16);

// Generate a short, synthetic meow-like sound and load it into the audio player.
function createMeowWav() {
  const sampleRate = 22050;
  const duration = 1.05;
  const samples = Math.floor(sampleRate * duration);
  const buffer = new ArrayBuffer(44 + samples * 2);
  const view = new DataView(buffer);

  const writeText = (offset, text) => {
    for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
  };

  writeText(0, "RIFF");
  view.setUint32(4, 36 + samples * 2, true);
  writeText(8, "WAVE");
  writeText(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeText(36, "data");
  view.setUint32(40, samples * 2, true);

  for (let i = 0; i < samples; i++) {
    const t = i / sampleRate;
    const progress = t / duration;
    const frequency = 620 + 260 * Math.sin(progress * Math.PI) - 180 * progress;
    const envelope = Math.min(1, t * 10) * Math.max(0, 1 - progress);
    const signal = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.55;
    view.setInt16(44 + i * 2, signal * 32767, true);
  }
  return new Blob([buffer], { type: "audio/wav" });
}

document.querySelector("#meow-audio").src = URL.createObjectURL(createMeowWav());
document.querySelector("#current-year").textContent = new Date().getFullYear();

// Mobile navigation.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});
nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

renderPets();