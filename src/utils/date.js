const DateUtils = {};

const now = new Date(); //当前日期
const nowDayOfWeek = now.getDay(); //今天本周的第几天
const nowDay = now.getDate(); //当前日
const nowMonth = now.getMonth(); //当前月
let nowYear = now.getYear(); //当前年
nowYear += (nowYear < 2000) ? 1900 : 0;

const lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
const lastYear = lastMonthDate.getYear();
const lastMonth = lastMonthDate.getMonth();

/**
 * 方法作用：【格式化时间】
 * 使用方法
 * 示例：
 *      使用方式一：
 *      const nowStr = DateUtils.formatDate();
 * @param date {date|number} 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt {string} 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns {string} 格式化后的日期字符串
 */
DateUtils.formatDate = (date, fmt) => {
  date = date == undefined ? new Date() : date;
  date = typeof date == 'number' ? new Date(date) : date;
  fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
  const obj = {
    'y': date.getFullYear(), // 年份，注意必须用getFullYear
    'M': date.getMonth() + 1, // 月份，注意是从0-11
    'd': date.getDate(), // 日期
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'w': date.getDay(), // 星期，注意是0-6
    'H': date.getHours(), // 24小时制
    'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    'm': date.getMinutes(), // 分钟
    's': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  };
  const week = ['天', '一', '二', '三', '四', '五', '六'];
  for (let i in obj) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), (m) => {
      let val = obj[i] + '';
      if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
      for (let j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
      return m.length == 1 ? val : val.substring(val.length - m.length);
    });
  }
  return fmt;
}

/**
 * 方法作用：【将字符串解析成日期】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const date = DateUtils.parseDate("2015-01-31");
 *      date.getFullYear() // 2015
 * @param str {string} 输入的日期字符串，如'2015-01-31'
 * @param fmt {string} 默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
 * @returns {date} 字符串的日期类型
 */
DateUtils.parseDate = (str, fmt) => {
  fmt = fmt || 'yyyy-MM-dd';
  const obj = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
  fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, (m, $1, $2, $3, $4, idx, old) => {
    str = str.replace(new RegExp($1 + '(\\d{' + $2.length + '})' + $4), (_m, _$1) => {
      obj[$3] = parseInt(_$1);
      return '';
    });
    return '';
  });
  obj.M--; // 月份是从0开始的，所以要减去1
  const date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
  if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
  return date;
}

/**
 * 方法作用：【获取指定日期的时间戳】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const timestamp = DateUtils.getTargetTimestamp("2015-01-31 16:30:00");
 * @param dateStr {string} 传入要转换成时间戳的日期字符串
 * @returns {number} 指定日期的时间戳
 */
DateUtils.getTargetTimestamp = (dateStr) => {
  const date = typeof dateStr == "string" ? new Date(dateStr) : new Date();
  const timestamp = date.getTime();
  if (isNaN(timestamp)) {
    console.error("参数错误！");
    return 0;
  }
  return timestamp;
}

/**
 * 方法作用：【获取指定月份的天数】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const days = DateUtils.getMonthDays(2);
 * @param month {number} 传入要获取的月份
 * @returns {number} 指定月份的天数
 */
DateUtils.getMonthDays = (month) => {
  month = month - 1;
  const monthStartDate = new Date(nowYear, month, 1);
  const monthEndDate = new Date(nowYear, month + 1, 1);
  const days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
  return days;
}

/**
 * 方法作用：【获得当前月前后X月的年月】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const beforeMonth = DateUtils.getMonthOffset(-2);
 *      const afterMonth = DateUtils.getMonthOffset(2);
 * @param monthOffset {number} 传入月份的偏移数, 正数为后X个月, 负数为前X个月
 * @returns {string} 当前月前后X月的年月
 */
DateUtils.getMonthOffset = (monthOffset) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  date.setMonth(month + monthOffset);
  let y = date.getFullYear();
  let m = date.getMonth();
  if (m == 0) {
    y = y - 1;
    m = 12;
  }
  m = m.toString().padStart(2, "0");
  return y + "-" + m;
}

/**
 * 方法作用：【将一段秒数转换成友好格式】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const timeString = DateUtils.formatDurationToFriendly(147);
 *      147->“2分27秒”
 *      1581->“26分21秒”
 *      15818->“4小时24分”
 * @param second {number} 传入秒数
 * @returns {string} 格式化后的时分秒
 */
DateUtils.formatDurationToFriendly = (second) => {
  if (second < 60) {
    return second + '秒'
  } else if (second < 60 * 60) {
    return (second - second % 60) / 60 + '分' + second % 60 + '秒';
  } else if (second < 60 * 60 * 24) {
    return (second - second % 3600) / 60 / 60 + '小时' + Math.round(second % 3600 / 60) + '分';
  } else {
    return (second / 60 / 60 / 24).toFixed(2) + '天';
  }
}

/**
 * 方法作用：【计算两个日期之间的天数，用的是比较毫秒数的方法】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const timeString = DateUtils.formatDurationToFriendly(147);
 * @param date1 {date|string} 传入的日期可以是Date类型、yyyy-MM-dd格式的字符串日期
 * @param date2 {date|string} 传入的日期可以是Date类型、yyyy-MM-dd格式的字符串日期
 * @returns {number} 相隔天数
 */
DateUtils.getIntervalDays = (date1, date2) => {
  const fmt = 'yyyy-MM-dd';
  // 将日期转换成字符串，转换的目的是去除“时、分、秒”
  if (date1 instanceof Date && date2 instanceof Date) {
    date1 = DateUtils.formatDate(fmt, date1);
    date2 = DateUtils.formatDate(fmt, date2);
  }
  if (typeof date1 == 'string' && typeof date2 == 'string') {
    date1 = DateUtils.parseDate(date1, fmt);
    date2 = DateUtils.parseDate(date2, fmt);
    return (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
  } else {
    console.error('参数格式无效！');
    return 0;
  }
}

/**
 * 方法作用：【返回指定长度的月份集合】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const months = DateUtils.getMonths('2018-1-29', 6, 1);
 *      // ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
 * @param time {string} 时间
 * @param len {number} 长度
 * @param direction {number} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 2
 * @returns {Array} 月份集合
 */
DateUtils.getMonths = (time, len, direction) => {
  let mm = new Date(time).getMonth();
  let yy = new Date(time).getFullYear();
  direction = isNaN(direction) ? 2 : direction;
  let index = mm;
  const cutMonth = (index) => {
    if (index <= len && index >= -len) {
      return direction === 1 ? formatPre(index).concat(cutMonth(++index)) :
        direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index))
    }
    return []
  }
  const formatNext = (i) => {
    let y = Math.floor(i / 12),
      m = i % 12
    return [yy + y + '-' + (m + 1)]
  }
  const formatPre = (i) => {
    let y = Math.ceil(i / 12),
      m = i % 12
    m = m === 0 ? 12 : m
    return [yy - y + '-' + (13 - m)]
  }
  const formatCurr = (i) => {
    let y = Math.floor(i / 12),
      yNext = Math.ceil(i / 12),
      m = i % 12,
      mNext = m === 0 ? 12 : m
    return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)]
  }
  const unique = (arr) => {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr));
    } else {
      let n = {}, r = [];
      for (let i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    }
  }
  return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort((t1, t2) => {
    return new Date(t1).getTime() - new Date(t2).getTime()
  }));
}

/**
 * 方法作用：【返回指定长度的天数集合】
 * 使用方法
 * 示例：
 *      使用方式：
 *      const months = DateUtils.getDays('2018-1-29', 6, 3);
 *      // ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]]
 * @param time {string} 时间
 * @param len {number} 长度
 * @param direction {number} 方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 2
 * @returns {Array} 天数集合
 */
DateUtils.getDays = (time, len, direction) => {
  let tt = new Date(time);
  const getDay = (day) => {
    let t = new Date(time);
    t.setDate(t.getDate() + day);
    let m = t.getMonth() + 1;
    return t.getFullYear() + '-' + m + '-' + t.getDate();
  }
  const arr = [];
  if (direction === 1) {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
  } else if (direction === 2) {
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  } else {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
    arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate());
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  }
  return direction === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) :
    direction === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr;
}

export default DateUtils;