import leoAvatar from '../assets/images/mascot_leo_lion_1791139869664.jpg';
import baoAvatar from '../assets/images/mascot_bao_panda_1791139879087.jpg';
import horiAvatar from '../assets/images/mascot_hori_tiger_1791139889974.jpg';
import { EXTRA_100_WORDS, ExtraWordRow } from './extraDeck100';
import { THEME_EXPANSION_CARDS } from './extraThemesDeck';
import { MORE_VERBS_AND_ADJECTIVES } from './moreVerbsAndAdjectives';

export type LanguageCode = 'es' | 'zh' | 'ko';

export type CategoryId =
  | 'animals'
  | 'snacks'
  | 'colors'
  | 'family'
  | 'playground'
  | 'verbs'
  | 'adjectives'
  | 'others';

export interface DialogueTurn {
  text: string;
  phonetic: string;
  english: string;
}

export interface DistractorItem {
  word: string;
  phonetic: string;
  emoji: string;
  english: string;
}

export interface PracticeItem {
  sentenceBefore: string;
  sentenceBeforePhonetic: string;
  sentenceAfter: string;
  sentenceAfterPhonetic: string;
  englishHint: string;
  distractors: DistractorItem[];
}

export interface LanguageEntry {
  word: string;
  phonetic: string;
  dialogue: {
    mom: DialogueTurn;
    kid: DialogueTurn;
  };
  practice: PracticeItem;
}

export interface FlashcardConcept {
  id: string;
  english: string;
  emoji: string;
  category: CategoryId;
  isCustom?: boolean;
  es: LanguageEntry;
  zh: LanguageEntry;
  ko: LanguageEntry;
}

export interface LanguageMascotConfig {
  code: LanguageCode;
  name: string;
  flag: string;
  mascotName: string;
  mascotTitle: string;
  mascotEmoji: string;
  avatarUrl: string;
  greeting: string;
  greetingPhonetic: string;
  greetingEnglish: string;
  speechLang: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  accentButton: string;
  softSurface: string;
  scriptLabel: string;
}

export const LANGUAGE_ORDER: LanguageCode[] = ['ko', 'zh', 'es'];

export const LANGUAGES: Record<LanguageCode, LanguageMascotConfig> = {
  ko: {
    code: 'ko',
    name: 'Korean',
    flag: '🇰🇷',
    mascotName: 'Hori the Tiger',
    mascotTitle: 'Korean Buddy',
    mascotEmoji: '🐯',
    avatarUrl: horiAvatar,
    greeting: '안녕, 친구야!',
    greetingPhonetic: 'Annyeong, chinguya!',
    greetingEnglish: 'Hi, my friend!',
    speechLang: 'ko-KR',
    accentBg: 'bg-sky-600',
    accentBorder: 'border-sky-400',
    accentText: 'text-sky-950',
    accentButton: 'bg-sky-600 hover:bg-sky-700 text-white shadow-[0_5px_0_0_#0369A1]',
    softSurface: 'bg-sky-50/90',
    scriptLabel: 'Romanized + 한글',
  },
  zh: {
    code: 'zh',
    name: 'Mandarin',
    flag: '🇨🇳',
    mascotName: 'Bao the Panda',
    mascotTitle: 'Mandarin Pal',
    mascotEmoji: '🐼',
    avatarUrl: baoAvatar,
    greeting: '你好，小朋友！',
    greetingPhonetic: 'Nǐ hǎo, xiǎo péngyou!',
    greetingEnglish: 'Hello, little friend!',
    speechLang: 'zh-CN',
    accentBg: 'bg-emerald-600',
    accentBorder: 'border-emerald-400',
    accentText: 'text-emerald-950',
    accentButton: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_5px_0_0_#065F46]',
    softSurface: 'bg-emerald-50/90',
    scriptLabel: 'Pinyin + 汉字',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    flag: '🇪🇸',
    mascotName: 'Leo the Lion',
    mascotTitle: 'Spanish Explorer',
    mascotEmoji: '🦁',
    avatarUrl: leoAvatar,
    greeting: '¡Hola, amiguito!',
    greetingPhonetic: 'OH-lah ah-mee-GEE-toh',
    greetingEnglish: 'Hello, little friend!',
    speechLang: 'es-ES',
    accentBg: 'bg-amber-500',
    accentBorder: 'border-amber-400',
    accentText: 'text-amber-900',
    accentButton: 'bg-amber-500 hover:bg-amber-600 text-white shadow-[0_5px_0_0_#B45309]',
    softSurface: 'bg-amber-50/90',
    scriptLabel: 'Español',
  },
};

export const CATEGORIES: Array<{ id: CategoryId | 'all'; label: string; emoji: string; description: string }> = [
  { id: 'all', label: 'Magical Mix', emoji: '🪄', description: 'Fun surprise from all decks' },
  { id: 'verbs', label: 'Verbs', emoji: '🏃', description: 'Run, jump, eat, sleep & sing' },
  { id: 'adjectives', label: 'Adjectives', emoji: '✨', description: 'Big, small, fast & happy' },
  { id: 'animals', label: 'Animals', emoji: '🐾', description: 'Puppies, kittens & safari pals' },
  { id: 'snacks', label: 'Yummy Snacks', emoji: '🍎', description: 'Fruits, treats & drinks' },
  { id: 'colors', label: 'Colors & Sky', emoji: '🌈', description: 'Bright colors, sun & stars' },
  { id: 'family', label: 'Family & Love', emoji: '🤗', description: 'Mom, dad, hugs & feelings' },
  { id: 'playground', label: 'Playground', emoji: '🛝', description: 'Toys, slides, bikes & books' },
  { id: 'others', label: 'Others', emoji: '💡', description: 'House, tree, rain, clock & music' },
];

// Global distractor pool per language so every card gets 2 playful, distinct distractors
const DISTRACTOR_POOL: Record<LanguageCode, Record<string, DistractorItem>> = {
  es: {
    car: { word: 'el carro', phonetic: 'ehl KAH-rroh', emoji: '🚗', english: 'the car' },
    moon: { word: 'la luna', phonetic: 'lah LOO-nah', emoji: '🌙', english: 'the moon' },
    apple: { word: 'la manzana', phonetic: 'lah mahn-SAH-nah', emoji: '🍎', english: 'the apple' },
    shoes: { word: 'los zapatos', phonetic: 'lohs sah-PAH-tohs', emoji: '👟', english: 'the shoes' },
    ball: { word: 'la pelota', phonetic: 'lah peh-LOH-tah', emoji: '⚽', english: 'the ball' },
    dog: { word: 'el perro', phonetic: 'ehl PEH-rroh', emoji: '🐶', english: 'the dog' },
  },
  zh: {
    car: { word: '小汽车', phonetic: 'xiǎo qìchē', emoji: '🚗', english: 'little car' },
    moon: { word: '月亮', phonetic: 'yuèliang', emoji: '🌙', english: 'moon' },
    apple: { word: '苹果', phonetic: 'píngguǒ', emoji: '🍎', english: 'apple' },
    shoes: { word: '鞋子', phonetic: 'xiézi', emoji: '👟', english: 'shoes' },
    ball: { word: '皮球', phonetic: 'píqiú', emoji: '⚽', english: 'ball' },
    dog: { word: '小狗', phonetic: 'xiǎo gǒu', emoji: '🐶', english: 'puppy' },
  },
  ko: {
    car: { word: '자동차', phonetic: 'jadongcha', emoji: '🚗', english: 'car' },
    moon: { word: '달님', phonetic: 'dallim', emoji: '🌙', english: 'moon' },
    apple: { word: '사과', phonetic: 'sagwa', emoji: '🍎', english: 'apple' },
    shoes: { word: '신발', phonetic: 'sinbal', emoji: '👟', english: 'shoes' },
    ball: { word: '공', phonetic: 'gong', emoji: '⚽', english: 'ball' },
    dog: { word: '강아지', phonetic: 'gangaji', emoji: '🐶', english: 'puppy' },
  },
};

interface CompactSeed {
  id: string;
  english: string;
  emoji: string;
  category: CategoryId;
  distractorKeys: [string, string];
  es: {
    word: string;
    phonetic: string;
    mom: [string, string, string]; // [text, phonetic, english]
    kid: [string, string, string];
    practice: [string, string, string]; // [before, after, englishHint]
  };
  zh: {
    word: string;
    phonetic: string;
    mom: [string, string, string]; // [hanzi, pinyin, english]
    kid: [string, string, string];
    practice: [string, string, string, string, string]; // [beforeHanzi, beforePinyin, afterHanzi, afterPinyin, englishHint]
  };
  ko: {
    word: string;
    phonetic: string;
    mom: [string, string, string]; // [hangul, romanized, english]
    kid: [string, string, string];
    practice: [string, string, string, string, string]; // [beforeHangul, beforeRom, afterHangul, afterRom, englishHint]
  };
}

const SEEDS: CompactSeed[] = [
  // ======================== 1. ANIMALS (8 concepts = 24 cards) ========================
  {
    id: 'dog',
    english: 'Dog',
    emoji: '🐶',
    category: 'animals',
    distractorKeys: ['apple', 'moon'],
    es: {
      word: 'Perro',
      phonetic: 'PEH-rroh',
      mom: ['¡Mira ese perro tan lindo!', 'MEE-rah EH-seh PEH-rroh tahn LEEN-doh', 'Look at that cute dog!'],
      kid: ['¡El perro dice guau guau!', 'ehl PEH-rroh DEE-seh gwah-oo gwah-oo', 'The dog says woof woof!'],
      practice: ['El ', ' corre en el parque.', 'The ____ runs in the park.'],
    },
    zh: {
      word: '狗',
      phonetic: 'gǒu',
      mom: ['你看那只可爱的小狗！', 'Nǐ kàn nà zhī kě’ài de xiǎo gǒu!', 'Look at that cute puppy dog!'],
      kid: ['小狗汪汪叫，真好玩！', 'Xiǎo gǒu wāngwāng jiào, zhēn hǎowán!', 'The puppy barks woof-woof, so fun!'],
      practice: ['可爱的小', '在草地上跑。', 'Kě’ài de xiǎo ', ' zài cǎodì shàng pǎo.', 'The cute little ____ runs on the grass.'],
    },
    ko: {
      word: '강아지',
      phonetic: 'gangaji',
      mom: ['저기 귀여운 강아지 봐!', 'Jeogi gwiyeoun gangaji bwa!', 'Look at that cute puppy over there!'],
      kid: ['강아지가 멍멍 짖어요!', 'Gangajiga meongmeong jijeoyo!', 'The puppy barks woof woof!'],
      practice: ['귀여운 ', '가 공원에서 뛰어요.', 'Gwiyeoun ', 'ga gongwoneseon ttwieoyo.', 'The cute ____ runs in the park.'],
    },
  },
  {
    id: 'cat',
    english: 'Cat',
    emoji: '🐱',
    category: 'animals',
    distractorKeys: ['car', 'shoes'],
    es: {
      word: 'Gato',
      phonetic: 'GAH-toh',
      mom: ['¿Dónde duerme el gato?', 'DOHN-deh DWEHR-meh ehl GAH-toh', 'Where is the cat sleeping?'],
      kid: ['¡El gato duerme en el sofá!', 'ehl GAH-toh DWEHR-meh ehn ehl soh-FAH', 'The cat is sleeping on the sofa!'],
      practice: ['El ', ' dice miau y toma leche.', 'The ____ says meow and drinks milk.'],
    },
    zh: {
      word: '猫',
      phonetic: 'māo',
      mom: ['小猫在哪里睡觉呀？', 'Xiǎo māo zài nǎlǐ shuìjiào ya?', 'Where is the kitty sleeping?'],
      kid: ['小猫在沙发上喵喵叫！', 'Xiǎo māo zài shāfā shàng miāomiāo jiào!', 'The kitty is meowing on the sofa!'],
      practice: ['这只小', '喜欢吃鱼。', 'Zhè zhī xiǎo ', ' xǐhuan chī yú.', 'This little ____ likes to eat fish.'],
    },
    ko: {
      word: '고양이',
      phonetic: 'goyangi',
      mom: ['아기 고양이가 어디 있지?', 'Agi goyangiga eodi itji?', 'Where is the baby cat?'],
      kid: ['고양이가 야옹야옹 노래해요!', 'Goyangiga yaong-yaong noraehaeyo!', 'The cat sings meow meow!'],
      practice: ['작은 ', '가 낮잠을 자요.', 'Jageun ', 'ga natjameul jayo.', 'The little ____ takes a nap.'],
    },
  },
  {
    id: 'lion',
    english: 'Lion',
    emoji: '🦁',
    category: 'animals',
    distractorKeys: ['apple', 'ball'],
    es: {
      word: 'León',
      phonetic: 'leh-OHN',
      mom: ['¿Cómo ruge el gran león?', 'KOH-moh ROO-heh ehl grahn leh-OHN', 'How does the big lion roar?'],
      kid: ['¡El león hace grrr muy fuerte!', 'ehl leh-OHN AH-seh grrr mwee FWEHR-teh', 'The lion goes grrr very loudly!'],
      practice: ['El ', ' tiene una melena dorada.', 'The ____ has a golden mane.'],
    },
    zh: {
      word: '狮子',
      phonetic: 'shīzi',
      mom: ['大狮子是怎么叫的呀？', 'Dà shīzi shì zěnme jiào de ya?', 'How does the big lion roar?'],
      kid: ['大狮子嗷呜一声，好威风！', 'Dà shīzi áowū yī shēng, hǎo wēifēng!', 'The big lion roars, so mighty!'],
      practice: ['森林里的', '张开了大嘴巴。', 'Sēnlín lǐ de ', ' zhāngkāi le dà zuǐba.', 'The ____ in the forest opened its big mouth.'],
    },
    ko: {
      word: '사자',
      phonetic: 'saja',
      mom: ['멋진 사자는 어떻게 소리칠까?', 'Meotjin sajaneun eotteoke sorichilkka?', 'How does the cool lion roar?'],
      kid: ['사자가 어흥 하고 외쳐요!', 'Sajaga eoheung hago oechyeoyo!', 'The lion roars eo-heung!'],
      practice: ['갈기가 멋진 ', '가 걸어가요.', 'Galgiga meotjin ', 'ga georeogayo.', 'The ____ with a cool mane walks by.'],
    },
  },
  {
    id: 'panda',
    english: 'Panda',
    emoji: '🐼',
    category: 'animals',
    distractorKeys: ['car', 'moon'],
    es: {
      word: 'Panda',
      phonetic: 'PAHN-dah',
      mom: ['¿Qué está comiendo el oso panda?', 'keh ehs-TAH koh-MYEHN-doh ehl OH-soh PAHN-dah', 'What is the panda bear eating?'],
      kid: ['¡El panda come bambú verde!', 'ehl PAHN-dah KOH-meh bahm-BOO BEHR-deh', 'The panda eats green bamboo!'],
      practice: ['El osito ', ' es blanco y negro.', 'The little ____ is black and white.'],
    },
    zh: {
      word: '熊猫',
      phonetic: 'xióngmāo',
      mom: ['大熊猫最喜欢吃什么呀？', 'Dà xióngmāo zuì xǐhuan chī shénme ya?', 'What does the giant panda like to eat most?'],
      kid: ['熊猫最爱吃绿色的竹子！', 'Xióngmāo zuì ài chī lǜsè de zhúzi!', 'The panda loves eating green bamboo!'],
      practice: ['圆滚滚的', '在吃竹子。', 'Yuángǔngǔn de ', ' zài chī zhúzi.', 'The chubby ____ is eating bamboo.'],
    },
    ko: {
      word: '판다',
      phonetic: 'panda',
      mom: ['귀여운 판다가 무엇을 먹고 있니?', 'Gwiyeoun pandaga mueoseul meokgo inni?', 'What is the cute panda eating?'],
      kid: ['판다가 맛있는 대나무를 먹어요!', 'Pandaga masinneun daenamureul meogeoyo!', 'The panda eats yummy bamboo!'],
      practice: ['귀여운 ', '가 대나무를 좋아해요.', 'Gwiyeoun ', 'ga daenamureul joahaeyo.', 'The cute ____ likes bamboo.'],
    },
  },
  {
    id: 'tiger',
    english: 'Tiger',
    emoji: '🐯',
    category: 'animals',
    distractorKeys: ['shoes', 'apple'],
    es: {
      word: 'Tigre',
      phonetic: 'TEE-greh',
      mom: ['¡Mira las rayas de ese tigre!', 'MEE-rah lahs RAH-yahs deh EH-seh TEE-greh', 'Look at the stripes on that tiger!'],
      kid: ['¡El tigre salta súper alto!', 'ehl TEE-greh SAHL-tah SOO-pehr AHL-toh', 'The tiger jumps super high!'],
      practice: ['El ', ' tiene rayas naranjas y negras.', 'The ____ has orange and black stripes.'],
    },
    zh: {
      word: '老虎',
      phonetic: 'lǎohǔ',
      mom: ['小老虎身上有什么花纹呀？', 'Xiǎo lǎohǔ shēnshang yǒu shénme huāwén ya?', 'What pattern is on the little tiger?'],
      kid: ['老虎身上有帅气的条纹！', 'Lǎohǔ shēnshang yǒu shuàiqì de tiáowén!', 'The tiger has cool stripes on its body!'],
      practice: ['森林里的', '跑得非常快。', 'Sēnlín lǐ de ', ' pǎo de fēicháng kuài.', 'The ____ in the forest runs very fast.'],
    },
    ko: {
      word: '호랑이',
      phonetic: 'horangi',
      mom: ['줄무늬가 멋진 호랑이 좀 봐!', 'Julmunuiga meotjin horangi jom bwa!', 'Look at the tiger with cool stripes!'],
      kid: ['호랑이는 달리기를 정말 잘해요!', 'Horangineun dalligireul jeongmal jalhaeyo!', 'The tiger is really good at running!'],
      practice: ['씩씩한 ', '가 산에서 내려와요.', 'Ssikssikan ', 'ga saneseo naeryeowayo.', 'The brave ____ comes down from the mountain.'],
    },
  },
  {
    id: 'rabbit',
    english: 'Rabbit',
    emoji: '🐰',
    category: 'animals',
    distractorKeys: ['car', 'ball'],
    es: {
      word: 'Conejo',
      phonetic: 'koh-NEH-hoh',
      mom: ['¿Quieres darle una zanahoria al conejo?', 'KYEH-rehs DAHR-leh OO-nah sah-nah-OH-ryah ahl koh-NEH-hoh', 'Do you want to give a carrot to the rabbit?'],
      kid: ['¡Sí! El conejo salta boing boing.', 'see ehl koh-NEH-hoh SAHL-tah boyng boyng', 'Yes! The rabbit hops boing boing.'],
      practice: ['El ', ' blanco tiene orejas largas.', 'The white ____ has long ears.'],
    },
    zh: {
      word: '兔子',
      phonetic: 'tùzi',
      mom: ['小兔子喜欢吃什么蔬菜呀？', 'Xiǎo tùzi xǐhuan chī shénme shūcài ya?', 'What vegetable does the little rabbit like?'],
      kid: ['小兔子最喜欢吃红萝卜！', 'Xiǎo tùzi zuì xǐhuan chī hóng luóbo!', 'The little rabbit loves eating carrots!'],
      practice: ['长耳朵的小', '蹦蹦跳跳。', 'Cháng ěrduo de xiǎo ', ' bèngbèng tiàotiào.', 'The long-eared little ____ hops around.'],
    },
    ko: {
      word: '토끼',
      phonetic: 'tokki',
      mom: ['귀가 긴 토끼가 무엇을 먹을까?', 'Gwiga gin tokkiga mueoseul meogeulkka?', 'What does the long-eared rabbit eat?'],
      kid: ['토끼가 아삭아삭 당근을 먹어요!', 'Tokkiga asagasak danggeuneul meogeoyo!', 'The rabbit crunches on a carrot!'],
      practice: ['하얀 ', '가 깡충깡충 뛰어요.', 'Hayan ', 'ga kkangchung-kkangchung ttwieoyo.', 'The white ____ hops up and down.'],
    },
  },
  {
    id: 'bird',
    english: 'Bird',
    emoji: '🐦',
    category: 'animals',
    distractorKeys: ['shoes', 'dog'],
    es: {
      word: 'Pájaro',
      phonetic: 'PAH-hah-roh',
      mom: ['¡Escucha! ¿Oyes cantar al pájaro?', 'ehs-KOO-chah OH-yehs kahn-TAHR ahl PAH-hah-roh', 'Listen! Do you hear the bird singing?'],
      kid: ['¡Sí, el pájaro vuela en el cielo!', 'see ehl PAH-hah-roh BWEH-lah ehn ehl SYEH-loh', 'Yes, the bird flies in the sky!'],
      practice: ['El ', ' azul canta en el árbol.', 'The blue ____ sings in the tree.'],
    },
    zh: {
      word: '小鸟',
      phonetic: 'xiǎoniǎo',
      mom: ['听！树上的小鸟在唱歌呢。', 'Tīng! Shù shàng de xiǎoniǎo zài chànggē ne.', 'Listen! The bird in the tree is singing.'],
      kid: ['小鸟飞得真高呀！', 'Xiǎoniǎo fēi de zhēn gāo ya!', 'The little bird flies so high!'],
      practice: ['快乐的', '在蓝天上飞。', 'Kuàilè de ', ' zài lántiān shàng fēi.', 'The happy ____ flies in the blue sky.'],
    },
    ko: {
      word: '새',
      phonetic: 'sae',
      mom: ['나무 위에서 작은 새가 노래하네!', 'Namu wieseo jageun saega noraehane!', 'A little bird is singing up in the tree!'],
      kid: ['새가 짹짹 즐겁게 날아가요!', 'Saega jjaekjjaek jeulgeopge naragayo!', 'The bird chirps tweet-tweet and flies away!'],
      practice: ['작은 ', '가 하늘 높이 날아요.', 'Jageun ', 'ga haneul nopi narayo.', 'The little ____ flies high in the sky.'],
    },
  },
  {
    id: 'elephant',
    english: 'Elephant',
    emoji: '🐘',
    category: 'animals',
    distractorKeys: ['apple', 'moon'],
    es: {
      word: 'Elefante',
      phonetic: 'eh-leh-FAHN-teh',
      mom: ['¡Qué trompa tan larga tiene el elefante!', 'keh TROHM-pah tahn LAHR-gah TYEH-neh ehl eh-leh-FAHN-teh', 'What a long trunk the elephant has!'],
      kid: ['¡El elefante tira agua con su trompa!', 'ehl eh-leh-FAHN-teh TEE-rah AH-gwah kohn soo TROHM-pah', 'The elephant sprays water with its trunk!'],
      practice: ['El ', ' grande tiene orejas gigantes.', 'The big ____ has giant ears.'],
    },
    zh: {
      word: '大象',
      phonetic: 'dàxiàng',
      mom: ['大象的鼻子为什么这么长呀？', 'Dàxiàng de bízi wèishénme zhème cháng ya?', 'Why is the elephant’s nose so long?'],
      kid: ['大象用长鼻子喷水洗澡呢！', 'Dàxiàng yòng cháng bízi pēn shuǐ xǐzǎo ne!', 'The elephant uses its long trunk to spray water!'],
      practice: ['动物园里的', '耳朵像扇子。', 'Dòngwùyuán lǐ de ', ' ěrduo xiàng shànzi.', 'The ____ at the zoo has ears like fans.'],
    },
    ko: {
      word: '코끼리',
      phonetic: 'kokkiri',
      mom: ['코끼리는 코가 정말 길구나!', 'Kokkirineun koga jeongmal gilguna!', 'The elephant has such a long nose!'],
      kid: ['코끼리가 코로 물을 뿜어요!', 'Kokkiriga koro mureul ppumeoyo!', 'The elephant sprays water with its trunk!'],
      practice: ['몸집이 큰 ', '가 물을 마셔요.', 'Momjibi keun ', 'ga mureul masyeoyo.', 'The big ____ drinks water.'],
    },
  },

  // ======================== 2. SNACKS & FOOD (8 concepts = 24 cards) ========================
  {
    id: 'apple',
    english: 'Apple',
    emoji: '🍎',
    category: 'snacks',
    distractorKeys: ['car', 'moon'],
    es: {
      word: 'Manzana',
      phonetic: 'mahn-SAH-nah',
      mom: ['¿Quieres comer una manzana roja?', 'KYEH-rehs koh-MEHR OO-nah mahn-SAH-nah RROH-hah', 'Do you want to eat a red apple?'],
      kid: ['¡Sí, por favor! Tengo hambre.', 'see pohr fah-BOHR TEHN-goh AHM-breh', 'Yes, please! I am hungry.'],
      practice: ['El niño come una ', ' dulce.', 'The child eats a sweet ____.'],
    },
    zh: {
      word: '苹果',
      phonetic: 'píngguǒ',
      mom: ['你想吃一个红苹果吗？', 'Nǐ xiǎng chī yī gè hóng píngguǒ ma?', 'Do you want to eat a red apple?'],
      kid: ['想吃！红苹果又脆又甜！', 'Xiǎng chī! Hóng píngguǒ yòu cuì yòu tián!', 'Yes! The red apple is crispy and sweet!'],
      practice: ['妈妈切了一个红', '给我吃。', 'Māma qiē le yī gè hóng ', ' gěi wǒ chī.', 'Mom sliced a red ____ for me to eat.'],
    },
    ko: {
      word: '사과',
      phonetic: 'sagwa',
      mom: ['빨갛고 맛있는 사과 먹을래?', 'Ppalgako masinneun sagwa meogeullae?', 'Would you like to eat a tasty red apple?'],
      kid: ['네, 주세요! 사과가 달콤해요.', 'Ne, juseyo! Sagwaga dalkomhaeyo.', 'Yes, please! The apple is sweet.'],
      practice: ['나는 아삭아삭한 ', '를 좋아해요.', 'Naneun asagasakan ', 'reul joahaeyo.', 'I like crunchy ____.'],
    },
  },
  {
    id: 'banana',
    english: 'Banana',
    emoji: '🍌',
    category: 'snacks',
    distractorKeys: ['shoes', 'ball'],
    es: {
      word: 'Plátano',
      phonetic: 'PLAH-tah-noh',
      mom: ['¿Te gusta el plátano amarillo?', 'teh GOOS-tah ehl PLAH-tah-noh ah-mah-REE-yoh', 'Do you like the yellow banana?'],
      kid: ['¡Sí, el plátano es mi fruta favorita!', 'see ehl PLAH-tah-noh ehs mee FROO-tah fah-boh-REE-tah', 'Yes, banana is my favorite fruit!'],
      practice: ['El mono come un ', ' amarillo.', 'The monkey eats a yellow ____.'],
    },
    zh: {
      word: '香蕉',
      phonetic: 'xiāngjiāo',
      mom: ['你要剥一根黄色的香蕉吗？', 'Nǐ yào bāo yī gēn huángsè de xiāngjiāo ma?', 'Do you want to peel a yellow banana?'],
      kid: ['好呀！我自己会剥香蕉皮！', 'Hǎo ya! Wǒ zìjǐ huì bāo xiāngjiāo pí!', 'Okay! I can peel the banana by myself!'],
      practice: ['小猴子最爱吃软软的', '。', 'Xiǎo hóuzi zuì ài chī ruǎnruǎn de ', '.', 'The little monkey loves eating soft ____.'],
    },
    ko: {
      word: '바나나',
      phonetic: 'banana',
      mom: ['노란 바나나 하나 먹을까?', 'Noran banana hana meogeulkka?', 'Shall we eat a yellow banana?'],
      kid: ['좋아요! 바나나가 정말 부드러워요.', 'Joayo! Bananaga jeongmal budeureowoyo.', 'Great! The banana is so soft.'],
      practice: ['원숭이가 노란 ', '를 맛있게 먹어요.', 'Wonsung-iga noran ', 'reul masitge meogeoyo.', 'The monkey eats the yellow ____ deliciously.'],
    },
  },
  {
    id: 'milk',
    english: 'Milk',
    emoji: '🥛',
    category: 'snacks',
    distractorKeys: ['car', 'dog'],
    es: {
      word: 'Leche',
      phonetic: 'LEH-cheh',
      mom: ['Aquí tienes tu vaso de leche tibia.', 'ah-KEE TYEH-nehs too BAH-soh deh LEH-cheh TEE-byah', 'Here is your glass of warm milk.'],
      kid: ['¡Gracias, mamá! La leche está rica.', 'GRAH-syahs mah-MAH lah LEH-cheh ehs-TAH RREE-kah', 'Thank you, mom! The milk is yummy.'],
      practice: ['El gatito toma ', ' blanca.', 'The little kitten drinks white ____.'],
    },
    zh: {
      word: '牛奶',
      phonetic: 'niúnǎi',
      mom: ['早上来喝一杯热牛奶吧！', 'Zǎoshang lái hē yī bēi rè niúnǎi ba!', 'Come drink a cup of warm milk this morning!'],
      kid: ['谢谢妈妈，喝了牛奶长高高！', 'Xièxie māma, hē le niúnǎi zhǎng gāogāo!', 'Thanks Mom, drinking milk helps me grow tall!'],
      practice: ['我每天早上都喝一杯', '。', 'Wǒ měitiān zǎoshang dōu hē yī bēi ', '.', 'I drink a glass of ____ every morning.'],
    },
    ko: {
      word: '우유',
      phonetic: 'uyu',
      mom: ['고소한 우유 한 컵 마실래?', 'Gosohan uyu han keop masillae?', 'Would you like a cup of yummy milk?'],
      kid: ['네! 우유를 마시면 키가 쑥쑥 커요.', 'Ne! Uyureul masimyeon kiga ssukssuk keoyo.', 'Yes! Drinking milk makes me grow tall.'],
      practice: ['아침에 신선한 ', '를 마셔요.', 'Achime sinseonhan ', 'reul masyeoyo.', 'I drink fresh ____ in the morning.'],
    },
  },
  {
    id: 'cookie',
    english: 'Cookie',
    emoji: '🍪',
    category: 'snacks',
    distractorKeys: ['moon', 'shoes'],
    es: {
      word: 'Galleta',
      phonetic: 'gah-YEH-tah',
      mom: ['¿Quieres una galleta de chocolate?', 'KYEH-rehs OO-nah gah-YEH-tah deh choh-koh-LAH-teh', 'Do you want a chocolate cookie?'],
      kid: ['¡Qué rica galleta! Una para ti y una para mí.', 'keh RREE-kah gah-YEH-tah OO-nah PAH-rah tee ee OO-nah PAH-rah mee', 'What a yummy cookie! One for you and one for me.'],
      practice: ['Me gusta comer una ', ' con leche.', 'I like eating a ____ with milk.'],
    },
    zh: {
      word: '饼干',
      phonetic: 'bǐnggān',
      mom: ['洗手以后可以吃一块小饼干哦。', 'Xǐshǒu yǐhòu kěyǐ chī yī kuài xiǎo bǐnggān o.', 'After washing hands, you can have a little cookie.'],
      kid: ['太棒啦！这块星星饼干真香！', 'Tài bàng la! Zhè kuài xīngxing bǐnggān zhēn xiāng!', 'Yay! This star cookie smells so good!'],
      practice: ['盘子里有香香的巧克力', '。', 'Pánzi lǐ yǒu xiāngxiāng de qiǎokèlì ', '.', 'There are yummy chocolate ____ on the plate.'],
    },
    ko: {
      word: '쿠키',
      phonetic: 'kuki',
      mom: ['우리 같이 초코 쿠키 먹을까?', 'Uri gachi choko kuki meogeulkka?', 'Shall we eat chocolate cookies together?'],
      kid: ['신난다! 쿠키가 바삭바삭해요!', 'Sinnanda! Kukiga basakbasakaeyo!', 'Yay! The cookie is so crispy!'],
      practice: ['엄마랑 달콤한 ', '를 만들어요.', 'Eommarang dalkomhan ', 'reul mandeureoyo.', 'I make sweet ____ with Mom.'],
    },
  },
  {
    id: 'ice-cream',
    english: 'Ice Cream',
    emoji: '🍦',
    category: 'snacks',
    distractorKeys: ['ball', 'car'],
    es: {
      word: 'Helado',
      phonetic: 'eh-LAH-doh',
      mom: ['Hace calor hoy, ¿tomamos un helado?', 'AH-seh kah-LOHR oy toh-MAH-mohs oon eh-LAH-doh', 'It is warm today, shall we get an ice cream?'],
      kid: ['¡Sí! Quiero helado de fresa fría.', 'see KYEH-roh eh-LAH-doh deh FREH-sah FREE-ah', 'Yes! I want cold strawberry ice cream.'],
      practice: ['El ', ' es frío y muy dulce.', 'The ____ is cold and very sweet.'],
    },
    zh: {
      word: '冰淇淋',
      phonetic: 'bīngqílín',
      mom: ['今天天气热，你想吃冰淇淋吗？', 'Jīntiān tiānqì rè, nǐ xiǎng chī bīngqílín ma?', 'It is warm today, would you like ice cream?'],
      kid: ['太好了！我想要草莓味的冰淇淋！', 'Tài hǎo le! Wǒ xiǎng yào cǎoméi wèi de bīngqílín!', 'Yay! I want strawberry flavored ice cream!'],
      practice: ['夏天吃冰冰凉凉的', '真开心。', 'Xiàtiān chī bīngbīng liángliáng de ', ' zhēn kāixīn.', 'Eating cool ____ in summer is so happy.'],
    },
    ko: {
      word: '아이스크림',
      phonetic: 'aiseukeurim',
      mom: ['날씨가 더운데 시원한 아이스크림 먹을래?', 'Nalssiga deounde siwonhan aiseukeurim meogeullae?', 'It is warm out, want some cool ice cream?'],
      kid: ['와! 딸기 아이스크림 주세요!', 'Wa! Ttalgi aiseukeurim juseyo!', 'Wow! Strawberry ice cream, please!'],
      practice: ['차가운 ', '이 입에서 사르르 녹아요.', 'Chagaun ', 'i ibeseo sareureu nogayo.', 'The cold ____ melts softly in my mouth.'],
    },
  },
  {
    id: 'water',
    english: 'Water',
    emoji: '💧',
    category: 'snacks',
    distractorKeys: ['shoes', 'moon'],
    es: {
      word: 'Agua',
      phonetic: 'AH-gwah',
      mom: ['Después de correr, toma un poco de agua.', 'dehs-PWEHS deh koh-RREHR TOH-mah oon POH-koh deh AH-gwah', 'After running, drink a little water.'],
      kid: ['¡Tengo sed! El agua fresca me gusta.', 'TEHN-goh sehd ehl AH-gwah FREHS-kah meh GOOS-tah', 'I am thirsty! I like fresh water.'],
      practice: ['Bebo un vaso de ', ' fresca.', 'I drink a glass of fresh ____.'],
    },
    zh: {
      word: '水',
      phonetic: 'shuǐ',
      mom: ['跑完步流汗了，快来喝点水吧。', 'Pǎo wán bù liúhàn le, kuài lái hē diǎn shuǐ ba.', 'You sweated after running, come drink some water.'],
      kid: ['咕咚咕咚，喝水真解渴呀！', 'Gūdōng gūdōng, hē shuǐ zhēn jiěkě ya!', 'Gulp gulp, drinking water quenches my thirst!'],
      practice: ['口渴的时候要多喝温', '。', 'Kǒukě de shíhou yào duō hē wēn ', '.', 'Drink warm ____ when you feel thirsty.'],
    },
    ko: {
      word: '물',
      phonetic: 'mul',
      mom: ['신나게 놀았으니 시원한 물 마시자!', 'Sinnage norasseuni siwonhan mul masija!', 'After playing hard, let’s drink cool water!'],
      kid: ['목이 말랐어요! 물 한 잔 주세요.', 'Mogi mallasseoyo! Mul han jan juseyo.', 'I was thirsty! One glass of water, please.'],
      practice: ['운동하고 나서 시원한 ', '을 마셔요.', 'Undonghago naseo siwonhan ', 'eul masyeoyo.', 'After exercise, I drink cool ____.'],
    },
  },
  {
    id: 'bread',
    english: 'Bread',
    emoji: '🍞',
    category: 'snacks',
    distractorKeys: ['ball', 'dog'],
    es: {
      word: 'Pan',
      phonetic: 'pahn',
      mom: ['El pan recién horneado huele delicioso.', 'ehl pahn rreh-SYEHN ohr-neh-AH-doh WEH-leh deh-lee-SYOH-soh', 'The freshly baked bread smells delicious.'],
      kid: ['¡Quiero pan blandito para el desayuno!', 'KYEH-roh pahn blahn-DEE-toh PAH-rah ehl deh-sah-YOO-noh', 'I want soft bread for breakfast!'],
      practice: ['Comemos ', ' tostado por la mañana.', 'We eat toasted ____ in the morning.'],
    },
    zh: {
      word: '面包',
      phonetic: 'miànbāo',
      mom: ['刚烤好的面包闻起来真香呀！', 'Gāng kǎo hǎo de miànbāo wén qǐlái zhēn xiāng ya!', 'The freshly baked bread smells so good!'],
      kid: ['软软的面包真好吃！', 'Ruǎnruǎn de miànbāo zhēn hǎochī!', 'The fluffy bread is so delicious!'],
      practice: ['早餐我吃了一片软软的', '。', 'Zǎocān wǒ chī le yī piàn ruǎnruǎn de ', '.', 'For breakfast I ate a slice of soft ____.'],
    },
    ko: {
      word: '빵',
      phonetic: 'ppang',
      mom: ['갓 구운 따뜻한 빵 냄새가 나네!', 'Gat guun ttatteutan ppang naemsaega nane!', 'I smell freshly baked warm bread!'],
      kid: ['우와, 폭신폭신한 빵 먹고 싶어요!', 'Uwa, poksinpoksinhan ppang meokgo sipeoyo!', 'Wow, I want to eat fluffy bread!'],
      practice: ['고소하고 부드러운 ', '을 먹어요.', 'Gosohago budeureoun ', 'eul meogeoyo.', 'I eat savory and soft ____.'],
    },
  },
  {
    id: 'strawberry',
    english: 'Strawberry',
    emoji: '🍓',
    category: 'snacks',
    distractorKeys: ['car', 'shoes'],
    es: {
      word: 'Fresa',
      phonetic: 'FREH-sah',
      mom: ['Lavé estas fresas rojas para tu merienda.', 'lah-BEH EHS-tahs FREH-sahs RROH-hahs PAH-rah too meh-RYEHN-dah', 'I washed these red strawberries for your snack.'],
      kid: ['¡Mmm, esta fresa es súper dulce!', 'mmm EHS-tah FREH-sah ehs SOO-pehr DOOL-seh', 'Mmm, this strawberry is super sweet!'],
      practice: ['La ', ' roja tiene puntitos pequeños.', 'The red ____ has tiny little dots.'],
    },
    zh: {
      word: '草莓',
      phonetic: 'cǎoméi',
      mom: ['妈妈洗了甜甜的红草莓给你吃。', 'Māma xǐ le tiántián de hóng cǎoméi gěi nǐ chī.', 'Mom washed sweet red strawberries for you.'],
      kid: ['太棒了，我最喜欢吃草莓啦！', 'Tài bàng le, wǒ zuì xǐhuan chī cǎoméi la!', 'Awesome, I love eating strawberries the most!'],
      practice: ['蛋糕上面放了一颗红红的', '。', 'Dàngāo shàngmian fàng le yī kē hónghóng de ', '.', 'There is a bright red ____ on top of the cake.'],
    },
    ko: {
      word: '딸기',
      phonetic: 'ttalgi',
      mom: ['새콤달콤한 빨간 딸기 먹어 볼래?', 'Saekomdalkomhan ppalgan ttalgi meogeo bollae?', 'Want to try a sweet and tangy red strawberry?'],
      kid: ['네! 딸기 향기가 정말 좋아요!', 'Ne! Ttalgi hyanggiga jeongmal joayo!', 'Yes! The strawberry smells so good!'],
      practice: ['케이크 위에 빨간 ', '가 있어요.', 'Keikeu wie ppalgan ', 'ga isseoyo.', 'There is a red ____ on top of the cake.'],
    },
  },

  // ======================== 3. COLORS & NATURE (8 concepts = 24 cards) ========================
  {
    id: 'red',
    english: 'Red',
    emoji: '🔴',
    category: 'colors',
    distractorKeys: ['dog', 'shoes'],
    es: {
      word: 'Rojo',
      phonetic: 'RROH-hoh',
      mom: ['¿De qué color es ese camión de bomberos?', 'deh keh koh-LOHR ehs EH-seh kah-MYOHN deh bohm-BEH-rohs', 'What color is that fire truck?'],
      kid: ['¡Es de color rojo brillante!', 'ehs deh koh-LOHR RROH-hoh bree-YAHN-teh', 'It is bright red!'],
      practice: ['La manzana y el corazón son de color ', '.', 'The apple and heart are ____.'],
    },
    zh: {
      word: '红色',
      phonetic: 'hóngsè',
      mom: ['你看消防车是什么颜色的呀？', 'Nǐ kàn xiāofángchē shì shénme yánsè de ya?', 'Look, what color is the fire truck?'],
      kid: ['消防车是鲜艳的红色！', 'Xiāofángchē shì xiānyàn de hóngsè!', 'The fire truck is bright red!'],
      practice: ['大苹果是漂亮的', '。', 'Dà píngguǒ shì piàoliang de ', '.', 'The big apple is a pretty ____ color.'],
    },
    ko: {
      word: '빨간색',
      phonetic: 'ppalgangsaek',
      mom: ['사과랑 소방차는 무슨 색일까?', 'Sagwarang sobangchaneun museun saegilkka?', 'What color are apples and fire trucks?'],
      kid: ['예쁜 빨간색이에요!', 'Yeppeun ppalgansaegieyo!', 'They are pretty red!'],
      practice: ['잘 익은 딸기는 ', '이에요.', 'Jal igeun ttalgineun ', 'ieyo.', 'Ripe strawberries are ____.'],
    },
  },
  {
    id: 'blue',
    english: 'Blue',
    emoji: '🔵',
    category: 'colors',
    distractorKeys: ['apple', 'car'],
    es: {
      word: 'Azul',
      phonetic: 'ah-SOOL',
      mom: ['Mira hacia arriba, ¿de qué color es el cielo?', 'MEE-rah AH-syah ah-RREE-bah deh keh koh-LOHR ehs ehl SYEH-loh', 'Look up, what color is the sky?'],
      kid: ['¡El cielo hoy es azul bonito!', 'ehl SYEH-loh oy ehs ah-SOOL boh-NEE-toh', 'The sky today is a pretty blue!'],
      practice: ['El mar y el cielo son de color ', '.', 'The sea and the sky are ____.'],
    },
    zh: {
      word: '蓝色',
      phonetic: 'lánsè',
      mom: ['抬头看看，今天的天空是什么颜色？', 'Táitóu kànkan, jīntiān de tiānkōng shì shénme yánsè?', 'Look up, what color is the sky today?'],
      kid: ['天空和大海一样，是蓝色的！', 'Tiānkōng hé dàhǎi yīyàng, shì lánsè de!', 'The sky is blue, just like the ocean!'],
      practice: ['我用', '画了一片大海。', 'Wǒ yòng ', ' huà le yī piàn dàhǎi.', 'I used ____ to draw a big ocean.'],
    },
    ko: {
      word: '파란색',
      phonetic: 'parangsaek',
      mom: ['오늘 하늘과 바다는 무슨 색이니?', 'Oneul haneulgwa badaneun museun saegini?', 'What color are the sky and ocean today?'],
      kid: ['시원한 파란색이에요!', 'Siwonhan paransaegieyo!', 'They are cool blue!'],
      practice: ['맑은 하늘은 깨끗한 ', '이에요.', 'Malgeun haneureun kkaekkeutan ', 'ieyo.', 'The clear sky is clean ____.'],
    },
  },
  {
    id: 'yellow',
    english: 'Yellow',
    emoji: '🟡',
    category: 'colors',
    distractorKeys: ['shoes', 'dog'],
    es: {
      word: 'Amarillo',
      phonetic: 'ah-mah-REE-yoh',
      mom: ['¿Qué crayón usaste para pintar el patito?', 'keh krah-YOHN oo-SAHS-teh PAH-rah peen-TAHR ehl pah-TEE-toh', 'Which crayon did you use to color the duckling?'],
      kid: ['¡Usé el crayón amarillo como el sol!', 'oo-SEH ehl krah-YOHN ah-mah-REE-yoh KOH-moh ehl sohl', 'I used the yellow crayon like the sun!'],
      practice: ['El pollito pequeño es de color ', '.', 'The little chick is ____.'],
    },
    zh: {
      word: '黄色',
      phonetic: 'huángsè',
      mom: ['小鸭子是用什么颜色画出来的呀？', 'Xiǎo yāzi shì yòng shénme yánsè huà chūlái de ya?', 'What color did you use to draw the little duck?'],
      kid: ['我用了亮亮的黄色蜡笔！', 'Wǒ yòng le liàngliàng de huángsè làbǐ!', 'I used the bright yellow crayon!'],
      practice: ['香蕉和柠檬都是', '的。', 'Xiāngjiāo hé níngméng dōu shì ', ' de.', 'Bananas and lemons are both ____.'],
    },
    ko: {
      word: '노란색',
      phonetic: 'norangsaek',
      mom: ['병아리랑 바나나는 무슨 색일까?', 'Byeongarirang banananeun museun saegilkka?', 'What color are chicks and bananas?'],
      kid: ['반짝반짝 귀여운 노란색이에요!', 'Banjjakbanjjak gwiyeoun noransaegieyo!', 'They are bright cute yellow!'],
      practice: ['귀여운 오리 인형은 ', '이에요.', 'Gwiyeoun ori inhyeongeun ', 'ieyo.', 'The cute duck toy is ____.'],
    },
  },
  {
    id: 'green',
    english: 'Green',
    emoji: '🟢',
    category: 'colors',
    distractorKeys: ['apple', 'moon'],
    es: {
      word: 'Verde',
      phonetic: 'BEHR-deh',
      mom: ['Mira la ranita saltando en las hojas.', 'MEE-rah lah rrah-NEE-tah sahl-TAHN-doh ehn lahs OH-hahs', 'Look at the little frog jumping on the leaves.'],
      kid: ['¡La ranita y el pasto son de color verde!', 'lah rrah-NEE-tah ee ehl PAHS-toh sohn deh koh-LOHR BEHR-deh', 'The little frog and the grass are green!'],
      practice: ['Los árboles del parque tienen hojas de color ', '.', 'The park trees have ____ leaves.'],
    },
    zh: {
      word: '绿色',
      phonetic: 'lǜsè',
      mom: ['春天来了，树叶变成了什么颜色？', 'Chūntiān lái le, shùyè biànchéng le shénme yánsè?', 'Spring is here, what color did the leaves turn?'],
      kid: ['小草和树叶都是绿色的！', 'Xiǎocǎo hé shùyè dōu shì lǜsè de!', 'The grass and leaves are all green!'],
      practice: ['小青蛙穿着一件', '的衣服。', 'Xiǎo qīngwā chuānzhe yī jiàn ', ' de yīfu.', 'The little frog wears ____ clothes.'],
    },
    ko: {
      word: '초록색',
      phonetic: 'choroksaek',
      mom: ['공원의 나뭇잎과 풀은 무슨 색이지?', 'Gongwonui namunnipgwa pureun museun saegiji?', 'What color are the leaves and grass in the park?'],
      kid: ['눈이 시원해지는 초록색이에요!', 'Nuni siwonhaejineun choroksaegieyo!', 'They are refreshing green!'],
      practice: ['개구리는 풀밭처럼 ', '이에요.', 'Gaegurineun pulbatcheoreom ', 'ieyo.', 'The frog is ____ like the grass.'],
    },
  },
  {
    id: 'sun',
    english: 'Sun',
    emoji: '☀️',
    category: 'colors',
    distractorKeys: ['shoes', 'car'],
    es: {
      word: 'Sol',
      phonetic: 'sohl',
      mom: ['¡Buenos días! Ya salió el sol por la ventana.', 'BWEH-nohs DEE-ahs yah sah-LYOH ehl sohl pohr lah behn-TAH-nah', 'Good morning! The sun came out by the window.'],
      kid: ['¡El sol brilla mucho, vamos a jugar!', 'ehl sohl BREE-yah MOO-choh BAH-mohs ah hoo-GAHR', 'The sun shines bright, let’s go play!'],
      practice: ['El ', ' nos da calor durante el día.', 'The ____ gives us warmth during the day.'],
    },
    zh: {
      word: '太阳',
      phonetic: 'tàiyáng',
      mom: ['早上好！你看窗外太阳出来啦！', 'Zǎoshang hǎo! Nǐ kàn chuāngwài tàiyáng chūlái la!', 'Good morning! Look outside, the sun is out!'],
      kid: ['太阳暖洋洋的，我们去公园吧！', 'Tàiyáng nuǎnyángyáng de, wǒmen qù gōngyuán ba!', 'The sun is so warm, let’s go to the park!'],
      practice: ['天上的', '公公笑眯眯。', 'Tiānshàng de ', ' gōnggong xiàomīmī.', 'Grandpa ____ in the sky is smiling brightly.'],
    },
    ko: {
      word: '해',
      phonetic: 'hae',
      mom: ['좋은 아침이야! 창밖에 밝은 해가 떴어.', 'Joeun achimiya! Changbakke balgeun haega tteosseo.', 'Good morning! The bright sun rose outside the window.'],
      kid: ['따뜻한 해가 비추니까 기분이 좋아요!', 'Ttatteutan haega bichunikka gibuni joayo!', 'I feel great because the warm sun is shining!'],
      practice: ['낮에는 하늘에 밝은 ', '가 떠요.', 'Najeneun haneure balgeun ', 'ga tteoyo.', 'During the day, the bright ____ shines in the sky.'],
    },
  },
  {
    id: 'moon',
    english: 'Moon',
    emoji: '🌙',
    category: 'colors',
    distractorKeys: ['apple', 'dog'],
    es: {
      word: 'Luna',
      phonetic: 'LOO-nah',
      mom: ['Ya es de noche, mira la luna en el cielo.', 'yah ehs deh NOH-cheh MEE-rah lah LOO-nah ehn ehl SYEH-loh', 'It is nighttime now, look at the moon in the sky.'],
      kid: ['¡Buenas noches, señora luna!', 'BWEH-nahs NOH-chehs seh-NYOH-rah LOO-nah', 'Goodnight, Mrs. Moon!'],
      practice: ['Por la noche brilla la ', ' blanca.', 'At night the white ____ shines.'],
    },
    zh: {
      word: '月亮',
      phonetic: 'yuèliang',
      mom: ['天黑了，弯弯的月亮出来啦。', 'Tiān hēi le, wānwān de yuèliang chūlái la.', 'It is dark now, the curved moon came out.'],
      kid: ['月亮晚安，我要去睡觉啦！', 'Yuèliang wǎn’ān, wǒ yào qù shuìjiào la!', 'Goodnight moon, I am going to sleep now!'],
      practice: ['弯弯的', '像一条小船。', 'Wānwān de ', ' xiàng yī tiáo xiǎochuán.', 'The curved ____ looks like a little boat.'],
    },
    ko: {
      word: '달',
      phonetic: 'dal',
      mom: ['밤하늘에 둥근 달이 환하게 떴네!', 'Bamhaneure dunggeun dari hwanhage tteonne!', 'A round moon rose brightly in the night sky!'],
      kid: ['예쁜 달님, 오늘 밤도 잘 자요!', 'Yeppeun dallim, oneul bamdo jal jayo!', 'Pretty moon, sleep well tonight too!'],
      practice: ['밤하늘에 노란 ', '이 밝게 빛나요.', 'Bamhaneure noran ', 'i balkge binnayo.', 'The yellow ____ shines brightly in the night sky.'],
    },
  },
  {
    id: 'star',
    english: 'Star',
    emoji: '⭐',
    category: 'colors',
    distractorKeys: ['car', 'shoes'],
    es: {
      word: 'Estrella',
      phonetic: 'ehs-TREH-yah',
      mom: ['¡Pide un deseo a esa estrella brillante!', 'PEE-deh oon deh-SEH-oh ah EH-sah ehs-TREH-yah bree-YAHN-teh', 'Make a wish on that bright star!'],
      kid: ['¡Veo muchas estrellas titilando!', 'BEH-oh MOO-chahs ehs-TREH-yahs tee-tee-LAHN-doh', 'I see many stars twinkling!'],
      practice: ['Ganaste una ', ' dorada por aprender hoy.', 'You earned a golden ____ for learning today.'],
    },
    zh: {
      word: '星星',
      phonetic: 'xīngxing',
      mom: ['一闪一闪亮晶晶，满天都是小星星！', 'Yī shǎn yī shǎn liàngjīngjīng, mǎntiān dōu shì xiǎo xīngxing!', 'Twinkle twinkle little star, the sky is full of little stars!'],
      kid: ['妈妈你看，那颗星星最亮啦！', 'Māma nǐ kàn, nà kē xīngxing zuì liàng la!', 'Mom look, that star is the brightest!'],
      practice: ['夜空中有许多闪亮的', '。', 'Yèkōng zhōng yǒu xǔduō shǎnliàng de ', '.', 'There are many shining ____ in the night sky.'],
    },
    ko: {
      word: '별',
      phonetic: 'byeol',
      mom: ['반짝반짝 작은 별이 아름답게 비치네!', 'Banjjakbanjjak jageun byeori areumdapge bichine!', 'Twinkle twinkle little star shines so beautifully!'],
      kid: ['하늘에 반짝이는 별이 정말 많아요!', 'Haneure banjjagineun byeori jeongmal manayo!', 'There are so many twinkling stars in the sky!'],
      practice: ['밤하늘에 반짝반짝 ', '이 떠 있어요.', 'Bamhaneure banjjakbanjjak ', 'i tteo isseoyo.', 'Twinkling ____ float in the night sky.'],
    },
  },
  {
    id: 'flower',
    english: 'Flower',
    emoji: '🌸',
    category: 'colors',
    distractorKeys: ['ball', 'dog'],
    es: {
      word: 'Flor',
      phonetic: 'flohr',
      mom: ['¡Qué bonito huele esta flor rosada!', 'keh boh-NEE-toh WEH-leh EHS-tah flohr rroh-SAH-dah', 'How lovely this pink flower smells!'],
      kid: ['¡Mira, una mariposa se posó en la flor!', 'MEE-rah OO-nah mah-ree-POH-sah seh poh-SOH ehn lah flohr', 'Look, a butterfly landed on the flower!'],
      practice: ['En el jardín creció una ', ' hermosa.', 'A beautiful ____ grew in the garden.'],
    },
    zh: {
      word: '花朵',
      phonetic: 'huāduǒ',
      mom: ['花园里的花朵开得真漂亮呀！', 'Huāyuán lǐ de huāduǒ kāi de zhēn piàoliang ya!', 'The flowers in the garden are blooming so prettily!'],
      kid: ['这朵粉红色的花朵好香呀！', 'Zhè duǒ fěnhóngsè de huāduǒ hǎo xiāng ya!', 'This pink flower smells so sweet!'],
      practice: ['小蜜蜂飞到香香的', '上。', 'Xiǎo mìfēng fēi dào xiāngxiāng de ', ' shàng.', 'The little bee flew onto the fragrant ____.'],
    },
    ko: {
      word: '꽃',
      phonetic: 'kkot',
      mom: ['화단에 예쁜 꽃이 활짝 피었네!', 'Hwadane yeppeun kkochi hwaljjak pieonne!', 'Pretty flowers bloomed wide in the flowerbed!'],
      kid: ['우와, 꽃에서 달콤한 향기가 나요!', 'Uwa, kkocheseo dalkomhan hyanggiga nayo!', 'Wow, a sweet scent comes from the flower!'],
      practice: ['봄이 오면 예쁜 ', '이 피어나요.', 'Bomi omyeon yeppeun ', 'i pieonayo.', 'When spring comes, pretty ____ bloom.'],
    },
  },

  // ======================== 4. FAMILY & FEELINGS (8 concepts = 24 cards) ========================
  {
    id: 'mom',
    english: 'Mom',
    emoji: '👩',
    category: 'family',
    distractorKeys: ['car', 'apple'],
    es: {
      word: 'Mamá',
      phonetic: 'mah-MAH',
      mom: ['¡Ven aquí, mamá te va a leer un cuento!', 'behn ah-KEE mah-MAH teh bah ah leh-EHR oon KWEHN-toh', 'Come here, Mom is going to read you a story!'],
      kid: ['¡Te quiero mucho, mamá!', 'teh KYEH-roh MOO-choh mah-MAH', 'I love you so much, Mom!'],
      practice: ['Mi ', ' me da un beso de buenas noches.', 'My ____ gives me a goodnight kiss.'],
    },
    zh: {
      word: '妈妈',
      phonetic: 'māma',
      mom: ['宝贝过来，妈妈给你讲个故事吧！', 'Bǎobèi guòlái, māma gěi nǐ jiǎng gè gùshi ba!', 'Come here sweetheart, Mom will tell you a story!'],
      kid: ['我最爱妈妈啦！', 'Wǒ zuì ài māma la!', 'I love Mom the very most!'],
      practice: ['温柔的', '牵着我的小手。', 'Wēnróu de ', ' qiānzhe wǒ de xiǎoshǒu.', 'Gentle ____ holds my little hand.'],
    },
    ko: {
      word: '엄마',
      phonetic: 'eomma',
      mom: ['우리 아기, 엄마랑 재미있는 책 읽을까?', 'Uri agi, eommarang jaemiinneun chaek ilgeulkka?', 'My sweetheart, shall we read a fun book with Mom?'],
      kid: ['엄마 사랑해요! 제일 좋아요!', 'Eomma saranghaeyo! Jeil joayo!', 'I love you Mom! You are the best!'],
      practice: ['우리 ', '는 요리를 정말 잘해요.', 'Uri ', 'neun yorireul jeongmal jalhaeyo.', 'My ____ is really good at cooking.'],
    },
  },
  {
    id: 'dad',
    english: 'Dad',
    emoji: '👨',
    category: 'family',
    distractorKeys: ['moon', 'shoes'],
    es: {
      word: 'Papá',
      phonetic: 'pah-PAH',
      mom: ['¡Mira quién llegó a casa! ¡Es papá!', 'MEE-rah kyehn yeh-GOH ah KAH-sah ehs pah-PAH', 'Look who came home! It is Dad!'],
      kid: ['¡Hola papá! ¿Jugamos al avión?', 'OH-lah pah-PAH hoo-GAH-mohs ahl ah-BYOHN', 'Hi Dad! Can we play airplane?'],
      practice: ['Juego en los hombros de mi ', '.', 'I play on my ____’s shoulders.'],
    },
    zh: {
      word: '爸爸',
      phonetic: 'bàba',
      mom: ['听，门开了，是爸爸回家啦！', 'Tīng, mén kāi le, shì bàba huíjiā la!', 'Listen, the door opened, Dad is home!'],
      kid: ['爸爸抱抱！我们一起搭积木吧！', 'Bàba bàobao! Wǒmen yīqǐ dā jīmù ba!', 'Hug me Dad! Let’s build blocks together!'],
      practice: ['周末我和', '一起踢足球。', 'Zhōumò wǒ hé ', ' yīqǐ tī zúqiú.', 'On weekends I play soccer with ____.'],
    },
    ko: {
      word: '아빠',
      phonetic: 'appa',
      mom: ['딩동! 아빠가 집에 오셨나 봐!', 'Dingdong! Appaga jibe osyeonna bwa!', 'Ding-dong! Looks like Dad is home!'],
      kid: ['아빠다! 아빠, 비행기 태워 주세요!', 'Appada! Appa, bihaenggi taewo juseyo!', 'It’s Dad! Dad, give me an airplane ride!'],
      practice: ['멋진 ', '와 함께 공원에 가요.', 'Meotjin ', 'wa hamkke gongwone gayo.', 'I go to the park with my cool ____.'],
    },
  },
  {
    id: 'grandma',
    english: 'Grandma',
    emoji: '👵',
    category: 'family',
    distractorKeys: ['ball', 'car'],
    es: {
      word: 'Abuela',
      phonetic: 'ah-BWEH-lah',
      mom: ['Hoy vamos a visitar a la abuela.', 'oy BAH-mohs ah bee-see-TAHR ah lah ah-BWEH-lah', 'Today we are going to visit Grandma.'],
      kid: ['¡Hurra! La abuela hace galletas ricas.', 'oo-RRAH lah ah-BWEH-lah AH-seh gah-YEH-tahs RREE-kahs', 'Hooray! Grandma makes yummy cookies.'],
      practice: ['La ', ' nos cuenta historias bonitas.', '____ tells us lovely stories.'],
    },
    zh: {
      word: '奶奶',
      phonetic: 'nǎinai',
      mom: ['今天我们去奶奶家吃好吃的吧！', 'Jīntiān wǒmen qù nǎinai jiā chī hǎochī de ba!', 'Let’s go to Grandma’s house for yummy food today!'],
      kid: ['好耶！奶奶包的饺子最香啦！', 'Hǎo yē! Nǎinai bāo de jiǎozi zuì xiāng la!', 'Yay! Grandma’s dumplings smell the best!'],
      practice: ['慈祥的', '给我织了毛衣。', 'Cíxiáng de ', ' gěi wǒ zhī le máoyī.', 'Kind ____ knitted a sweater for me.'],
    },
    ko: {
      word: '할머니',
      phonetic: 'halmeoni',
      mom: ['이번 주말에 할머니 댁에 놀러 갈까?', 'Ibeon jumare halmeoni daege nolleo galkka?', 'Shall we visit Grandma’s house this weekend?'],
      kid: ['좋아요! 할머니가 보고 싶었어요!', 'Joayo! Halmeoniga bogo sipeosseoyo!', 'Yay! I missed Grandma!'],
      practice: ['다정한 ', '가 옛날이야기를 해 주셔요.', 'Dajeonghan ', 'ga yennariyagireul hae jusyeoyo.', 'Warm ____ tells me old fairy tales.'],
    },
  },
  {
    id: 'baby',
    english: 'Baby',
    emoji: '👶',
    category: 'family',
    distractorKeys: ['apple', 'shoes'],
    es: {
      word: 'Bebé',
      phonetic: 'beh-BEH',
      mom: ['Shhh, habla bajito, el bebé está durmiendo.', 'shhh AH-blah bah-HEE-toh ehl beh-BEH ehs-TAH door-MYEHN-doh', 'Shhh, speak softly, the baby is sleeping.'],
      kid: ['¡El bebé tiene manitas muy pequeñitas!', 'ehl beh-BEH TYEH-neh mah-NEE-tahs mwee peh-keh-NYEE-tahs', 'The baby has super tiny little hands!'],
      practice: ['El ', ' sonríe en su cuna.', 'The ____ smiles in his crib.'],
    },
    zh: {
      word: '宝宝',
      phonetic: 'bǎobǎo',
      mom: ['嘘，轻一点，小宝宝睡着啦。', 'Xū, qīng yīdiǎn, xiǎo bǎobǎo shuìzháo la.', 'Shh, be gentle, the little baby fell asleep.'],
      kid: ['小宝宝笑起来真可爱呀！', 'Xiǎo bǎobǎo xiào qǐlái zhēn kě’ài ya!', 'The little baby is so cute when smiling!'],
      practice: ['摇篮里的小', '正在喝奶。', 'Yáolán lǐ de xiǎo ', ' zhèngzài hē nǎi.', 'The little ____ in the cradle is drinking milk.'],
    },
    ko: {
      word: '아기',
      phonetic: 'agi',
      mom: ['쉿! 귀여운 아기가 방긋방긋 웃고 있네.', 'Swit! Gwiyeoun agiga banggeutbanggeut utgo inne.', 'Shh! The cute baby is smiling brightly.'],
      kid: ['아기 손이 정말 작고 귀여워요!', 'Agi soni jeongmal jakgo gwiyeowoyo!', 'The baby’s hands are so tiny and cute!'],
      practice: ['작은 ', '가 새근새근 잠을 자요.', 'Jageun ', 'ga saegeunsaegeun jameul jayo.', 'The little ____ sleeps soundly.'],
    },
  },
  {
    id: 'happy',
    english: 'Happy',
    emoji: '😊',
    category: 'family',
    distractorKeys: ['car', 'moon'],
    es: {
      word: 'Feliz',
      phonetic: 'feh-LEES',
      mom: ['Te veo saltar y cantar, ¿estás feliz?', 'teh BEH-oh sahl-TAHR ee kahn-TAHR ehs-TAHS feh-LEES', 'I see you jumping and singing, are you happy?'],
      kid: ['¡Sí, estoy muy feliz porque vamos al parque!', 'see ehs-TOY mwee feh-LEES POHR-keh BAH-mohs ahl PAHR-keh', 'Yes, I am very happy because we are going to the park!'],
      practice: ['Estoy muy ', ' jugando con mis amigos.', 'I am very ____ playing with my friends.'],
    },
    zh: {
      word: '开心',
      phonetic: 'kāixīn',
      mom: ['今天在幼儿园玩得开心吗？', 'Jīntiān zài yòu’éryuán wán de kāixīn ma?', 'Did you have a happy time at preschool today?'],
      kid: ['超级开心！我们一起画了彩虹！', 'Chāojí kāixīn! Wǒmen yīqǐ huà le cǎihóng!', 'Super happy! We painted a rainbow together!'],
      practice: ['收到礼物的时候我特别', '。', 'Shōudào lǐwù de shíhou wǒ tèbié ', '.', 'I feel extra ____ when I get a present.'],
    },
    ko: {
      word: '행복해',
      phonetic: 'haengbokhae',
      mom: ['오늘 놀이터에서 노니까 기분이 어때?', 'Oneul noriteoeseo nonikka gibuni eottae?', 'How do you feel playing at the playground today?'],
      kid: ['정말 행복해! 매일 놀고 싶어요!', 'Jeongmal haengbokhae! Maeil nolgo sipeoyo!', 'So happy! I want to play every day!'],
      practice: ['엄마 아빠와 함께라서 정말 ', '요.', 'Eomma appawa hamkkeraseo jeongmal ', 'yo.', 'I am really ____ because I am with Mom and Dad.'],
    },
  },
  {
    id: 'sleepy',
    english: 'Sleepy',
    emoji: '🥱',
    category: 'family',
    distractorKeys: ['apple', 'ball'],
    es: {
      word: 'Con sueño',
      phonetic: 'kohn SWEH-nyoh',
      mom: ['Estás bostezando, ¿ya estás con sueño?', 'ehs-TAHS bohs-teh-SAHN-doh yah ehs-TAHS kohn SWEH-nyoh', 'You are yawning, are you sleepy already?'],
      kid: ['Sí mamá, estoy con sueño, quiero mi osito.', 'see mah-MAH ehs-TOY kohn SWEH-nyoh KYEH-roh mee oh-SEE-toh', 'Yes Mom, I am sleepy, I want my teddy bear.'],
      practice: ['El perrito está ', ' y cierra los ojos.', 'The puppy is ____ and closes its eyes.'],
    },
    zh: {
      word: '困了',
      phonetic: 'kùn le',
      mom: ['小宝贝打哈欠啦，是不是困了呀？', 'Xiǎo bǎobèi dǎ hāqian la, shì bushì kùn le ya?', 'Little sweetheart is yawning, are you sleepy?'],
      kid: ['嗯，我困了，想抱着小熊睡觉。', 'Ng, wǒ kùn le, xiǎng bàozhe xiǎoxióng shuìjiào.', 'Yes, I am sleepy, I want to hug my teddy to sleep.'],
      practice: ['天黑了，小猫咪揉揉眼睛说', '。', 'Tiān hēi le, xiǎo māomī róurou yǎnjing shuō ', '.', 'It is dark, the kitty rubs its eyes and feels ____.'],
    },
    ko: {
      word: '졸려',
      phonetic: 'jollyeo',
      mom: ['하품을 하네, 우리 아기 벌써 졸려?', 'Hapumeul hane, uri agi beolsseo jollyeo?', 'You are yawning, is my little one sleepy already?'],
      kid: ['네, 눈이 감겨요. 코 자고 싶어요.', 'Ne, nuni gamgyeoyo. Ko jago sipeoyo.', 'Yes, my eyes are closing. I want to go to sleep.'],
      practice: ['신나게 놀았더니 눈이 스르륵 ', '요.', 'Sinnage noratdeoni nuni seureureuk ', 'yo.', 'After playing hard, my eyes feel ____.'],
    },
  },
  {
    id: 'hug',
    english: 'Hug',
    emoji: '🤗',
    category: 'family',
    distractorKeys: ['shoes', 'dog'],
    es: {
      word: 'Abrazo',
      phonetic: 'ah-BRAH-soh',
      mom: ['¿Me das un abrazo grande de oso?', 'meh dahs oon ah-BRAH-soh GRAHN-deh deh OH-soh', 'Will you give me a big bear hug?'],
      kid: ['¡Sí, el abrazo más grande del mundo!', 'see ehl ah-BRAH-soh mahs GRAHN-deh dehl MOON-doh', 'Yes, the biggest hug in the world!'],
      practice: ['Le doy un ', ' fuerte a mi mamá.', 'I give a big ____ to my mom.'],
    },
    zh: {
      word: '拥抱',
      phonetic: 'yōngbào',
      mom: ['快来给妈妈一个大大的拥抱！', 'Kuài lái gěi māma yī gè dàdà de yōngbào!', 'Come give Mom a big warm hug!'],
      kid: ['好呀，妈妈的拥抱最温暖啦！', 'Hǎo ya, māma de yōngbào zuì wēnnuǎn la!', 'Okay, Mom’s hug is the warmest!'],
      practice: ['好朋友见面要给一个温暖的', '。', 'Hǎo péngyou jiànmiàn yào gěi yī gè wēnnuǎn de ', '.', 'Good friends give a warm ____ when they meet.'],
    },
    ko: {
      word: '안아줘',
      phonetic: 'anajwo',
      mom: ['우리 사랑둥이, 엄마가 꼭 안아줄게!', 'Uri sarangdungi, eommaga kkok anajulge!', 'My little love, Mom will hug you tight!'],
      kid: ['엄마, 따뜻하게 꼭 안아줘요!', 'Eomma, ttatteutage kkok anajwoyo!', 'Mom, hug me nice and warm!'],
      practice: ['엄마 아빠, 나를 포근하게 ', '요.', 'Eomma appa, nareul pogeunhage ', 'yo.', 'Mom and Dad, ____ me warmly.'],
    },
  },
  {
    id: 'friend',
    english: 'Friend',
    emoji: '🤝',
    category: 'family',
    distractorKeys: ['apple', 'moon'],
    es: {
      word: 'Amigo',
      phonetic: 'ah-MEE-goh',
      mom: ['¿Con quién compartiste tus juguetes hoy?', 'kohn kyehn kohm-pahr-TEES-teh toos hoo-GEH-tehs oy', 'Who did you share your toys with today?'],
      kid: ['¡Compartí mis bloques con mi nuevo amigo!', 'kohm-pahr-TEE mees BLOH-kehs kohn mee NWEH-boh ah-MEE-goh', 'I shared my blocks with my new friend!'],
      practice: ['Juego a la pelota con mi mejor ', '.', 'I play ball with my best ____.'],
    },
    zh: {
      word: '朋友',
      phonetic: 'péngyou',
      mom: ['你在滑梯那里交到新朋友了吗？', 'Nǐ zài huátī nàlǐ jiāodào xīn péngyou le ma?', 'Did you make a new friend by the slide?'],
      kid: ['交到了！我和好朋友一起分享玩具！', 'Jiāodào le! Wǒ hé hǎo péngyou yīqǐ fēnxiǎng wánjù!', 'I did! I shared toys with my good friend!'],
      practice: ['在学校里我有很多好', '。', 'Zài xuéxiào lǐ wǒ yǒu hěn duō hǎo ', '.', 'At school I have many good ____.'],
    },
    ko: {
      word: '친구',
      phonetic: 'chingu',
      mom: ['유치원에서 누구랑 제일 재미있게 놀았어?', 'Yuchiwoneseo nugurang jeil jaemiitge norasseo?', 'Who did you have the most fun playing with at preschool?'],
      kid: ['단짝 친구랑 사이좋게 블록 놀이를 했어요!', 'Danjjak chingurang saijoke beullok norireul haesseoyo!', 'I played blocks nicely with my best friend!'],
      practice: ['나는 ', '와 장난감을 나누어 써요.', 'Naneun ', 'wa jangnangameul nanueo sseoyo.', 'I share toys with my ____.'],
    },
  },

  // ======================== 5. PLAYGROUND & TOYS (8 concepts = 24 cards) ========================
  {
    id: 'ball',
    english: 'Ball',
    emoji: '⚽',
    category: 'playground',
    distractorKeys: ['apple', 'moon'],
    es: {
      word: 'Pelota',
      phonetic: 'peh-LOH-tah',
      mom: ['¡Patea la pelota hacia mí, uno, dos, tres!', 'pah-TEH-ah lah peh-LOH-tah AH-syah mee OO-noh dohs trehs', 'Kick the ball to me, one, two, three!'],
      kid: ['¡Allá va la pelota! ¡Gol!', 'ah-YAH bah lah peh-LOH-tah gohl', 'There goes the ball! Goal!'],
      practice: ['La ', ' redonda rebota muy alto.', 'The round ____ bounces very high.'],
    },
    zh: {
      word: '皮球',
      phonetic: 'píqiú',
      mom: ['来，把彩色皮球踢给妈妈！', 'Lái, bǎ cǎisè píqiú tī gěi māma!', 'Come on, kick the colorful ball to Mom!'],
      kid: ['接住啦！皮球跳得真高！', 'Jiēzhù la! Píqiú tiào de zhēn gāo!', 'Catch it! The ball bounces so high!'],
      practice: ['圆圆的', '在草地上滚来滚去。', 'Yuányuán de ', ' zài cǎodì shàng gǔnlái gǔnqù.', 'The round ____ rolls around on the grass.'],
    },
    ko: {
      word: '공',
      phonetic: 'gong',
      mom: ['하나, 둘, 셋 하면 동그란 공을 굴려 봐!', 'Hana, dul, set hamyeon donggeuran gongeul gullyeo bwa!', 'On one, two, three, roll the round ball!'],
      kid: ['통통 튀는 공을 잘 잡았어요!', 'Tongtong twineun gongeul jal jabasseoyo!', 'I caught the bouncy ball!'],
      practice: ['동그란 ', '을 발로 뻥 차요.', 'Donggeuran ', 'eul ballo ppeong chayo.', 'I kick the round ____ with my foot.'],
    },
  },
  {
    id: 'slide',
    english: 'Slide',
    emoji: '🛝',
    category: 'playground',
    distractorKeys: ['dog', 'shoes'],
    es: {
      word: 'Tobogán',
      phonetic: 'toh-boh-GAHN',
      mom: ['Sube las escaleras con cuidado en el tobogán.', 'SOO-beh lahs ehs-kah-LEH-rahs kohn kwee-DAH-doh ehn ehl toh-boh-GAHN', 'Climb the stairs carefully on the slide.'],
      kid: ['¡Uiii! ¡Bajo rápido por el tobogán!', 'wee BAH-hoh RRAH-pee-doh pohr ehl toh-boh-GAHN', 'Wheee! I slide down fast on the slide!'],
      practice: ['En el parque me deslizo por el ', '.', 'At the park I slide down the ____.'],
    },
    zh: {
      word: '滑梯',
      phonetic: 'huátī',
      mom: ['排队慢慢爬上去，从滑梯上滑下来吧！', 'Páiduì mànmàn pá shàngqù, cóng huátī shàng huá xiàlái ba!', 'Line up and climb slowly, then slide down the slide!'],
      kid: ['咻——滑滑梯太好玩啦！', 'Xiū — huá huátī tài hǎowán la!', 'Wheee — sliding down the slide is so much fun!'],
      practice: ['小朋友们排队玩高高的', '。', 'Xiǎo péngyoumen páiduì wán gāogāo de ', '.', 'The children line up to play on the tall ____.'],
    },
    ko: {
      word: '미끄럼틀',
      phonetic: 'mikkeureomtteul',
      mom: ['놀이터에서 미끄럼틀 타러 갈까?', 'Noriteoeseo mikkeureomtteul tareo galkka?', 'Shall we go ride the slide at the playground?'],
      kid: ['슈웅! 미끄럼틀을 타면 바람이 불어요!', 'Syuung! Mikkeureomtteureul tamyeon barami bureoyo!', 'Wheee! Riding the slide makes a breeze!'],
      practice: ['신나게 ', '을 타고 내려와요.', 'Sinnage ', 'eul tago naeryeowayo.', 'I slide down the ____ happily.'],
    },
  },
  {
    id: 'swing',
    english: 'Swing',
    emoji: '🎠',
    category: 'playground',
    distractorKeys: ['apple', 'car'],
    es: {
      word: 'Columpio',
      phonetic: 'koh-LOOM-pyoh',
      mom: ['Sujétate fuerte de las cadenas del columpio.', 'soo-HEH-tah-teh FWEHR-teh deh lahs kah-DEH-nahs dehl koh-LOOM-pyoh', 'Hold tight to the chains of the swing.'],
      kid: ['¡Empújame más alto en el columpio!', 'ehm-POO-hah-meh mahs AHL-toh ehn ehl koh-LOOM-pyoh', 'Push me higher on the swing!'],
      practice: ['Vuelo hacia el cielo en el ', '.', 'I fly toward the sky on the ____.'],
    },
    zh: {
      word: '秋千',
      phonetic: 'qiūqiān',
      mom: ['抓稳绳子，妈妈推你荡秋千喽！', 'Zhuā wěn shéngzi, māma tuī nǐ dàng qiūqiān lou!', 'Hold the ropes tight, Mom will push your swing!'],
      kid: ['荡秋千像小鸟一样飞起来啦！', 'Dàng qiūqiān xiàng xiǎoniǎo yīyàng fēi qǐlái la!', 'Swinging feels like flying like a little bird!'],
      practice: ['我们在大树下快乐地荡', '。', 'Wǒmen zài dàshù xià kuàilè de dàng ', '.', 'We happily ride the ____ under the big tree.'],
    },
    ko: {
      word: '그네',
      phonetic: 'geune',
      mom: ['줄을 꽉 잡아! 엄마가 그네 밀어 줄게.', 'Jureul kkwak jaba! Eommaga geune mireo julge.', 'Hold the ropes tight! Mom will push the swing.'],
      kid: ['그네를 타니까 하늘까지 날아갈 것 같아요!', 'Geunereul tanikka haneulkkaji naragal geot gatayo!', 'Riding the swing makes me feel like flying to the sky!'],
      practice: ['놀이터에서 높이높이 ', '를 타요.', 'Noriteoeseo nopinopi ', 'reul tayo.', 'I ride the ____ high up at the playground.'],
    },
  },
  {
    id: 'bike',
    english: 'Bike',
    emoji: '🚲',
    category: 'playground',
    distractorKeys: ['moon', 'dog'],
    es: {
      word: 'Bicicleta',
      phonetic: 'bee-see-KLEH-tah',
      mom: ['Ponte el casco antes de subir a la bicicleta.', 'POHN-teh ehl KAHS-koh AHN-tehs deh soo-BEER ah lah bee-see-KLEH-tah', 'Put on your helmet before getting on the bike.'],
      kid: ['¡Mira cómo pedaleo en mi bicicleta!', 'MEE-rah KOH-moh peh-dah-LEH-oh ehn mee bee-see-KLEH-tah', 'Look how I pedal on my bike!'],
      practice: ['Mi ', ' tiene dos ruedas y un timbre.', 'My ____ has two wheels and a bell.'],
    },
    zh: {
      word: '自行车',
      phonetic: 'zìxíngchē',
      mom: ['骑自行车之前要先戴好安全头盔哦！', 'Qí zìxíngchē zhīqián yào xiān dài hǎo ānquán tóukuī o!', 'Put on your safety helmet before riding your bike!'],
      kid: ['叮铃铃！我的小自行车跑得真稳！', 'Dīnglínglíng! Wǒ de xiǎo zìxíngchē pǎo de zhēn wěn!', 'Ring-ring! My little bike rides so steadily!'],
      practice: ['我戴上头盔去公园骑', '。', 'Wǒ dàishàng tóukuī qù gōngyuán qí ', '.', 'I put on my helmet to ride my ____ in the park.'],
    },
    ko: {
      word: '자전거',
      phonetic: 'jajeongeo',
      mom: ['모자를 쓰고 안전하게 자전거를 타 볼까?', 'Mojareul sseugo anjeonhage jajeongeoreul ta bolkka?', 'Shall we wear a helmet and ride the bike safely?'],
      kid: ['따르릉 따르릉! 자전거 타기가 재미있어요!', 'Ttareureung ttareureung! Jajeongeo tagiga jaemiisseoyo!', 'Ring ring! Riding a bike is so fun!'],
      practice: ['공원에서 신나게 ', '를 타요.', 'Gongwoneseon sinnage ', 'reul tayo.', 'I happily ride my ____ in the park.'],
    },
  },
  {
    id: 'book',
    english: 'Book',
    emoji: '📚',
    category: 'playground',
    distractorKeys: ['apple', 'shoes'],
    es: {
      word: 'Libro',
      phonetic: 'LEE-broh',
      mom: ['¿Qué libro de dibujos quieres leer esta noche?', 'keh LEE-broh deh dee-BOO-hohs KYEH-rehs leh-EHR EHS-tah NOH-cheh', 'Which picture book do you want to read tonight?'],
      kid: ['¡Quiero el libro de los dinosaurios!', 'KYEH-roh ehl LEE-broh deh lohs dee-noh-SOW-ryohs', 'I want the dinosaur book!'],
      practice: ['Abro mi ', ' para ver los dibujos.', 'I open my ____ to see the pictures.'],
    },
    zh: {
      word: '图书',
      phonetic: 'túshū',
      mom: ['睡前你想看哪一本故事图书呀？', 'Shuìqián nǐ xiǎng kàn nǎ yī běn gùshi túshū ya?', 'Which story picture book do you want to read before bed?'],
      kid: ['我想看那本有恐龙的图书！', 'Wǒ xiǎng kàn nà běn yǒu kǒnglóng de túshū!', 'I want to read that book with dinosaurs!'],
      practice: ['这本画画', '里有许多小动物。', 'Zhè běn huàhuà ', ' lǐ yǒu xǔduō xiǎo dòngwù.', 'There are many little animals in this picture ____.'],
    },
    ko: {
      word: '책',
      phonetic: 'chaek',
      mom: ['잠자기 전에 어떤 재미있는 책을 읽을까?', 'Jamjagi jeone eotteon jaemiinneun chaegeul ilgeulkka?', 'Which fun book shall we read before going to sleep?'],
      kid: ['공룡이 나오는 그림책 읽어 주세요!', 'Gongnyong-i naoneun geurimchaek ilgeo juseyo!', 'Please read me the dinosaur picture book!'],
      practice: ['엄마 무릎에 앉아서 재미있는 ', '을 읽어요.', 'Eomma mureupe anjaseo jaemiinneun ', 'eul ilgeoyo.', 'I sit on Mom’s lap and read a fun ____.'],
    },
  },
  {
    id: 'shoes',
    english: 'Shoes',
    emoji: '👟',
    category: 'playground',
    distractorKeys: ['moon', 'ball'],
    es: {
      word: 'Zapatos',
      phonetic: 'sah-PAH-tohs',
      mom: ['Vamos a salir, ponte tus zapatos para correr.', 'BAH-mohs ah sah-LEER POHN-teh toos sah-PAH-tohs PAH-rah koh-RREHR', 'We are going out, put on your running shoes.'],
      kid: ['¡Ya me puse mis zapatos yo solito!', 'yah meh POO-seh mees sah-PAH-tohs yoh soh-LEE-toh', 'I put on my shoes all by myself!'],
      practice: ['Me pongo los ', ' antes de ir al parque.', 'I put on my ____ before going to the park.'],
    },
    zh: {
      word: '鞋子',
      phonetic: 'xiézi',
      mom: ['出门前要把小鞋子穿好哦！', 'Chūmén qián yào bǎ xiǎo xiézi chuān hǎo o!', 'Put on your little shoes nicely before going out!'],
      kid: ['妈妈你看，我自己穿好鞋子啦！', 'Māma nǐ kàn, wǒ zìjǐ chuān hǎo xiézi la!', 'Mom look, I put on my shoes all by myself!'],
      practice: ['我穿上一双舒服的运动', '。', 'Wǒ chuānshàng yī shuāng shūfu de yùndòng ', '.', 'I put on a pair of comfy sneakers ____.'],
    },
    ko: {
      word: '신발',
      phonetic: 'sinbal',
      mom: ['밖에 나가기 전에 예쁜 신발을 신자!', 'Bakke nagagi jeone yeppeun sinbareul sinja!', 'Let’s put on pretty shoes before going outside!'],
      kid: ['짜잔! 혼자서도 신발을 잘 신어요!', 'Jjajan! Honjaseodo sinbareul jal sineoyo!', 'Ta-da! I can put on my shoes all by myself!'],
      practice: ['현관에서 내 ', '을 찾아 신어요.', 'Hyeongwaneseo nae ', 'eul chaja sineoyo.', 'I find and put on my ____ at the entrance.'],
    },
  },
  {
    id: 'car',
    english: 'Car',
    emoji: '🚗',
    category: 'playground',
    distractorKeys: ['apple', 'dog'],
    es: {
      word: 'Carro',
      phonetic: 'KAH-rroh',
      mom: ['¿Hacia dónde va tu carro de juguete?', 'AH-syah DOHN-deh bah too KAH-rroh deh hoo-GEH-teh', 'Where is your toy car going?'],
      kid: ['¡Brrrum! ¡Mi carro rojo va muy rápido!', 'brrroom mee KAH-rroh RROH-hoh bah mwee RRAH-pee-doh', 'Vroom! My red car goes super fast!'],
      practice: ['El ', ' rojo tiene cuatro ruedas.', 'The red ____ has four wheels.'],
    },
    zh: {
      word: '小汽车',
      phonetic: 'xiǎo qìchē',
      mom: ['你的玩具小汽车要开去哪里呀？', 'Nǐ de wánjù xiǎo qìchē yào kāi qù nǎlǐ ya?', 'Where is your toy car driving to?'],
      kid: ['嘟嘟！红色小汽车开过小桥啦！', 'Dūdū! Hóngsè xiǎo qìchē kāiguò xiǎoqiáo la!', 'Beep beep! The red toy car drove across the bridge!'],
      practice: ['弟弟最喜欢玩红色的玩具', '。', 'Dìdi zuì xǐhuan wán hóngsè de wánjù ', '.', 'Little brother loves playing with the red toy ____.'],
    },
    ko: {
      word: '자동차',
      phonetic: 'jadongcha',
      mom: ['부릉부릉! 장난감 자동차가 어디로 가니?', 'Bureungbureung! Jangnanggam jadongchaga eodiro gani?', 'Vroom vroom! Where is the toy car going?'],
      kid: ['빨간 자동차가 신나게 달리고 있어요!', 'Ppalgan jadongchaga sinnage dalligo isseoyo!', 'The red car is racing happily!'],
      practice: ['바퀴가 네 개인 장난감 ', '를 굴려요.', 'Bakwiga ne gaein jangnanggam ', 'reul gullyeoyo.', 'I roll the four-wheeled toy ____.'],
    },
  },
  {
    id: 'teddy-bear',
    english: 'Teddy Bear',
    emoji: '🧸',
    category: 'playground',
    distractorKeys: ['moon', 'shoes'],
    es: {
      word: 'Osito',
      phonetic: 'oh-SEE-toh',
      mom: ['¿Llevamos a tu osito de peluche a la cama?', 'yeh-BAH-mohs ah too oh-SEE-toh deh peh-LOO-cheh ah lah KAH-mah', 'Shall we bring your plush teddy bear to bed?'],
      kid: ['¡Sí, mi osito es muy suavecito!', 'see mee oh-SEE-toh ehs mwee swah-beh-SEE-toh', 'Yes, my teddy bear is so soft!'],
      practice: ['Duermo abrazando a mi ', ' de peluche.', 'I sleep hugging my plush ____.'],
    },
    zh: {
      word: '小熊',
      phonetic: 'xiǎoxióng',
      mom: ['晚上睡觉要带上你的毛绒小熊吗？', 'Wǎnshang shuìjiào yào dàishàng nǐ de máoróng xiǎoxióng ma?', 'Do you want to bring your plush teddy bear to bed tonight?'],
      kid: ['要！小熊软绵绵的，抱着最舒服！', 'Yào! Xiǎoxióng ruǎnmiánmián de, bàozhe zuì shūfu!', 'Yes! The teddy bear is so fluffy and cozy to hug!'],
      practice: ['床上坐着一只可爱的玩具', '。', 'Chuáng shàng zuòzhe yī zhī kě’ài de wánjù ', '.', 'A cute toy ____ is sitting on the bed.'],
    },
    ko: {
      word: '곰인형',
      phonetic: 'gominhyeong',
      mom: ['폭신폭신한 곰인형이랑 같이 코 잘까?', 'Poksinpoksinhan gominhyeong-irang gachi ko jalkka?', 'Shall we sleep together with your fluffy teddy bear?'],
      kid: ['네! 내 귀여운 곰인형을 꼭 안아 줄래요!', 'Ne! Nae gwiyeoun gominhyeongeul kkok ana jullaeyo!', 'Yes! I will hug my cute teddy bear tight!'],
      practice: ['침대 위에 부드러운 ', '이 앉아 있어요.', 'Chimdae wie budeureoun ', 'i anja isseoyo.', 'A soft ____ is sitting on the bed.'],
    },
  },
];

function buildExtraConcept(row: ExtraWordRow): FlashcardConcept {
  const engLower = row.english.toLowerCase();

  // Category-tailored Mom & Kid dialogues and practice sentences
  const templates: Record<
    CategoryId,
    {
      esMom: [string, string, string];
      esKid: [string, string, string];
      esPrac: [string, string, string];
      zhMom: [string, string, string];
      zhKid: [string, string, string];
      zhPrac: [string, string, string, string, string];
      koMom: [string, string, string];
      koKid: [string, string, string];
      koPrac: [string, string, string, string, string];
    }
  > = {
    animals: {
      esMom: [
        `¡Mira, ahí está el ${row.es.word.toLowerCase()}!`,
        `MEE-rah ah-EE ehs-TAH ehl ${row.es.phonetic}`,
        `Look, there is the ${engLower}!`,
      ],
      esKid: [
        `¡Qué lindo es el ${row.es.word.toLowerCase()}!`,
        `keh LEEN-doh ehs ehl ${row.es.phonetic}`,
        `How cute the ${engLower} is!`,
      ],
      esPrac: ['Mira cómo juega el ', ' en el parque.', `Look how the ____ plays in the park.`],
      zhMom: [
        `你看，那里有一只可爱的${row.zh.word}！`,
        `Nǐ kàn, nàlǐ yǒu yī zhī kě’ài de ${row.zh.phonetic}!`,
        `Look, there is a cute ${engLower} over there!`,
      ],
      zhKid: [
        `哇，这只${row.zh.word}真好玩！`,
        `Wā, zhè zhī ${row.zh.phonetic} zhēn hǎowán!`,
        `Wow, this ${engLower} is so fun!`,
      ],
      zhPrac: [
        '你看这只可爱的',
        '。',
        'Nǐ kàn zhè zhī kě’ài de ',
        '.',
        `Look at this cute ____.`,
      ],
      koMom: [
        `저기 귀여운 ${row.ko.word} 좀 봐!`,
        `Jeogi gwiyeoun ${row.ko.phonetic} jom bwa!`,
        `Look at that cute ${engLower} over there!`,
      ],
      koKid: [
        `우와, ${row.ko.word} 친구야 안녕!`,
        `Uwa, ${row.ko.phonetic} chinguya annyeong!`,
        `Wow, hello ${engLower} friend!`,
      ],
      koPrac: [
        '귀여운 ',
        ' 친구가 놀고 있어요.',
        'Gwiyeoun ',
        ' chinguga nolgo isseoyo.',
        `The cute ____ friend is playing.`,
      ],
    },
    snacks: {
      esMom: [
        `¿Quieres probar un poco de ${row.es.word.toLowerCase()}?`,
        `KYEH-rehs proh-BAHR oon POH-koh deh ${row.es.phonetic}`,
        `Would you like to try some ${engLower}?`,
      ],
      esKid: [
        `¡Sí, por favor! ¡Me gusta comer ${row.es.word.toLowerCase()}!`,
        `see pohr fah-BOHR meh GOOS-tah koh-MEHR ${row.es.phonetic}`,
        `Yes, please! I like eating ${engLower}!`,
      ],
      esPrac: ['Para la merienda quiero comer ', ' hoy.', `For snack time I want to eat ____ today.`],
      zhMom: [
        `宝贝，你想尝一尝美味的${row.zh.word}吗？`,
        `Bǎobèi, nǐ xiǎng cháng yī cháng měiwèi de ${row.zh.phonetic} ma?`,
        `Sweetheart, would you like to taste yummy ${engLower}?`,
      ],
      zhKid: [
        `好呀！我最喜欢吃香香的${row.zh.word}啦！`,
        `Hǎo ya! Wǒ zuì xǐhuan chī xiāngxiāng de ${row.zh.phonetic} la!`,
        `Yes! I love eating yummy ${engLower}!`,
      ],
      zhPrac: [
        '盘子里有好吃的',
        '。',
        'Pánzi lǐ yǒu hǎochī de ',
        '.',
        `There is yummy ____ on the plate.`,
      ],
      koMom: [
        `우리 같이 맛있는 ${row.ko.word} 먹을까?`,
        `Uri gachi masinneun ${row.ko.phonetic} meogeulkka?`,
        `Shall we eat delicious ${engLower} together?`,
      ],
      koKid: [
        `네, 주세요! ${row.ko.word} 정말 맛있어요!`,
        `Ne, juseyo! ${row.ko.phonetic} jeongmal masisseoyo!`,
        `Yes, please! ${row.english} is so delicious!`,
      ],
      koPrac: [
        '간식으로 맛있는 ',
        ' 주세요.',
        'Gansigeuro masinneun ',
        ' juseyo.',
        `Please give me yummy ____ for a snack.`,
      ],
    },
    colors: {
      esMom: [
        `¡Mira qué bonito se ve: ${row.es.word.toLowerCase()}!`,
        `MEE-rah keh boh-NEE-toh seh beh ${row.es.phonetic}`,
        `Look how pretty it looks: ${engLower}!`,
      ],
      esKid: [
        `¡Sí, me encanta ver ${row.es.word.toLowerCase()} afuera!`,
        `see meh ehn-KAHN-tah behr ${row.es.phonetic} ah-FWEH-rah`,
        `Yes, I love seeing ${engLower} outside!`,
      ],
      esPrac: ['En mi dibujo pinté ', ' muy bonito.', `In my picture I painted a very pretty ____.`],
      zhMom: [
        `快看外面，那是漂亮的${row.zh.word}！`,
        `Kuài kàn wàimiàn, nà shì piàoliang de ${row.zh.phonetic}!`,
        `Look outside, that is pretty ${engLower}!`,
      ],
      zhKid: [
        `好美呀！我要把${row.zh.word}画下来！`,
        `Hǎo měi ya! Wǒ yào bǎ ${row.zh.phonetic} huà xiàlái!`,
        `So pretty! I want to draw ${engLower}!`,
      ],
      zhPrac: [
        '图画书上有美丽的',
        '。',
        'Túhuàshū shàng yǒu měilì de ',
        '.',
        `There is beautiful ____ in the picture book.`,
      ],
      koMom: [
        `밖을 봐, 예쁜 ${row.ko.word} 보이지?`,
        `Bakkeul bwa, yeppeun ${row.ko.phonetic} boiji?`,
        `Look outside, do you see the pretty ${engLower}?`,
      ],
      koKid: [
        `네! ${row.ko.word} 보니까 기분이 좋아요!`,
        `Ne! ${row.ko.phonetic} bonikka gibuni joayo!`,
        `Yes! Seeing ${engLower} makes me feel happy!`,
      ],
      koPrac: [
        '도화지에 예쁜 ',
        ' 그림을 그려요.',
        'Dohwajie yeppeun ',
        ' geurimeul geuryeoyo.',
        `I draw a pretty ____ picture on the paper.`,
      ],
    },
    family: {
      esMom: [
        `Hoy compartimos amor y decimos: ¡${row.es.word}!`,
        `oy kohm-pahr-TEE-mohs ah-MOHR ee deh-SEE-mohs ${row.es.phonetic}`,
        `Today we share love and say: ${row.english}!`,
      ],
      esKid: [
        `¡Qué bonito es decir ${row.es.word.toLowerCase()} en familia!`,
        `keh boh-NEE-toh ehs deh-SEER ${row.es.phonetic} ehn fah-MEE-lyah`,
        `How nice it is to say ${engLower} with family!`,
      ],
      esPrac: ['En nuestra casa siempre hay ', ' todos los días.', `In our home there is always ____ every day.`],
      zhMom: [
        `在家里我们要开心地说：${row.zh.word}！`,
        `Zài jiālǐ wǒmen yào kāixīn de shuō: ${row.zh.phonetic}!`,
        `At home let’s happily say: ${row.english}!`,
      ],
      zhKid: [
        `嗯！和家人在一起真温暖：${row.zh.word}！`,
        `Ng! Hé jiārén zài yīqǐ zhēn wēnnuǎn: ${row.zh.phonetic}!`,
        `Yes! Being with family is so warm: ${row.english}!`,
      ],
      zhPrac: [
        '我们大家都喜欢温暖的',
        '。',
        'Wǒmen dàjiā dōu xǐhuan wēnnuǎn de ',
        '.',
        `We all love warm ____.`,
      ],
      koMom: [
        `우리 사랑하는 가족에게 ${row.ko.word} 해 볼까?`,
        `Uri saranghaneun gajogege ${row.ko.phonetic} hae bolkka?`,
        `Shall we share ${engLower} with our loving family?`,
      ],
      koKid: [
        `좋아요! ${row.ko.word} 하니까 마음이 따뜻해요!`,
        `Joayo! ${row.ko.phonetic} hanikka maeumi ttatteutaeyo!`,
        `Yay! ${row.english} makes my heart feel warm!`,
      ],
      koPrac: [
        '사랑하는 가족과 함께하는 ',
        ' 최고예요.',
        'Saranghaneun gajokgwa hamkkehaneun ',
        ' choegoyeyo.',
        `Sharing ____ with my loving family is the best.`,
      ],
    },
    playground: {
      esMom: [
        `¿Jugamos hoy con tu ${row.es.word.toLowerCase()}?`,
        `hoo-GAH-mohs oy kohn too ${row.es.phonetic}`,
        `Shall we play with your ${engLower} today?`,
      ],
      esKid: [
        `¡Sí! ¡Jugar con ${row.es.word.toLowerCase()} es súper divertido!`,
        `see hoo-GAHR kohn ${row.es.phonetic} ehs SOO-pehr dee-behr-TEE-doh`,
        `Yes! Playing with ${engLower} is super fun!`,
      ],
      esPrac: ['Vamos a jugar con ', ' en el parque.', `Let’s go play with ____ at the park.`],
      zhMom: [
        `今天我们一起玩${row.zh.word}好不好？`,
        `Jīntiān wǒmen yīqǐ wán ${row.zh.phonetic} hǎo bu hǎo?`,
        `Shall we play with the ${engLower} together today?`,
      ],
      zhKid: [
        `太棒啦！我最喜欢玩${row.zh.word}了！`,
        `Tài bàng la! Wǒ zuì xǐhuan wán ${row.zh.phonetic} le!`,
        `Awesome! I love playing with the ${engLower} the most!`,
      ],
      zhPrac: [
        '我和好朋友一起分享',
        '。',
        'Wǒ hé hǎo péngyou yīqǐ fēnxiǎng ',
        '.',
        `I share the ____ with my good friend.`,
      ],
      koMom: [
        `오늘 재미있는 ${row.ko.word} 가지고 놀까?`,
        `Oneul jaemiinneun ${row.ko.phonetic} gajigo nolkka?`,
        `Shall we play with the fun ${engLower} today?`,
      ],
      koKid: [
        `신난다! ${row.ko.word} 놀이 정말 좋아해요!`,
        `Sinnanda! ${row.ko.phonetic} nori jeongmal joahaeyo!`,
        `Hooray! I really love playing with the ${engLower}!`,
      ],
      koPrac: [
        '친구와 사이좋게 ',
        ' 놀이를 해요.',
        'Chinguwa saijoke ',
        ' norireul haeyo.',
        `I play ____ nicely with my friend.`,
      ],
    },
    verbs: {
      esMom: [
        `¿Podemos ${row.es.word.toLowerCase()} juntos hoy?`,
        `poh-DEH-mohs ${row.es.phonetic} HOON-tohs oy`,
        `Can we ${engLower} together today?`,
      ],
      esKid: [
        `¡Sí! ¡Me encanta ${row.es.word.toLowerCase()} mucho!`,
        `see meh ehn-KAHN-tah ${row.es.phonetic} MOO-choh`,
        `Yes! I love to ${engLower} very much!`,
      ],
      esPrac: ['Vamos todos a ', ' con alegría.', `Let's all ____ with joy.`],
      zhMom: [
        `我们一起来${row.zh.word}吧！`,
        `Wǒmen yīqǐ lái ${row.zh.phonetic} ba!`,
        `Let's ${engLower} together!`,
      ],
      zhKid: [
        `好呀！看我开心地${row.zh.word}！`,
        `Hǎo ya! Kàn wǒ kāixīn de ${row.zh.phonetic}!`,
        `Yay! Look at me happily ${engLower}!`,
      ],
      zhPrac: [
        '小动物们在草地上',
        '。',
        'Xiǎo dòngwùmen zài cǎodì shàng ',
        '.',
        `The little animals ____ on the grass.`,
      ],
      koMom: [
        `우리 같이 신나게 ${row.ko.word}!`,
        `u ri gat i sin na ge ${row.ko.phonetic}!`,
        `Let's ${engLower} excitingly together!`,
      ],
      koKid: [
        `좋아요! 재미있게 ${row.ko.word}!`,
        `jo a yo! jae mi it ge ${row.ko.phonetic}!`,
        `Yay! Let's ${engLower} fun!`,
      ],
      koPrac: [
        '우리 모두 함께 ',
        '요!',
        'u ri mo du ham kke ',
        'yo!',
        `Let's all ____ together!`,
      ],
    },
    adjectives: {
      esMom: [
        `¡Mira qué ${row.es.word.toLowerCase()} se ve todo!`,
        `MEE-rah keh ${row.es.phonetic} seh beh TOH-doh`,
        `Look how ${engLower} everything looks!`,
      ],
      esKid: [
        `¡Es verdad! ¡Es muy ${row.es.word.toLowerCase()}!`,
        `ehs behr-DAHD ehs MOO-ee ${row.es.phonetic}`,
        `It's true! It is very ${engLower}!`,
      ],
      esPrac: ['Este lindo amiguito es muy ', ' hoy.', `This cute little friend is very ____ today.`],
      zhMom: [
        `你看，这个东西真${row.zh.word}！`,
        `Nǐ kàn, zhè ge dōngxi zhēn ${row.zh.phonetic}!`,
        `Look, this thing is really ${engLower}!`,
      ],
      zhKid: [
        `哇，真的好${row.zh.word}呀！`,
        `Wā, zhēnde hǎo ${row.zh.phonetic} ya!`,
        `Wow, it is really ${engLower}!`,
      ],
      zhPrac: [
        '这只小动物真',
        '呀。',
        'Zhè zhī xiǎodòngwù zhēn ',
        ' ya.',
        `This little animal is really ____.`,
      ],
      koMom: [
        `이것 좀 봐, 정말 ${row.ko.word}!`,
        `i geot jom bwa, jeong mal ${row.ko.phonetic}!`,
        `Look at this, it is really ${engLower}!`,
      ],
      koKid: [
        `우와! 정말로 ${row.ko.word}!`,
        `u wa! jeong mal ro ${row.ko.phonetic}!`,
        `Wow! It really is ${engLower}!`,
      ],
      koPrac: [
        '이 친구는 정말 ',
        ' 모습이에요.',
        'i chin gu neun jeong mal ',
        ' mo seup i e yo.',
        `This friend really has a ____ look.`,
      ],
    },
    others: {
      esMom: [
        `¿Qué ves aquí? ¡Es ${row.es.word.toLowerCase()}!`,
        `keh behs ah-KEE ehs ${row.es.phonetic}`,
        `What do you see here? It is ${engLower}!`,
      ],
      esKid: [
        `¡Yo sé! ¡Es ${row.es.word.toLowerCase()}!`,
        `yoh seh ehs ${row.es.phonetic}`,
        `I know! It is ${engLower}!`,
      ],
      esPrac: ['En nuestro mundo encontramos ', ' todos los días.', `In our world we find ____ every day.`],
      zhMom: [
        `猜猜看这是什么？这是${row.zh.word}！`,
        `Cāi cāi kàn zhè shì shénme? Zhè shì ${row.zh.phonetic}!`,
        `Guess what this is? This is ${engLower}!`,
      ],
      zhKid: [
        `我知道！这就是${row.zh.word}！`,
        `Wǒ zhīdào! Zhè jiù shì ${row.zh.phonetic}!`,
        `I know! This is ${engLower}!`,
      ],
      zhPrac: [
        '在我们的生活里有',
        '。',
        'Zài wǒmen de shēnghuó lǐ yǒu ',
        '.',
        `In our everyday life there is ____.`,
      ],
      koMom: [
        `이게 뭘까? 바로 ${row.ko.word} 이란다!`,
        `i ge mwol kka? ba ro ${row.ko.phonetic} i ran da!`,
        `What is this? It's ${engLower}!`,
      ],
      koKid: [
        `저 알아요! ${row.ko.word} 맞죠!`,
        `jeo al a yo! ${row.ko.phonetic} mat jyo!`,
        `I know! It's ${engLower}, right!`,
      ],
      koPrac: [
        '우리 주변에서 만나는 ',
        ' 이에요.',
        'u ri ju byeon e seo man na neun ',
        ' i e yo.',
        `This is ____ that we meet around us.`,
      ],
    },
  };

  const tpl = templates[row.category];

  return {
    id: row.id,
    english: row.english,
    emoji: row.emoji,
    category: row.category,
    es: {
      word: row.es.word,
      phonetic: row.es.phonetic,
      dialogue: {
        mom: {
          text: tpl.esMom[0],
          phonetic: tpl.esMom[1],
          english: tpl.esMom[2],
        },
        kid: {
          text: tpl.esKid[0],
          phonetic: tpl.esKid[1],
          english: tpl.esKid[2],
        },
      },
      practice: {
        sentenceBefore: tpl.esPrac[0],
        sentenceBeforePhonetic: '',
        sentenceAfter: tpl.esPrac[1],
        sentenceAfterPhonetic: '',
        englishHint: tpl.esPrac[2],
        distractors: row.distractorKeys.map((k) => DISTRACTOR_POOL.es[k]),
      },
    },
    zh: {
      word: row.zh.word,
      phonetic: row.zh.phonetic,
      dialogue: {
        mom: {
          text: tpl.zhMom[0],
          phonetic: tpl.zhMom[1],
          english: tpl.zhMom[2],
        },
        kid: {
          text: tpl.zhKid[0],
          phonetic: tpl.zhKid[1],
          english: tpl.zhKid[2],
        },
      },
      practice: {
        sentenceBefore: tpl.zhPrac[0],
        sentenceBeforePhonetic: tpl.zhPrac[2],
        sentenceAfter: tpl.zhPrac[1],
        sentenceAfterPhonetic: tpl.zhPrac[3],
        englishHint: tpl.zhPrac[4],
        distractors: row.distractorKeys.map((k) => DISTRACTOR_POOL.zh[k]),
      },
    },
    ko: {
      word: row.ko.word,
      phonetic: row.ko.phonetic,
      dialogue: {
        mom: {
          text: tpl.koMom[0],
          phonetic: tpl.koMom[1],
          english: tpl.koMom[2],
        },
        kid: {
          text: tpl.koKid[0],
          phonetic: tpl.koKid[1],
          english: tpl.koKid[2],
        },
      },
      practice: {
        sentenceBefore: tpl.koPrac[0],
        sentenceBeforePhonetic: tpl.koPrac[2],
        sentenceAfter: tpl.koPrac[1],
        sentenceAfterPhonetic: tpl.koPrac[3],
        englishHint: tpl.koPrac[4],
        distractors: row.distractorKeys.map((k) => DISTRACTOR_POOL.ko[k]),
      },
    },
  };
}

export const STARTER_DECK: FlashcardConcept[] = [
  ...SEEDS.map((seed) => ({
    id: seed.id,
    english: seed.english,
    emoji: seed.emoji,
    category: seed.category,
    es: {
      word: seed.es.word,
      phonetic: seed.es.phonetic,
      dialogue: {
        mom: {
          text: seed.es.mom[0],
          phonetic: seed.es.mom[1],
          english: seed.es.mom[2],
        },
        kid: {
          text: seed.es.kid[0],
          phonetic: seed.es.kid[1],
          english: seed.es.kid[2],
        },
      },
      practice: {
        sentenceBefore: seed.es.practice[0],
        sentenceBeforePhonetic: '',
        sentenceAfter: seed.es.practice[1],
        sentenceAfterPhonetic: '',
        englishHint: seed.es.practice[2],
        distractors: seed.distractorKeys.map((k) => DISTRACTOR_POOL.es[k]),
      },
    },
    zh: {
      word: seed.zh.word,
      phonetic: seed.zh.phonetic,
      dialogue: {
        mom: {
          text: seed.zh.mom[0],
          phonetic: seed.zh.mom[1],
          english: seed.zh.mom[2],
        },
        kid: {
          text: seed.zh.kid[0],
          phonetic: seed.zh.kid[1],
          english: seed.zh.kid[2],
        },
      },
      practice: {
        sentenceBefore: seed.zh.practice[0],
        sentenceBeforePhonetic: seed.zh.practice[2],
        sentenceAfter: seed.zh.practice[1],
        sentenceAfterPhonetic: seed.zh.practice[3],
        englishHint: seed.zh.practice[4],
        distractors: seed.distractorKeys.map((k) => DISTRACTOR_POOL.zh[k]),
      },
    },
    ko: {
      word: seed.ko.word,
      phonetic: seed.ko.phonetic,
      dialogue: {
        mom: {
          text: seed.ko.mom[0],
          phonetic: seed.ko.mom[1],
          english: seed.ko.mom[2],
        },
        kid: {
          text: seed.ko.kid[0],
          phonetic: seed.ko.kid[1],
          english: seed.ko.kid[2],
        },
      },
      practice: {
        sentenceBefore: seed.ko.practice[0],
        sentenceBeforePhonetic: seed.ko.practice[2],
        sentenceAfter: seed.ko.practice[1],
        sentenceAfterPhonetic: seed.ko.practice[3],
        englishHint: seed.ko.practice[4],
        distractors: seed.distractorKeys.map((k) => DISTRACTOR_POOL.ko[k]),
      },
    },
  })),
  ...EXTRA_100_WORDS.map(buildExtraConcept),
  ...THEME_EXPANSION_CARDS,
  ...MORE_VERBS_AND_ADJECTIVES,
];
