 /**
  * 文字列のサニタイジング（エスケープ）処理
  *
  * @param {string} str 文字列
  * @returns {string}
  */
export const escapeSpecialChars = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
