// Standard Revised Romanization of Korean with character-by-character space separation
// (e.g., "강아지" -> "gang a ji")

const CHOSEONG = [
  'g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h',
];

const JUNGSEONG = [
  'a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i',
];

const JONGSEONG = [
  '', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k', 'm', 'p', 't', 't', 'p', 'l', 'm', 'p', 'p', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't',
];

export function romanizeHangulSyllable(char: string): string {
  const code = char.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return char;
  const cho = Math.floor(code / 588);
  const jung = Math.floor((code % 588) / 28);
  const jong = code % 28;
  return CHOSEONG[cho] + JUNGSEONG[jung] + JONGSEONG[jong];
}

/**
 * Returns Korean Romanization where each Hangul character is separated by a space:
 * e.g., "강아지" -> "gang a ji", "사과" -> "sa gwa"
 */
export function getKoreanPhoneticSeparated(hangulText: string, fallback?: string): string {
  if (!hangulText) return fallback || '';

  // Check if text has any Hangul syllables
  let hasHangul = false;
  const result: string[] = [];

  for (let i = 0; i < hangulText.length; i++) {
    const ch = hangulText[i];
    const code = ch.charCodeAt(0) - 0xac00;
    if (code >= 0 && code <= 11171) {
      hasHangul = true;
      result.push(romanizeHangulSyllable(ch));
    } else if (ch === ' ' || ch === '\t') {
      if (result.length && result[result.length - 1] !== ' ') {
        result.push(' ');
      }
    } else if (/[.,!?;:~-]/.test(ch)) {
      result.push(ch);
    }
  }

  if (hasHangul) {
    return result
      .join(' ')
      .replace(/\s+/g, ' ')
      .replace(/\s+([.,!?;:~-])/g, '$1')
      .trim();
  }

  // If no Hangul characters were found, clean and space-separate fallback (e.g. "gang-a-ji" -> "gang a ji")
  if (fallback) {
    return fallback
      .replace(/[-_·/]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return hangulText;
}
