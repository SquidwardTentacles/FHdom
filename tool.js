
<template></template>
<script>
export default {
data() {
return {};
},
mounted() {},
methods: {
messageTip(type, mes) {
this.$message({
  type: type,
  message: mes
});
},
messageBox(mes) {
this.$confirm(mes, "提示", {
  confirmButtonText: "确定",
  cancelButtonText: "取消"
})
  .then(() => {})
  .catch(() => {});
}
}
};
</script>
<style lang="scss">

</style>

let statusId='';
    for (let i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].giveOutStatus == 0) {
        statusId += this.tableData[i].equipmentAgentId + ",";
      }
    }
    // 去掉最后一个逗号
    statusId = statusId.substring(
      0,
      statusId.lastIndexOf(",")
    );

// 日期不能大于开始时间 不能大于今天 element ui 日期选择器日期范围限制
// :picker-options="endTime"
// pickerOptions0: {
//   disabledDate (time) {
//     return time.getTime() > Date.now() - 8.64e6;
//   }
// },
// endTime: {
//   disabledDate: time => {
//     let beginDateVal = this.searchsesson.beginData;
//     if (beginDateVal) {
//       if (time.getTime() > Date.now() - 8.64e7) {
//         return true
//       } else if (time.getTime() < new Date(beginDateVal)) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
// },

//  字符串检索替换
replace(/null/g, "无")


import Vue from 'vue';
import city from '../../../static/json/city';
// import axios from 'axios';
/**
 * 时间格式化
 */
var newdate = Date;
newdate.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'H+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
  return fmt;
};
var initDate = function(date) {
  if (!date) {
    return (dateV = '');
  }
  var dateV = '';
  dateV = new Date(date).Format('yyyy-MM-dd');
  return dateV;
};
var initDateHm = function(date) {
  if (!date) {
    return (dateV = '');
  }
  var dateV = '';
  dateV = new Date(date).Format('yyyy-MM-dd HH:mm');
  return dateV;
};
var initDateHms = function(date) {
  if (!date) {
    return (dateV = '');
  }
  var dateV = '';
  dateV = new Date(date).Format('yyyy-MM-dd HH:mm:ss');
  return dateV;
};
Vue.prototype.initDate = initDate;
Vue.prototype.initDateHm = initDateHm;
Vue.prototype.initDateHms = initDateHms;

//   电话号码正则
var phonetest = /^1[345789]\d{9}$/;
Vue.prototype.phonetest = phonetest;
var regobj = {
  // 支持1-20汉字、字母、数字输入
  twentylength: /^[\u4e00-\u9fa50-9A-Za-z]{1,20}$/,
  // 支持1-8汉字、字母、数字、字符输入
  twoHundred: /^[\u4e00-\u9fa50-9A-Za-z]{1,200}$/,
  //  支持1-50汉字、字母、数字输入
  fifty: /^[\u4e00-\u9fa50-9A-Za-z]{1,50}$/,
  // 设备编号 只能输入数字和字母
  equipmentNumberTest: /^[0-9a-zA-Z]+$/,
  // 支持输入数字和一位小数点
  numbertext: /^\d+$|^\d*\.\d+$/g,
  // 商家编号验证 6位数字
  organnumberr: /^\d{6}$/,
  // 门店编号验证 7位数字
  storenumtest: /^\d{7}$/,
  // 仅支持纯数字输入
  numreg: /^\d{19}$/,
  //身份证
  idCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
  // 正整数
  positivenumber: /^[0-9][1-9]*[0-9]*$/
};
Vue.prototype.regobj = regobj;



// 删除字符串最后一个逗号
function lastIndexOfComma(string) {
  if (string) {
    string =
      string.indexOf(',') === -1
        ? string
        : string.substring(0, string.lastIndexOf(','));
    return string;
  }
}
Vue.prototype.lastIndexOfComma = lastIndexOfComma;
// 保留两位小数
function toFixexFunc(string, toStr) {
  if (string || string === 0) {
    string = parseFloat(string).toFixed(2);
    // 如果传了toStr 则转为number
    if (toStr) {
      string = parseFloat(string);
      return string;
    } else {
      return string;
    }
  } else {
    return (string = '0.00');
  }
}
Vue.prototype.toFixexFunc = toFixexFunc;


// 日期格式化（self）
// 参数解析  num时间戳 icon年月日分割的字符 backStyle返回的时间格式、
function FormtDate(num, icon, backStyle) {
  // console.log(now.getDate());
  var now = new Date(num);
  console.log(now);

  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  // console.log(Hors, Min, Sec);

  var conngect = icon ? icon : '-';
  var backStyleV = backStyle ? backStyle : 'y-m-d';

  var returnDate = '';
  returnDate = `${y}${conngect}${m}${conngect}${d}`;
  if (backStyleV === 'y-m-d-h-m') {
    returnDate += ` ${h}:${m}`;
  } else if (backStyleV === 'y-m-d-h-m-s') {
    returnDate += ` ${h}:${m}:${s}`;
  }
  return returnDate;
}
// var now = new Date();
console.log(FormtDate('Mar 1, 2019 12:00:00 AM', '-', 'y-m-d-h-m-s'));
