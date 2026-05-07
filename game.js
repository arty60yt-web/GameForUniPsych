const intros = [
    {
        title: "Преамбула трактата",
        text: "В древних дознаниях душу исправляли страхом, запретом и карой, именуя сие спасением от соблазна. Человеку же редко оставляли право голоса, ибо важнее считалось повиновение, нежели разумение.\n\nИ в семейном укладе порой действуют сродные обычаи: контроль и нажим объявляются благом, а вольная мысль юного сердца — угрозой порядку. Так инквизиторский суд становится аллегорией воспитания."
    },
    {
        title: "Цель сего трактата",
        text: "Цель сего трактата — показать, что различные способы наставления юной души формируют различные модели семейного уклада.\n\nТо, что ныне кажется верным и действенным, впоследствии может либо укрепить доверие и добродетель, либо взрастить страх, скрытность и разлад."
    },
    {
        title: "Правила испытания",
        text: "В ходе испытания вам предстанут смутные обстоятельства из жизни отрока четырнадцати-пятнадцати зим. В каждом из них изберите путь родительского решения, коий вам ближе.\n\nКаждый выбор склоняет чаши невидимых весов: доверия, поддержки, надзора и самостоятельности.\n\nПо совершении решения будет открыто краткое толкование, а в завершении — итоговый вердикт семейного уклада."
    }
];

const situations = [
    {
        title: "Испытание первое: Дым соблазна",
        text: "Ваш отпрыск, достигнув пятнадцати зим, всё чаще затворяет врата своей кельи, тяготится расспросами и утаивает мысли свои.\n\nВ один из вечеров он возвращается позднее обычного; от одежды его тянет дымом, а взор уклоняется и спешит прочь.",
        options: [
            {
                title: "\"Ты впал в безумие? Дым сатанинский? Не покинешь обитель до следующего полнолуния!\"",
                why: "Суровая кара по видимости способна сразу отвратить от порока.",
                minus: "Се взращивает страх и унижение, но не открывает исток соблазна.",
                effects: { control: 5, support: -4, trust: -5, autonomy: -4 }
            },
            {
                title: "\"Отныне осмотрю твои пожитки и письмена, доколе не узнаю всей правды\"",
                why: "Строжайший надзор кажется кратчайшим путём пресечь беду.",
                minus: "Отрок учится таиться, а не разуметь, отчего сбился с пути.",
                effects: { control: 3, support: -2, trust: -4, autonomy: -5 }
            },
            {
                title: "\"Сердце моё смущено сим запахом. Поведай, что с тобою приключилось\"",
                why: "Спокойный разговор хранит связь и помогает постичь побуждения.",
                minus: "Без ясных рубежей проступок может показаться делом малым.",
                effects: { control: -1, support: 4, trust: 4, autonomy: 2 }
            }
        ]
    },
    {
        title: "Испытание второе: Облик еретический",
        text: "Дщери вашей пятнадцать зим. Она изменила цвет волос, сменила одеяния и являет новый облик, непривычный дому.\n\nВ школе ей делают выговоры, а дома она твердит, что ищет собственный путь выражения. В вас же растут тревога и отчуждение.",
        options: [
            {
                title: "\"Пока не облечёшься пристойно, порог дома не переступишь. Сие не обсуждается\"",
                why: "Резкий запрет кажется скорым возвращением к порядку.",
                minus: "Отроковица воспринимает сие как подавление воли и крепнет в бунте.",
                effects: { control: 5, support: -4, trust: -4, autonomy: -5 }
            },
            {
                title: "\"Неужто не ведаешь, каков сей вид? Люди осудят тебя сурово\"",
                why: "Увещевание и спор кажутся мягче прямого воспрета.",
                minus: "От непрестанного нажима дитя ещё глубже уходит в молчание.",
                effects: { control: 3, support: -2, trust: -3, autonomy: -3 }
            },
            {
                title: "\"Мне непривычен сей облик, но поведай: отчего он столь важен тебе?\"",
                why: "Такой подход хранит близость и оставляет место самовыражению.",
                minus: "Надлежит обозначить границы, иначе опыты выйдут за меру.",
                effects: { control: -2, support: 4, trust: 3, autonomy: 4 }
            }
        ]
    },
    {
        title: "Испытание третье: Чуждое окружение",
        text: "Отрок всё реже повествует о школьных делах, всё чаще медлит вне дома и держится новой компании.\n\nНа прямые вопрошания отвечает скупо и ускользает от сути.",
        options: [
            {
                title: "\"Желаю знать, где ты и с кем. Каждый час будешь подавать весть\"",
                why: "Во тьме неведения тотальный учёт кажется разумным средством.",
                minus: "Даже мирная беседа начинает звучать как допрос и надзор.",
                effects: { control: 5, support: -4, trust: -5, autonomy: -5 }
            },
            {
                title: "\"Установим порядок: говори, куда идёшь и когда вернёшься. Сие не от неверия, но ради сохранности\"",
                why: "Чёткий устав уменьшает тревогу и вносит предсказуемость.",
                minus: "Есть риск, что связь обратится в сухую отчётность вместо доверия.",
                effects: { control: 3, support: 0, trust: -2, autonomy: -2 }
            },
            {
                title: "\"Мне тревожно, но вижу: у тебя складывается свой круг. Помни, я рядом, коли понадобится\"",
                why: "Принятие укрепляет связь и учитывает ход взросления.",
                minus: "Без оговорённых пределов опасности окружения можно недооценить.",
                effects: { control: -2, support: 5, trust: 4, autonomy: 3 }
            },
            {
                title: "\"Что ж, коль не желаешь говорить, не стану вмешиваться. Живи своим уставом\"",
                why: "Полная вольность выглядит знаком доверия к зрелости.",
                minus: "Ослабевает чувство опоры: дитя может остаться один на один с смутой.",
                effects: { control: -5, support: -3, trust: -1, autonomy: 5 }
            }
        ]
    },
    {
        title: "Испытание четвёртое: Падение в учении",
        text: "Отрок приносит записи с тремя худыми отметками кряду по важному предмету. На расспросы отвечает с раздражением: «Оставьте, сие скучно и мне не нужно». Меж тем вы ведаете, что он способен, но в последние седмицы оставил учение.",
        options: [
            {
                title: "\"Ещё одна худая отметка — и я выброшу твои игры и свитки. Уразумел?\"",
                why: "Кажется, без сурового нажима дитя не уразумеет тяжесть проступка.",
                minus: "Рвение к знанию подменяется страхом; учение держится на принуждении, а не на смысле.",
                effects: { control: 6, support: -5, trust: -5, autonomy: -4 }
            },
            {
                title: "\"Мы столько трудов в тебя вложили, а ты вот как воздаёшь? Мне стыдно за тебя перед людьми\"",
                why: "Стыдливое вразумление кажется благопристойнее крика.",
                minus: "Укореняется мысль «я недостоин»; отрок замыкается и таит свои тяготы.",
                effects: { control: 3, support: -5, trust: -6, autonomy: -3 }
            },
            {
                title: "\"Разберёмся без гнева: отчего сей предмет стал камнем преткновения? Поведай как есть\"",
                why: "Беседа без клейма помогает узреть корень беды: усталость, распрю с учителем либо утрату интереса.",
                minus: "Требует терпения; без ясного плана смута может затянуться.",
                effects: { control: 0, support: 5, trust: 5, autonomy: 3 }
            },
            {
                title: "\"Сие твои отметки, твоя стезя. Не желаешь учиться — не учись, я не стану неволить\"",
                why: "Мысль «пусть сам рассудит, то его ноша» выглядит почтением к самостоятельности.",
                minus: "Сие может быть принято за холодное безразличие; без опоры тревога растёт, а стремление к учению гаснет.",
                effects: { control: -5, support: -3, trust: -1, autonomy: 6 }
            }
        ]
    },
    {
        title: "Испытание пятое: Монета лжи",
        text: "Вы вручили отроку деньги на школьный выезд, но от наставника случайно узнали, что он туда не явился. Монету он истратил иначе, а вам поведал, будто всё прошло чинно. На прямой вопрос он краснеет и уклоняется от ответа.",
        options: [
            {
                title: "\"Ты солгал мне. Отныне я не верю ни единому твоему слову. Больше не получишь ни монеты\"",
                why: "Ложь кажется опасным знамением, коему надлежит пресечься немедля.",
                minus: "Отрок учится не правде, но хитрой лжи; доверие рушится по обе стороны.",
                effects: { control: 5, support: -5, trust: -7, autonomy: -4 }
            },
            {
                title: "\"Отныне я стану проверять всякую трату. Докладывай за каждый грош\"",
                why: "Тотальный счёт расходов даёт видимость, будто обман станет невозможен.",
                minus: "Дитя чувствует себя виновным под стражей; крепнет мысль «мне не верят, стало быть я дурен».",
                effects: { control: 6, support: -3, trust: -5, autonomy: -6 }
            },
            {
                title: "\"Я заметил, что ты сказал неправду про выезд. Давай побеседуем без наказания — я хочу понять\"",
                why: "Разговор о ценности истины без кары сохраняет связь и даёт шанс объясниться.",
                minus: "Без чётко оговорённых рубежей отрок может счесть, что ложь осталась без последствий.",
                effects: { control: 1, support: 5, trust: 4, autonomy: 2 }
            },
            {
                title: "\"(Ничего не молвить, сделать вид, будто не заметил)\"",
                why: "Так избегают распри и хранят внешнюю тишину в доме.",
                minus: "Отрок не видит, что ложь есть беда; границы меркнут, а родительская тревога копится.",
                effects: { control: -4, support: -1, trust: 0, autonomy: 3 }
            }
        ]
    },
    {
        title: "Испытание шестое: Отречение от искусства",
        text: "Ваше дитя уже три года обучается музыке. Ныне всё чаще говорит, что желает оставить сие дело: «Я изнемог, мне тягостно, это не моё». Вы вложили много сил и монеты, и вам мнится неверным бросать за год до завершения.",
        options: [
            {
                title: "\"Ты довершишь обучение, я сказал! Мы столько монет истратили — никаких «не желаю»\"",
                why: "Желание взрастить стойкость и доводить начатое до конца.",
                minus: "Настойчивость обращается в насилие; дитя может возненавидеть музыку и отринуть всякое творчество.",
                effects: { control: 6, support: -5, trust: -4, autonomy: -6 }
            },
            {
                title: "\"Подумай: бабушка так радовалась твоим успехам. Неужто хочешь опечалить её?\"",
                why: "Указание на вложенные труды и чувства близких кажется весомым доводом.",
                minus: "Отрок носит вину за собственные желания и учится терпеть, а не внимать себе.",
                effects: { control: 3, support: -3, trust: -3, autonomy: -5 }
            },
            {
                title: "\"Поведай: что именно тебя тяготит? Быть может, нужна малая передышка, а не полный отказ?\"",
                why: "Диалог помогает отличить временную немощь от подлинного нежелания и найти согласие.",
                minus: "Если душа и вправду выгорела, даже компромисс может стать тяжкой повинностью.",
                effects: { control: 0, support: 5, trust: 5, autonomy: 4 }
            },
            {
                title: "\"Хорошо, ступай своей дорогой. Я не стану неволить\"",
                why: "Доверие к выбору укрепляет ответственность за собственный путь.",
                minus: "Коль решение поспешно и причины не разобраны, позже придёт сожаление, но вернуться будет трудно.",
                effects: { control: -4, support: 2, trust: 3, autonomy: 6 }
            }
        ]
    }
        ];

const resultTexts = {
    authoritarian: {
        title: "Модель дознания",
        description: "В сем укладе превалируют надзор и кара, тогда как доверие и поддержка ослаблены. Упор делается на запрет и внешнее принуждение, а не на разумный разговор.\n\nТакой порядок нередко взращивает страх ошибки и скрытность: отрок учится повиноваться, но слабо разумеет собственные побуждения."
    },
    authoritative: {
        title: "Модель наставничества",
        description: "Здесь соблюдён баланс границ и милосердной опоры при крепком доверии. Сей уклад считается наиболее созидательным в исследованиях воспитания.\n\nОтрок получает душевную поддержку, постигает смысл требований и постепенно утверждается в ответственности."
    },
    permissive: {
        title: "Модель небрежения",
        description: "В сем порядке воли много, а надзора и направляющей поддержки мало. Свобода широка, однако ориентиры и строй правил слабы.\n\nОтрок может рано стать самостоятельным, но без прочных берегов и ясного устава."
    },
    distant: {
        title: "Модель отстранения",
        description: "Поддержка и доверие здесь скудны, а участие родителя ослабевает. Связь истончается, и дом теряет силу опоры.\n\nСие может усилить одиночество и перенести поиск опоры из семьи во внешнюю среду."
    },
    mixed: {
        title: "Эклектичный уклад",
        description: "Итоговые веса не сошлись в один чистый образ. В ваших решениях сопряжены разные способы наставления.\n\nВ жизни сие встречается часто: решает не единичный шаг, но повторяющийся стиль общения, что день за днём формует душу."
    }
};

const state = {
    introIndex: 0,
    caseIndex: 0,
    selectedOption: null,
    choiceConfirmed: false,
    score: { control: 8, support: 8, trust: 8, autonomy: 8 }
};

const screen = document.getElementById("screen");
const stepBadge = document.getElementById("stepBadge");
const progressBadge = document.getElementById("progressBadge");

function clampScores() {
    Object.keys(state.score).forEach((key) => {
        state.score[key] = Math.max(0, Math.min(30, state.score[key]));
    });
}

function statLabel(key) {
    return {
        control: "Контроль",
        support: "Поддержка",
        trust: "Доверие",
        autonomy: "Автономия"
    }[key];
}

function getInterpretation(key, value) {
    if (key === "control") {
        if (value <= 10) return "Свобода";
        if (value <= 20) return "Умеренный";
        return "Давление";
    }
    if (key === "support") {
        if (value <= 10) return "Дефицит";
        if (value <= 20) return "Достаточная";
        return "Опора";
    }
    if (key === "trust") {
        if (value <= 10) return "Разрыв";
        if (value <= 20) return "Хрупкое";
        return "Крепкое";
    }
    if (value <= 10) return "Зависимость";
    if (value <= 20) return "Растущая";
    return "Самостоятельность";
}

function mixColor(startRgb, endRgb, t) {
    const clamped = Math.max(0, Math.min(1, t));
    const r = Math.round(startRgb[0] + (endRgb[0] - startRgb[0]) * clamped);
    const g = Math.round(startRgb[1] + (endRgb[1] - startRgb[1]) * clamped);
    const b = Math.round(startRgb[2] + (endRgb[2] - startRgb[2]) * clamped);
    return `rgb(${r}, ${g}, ${b})`;
}

function meterColor(key, value) {
    if (key === "control") {
        return "#8b3a3a";
    }
    if (key === "support") {
        return "#b8963c";
    }
    if (key === "trust") {
        return "#6b8c4a";
    }
    return "#5c6a8a";
}

function renderMeters() {
    return `
        <div class="meters">
            ${Object.keys(state.score).map((key) => {
                const value = state.score[key];
                const target = Math.round((value / 30) * 100);
                return `
                    <div class="meter">
                        <div class="meter-top">
                            <span class="meter-name">${statLabel(key)}</span>
                            <span class="meter-value">${value} / 30</span>
                        </div>
                        <div class="meter-track">
                            <div
                                class="meter-fill"
                                data-target-width="${target}"
                                style="background:${meterColor(key, value)}"
                            ></div>
                        </div>
                        <div class="meter-label">${getInterpretation(key, value)}</div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function animateMeters() {
    const fills = Array.from(document.querySelectorAll(".meter-fill"));
    const duration = 1000;
    const started = performance.now();

    fills.forEach((fill) => {
        fill.style.width = "0%";
    });

    function tick(now) {
        const progress = Math.min(1, (now - started) / duration);
        fills.forEach((fill) => {
            const target = Number(fill.dataset.targetWidth || "0");
            fill.style.width = `${target * progress}%`;
        });
        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
}

function renderIntro() {
    const item = intros[state.introIndex];
    stepBadge.textContent = "Преамбула";
    progressBadge.textContent = `Испытание ${state.introIndex + 1} из ${intros.length}`;
    screen.innerHTML = `
        <h1 class="title">Трактат о воспитании души</h1>
        <div class="card">
            <h2 class="case-title">${item.title}</h2>
            <p class="case-text">${item.text}</p>
        </div>
        <div class="actions">
            <button class="primary" id="nextIntroBtn">${state.introIndex < intros.length - 1 ? "Продолжить испытание" : "Приступить к испытанию"}</button>
        </div>
    `;

    document.getElementById("nextIntroBtn").addEventListener("click", () => {
        if (state.introIndex < intros.length - 1) {
            state.introIndex += 1;
            render();
        } else {
            renderCase();
        }
    });
}

function renderCase() {
    const item = situations[state.caseIndex];
    stepBadge.textContent = "Испытание";
    progressBadge.textContent = `Испытание ${state.caseIndex + 1} из ${situations.length}`;

    const optionCards = item.options.map((option, index) => `
        <button class="option ${state.selectedOption === index ? "selected" : ""} ${state.choiceConfirmed ? "confirmed" : ""}" data-option="${index}">
            <div class="option-title">${option.title}</div>
            <div class="option-note">${option.why}</div>
        </button>
    `).join("");

    const feedback = state.choiceConfirmed
        ? `<div class="feedback">Отчего сей путь кажется правым: ${item.options[state.selectedOption].why}\n\nПредел сего подхода: ${item.options[state.selectedOption].minus}</div>`
        : "";

    const actionButtons = state.choiceConfirmed
        ? `<button class="primary" id="continueBtn">${state.caseIndex < situations.length - 1 ? "Продолжить испытание" : "Узреть итог"}</button>`
        : `<button class="primary" id="confirmBtn" ${state.selectedOption === null ? "disabled" : ""}>✠ Подтвердить выбор ✠</button>`;

    screen.innerHTML = `
        <h1 class="title">Родительское воспитание</h1>
        <p class="stats-hidden-note">Добродетели и пороки взвешиваются на весах незримых.</p>
        <div class="card">
            <h2 class="case-title">${item.title}</h2>
            <p class="case-text">${item.text}</p>
        </div>
        <div class="options">${optionCards}</div>
        ${feedback}
        <div class="actions">${actionButtons}</div>
    `;

    screen.querySelectorAll(".option").forEach((button) => {
        button.addEventListener("click", () => {
            if (state.choiceConfirmed) {
                return;
            }
            const idx = Number(button.dataset.option);
            chooseOption(idx);
        });
    });

    const confirmEl = document.getElementById("confirmBtn");
    if (confirmEl) {
        confirmEl.addEventListener("click", confirmChoice);
    }

    const continueEl = document.getElementById("continueBtn");
    if (continueEl) {
        continueEl.addEventListener("click", () => {
            if (state.caseIndex < situations.length - 1) {
                state.caseIndex += 1;
                state.selectedOption = null;
                state.choiceConfirmed = false;
                renderCase();
            } else {
                renderResult();
            }
        });
    }
}

function chooseOption(optionIndex) {
    state.selectedOption = optionIndex;
    renderCase();
}

function confirmChoice() {
    if (state.selectedOption === null || state.choiceConfirmed) {
        return;
    }
    const current = situations[state.caseIndex].options[state.selectedOption];
    Object.keys(current.effects).forEach((key) => {
        state.score[key] += current.effects[key];
    });
    clampScores();
    state.choiceConfirmed = true;
    renderCase();
}

function detectModel() {
    const s = state.score;
    const scores = {
        authoritarian: 0,
        authoritative: 0,
        permissive: 0,
        distant: 0
    };
     if (s.control >= 14) scores.authoritarian += 2;
    if (s.control >= 18) scores.authoritarian += 2;
        if (s.trust <= 12) scores.authoritarian += 2;
        if (s.support <= 12) scores.authoritarian += 2;
        if (s.support >= 14) scores.authoritative += 2;
        if (s.trust >= 14) scores.authoritative += 2;
        if (s.control >= 9 && s.control <= 16) scores.authoritative += 2;
        if (s.autonomy >= 10) scores.authoritative += 1;
        if (s.control <= 10) scores.permissive += 3;
        if (s.autonomy >= 15) scores.permissive += 3;
        if (s.support <= 13) scores.permissive += 1;
        if (s.support <= 10) scores.distant += 4;
        if (s.trust <= 10) scores.distant += 4;
        if (s.control <= 14) scores.distant += 2;
        let bestModel = "mixed";
        let bestScore = 3;
        Object.keys(scores).forEach(model => {
            if (scores[model] > bestScore) {
                bestModel = model;
                bestScore = scores[model];
            }
        });
        return bestModel;
    }

function renderResult() {
    const modelKey = detectModel();
    const info = resultTexts[modelKey];
    stepBadge.textContent = "Вердикт";
    progressBadge.textContent = "Итоговый вердикт";

    screen.innerHTML = `
        <h1 class="result-title">Итоговый вердикт</h1>
        ${renderMeters()}
        <div class="card">
            <p class="result-name">${info.title}</p>
            <p class="case-text">${info.description}</p>
        </div>
        <p class="footnote">Вердикт составлен по вашим решениям и логике воспитательных укладов, описанных в трудах Дианы Баумринд.\n\nСколь бы ни различались пути, решающим остаётся повторяющийся строй общения: именно он формует доверие, достоинство и будущий нрав отрока.</p>
        <div class="actions">
            <button class="secondary" id="restartBtn">Пройти испытание заново</button>
        </div>
    `;

    animateMeters();

    document.getElementById("restartBtn").addEventListener("click", () => {
        state.introIndex = 0;
        state.caseIndex = 0;
        state.selectedOption = null;
        state.choiceConfirmed = false;
        state.score = { control: 8, support: 8, trust: 8, autonomy: 8 };
        render();
    });
}

function render() {
    if (state.introIndex < intros.length) {
        renderIntro();
    } else {
        renderCase();
    }
}

render();
