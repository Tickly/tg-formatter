import moment from 'moment'
import accounting from 'accounting'

export default {
  // 重点函数，别的地方只需调用这一个函数即可
  // formatter.format(value,format)
  // 此处format为引用传递，不能直接修改他
  format (value, format = 'text') {

    let fn, params;

    if (Array.isArray(format)) {
      if (format.length === 0) {
        throw new Error('format 数组必须包含一个元素')
      }
      // console.log(JSON.stringify(format));
      params = format.slice();
      fn = params[0];
      params[0] = value;
    } else {
      fn = format;
      params = [value];
    }

    fn = fn.split('').map((c, i) => {
      if (i === 0) return c.toUpperCase()
      return c;
    }).join('');

    fn = 'as' + fn;

    if (!this[fn]) {
      // console.log(fn, value, format)
    }

    return this[fn].apply(null, params);
  },

  asText (value) {
    return value.toString()
  },

  asDate (value, format = 'Y-MM-DD') {
    return moment(value).format(format)
  },

  asTime (value, format = 'HH:mm:ss') {
    return moment(value).format(format)
  },

  asDateTime (value) {
    return this.asDate(value) + ' ' + this.asTime(value)
  },

  asCurrency (value, symbol = '￥ ', precision, thousand, decimal, format) {
    if (!value) return;
    return accounting.formatMoney(value, symbol, precision, thousand, decimal, format)
  },

  /**
   * 
   * @param {Number} value 
   * @param {Number} decimals 小数点后的个数，默认2
   */
  asDecimal (value, decimals = 2, thousand = ',') {
    return accounting.formatNumber(value, decimals, thousand);
  },


  asPercent (value, decimals = 0) {
    value *= 100;
    return value.toFixed(decimals) + '%'
  },
}