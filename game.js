const gameTexts = {
    modern: {
        gameTitle: "Грани воспитания",
        intro1_title: "Введение",
        intro1_text: "Суть инквизиторского процесса заключалась в том, что человека ограничивали и наказывали ради его \"исправления\" и \"спасения\". При этом его чувства, личные границы и право на собственное мнение игнорировались.\n\nВ современной психологии воспитания можно увидеть похожие механизмы. Родители нередко используют контроль, давление или запреты, объясняя это заботой о ребёнке и желанием защитить его от ошибок.",
        intro2_title: "Цель игры",
        intro2_text: "Цель игры — показать, что разные способы реакции взрослых на поведение подростка формируют разные модели отношений внутри семьи.\n\nМетоды, которые кажутся эффективными и \"правильными\", могут влиять на уровень доверия, самооценку и способы поведения ребёнка в будущем.",
        intro3_title: "Правила игры",
        intro3_text: "В ходе игры вам будут предложены конфликтные ситуации из жизни подростка 14–15 лет. В каждой ситуации выберите вариант родительской реакции, который вам ближе.\n\nКаждое решение влияет на параметры взаимодействия: доверие, поддержку, контроль и самостоятельность.\n\nПосле выбора вы видите психологическое объяснение, а в финале — итоговый профиль отношений в семье.",
        badge_intro: "Введение",
        badge_game: "Игра",
        badge_result: "Итог",
        stepLabel: "Шаг",
        ofLabel: "из",
        statsHidden: "Показатели будут раскрыты в конце игры",
        confirmButton: "Подтвердить выбор",
        nextButton: "Следующая ситуация",
        viewResultButton: "Посмотреть итог",
        restartButton: "Пройти заново",
        chooseOption: "Выберите вариант",
        startGame: "Начать игру",
        continueButton: "Далее",
        feedbackWhy: "Почему кажется правильным",
        feedbackMinus: "Ограничение подхода",
        statControl: "Контроль",
        statSupport: "Поддержка",
        statTrust: "Доверие",
        statAutonomy: "Автономия",
        controlLow: "Свобода",
        controlMid: "Умеренный",
        controlHigh: "Давление",
        supportLow: "Дефицит",
        supportMid: "Достаточная",
        supportHigh: "Опора",
        trustLow: "Разрыв",
        trustMid: "Хрупкое",
        trustHigh: "Крепкое",
        autonomyLow: "Зависимость",
        autonomyMid: "Растущая",
        autonomyHigh: "Самостоятельность",
        situations: [
            {
                title: "Ситуация 1 — Сигареты",
                text: "Вашему сыну 15 лет. В последнее время он стал чаще закрываться в комнате, раздражаться от обычных вопросов и меньше рассказывать о своём дне.\n\nОднажды вечером он возвращается домой позже обычного. Вы чувствуете запах сигарет, а подросток отводит взгляд и быстро уходит в комнату.",
                options: [
                    { title: "\"Ты с ума сошёл? Какие сигареты? Теперь никаких прогулок месяц!\"", why: "Кажется, что сильное впечатление отобьёт желание курить.", minus: "Формируется опыт давления и унижения, причина поведения не разбирается." },
                    { title: "\"Я буду проверять твои вещи и телефон, пока не пойму, что происходит\"", why: "Контроль воспринимается как быстрый способ остановить риск.", minus: "Подросток учится скрывать поведение вместо осознания причин." },
                    { title: "\"Я волнуюсь из-за запаха. Расскажи, пожалуйста, что случилось?\"", why: "Диалог помогает сохранить контакт и понять мотивы.", minus: "Если не обозначить рамки, проблема может не восприниматься серьёзно." }
                ]
            },
            {
                title: "Ситуация 2 — Внешние изменения",
                text: "Вашей дочери 15 лет. Она покрасила волосы в яркий цвет, сменила стиль одежды и экспериментирует с внешностью.\n\nВ школе делают замечания, а дома она говорит, что это её самовыражение. У вас появляется тревога и чувство дистанции.",
                options: [
                    { title: "\"Пока не переоденешься нормально — из дома не выйдешь. Это не обсуждается\"", why: "Кажется, что резкие ограничения быстро вернут \"норму\".", minus: "Подросток может воспринять это как подавление личности и усилить протест." },
                    { title: "\"Ты что, не понимаешь, как это выглядит? Люди будут думать о тебе непонятно что\"", why: "Слова и споры кажутся мягче прямых запретов.", minus: "Из-за постоянного давления ребёнок ещё сильнее закрывается." },
                    { title: "\"Мне непривычно видеть тебя в таком стиле, но расскажи — почему для тебя это важно?\"", why: "Подход сохраняет контакт и пространство для самовыражения.", minus: "Нужны ясные рамки, иначе эксперименты могут выходить за нормы." }
                ]
            },
            {
                title: "Ситуация 3 — Смена окружения",
                text: "Подросток стал меньше рассказывать о школе, часто задерживается вне дома и больше общается с новой компанией.\n\nНа прямые вопросы отвечает коротко и уходит от темы.",
                options: [
                    { title: "\"Я хочу знать, где ты и с кем. Будешь отзваниваться каждый час\"", why: "При нехватке информации кажется логичным быстро всё выяснить.", minus: "Даже нейтральные разговоры начинают восприниматься как контроль." },
                    { title: "\"Давай договоримся о правилах: ты говоришь, куда идёшь и когда вернёшься. Это не про недоверие — это про безопасность\"", why: "Структура снижает тревогу и создаёт предсказуемые рамки.", minus: "Отношения могут перейти в формат отчётности вместо доверия." },
                    { title: "\"Мне тревожно, но я понимаю, что у тебя появляется свой круг. Просто знай: я рядом, если что\"", why: "Принятие поддерживает контакт и учитывает возрастные процессы.", minus: "Без границ риски окружения могут недооцениваться." },
                    { title: "\"Ладно, раз ты не хочешь говорить — я не лезу. У тебя своя жизнь\"", why: "Полная самостоятельность выглядит как доверие взрослению.", minus: "Снижается ощущение поддержки и эмоциональной опоры." }
                ]
            },
            {
                title: "Ситуация 4 — Провал в учёбе",
                text: "Подросток приносит дневник с тремя двойками подряд по важному предмету. На ваши вопросы отвечает раздражённо: «Отстаньте, это скучно, мне это не пригодится». При этом вы знаете, что он способный, но последние недели совсем забросил уроки.",
                options: [
                    { title: "\"Если ещё одна двойка — выброшу твои игры и телефон. Ты меня понял?\"", why: "Кажется, что без давления ребёнок не поймёт серьёзность ситуации.", minus: "Учебная мотивация подменяется страхом, а не интересом. Подросток привыкает учиться только из-под палки." },
                    { title: "\"Мы столько в тебя вкладываем, а ты вот так отвечаешь? Мне стыдно за тебя\"", why: "Стыд и апелляция к совести кажутся более «воспитанным» способом, чем крик.", minus: "Формируется убеждение «я недостаточно хорош». Подросток замыкается и перестаёт рассказывать о трудностях." },
                    { title: "\"Давай разберёмся спокойно: что происходит? Почему именно этот предмет стал проблемой?\"", why: "Диалог без оценок помогает понять, что стоит за провалом: усталость, конфликт с учителем, отсутствие интереса.", minus: "Требует от родителя терпения. Если не завершить разговор конкретным планом, ситуация может затянуться." },
                    { title: "\"Это твои оценки, твоя жизнь. Не хочешь учиться — не учись\"", why: "Идея «пусть сам разбирается, это его ответственность» выглядит как уважение к самостоятельности.", minus: "Подросток может воспринять это как безразличие. Без поддержки тревога растёт, а мотивация падает ещё сильнее." }
                ]
            },
            {
                title: "Ситуация 5 — Ложь о деньгах",
                text: "Вы дали подростку деньги на школьную экскурсию, но случайно узнали от классного руководителя, что он туда не поехал. Деньги он потратил на что-то другое, а вам сказал, что всё прошло нормально. Когда вы задаёте прямой вопрос — он краснеет и уходит от ответа.",
                options: [
                    { title: "\"Ты мне врал. Теперь я не верю ни одному твоему слову. Карманных денег больше не будет\"", why: "Обман кажется опасным сигналом, который нужно искоренить немедленно.", minus: "Подросток учится не честности, а изощрённой лжи. Доверие рушится с обеих сторон." },
                    { title: "\"Я буду проверять каждую копейку, которую ты тратишь. Чек за каждый рубль\"", why: "Контроль расходов создаёт иллюзию, что обман станет невозможен технически.", minus: "Ребёнок чувствует себя преступником под надзором. Формируется установка «мне не доверяют, значит я плохой»." },
                    { title: "\"Я заметил, что ты сказал неправду про экскурсию. Давай поговорим — я не наказываю, я хочу понять\"", why: "Обсуждение ценности правды без наказания сохраняет контакт и даёт шанс объясниться.", minus: "Если не проговорить границы чётко, подросток может решить, что ложь сошла с рук." },
                    { title: "\"(Ничего не говорить, сделать вид, что не заметил)\"", why: "Хочется избежать конфликта и сохранить видимость мира в семье.", minus: "Подросток не получает сигнала о том, что обман — это проблема. Границы размываются, а тревога родителя копится." }
                ]
            },
            {
                title: "Ситуация 6 — Подросток хочет бросить кружок",
                text: "Ваш ребёнок уже три года ходит в музыкальную школу. В последнее время он всё чаще говорит, что хочет бросить: «Меня бесит, я устал, это не моё». Вы вложили много сил и денег, и вам кажется, что бросать за год до выпуска — неправильно.",
                options: [
                    { title: "\"Ты доучишься до конца, я сказал. Мы столько денег потратили — никаких 'не хочу'\"", why: "Желание воспитать усидчивость и довести начатое до конца.", minus: "Упорство превращается в насилие. Ребёнок может возненавидеть музыку на всю жизнь и потерять интерес к любому творчеству." },
                    { title: "\"Ты подумай: бабушка так радовалась твоим успехам. Ты её расстроить хочешь?\"", why: "Напоминание о вложенных усилиях и деньгах кажется весомым аргументом.", minus: "Подросток чувствует вину за собственные желания. Привыкает терпеть вместо того, чтобы прислушиваться к себе." },
                    { title: "\"Давай обсудим: что именно тебя бесит? Может, хватит небольшого перерыва, а не полного ухода?\"", why: "Диалог помогает отделить временную усталость от реального нежелания и найти компромисс.", minus: "Если подросток действительно выгорел, даже компромисс будет восприниматься как обязанность." },
                    { title: "\"Хорошо, это твой выбор. Я не буду заставлять\"", why: "Доверие к выбору ребёнка укрепляет его ответственность за свои решения.", minus: "Если решение импульсивное, без обсуждения причин, подросток может позже жалеть, но не решиться вернуться." }
                ]
            }
        ],
        result_header: "Итог игры",
        result_footnote: "Модель построена на основе ваших решений и логики стилей воспитания, описанных в работах Дианы Баумринд.\n\nНесмотря на различия подходов, ключевым фактором остаётся повторяющийся стиль общения: именно качество взаимодействия формирует доверие, самооценку и стратегию поведения подростка в будущем.",
        models: {
            authoritarian: { title: "Авторитарная модель", description: "Преобладают высокий контроль при низком доверии и поддержке. В такой системе акцент делается на запретах и внешнем давлении, а не на диалоге.\n\nЭто может формировать страх ошибки и скрытность: подросток учится подчиняться, но не всегда понимает собственные мотивы и эмоции." },
            authoritative: { title: "Авторитетная модель", description: "Наблюдается баланс границ и поддержки при высоком доверии. Этот стиль считается наиболее конструктивным в исследованиях Баумринд.\n\nПодросток получает эмоциональную опору, понимает смысл требований и постепенно осваивает ответственность." },
            permissive: { title: "Попустительская модель", description: "Преобладает высокая автономия при слабом контроле и пониженной поддержке. Свободы много, но внешние ориентиры и структурирование недостаточны.\n\nПодросток может рано становиться самостоятельным, но без устойчивой системы границ." },
            distant: { title: "Дистанционная модель", description: "Низкие поддержка и доверие при слабом или умеренном контроле. Эмоциональная вовлечённость родителя снижается, контакт ослабевает.\n\nЭто может усиливать чувство одиночества и переносить опору с семьи на внешнюю среду." },
            mixed: { title: "Смешанный стиль воспитания", description: "Итоговые баллы не совпали с одним чистым профилем. Это значит, что в ваших решениях сочетаются разные стратегии.\n\nВ реальной жизни это часто встречается: ключевое значение имеет повторяющийся стиль взаимодействия, а не единичное решение." }
        }
    },
    medieval: {
        gameTitle: "Ordo Parentis",
        intro1_title: "Введение",
        intro1_text: "Суть инквизиторского действа была в том, что человека ограничивали и карали во имя его «исправления» и «спасения души». Чувства, личные пределы и право на собственное суждение не принимались во внимание.\n\nВ современном искусстве воспитания можно узреть сходные черты. Родители нередко прибегают к надзору, давлению и воспретам, оправдывая сие заботой о чаде и стремлением оградить его от ошибок.",
        intro2_title: "Цель игры",
        intro2_text: "Цель сего испытания — показать, что различные способы наставления юной души рождают различные уклады внутри семьи.\n\nМетоды, кажущиеся действенными и «верными», способны влиять на доверие, чувство собственного достоинства и поведение отпрыска в грядущем.",
        intro3_title: "Правила испытания",
        intro3_text: "В ходе испытания вам будут предложены спорные положения из жизни отрока 14–15 зим. В каждом случае изберите тот образ действия, что ближе вашему сердцу.\n\nВсякое решение сказывается на свойствах взаимодействия: доверии, опоре, надзоре и самостоятельности.\n\nПосле выбора вы узрите толкование, а в завершении — итоговый уклад семейных уз.",
        badge_intro: "Введение",
        badge_game: "Испытание",
        badge_result: "Вердикт",
        stepLabel: "Испытание",
        ofLabel: "из",
        statsHidden: "Добродетели и пороки взвешиваются на весах незримых",
        confirmButton: "Заверить решение",
        nextButton: "Следующее испытание",
        viewResultButton: "Узреть итог",
        restartButton: "Пройти испытание заново",
        chooseOption: "Изберите путь",
        startGame: "Приступить к испытанию",
        continueButton: "Продолжить",
        feedbackWhy: "Отчего сие мнится верным",
        feedbackMinus: "Пределы сего пути",
        statControl: "Надзор",
        statSupport: "Опора",
        statTrust: "Доверие",
        statAutonomy: "Самостояние",
        controlLow: "Вольница",
        controlMid: "Умеренный надзор",
        controlHigh: "Гнёт",
        supportLow: "Оскудение",
        supportMid: "Достаточная опора",
        supportHigh: "Твердыня",
        trustLow: "Разрыв уз",
        trustMid: "Зыбкое",
        trustHigh: "Нерушимое",
        autonomyLow: "Зависимость",
        autonomyMid: "Растущая воля",
        autonomyHigh: "Самостояние",
        situations: [
            {
                title: "Испытание первое: Дым соблазна",
                text: "Ваш отпрыск, достигнув пятнадцати зим, всё чаще затворяет врата своей кельи, тяготится расспросами и утаивает мысли свои.\n\nВ один из вечеров он возвращается позднее обычного; от одежды его тянет дымом, а взор уклоняется и спешит прочь.",
                options: [
                    { title: "\"Ты впал в безумие? Дым сатанинский? Не покинешь обитель до следующего полнолуния!\"", why: "Суровая кара по видимости способна сразу отвратить от порока.", minus: "Се взращивает страх и унижение, но не открывает исток соблазна." },
                    { title: "\"Отныне осмотрю твои пожитки и письмена, доколе не узнаю всей правды\"", why: "Строжайший надзор кажется кратчайшим путём пресечь беду.", minus: "Отрок учится таиться, а не разуметь, отчего сбился с пути." },
                    { title: "\"Сердце моё смущено сим запахом. Поведай, что с тобою приключилось\"", why: "Спокойный разговор хранит связь и помогает постичь побуждения.", minus: "Без ясных рубежей проступок может показаться делом малым." }
                ]
            },
            {
                title: "Испытание второе: Облик еретический",
                text: "Дщери вашей пятнадцать зим. Она изменила цвет волос, сменила одеяния и являет новый облик, непривычный дому.\n\nВ школе ей делают выговоры, а дома она твердит, что ищет собственный путь выражения. В вас же растут тревога и отчуждение.",
                options: [
                    { title: "\"Пока не облечёшься пристойно, порог дома не переступишь. Сие не обсуждается\"", why: "Резкий запрет кажется скорым возвращением к порядку.", minus: "Отроковица воспринимает сие как подавление воли и крепнет в бунте." },
                    { title: "\"Неужто не ведаешь, каков сей вид? Люди осудят тебя сурово\"", why: "Увещевание и спор кажутся мягче прямого воспрета.", minus: "От непрестанного нажима дитя ещё глубже уходит в молчание." },
                    { title: "\"Мне непривычен сей облик, но поведай: отчего он столь важен тебе?\"", why: "Такой подход хранит близость и оставляет место самовыражению.", minus: "Надлежит обозначить границы, иначе опыты выйдут за меру." }
                ]
            },
            {
                title: "Испытание третье: Чуждое окружение",
                text: "Отрок всё реже повествует о школьных делах, всё чаще медлит вне дома и держится новой компании.\n\nНа прямые вопрошания отвечает скупо и ускользает от сути.",
                options: [
                    { title: "\"Желаю знать, где ты и с кем. Каждый час будешь подавать весть\"", why: "Во тьме неведения тотальный учёт кажется разумным средством.", minus: "Даже мирная беседа начинает звучать как допрос и надзор." },
                    { title: "\"Установим порядок: говори, куда идёшь и когда вернёшься. Сие не от неверия, но ради сохранности\"", why: "Чёткий устав уменьшает тревогу и вносит предсказуемость.", minus: "Есть риск, что связь обратится в сухую отчётность вместо доверия." },
                    { title: "\"Мне тревожно, но вижу: у тебя складывается свой круг. Помни, я рядом, коли понадобится\"", why: "Принятие укрепляет связь и учитывает ход взросления.", minus: "Без оговорённых пределов опасности окружения можно недооценить." },
                    { title: "\"Что ж, коль не желаешь говорить, не стану вмешиваться. Живи своим уставом\"", why: "Полная вольность выглядит знаком доверия к зрелости.", minus: "Ослабевает чувство опоры: дитя может остаться один на один с смутой." }
                ]
            },
            {
                title: "Испытание четвёртое: Падение в учении",
                text: "Отрок приносит записи с тремя худыми отметками кряду по важному предмету. На расспросы отвечает с раздражением: «Оставьте, сие скучно и мне не нужно». Меж тем вы ведаете, что он способен, но в последние седмицы оставил учение.",
                options: [
                    { title: "\"Ещё одна худая отметка — и я выброшу твои игры и свитки. Уразумел?\"", why: "Кажется, без сурового нажима дитя не уразумеет тяжесть проступка.", minus: "Рвение к знанию подменяется страхом; учение держится на принуждении, а не на смысле." },
                    { title: "\"Мы столько трудов в тебя вложили, а ты вот как воздаёшь? Мне стыдно за тебя перед людьми\"", why: "Стыдливое вразумление кажется благопристойнее крика.", minus: "Укореняется мысль «я недостоин»; отрок замыкается и таит свои тяготы." },
                    { title: "\"Разберёмся без гнева: отчего сей предмет стал камнем преткновения? Поведай как есть\"", why: "Беседа без клейма помогает узреть корень беды: усталость, распрю с учителем либо утрату интереса.", minus: "Требует терпения; без ясного плана смута может затянуться." },
                    { title: "\"Сие твои отметки, твоя стезя. Не желаешь учиться — не учись, я не стану неволить\"", why: "Мысль «пусть сам рассудит, то его ноша» выглядит почтением к самостоятельности.", minus: "Сие может быть принято за холодное безразличие; без опоры тревога растёт, а стремление к учению гаснет." }
                ]
            },
            {
                title: "Испытание пятое: Монета лжи",
                text: "Вы вручили отроку деньги на школьный выезд, но от наставника случайно узнали, что он туда не явился. Монету он истратил иначе, а вам поведал, будто всё прошло чинно. На прямой вопрос он краснеет и уклоняется от ответа.",
                options: [
                    { title: "\"Ты солгал мне. Отныне я не верю ни единому твоему слову. Больше не получишь ни монеты\"", why: "Ложь кажется опасным знамением, коему надлежит пресечься немедля.", minus: "Отрок учится не правде, но хитрой лжи; доверие рушится по обе стороны." },
                    { title: "\"Отныне я стану проверять всякую трату. Докладывай за каждый грош\"", why: "Тотальный счёт расходов даёт видимость, будто обман станет невозможен.", minus: "Дитя чувствует себя виновным под стражей; крепнет мысль «мне не верят, стало быть я дурен»." },
                    { title: "\"Я заметил, что ты сказал неправду про выезд. Давай побеседуем без наказания — я хочу понять\"", why: "Разговор о ценности истины без кары сохраняет связь и даёт шанс объясниться.", minus: "Без чётко оговорённых рубежей отрок может счесть, что ложь осталась без последствий." },
                    { title: "\"(Ничего не молвить, сделать вид, будто не заметил)\"", why: "Так избегают распри и хранят внешнюю тишину в доме.", minus: "Отрок не видит, что ложь есть беда; границы меркнут, а родительская тревога копится." }
                ]
            },
            {
                title: "Испытание шестое: Отречение от искусства",
                text: "Ваше дитя уже три года обучается музыке. Ныне всё чаще говорит, что желает оставить сие дело: «Я изнемог, мне тягостно, это не моё». Вы вложили много сил и монеты, и вам мнится неверным бросать за год до завершения.",
                options: [
                    { title: "\"Ты довершишь обучение, я сказал! Мы столько монет истратили — никаких «не желаю»\"", why: "Желание взрастить стойкость и доводить начатое до конца.", minus: "Настойчивость обращается в насилие; дитя может возненавидеть музыку и отринуть всякое творчество." },
                    { title: "\"Подумай: бабушка так радовалась твоим успехам. Неужто хочешь опечалить её?\"", why: "Указание на вложенные труды и чувства близких кажется весомым доводом.", minus: "Отрок носит вину за собственные желания и учится терпеть, а не внимать себе." },
                    { title: "\"Поведай: что именно тебя тяготит? Быть может, нужна малая передышка, а не полный отказ?\"", why: "Диалог помогает отличить временную немощь от подлинного нежелания и найти согласие.", minus: "Если душа и вправду выгорела, даже компромисс может стать тяжкой повинностью." },
                    { title: "\"Хорошо, ступай своей дорогой. Я не стану неволить\"", why: "Доверие к выбору укрепляет ответственность за собственный путь.", minus: "Коль решение поспешно и причины не разобраны, позже придёт сожаление, но вернуться будет трудно." }
                ]
            }
        ],
        result_header: "Вердикт испытания",
        result_footnote: "Сей вердикт построен на ваших решениях и логике семейных укладов, описанных в трудах Дианы Баумринд.\n\nСколь бы ни разнились пути, ключевым остаётся повторяющийся лад общения: именно свойство связи крепит доверие, достоинство и поведение отпрыска в грядущем.",
        models: {
            authoritarian: { title: "Модель дознания", description: "Преобладает высокий надзор при низком доверии и опоре. В таком укладе упор делается на воспреты и внешнее давление, а не на диалог.\n\nСие способно взрастить страх ошибки и скрытность: отрок учится подчиняться, но не всегда разумеет собственные побуждения и чувства." },
            authoritative: { title: "Модель наставничества", description: "Наблюдается равновесие рубежей и опоры при высоком доверии. Сей уклад почитается наиболее здравым в изысканиях Баумринд.\n\nОтрок получает душевную опору, разумеет смысл требований и постепенно осваивает ответственность." },
            permissive: { title: "Модель небрежения", description: "Преобладает высокая самостоятельность при слабом надзоре и пониженной опоре. Вольности много, но внешние ориентиры и устроение недостаточны.\n\nОтрок может рано обрести самостояние, но без крепкой ограды рубежей." },
            distant: { title: "Модель отстранения", description: "Низкая опора и доверие при слабом либо умеренном надзоре. Сердечная вовлечённость родителя угасает, связь истончается.\n\nСие может усилить чувство одиночества и перенести опору с семьи на внешний мир." },
            mixed: { title: "Смешанный уклад", description: "Итоговые числа не совпали ни с одним чистым образом. Сие значит, что в ваших решениях сплетаются разные пути.\n\nВ истинной жизни сие встречается часто: ключевое значение несёт повторяющийся лад общения, а не единичный выбор." }
        }
    }
};

const baseEffects = [
    [{ control: 5, support: -4, trust: -5, autonomy: -4 }, { control: 3, support: -2, trust: -4, autonomy: -5 }, { control: -1, support: 4, trust: 4, autonomy: 2 }],
    [{ control: 5, support: -4, trust: -4, autonomy: -5 }, { control: 3, support: -2, trust: -3, autonomy: -3 }, { control: -2, support: 4, trust: 3, autonomy: 4 }],
    [{ control: 5, support: -4, trust: -5, autonomy: -5 }, { control: 3, support: 0, trust: -2, autonomy: -2 }, { control: -2, support: 5, trust: 4, autonomy: 3 }, { control: -5, support: -3, trust: -1, autonomy: 5 }],
    [{ control: 6, support: -5, trust: -5, autonomy: -4 }, { control: 3, support: -5, trust: -6, autonomy: -3 }, { control: 0, support: 5, trust: 5, autonomy: 3 }, { control: -5, support: -3, trust: -1, autonomy: 6 }],
    [{ control: 5, support: -5, trust: -7, autonomy: -4 }, { control: 6, support: -3, trust: -5, autonomy: -6 }, { control: 1, support: 5, trust: 4, autonomy: 2 }, { control: -4, support: -1, trust: 0, autonomy: 3 }],
    [{ control: 6, support: -5, trust: -4, autonomy: -6 }, { control: 3, support: -3, trust: -3, autonomy: -5 }, { control: 0, support: 5, trust: 5, autonomy: 4 }, { control: -4, support: 2, trust: 3, autonomy: 6 }]
];

const state = {
    introIndex: 0,
    caseIndex: 0,
    selectedOption: null,
    choiceConfirmed: false,
    score: { control: 8, support: 8, trust: 8, autonomy: 8 },
    textStyle: "medieval",
    currentView: "intro"
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
    const t = gameTexts[state.textStyle];
    return {
        control: t.statControl,
        support: t.statSupport,
        trust: t.statTrust,
        autonomy: t.statAutonomy
    }[key];
}

function getInterpretation(key, value) {
    const t = gameTexts[state.textStyle];
    if (key === "control") {
        if (value <= 10) return t.controlLow;
        if (value <= 20) return t.controlMid;
        return t.controlHigh;
    }
    if (key === "support") {
        if (value <= 10) return t.supportLow;
        if (value <= 20) return t.supportMid;
        return t.supportHigh;
    }
    if (key === "trust") {
        if (value <= 10) return t.trustLow;
        if (value <= 20) return t.trustMid;
        return t.trustHigh;
    }
    if (value <= 10) return t.autonomyLow;
    if (value <= 20) return t.autonomyMid;
    return t.autonomyHigh;
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

function getCurrentTexts() {
    return gameTexts[state.textStyle];
}

function getCurrentIntros() {
    const t = getCurrentTexts();
    return [
        { title: t.intro1_title, text: t.intro1_text },
        { title: t.intro2_title, text: t.intro2_text },
        { title: t.intro3_title, text: t.intro3_text }
    ];
}

function getCurrentSituations() {
    const t = getCurrentTexts();
    return t.situations.map((situation, sIdx) => ({
        title: situation.title,
        text: situation.text,
        options: situation.options.map((option, oIdx) => ({
            ...option,
            effects: baseEffects[sIdx][oIdx]
        }))
    }));
}

function renderStyleSwitcher() {
    return `
        <div class="style-switcher" role="group" aria-label="Стиль текста">
            <button class="style-btn ${state.textStyle === "modern" ? "active" : ""}" data-style="modern">📱 Современный</button>
            <button class="style-btn ${state.textStyle === "medieval" ? "active" : ""}" data-style="medieval">🕯️ Средневековый</button>
        </div>
    `;
}

function bindStyleSwitcher() {
    screen.querySelectorAll(".style-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const nextStyle = btn.dataset.style;
            if (nextStyle === state.textStyle) return;
            state.textStyle = nextStyle;
            rerenderCurrentView();
        });
    });
}

function rerenderCurrentView() {
    if (state.currentView === "intro") {
        renderIntro();
        return;
    }
    if (state.currentView === "case") {
        renderCase();
        return;
    }
    renderResult();
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
    state.currentView = "intro";
    const t = getCurrentTexts();
    const intros = getCurrentIntros();
    const item = intros[state.introIndex];
    stepBadge.textContent = t.badge_intro;
    progressBadge.textContent = `${t.stepLabel} ${state.introIndex + 1} ${t.ofLabel} ${intros.length}`;
    screen.innerHTML = `
        ${renderStyleSwitcher()}
        <h1 class="title">${t.gameTitle}</h1>
        <div class="card">
            <h2 class="case-title">${item.title}</h2>
            <p class="case-text">${item.text}</p>
        </div>
        <div class="actions">
            <button class="primary" id="nextIntroBtn">${state.introIndex < intros.length - 1 ? t.continueButton : t.startGame}</button>
        </div>
    `;
    bindStyleSwitcher();

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
    state.currentView = "case";
    const t = getCurrentTexts();
    const situations = getCurrentSituations();
    const item = situations[state.caseIndex];
    stepBadge.textContent = t.badge_game;
    progressBadge.textContent = `${t.stepLabel} ${state.caseIndex + 1} ${t.ofLabel} ${situations.length}`;

    const optionCards = item.options.map((option, index) => `
        <button class="option ${state.selectedOption === index ? "selected" : ""} ${state.choiceConfirmed ? "confirmed" : ""}" data-option="${index}">
            <div class="option-title">${option.title}</div>
            <div class="option-note">${option.why}</div>
        </button>
    `).join("");

    const feedback = state.choiceConfirmed
        ? `<div class="feedback">${t.feedbackWhy}: ${item.options[state.selectedOption].why}\n\n${t.feedbackMinus}: ${item.options[state.selectedOption].minus}</div>`
        : "";

    const actionButtons = state.choiceConfirmed
        ? `<button class="primary" id="continueBtn">${state.caseIndex < situations.length - 1 ? t.nextButton : t.viewResultButton}</button>`
        : `<button class="primary" id="confirmBtn" ${state.selectedOption === null ? "disabled" : ""}>${t.confirmButton}</button>`;

    screen.innerHTML = `
        ${renderStyleSwitcher()}
        <h1 class="title">${t.gameTitle}</h1>
        <p class="stats-hidden-note">${t.statsHidden}</p>
        <div class="card">
            <h2 class="case-title">${item.title}</h2>
            <p class="case-text">${item.text}</p>
        </div>
        <p class="subtitle">${t.chooseOption}</p>
        <div class="options">${optionCards}</div>
        ${feedback}
        <div class="actions">${actionButtons}</div>
    `;
    bindStyleSwitcher();

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
    const current = getCurrentSituations()[state.caseIndex].options[state.selectedOption];
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
    state.currentView = "result";
    const t = getCurrentTexts();
    const modelKey = detectModel();
    const info = t.models[modelKey];
    stepBadge.textContent = t.badge_result;
    progressBadge.textContent = t.result_header;

    screen.innerHTML = `
        ${renderStyleSwitcher()}
        <h1 class="result-title">${t.result_header}</h1>
        ${renderMeters()}
        <div class="card">
            <p class="result-name">${info.title}</p>
            <p class="case-text">${info.description}</p>
        </div>
        <p class="footnote">${t.result_footnote}</p>
        <div class="actions">
            <button class="secondary" id="restartBtn">${t.restartButton}</button>
        </div>
    `;
    bindStyleSwitcher();

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
    if (state.introIndex < getCurrentIntros().length) {
        renderIntro();
    } else {
        renderCase();
    }
}

render();
