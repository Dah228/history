// ===== RANDOM IMAGE FOR LYUBERY =====
function getRandomLyuberyImage() {
  const images = [
    "https://s00.yaplakal.com/pics/pics_original/5/3/4/3984435.jpg",
    "https://avatars.mds.yandex.net/i?id=a7454e582a06fef4c8e8f36e356f3521_l-10859624-images-thumbs&n=13",
    "https://aif-s3.aif.ru/images/026/658/a0ae00590ba392193d79644f87c1b0b0.jpg",
    "https://icdn.lenta.ru/images/2023/12/29/13/20231229130033728/owl_wide_1200_42694cac1c0f48506f47c358de4c869f.jpg"
  ];
  return images[Math.floor(Math.random() * images.length)];
}

// ===== MOVEMENTS DATA =====
const movements = [
  {
    id: "stilyagi",
    years: "Конец 1940-х - 1960-е",
    title: "Стиляги",
    image: "https://i.pinimg.com/originals/71/8f/0d/718f0dfe2095b87fc2e27920efa4b440.jpg?nii=t",
    summary: "Советский молодежный бунт против однообразия: яркий стиль, аполитичность и демонстративная индивидуальность.",
    style: "Сначала: широкие яркие брюки, пестрые пиджаки, шляпы, остроносая обувь, гавайские рубашки, цветные носки. Позже: брюки-дудочки, дефицитные джинсы, тонкие галстуки, зонты-трости, плащи и пальто в британском стиле, прически в духе Элвиса.",
    music: "Буги-вуги, рок-н-ролл, джаз. Слушали Элвиса Пресли, Билла Хейли, Бадди Холли. Распространение через редкие пластинки, «рок на костях» и позже магнитофоны.",
    slang: "Слово «стиляга», «стилять» (джазовая среда), самоназвание «штатники».",
    centers: "Москва и Ленинград, затем крупные советские города.",
    reasons: "Реакция на серую унификацию послевоенного быта и дефицит личной свободы; притяжение образа Запада при информационной закрытости.",
    impact: "Стали символом права на индивидуальность. При осуждении со стороны пропаганды и преследованиях движение закрепило модель культурного протеста в СССР.",
    playlist: [
      { name: "Elvis Presley - Jailhouse Rock", url: "https://youtu.be/PpsUOOfb-vE?si=iT5coySzwVgd1hSN" },
      { name: "Bill Haley - Rock Around the Clock", url: "https://youtu.be/VsAlSuEG26A?si=f9VhO4x3M5Yb63Qf" },
      { name: "Buddy Holly - That'll Be The Day", url: "https://youtu.be/M4TfFTmITLo?si=Y16OwNEyGZXUR1wj" }
    ],
    videos: [
      { name: "Документальные сюжеты о стилягах", url: "https://youtu.be/SMKiY-r5Qq4?si=M2rcjZKsAcB4cLOq" },
      { name: "Фрагменты фильма «Стиляги»", url: "https://youtu.be/0J1fKBxK9Wc?si=XAtPm6pFoUzxbvbM" }
    ]
  },
  {
    id: "lyubery",
    years: "Конец 1970-х - 1980-е",
    title: "Люберы",
    image: getRandomLyuberyImage(),
    summary: "Агрессивная молодежная субкультура рабочих окраин, выросшая из подпольного культуризма в Люберцах.",
    style: "Широкие спортивные штаны («трубы»), тяжелые ботинки, короткие стрижки или бритые головы, подчеркнутая физическая сила.",
    music: "Не музыкальная, а силовая и уличная субкультура; ритм среды задавали спортзалы и дворовые компании.",
    slang: "«Качалка», «территория», «свои/чужие» как социальные маркеры поведения.",
    centers: "Люберцы и юго-восточные окраины Москвы; конфликты в центре столицы (например, Пушкинская площадь).",
    reasons: "Запреты и идеологический контроль вокруг культуризма + социальная отчужденность молодежи рабочих пригородов.",
    impact: "Стали символом позднесоветской социальной агрессии и напряженности, повлияли на городской молодежный код 1980-х.",
    playlist: [
      { name: "Подборка: советские качалки 80-х", url: "https://youtu.be/H6MY5kiZIas?si=wMR366Ok5bZBUgl8" },
      { name: "Советская уличная хроника конца 70-х", url: "https://www.youtube.com/watch?v=Rol3TcQLtYI" },
      { name: "История люберов", url: "https://youtu.be/fpawfM3QnXw?si=dnusVJ3gcCOypsAF" }
    ],
    videos: [
      { name: "Документальные материалы о люберах", url: "https://youtu.be/ElB0GoLm4Bw?si=-r5W2RXVhIx7Qida" },
      { name: "Сюжеты о Люберцах в 1980-е", url: "https://vkvideo.ru/video490827308_456243275?t=1s" }
    ]
  },
  {
    id: "punk",
    years: "Начало 1980-х - конец 1980-х",
    title: "Панки",
    image: "https://travelask.ru/system/images/files/001/253/280/wysiwyg/bf43a804ec6b9a679810264ae83cb617.jpg?1547101767",
    summary: "Советский панк как андеграундный эпатаж и отказ от культурной стагнации: шумный звук, абсурдистские тексты, социальная провокация.",
    style: "Тельняшки, пиджаки, галстуки, кроссовки и пальто в неожиданной смеси; растрепанные волосы, иногда ирокезы. Один из символов - тельняшка в духе Андрея Свина Панова.",
    music: "Смесь панка, рока и хардкора; тексты часто абсурдистские и грубые по лексике.",
    slang: "Сейшн, андеграунд, эпатаж, «грязный» звук.",
    centers: "Ленинград и Москва, клубная и квартирная андеграундная среда.",
    reasons: "Реакция на социальную и культурную стагнацию, потребность в резком самовыражении вне официальной сцены.",
    impact: "Закрепили в позднем СССР модель музыкального и поведенческого протеста; в 1990-е часть сцены стала коммерческой.",
    playlist: [
      { name: "Автоматические Удовлетворители - подборка", url: "https://youtu.be/27wn0DIG60o?si=8Dab0znfnT68moyi" },
      { name: "Гражданская Оборона - ранние записи", url: "https://youtu.be/rRQETOSovq0?si=q4MFx39lQy1jecV5" },
      { name: "Советский панк-рок 80-х", url: "https://youtube.com/playlist?list=PLkTPAy5LZiZ1C7YHRd95J23pCbnnwS4kC&si=DPAmluljlmYDIlIp" }
    ],
    videos: [
      { name: "Интервью о панк-андеграунде СССР", url: "https://youtu.be/xxpDZ209_Mc?si=L8aXdt9trWRXQzjV" },
      { name: "Архивные концерты советского панка", url: "https://www.youtube.com/watch?v=9SlqIYRZEag" }
    ]
  },
  {
    id: "hippie",
    years: "Начало 1970-х - 1980-е",
    title: "Хиппи",
    image: "https://avatars.mds.yandex.net/i?id=85b876a5704efbfa0a982831e6efd677_l-10697157-images-thumbs&n=13",
    summary: "Полуподпольное движение свободы и пацифизма в условиях идеологического контроля, со своим сленгом и практиками общинности.",
    style: "Длинные волосы, потертая и выцветшая одежда, естественные тона, минимализм как отказ от официальной «витринной» эстетики.",
    music: "Авторская песня под гитару, психоделические влияния, песни о свободе, любви и пацифизме; часть репертуара на английском.",
    slang: "вписка, герла, пипл, сейшн, олдовый, флэт.",
    centers: "Москва, Ленинград, города Прибалтики и неформальные маршруты встреч.",
    reasons: "Протест против жесткого контроля, однообразия и модели «правильного советского человека».",
    impact: "Расширили пространство свободомыслия и альтернативного образа жизни; несмотря на облавы, аресты и репрессии, движение сохранилось и повлияло на следующие поколения.",
    playlist: [
      { name: "The Beatles - Across the Universe", url: "https://youtu.be/90M60PzmxEE?si=Az0Q06P4PWUjTvD4" },
      { name: "Психоделический рок 60-70-х", url: "https://youtube.com/playlist?list=PL8EDF0165B4EA2F04&si=JktCTDyuOm9NX9e4" },
      { name: "Советские хиппи: гитара и квартирники", url: "https://youtu.be/6MMzh6x0KYU?si=uEfwJ7AcE_FIVWkI" }
    ],
    videos: [
      { name: "Хиппи в СССР: документальная хроника", url: "https://youtu.be/8-HaDu1gXhU?si=62WQuuSRxcT1fn1k" },
      { name: "Интервью участников движения хиппи", url: "https://youtu.be/_n9cNgumTnw?si=6pew1H9EuvmAEj4W" }
    ]
  },
  {
    id: "newwave",
    years: "Середина 1980-х - начало 1990-х",
    title: "Ньювейверы",
    image: "https://avatars.mds.yandex.net/i?id=d7b1cfafbd80ca535282f8bed40301e8_l-5233530-images-thumbs&n=13",
    summary: "Городская меломанская среда «новой волны»: постпанк-эстетика, электроника, новые романтики и клубная мода.",
    style: "Эклектика: элегантность «новых романтиков», мрачноватый постпанк, необычные прически и макияж; массовый вариант - «дискотечная мода» 80-х.",
    music: "New wave, постпанк, электронная и экспериментальная сцена. Внутри движения выделялись «попперы» и более андеграундное крыло.",
    slang: "new wave, попперы, постпанк, дискотечная тусовка.",
    centers: "Москва (клуб «Рокуэлл Кент» в МИФИ), Ленинград, Прибалтика.",
    reasons: "Запрос на независимый вкус и современную звуковую эстетику в условиях позднесоветского культурного контроля.",
    impact: "Сблизили дискотечную массовую культуру и интеллектуальный андеграунд; стали мостом между рок-сценой 80-х и новой городской модой 90-х.",
    playlist: [
      { name: "Japan - Quiet Life", url: "https://youtu.be/xhm-EqcPta0?si=DceTXo13Zi1fPIlE" },
      { name: "Постпанк и new wave 80-х", url: "https://youtube.com/playlist?list=PLmXxqSJJq-yWTswOPWtZVTrs5ZAAjFB_j&si=fJf15bFZZhWjtI7J" },
      { name: "Рондо - хиты 1980-х", url: "https://youtu.be/3u1dUMamOgA?si=CfUMeaWwhJd_2zm6" }
    ],
    videos: [
      { name: "Новая волна в СССР", url: "https://youtu.be/oUrfSIouvBk?si=jTEd9QGc_-oAnrzH" },
      { name: "Клубная культура 1980-х в Москве", url: "https://youtu.be/jjImh7QiVFw?si=MkoN3261v5ZpW3Yh" }
    ]
  }
];

// ===== CITY STORIES =====
const cityStories = {
  moscow: {
    title: "Москва",
    text: "Один из главных центров неформалов: ранние стиляги, хиппи, панк-среда и ньювейверские площадки. В МИФИ (клуб «Рокуэлл Кент») формировались важные музыкальные связи 1980-х.",
    movements: "Стиляги, панки, хиппи, ньювейверы",
    places: "Пушкинская площадь, клуб «Рокуэлл Кент» (МИФИ), квартирники, дискотеки, городские бульвары."
  },
  lyubertsy: {
    title: "Люберцы",
    text: "Промышленный пригород Москвы, где феномен подпольных качалок и дворовой самоорганизации дал начало движению люберов.",
    movements: "Люберы",
    places: "Подвальные самодельные тренажерные залы, дворовые территории, пригородные районы."
  },
  leningrad: {
    title: "Ленинград",
    text: "Крупный центр советского андеграунда: здесь развивались панк, рок и хиппи-среда с собственной сценой и сетью неформального общения.",
    movements: "Панки, хиппи, ньювейверы",
    places: "Клубные площадки, квартирники, уличные точки встреч молодежи."
  },
  riga: {
    title: "Рига",
    text: "Один из балтийских узлов, через который в молодежную среду активнее входили западные музыкальные и модные импульсы.",
    movements: "Хиппи, ньювейверы",
    places: "Клубы, концертные площадки, городские молодежные тусовки."
  },
  tallinn: {
    title: "Таллин",
    text: "Балтийский город, где альтернативная музыкальная среда и эстетика «новой волны» ощущались особенно заметно.",
    movements: "Хиппи, ньювейверы",
    places: "Дискотеки, клубные пространства, неформальные художественные сообщества."
  }
};

const cityGeo = {
  moscow: [55.7558, 37.6173],
  lyubertsy: [55.6769, 37.8932],
  leningrad: [59.9311, 30.3609],
  riga: [56.9496, 24.1052],
  tallinn: [59.4370, 24.7536]
};

// ===== QUIZ PROFILES =====
const quizProfiles = {
  stilyagi: "🎩 Ваш тип: Стиляга. Вам близки яркость, ирония и право быть не как все.",
  lyubery: "💪 Ваш тип: Любер. Вам ближе дисциплина, сила и районная солидарность.",
  punk: "🤘 Ваш тип: Панк. Вам важны эпатаж, громкое самовыражение и отказ от шаблонов.",
  hippie: "✌️ Ваш тип: Хиппи. Ваш ориентир — свобода, пацифизм и неформальное общение.",
  newwave: "🎹 Ваш тип: Ньювейвер. Вы выбираете эстетический эксперимент, музыку и независимый вкус."
};

// ===== DOM ELEMENTS =====
const timelineList = document.getElementById("timelineList");
const mediaSelect = document.getElementById("mediaSelect");
const playlistEl = document.getElementById("playlist");
const videoListEl = document.getElementById("videoList");

// ===== RENDER TIMELINE =====
function renderTimeline() {
  movements.forEach((movement, index) => {
    const button = document.createElement("button");
    button.className = "timeline-item";
    button.type = "button";
    button.dataset.id = movement.id;
    button.innerHTML = `
      <p class="timeline-item__year">${movement.years}</p>
      <h3>${movement.title}</h3>
      <p>${movement.summary}</p>
    `;

    button.addEventListener("click", () => {
      setActiveMovement(movement.id);
      updateMedia(movement.id);
    });

    timelineList.appendChild(button);

    if (index === 0) {
      button.classList.add("is-active");
    }
  });
}

// ===== SET ACTIVE MOVEMENT =====
function setActiveMovement(id) {
  const active = movements.find((item) => item.id === id);
  if (!active) return;

  document.querySelectorAll(".timeline-item").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.id === id);
  });

  document.getElementById("movementTitle").textContent = `${active.title} (${active.years})`;
  
  // Handle image (string or array)
  const imgSrc = Array.isArray(active.image) ? active.image[0] : active.image;
  document.getElementById("movementImage").src = imgSrc;
  document.getElementById("movementImage").alt = `Образ движения: ${active.title}`;
  
  document.getElementById("movementSummary").textContent = active.summary;
  document.getElementById("movementStyle").textContent = active.style;
  document.getElementById("movementMusic").textContent = active.music;
  document.getElementById("movementSlang").textContent = active.slang;
  document.getElementById("movementCenters").textContent = active.centers;
  document.getElementById("movementReasons").textContent = active.reasons;
  document.getElementById("movementImpact").textContent = active.impact;
}

// ===== RENDER MEDIA SELECTOR =====
function renderMediaSelector() {
  movements.forEach((movement) => {
    const option = document.createElement("option");
    option.value = movement.id;
    option.textContent = movement.title;
    mediaSelect.appendChild(option);
  });

  mediaSelect.addEventListener("change", (event) => {
    updateMedia(event.target.value);
    setActiveMovement(event.target.value);
  });

  updateMedia(movements[0].id);
}

// ===== UPDATE MEDIA CONTENT =====
function updateMedia(id) {
  const movement = movements.find((item) => item.id === id);
  if (!movement) return;

  playlistEl.innerHTML = "";
  movement.playlist.forEach((track) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${track.url}" target="_blank" rel="noopener noreferrer">${track.name}</a>`;
    playlistEl.appendChild(li);
  });

  videoListEl.innerHTML = "";
  movement.videos.forEach((video) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${video.url}" target="_blank" rel="noopener noreferrer">${video.name}</a>`;
    videoListEl.appendChild(li);
  });

  mediaSelect.value = id;
}

// ===== WIRE CITY MAP (LEAFLET) =====
function wireCityMap() {
  if (typeof L === "undefined") {
    document.getElementById("cityText").textContent = "Карта не загрузилась. Проверьте подключение к интернету и перезагрузите страницу.";
    return;
  }

  const map = L.map("cityMapCanvas", {
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  const points = Object.entries(cityGeo).map(([key, latlng]) => ({ key, latlng }));
  const bounds = L.latLngBounds(points.map((item) => item.latlng));
  map.fitBounds(bounds.pad(0.85));

  const markerIcon = L.divIcon({
    className: "",
    html: '<div class="map-marker"></div>',
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });

  points.forEach(({ key, latlng }) => {
    const story = cityStories[key];
    if (!story) return;

    const marker = L.marker(latlng, { icon: markerIcon }).addTo(map);
    marker.bindTooltip(story.title, {
      permanent: false,
      direction: "top",
      offset: [0, -8]
    });

    marker.on("click", () => {
      document.getElementById("cityTitle").textContent = story.title;
      document.getElementById("cityText").textContent = story.text;
      document.getElementById("cityMovements").textContent = story.movements;
      document.getElementById("cityPlaces").textContent = story.places;
      map.panTo(latlng);
    });
  });

  // Set default city
  const defaultCity = cityStories.moscow;
  if (defaultCity) {
    document.getElementById("cityTitle").textContent = defaultCity.title;
    document.getElementById("cityText").textContent = defaultCity.text;
    document.getElementById("cityMovements").textContent = defaultCity.movements;
    document.getElementById("cityPlaces").textContent = defaultCity.places;
  }
}

// ===== WIRE QUIZ =====
function wireQuiz() {
  const quiz = document.getElementById("typeQuiz");
  const result = document.getElementById("quizResult");
  const keys = Object.keys(quizProfiles);

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quiz);
    const answers = [formData.get("q1"), formData.get("q2"), formData.get("q3"), formData.get("q4")];

    if (answers.some((item) => !item)) {
      result.textContent = "Ответьте на все вопросы, чтобы получить результат.";
      return;
    }

    const score = Object.fromEntries(keys.map((key) => [key, 0]));
    answers.forEach((answer) => {
      if (score[answer] !== undefined) {
        score[answer] += 1;
      }
    });

    const winner = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    result.textContent = quizProfiles[winner];
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  setActiveMovement(movements[0].id);
  renderMediaSelector();
  wireCityMap();
  wireQuiz();
});