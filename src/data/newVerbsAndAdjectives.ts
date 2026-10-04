import { FlashcardConcept } from './starterDeck';

export const NEW_40_VERBS: FlashcardConcept[] = [
  {
    id: "verb-walk",
    english: "Walk",
    emoji: "🚶",
    category: "verbs",
    ko: {
      word: "걷다",
      phonetic: "geot da",
      dialogue: {
        mom: { text: '우리 같이 걷다 볼까?', phonetic: 'u ri gat i geot da bol kka?', english: "Shall we walk together?" },
        kid: { text: '네! 재미있게 걷다!', phonetic: 'ne! jae mi it ge geot da!', english: "Yes! So fun to walk!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily walk.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "走路",
      phonetic: "zǒu lù",
      dialogue: {
        mom: { text: '我们一起走路吧！', phonetic: 'Wǒmen yīqǐ zǒu lù ba!', english: "Let's walk together!" },
        kid: { text: '好呀，我喜欢走路！', phonetic: 'Hǎo ya, wǒ xǐhuan zǒu lù!', english: "Yay, I love to walk!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily walk.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "caminar",
      phonetic: "kah-mee-NAHR",
      dialogue: {
        mom: { text: '¡Vamos a caminar juntos!', phonetic: 'BAH-mohs ah kah-mee-NAHR HOON-tohs!', english: "Let's walk together!" },
        kid: { text: '¡Sí, me encanta caminar!', phonetic: 'SEE, meh ehn-KAHN-tah kah-mee-NAHR!', english: "Yes, I love to walk!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us walk with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-swim",
    english: "Swim",
    emoji: "🏊",
    category: "verbs",
    ko: {
      word: "수영하다",
      phonetic: "su yeong ha da",
      dialogue: {
        mom: { text: '우리 같이 수영하다 볼까?', phonetic: 'u ri gat i su yeong ha da bol kka?', english: "Shall we swim together?" },
        kid: { text: '네! 재미있게 수영하다!', phonetic: 'ne! jae mi it ge su yeong ha da!', english: "Yes! So fun to swim!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily swim.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "游泳",
      phonetic: "yóu yǒng",
      dialogue: {
        mom: { text: '我们一起游泳吧！', phonetic: 'Wǒmen yīqǐ yóu yǒng ba!', english: "Let's swim together!" },
        kid: { text: '好呀，我喜欢游泳！', phonetic: 'Hǎo ya, wǒ xǐhuan yóu yǒng!', english: "Yay, I love to swim!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily swim.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "nadar",
      phonetic: "nah-DAHR",
      dialogue: {
        mom: { text: '¡Vamos a nadar juntos!', phonetic: 'BAH-mohs ah nah-DAHR HOON-tohs!', english: "Let's swim together!" },
        kid: { text: '¡Sí, me encanta nadar!', phonetic: 'SEE, meh ehn-KAHN-tah nah-DAHR!', english: "Yes, I love to swim!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us swim with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-fly",
    english: "Fly",
    emoji: "🕊️",
    category: "verbs",
    ko: {
      word: "날다",
      phonetic: "nal da",
      dialogue: {
        mom: { text: '우리 같이 날다 볼까?', phonetic: 'u ri gat i nal da bol kka?', english: "Shall we fly together?" },
        kid: { text: '네! 재미있게 날다!', phonetic: 'ne! jae mi it ge nal da!', english: "Yes! So fun to fly!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily fly.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "飞",
      phonetic: "fēi",
      dialogue: {
        mom: { text: '我们一起飞吧！', phonetic: 'Wǒmen yīqǐ fēi ba!', english: "Let's fly together!" },
        kid: { text: '好呀，我喜欢飞！', phonetic: 'Hǎo ya, wǒ xǐhuan fēi!', english: "Yay, I love to fly!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily fly.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "volar",
      phonetic: "boh-LAHR",
      dialogue: {
        mom: { text: '¡Vamos a volar juntos!', phonetic: 'BAH-mohs ah boh-LAHR HOON-tohs!', english: "Let's fly together!" },
        kid: { text: '¡Sí, me encanta volar!', phonetic: 'SEE, meh ehn-KAHN-tah boh-LAHR!', english: "Yes, I love to fly!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us fly with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-climb",
    english: "Climb",
    emoji: "🧗",
    category: "verbs",
    ko: {
      word: "오르다",
      phonetic: "o reu da",
      dialogue: {
        mom: { text: '우리 같이 오르다 볼까?', phonetic: 'u ri gat i o reu da bol kka?', english: "Shall we climb together?" },
        kid: { text: '네! 재미있게 오르다!', phonetic: 'ne! jae mi it ge o reu da!', english: "Yes! So fun to climb!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily climb.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "爬",
      phonetic: "pá",
      dialogue: {
        mom: { text: '我们一起爬吧！', phonetic: 'Wǒmen yīqǐ pá ba!', english: "Let's climb together!" },
        kid: { text: '好呀，我喜欢爬！', phonetic: 'Hǎo ya, wǒ xǐhuan pá!', english: "Yay, I love to climb!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily climb.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "subir",
      phonetic: "soo-BEER",
      dialogue: {
        mom: { text: '¡Vamos a subir juntos!', phonetic: 'BAH-mohs ah soo-BEER HOON-tohs!', english: "Let's climb together!" },
        kid: { text: '¡Sí, me encanta subir!', phonetic: 'SEE, meh ehn-KAHN-tah soo-BEER!', english: "Yes, I love to climb!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us climb with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-slide",
    english: "Slide",
    emoji: "🛝",
    category: "verbs",
    ko: {
      word: "미끄러지다",
      phonetic: "mi kkeu reo ji da",
      dialogue: {
        mom: { text: '우리 같이 미끄러지다 볼까?', phonetic: 'u ri gat i mi kkeu reo ji da bol kka?', english: "Shall we slide together?" },
        kid: { text: '네! 재미있게 미끄러지다!', phonetic: 'ne! jae mi it ge mi kkeu reo ji da!', english: "Yes! So fun to slide!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily slide.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "滑滑梯",
      phonetic: "huá huá tī",
      dialogue: {
        mom: { text: '我们一起滑滑梯吧！', phonetic: 'Wǒmen yīqǐ huá huá tī ba!', english: "Let's slide together!" },
        kid: { text: '好呀，我喜欢滑滑梯！', phonetic: 'Hǎo ya, wǒ xǐhuan huá huá tī!', english: "Yay, I love to slide!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily slide.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "deslizarse",
      phonetic: "dehs-leer-SAHR-seh",
      dialogue: {
        mom: { text: '¡Vamos a deslizarse juntos!', phonetic: 'BAH-mohs ah dehs-leer-SAHR-seh HOON-tohs!', english: "Let's slide together!" },
        kid: { text: '¡Sí, me encanta deslizarse!', phonetic: 'SEE, meh ehn-KAHN-tah dehs-leer-SAHR-seh!', english: "Yes, I love to slide!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us slide with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-swing",
    english: "Swing",
    emoji: "🎠",
    category: "verbs",
    ko: {
      word: "그네타다",
      phonetic: "geu ne ta da",
      dialogue: {
        mom: { text: '우리 같이 그네타다 볼까?', phonetic: 'u ri gat i geu ne ta da bol kka?', english: "Shall we swing together?" },
        kid: { text: '네! 재미있게 그네타다!', phonetic: 'ne! jae mi it ge geu ne ta da!', english: "Yes! So fun to swing!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily swing.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "荡秋千",
      phonetic: "dàng qiū qiān",
      dialogue: {
        mom: { text: '我们一起荡秋千吧！', phonetic: 'Wǒmen yīqǐ dàng qiū qiān ba!', english: "Let's swing together!" },
        kid: { text: '好呀，我喜欢荡秋千！', phonetic: 'Hǎo ya, wǒ xǐhuan dàng qiū qiān!', english: "Yay, I love to swing!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily swing.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "columpiarse",
      phonetic: "koh-loom-PYAHR-seh",
      dialogue: {
        mom: { text: '¡Vamos a columpiarse juntos!', phonetic: 'BAH-mohs ah koh-loom-PYAHR-seh HOON-tohs!', english: "Let's swing together!" },
        kid: { text: '¡Sí, me encanta columpiarse!', phonetic: 'SEE, meh ehn-KAHN-tah koh-loom-PYAHR-seh!', english: "Yes, I love to swing!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us swing with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-draw",
    english: "Draw",
    emoji: "🎨",
    category: "verbs",
    ko: {
      word: "그리다",
      phonetic: "geu ri da",
      dialogue: {
        mom: { text: '우리 같이 그리다 볼까?', phonetic: 'u ri gat i geu ri da bol kka?', english: "Shall we draw together?" },
        kid: { text: '네! 재미있게 그리다!', phonetic: 'ne! jae mi it ge geu ri da!', english: "Yes! So fun to draw!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily draw.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "画画",
      phonetic: "huà huà",
      dialogue: {
        mom: { text: '我们一起画画吧！', phonetic: 'Wǒmen yīqǐ huà huà ba!', english: "Let's draw together!" },
        kid: { text: '好呀，我喜欢画画！', phonetic: 'Hǎo ya, wǒ xǐhuan huà huà!', english: "Yay, I love to draw!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily draw.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "dibujar",
      phonetic: "dee-boo-HAHR",
      dialogue: {
        mom: { text: '¡Vamos a dibujar juntos!', phonetic: 'BAH-mohs ah dee-boo-HAHR HOON-tohs!', english: "Let's draw together!" },
        kid: { text: '¡Sí, me encanta dibujar!', phonetic: 'SEE, meh ehn-KAHN-tah dee-boo-HAHR!', english: "Yes, I love to draw!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us draw with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-paint",
    english: "Paint",
    emoji: "🖌️",
    category: "verbs",
    ko: {
      word: "칠하다",
      phonetic: "chil ha da",
      dialogue: {
        mom: { text: '우리 같이 칠하다 볼까?', phonetic: 'u ri gat i chil ha da bol kka?', english: "Shall we paint together?" },
        kid: { text: '네! 재미있게 칠하다!', phonetic: 'ne! jae mi it ge chil ha da!', english: "Yes! So fun to paint!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily paint.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "涂色",
      phonetic: "tú sè",
      dialogue: {
        mom: { text: '我们一起涂色吧！', phonetic: 'Wǒmen yīqǐ tú sè ba!', english: "Let's paint together!" },
        kid: { text: '好呀，我喜欢涂色！', phonetic: 'Hǎo ya, wǒ xǐhuan tú sè!', english: "Yay, I love to paint!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily paint.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "pintar",
      phonetic: "peen-TAHR",
      dialogue: {
        mom: { text: '¡Vamos a pintar juntos!', phonetic: 'BAH-mohs ah peen-TAHR HOON-tohs!', english: "Let's paint together!" },
        kid: { text: '¡Sí, me encanta pintar!', phonetic: 'SEE, meh ehn-KAHN-tah peen-TAHR!', english: "Yes, I love to paint!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us paint with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-write",
    english: "Write",
    emoji: "✍️",
    category: "verbs",
    ko: {
      word: "쓰다",
      phonetic: "sseu da",
      dialogue: {
        mom: { text: '우리 같이 쓰다 볼까?', phonetic: 'u ri gat i sseu da bol kka?', english: "Shall we write together?" },
        kid: { text: '네! 재미있게 쓰다!', phonetic: 'ne! jae mi it ge sseu da!', english: "Yes! So fun to write!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily write.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "写字",
      phonetic: "xiě zì",
      dialogue: {
        mom: { text: '我们一起写字吧！', phonetic: 'Wǒmen yīqǐ xiě zì ba!', english: "Let's write together!" },
        kid: { text: '好呀，我喜欢写字！', phonetic: 'Hǎo ya, wǒ xǐhuan xiě zì!', english: "Yay, I love to write!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily write.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "escribir",
      phonetic: "ehs-kree-BEER",
      dialogue: {
        mom: { text: '¡Vamos a escribir juntos!', phonetic: 'BAH-mohs ah ehs-kree-BEER HOON-tohs!', english: "Let's write together!" },
        kid: { text: '¡Sí, me encanta escribir!', phonetic: 'SEE, meh ehn-KAHN-tah ehs-kree-BEER!', english: "Yes, I love to write!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us write with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-listen",
    english: "Listen",
    emoji: "👂",
    category: "verbs",
    ko: {
      word: "듣다",
      phonetic: "deut da",
      dialogue: {
        mom: { text: '우리 같이 듣다 볼까?', phonetic: 'u ri gat i deut da bol kka?', english: "Shall we listen together?" },
        kid: { text: '네! 재미있게 듣다!', phonetic: 'ne! jae mi it ge deut da!', english: "Yes! So fun to listen!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily listen.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "听",
      phonetic: "tīng",
      dialogue: {
        mom: { text: '我们一起听吧！', phonetic: 'Wǒmen yīqǐ tīng ba!', english: "Let's listen together!" },
        kid: { text: '好呀，我喜欢听！', phonetic: 'Hǎo ya, wǒ xǐhuan tīng!', english: "Yay, I love to listen!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily listen.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "escuchar",
      phonetic: "ehs-koo-CHAHR",
      dialogue: {
        mom: { text: '¡Vamos a escuchar juntos!', phonetic: 'BAH-mohs ah ehs-koo-CHAHR HOON-tohs!', english: "Let's listen together!" },
        kid: { text: '¡Sí, me encanta escuchar!', phonetic: 'SEE, meh ehn-KAHN-tah ehs-koo-CHAHR!', english: "Yes, I love to listen!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us listen with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-watch",
    english: "Watch",
    emoji: "👀",
    category: "verbs",
    ko: {
      word: "보다",
      phonetic: "bo da",
      dialogue: {
        mom: { text: '우리 같이 보다 볼까?', phonetic: 'u ri gat i bo da bol kka?', english: "Shall we watch together?" },
        kid: { text: '네! 재미있게 보다!', phonetic: 'ne! jae mi it ge bo da!', english: "Yes! So fun to watch!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily watch.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "看",
      phonetic: "kàn",
      dialogue: {
        mom: { text: '我们一起看吧！', phonetic: 'Wǒmen yīqǐ kàn ba!', english: "Let's watch together!" },
        kid: { text: '好呀，我喜欢看！', phonetic: 'Hǎo ya, wǒ xǐhuan kàn!', english: "Yay, I love to watch!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily watch.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "mirar",
      phonetic: "mee-RAHR",
      dialogue: {
        mom: { text: '¡Vamos a mirar juntos!', phonetic: 'BAH-mohs ah mee-RAHR HOON-tohs!', english: "Let's watch together!" },
        kid: { text: '¡Sí, me encanta mirar!', phonetic: 'SEE, meh ehn-KAHN-tah mee-RAHR!', english: "Yes, I love to watch!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us watch with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-talk",
    english: "Talk",
    emoji: "💬",
    category: "verbs",
    ko: {
      word: "말하다",
      phonetic: "mal ha da",
      dialogue: {
        mom: { text: '우리 같이 말하다 볼까?', phonetic: 'u ri gat i mal ha da bol kka?', english: "Shall we talk together?" },
        kid: { text: '네! 재미있게 말하다!', phonetic: 'ne! jae mi it ge mal ha da!', english: "Yes! So fun to talk!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily talk.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "说话",
      phonetic: "shuō huà",
      dialogue: {
        mom: { text: '我们一起说话吧！', phonetic: 'Wǒmen yīqǐ shuō huà ba!', english: "Let's talk together!" },
        kid: { text: '好呀，我喜欢说话！', phonetic: 'Hǎo ya, wǒ xǐhuan shuō huà!', english: "Yay, I love to talk!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily talk.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "hablar",
      phonetic: "ah-BLAHR",
      dialogue: {
        mom: { text: '¡Vamos a hablar juntos!', phonetic: 'BAH-mohs ah ah-BLAHR HOON-tohs!', english: "Let's talk together!" },
        kid: { text: '¡Sí, me encanta hablar!', phonetic: 'SEE, meh ehn-KAHN-tah ah-BLAHR!', english: "Yes, I love to talk!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us talk with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-drink",
    english: "Drink",
    emoji: "🥛",
    category: "verbs",
    ko: {
      word: "마시다",
      phonetic: "ma si da",
      dialogue: {
        mom: { text: '우리 같이 마시다 볼까?', phonetic: 'u ri gat i ma si da bol kka?', english: "Shall we drink together?" },
        kid: { text: '네! 재미있게 마시다!', phonetic: 'ne! jae mi it ge ma si da!', english: "Yes! So fun to drink!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily drink.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "喝水",
      phonetic: "hē shuǐ",
      dialogue: {
        mom: { text: '我们一起喝水吧！', phonetic: 'Wǒmen yīqǐ hē shuǐ ba!', english: "Let's drink together!" },
        kid: { text: '好呀，我喜欢喝水！', phonetic: 'Hǎo ya, wǒ xǐhuan hē shuǐ!', english: "Yay, I love to drink!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily drink.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "beber",
      phonetic: "beh-BEHR",
      dialogue: {
        mom: { text: '¡Vamos a beber juntos!', phonetic: 'BAH-mohs ah beh-BEHR HOON-tohs!', english: "Let's drink together!" },
        kid: { text: '¡Sí, me encanta beber!', phonetic: 'SEE, meh ehn-KAHN-tah beh-BEHR!', english: "Yes, I love to drink!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us drink with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-wash",
    english: "Wash",
    emoji: "🧼",
    category: "verbs",
    ko: {
      word: "씻다",
      phonetic: "ssit da",
      dialogue: {
        mom: { text: '우리 같이 씻다 볼까?', phonetic: 'u ri gat i ssit da bol kka?', english: "Shall we wash together?" },
        kid: { text: '네! 재미있게 씻다!', phonetic: 'ne! jae mi it ge ssit da!', english: "Yes! So fun to wash!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily wash.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "洗手",
      phonetic: "xǐ shǒu",
      dialogue: {
        mom: { text: '我们一起洗手吧！', phonetic: 'Wǒmen yīqǐ xǐ shǒu ba!', english: "Let's wash together!" },
        kid: { text: '好呀，我喜欢洗手！', phonetic: 'Hǎo ya, wǒ xǐhuan xǐ shǒu!', english: "Yay, I love to wash!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily wash.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "lavar",
      phonetic: "lah-BAHR",
      dialogue: {
        mom: { text: '¡Vamos a lavar juntos!', phonetic: 'BAH-mohs ah lah-BAHR HOON-tohs!', english: "Let's wash together!" },
        kid: { text: '¡Sí, me encanta lavar!', phonetic: 'SEE, meh ehn-KAHN-tah lah-BAHR!', english: "Yes, I love to wash!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us wash with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-brush",
    english: "Brush",
    emoji: "🪥",
    category: "verbs",
    ko: {
      word: "양치하다",
      phonetic: "yang chi ha da",
      dialogue: {
        mom: { text: '우리 같이 양치하다 볼까?', phonetic: 'u ri gat i yang chi ha da bol kka?', english: "Shall we brush together?" },
        kid: { text: '네! 재미있게 양치하다!', phonetic: 'ne! jae mi it ge yang chi ha da!', english: "Yes! So fun to brush!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily brush.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "刷牙",
      phonetic: "shuā yá",
      dialogue: {
        mom: { text: '我们一起刷牙吧！', phonetic: 'Wǒmen yīqǐ shuā yá ba!', english: "Let's brush together!" },
        kid: { text: '好呀，我喜欢刷牙！', phonetic: 'Hǎo ya, wǒ xǐhuan shuā yá!', english: "Yay, I love to brush!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily brush.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "cepillarse",
      phonetic: "seh-pee-YAHR-seh",
      dialogue: {
        mom: { text: '¡Vamos a cepillarse juntos!', phonetic: 'BAH-mohs ah seh-pee-YAHR-seh HOON-tohs!', english: "Let's brush together!" },
        kid: { text: '¡Sí, me encanta cepillarse!', phonetic: 'SEE, meh ehn-KAHN-tah seh-pee-YAHR-seh!', english: "Yes, I love to brush!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us brush with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-hug",
    english: "Hug",
    emoji: "🫂",
    category: "verbs",
    ko: {
      word: "안아주다",
      phonetic: "an a ju da",
      dialogue: {
        mom: { text: '우리 같이 안아주다 볼까?', phonetic: 'u ri gat i an a ju da bol kka?', english: "Shall we hug together?" },
        kid: { text: '네! 재미있게 안아주다!', phonetic: 'ne! jae mi it ge an a ju da!', english: "Yes! So fun to hug!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily hug.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "抱抱",
      phonetic: "bào bao",
      dialogue: {
        mom: { text: '我们一起抱抱吧！', phonetic: 'Wǒmen yīqǐ bào bao ba!', english: "Let's hug together!" },
        kid: { text: '好呀，我喜欢抱抱！', phonetic: 'Hǎo ya, wǒ xǐhuan bào bao!', english: "Yay, I love to hug!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily hug.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "abrazar",
      phonetic: "ah-brah-SAHR",
      dialogue: {
        mom: { text: '¡Vamos a abrazar juntos!', phonetic: 'BAH-mohs ah ah-brah-SAHR HOON-tohs!', english: "Let's hug together!" },
        kid: { text: '¡Sí, me encanta abrazar!', phonetic: 'SEE, meh ehn-KAHN-tah ah-brah-SAHR!', english: "Yes, I love to hug!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us hug with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-kiss",
    english: "Kiss",
    emoji: "💋",
    category: "verbs",
    ko: {
      word: "뽀뽀하다",
      phonetic: "ppo ppo ha da",
      dialogue: {
        mom: { text: '우리 같이 뽀뽀하다 볼까?', phonetic: 'u ri gat i ppo ppo ha da bol kka?', english: "Shall we kiss together?" },
        kid: { text: '네! 재미있게 뽀뽀하다!', phonetic: 'ne! jae mi it ge ppo ppo ha da!', english: "Yes! So fun to kiss!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily kiss.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "亲亲",
      phonetic: "qīn qīn",
      dialogue: {
        mom: { text: '我们一起亲亲吧！', phonetic: 'Wǒmen yīqǐ qīn qīn ba!', english: "Let's kiss together!" },
        kid: { text: '好呀，我喜欢亲亲！', phonetic: 'Hǎo ya, wǒ xǐhuan qīn qīn!', english: "Yay, I love to kiss!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily kiss.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "besar",
      phonetic: "beh-SAHR",
      dialogue: {
        mom: { text: '¡Vamos a besar juntos!', phonetic: 'BAH-mohs ah beh-SAHR HOON-tohs!', english: "Let's kiss together!" },
        kid: { text: '¡Sí, me encanta besar!', phonetic: 'SEE, meh ehn-KAHN-tah beh-SAHR!', english: "Yes, I love to kiss!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us kiss with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-clap",
    english: "Clap",
    emoji: "👏",
    category: "verbs",
    ko: {
      word: "박수치다",
      phonetic: "bak su chi da",
      dialogue: {
        mom: { text: '우리 같이 박수치다 볼까?', phonetic: 'u ri gat i bak su chi da bol kka?', english: "Shall we clap together?" },
        kid: { text: '네! 재미있게 박수치다!', phonetic: 'ne! jae mi it ge bak su chi da!', english: "Yes! So fun to clap!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily clap.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "拍手",
      phonetic: "pāi shǒu",
      dialogue: {
        mom: { text: '我们一起拍手吧！', phonetic: 'Wǒmen yīqǐ pāi shǒu ba!', english: "Let's clap together!" },
        kid: { text: '好呀，我喜欢拍手！', phonetic: 'Hǎo ya, wǒ xǐhuan pāi shǒu!', english: "Yay, I love to clap!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily clap.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "aplaudir",
      phonetic: "ah-plow-DEER",
      dialogue: {
        mom: { text: '¡Vamos a aplaudir juntos!', phonetic: 'BAH-mohs ah ah-plow-DEER HOON-tohs!', english: "Let's clap together!" },
        kid: { text: '¡Sí, me encanta aplaudir!', phonetic: 'SEE, meh ehn-KAHN-tah ah-plow-DEER!', english: "Yes, I love to clap!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us clap with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-wave",
    english: "Wave",
    emoji: "👋",
    category: "verbs",
    ko: {
      word: "손흔들다",
      phonetic: "son heun deul da",
      dialogue: {
        mom: { text: '우리 같이 손흔들다 볼까?', phonetic: 'u ri gat i son heun deul da bol kka?', english: "Shall we wave together?" },
        kid: { text: '네! 재미있게 손흔들다!', phonetic: 'ne! jae mi it ge son heun deul da!', english: "Yes! So fun to wave!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily wave.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "挥手",
      phonetic: "huī shǒu",
      dialogue: {
        mom: { text: '我们一起挥手吧！', phonetic: 'Wǒmen yīqǐ huī shǒu ba!', english: "Let's wave together!" },
        kid: { text: '好呀，我喜欢挥手！', phonetic: 'Hǎo ya, wǒ xǐhuan huī shǒu!', english: "Yay, I love to wave!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily wave.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "saludar",
      phonetic: "sah-loo-DAHR",
      dialogue: {
        mom: { text: '¡Vamos a saludar juntos!', phonetic: 'BAH-mohs ah sah-loo-DAHR HOON-tohs!', english: "Let's wave together!" },
        kid: { text: '¡Sí, me encanta saludar!', phonetic: 'SEE, meh ehn-KAHN-tah sah-loo-DAHR!', english: "Yes, I love to wave!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us wave with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-point",
    english: "Point",
    emoji: "☝️",
    category: "verbs",
    ko: {
      word: "가리키다",
      phonetic: "ga ri ki da",
      dialogue: {
        mom: { text: '우리 같이 가리키다 볼까?', phonetic: 'u ri gat i ga ri ki da bol kka?', english: "Shall we point together?" },
        kid: { text: '네! 재미있게 가리키다!', phonetic: 'ne! jae mi it ge ga ri ki da!', english: "Yes! So fun to point!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily point.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "指着",
      phonetic: "zhǐ zhe",
      dialogue: {
        mom: { text: '我们一起指着吧！', phonetic: 'Wǒmen yīqǐ zhǐ zhe ba!', english: "Let's point together!" },
        kid: { text: '好呀，我喜欢指着！', phonetic: 'Hǎo ya, wǒ xǐhuan zhǐ zhe!', english: "Yay, I love to point!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily point.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "señalar",
      phonetic: "seh-nyah-LAHR",
      dialogue: {
        mom: { text: '¡Vamos a señalar juntos!', phonetic: 'BAH-mohs ah seh-nyah-LAHR HOON-tohs!', english: "Let's point together!" },
        kid: { text: '¡Sí, me encanta señalar!', phonetic: 'SEE, meh ehn-KAHN-tah seh-nyah-LAHR!', english: "Yes, I love to point!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us point with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-catch",
    english: "Catch",
    emoji: "🤲",
    category: "verbs",
    ko: {
      word: "잡다",
      phonetic: "jap da",
      dialogue: {
        mom: { text: '우리 같이 잡다 볼까?', phonetic: 'u ri gat i jap da bol kka?', english: "Shall we catch together?" },
        kid: { text: '네! 재미있게 잡다!', phonetic: 'ne! jae mi it ge jap da!', english: "Yes! So fun to catch!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily catch.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "抓球",
      phonetic: "zhuā qiú",
      dialogue: {
        mom: { text: '我们一起抓球吧！', phonetic: 'Wǒmen yīqǐ zhuā qiú ba!', english: "Let's catch together!" },
        kid: { text: '好呀，我喜欢抓球！', phonetic: 'Hǎo ya, wǒ xǐhuan zhuā qiú!', english: "Yay, I love to catch!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily catch.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "atrapar",
      phonetic: "ah-trah-PAHR",
      dialogue: {
        mom: { text: '¡Vamos a atrapar juntos!', phonetic: 'BAH-mohs ah ah-trah-PAHR HOON-tohs!', english: "Let's catch together!" },
        kid: { text: '¡Sí, me encanta atrapar!', phonetic: 'SEE, meh ehn-KAHN-tah ah-trah-PAHR!', english: "Yes, I love to catch!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us catch with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-throw",
    english: "Throw",
    emoji: "⚾",
    category: "verbs",
    ko: {
      word: "던지다",
      phonetic: "deon ji da",
      dialogue: {
        mom: { text: '우리 같이 던지다 볼까?', phonetic: 'u ri gat i deon ji da bol kka?', english: "Shall we throw together?" },
        kid: { text: '네! 재미있게 던지다!', phonetic: 'ne! jae mi it ge deon ji da!', english: "Yes! So fun to throw!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily throw.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "扔球",
      phonetic: "rēng qiú",
      dialogue: {
        mom: { text: '我们一起扔球吧！', phonetic: 'Wǒmen yīqǐ rēng qiú ba!', english: "Let's throw together!" },
        kid: { text: '好呀，我喜欢扔球！', phonetic: 'Hǎo ya, wǒ xǐhuan rēng qiú!', english: "Yay, I love to throw!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily throw.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "lanzar",
      phonetic: "lahn-SAHR",
      dialogue: {
        mom: { text: '¡Vamos a lanzar juntos!', phonetic: 'BAH-mohs ah lahn-SAHR HOON-tohs!', english: "Let's throw together!" },
        kid: { text: '¡Sí, me encanta lanzar!', phonetic: 'SEE, meh ehn-KAHN-tah lahn-SAHR!', english: "Yes, I love to throw!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us throw with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-kick",
    english: "Kick",
    emoji: "⚽",
    category: "verbs",
    ko: {
      word: "차다",
      phonetic: "cha da",
      dialogue: {
        mom: { text: '우리 같이 차다 볼까?', phonetic: 'u ri gat i cha da bol kka?', english: "Shall we kick together?" },
        kid: { text: '네! 재미있게 차다!', phonetic: 'ne! jae mi it ge cha da!', english: "Yes! So fun to kick!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily kick.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "踢球",
      phonetic: "tī qiú",
      dialogue: {
        mom: { text: '我们一起踢球吧！', phonetic: 'Wǒmen yīqǐ tī qiú ba!', english: "Let's kick together!" },
        kid: { text: '好呀，我喜欢踢球！', phonetic: 'Hǎo ya, wǒ xǐhuan tī qiú!', english: "Yay, I love to kick!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily kick.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "patear",
      phonetic: "pah-teh-AHR",
      dialogue: {
        mom: { text: '¡Vamos a patear juntos!', phonetic: 'BAH-mohs ah pah-teh-AHR HOON-tohs!', english: "Let's kick together!" },
        kid: { text: '¡Sí, me encanta patear!', phonetic: 'SEE, meh ehn-KAHN-tah pah-teh-AHR!', english: "Yes, I love to kick!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us kick with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-roll",
    english: "Roll",
    emoji: "🌀",
    category: "verbs",
    ko: {
      word: "구르다",
      phonetic: "gu reu da",
      dialogue: {
        mom: { text: '우리 같이 구르다 볼까?', phonetic: 'u ri gat i gu reu da bol kka?', english: "Shall we roll together?" },
        kid: { text: '네! 재미있게 구르다!', phonetic: 'ne! jae mi it ge gu reu da!', english: "Yes! So fun to roll!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily roll.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "打滚",
      phonetic: "dǎ gǔn",
      dialogue: {
        mom: { text: '我们一起打滚吧！', phonetic: 'Wǒmen yīqǐ dǎ gǔn ba!', english: "Let's roll together!" },
        kid: { text: '好呀，我喜欢打滚！', phonetic: 'Hǎo ya, wǒ xǐhuan dǎ gǔn!', english: "Yay, I love to roll!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily roll.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "rodar",
      phonetic: "rroh-DAHR",
      dialogue: {
        mom: { text: '¡Vamos a rodar juntos!', phonetic: 'BAH-mohs ah rroh-DAHR HOON-tohs!', english: "Let's roll together!" },
        kid: { text: '¡Sí, me encanta rodar!', phonetic: 'SEE, meh ehn-KAHN-tah rroh-DAHR!', english: "Yes, I love to roll!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us roll with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-push",
    english: "Push",
    emoji: "🛒",
    category: "verbs",
    ko: {
      word: "밀다",
      phonetic: "mil da",
      dialogue: {
        mom: { text: '우리 같이 밀다 볼까?', phonetic: 'u ri gat i mil da bol kka?', english: "Shall we push together?" },
        kid: { text: '네! 재미있게 밀다!', phonetic: 'ne! jae mi it ge mil da!', english: "Yes! So fun to push!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily push.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "推",
      phonetic: "tuī",
      dialogue: {
        mom: { text: '我们一起推吧！', phonetic: 'Wǒmen yīqǐ tuī ba!', english: "Let's push together!" },
        kid: { text: '好呀，我喜欢推！', phonetic: 'Hǎo ya, wǒ xǐhuan tuī!', english: "Yay, I love to push!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily push.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "empujar",
      phonetic: "ehm-poo-HAHR",
      dialogue: {
        mom: { text: '¡Vamos a empujar juntos!', phonetic: 'BAH-mohs ah ehm-poo-HAHR HOON-tohs!', english: "Let's push together!" },
        kid: { text: '¡Sí, me encanta empujar!', phonetic: 'SEE, meh ehn-KAHN-tah ehm-poo-HAHR!', english: "Yes, I love to push!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us push with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-pull",
    english: "Pull",
    emoji: "🪢",
    category: "verbs",
    ko: {
      word: "당기다",
      phonetic: "dang gi da",
      dialogue: {
        mom: { text: '우리 같이 당기다 볼까?', phonetic: 'u ri gat i dang gi da bol kka?', english: "Shall we pull together?" },
        kid: { text: '네! 재미있게 당기다!', phonetic: 'ne! jae mi it ge dang gi da!', english: "Yes! So fun to pull!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily pull.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "拉",
      phonetic: "lā",
      dialogue: {
        mom: { text: '我们一起拉吧！', phonetic: 'Wǒmen yīqǐ lā ba!', english: "Let's pull together!" },
        kid: { text: '好呀，我喜欢拉！', phonetic: 'Hǎo ya, wǒ xǐhuan lā!', english: "Yay, I love to pull!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily pull.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "jalar",
      phonetic: "hah-LAHR",
      dialogue: {
        mom: { text: '¡Vamos a jalar juntos!', phonetic: 'BAH-mohs ah hah-LAHR HOON-tohs!', english: "Let's pull together!" },
        kid: { text: '¡Sí, me encanta jalar!', phonetic: 'SEE, meh ehn-KAHN-tah hah-LAHR!', english: "Yes, I love to pull!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us pull with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-open",
    english: "Open",
    emoji: "🚪",
    category: "verbs",
    ko: {
      word: "열다",
      phonetic: "yeol da",
      dialogue: {
        mom: { text: '우리 같이 열다 볼까?', phonetic: 'u ri gat i yeol da bol kka?', english: "Shall we open together?" },
        kid: { text: '네! 재미있게 열다!', phonetic: 'ne! jae mi it ge yeol da!', english: "Yes! So fun to open!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily open.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "打开",
      phonetic: "dǎ kāi",
      dialogue: {
        mom: { text: '我们一起打开吧！', phonetic: 'Wǒmen yīqǐ dǎ kāi ba!', english: "Let's open together!" },
        kid: { text: '好呀，我喜欢打开！', phonetic: 'Hǎo ya, wǒ xǐhuan dǎ kāi!', english: "Yay, I love to open!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily open.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "abrir",
      phonetic: "ah-BREER",
      dialogue: {
        mom: { text: '¡Vamos a abrir juntos!', phonetic: 'BAH-mohs ah ah-BREER HOON-tohs!', english: "Let's open together!" },
        kid: { text: '¡Sí, me encanta abrir!', phonetic: 'SEE, meh ehn-KAHN-tah ah-BREER!', english: "Yes, I love to open!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us open with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-close",
    english: "Close",
    emoji: "📦",
    category: "verbs",
    ko: {
      word: "닫다",
      phonetic: "dat da",
      dialogue: {
        mom: { text: '우리 같이 닫다 볼까?', phonetic: 'u ri gat i dat da bol kka?', english: "Shall we close together?" },
        kid: { text: '네! 재미있게 닫다!', phonetic: 'ne! jae mi it ge dat da!', english: "Yes! So fun to close!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily close.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "关上",
      phonetic: "guān shàng",
      dialogue: {
        mom: { text: '我们一起关上吧！', phonetic: 'Wǒmen yīqǐ guān shàng ba!', english: "Let's close together!" },
        kid: { text: '好呀，我喜欢关上！', phonetic: 'Hǎo ya, wǒ xǐhuan guān shàng!', english: "Yay, I love to close!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily close.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "cerrar",
      phonetic: "seh-RRAHR",
      dialogue: {
        mom: { text: '¡Vamos a cerrar juntos!', phonetic: 'BAH-mohs ah seh-RRAHR HOON-tohs!', english: "Let's close together!" },
        kid: { text: '¡Sí, me encanta cerrar!', phonetic: 'SEE, meh ehn-KAHN-tah seh-RRAHR!', english: "Yes, I love to close!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us close with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-give",
    english: "Give",
    emoji: "🎁",
    category: "verbs",
    ko: {
      word: "주다",
      phonetic: "ju da",
      dialogue: {
        mom: { text: '우리 같이 주다 볼까?', phonetic: 'u ri gat i ju da bol kka?', english: "Shall we give together?" },
        kid: { text: '네! 재미있게 주다!', phonetic: 'ne! jae mi it ge ju da!', english: "Yes! So fun to give!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily give.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "送给",
      phonetic: "sòng gěi",
      dialogue: {
        mom: { text: '我们一起送给吧！', phonetic: 'Wǒmen yīqǐ sòng gěi ba!', english: "Let's give together!" },
        kid: { text: '好呀，我喜欢送给！', phonetic: 'Hǎo ya, wǒ xǐhuan sòng gěi!', english: "Yay, I love to give!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily give.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "dar",
      phonetic: "DAHR",
      dialogue: {
        mom: { text: '¡Vamos a dar juntos!', phonetic: 'BAH-mohs ah DAHR HOON-tohs!', english: "Let's give together!" },
        kid: { text: '¡Sí, me encanta dar!', phonetic: 'SEE, meh ehn-KAHN-tah DAHR!', english: "Yes, I love to give!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us give with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-help",
    english: "Help",
    emoji: "🤝",
    category: "verbs",
    ko: {
      word: "돕다",
      phonetic: "dop da",
      dialogue: {
        mom: { text: '우리 같이 돕다 볼까?', phonetic: 'u ri gat i dop da bol kka?', english: "Shall we help together?" },
        kid: { text: '네! 재미있게 돕다!', phonetic: 'ne! jae mi it ge dop da!', english: "Yes! So fun to help!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily help.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "帮忙",
      phonetic: "bāng máng",
      dialogue: {
        mom: { text: '我们一起帮忙吧！', phonetic: 'Wǒmen yīqǐ bāng máng ba!', english: "Let's help together!" },
        kid: { text: '好呀，我喜欢帮忙！', phonetic: 'Hǎo ya, wǒ xǐhuan bāng máng!', english: "Yay, I love to help!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily help.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "ayudar",
      phonetic: "ah-yoo-DAHR",
      dialogue: {
        mom: { text: '¡Vamos a ayudar juntos!', phonetic: 'BAH-mohs ah ah-yoo-DAHR HOON-tohs!', english: "Let's help together!" },
        kid: { text: '¡Sí, me encanta ayudar!', phonetic: 'SEE, meh ehn-KAHN-tah ah-yoo-DAHR!', english: "Yes, I love to help!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us help with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-share",
    english: "Share",
    emoji: "🍰",
    category: "verbs",
    ko: {
      word: "나누다",
      phonetic: "na nu da",
      dialogue: {
        mom: { text: '우리 같이 나누다 볼까?', phonetic: 'u ri gat i na nu da bol kka?', english: "Shall we share together?" },
        kid: { text: '네! 재미있게 나누다!', phonetic: 'ne! jae mi it ge na nu da!', english: "Yes! So fun to share!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily share.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "分享",
      phonetic: "fēn xiǎng",
      dialogue: {
        mom: { text: '我们一起分享吧！', phonetic: 'Wǒmen yīqǐ fēn xiǎng ba!', english: "Let's share together!" },
        kid: { text: '好呀，我喜欢分享！', phonetic: 'Hǎo ya, wǒ xǐhuan fēn xiǎng!', english: "Yay, I love to share!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily share.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "compartir",
      phonetic: "kohm-pahr-TEER",
      dialogue: {
        mom: { text: '¡Vamos a compartir juntos!', phonetic: 'BAH-mohs ah kohm-pahr-TEER HOON-tohs!', english: "Let's share together!" },
        kid: { text: '¡Sí, me encanta compartir!', phonetic: 'SEE, meh ehn-KAHN-tah kohm-pahr-TEER!', english: "Yes, I love to share!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us share with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-build",
    english: "Build",
    emoji: "🧱",
    category: "verbs",
    ko: {
      word: "만들다",
      phonetic: "man deul da",
      dialogue: {
        mom: { text: '우리 같이 만들다 볼까?', phonetic: 'u ri gat i man deul da bol kka?', english: "Shall we build together?" },
        kid: { text: '네! 재미있게 만들다!', phonetic: 'ne! jae mi it ge man deul da!', english: "Yes! So fun to build!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily build.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "搭建",
      phonetic: "dā jiàn",
      dialogue: {
        mom: { text: '我们一起搭建吧！', phonetic: 'Wǒmen yīqǐ dā jiàn ba!', english: "Let's build together!" },
        kid: { text: '好呀，我喜欢搭建！', phonetic: 'Hǎo ya, wǒ xǐhuan dā jiàn!', english: "Yay, I love to build!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily build.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "construir",
      phonetic: "kohn-stroo-EER",
      dialogue: {
        mom: { text: '¡Vamos a construir juntos!', phonetic: 'BAH-mohs ah kohn-stroo-EER HOON-tohs!', english: "Let's build together!" },
        kid: { text: '¡Sí, me encanta construir!', phonetic: 'SEE, meh ehn-KAHN-tah kohn-stroo-EER!', english: "Yes, I love to build!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us build with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-clean",
    english: "Clean",
    emoji: "🧹",
    category: "verbs",
    ko: {
      word: "청소하다",
      phonetic: "cheong so ha da",
      dialogue: {
        mom: { text: '우리 같이 청소하다 볼까?', phonetic: 'u ri gat i cheong so ha da bol kka?', english: "Shall we clean together?" },
        kid: { text: '네! 재미있게 청소하다!', phonetic: 'ne! jae mi it ge cheong so ha da!', english: "Yes! So fun to clean!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily clean.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "打扫",
      phonetic: "dǎ sǎo",
      dialogue: {
        mom: { text: '我们一起打扫吧！', phonetic: 'Wǒmen yīqǐ dǎ sǎo ba!', english: "Let's clean together!" },
        kid: { text: '好呀，我喜欢打扫！', phonetic: 'Hǎo ya, wǒ xǐhuan dǎ sǎo!', english: "Yay, I love to clean!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily clean.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "limpiar",
      phonetic: "leem-PYAHR",
      dialogue: {
        mom: { text: '¡Vamos a limpiar juntos!', phonetic: 'BAH-mohs ah leem-PYAHR HOON-tohs!', english: "Let's clean together!" },
        kid: { text: '¡Sí, me encanta limpiar!', phonetic: 'SEE, meh ehn-KAHN-tah leem-PYAHR!', english: "Yes, I love to clean!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us clean with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-hide",
    english: "Hide",
    emoji: "🙈",
    category: "verbs",
    ko: {
      word: "숨다",
      phonetic: "sum da",
      dialogue: {
        mom: { text: '우리 같이 숨다 볼까?', phonetic: 'u ri gat i sum da bol kka?', english: "Shall we hide together?" },
        kid: { text: '네! 재미있게 숨다!', phonetic: 'ne! jae mi it ge sum da!', english: "Yes! So fun to hide!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily hide.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "藏起来",
      phonetic: "cáng qǐ lái",
      dialogue: {
        mom: { text: '我们一起藏起来吧！', phonetic: 'Wǒmen yīqǐ cáng qǐ lái ba!', english: "Let's hide together!" },
        kid: { text: '好呀，我喜欢藏起来！', phonetic: 'Hǎo ya, wǒ xǐhuan cáng qǐ lái!', english: "Yay, I love to hide!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily hide.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "esconderse",
      phonetic: "ehs-kohn-DEHR-seh",
      dialogue: {
        mom: { text: '¡Vamos a esconderse juntos!', phonetic: 'BAH-mohs ah ehs-kohn-DEHR-seh HOON-tohs!', english: "Let's hide together!" },
        kid: { text: '¡Sí, me encanta esconderse!', phonetic: 'SEE, meh ehn-KAHN-tah ehs-kohn-DEHR-seh!', english: "Yes, I love to hide!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us hide with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-find",
    english: "Find",
    emoji: "🔍",
    category: "verbs",
    ko: {
      word: "찾다",
      phonetic: "chat da",
      dialogue: {
        mom: { text: '우리 같이 찾다 볼까?', phonetic: 'u ri gat i chat da bol kka?', english: "Shall we find together?" },
        kid: { text: '네! 재미있게 찾다!', phonetic: 'ne! jae mi it ge chat da!', english: "Yes! So fun to find!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily find.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "找到",
      phonetic: "zhǎo dào",
      dialogue: {
        mom: { text: '我们一起找到吧！', phonetic: 'Wǒmen yīqǐ zhǎo dào ba!', english: "Let's find together!" },
        kid: { text: '好呀，我喜欢找到！', phonetic: 'Hǎo ya, wǒ xǐhuan zhǎo dào!', english: "Yay, I love to find!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily find.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "encontrar",
      phonetic: "ehn-kohn-TRAHR",
      dialogue: {
        mom: { text: '¡Vamos a encontrar juntos!', phonetic: 'BAH-mohs ah ehn-kohn-TRAHR HOON-tohs!', english: "Let's find together!" },
        kid: { text: '¡Sí, me encanta encontrar!', phonetic: 'SEE, meh ehn-KAHN-tah ehn-kohn-TRAHR!', english: "Yes, I love to find!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us find with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-count",
    english: "Count",
    emoji: "🔢",
    category: "verbs",
    ko: {
      word: "세기",
      phonetic: "se gi",
      dialogue: {
        mom: { text: '우리 같이 세기 볼까?', phonetic: 'u ri gat i se gi bol kka?', english: "Shall we count together?" },
        kid: { text: '네! 재미있게 세기!', phonetic: 'ne! jae mi it ge se gi!', english: "Yes! So fun to count!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily count.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "数数",
      phonetic: "shǔ shù",
      dialogue: {
        mom: { text: '我们一起数数吧！', phonetic: 'Wǒmen yīqǐ shǔ shù ba!', english: "Let's count together!" },
        kid: { text: '好呀，我喜欢数数！', phonetic: 'Hǎo ya, wǒ xǐhuan shǔ shù!', english: "Yay, I love to count!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily count.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "contar",
      phonetic: "kohn-TAHR",
      dialogue: {
        mom: { text: '¡Vamos a contar juntos!', phonetic: 'BAH-mohs ah kohn-TAHR HOON-tohs!', english: "Let's count together!" },
        kid: { text: '¡Sí, me encanta contar!', phonetic: 'SEE, meh ehn-KAHN-tah kohn-TAHR!', english: "Yes, I love to count!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us count with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-smell",
    english: "Smell",
    emoji: "👃",
    category: "verbs",
    ko: {
      word: "냄새맡다",
      phonetic: "naem sae mat da",
      dialogue: {
        mom: { text: '우리 같이 냄새맡다 볼까?', phonetic: 'u ri gat i naem sae mat da bol kka?', english: "Shall we smell together?" },
        kid: { text: '네! 재미있게 냄새맡다!', phonetic: 'ne! jae mi it ge naem sae mat da!', english: "Yes! So fun to smell!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily smell.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "闻闻",
      phonetic: "wén wen",
      dialogue: {
        mom: { text: '我们一起闻闻吧！', phonetic: 'Wǒmen yīqǐ wén wen ba!', english: "Let's smell together!" },
        kid: { text: '好呀，我喜欢闻闻！', phonetic: 'Hǎo ya, wǒ xǐhuan wén wen!', english: "Yay, I love to smell!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily smell.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "oler",
      phonetic: "oh-LEHR",
      dialogue: {
        mom: { text: '¡Vamos a oler juntos!', phonetic: 'BAH-mohs ah oh-LEHR HOON-tohs!', english: "Let's smell together!" },
        kid: { text: '¡Sí, me encanta oler!', phonetic: 'SEE, meh ehn-KAHN-tah oh-LEHR!', english: "Yes, I love to smell!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us smell with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-taste",
    english: "Taste",
    emoji: "👅",
    category: "verbs",
    ko: {
      word: "맛보다",
      phonetic: "mat bo da",
      dialogue: {
        mom: { text: '우리 같이 맛보다 볼까?', phonetic: 'u ri gat i mat bo da bol kka?', english: "Shall we taste together?" },
        kid: { text: '네! 재미있게 맛보다!', phonetic: 'ne! jae mi it ge mat bo da!', english: "Yes! So fun to taste!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily taste.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "尝一尝",
      phonetic: "cháng yī cháng",
      dialogue: {
        mom: { text: '我们一起尝一尝吧！', phonetic: 'Wǒmen yīqǐ cháng yī cháng ba!', english: "Let's taste together!" },
        kid: { text: '好呀，我喜欢尝一尝！', phonetic: 'Hǎo ya, wǒ xǐhuan cháng yī cháng!', english: "Yay, I love to taste!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily taste.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "probar",
      phonetic: "proh-BAHR",
      dialogue: {
        mom: { text: '¡Vamos a probar juntos!', phonetic: 'BAH-mohs ah proh-BAHR HOON-tohs!', english: "Let's taste together!" },
        kid: { text: '¡Sí, me encanta probar!', phonetic: 'SEE, meh ehn-KAHN-tah proh-BAHR!', english: "Yes, I love to taste!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us taste with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-touch",
    english: "Touch",
    emoji: "🖐️",
    category: "verbs",
    ko: {
      word: "만지다",
      phonetic: "man ji da",
      dialogue: {
        mom: { text: '우리 같이 만지다 볼까?', phonetic: 'u ri gat i man ji da bol kka?', english: "Shall we touch together?" },
        kid: { text: '네! 재미있게 만지다!', phonetic: 'ne! jae mi it ge man ji da!', english: "Yes! So fun to touch!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily touch.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "摸摸",
      phonetic: "mō mo",
      dialogue: {
        mom: { text: '我们一起摸摸吧！', phonetic: 'Wǒmen yīqǐ mō mo ba!', english: "Let's touch together!" },
        kid: { text: '好呀，我喜欢摸摸！', phonetic: 'Hǎo ya, wǒ xǐhuan mō mo!', english: "Yay, I love to touch!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily touch.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "tocar",
      phonetic: "toh-KAHR",
      dialogue: {
        mom: { text: '¡Vamos a tocar juntos!', phonetic: 'BAH-mohs ah toh-KAHR HOON-tohs!', english: "Let's touch together!" },
        kid: { text: '¡Sí, me encanta tocar!', phonetic: 'SEE, meh ehn-KAHN-tah toh-KAHR!', english: "Yes, I love to touch!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us touch with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "verb-play",
    english: "Play",
    emoji: "🎈",
    category: "verbs",
    ko: {
      word: "놀다",
      phonetic: "nol da",
      dialogue: {
        mom: { text: '우리 같이 놀다 볼까?', phonetic: 'u ri gat i nol da bol kka?', english: "Shall we play together?" },
        kid: { text: '네! 재미있게 놀다!', phonetic: 'ne! jae mi it ge nol da!', english: "Yes! So fun to play!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily play.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "玩耍",
      phonetic: "wán shuǎ",
      dialogue: {
        mom: { text: '我们一起玩耍吧！', phonetic: 'Wǒmen yīqǐ wán shuǎ ba!', english: "Let's play together!" },
        kid: { text: '好呀，我喜欢玩耍！', phonetic: 'Hǎo ya, wǒ xǐhuan wán shuǎ!', english: "Yay, I love to play!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily play.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "jugar",
      phonetic: "hoo-GAHR",
      dialogue: {
        mom: { text: '¡Vamos a jugar juntos!', phonetic: 'BAH-mohs ah hoo-GAHR HOON-tohs!', english: "Let's play together!" },
        kid: { text: '¡Sí, me encanta jugar!', phonetic: 'SEE, meh ehn-KAHN-tah hoo-GAHR!', english: "Yes, I love to play!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us play with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  }
];

export const NEW_40_ADJECTIVES: FlashcardConcept[] = [
  {
    id: "adj-tall",
    english: "Tall",
    emoji: "🦒",
    category: "adjectives",
    ko: {
      word: "키가 큰",
      phonetic: "ki ga keun",
      dialogue: {
        mom: { text: '우리 같이 키가 큰 볼까?', phonetic: 'u ri gat i ki ga keun bol kka?', english: "Shall we tall together?" },
        kid: { text: '네! 재미있게 키가 큰!', phonetic: 'ne! jae mi it ge ki ga keun!', english: "Yes! So fun to tall!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily tall.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "高高的",
      phonetic: "gāo gāo de",
      dialogue: {
        mom: { text: '我们一起高高的吧！', phonetic: 'Wǒmen yīqǐ gāo gāo de ba!', english: "Let's tall together!" },
        kid: { text: '好呀，我喜欢高高的！', phonetic: 'Hǎo ya, wǒ xǐhuan gāo gāo de!', english: "Yay, I love to tall!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily tall.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "alto",
      phonetic: "AHL-toh",
      dialogue: {
        mom: { text: '¡Vamos a alto juntos!', phonetic: 'BAH-mohs ah AHL-toh HOON-tohs!', english: "Let's tall together!" },
        kid: { text: '¡Sí, me encanta alto!', phonetic: 'SEE, meh ehn-KAHN-tah AHL-toh!', english: "Yes, I love to tall!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us tall with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-short-height",
    english: "Short",
    emoji: "🦔",
    category: "adjectives",
    ko: {
      word: "키가 작은",
      phonetic: "ki ga jag eun",
      dialogue: {
        mom: { text: '우리 같이 키가 작은 볼까?', phonetic: 'u ri gat i ki ga jag eun bol kka?', english: "Shall we short together?" },
        kid: { text: '네! 재미있게 키가 작은!', phonetic: 'ne! jae mi it ge ki ga jag eun!', english: "Yes! So fun to short!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily short.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "矮矮的",
      phonetic: "ǎi ǎi de",
      dialogue: {
        mom: { text: '我们一起矮矮的吧！', phonetic: 'Wǒmen yīqǐ ǎi ǎi de ba!', english: "Let's short together!" },
        kid: { text: '好呀，我喜欢矮矮的！', phonetic: 'Hǎo ya, wǒ xǐhuan ǎi ǎi de!', english: "Yay, I love to short!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily short.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "bajo",
      phonetic: "BAH-hoh",
      dialogue: {
        mom: { text: '¡Vamos a bajo juntos!', phonetic: 'BAH-mohs ah BAH-hoh HOON-tohs!', english: "Let's short together!" },
        kid: { text: '¡Sí, me encanta bajo!', phonetic: 'SEE, meh ehn-KAHN-tah BAH-hoh!', english: "Yes, I love to short!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us short with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-long",
    english: "Long",
    emoji: "📏",
    category: "adjectives",
    ko: {
      word: "길다",
      phonetic: "gil da",
      dialogue: {
        mom: { text: '우리 같이 길다 볼까?', phonetic: 'u ri gat i gil da bol kka?', english: "Shall we long together?" },
        kid: { text: '네! 재미있게 길다!', phonetic: 'ne! jae mi it ge gil da!', english: "Yes! So fun to long!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily long.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "长长的",
      phonetic: "cháng cháng de",
      dialogue: {
        mom: { text: '我们一起长长的吧！', phonetic: 'Wǒmen yīqǐ cháng cháng de ba!', english: "Let's long together!" },
        kid: { text: '好呀，我喜欢长长的！', phonetic: 'Hǎo ya, wǒ xǐhuan cháng cháng de!', english: "Yay, I love to long!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily long.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "largo",
      phonetic: "LAHR-goh",
      dialogue: {
        mom: { text: '¡Vamos a largo juntos!', phonetic: 'BAH-mohs ah LAHR-goh HOON-tohs!', english: "Let's long together!" },
        kid: { text: '¡Sí, me encanta largo!', phonetic: 'SEE, meh ehn-KAHN-tah LAHR-goh!', english: "Yes, I love to long!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us long with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-short-len",
    english: "Short (length)",
    emoji: "✏️",
    category: "adjectives",
    ko: {
      word: "짧다",
      phonetic: "jjalb da",
      dialogue: {
        mom: { text: '우리 같이 짧다 볼까?', phonetic: 'u ri gat i jjalb da bol kka?', english: "Shall we short (length) together?" },
        kid: { text: '네! 재미있게 짧다!', phonetic: 'ne! jae mi it ge jjalb da!', english: "Yes! So fun to short (length)!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily short (length).',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "短短的",
      phonetic: "duǎn duǎn de",
      dialogue: {
        mom: { text: '我们一起短短的吧！', phonetic: 'Wǒmen yīqǐ duǎn duǎn de ba!', english: "Let's short (length) together!" },
        kid: { text: '好呀，我喜欢短短的！', phonetic: 'Hǎo ya, wǒ xǐhuan duǎn duǎn de!', english: "Yay, I love to short (length)!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily short (length).',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "corto",
      phonetic: "KOHR-toh",
      dialogue: {
        mom: { text: '¡Vamos a corto juntos!', phonetic: 'BAH-mohs ah KOHR-toh HOON-tohs!', english: "Let's short (length) together!" },
        kid: { text: '¡Sí, me encanta corto!', phonetic: 'SEE, meh ehn-KAHN-tah KOHR-toh!', english: "Yes, I love to short (length)!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us short (length) with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-heavy",
    english: "Heavy",
    emoji: "🐘",
    category: "adjectives",
    ko: {
      word: "무겁다",
      phonetic: "mu geop da",
      dialogue: {
        mom: { text: '우리 같이 무겁다 볼까?', phonetic: 'u ri gat i mu geop da bol kka?', english: "Shall we heavy together?" },
        kid: { text: '네! 재미있게 무겁다!', phonetic: 'ne! jae mi it ge mu geop da!', english: "Yes! So fun to heavy!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily heavy.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "重重的",
      phonetic: "zhòng zhòng de",
      dialogue: {
        mom: { text: '我们一起重重的吧！', phonetic: 'Wǒmen yīqǐ zhòng zhòng de ba!', english: "Let's heavy together!" },
        kid: { text: '好呀，我喜欢重重的！', phonetic: 'Hǎo ya, wǒ xǐhuan zhòng zhòng de!', english: "Yay, I love to heavy!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily heavy.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "pesado",
      phonetic: "peh-SAH-doh",
      dialogue: {
        mom: { text: '¡Vamos a pesado juntos!', phonetic: 'BAH-mohs ah peh-SAH-doh HOON-tohs!', english: "Let's heavy together!" },
        kid: { text: '¡Sí, me encanta pesado!', phonetic: 'SEE, meh ehn-KAHN-tah peh-SAH-doh!', english: "Yes, I love to heavy!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us heavy with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-light",
    english: "Light",
    emoji: "🪶",
    category: "adjectives",
    ko: {
      word: "가볍다",
      phonetic: "ga byeop da",
      dialogue: {
        mom: { text: '우리 같이 가볍다 볼까?', phonetic: 'u ri gat i ga byeop da bol kka?', english: "Shall we light together?" },
        kid: { text: '네! 재미있게 가볍다!', phonetic: 'ne! jae mi it ge ga byeop da!', english: "Yes! So fun to light!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily light.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "轻飘飘",
      phonetic: "qīng piāo piāo",
      dialogue: {
        mom: { text: '我们一起轻飘飘吧！', phonetic: 'Wǒmen yīqǐ qīng piāo piāo ba!', english: "Let's light together!" },
        kid: { text: '好呀，我喜欢轻飘飘！', phonetic: 'Hǎo ya, wǒ xǐhuan qīng piāo piāo!', english: "Yay, I love to light!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily light.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "ligero",
      phonetic: "lee-HEH-roh",
      dialogue: {
        mom: { text: '¡Vamos a ligero juntos!', phonetic: 'BAH-mohs ah lee-HEH-roh HOON-tohs!', english: "Let's light together!" },
        kid: { text: '¡Sí, me encanta ligero!', phonetic: 'SEE, meh ehn-KAHN-tah lee-HEH-roh!', english: "Yes, I love to light!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us light with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-bright",
    english: "Bright",
    emoji: "💡",
    category: "adjectives",
    ko: {
      word: "밝다",
      phonetic: "bak da",
      dialogue: {
        mom: { text: '우리 같이 밝다 볼까?', phonetic: 'u ri gat i bak da bol kka?', english: "Shall we bright together?" },
        kid: { text: '네! 재미있게 밝다!', phonetic: 'ne! jae mi it ge bak da!', english: "Yes! So fun to bright!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily bright.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "明亮的",
      phonetic: "míng liàng de",
      dialogue: {
        mom: { text: '我们一起明亮的吧！', phonetic: 'Wǒmen yīqǐ míng liàng de ba!', english: "Let's bright together!" },
        kid: { text: '好呀，我喜欢明亮的！', phonetic: 'Hǎo ya, wǒ xǐhuan míng liàng de!', english: "Yay, I love to bright!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily bright.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "brillante",
      phonetic: "bree-YAHN-teh",
      dialogue: {
        mom: { text: '¡Vamos a brillante juntos!', phonetic: 'BAH-mohs ah bree-YAHN-teh HOON-tohs!', english: "Let's bright together!" },
        kid: { text: '¡Sí, me encanta brillante!', phonetic: 'SEE, meh ehn-KAHN-tah bree-YAHN-teh!', english: "Yes, I love to bright!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us bright with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-dark",
    english: "Dark",
    emoji: "🌑",
    category: "adjectives",
    ko: {
      word: "어둡다",
      phonetic: "eo dup da",
      dialogue: {
        mom: { text: '우리 같이 어둡다 볼까?', phonetic: 'u ri gat i eo dup da bol kka?', english: "Shall we dark together?" },
        kid: { text: '네! 재미있게 어둡다!', phonetic: 'ne! jae mi it ge eo dup da!', english: "Yes! So fun to dark!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily dark.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "暗暗的",
      phonetic: "àn àn de",
      dialogue: {
        mom: { text: '我们一起暗暗的吧！', phonetic: 'Wǒmen yīqǐ àn àn de ba!', english: "Let's dark together!" },
        kid: { text: '好呀，我喜欢暗暗的！', phonetic: 'Hǎo ya, wǒ xǐhuan àn àn de!', english: "Yay, I love to dark!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily dark.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "oscuro",
      phonetic: "ohs-KOO-roh",
      dialogue: {
        mom: { text: '¡Vamos a oscuro juntos!', phonetic: 'BAH-mohs ah ohs-KOO-roh HOON-tohs!', english: "Let's dark together!" },
        kid: { text: '¡Sí, me encanta oscuro!', phonetic: 'SEE, meh ehn-KAHN-tah ohs-KOO-roh!', english: "Yes, I love to dark!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us dark with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-warm",
    english: "Warm",
    emoji: "🧣",
    category: "adjectives",
    ko: {
      word: "따뜻하다",
      phonetic: "tta tteut ha da",
      dialogue: {
        mom: { text: '우리 같이 따뜻하다 볼까?', phonetic: 'u ri gat i tta tteut ha da bol kka?', english: "Shall we warm together?" },
        kid: { text: '네! 재미있게 따뜻하다!', phonetic: 'ne! jae mi it ge tta tteut ha da!', english: "Yes! So fun to warm!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily warm.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "暖和",
      phonetic: "nuǎn huo",
      dialogue: {
        mom: { text: '我们一起暖和吧！', phonetic: 'Wǒmen yīqǐ nuǎn huo ba!', english: "Let's warm together!" },
        kid: { text: '好呀，我喜欢暖和！', phonetic: 'Hǎo ya, wǒ xǐhuan nuǎn huo!', english: "Yay, I love to warm!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily warm.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "tibio",
      phonetic: "TEE-byoh",
      dialogue: {
        mom: { text: '¡Vamos a tibio juntos!', phonetic: 'BAH-mohs ah TEE-byoh HOON-tohs!', english: "Let's warm together!" },
        kid: { text: '¡Sí, me encanta tibio!', phonetic: 'SEE, meh ehn-KAHN-tah TEE-byoh!', english: "Yes, I love to warm!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us warm with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-cool",
    english: "Cool",
    emoji: "🍃",
    category: "adjectives",
    ko: {
      word: "시원하다",
      phonetic: "si won ha da",
      dialogue: {
        mom: { text: '우리 같이 시원하다 볼까?', phonetic: 'u ri gat i si won ha da bol kka?', english: "Shall we cool together?" },
        kid: { text: '네! 재미있게 시원하다!', phonetic: 'ne! jae mi it ge si won ha da!', english: "Yes! So fun to cool!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily cool.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "凉爽",
      phonetic: "liáng shuǎng",
      dialogue: {
        mom: { text: '我们一起凉爽吧！', phonetic: 'Wǒmen yīqǐ liáng shuǎng ba!', english: "Let's cool together!" },
        kid: { text: '好呀，我喜欢凉爽！', phonetic: 'Hǎo ya, wǒ xǐhuan liáng shuǎng!', english: "Yay, I love to cool!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily cool.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "fresco",
      phonetic: "FREHS-koh",
      dialogue: {
        mom: { text: '¡Vamos a fresco juntos!', phonetic: 'BAH-mohs ah FREHS-koh HOON-tohs!', english: "Let's cool together!" },
        kid: { text: '¡Sí, me encanta fresco!', phonetic: 'SEE, meh ehn-KAHN-tah FREHS-koh!', english: "Yes, I love to cool!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us cool with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-hot-temp",
    english: "Hot",
    emoji: "♨️",
    category: "adjectives",
    ko: {
      word: "뜨겁다",
      phonetic: "tteu geop da",
      dialogue: {
        mom: { text: '우리 같이 뜨겁다 볼까?', phonetic: 'u ri gat i tteu geop da bol kka?', english: "Shall we hot together?" },
        kid: { text: '네! 재미있게 뜨겁다!', phonetic: 'ne! jae mi it ge tteu geop da!', english: "Yes! So fun to hot!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily hot.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "热热的",
      phonetic: "rè rè de",
      dialogue: {
        mom: { text: '我们一起热热的吧！', phonetic: 'Wǒmen yīqǐ rè rè de ba!', english: "Let's hot together!" },
        kid: { text: '好呀，我喜欢热热的！', phonetic: 'Hǎo ya, wǒ xǐhuan rè rè de!', english: "Yay, I love to hot!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily hot.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "caliente",
      phonetic: "kah-LYEHN-teh",
      dialogue: {
        mom: { text: '¡Vamos a caliente juntos!', phonetic: 'BAH-mohs ah kah-LYEHN-teh HOON-tohs!', english: "Let's hot together!" },
        kid: { text: '¡Sí, me encanta caliente!', phonetic: 'SEE, meh ehn-KAHN-tah kah-LYEHN-teh!', english: "Yes, I love to hot!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us hot with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-cold-ice",
    english: "Cold",
    emoji: "❄️",
    category: "adjectives",
    ko: {
      word: "차갑다",
      phonetic: "cha gap da",
      dialogue: {
        mom: { text: '우리 같이 차갑다 볼까?', phonetic: 'u ri gat i cha gap da bol kka?', english: "Shall we cold together?" },
        kid: { text: '네! 재미있게 차갑다!', phonetic: 'ne! jae mi it ge cha gap da!', english: "Yes! So fun to cold!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily cold.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "冰凉",
      phonetic: "bīng liáng",
      dialogue: {
        mom: { text: '我们一起冰凉吧！', phonetic: 'Wǒmen yīqǐ bīng liáng ba!', english: "Let's cold together!" },
        kid: { text: '好呀，我喜欢冰凉！', phonetic: 'Hǎo ya, wǒ xǐhuan bīng liáng!', english: "Yay, I love to cold!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily cold.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "frío",
      phonetic: "FREE-oh",
      dialogue: {
        mom: { text: '¡Vamos a frío juntos!', phonetic: 'BAH-mohs ah FREE-oh HOON-tohs!', english: "Let's cold together!" },
        kid: { text: '¡Sí, me encanta frío!', phonetic: 'SEE, meh ehn-KAHN-tah FREE-oh!', english: "Yes, I love to cold!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us cold with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-sweet",
    english: "Sweet",
    emoji: "🍭",
    category: "adjectives",
    ko: {
      word: "달콤하다",
      phonetic: "dal kom ha da",
      dialogue: {
        mom: { text: '우리 같이 달콤하다 볼까?', phonetic: 'u ri gat i dal kom ha da bol kka?', english: "Shall we sweet together?" },
        kid: { text: '네! 재미있게 달콤하다!', phonetic: 'ne! jae mi it ge dal kom ha da!', english: "Yes! So fun to sweet!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily sweet.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "甜甜的",
      phonetic: "tián tián de",
      dialogue: {
        mom: { text: '我们一起甜甜的吧！', phonetic: 'Wǒmen yīqǐ tián tián de ba!', english: "Let's sweet together!" },
        kid: { text: '好呀，我喜欢甜甜的！', phonetic: 'Hǎo ya, wǒ xǐhuan tián tián de!', english: "Yay, I love to sweet!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily sweet.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "dulce",
      phonetic: "DOOL-seh",
      dialogue: {
        mom: { text: '¡Vamos a dulce juntos!', phonetic: 'BAH-mohs ah DOOL-seh HOON-tohs!', english: "Let's sweet together!" },
        kid: { text: '¡Sí, me encanta dulce!', phonetic: 'SEE, meh ehn-KAHN-tah DOOL-seh!', english: "Yes, I love to sweet!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us sweet with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-sour",
    english: "Sour",
    emoji: "🍋",
    category: "adjectives",
    ko: {
      word: "새콤하다",
      phonetic: "sae kom ha da",
      dialogue: {
        mom: { text: '우리 같이 새콤하다 볼까?', phonetic: 'u ri gat i sae kom ha da bol kka?', english: "Shall we sour together?" },
        kid: { text: '네! 재미있게 새콤하다!', phonetic: 'ne! jae mi it ge sae kom ha da!', english: "Yes! So fun to sour!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily sour.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "酸酸的",
      phonetic: "suān suān de",
      dialogue: {
        mom: { text: '我们一起酸酸的吧！', phonetic: 'Wǒmen yīqǐ suān suān de ba!', english: "Let's sour together!" },
        kid: { text: '好呀，我喜欢酸酸的！', phonetic: 'Hǎo ya, wǒ xǐhuan suān suān de!', english: "Yay, I love to sour!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily sour.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "agrio",
      phonetic: "AH-gryoh",
      dialogue: {
        mom: { text: '¡Vamos a agrio juntos!', phonetic: 'BAH-mohs ah AH-gryoh HOON-tohs!', english: "Let's sour together!" },
        kid: { text: '¡Sí, me encanta agrio!', phonetic: 'SEE, meh ehn-KAHN-tah AH-gryoh!', english: "Yes, I love to sour!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us sour with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-salty",
    english: "Salty",
    emoji: "🥨",
    category: "adjectives",
    ko: {
      word: "짭짤하다",
      phonetic: "jjap jjal ha da",
      dialogue: {
        mom: { text: '우리 같이 짭짤하다 볼까?', phonetic: 'u ri gat i jjap jjal ha da bol kka?', english: "Shall we salty together?" },
        kid: { text: '네! 재미있게 짭짤하다!', phonetic: 'ne! jae mi it ge jjap jjal ha da!', english: "Yes! So fun to salty!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily salty.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "咸咸的",
      phonetic: "xián xián de",
      dialogue: {
        mom: { text: '我们一起咸咸的吧！', phonetic: 'Wǒmen yīqǐ xián xián de ba!', english: "Let's salty together!" },
        kid: { text: '好呀，我喜欢咸咸的！', phonetic: 'Hǎo ya, wǒ xǐhuan xián xián de!', english: "Yay, I love to salty!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily salty.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "salado",
      phonetic: "sah-LAH-doh",
      dialogue: {
        mom: { text: '¡Vamos a salado juntos!', phonetic: 'BAH-mohs ah sah-LAH-doh HOON-tohs!', english: "Let's salty together!" },
        kid: { text: '¡Sí, me encanta salado!', phonetic: 'SEE, meh ehn-KAHN-tah sah-LAH-doh!', english: "Yes, I love to salty!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us salty with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-soft",
    english: "Soft",
    emoji: "🧸",
    category: "adjectives",
    ko: {
      word: "부드럽다",
      phonetic: "bu deu reop da",
      dialogue: {
        mom: { text: '우리 같이 부드럽다 볼까?', phonetic: 'u ri gat i bu deu reop da bol kka?', english: "Shall we soft together?" },
        kid: { text: '네! 재미있게 부드럽다!', phonetic: 'ne! jae mi it ge bu deu reop da!', english: "Yes! So fun to soft!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily soft.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "软软的",
      phonetic: "ruǎn ruǎn de",
      dialogue: {
        mom: { text: '我们一起软软的吧！', phonetic: 'Wǒmen yīqǐ ruǎn ruǎn de ba!', english: "Let's soft together!" },
        kid: { text: '好呀，我喜欢软软的！', phonetic: 'Hǎo ya, wǒ xǐhuan ruǎn ruǎn de!', english: "Yay, I love to soft!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily soft.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "suave",
      phonetic: "SWAH-beh",
      dialogue: {
        mom: { text: '¡Vamos a suave juntos!', phonetic: 'BAH-mohs ah SWAH-beh HOON-tohs!', english: "Let's soft together!" },
        kid: { text: '¡Sí, me encanta suave!', phonetic: 'SEE, meh ehn-KAHN-tah SWAH-beh!', english: "Yes, I love to soft!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us soft with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-hard",
    english: "Hard",
    emoji: "🧱",
    category: "adjectives",
    ko: {
      word: "단단하다",
      phonetic: "dan dan ha da",
      dialogue: {
        mom: { text: '우리 같이 단단하다 볼까?', phonetic: 'u ri gat i dan dan ha da bol kka?', english: "Shall we hard together?" },
        kid: { text: '네! 재미있게 단단하다!', phonetic: 'ne! jae mi it ge dan dan ha da!', english: "Yes! So fun to hard!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily hard.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "硬硬的",
      phonetic: "yìng yìng de",
      dialogue: {
        mom: { text: '我们一起硬硬的吧！', phonetic: 'Wǒmen yīqǐ yìng yìng de ba!', english: "Let's hard together!" },
        kid: { text: '好呀，我喜欢硬硬的！', phonetic: 'Hǎo ya, wǒ xǐhuan yìng yìng de!', english: "Yay, I love to hard!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily hard.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "duro",
      phonetic: "DOO-roh",
      dialogue: {
        mom: { text: '¡Vamos a duro juntos!', phonetic: 'BAH-mohs ah DOO-roh HOON-tohs!', english: "Let's hard together!" },
        kid: { text: '¡Sí, me encanta duro!', phonetic: 'SEE, meh ehn-KAHN-tah DOO-roh!', english: "Yes, I love to hard!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us hard with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-smooth",
    english: "Smooth",
    emoji: "🪞",
    category: "adjectives",
    ko: {
      word: "매끄럽다",
      phonetic: "mae kkeu reop da",
      dialogue: {
        mom: { text: '우리 같이 매끄럽다 볼까?', phonetic: 'u ri gat i mae kkeu reop da bol kka?', english: "Shall we smooth together?" },
        kid: { text: '네! 재미있게 매끄럽다!', phonetic: 'ne! jae mi it ge mae kkeu reop da!', english: "Yes! So fun to smooth!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily smooth.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "滑滑的",
      phonetic: "huá huá de",
      dialogue: {
        mom: { text: '我们一起滑滑的吧！', phonetic: 'Wǒmen yīqǐ huá huá de ba!', english: "Let's smooth together!" },
        kid: { text: '好呀，我喜欢滑滑的！', phonetic: 'Hǎo ya, wǒ xǐhuan huá huá de!', english: "Yay, I love to smooth!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily smooth.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "liso",
      phonetic: "LEE-soh",
      dialogue: {
        mom: { text: '¡Vamos a liso juntos!', phonetic: 'BAH-mohs ah LEE-soh HOON-tohs!', english: "Let's smooth together!" },
        kid: { text: '¡Sí, me encanta liso!', phonetic: 'SEE, meh ehn-KAHN-tah LEE-soh!', english: "Yes, I love to smooth!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us smooth with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-rough",
    english: "Rough",
    emoji: "🪵",
    category: "adjectives",
    ko: {
      word: "거칠다",
      phonetic: "geo chil da",
      dialogue: {
        mom: { text: '우리 같이 거칠다 볼까?', phonetic: 'u ri gat i geo chil da bol kka?', english: "Shall we rough together?" },
        kid: { text: '네! 재미있게 거칠다!', phonetic: 'ne! jae mi it ge geo chil da!', english: "Yes! So fun to rough!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily rough.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "粗糙的",
      phonetic: "cū cāo de",
      dialogue: {
        mom: { text: '我们一起粗糙的吧！', phonetic: 'Wǒmen yīqǐ cū cāo de ba!', english: "Let's rough together!" },
        kid: { text: '好呀，我喜欢粗糙的！', phonetic: 'Hǎo ya, wǒ xǐhuan cū cāo de!', english: "Yay, I love to rough!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily rough.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "áspero",
      phonetic: "AHS-peh-roh",
      dialogue: {
        mom: { text: '¡Vamos a áspero juntos!', phonetic: 'BAH-mohs ah AHS-peh-roh HOON-tohs!', english: "Let's rough together!" },
        kid: { text: '¡Sí, me encanta áspero!', phonetic: 'SEE, meh ehn-KAHN-tah AHS-peh-roh!', english: "Yes, I love to rough!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us rough with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-loud",
    english: "Loud",
    emoji: "📢",
    category: "adjectives",
    ko: {
      word: "시끄럽다",
      phonetic: "si kkeu reop da",
      dialogue: {
        mom: { text: '우리 같이 시끄럽다 볼까?', phonetic: 'u ri gat i si kkeu reop da bol kka?', english: "Shall we loud together?" },
        kid: { text: '네! 재미있게 시끄럽다!', phonetic: 'ne! jae mi it ge si kkeu reop da!', english: "Yes! So fun to loud!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily loud.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "响亮",
      phonetic: "xiǎng liàng",
      dialogue: {
        mom: { text: '我们一起响亮吧！', phonetic: 'Wǒmen yīqǐ xiǎng liàng ba!', english: "Let's loud together!" },
        kid: { text: '好呀，我喜欢响亮！', phonetic: 'Hǎo ya, wǒ xǐhuan xiǎng liàng!', english: "Yay, I love to loud!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily loud.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "ruidoso",
      phonetic: "rwee-DOH-soh",
      dialogue: {
        mom: { text: '¡Vamos a ruidoso juntos!', phonetic: 'BAH-mohs ah rwee-DOH-soh HOON-tohs!', english: "Let's loud together!" },
        kid: { text: '¡Sí, me encanta ruidoso!', phonetic: 'SEE, meh ehn-KAHN-tah rwee-DOH-soh!', english: "Yes, I love to loud!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us loud with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-quiet",
    english: "Quiet",
    emoji: "🤫",
    category: "adjectives",
    ko: {
      word: "조용하다",
      phonetic: "jo yong ha da",
      dialogue: {
        mom: { text: '우리 같이 조용하다 볼까?', phonetic: 'u ri gat i jo yong ha da bol kka?', english: "Shall we quiet together?" },
        kid: { text: '네! 재미있게 조용하다!', phonetic: 'ne! jae mi it ge jo yong ha da!', english: "Yes! So fun to quiet!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily quiet.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "安静",
      phonetic: "ān jìng",
      dialogue: {
        mom: { text: '我们一起安静吧！', phonetic: 'Wǒmen yīqǐ ān jìng ba!', english: "Let's quiet together!" },
        kid: { text: '好呀，我喜欢安静！', phonetic: 'Hǎo ya, wǒ xǐhuan ān jìng!', english: "Yay, I love to quiet!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily quiet.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "silencioso",
      phonetic: "see-lehn-SYOH-soh",
      dialogue: {
        mom: { text: '¡Vamos a silencioso juntos!', phonetic: 'BAH-mohs ah see-lehn-SYOH-soh HOON-tohs!', english: "Let's quiet together!" },
        kid: { text: '¡Sí, me encanta silencioso!', phonetic: 'SEE, meh ehn-KAHN-tah see-lehn-SYOH-soh!', english: "Yes, I love to quiet!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us quiet with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-clean",
    english: "Clean",
    emoji: "✨",
    category: "adjectives",
    ko: {
      word: "깨끗하다",
      phonetic: "kkae kkeut ha da",
      dialogue: {
        mom: { text: '우리 같이 깨끗하다 볼까?', phonetic: 'u ri gat i kkae kkeut ha da bol kka?', english: "Shall we clean together?" },
        kid: { text: '네! 재미있게 깨끗하다!', phonetic: 'ne! jae mi it ge kkae kkeut ha da!', english: "Yes! So fun to clean!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily clean.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "干干净净",
      phonetic: "gān gān jìng jìng",
      dialogue: {
        mom: { text: '我们一起干干净净吧！', phonetic: 'Wǒmen yīqǐ gān gān jìng jìng ba!', english: "Let's clean together!" },
        kid: { text: '好呀，我喜欢干干净净！', phonetic: 'Hǎo ya, wǒ xǐhuan gān gān jìng jìng!', english: "Yay, I love to clean!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily clean.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "limpio",
      phonetic: "LEEM-pyoh",
      dialogue: {
        mom: { text: '¡Vamos a limpio juntos!', phonetic: 'BAH-mohs ah LEEM-pyoh HOON-tohs!', english: "Let's clean together!" },
        kid: { text: '¡Sí, me encanta limpio!', phonetic: 'SEE, meh ehn-KAHN-tah LEEM-pyoh!', english: "Yes, I love to clean!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us clean with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-dirty",
    english: "Dirty",
    emoji: "🧦",
    category: "adjectives",
    ko: {
      word: "더럽다",
      phonetic: "deo reop da",
      dialogue: {
        mom: { text: '우리 같이 더럽다 볼까?', phonetic: 'u ri gat i deo reop da bol kka?', english: "Shall we dirty together?" },
        kid: { text: '네! 재미있게 더럽다!', phonetic: 'ne! jae mi it ge deo reop da!', english: "Yes! So fun to dirty!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily dirty.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "脏兮兮",
      phonetic: "zāng xī xī",
      dialogue: {
        mom: { text: '我们一起脏兮兮吧！', phonetic: 'Wǒmen yīqǐ zāng xī xī ba!', english: "Let's dirty together!" },
        kid: { text: '好呀，我喜欢脏兮兮！', phonetic: 'Hǎo ya, wǒ xǐhuan zāng xī xī!', english: "Yay, I love to dirty!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily dirty.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "sucio",
      phonetic: "SOO-syoh",
      dialogue: {
        mom: { text: '¡Vamos a sucio juntos!', phonetic: 'BAH-mohs ah SOO-syoh HOON-tohs!', english: "Let's dirty together!" },
        kid: { text: '¡Sí, me encanta sucio!', phonetic: 'SEE, meh ehn-KAHN-tah SOO-syoh!', english: "Yes, I love to dirty!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us dirty with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-strong",
    english: "Strong",
    emoji: "💪",
    category: "adjectives",
    ko: {
      word: "힘센",
      phonetic: "him sen",
      dialogue: {
        mom: { text: '우리 같이 힘센 볼까?', phonetic: 'u ri gat i him sen bol kka?', english: "Shall we strong together?" },
        kid: { text: '네! 재미있게 힘센!', phonetic: 'ne! jae mi it ge him sen!', english: "Yes! So fun to strong!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily strong.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "强壮",
      phonetic: "qiáng zhuàng",
      dialogue: {
        mom: { text: '我们一起强壮吧！', phonetic: 'Wǒmen yīqǐ qiáng zhuàng ba!', english: "Let's strong together!" },
        kid: { text: '好呀，我喜欢强壮！', phonetic: 'Hǎo ya, wǒ xǐhuan qiáng zhuàng!', english: "Yay, I love to strong!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily strong.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "fuerte",
      phonetic: "FWEHR-teh",
      dialogue: {
        mom: { text: '¡Vamos a fuerte juntos!', phonetic: 'BAH-mohs ah FWEHR-teh HOON-tohs!', english: "Let's strong together!" },
        kid: { text: '¡Sí, me encanta fuerte!', phonetic: 'SEE, meh ehn-KAHN-tah FWEHR-teh!', english: "Yes, I love to strong!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us strong with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-gentle",
    english: "Gentle",
    emoji: "🌸",
    category: "adjectives",
    ko: {
      word: "상냥하다",
      phonetic: "sang nyang ha da",
      dialogue: {
        mom: { text: '우리 같이 상냥하다 볼까?', phonetic: 'u ri gat i sang nyang ha da bol kka?', english: "Shall we gentle together?" },
        kid: { text: '네! 재미있게 상냥하다!', phonetic: 'ne! jae mi it ge sang nyang ha da!', english: "Yes! So fun to gentle!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily gentle.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "温柔",
      phonetic: "wēn róu",
      dialogue: {
        mom: { text: '我们一起温柔吧！', phonetic: 'Wǒmen yīqǐ wēn róu ba!', english: "Let's gentle together!" },
        kid: { text: '好呀，我喜欢温柔！', phonetic: 'Hǎo ya, wǒ xǐhuan wēn róu!', english: "Yay, I love to gentle!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily gentle.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "tierno",
      phonetic: "TYEHR-noh",
      dialogue: {
        mom: { text: '¡Vamos a tierno juntos!', phonetic: 'BAH-mohs ah TYEHR-noh HOON-tohs!', english: "Let's gentle together!" },
        kid: { text: '¡Sí, me encanta tierno!', phonetic: 'SEE, meh ehn-KAHN-tah TYEHR-noh!', english: "Yes, I love to gentle!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us gentle with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-brave",
    english: "Brave",
    emoji: "🦁",
    category: "adjectives",
    ko: {
      word: "용감하다",
      phonetic: "yong gam ha da",
      dialogue: {
        mom: { text: '우리 같이 용감하다 볼까?', phonetic: 'u ri gat i yong gam ha da bol kka?', english: "Shall we brave together?" },
        kid: { text: '네! 재미있게 용감하다!', phonetic: 'ne! jae mi it ge yong gam ha da!', english: "Yes! So fun to brave!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily brave.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "勇敢",
      phonetic: "yǒng gǎn",
      dialogue: {
        mom: { text: '我们一起勇敢吧！', phonetic: 'Wǒmen yīqǐ yǒng gǎn ba!', english: "Let's brave together!" },
        kid: { text: '好呀，我喜欢勇敢！', phonetic: 'Hǎo ya, wǒ xǐhuan yǒng gǎn!', english: "Yay, I love to brave!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily brave.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "valiente",
      phonetic: "bah-LYEHN-teh",
      dialogue: {
        mom: { text: '¡Vamos a valiente juntos!', phonetic: 'BAH-mohs ah bah-LYEHN-teh HOON-tohs!', english: "Let's brave together!" },
        kid: { text: '¡Sí, me encanta valiente!', phonetic: 'SEE, meh ehn-KAHN-tah bah-LYEHN-teh!', english: "Yes, I love to brave!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us brave with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-shy",
    english: "Shy",
    emoji: "🫣",
    category: "adjectives",
    ko: {
      word: "수줍은",
      phonetic: "su jub eun",
      dialogue: {
        mom: { text: '우리 같이 수줍은 볼까?', phonetic: 'u ri gat i su jub eun bol kka?', english: "Shall we shy together?" },
        kid: { text: '네! 재미있게 수줍은!', phonetic: 'ne! jae mi it ge su jub eun!', english: "Yes! So fun to shy!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily shy.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "害羞",
      phonetic: "hài xiū",
      dialogue: {
        mom: { text: '我们一起害羞吧！', phonetic: 'Wǒmen yīqǐ hài xiū ba!', english: "Let's shy together!" },
        kid: { text: '好呀，我喜欢害羞！', phonetic: 'Hǎo ya, wǒ xǐhuan hài xiū!', english: "Yay, I love to shy!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily shy.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "tímido",
      phonetic: "TEE-mee-doh",
      dialogue: {
        mom: { text: '¡Vamos a tímido juntos!', phonetic: 'BAH-mohs ah TEE-mee-doh HOON-tohs!', english: "Let's shy together!" },
        kid: { text: '¡Sí, me encanta tímido!', phonetic: 'SEE, meh ehn-KAHN-tah TEE-mee-doh!', english: "Yes, I love to shy!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us shy with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-funny",
    english: "Funny",
    emoji: "🤡",
    category: "adjectives",
    ko: {
      word: "웃기다",
      phonetic: "ut gi da",
      dialogue: {
        mom: { text: '우리 같이 웃기다 볼까?', phonetic: 'u ri gat i ut gi da bol kka?', english: "Shall we funny together?" },
        kid: { text: '네! 재미있게 웃기다!', phonetic: 'ne! jae mi it ge ut gi da!', english: "Yes! So fun to funny!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily funny.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "好笑",
      phonetic: "hǎo xiào",
      dialogue: {
        mom: { text: '我们一起好笑吧！', phonetic: 'Wǒmen yīqǐ hǎo xiào ba!', english: "Let's funny together!" },
        kid: { text: '好呀，我喜欢好笑！', phonetic: 'Hǎo ya, wǒ xǐhuan hǎo xiào!', english: "Yay, I love to funny!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily funny.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "divertido",
      phonetic: "dee-behr-TEE-doh",
      dialogue: {
        mom: { text: '¡Vamos a divertido juntos!', phonetic: 'BAH-mohs ah dee-behr-TEE-doh HOON-tohs!', english: "Let's funny together!" },
        kid: { text: '¡Sí, me encanta divertido!', phonetic: 'SEE, meh ehn-KAHN-tah dee-behr-TEE-doh!', english: "Yes, I love to funny!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us funny with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-sad",
    english: "Sad",
    emoji: "😢",
    category: "adjectives",
    ko: {
      word: "슬프다",
      phonetic: "seul peu da",
      dialogue: {
        mom: { text: '우리 같이 슬프다 볼까?', phonetic: 'u ri gat i seul peu da bol kka?', english: "Shall we sad together?" },
        kid: { text: '네! 재미있게 슬프다!', phonetic: 'ne! jae mi it ge seul peu da!', english: "Yes! So fun to sad!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily sad.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "伤心",
      phonetic: "shāng xīn",
      dialogue: {
        mom: { text: '我们一起伤心吧！', phonetic: 'Wǒmen yīqǐ shāng xīn ba!', english: "Let's sad together!" },
        kid: { text: '好呀，我喜欢伤心！', phonetic: 'Hǎo ya, wǒ xǐhuan shāng xīn!', english: "Yay, I love to sad!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily sad.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "triste",
      phonetic: "TREES-teh",
      dialogue: {
        mom: { text: '¡Vamos a triste juntos!', phonetic: 'BAH-mohs ah TREES-teh HOON-tohs!', english: "Let's sad together!" },
        kid: { text: '¡Sí, me encanta triste!', phonetic: 'SEE, meh ehn-KAHN-tah TREES-teh!', english: "Yes, I love to sad!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us sad with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-angry",
    english: "Angry",
    emoji: "😠",
    category: "adjectives",
    ko: {
      word: "화난",
      phonetic: "hwa nan",
      dialogue: {
        mom: { text: '우리 같이 화난 볼까?', phonetic: 'u ri gat i hwa nan bol kka?', english: "Shall we angry together?" },
        kid: { text: '네! 재미있게 화난!', phonetic: 'ne! jae mi it ge hwa nan!', english: "Yes! So fun to angry!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily angry.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "生气",
      phonetic: "shēng qì",
      dialogue: {
        mom: { text: '我们一起生气吧！', phonetic: 'Wǒmen yīqǐ shēng qì ba!', english: "Let's angry together!" },
        kid: { text: '好呀，我喜欢生气！', phonetic: 'Hǎo ya, wǒ xǐhuan shēng qì!', english: "Yay, I love to angry!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily angry.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "enojado",
      phonetic: "eh-noh-HAH-doh",
      dialogue: {
        mom: { text: '¡Vamos a enojado juntos!', phonetic: 'BAH-mohs ah eh-noh-HAH-doh HOON-tohs!', english: "Let's angry together!" },
        kid: { text: '¡Sí, me encanta enojado!', phonetic: 'SEE, meh ehn-KAHN-tah eh-noh-HAH-doh!', english: "Yes, I love to angry!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us angry with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-surprised",
    english: "Surprised",
    emoji: "😲",
    category: "adjectives",
    ko: {
      word: "놀란",
      phonetic: "nol lan",
      dialogue: {
        mom: { text: '우리 같이 놀란 볼까?', phonetic: 'u ri gat i nol lan bol kka?', english: "Shall we surprised together?" },
        kid: { text: '네! 재미있게 놀란!', phonetic: 'ne! jae mi it ge nol lan!', english: "Yes! So fun to surprised!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily surprised.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "惊讶",
      phonetic: "jīng yà",
      dialogue: {
        mom: { text: '我们一起惊讶吧！', phonetic: 'Wǒmen yīqǐ jīng yà ba!', english: "Let's surprised together!" },
        kid: { text: '好呀，我喜欢惊讶！', phonetic: 'Hǎo ya, wǒ xǐhuan jīng yà!', english: "Yay, I love to surprised!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily surprised.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "sorprendido",
      phonetic: "sohr-prehn-DEE-doh",
      dialogue: {
        mom: { text: '¡Vamos a sorprendido juntos!', phonetic: 'BAH-mohs ah sohr-prehn-DEE-doh HOON-tohs!', english: "Let's surprised together!" },
        kid: { text: '¡Sí, me encanta sorprendido!', phonetic: 'SEE, meh ehn-KAHN-tah sohr-prehn-DEE-doh!', english: "Yes, I love to surprised!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us surprised with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-tired",
    english: "Tired",
    emoji: "🥱",
    category: "adjectives",
    ko: {
      word: "피곤하다",
      phonetic: "pi gon ha da",
      dialogue: {
        mom: { text: '우리 같이 피곤하다 볼까?', phonetic: 'u ri gat i pi gon ha da bol kka?', english: "Shall we tired together?" },
        kid: { text: '네! 재미있게 피곤하다!', phonetic: 'ne! jae mi it ge pi gon ha da!', english: "Yes! So fun to tired!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily tired.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "累了",
      phonetic: "lèi le",
      dialogue: {
        mom: { text: '我们一起累了吧！', phonetic: 'Wǒmen yīqǐ lèi le ba!', english: "Let's tired together!" },
        kid: { text: '好呀，我喜欢累了！', phonetic: 'Hǎo ya, wǒ xǐhuan lèi le!', english: "Yay, I love to tired!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily tired.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "cansado",
      phonetic: "kahn-SAH-doh",
      dialogue: {
        mom: { text: '¡Vamos a cansado juntos!', phonetic: 'BAH-mohs ah kahn-SAH-doh HOON-tohs!', english: "Let's tired together!" },
        kid: { text: '¡Sí, me encanta cansado!', phonetic: 'SEE, meh ehn-KAHN-tah kahn-SAH-doh!', english: "Yes, I love to tired!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us tired with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-hungry",
    english: "Hungry",
    emoji: "🥣",
    category: "adjectives",
    ko: {
      word: "배고프다",
      phonetic: "bae go peu da",
      dialogue: {
        mom: { text: '우리 같이 배고프다 볼까?', phonetic: 'u ri gat i bae go peu da bol kka?', english: "Shall we hungry together?" },
        kid: { text: '네! 재미있게 배고프다!', phonetic: 'ne! jae mi it ge bae go peu da!', english: "Yes! So fun to hungry!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily hungry.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "肚子饿",
      phonetic: "dù zi è",
      dialogue: {
        mom: { text: '我们一起肚子饿吧！', phonetic: 'Wǒmen yīqǐ dù zi è ba!', english: "Let's hungry together!" },
        kid: { text: '好呀，我喜欢肚子饿！', phonetic: 'Hǎo ya, wǒ xǐhuan dù zi è!', english: "Yay, I love to hungry!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily hungry.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "hambriento",
      phonetic: "ahm-BRYEHN-toh",
      dialogue: {
        mom: { text: '¡Vamos a hambriento juntos!', phonetic: 'BAH-mohs ah ahm-BRYEHN-toh HOON-tohs!', english: "Let's hungry together!" },
        kid: { text: '¡Sí, me encanta hambriento!', phonetic: 'SEE, meh ehn-KAHN-tah ahm-BRYEHN-toh!', english: "Yes, I love to hungry!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us hungry with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-full",
    english: "Full",
    emoji: "🍉",
    category: "adjectives",
    ko: {
      word: "배부르다",
      phonetic: "bae bu reu da",
      dialogue: {
        mom: { text: '우리 같이 배부르다 볼까?', phonetic: 'u ri gat i bae bu reu da bol kka?', english: "Shall we full together?" },
        kid: { text: '네! 재미있게 배부르다!', phonetic: 'ne! jae mi it ge bae bu reu da!', english: "Yes! So fun to full!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily full.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "饱饱的",
      phonetic: "bǎo bǎo de",
      dialogue: {
        mom: { text: '我们一起饱饱的吧！', phonetic: 'Wǒmen yīqǐ bǎo bǎo de ba!', english: "Let's full together!" },
        kid: { text: '好呀，我喜欢饱饱的！', phonetic: 'Hǎo ya, wǒ xǐhuan bǎo bǎo de!', english: "Yay, I love to full!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily full.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "lleno",
      phonetic: "YEH-noh",
      dialogue: {
        mom: { text: '¡Vamos a lleno juntos!', phonetic: 'BAH-mohs ah YEH-noh HOON-tohs!', english: "Let's full together!" },
        kid: { text: '¡Sí, me encanta lleno!', phonetic: 'SEE, meh ehn-KAHN-tah YEH-noh!', english: "Yes, I love to full!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us full with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-pretty",
    english: "Pretty",
    emoji: "🌺",
    category: "adjectives",
    ko: {
      word: "예쁘다",
      phonetic: "ye ppeu da",
      dialogue: {
        mom: { text: '우리 같이 예쁘다 볼까?', phonetic: 'u ri gat i ye ppeu da bol kka?', english: "Shall we pretty together?" },
        kid: { text: '네! 재미있게 예쁘다!', phonetic: 'ne! jae mi it ge ye ppeu da!', english: "Yes! So fun to pretty!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily pretty.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "漂亮",
      phonetic: "piào liang",
      dialogue: {
        mom: { text: '我们一起漂亮吧！', phonetic: 'Wǒmen yīqǐ piào liang ba!', english: "Let's pretty together!" },
        kid: { text: '好呀，我喜欢漂亮！', phonetic: 'Hǎo ya, wǒ xǐhuan piào liang!', english: "Yay, I love to pretty!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily pretty.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "bonito",
      phonetic: "boh-NEE-toh",
      dialogue: {
        mom: { text: '¡Vamos a bonito juntos!', phonetic: 'BAH-mohs ah boh-NEE-toh HOON-tohs!', english: "Let's pretty together!" },
        kid: { text: '¡Sí, me encanta bonito!', phonetic: 'SEE, meh ehn-KAHN-tah boh-NEE-toh!', english: "Yes, I love to pretty!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us pretty with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-shiny",
    english: "Shiny",
    emoji: "🌟",
    category: "adjectives",
    ko: {
      word: "반짝이다",
      phonetic: "ban jjak i da",
      dialogue: {
        mom: { text: '우리 같이 반짝이다 볼까?', phonetic: 'u ri gat i ban jjak i da bol kka?', english: "Shall we shiny together?" },
        kid: { text: '네! 재미있게 반짝이다!', phonetic: 'ne! jae mi it ge ban jjak i da!', english: "Yes! So fun to shiny!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily shiny.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "闪亮",
      phonetic: "shǎn liàng",
      dialogue: {
        mom: { text: '我们一起闪亮吧！', phonetic: 'Wǒmen yīqǐ shǎn liàng ba!', english: "Let's shiny together!" },
        kid: { text: '好呀，我喜欢闪亮！', phonetic: 'Hǎo ya, wǒ xǐhuan shǎn liàng!', english: "Yay, I love to shiny!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily shiny.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "brillante",
      phonetic: "bree-YAHN-teh",
      dialogue: {
        mom: { text: '¡Vamos a brillante juntos!', phonetic: 'BAH-mohs ah bree-YAHN-teh HOON-tohs!', english: "Let's shiny together!" },
        kid: { text: '¡Sí, me encanta brillante!', phonetic: 'SEE, meh ehn-KAHN-tah bree-YAHN-teh!', english: "Yes, I love to shiny!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us shiny with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-new",
    english: "New",
    emoji: "👟",
    category: "adjectives",
    ko: {
      word: "새롭다",
      phonetic: "sae rop da",
      dialogue: {
        mom: { text: '우리 같이 새롭다 볼까?', phonetic: 'u ri gat i sae rop da bol kka?', english: "Shall we new together?" },
        kid: { text: '네! 재미있게 새롭다!', phonetic: 'ne! jae mi it ge sae rop da!', english: "Yes! So fun to new!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily new.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "新新的",
      phonetic: "xīn xīn de",
      dialogue: {
        mom: { text: '我们一起新新的吧！', phonetic: 'Wǒmen yīqǐ xīn xīn de ba!', english: "Let's new together!" },
        kid: { text: '好呀，我喜欢新新的！', phonetic: 'Hǎo ya, wǒ xǐhuan xīn xīn de!', english: "Yay, I love to new!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily new.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "nuevo",
      phonetic: "NWEH-boh",
      dialogue: {
        mom: { text: '¡Vamos a nuevo juntos!', phonetic: 'BAH-mohs ah NWEH-boh HOON-tohs!', english: "Let's new together!" },
        kid: { text: '¡Sí, me encanta nuevo!', phonetic: 'SEE, meh ehn-KAHN-tah NWEH-boh!', english: "Yes, I love to new!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us new with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-old",
    english: "Old",
    emoji: "🕰️",
    category: "adjectives",
    ko: {
      word: "오래된",
      phonetic: "o rae doen",
      dialogue: {
        mom: { text: '우리 같이 오래된 볼까?', phonetic: 'u ri gat i o rae doen bol kka?', english: "Shall we old together?" },
        kid: { text: '네! 재미있게 오래된!', phonetic: 'ne! jae mi it ge o rae doen!', english: "Yes! So fun to old!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily old.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "旧旧的",
      phonetic: "jiù jiù de",
      dialogue: {
        mom: { text: '我们一起旧旧的吧！', phonetic: 'Wǒmen yīqǐ jiù jiù de ba!', english: "Let's old together!" },
        kid: { text: '好呀，我喜欢旧旧的！', phonetic: 'Hǎo ya, wǒ xǐhuan jiù jiù de!', english: "Yay, I love to old!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily old.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "viejo",
      phonetic: "BYEH-hoh",
      dialogue: {
        mom: { text: '¡Vamos a viejo juntos!', phonetic: 'BAH-mohs ah BYEH-hoh HOON-tohs!', english: "Let's old together!" },
        kid: { text: '¡Sí, me encanta viejo!', phonetic: 'SEE, meh ehn-KAHN-tah BYEH-hoh!', english: "Yes, I love to old!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us old with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-sharp",
    english: "Sharp",
    emoji: "📐",
    category: "adjectives",
    ko: {
      word: "뾰족하다",
      phonetic: "ppyo jok ha da",
      dialogue: {
        mom: { text: '우리 같이 뾰족하다 볼까?', phonetic: 'u ri gat i ppyo jok ha da bol kka?', english: "Shall we sharp together?" },
        kid: { text: '네! 재미있게 뾰족하다!', phonetic: 'ne! jae mi it ge ppyo jok ha da!', english: "Yes! So fun to sharp!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily sharp.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "尖尖的",
      phonetic: "jiān jiān de",
      dialogue: {
        mom: { text: '我们一起尖尖的吧！', phonetic: 'Wǒmen yīqǐ jiān jiān de ba!', english: "Let's sharp together!" },
        kid: { text: '好呀，我喜欢尖尖的！', phonetic: 'Hǎo ya, wǒ xǐhuan jiān jiān de!', english: "Yay, I love to sharp!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily sharp.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "afilado",
      phonetic: "ah-fee-LAH-doh",
      dialogue: {
        mom: { text: '¡Vamos a afilado juntos!', phonetic: 'BAH-mohs ah ah-fee-LAH-doh HOON-tohs!', english: "Let's sharp together!" },
        kid: { text: '¡Sí, me encanta afilado!', phonetic: 'SEE, meh ehn-KAHN-tah ah-fee-LAH-doh!', english: "Yes, I love to sharp!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us sharp with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  },
  {
    id: "adj-round",
    english: "Round",
    emoji: "⚽",
    category: "adjectives",
    ko: {
      word: "동그랗다",
      phonetic: "dong geu rat da",
      dialogue: {
        mom: { text: '우리 같이 동그랗다 볼까?', phonetic: 'u ri gat i dong geu rat da bol kka?', english: "Shall we round together?" },
        kid: { text: '네! 재미있게 동그랗다!', phonetic: 'ne! jae mi it ge dong geu rat da!', english: "Yes! So fun to round!" }
      },
      practice: {
        sentenceBefore: '기분 좋게 ',
        sentenceBeforePhonetic: 'gi bun jot ge ',
        sentenceAfter: '요.',
        sentenceAfterPhonetic: 'yo.',
        englishHint: 'Happily round.',
        distractors: [
          { word: '자다', phonetic: 'ja da', emoji: '😴', english: 'Sleep' },
          { word: '먹다', phonetic: 'meok da', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    zh: {
      word: "圆圆的",
      phonetic: "yuán yuán de",
      dialogue: {
        mom: { text: '我们一起圆圆的吧！', phonetic: 'Wǒmen yīqǐ yuán yuán de ba!', english: "Let's round together!" },
        kid: { text: '好呀，我喜欢圆圆的！', phonetic: 'Hǎo ya, wǒ xǐhuan yuán yuán de!', english: "Yay, I love to round!" }
      },
      practice: {
        sentenceBefore: '小朋友开心地',
        sentenceBeforePhonetic: 'Xiǎopéngyǒu kāixīn de ',
        sentenceAfter: '。',
        sentenceAfterPhonetic: '.',
        englishHint: 'The child happily round.',
        distractors: [
          { word: '睡觉', phonetic: 'shuì jiào', emoji: '😴', english: 'Sleep' },
          { word: '吃苹果', phonetic: 'chī píng guǒ', emoji: '🍎', english: 'Eat' }
        ]
      }
    },
    es: {
      word: "redondo",
      phonetic: "rreh-DOHN-doh",
      dialogue: {
        mom: { text: '¡Vamos a redondo juntos!', phonetic: 'BAH-mohs ah rreh-DOHN-doh HOON-tohs!', english: "Let's round together!" },
        kid: { text: '¡Sí, me encanta redondo!', phonetic: 'SEE, meh ehn-KAHN-tah rreh-DOHN-doh!', english: "Yes, I love to round!" }
      },
      practice: {
        sentenceBefore: 'Vamos a ',
        sentenceBeforePhonetic: 'BAH-mohs ah ',
        sentenceAfter: ' con alegría.',
        sentenceAfterPhonetic: ' kohn ah-leh-GREE-ah.',
        englishHint: 'Let us round with joy.',
        distractors: [
          { word: 'dormir', phonetic: 'dohr-MEER', emoji: '😴', english: 'Sleep' },
          { word: 'comer', phonetic: 'koh-MEHR', emoji: '🍎', english: 'Eat' }
        ]
      }
    }
  }
];
