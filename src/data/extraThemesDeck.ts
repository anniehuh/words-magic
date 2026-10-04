import { CategoryId, FlashcardConcept } from './starterDeck';
import { NEW_40_VERBS, NEW_40_ADJECTIVES } from './newVerbsAndAdjectives';

export const THEME_EXPANSION_CARDS: FlashcardConcept[] = [
  ...NEW_40_VERBS,
  ...NEW_40_ADJECTIVES,
  // VERBS (Actions)
  {
    id: 'verb-run',
    english: 'Run',
    emoji: '🏃',
    category: 'verbs',
    ko: {
      word: '뛰다',
      phonetic: 'ttwi da',
      dialogue: {
        mom: { text: '공원에서 같이 뛰자!', phonetic: 'gong won e seo gat i ttwi ja!', english: "Let's run together at the park!" },
        kid: { text: '좋아요, 빠르게 뛰어요!', phonetic: 'jo a yo, ppa reu ge ttwi eo yo!', english: "Yay, I'm running fast!" },
      },
      practice: {
        sentenceBefore: '우리 같이 ',
        sentenceBeforePhonetic: 'u ri gat i ',
        sentenceAfter: '요!',
        sentenceAfterPhonetic: 'yo!',
        englishHint: "Let's run together!",
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' },
        ],
      },
    },
    zh: {
      word: '跑步',
      phonetic: 'pǎo bù',
      dialogue: {
        mom: { text: '我们一起在公园跑步吧！', phonetic: 'Wǒmen yīqǐ zài gōngyuán pǎobù ba!', english: "Let's run together in the park!" },
        kid: { text: '好呀，看我跑得好快！', phonetic: 'Hǎo ya, kàn wǒ pǎo de hǎo kuài!', english: "Yay, look how fast I run!" },
      },
      practice: {
        sentenceBefore: '小熊在草地上',
        sentenceBeforePhonetic: 'Xiǎoxióng zài cǎodì shàng ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The bear runs on the grass.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃', phonetic: 'chī', emoji: '🍎', english: 'Eat' },
        ],
      },
    },
    es: {
      word: 'correr',
      phonetic: 'koh-RREHR',
      dialogue: {
        mom: { text: '¡Vamos a correr al parque!', phonetic: 'BAH-mohs ah koh-RREHR ahl PAHR-keh!', english: "Let's run to the park!" },
        kid: { text: '¡Sí, soy muy rápido!', phonetic: 'SEE, soy MOOY RRAH-pee-doh!', english: "Yes, I'm super fast!" },
      },
      practice: {
        sentenceBefore: 'Me gusta ',
        sentenceBeforePhonetic: 'Meh GOOS-tah ',
        sentenceAfter: ' en el parque.',
        sentenceAfterPhonetic: ' ehn ehl PAHR-keh.',
        englishHint: 'I like to run in the park.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' },
        ],
      },
    },
  },
  {
    id: 'verb-jump',
    english: 'Jump',
    emoji: '🦘',
    category: 'verbs',
    ko: {
      word: '점프하다',
      phonetic: 'jeom peu ha da',
      dialogue: {
        mom: { text: '개구리처럼 높이 뛰어봐!', phonetic: 'gae gu ri cheo reom nop i ttwi eo bwa!', english: 'Jump high like a little frog!' },
        kid: { text: '점프! 하늘까지 닿을래요!', phonetic: 'jeom peu! ha neul kka ji da heul lae yo!', english: 'Jump! I can reach the sky!' },
      },
      practice: {
        sentenceBefore: '토끼처럼 ',
        sentenceBeforePhonetic: 'to kki cheo reom ',
        sentenceAfter: '해요!',
        sentenceAfterPhonetic: 'hae yo!',
        englishHint: 'Jump like a bunny!',
        distractors: [
          { word: '눕다', phonetic: 'nup da', emoji: '🛋️', english: 'Lie down' },
          { word: '앉다', phonetic: 'an da', emoji: '🪑', english: 'Sit' },
        ],
      },
    },
    zh: {
      word: '跳',
      phonetic: 'tiào',
      dialogue: {
        mom: { text: '像小兔子一样跳一跳！', phonetic: 'Xiàng xiǎo tùzi yīyàng tiào yī tiào!', english: 'Jump like a little bunny!' },
        kid: { text: '跳！我跳得好高！', phonetic: 'Tiào! Wǒ tiào de hǎo gāo!', english: 'Jump! I jump so high!' },
      },
      practice: {
        sentenceBefore: '袋鼠会一蹦一',
        sentenceBeforePhonetic: 'Dàishǔ huì yī bèng yī ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'Kangaroos can hop and jump.',
        distractors: [
          { word: '爬', phonetic: 'pá', emoji: '🐢', english: 'Crawl' },
          { word: '坐', phonetic: 'zuò', emoji: '🪑', english: 'Sit' },
        ],
      },
    },
    es: {
      word: 'saltar',
      phonetic: 'sahl-TAHR',
      dialogue: {
        mom: { text: '¡Salta como un conejito!', phonetic: 'SAHL-tah KOH-moh oon koh-neh-HEE-toh!', english: 'Jump like a bunny!' },
        kid: { text: '¡Mira qué alto puedo saltar!', phonetic: 'MEE-rah keh AHL-toh PWEH-doh sahl-TAHR!', english: 'Look how high I can jump!' },
      },
      practice: {
        sentenceBefore: 'El sapo sabe ',
        sentenceBeforePhonetic: 'Ehl SAH-poh SAH-beh ',
        sentenceAfter: ' muy alto.',
        sentenceAfterPhonetic: ' mooy AHL-toh.',
        englishHint: 'The toad knows how to jump high.',
        distractors: [
          { word: 'nadar', phonetic: 'nah-DAHR', emoji: '🏊', english: 'Swim' },
          { word: 'sentar', phonetic: 'sehn-TAHR', emoji: '🪑', english: 'Sit' },
        ],
      },
    },
  },
  {
    id: 'verb-eat',
    english: 'Eat',
    emoji: '🍽️',
    category: 'verbs',
    ko: {
      word: '먹다',
      phonetic: 'meok da',
      dialogue: {
        mom: { text: '맛있는 간식 먹자!', phonetic: 'mat it neun gan sik meok ja!', english: "Let's eat yummy snacks!" },
        kid: { text: '냠냠! 맛있게 먹어요!', phonetic: 'nyam nyam! mat it ge meok eo yo!', english: 'Yum yum! Eating happily!' },
      },
      practice: {
        sentenceBefore: '달콤한 사과를 ',
        sentenceBeforePhonetic: 'dal kom han sa gwa reul ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'I eat a sweet apple.',
        distractors: [
          { word: '그리다', phonetic: 'geu ri da', emoji: '🎨', english: 'Draw' },
          { word: '던지다', phonetic: 'deon ji da', emoji: '⚾', english: 'Throw' },
        ],
      },
    },
    zh: {
      word: '吃',
      phonetic: 'chī',
      dialogue: {
        mom: { text: '来吃好吃的点心吧！', phonetic: 'Lái chī hǎochī de diǎnxin ba!', english: 'Come eat delicious snacks!' },
        kid: { text: '哇！我要大口大口吃！', phonetic: 'Wā! Wǒ yào dàkǒu dàkǒu chī!', english: 'Yay! Big bites for me!' },
      },
      practice: {
        sentenceBefore: '小猫在',
        sentenceBeforePhonetic: 'Xiǎomāo zài ',
        sentenceAfter: '美味的鱼。',
        sentenceAfterPhonetic: ' měiwèi de yú.',
        englishHint: 'The cat eats delicious fish.',
        distractors: [
          { word: '画', phonetic: 'huà', emoji: '🎨', english: 'Draw' },
          { word: '看', phonetic: 'kàn', emoji: '👀', english: 'Look' },
        ],
      },
    },
    es: {
      word: 'comer',
      phonetic: 'koh-MEHR',
      dialogue: {
        mom: { text: '¡Hora de comer algo rico!', phonetic: 'OH-rah deh koh-MEHR AHL-goh RREE-koh!', english: 'Time to eat something yummy!' },
        kid: { text: '¡Qué delicia! ¡Quiero comer!', phonetic: 'Keh deh-LEE-syah! KYEH-roh koh-MEHR!', english: 'Yum! I want to eat!' },
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' una manzana.',
        sentenceAfterPhonetic: ' OO-nah mahn-SAH-nah.',
        englishHint: "Let's eat an apple.",
        distractors: [
          { word: 'dibujar', phonetic: 'dee-boo-HAHR', emoji: '🎨', english: 'Draw' },
          { word: 'tirar', phonetic: 'tee-RAHR', emoji: '⚾', english: 'Throw' },
        ],
      },
    },
  },
  {
    id: 'verb-sleep',
    english: 'Sleep',
    emoji: '😴',
    category: 'verbs',
    ko: {
      word: '자다',
      phonetic: 'ja da',
      dialogue: {
        mom: { text: '이제 침대에서 코 자자.', phonetic: 'i je chim dae e seo ko ja ja.', english: 'Now go to sleep in bed, sweetie.' },
        kid: { text: '좋은 꿈 꿀게요, 잘 자요!', phonetic: 'jo eun kkum kkul ge yo, jal ja yo!', english: 'Sweet dreams, good night!' },
      },
      practice: {
        sentenceBefore: '아기는 침대에서 ',
        sentenceBeforePhonetic: 'a gi neun chim dae e seo ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'The baby sleeps in bed.',
        distractors: [
          { word: '뛰다', phonetic: 'ttwi da', emoji: '🏃', english: 'Run' },
          { word: '웃다', phonetic: 'ut da', emoji: '😄', english: 'Laugh' },
        ],
      },
    },
    zh: {
      word: '睡觉',
      phonetic: 'shuì jiào',
      dialogue: {
        mom: { text: '宝贝，该睡觉做个好梦了。', phonetic: 'Bǎobèi, gāi shuìjiào zuò gè hǎo mèng le.', english: 'Baby, time to sleep and have sweet dreams.' },
        kid: { text: '晚安妈妈，我去睡觉啦！', phonetic: 'Wǎn’ān māmā, wǒ qù shuìjiào la!', english: "Goodnight mom, I'm going to sleep!" },
      },
      practice: {
        sentenceBefore: '小宝宝安静地',
        sentenceBeforePhonetic: 'Xiǎo bǎobǎo ānjìng de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The baby sleeps quietly.',
        distractors: [
          { word: '唱歌', phonetic: 'chàng gē', emoji: '🎤', english: 'Sing' },
          { word: '跑', phonetic: 'pǎo', emoji: '🏃', english: 'Run' },
        ],
      },
    },
    es: {
      word: 'dormir',
      phonetic: 'dohr-MEER',
      dialogue: {
        mom: { text: 'Es hora de dormir y soñar.', phonetic: 'Ehs OH-rah deh dohr-MEER ee soh-NYAHR.', english: 'Time to sleep and dream.' },
        kid: { text: '¡Buenas noches! ¡A dormir!', phonetic: 'BWEH-nahs NOH-chehs! Ah dohr-MEER!', english: 'Goodnight! Time to sleep!' },
      },
      practice: {
        sentenceBefore: 'El osito va a ',
        sentenceBeforePhonetic: 'Ehl oh-SEE-toh bah ah ',
        sentenceAfter: ' en su cama.',
        sentenceAfterPhonetic: ' ehn soo KAH-mah.',
        englishHint: 'The little bear goes to sleep in his bed.',
        distractors: [
          { word: 'cantar', phonetic: 'kahn-TAHR', emoji: '🎤', english: 'Sing' },
          { word: 'correr', phonetic: 'koh-RREHR', emoji: '🏃', english: 'Run' },
        ],
      },
    },
  },
  {
    id: 'verb-sing',
    english: 'Sing',
    emoji: '🎤',
    category: 'verbs',
    ko: {
      word: '노래하다',
      phonetic: 'no rae ha da',
      dialogue: {
        mom: { text: '예쁜 동요 같이 부를까?', phonetic: 'ye ppeun dong yo gat i bu reul kka?', english: "Shall we sing a pretty children's song?" },
        kid: { text: '랄랄라! 신나게 노래해요!', phonetic: 'ral ral la! sin na ge no rae hae yo!', english: 'La la la! Singing happily!' },
      },
      practice: {
        sentenceBefore: '새가 나무에서 ',
        sentenceBeforePhonetic: 'sae ga na mu e seo ',
        sentenceAfter: '해요.',
        sentenceAfterPhonetic: 'hae yo.',
        englishHint: 'The bird sings in the tree.',
        distractors: [
          { word: '울다', phonetic: 'ul da', emoji: '😢', english: 'Cry' },
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
        ],
      },
    },
    zh: {
      word: '唱歌',
      phonetic: 'chàng gē',
      dialogue: {
        mom: { text: '我们一起唱儿歌吧！', phonetic: 'Wǒmen yīqǐ chàng érgē ba!', english: "Let's sing a kid's song together!" },
        kid: { text: '啦啦啦！我最喜欢唱歌！', phonetic: 'Lā lā lā! Wǒ zuì xǐhuan chànggē!', english: 'La la la! I love to sing!' },
      },
      practice: {
        sentenceBefore: '小鸟在树枝上',
        sentenceBeforePhonetic: 'Xiǎoniǎo zài shùzhī shàng ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The little bird sings on the branch.',
        distractors: [
          { word: '哭', phonetic: 'kū', emoji: '😢', english: 'Cry' },
          { word: '吃', phonetic: 'chī', emoji: '🍎', english: 'Eat' },
        ],
      },
    },
    es: {
      word: 'cantar',
      phonetic: 'kahn-TAHR',
      dialogue: {
        mom: { text: '¡Cantemos una linda canción!', phonetic: 'Kahn-TEH-mohs OO-nah LEEN-dah kahn-SYOHN!', english: "Let's sing a pretty song!" },
        kid: { text: '¡Tra-la-la! ¡Me encanta cantar!', phonetic: 'Trah-lah-LAH! Meh ehn-KAHN-tah kahn-TAHR!', english: 'Tra-la-la! I love to sing!' },
      },
      practice: {
        sentenceBefore: 'Los pajaritos van a ',
        sentenceBeforePhonetic: 'Lohs pah-hah-REE-tohs bahn ah ',
        sentenceAfter: ' en el árbol.',
        sentenceAfterPhonetic: ' ehn ehl AHR-bohl.',
        englishHint: 'The little birds are going to sing in the tree.',
        distractors: [
          { word: 'llorar', phonetic: 'yoh-RAHR', emoji: '😢', english: 'Cry' },
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
        ],
      },
    },
  },
  {
    id: 'verb-dance',
    english: 'Dance',
    emoji: '💃',
    category: 'verbs',
    ko: {
      word: '춤추다',
      phonetic: 'chum chu da',
      dialogue: {
        mom: { text: '신나는 음악에 맞춰 춤추자!', phonetic: 'sin na neun eum ak e mat chwo chum chu ja!', english: "Let's dance to the joyful music!" },
        kid: { text: '빙글빙글 춤춰요!', phonetic: 'bing geul bing geul chum chwo yo!', english: 'Twirling around, I dance!' },
      },
      practice: {
        sentenceBefore: '음악 소리에 맞춰 ',
        sentenceBeforePhonetic: 'eum ak so ri e mat chwo ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'I dance to the sound of music.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '울다', phonetic: 'ul da', emoji: '😢', english: 'Cry' },
        ],
      },
    },
    zh: {
      word: '跳舞',
      phonetic: 'tiào wǔ',
      dialogue: {
        mom: { text: '听着欢快的音乐跳舞吧！', phonetic: 'Tīngzhe huānkuài de yīnyuè tiàowǔ ba!', english: "Let's dance to the upbeat music!" },
        kid: { text: '转个圈圈，真好玩！', phonetic: 'Zhuǎn gè quānquān, zhēn hǎowán!', english: 'Spinning in a circle, so fun!' },
      },
      practice: {
        sentenceBefore: '大家开心地一起',
        sentenceBeforePhonetic: 'Dàjiā kāixīn de yīqǐ ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'Everyone dances happily together.',
        distractors: [
          { word: '哭', phonetic: 'kū', emoji: '😢', english: 'Cry' },
          { word: '坐', phonetic: 'zuò', emoji: '🪑', english: 'Sit' },
        ],
      },
    },
    es: {
      word: 'bailar',
      phonetic: 'bahy-LAHR',
      dialogue: {
        mom: { text: '¡A bailar con esta canción!', phonetic: 'Ah bahy-LAHR kohn EHS-tah kahn-SYOHN!', english: "Let's dance to this song!" },
        kid: { text: '¡Giro y giro al bailar!', phonetic: 'HEE-roh ee HEE-roh ahl bahy-LAHR!', english: 'I spin and spin when I dance!' },
      },
      practice: {
        sentenceBefore: 'Nos gusta ',
        sentenceBeforePhonetic: 'Nohs GOOS-tah ',
        sentenceAfter: ' con música feliz.',
        sentenceAfterPhonetic: ' kohn MOO-see-kah feh-LEES.',
        englishHint: 'We like to dance with happy music.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'llorar', phonetic: 'yoh-RAHR', emoji: '😢', english: 'Cry' },
        ],
      },
    },
  },
  {
    id: 'verb-read',
    english: 'Read',
    emoji: '📖',
    category: 'verbs',
    ko: {
      word: '읽다',
      phonetic: 'ik da',
      dialogue: {
        mom: { text: '재미있는 그림책 읽을까?', phonetic: 'jae mi it neun geu rim chaek ilk eul kka?', english: 'Shall we read a fun picture book?' },
        kid: { text: '네! 동화책 읽어주세요!', phonetic: 'ne! dong hwa chaek ilk eo ju se yo!', english: 'Yes! Please read the storybook!' },
      },
      practice: {
        sentenceBefore: '재미난 책을 ',
        sentenceBeforePhonetic: 'jae mi nan chaek eul ',
        sentenceAfter: '어요.',
        sentenceAfterPhonetic: 'eo yo.',
        englishHint: 'I read a fun book.',
        distractors: [
          { word: '던지다', phonetic: 'deon ji da', emoji: '⚾', english: 'Throw' },
          { word: '울다', phonetic: 'ul da', emoji: '😢', english: 'Cry' },
        ],
      },
    },
    zh: {
      word: '看书',
      phonetic: 'kàn shū',
      dialogue: {
        mom: { text: '我们读一本有趣的图画书吧。', phonetic: 'Wǒmen dú yī běn yǒuqù de túhuàshū ba.', english: "Let's read a fun picture book." },
        kid: { text: '好呀，我喜欢看书！', phonetic: 'Hǎo ya, wǒ xǐhuan kànshū!', english: 'Yay, I love reading books!' },
      },
      practice: {
        sentenceBefore: '小鹿在安静地',
        sentenceBeforePhonetic: 'Xiǎolù zài ānjìng de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The little deer is reading quietly.',
        distractors: [
          { word: '跑', phonetic: 'pǎo', emoji: '🏃', english: 'Run' },
          { word: '跳', phonetic: 'tiào', emoji: '🦘', english: 'Jump' },
        ],
      },
    },
    es: {
      word: 'leer',
      phonetic: 'leh-EHR',
      dialogue: {
        mom: { text: '¿Leemos un cuento divertido?', phonetic: 'Leh-EH-mohs oon KWEHN-toh dee-behr-TEE-doh?', english: 'Shall we read a fun fairy tale?' },
        kid: { text: '¡Sí, me encanta leer cuentos!', phonetic: 'SEE, meh ehn-KAHN-tah leh-EHR KWEHN-tohs!', english: 'Yes, I love reading fairy tales!' },
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' un lindo libro.',
        sentenceAfterPhonetic: ' oon LEEN-doh LEE-broh.',
        englishHint: "Let's read a pretty book.",
        distractors: [
          { word: 'tirar', phonetic: 'tee-RAHR', emoji: '⚾', english: 'Throw' },
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
        ],
      },
    },
  },
  {
    id: 'verb-laugh',
    english: 'Smile',
    emoji: '😄',
    category: 'verbs',
    ko: {
      word: '웃다',
      phonetic: 'ut da',
      dialogue: {
        mom: { text: '활짝 웃는 네 얼굴이 참 예뻐!', phonetic: 'hwal jjak ut neun ne eol gul i cham ye ppeo!', english: 'Your smiling face is so pretty!' },
        kid: { text: '하하호호! 기분 좋아서 웃어요!', phonetic: 'ha ha ho ho! gi bun jo a seo ut eo yo!', english: "Ha ha ho ho! I'm happy so I smile!" },
      },
      practice: {
        sentenceBefore: '기분이 좋아서 활짝 ',
        sentenceBeforePhonetic: 'gi bun i jo a seo hwal jjak ',
        sentenceAfter: '어요.',
        sentenceAfterPhonetic: 'eo yo.',
        englishHint: "I'm happy so I smile brightly.",
        distractors: [
          { word: '울다', phonetic: 'ul da', emoji: '😢', english: 'Cry' },
          { word: '화내다', phonetic: 'hwa nae da', emoji: '😡', english: 'Get angry' },
        ],
      },
    },
    zh: {
      word: '笑',
      phonetic: 'xiào',
      dialogue: {
        mom: { text: '你笑起来的样子真可爱！', phonetic: 'Nǐ xiào qǐlái de yàngzi zhēn kě’ài!', english: 'You look so cute when you smile!' },
        kid: { text: '哈哈！我很开心就笑了！', phonetic: 'Hā hā! Wǒ hěn kāixīn jiù xiào le!', english: "Ha ha! I'm happy so I smile!" },
      },
      practice: {
        sentenceBefore: '开心的宝宝会大声',
        sentenceBeforePhonetic: 'Kāixīn de bǎobǎo huì dàshēng ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'A happy baby laughs out loud.',
        distractors: [
          { word: '哭', phonetic: 'kū', emoji: '😢', english: 'Cry' },
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
        ],
      },
    },
    es: {
      word: 'sonreír',
      phonetic: 'sohn-reh-EER',
      dialogue: {
        mom: { text: '¡Qué lindo cuando sonríes!', phonetic: 'Keh LEEN-doh KWAHN-doh sohn-REE-ehs!', english: 'So pretty when you smile!' },
        kid: { text: '¡Estoy feliz y me gusta sonreír!', phonetic: 'Ehs-TOY feh-LEES ee meh GOOS-tah sohn-reh-EER!', english: "I'm happy and I like to smile!" },
      },
      practice: {
        sentenceBefore: 'Es muy lindo ',
        sentenceBeforePhonetic: 'Ehs mooy LEEN-doh ',
        sentenceAfter: ' cada día.',
        sentenceAfterPhonetic: ' KAH-dah DEE-ah.',
        englishHint: 'It is very nice to smile every day.',
        distractors: [
          { word: 'llorar', phonetic: 'yoh-RAHR', emoji: '😢', english: 'Cry' },
          { word: 'enojar', phonetic: 'eh-noh-HAHR', emoji: '😡', english: 'Get mad' },
        ],
      },
    },
  },

  // ADJECTIVES (Describing Words)
  {
    id: 'adj-big',
    english: 'Big',
    emoji: '🐘',
    category: 'adjectives',
    ko: {
      word: '크다',
      phonetic: 'keu da',
      dialogue: {
        mom: { text: '코끼리가 정말 크지?', phonetic: 'ko kki ri ga jeong mal keu ji?', english: 'The elephant is really big, right?' },
        kid: { text: '우와! 산처럼 커요!', phonetic: 'u wa! san cheo reom keo yo!', english: 'Whoa! It is big like a mountain!' },
      },
      practice: {
        sentenceBefore: '코끼리는 몸집이 아주 ',
        sentenceBeforePhonetic: 'ko kki ri neun mom jip i a ju ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'The elephant body is very big.',
        distractors: [
          { word: '작다', phonetic: 'jak da', emoji: '🐜', english: 'Small' },
          { word: '차갑다', phonetic: 'cha gap da', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
    zh: {
      word: '大',
      phonetic: 'dà',
      dialogue: {
        mom: { text: '大象的身体真大呀！', phonetic: 'Dàxiàng de shēntǐ zhēn dà ya!', english: 'The elephant’s body is so big!' },
        kid: { text: '对！它比我大好多！', phonetic: 'Duì! Tā bǐ wǒ dà hǎoduō!', english: 'Yes! It is way bigger than me!' },
      },
      practice: {
        sentenceBefore: '大象有两只',
        sentenceBeforePhonetic: 'Dàxiàng yǒu liǎng zhī ',
        sentenceAfter: '耳朵。',
        sentenceAfterPhonetic: ' ěrduo.',
        englishHint: 'The elephant has big ears.',
        distractors: [
          { word: '小', phonetic: 'xiǎo', emoji: '🐜', english: 'Small' },
          { word: '冷', phonetic: 'lěng', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
    es: {
      word: 'grande',
      phonetic: 'GRAHN-deh',
      dialogue: {
        mom: { text: '¡Mira ese elefante tan grande!', phonetic: 'MEE-rah EH-seh eh-leh-FAHN-teh tahn GRAHN-deh!', english: 'Look at that huge elephant!' },
        kid: { text: '¡Es gigante y muy grande!', phonetic: 'Ehs hee-GAHN-teh ee MOOY GRAHN-deh!', english: 'It is giant and very big!' },
      },
      practice: {
        sentenceBefore: 'El elefante es muy ',
        sentenceBeforePhonetic: 'Ehl eh-leh-FAHN-teh ehs MOOY ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'The elephant is very big.',
        distractors: [
          { word: 'pequeño', phonetic: 'peh-KEH-nyoh', emoji: '🐜', english: 'Small' },
          { word: 'frío', phonetic: 'FREE-oh', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
  },
  {
    id: 'adj-small',
    english: 'Small',
    emoji: '🐜',
    category: 'adjectives',
    ko: {
      word: '작다',
      phonetic: 'jak da',
      dialogue: {
        mom: { text: '개미는 아주 작고 귀여워.', phonetic: 'gae mi neun a ju jak go gwi yeo wo.', english: 'The ant is tiny and cute.' },
        kid: { text: '내 손가락보다 더 작아요!', phonetic: 'nae son ga rak bo da deo jak a yo!', english: 'Smaller than my little finger!' },
      },
      practice: {
        sentenceBefore: '작은 개미는 몸이 ',
        sentenceBeforePhonetic: 'jak eun gae mi neun mom i ',
        sentenceAfter: '아요.',
        sentenceAfterPhonetic: 'a yo.',
        englishHint: 'The little ant is small.',
        distractors: [
          { word: '크다', phonetic: 'keu da', emoji: '🐘', english: 'Big' },
          { word: '뜨겁다', phonetic: 'tteu geop da', emoji: '🔥', english: 'Hot' },
        ],
      },
    },
    zh: {
      word: '小',
      phonetic: 'xiǎo',
      dialogue: {
        mom: { text: '小蚂蚁好小好可爱呀。', phonetic: 'Xiǎo mǎyǐ hǎo xiǎo hǎo kě’ài ya.', english: 'The little ant is tiny and cute.' },
        kid: { text: '它比我的手指头还要小！', phonetic: 'Tā bǐ wǒ de shǒuzhǐtou hái yào xiǎo!', english: 'Even smaller than my finger!' },
      },
      practice: {
        sentenceBefore: '小小的蚂蚁很',
        sentenceBeforePhonetic: 'Xiǎoxiǎo de mǎyǐ hěn ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The tiny ant is small.',
        distractors: [
          { word: '大', phonetic: 'dà', emoji: '🐘', english: 'Big' },
          { word: '热', phonetic: 'rè', emoji: '🔥', english: 'Hot' },
        ],
      },
    },
    es: {
      word: 'pequeño',
      phonetic: 'peh-KEH-nyoh',
      dialogue: {
        mom: { text: 'La hormiga es muy pequeña.', phonetic: 'Lah ohr-MEE-gah ehs MOOY peh-KEH-nyah.', english: 'The ant is very small.' },
        kid: { text: '¡Sí, cabe en mi manita!', phonetic: 'SEE, KAH-beh ehn mee mah-NEE-tah!', english: 'Yes, it fits in my tiny hand!' },
      },
      practice: {
        sentenceBefore: 'El ratoncito es muy ',
        sentenceBeforePhonetic: 'Ehl rrah-tohn-SEE-toh ehs MOOY ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'The little mouse is very small.',
        distractors: [
          { word: 'grande', phonetic: 'GRAHN-deh', emoji: '🐘', english: 'Big' },
          { word: 'caliente', phonetic: 'kah-LYEHN-teh', emoji: '🔥', english: 'Hot' },
        ],
      },
    },
  },
  {
    id: 'adj-fast',
    english: 'Fast',
    emoji: '🚀',
    category: 'adjectives',
    ko: {
      word: '빠르다',
      phonetic: 'ppa reu da',
      dialogue: {
        mom: { text: '로켓은 번개처럼 빠르단다!', phonetic: 'ro ket eun beon gae cheo reom ppa reu dan da!', english: 'The rocket is lightning fast!' },
        kid: { text: '슝슝! 진짜 빠르게 날아가요!', phonetic: 'syung syung! jin jja ppa reu ge nal a ga yo!', english: 'Swoosh! Flying super fast!' },
      },
      practice: {
        sentenceBefore: '치타는 달리기가 ',
        sentenceBeforePhonetic: 'chi ta neun dal li gi ga ',
        sentenceAfter: '라요.',
        sentenceAfterPhonetic: 'ra yo.',
        englishHint: 'The cheetah is fast at running.',
        distractors: [
          { word: '느리다', phonetic: 'neu ri da', emoji: '🐢', english: 'Slow' },
          { word: '슬프다', phonetic: 'seul peu da', emoji: '😢', english: 'Sad' },
        ],
      },
    },
    zh: {
      word: '快',
      phonetic: 'kuài',
      dialogue: {
        mom: { text: '火箭飞得真快呀！', phonetic: 'Huǒjiàn fēi de zhēn kuài ya!', english: 'The rocket flies so fast!' },
        kid: { text: '嗖的一声就飞走啦！', phonetic: 'Sōu de yī shēng jiù fēi zǒu la!', english: 'Whoosh, it zoomed away fast!' },
      },
      practice: {
        sentenceBefore: '小猎豹跑得飞',
        sentenceBeforePhonetic: 'Xiǎo lièbào pǎo de fēi ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The cheetah runs super fast.',
        distractors: [
          { word: '慢', phonetic: 'màn', emoji: '🐢', english: 'Slow' },
          { word: '冷', phonetic: 'lěng', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
    es: {
      word: 'rápido',
      phonetic: 'RRAH-pee-doh',
      dialogue: {
        mom: { text: '¡Ese cohete vuela muy rápido!', phonetic: 'EH-seh koh-EH-teh BWEH-lah MOOY RRAH-pee-doh!', english: 'That rocket flies so fast!' },
        kid: { text: '¡Zoom! ¡Va súper rápido!', phonetic: 'Zoom! Bah SOO-pehr RRAH-pee-doh!', english: 'Zoom! It goes super fast!' },
      },
      practice: {
        sentenceBefore: 'El guepardo corre muy ',
        sentenceBeforePhonetic: 'Ehl geh-PAHR-doh KOH-rreh MOOY ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'The cheetah runs very fast.',
        distractors: [
          { word: 'lento', phonetic: 'LEHN-toh', emoji: '🐢', english: 'Slow' },
          { word: 'triste', phonetic: 'TREES-teh', emoji: '😢', english: 'Sad' },
        ],
      },
    },
  },
  {
    id: 'adj-slow',
    english: 'Slow',
    emoji: '🐢',
    category: 'adjectives',
    ko: {
      word: '느리다',
      phonetic: 'neu ri da',
      dialogue: {
        mom: { text: '거북이는 엉금엉금 느리지?', phonetic: 'geo buk i neun eong geum eong geum neu ri ji?', english: 'The turtle is crawl-crawl slow, right?' },
        kid: { text: '천천히 느려도 귀여워요!', phonetic: 'cheon cheon hi neu ryeo do gwi yeo wo yo!', english: 'Slow and steady, still cute!' },
      },
      practice: {
        sentenceBefore: '달팽이는 걸음이 ',
        sentenceBeforePhonetic: 'dal paeng i neun geol eum i ',
        sentenceAfter: '려요.',
        sentenceAfterPhonetic: 'ryeo yo.',
        englishHint: 'The snail is slow at walking.',
        distractors: [
          { word: '빠르다', phonetic: 'ppa reu da', emoji: '🚀', english: 'Fast' },
          { word: '뜨겁다', phonetic: 'tteu geop da', emoji: '🔥', english: 'Hot' },
        ],
      },
    },
    zh: {
      word: '慢',
      phonetic: 'màn',
      dialogue: {
        mom: { text: '小乌龟慢慢地爬行。', phonetic: 'Xiǎo wūguī mànmàn de páxíng.', english: 'The little turtle crawls slowly.' },
        kid: { text: '慢一点没关系，很可爱！', phonetic: 'Màn yīdiǎn méi guānxi, hěn kě’ài!', english: "Slow is okay, it's so cute!" },
      },
      practice: {
        sentenceBefore: '蜗牛爬得很',
        sentenceBeforePhonetic: 'Wōniú pá de hěn ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The snail crawls slowly.',
        distractors: [
          { word: '快', phonetic: 'kuài', emoji: '🚀', english: 'Fast' },
          { word: '大', phonetic: 'dà', emoji: '🐘', english: 'Big' },
        ],
      },
    },
    es: {
      word: 'lento',
      phonetic: 'LEHN-toh',
      dialogue: {
        mom: { text: 'La tortuga camina muy lento.', phonetic: 'Lah tohr-TOO-gah kah-MEE-nah MOOY LEHN-toh.', english: 'The turtle walks very slowly.' },
        kid: { text: '¡Despacito pero segura!', phonetic: 'Dehs-pah-SEE-toh PEH-roh seh-GOO-rah!', english: 'Slowly but steady!' },
      },
      practice: {
        sentenceBefore: 'El caracol camina ',
        sentenceBeforePhonetic: 'Ehl kah-rah-KOHL kah-MEE-nah ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'The snail walks slowly.',
        distractors: [
          { word: 'rápido', phonetic: 'RRAH-pee-doh', emoji: '🚀', english: 'Fast' },
          { word: 'grande', phonetic: 'GRAHN-deh', emoji: '🐘', english: 'Big' },
        ],
      },
    },
  },
  {
    id: 'adj-happy',
    english: 'Happy',
    emoji: '🥳',
    category: 'adjectives',
    ko: {
      word: '행복하다',
      phonetic: 'haeng bok ha da',
      dialogue: {
        mom: { text: '오늘 너와 함께해서 행복해!', phonetic: 'o neul neo wa ham kke hae seo haeng bok hae!', english: "I'm so happy to be with you today!" },
        kid: { text: '나도 엄마랑 놀아서 행복해요!', phonetic: 'na do eom ma rang nol a seo haeng bok hae yo!', english: "I'm happy playing with mom too!" },
      },
      practice: {
        sentenceBefore: '가족과 함께라 참 ',
        sentenceBeforePhonetic: 'ga jok gwa ham kke ra cham ',
        sentenceAfter: '해요.',
        sentenceAfterPhonetic: 'hae yo.',
        englishHint: "I'm very happy with my family.",
        distractors: [
          { word: '슬프다', phonetic: 'seul peu da', emoji: '😢', english: 'Sad' },
          { word: '차갑다', phonetic: 'cha gap da', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
    zh: {
      word: '开心',
      phonetic: 'kāi xīn',
      dialogue: {
        mom: { text: '今天和你在一起真开心！', phonetic: 'Jīntiān hé nǐ zài yīqǐ zhēn kāixīn!', english: 'So happy to be with you today!' },
        kid: { text: '我也超级开心！', phonetic: 'Wǒ yě chāojí kāixīn!', english: "I'm super happy too!" },
      },
      practice: {
        sentenceBefore: '和小伙伴玩耍真',
        sentenceBeforePhonetic: 'Hé xiǎo huǒbàn wánshuǎ zhēn ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'Playing with friends is so happy.',
        distractors: [
          { word: '难过', phonetic: 'nán guò', emoji: '😢', english: 'Sad' },
          { word: '冷', phonetic: 'lěng', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
    es: {
      word: 'feliz',
      phonetic: 'feh-LEES',
      dialogue: {
        mom: { text: '¡Soy muy feliz contigo!', phonetic: 'SOY MOOY feh-LEES kohn-TEE-goh!', english: "I'm very happy with you!" },
        kid: { text: '¡Yo también estoy muy feliz!', phonetic: 'YOH tyahm-BYEHN ehs-TOY MOOY feh-LEES!', english: "I'm also very happy!" },
      },
      practice: {
        sentenceBefore: 'Hoy es un día muy ',
        sentenceBeforePhonetic: 'OY ehs oon DEE-ah MOOY ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'Today is a very happy day.',
        distractors: [
          { word: 'triste', phonetic: 'TREES-teh', emoji: '😢', english: 'Sad' },
          { word: 'frío', phonetic: 'FREE-oh', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
  },
  {
    id: 'adj-cute',
    english: 'Cute',
    emoji: '🐥',
    category: 'adjectives',
    ko: {
      word: '귀엽다',
      phonetic: 'gwi yeop da',
      dialogue: {
        mom: { text: '노란 아기 병아리가 참 귀엽지?', phonetic: 'no ran a gi byeong a ri ga cham gwi yeop ji?', english: 'The yellow chick is so cute, right?' },
        kid: { text: '삐약삐약! 정말 귀여워요!', phonetic: 'ppi yak ppi yak! jeong mal gwi yeo wo yo!', english: 'Cheep cheep! So cute!' },
      },
      practice: {
        sentenceBefore: '아기 고양이는 정말 ',
        sentenceBeforePhonetic: 'a gi go yang i neun jeong mal ',
        sentenceAfter: '워요.',
        sentenceAfterPhonetic: 'wo yo.',
        englishHint: 'The baby kitten is really cute.',
        distractors: [
          { word: '무섭다', phonetic: 'mu seop da', emoji: '👻', english: 'Scary' },
          { word: '슬프다', phonetic: 'seul peu da', emoji: '😢', english: 'Sad' },
        ],
      },
    },
    zh: {
      word: '可爱',
      phonetic: 'kě ài',
      dialogue: {
        mom: { text: '黄色的小鸡真可爱！', phonetic: 'Huángsè de xiǎojī zhēn kě’ài!', english: 'The yellow chick is so cute!' },
        kid: { text: '叽叽喳喳，太可爱了！', phonetic: 'Jījizhāzhā, tài kě’ài le!', english: 'Chirp chirp, so adorable!' },
      },
      practice: {
        sentenceBefore: '小猫咪长得真',
        sentenceBeforePhonetic: 'Xiǎo māomī zhǎng de zhēn ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The little kitten looks so cute.',
        distractors: [
          { word: '凶', phonetic: 'xiōng', emoji: '😡', english: 'Mean' },
          { word: '冷', phonetic: 'lěng', emoji: '🧊', english: 'Cold' },
        ],
      },
    },
    es: {
      word: 'lindo',
      phonetic: 'LEEN-doh',
      dialogue: {
        mom: { text: '¡Qué lindo pollito amarillo!', phonetic: 'Keh LEEN-doh poh-YEE-toh ah-mah-REE-yoh!', english: 'What a cute yellow chick!' },
        kid: { text: '¡Pío pío, es muy lindo!', phonetic: 'PEE-oh PEE-oh, ehs MOOY LEEN-doh!', english: 'Peep peep, it is so cute!' },
      },
      practice: {
        sentenceBefore: 'El gatito bebé es muy ',
        sentenceBeforePhonetic: 'Ehl gah-TEE-toh beh-BEH ehs MOOY ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'The baby kitten is very cute.',
        distractors: [
          { word: 'malo', phonetic: 'MAH-loh', emoji: '😡', english: 'Bad' },
          { word: 'triste', phonetic: 'TREES-teh', emoji: '😢', english: 'Sad' },
        ],
      },
    },
  },

  // OTHERS (Everyday Things & World)
  {
    id: 'other-house',
    english: 'House',
    emoji: '🏠',
    category: 'others',
    ko: {
      word: '집',
      phonetic: 'jip',
      dialogue: {
        mom: { text: '따뜻하고 아늑한 우리 집이야.', phonetic: 'tta tteut ha go a neuk han u ri jip i ya.', english: 'Our warm and cozy home.' },
        kid: { text: '집에 오니까 편안해요!', phonetic: 'jip e o ni kka pyeon an hae yo!', english: "I feel cozy coming home!" },
      },
      practice: {
        sentenceBefore: '우리가 사는 따뜻한 ',
        sentenceBeforePhonetic: 'u ri ga sa neun tta tteut han ',
        sentenceAfter: '이에요.',
        sentenceAfterPhonetic: 'i e yo.',
        englishHint: 'Our warm house where we live.',
        distractors: [
          { word: '달', phonetic: 'dal', emoji: '🌙', english: 'Moon' },
          { word: '신발', phonetic: 'sin bal', emoji: '👟', english: 'Shoes' },
        ],
      },
    },
    zh: {
      word: '家',
      phonetic: 'jiā',
      dialogue: {
        mom: { text: '我们温暖的家最舒服啦。', phonetic: 'Wǒmen wēnnuǎn de jiā zuì shūfu la.', english: 'Our warm home is the coziest.' },
        kid: { text: '回家真好，我爱我的家！', phonetic: 'Huí jiā zhēn hǎo, wǒ ài wǒ de jiā!', english: 'So nice to be home, I love my home!' },
      },
      practice: {
        sentenceBefore: '温暖幸福的',
        sentenceBeforePhonetic: 'Wēnnuǎn xìngfú de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'A warm and happy home.',
        distractors: [
          { word: '月亮', phonetic: 'yuè liang', emoji: '🌙', english: 'Moon' },
          { word: '鞋子', phonetic: 'xié zi', emoji: '👟', english: 'Shoes' },
        ],
      },
    },
    es: {
      word: 'la casa',
      phonetic: 'lah KAH-sah',
      dialogue: {
        mom: { text: '¡Qué lindo estar en nuestra casa!', phonetic: 'Keh LEEN-doh ehs-TAHR ehn NWEHS-trah KAH-sah!', english: 'So nice to be in our home!' },
        kid: { text: '¡Me encanta mi casita!', phonetic: 'Meh ehn-KAHN-tah mee kah-SEE-tah!', english: 'I love my little house!' },
      },
      practice: {
        sentenceBefore: 'Vivimos en ',
        sentenceBeforePhonetic: 'Bee-BEE-mohs ehn ',
        sentenceAfter: ' feliz.',
        sentenceAfterPhonetic: ' feh-LEES.',
        englishHint: 'We live in a happy house.',
        distractors: [
          { word: 'la luna', phonetic: 'lah LOO-nah', emoji: '🌙', english: 'Moon' },
          { word: 'el zapato', phonetic: 'ehl sah-PAH-toh', emoji: '👟', english: 'Shoe' },
        ],
      },
    },
  },
  {
    id: 'other-tree',
    english: 'Tree',
    emoji: '🌳',
    category: 'others',
    ko: {
      word: '나무',
      phonetic: 'na mu',
      dialogue: {
        mom: { text: '초록빛 큰 나무 그늘 아래 쉬자.', phonetic: 'cho rok bit keun na mu geu neul a rae swi ja.', english: "Let's rest under the big green tree shade." },
        kid: { text: '시원해요! 나뭇잎이 살랑살랑!', phonetic: 'si won hae yo! na mut ip i sal rang sal rang!', english: 'So cool! Leaves rustling gently!' },
      },
      practice: {
        sentenceBefore: '새들이 푸른 ',
        sentenceBeforePhonetic: 'sae deul i pu reun ',
        sentenceAfter: '에 앉아요.',
        sentenceAfterPhonetic: 'e an ja yo.',
        englishHint: 'Birds sit on the green tree.',
        distractors: [
          { word: '물', phonetic: 'mul', emoji: '💧', english: 'Water' },
          { word: '모자', phonetic: 'mo ja', emoji: '🧢', english: 'Hat' },
        ],
      },
    },
    zh: {
      word: '大树',
      phonetic: 'dà shù',
      dialogue: {
        mom: { text: '绿油油的大树像一把大伞。', phonetic: 'Lǜyóuyóu de dàshù xiàng yī bǎ dà sǎn.', english: 'The green big tree is like a huge umbrella.' },
        kid: { text: '在树下好凉快呀！', phonetic: 'Zài shù xià hǎo liángkuai ya!', english: 'So nice and cool under the tree!' },
      },
      practice: {
        sentenceBefore: '小鸟在茂盛的',
        sentenceBeforePhonetic: 'Xiǎoniǎo zài màoshèng de ',
        sentenceAfter: '上唱歌。',
        sentenceAfterPhonetic: ' shàng chànggē.',
        englishHint: 'Birds sing on the lush big tree.',
        distractors: [
          { word: '水', phonetic: 'shuǐ', emoji: '💧', english: 'Water' },
          { word: '帽子', phonetic: 'mào zi', emoji: '🧢', english: 'Hat' },
        ],
      },
    },
    es: {
      word: 'el árbol',
      phonetic: 'ehl AHR-bohl',
      dialogue: {
        mom: { text: '¡Qué sombra tan rica da ese árbol!', phonetic: 'Keh SOHM-brah tahn RREE-kah dah EH-seh AHR-bohl!', english: 'What nice shade that tree gives!' },
        kid: { text: '¡Tiene muchas hojas verdes!', phonetic: 'TYEH-neh MOO-chahs OH-hahs BEHR-dehs!', english: 'It has so many green leaves!' },
      },
      practice: {
        sentenceBefore: 'El pájaro canta en ',
        sentenceBeforePhonetic: 'Ehl PAH-hah-roh KAHN-tah ehn ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'The bird sings in the tree.',
        distractors: [
          { word: 'el agua', phonetic: 'ehl AH-gwah', emoji: '💧', english: 'Water' },
          { word: 'el sombrero', phonetic: 'ehl sohm-BREH-roh', emoji: '🧢', english: 'Hat' },
        ],
      },
    },
  },
  {
    id: 'other-rain',
    english: 'Rain',
    emoji: '🌧️',
    category: 'others',
    ko: {
      word: '비',
      phonetic: 'bi',
      dialogue: {
        mom: { text: '하늘에서 주룩주룩 비가 내려요.', phonetic: 'ha neul e seo ju ruk ju ruk bi ga nae ryeo yo.', english: 'Pitter-patter, rain falls from the sky.' },
        kid: { text: '장화 신고 첨벙첨벙할래요!', phonetic: 'jang hwa sin go cheom beong cheom beong hal lae yo!', english: 'Put on rain boots and splash splash!' },
      },
      practice: {
        sentenceBefore: '하늘에서 촉촉한 ',
        sentenceBeforePhonetic: 'ha neul e seo chok chok han ',
        sentenceAfter: '가 내려요.',
        sentenceAfterPhonetic: 'ga nae ryeo yo.',
        englishHint: 'Gentle rain falls from the sky.',
        distractors: [
          { word: '해', phonetic: 'hae', emoji: '☀️', english: 'Sun' },
          { word: '사탕', phonetic: 'sa tang', emoji: '🍭', english: 'Candy' },
        ],
      },
    },
    zh: {
      word: '下雨',
      phonetic: 'xià yǔ',
      dialogue: {
        mom: { text: '滴答滴答，下小雨啦。', phonetic: 'Dīdā dīdā, xià xiǎoyǔ la.', english: 'Pitter patter, it is raining.' },
        kid: { text: '拿上我的小雨伞去踩水坑！', phonetic: 'Ná shàng wǒ de xiǎo yǔsǎn qù cǎi shuǐkēng!', english: 'Take my little umbrella to jump in puddles!' },
      },
      practice: {
        sentenceBefore: '滴答滴答，天空在',
        sentenceBeforePhonetic: 'Dīdā dīdā, tiānkōng zài ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'Drip drop, it is raining.',
        distractors: [
          { word: '太阳', phonetic: 'tài yáng', emoji: '☀️', english: 'Sun' },
          { word: '糖果', phonetic: 'táng guǒ', emoji: '🍭', english: 'Candy' },
        ],
      },
    },
    es: {
      word: 'la lluvia',
      phonetic: 'lah YOO-byah',
      dialogue: {
        mom: { text: '¡Mira las gotitas de lluvia caer!', phonetic: 'MEE-rah lahs goh-TEE-tahs deh YOO-byah kah-EHR!', english: 'Look at the raindrops falling!' },
        kid: { text: '¡Plic plac! ¡Vamos a pisar charquitos!', phonetic: 'Pleek plahk! BAH-mohs ah pee-SAHR char-KEE-tohs!', english: 'Plic plac! Lets splash in puddles!' },
      },
      practice: {
        sentenceBefore: 'Cae suave ',
        sentenceBeforePhonetic: 'KAH-eh SWAH-beh ',
        sentenceAfter: ' del cielo.',
        sentenceAfterPhonetic: ' dehl SYEH-loh.',
        englishHint: 'Soft rain falls from the sky.',
        distractors: [
          { word: 'el sol', phonetic: 'ehl SOHL', emoji: '☀️', english: 'Sun' },
          { word: 'el dulce', phonetic: 'ehl DOOL-seh', emoji: '🍭', english: 'Candy' },
        ],
      },
    },
  },
  {
    id: 'other-clock',
    english: 'Clock',
    emoji: '⏰',
    category: 'others',
    ko: {
      word: '시계',
      phonetic: 'si gye',
      dialogue: {
        mom: { text: '똑딱똑딱 시계가 시간을 알려줘.', phonetic: 'ttok ttak ttok ttak si gye ga si gan eul al ryeo jwo.', english: 'Tick tock, the clock tells the time.' },
        kid: { text: '지금은 맛있는 간식 시간이에요!', phonetic: 'ji geum eun mat it neun gan sik si gan i e yo!', english: "Now it's snack time!" },
      },
      practice: {
        sentenceBefore: '벽에 걸린 째깍째깍 ',
        sentenceBeforePhonetic: 'byeok e geol lin jjae kkak jjae kkak ',
        sentenceAfter: '예요.',
        sentenceAfterPhonetic: 'ye yo.',
        englishHint: 'It is a tick-tock clock on the wall.',
        distractors: [
          { word: '숟가락', phonetic: 'sut ga rak', emoji: '🥄', english: 'Spoon' },
          { word: '모자', phonetic: 'mo ja', emoji: '🧢', english: 'Hat' },
        ],
      },
    },
    zh: {
      word: '时钟',
      phonetic: 'shí zhōng',
      dialogue: {
        mom: { text: '滴答滴答，时钟在走动呢。', phonetic: 'Dīdā dīdā, shízhōng zài zǒudòng ne.', english: 'Tick tock, the clock is ticking.' },
        kid: { text: '现在是玩耍的时间啦！', phonetic: 'Xiànzài shì wánshuǎ de shíjiān la!', english: "Now it's playtime!" },
      },
      practice: {
        sentenceBefore: '墙上的',
        sentenceBeforePhonetic: 'Qiáng shàng de ',
        sentenceAfter: '在走。',
        sentenceAfterPhonetic: ' zài zǒu.',
        englishHint: 'The clock on the wall is ticking.',
        distractors: [
          { word: '勺子', phonetic: 'sháo zi', emoji: '🥄', english: 'Spoon' },
          { word: '帽子', phonetic: 'mào zi', emoji: '🧢', english: 'Hat' },
        ],
      },
    },
    es: {
      word: 'el reloj',
      phonetic: 'ehl rreh-LOH',
      dialogue: {
        mom: { text: '¡Tic-tac! El reloj nos dice la hora.', phonetic: 'Teek-tahk! Ehl rreh-LOH nohs DEE-seh lah OH-rah.', english: 'Tick-tock! The clock tells the time.' },
        kid: { text: '¡Es hora de jugar y reír!', phonetic: 'Ehs OH-rah deh hoo-GAHR ee rreh-EER!', english: "It's time to play and laugh!" },
      },
      practice: {
        sentenceBefore: 'El ',
        sentenceBeforePhonetic: 'Ehl ',
        sentenceAfter: ' hace tic tac.',
        sentenceAfterPhonetic: ' AH-seh teek tahk.',
        englishHint: 'The clock goes tick tock.',
        distractors: [
          { word: 'la cuchara', phonetic: 'lah koo-CHAH-rah', emoji: '🥄', english: 'Spoon' },
          { word: 'el sombrero', phonetic: 'ehl sohm-BREH-roh', emoji: '🧢', english: 'Hat' },
        ],
      },
    },
  },
  {
    id: 'other-music',
    english: 'Music',
    emoji: '🎵',
    category: 'others',
    ko: {
      word: '음악',
      phonetic: 'eum ak',
      dialogue: {
        mom: { text: '경쾌한 음악을 들어볼까?', phonetic: 'gyeong kwae han eum ak eul deul eo bol kka?', english: 'Shall we listen to upbeat music?' },
        kid: { text: '음악 들으며 신나게 춤춰요!', phonetic: 'eum ak deul eu myeo sin na ge chum chwo yo!', english: "Dancing happily to the music!" },
      },
      practice: {
        sentenceBefore: '귀를 기울여 아름다운 ',
        sentenceBeforePhonetic: 'gwi reul gi ul yeo a reum da un ',
        sentenceAfter: '을 들어요.',
        sentenceAfterPhonetic: 'eul deul eo yo.',
        englishHint: 'Listen closely to beautiful music.',
        distractors: [
          { word: '돌', phonetic: 'dol', emoji: '🪨', english: 'Stone' },
          { word: '양말', phonetic: 'yang mal', emoji: '🧦', english: 'Socks' },
        ],
      },
    },
    zh: {
      word: '音乐',
      phonetic: 'yīn yuè',
      dialogue: {
        mom: { text: '听，美妙的音乐响起来啦！', phonetic: 'Tīng, měimiào de yīnyuè xiǎng qǐlái la!', english: 'Listen, wonderful music is playing!' },
        kid: { text: '我喜欢这个欢快的音乐！', phonetic: 'Wǒ xǐhuan zhè ge huānkuài de yīnyuè!', english: 'I love this happy music!' },
      },
      practice: {
        sentenceBefore: '大家一起听动听的',
        sentenceBeforePhonetic: 'Dàjiā yīqǐ tīng dòngtīng de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'Listen together to beautiful music.',
        distractors: [
          { word: '石头', phonetic: 'shí tou', emoji: '🪨', english: 'Stone' },
          { word: '袜子', phonetic: 'wà zi', emoji: '🧦', english: 'Socks' },
        ],
      },
    },
    es: {
      word: 'la música',
      phonetic: 'lah MOO-see-kah',
      dialogue: {
        mom: { text: '¡Qué bonita suena esta música!', phonetic: 'Keh boh-NEE-tah SWEH-nah EHS-tah MOO-see-kah!', english: 'How pretty this music sounds!' },
        kid: { text: '¡Me da alegría escuchar música!', phonetic: 'Meh dah ah-leh-GREE-ah ehs-koo-CHAHR MOO-see-kah!', english: 'Listening to music brings me joy!' },
      },
      practice: {
        sentenceBefore: 'Escuchamos linda ',
        sentenceBeforePhonetic: 'Ehs-koo-CHAH-mohs LEEN-dah ',
        sentenceAfter: '.',
        sentenceAfterPhonetic: '.',
        englishHint: 'We listen to pretty music.',
        distractors: [
          { word: 'la piedra', phonetic: 'lah PYEH-drah', emoji: '🪨', english: 'Stone' },
          { word: 'la media', phonetic: 'lah MEH-dyah', emoji: '🧦', english: 'Sock' },
        ],
      },
    },
  },
];
