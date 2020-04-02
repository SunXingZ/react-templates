const TextUtils = {};

/**
 * 方法作用：【判断字符串是否相同】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const isEquals = TextUtils.isEquals("123", "456", true);
 * @param str1 {string} 传入的字符串
 * @param str2 {string} 传入的字符串
 * @returns {boolean} 字符串是否相同
 */
TextUtils.isEquals = (str1 = "", str2 = "", ignorecase = false) => {
  let _str1 = str1.toString();
  let _str2 = str2.toString();
  if (ignorecase) {
    _str1 = _str1.toLowerCase();
    _str2 = _str2.toLowerCase();
  }
  return _str1 == _str2;
}

/**
 * 方法作用：【去除空格】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const str = TextUtils.trimString(" 123", 3);
 *      // "123"
 * @param str {string} 传入的字符串
 * @param type {number} 类型 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {boolean} 去空格后的字符串
 */
TextUtils.trimString = (str, type) => {
  str = str || "";
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

/**
 * 方法作用：【字符串转换大小写】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const str = TextUtils.changeCase("TEST", 3);
 *      // "test"
 * @param str {string} 传入的字符串
 * @param type {number} 类型 1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
 * @returns {boolean} 转换后的字符串
 */
TextUtils.changeCase = (str, type) => {
  str = str || "";
  type = type || 3;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, (word) => {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      });
    case 2:
      return str.replace(/\b\w+\b/g, (word) => {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map((word) => {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase()
        }
      }).join('');
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

export default TextUtils;