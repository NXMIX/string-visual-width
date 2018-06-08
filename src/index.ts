// Packages
import matchEmoji from "@nxmix/emoji-seq-match";
import isFullWidth from "@nxmix/is-full-width";
import stripAnsi = require("strip-ansi");

const stringWidth = (str: string) => {
  let visuelWidth = 0;

  const arr = [...stripAnsi(str).normalize()];
  for (let i = 0; i < arr.length; i++) {
    const matchedLength = matchEmoji(arr, i);
    if (matchedLength > 0) {
      i += matchedLength - 1;
      // Jonied emojis are counted as 2
      visuelWidth += 2;
    } else {
      visuelWidth += isFullWidth(arr[i].codePointAt(0)!) ? 2 : 1;
    }
  }
  return visuelWidth;
};

export default stringWidth;
