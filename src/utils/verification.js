const VerificationUtils = {};

/**
 * 方法作用：【返回传入值的string类型】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const stringTypeOf = VerificationUtils.stringTypeOf("123");
 *      // 'String'
 * @param value {any} 传入的对象
 * @returns {string} 传入值的string类型
 */
VerificationUtils.stringTypeOf = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * 方法作用：【返回传入值的数据类型是否是指定类型】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const isInstanceOf = VerificationUtils.isInstanceOf("123", "array");
 *      // false
 * @param value {any} 传入的值
 * @returns {boolean} 传入值的数据类型是否是指定类型
 */
VerificationUtils.isInstanceOf = (value, instance) => {
  let stringTypeOf = VerificationUtils.stringTypeOf(value).toLowerCase();
  instance = instance.toLowerCase();
  return stringTypeOf == instance;
}

/**
 * 方法作用：【返回传入值是否为空值】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const isNullValue = VerificationUtils.isNullValue("123");
 *      // false
 * @param value {any} 传入的值
 * @returns {boolean} 传入值是否为空值
 */
VerificationUtils.isNullValue = (value) => {
  return value == null || value == '' || value == undefined;
}

/**
 * 方法作用：【返回传入值是否为无效值】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const isInvalidValue = VerificationUtils.isInvalidValue("123");
 *      // false
 *      const isInvalidValue = VerificationUtils.isInvalidValue([]);
 *      // true
 * @param value {any} 传入的值
 * @returns {boolean} 传入值是否为无效值
 */
VerificationUtils.isInvalidValue = (value) => {
  if (VerificationUtils.isNullValue(value)) {
    return true;
  }
  let isInvalid = false;
  let stringTypeOf = VerificationUtils.stringTypeOf(value).toLowerCase();
  switch (stringTypeOf) {
    case "number":
      isInvalid = isNaN(value);
      break;
    case "string":
      isInvalid = value.length == 0;
      break;
    case "array":
      isInvalid = value.length == 0;
      break;
    case "object":
      isInvalid = Object.keys(value).length == 0;
      break;
  }
  return isInvalid;
}

/**
 * 方法作用：【常用正则】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const verificationString = VerificationUtils.verificationString("123", "tel");
 *      // false
 * @param value {any} 传入的值
 * @returns {boolean} 传入值的正则匹配结果
 */
VerificationUtils.verificationString = (string, type) => {
  switch (type) {
    case 'phone':   //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(string);
    case 'tel':     //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(string);
    case 'card':    //身份证
      return /^\d{15}|\d{18}$/.test(string);
    case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(string)
    case 'postal':  //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(string);
    case 'qq':      //QQ号
      return /^[1-9][0-9]{4,9}$/.test(string);
    case 'email':   //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(string);
    case 'money':   //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(string);
    case 'url':     //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(string)
    case 'ip':      //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(string);
    case 'date':    //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(string) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(string)
    case 'number':  //数字
      return /^[0-9]$/.test(string);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(string);
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(string);
    case 'lower':   //小写
      return /^[a-z]+$/.test(string);
    case 'upper':   //大写
      return /^[A-Z]+$/.test(string);
    case 'html':    //html标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(string);
    case 'image':    //image格式
      return /\.(png|jpg|gif|jpeg|webp)$/.test(string);
  }
}

export default VerificationUtils;