
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
        .then(() => { })
        .catch(() => { });
}
}
};
</script>
  <style lang="scss">

  </style>

let statusId = '';
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
newdate.prototype.Format = function (fmt) {
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
var initDate = function (date) {
  if (!date) {
    return (dateV = '');
  }
  var dateV = '';
  dateV = new Date(date).Format('yyyy-MM-dd');
  return dateV;
};
var initDateHm = function (date) {
  if (!date) {
    return (dateV = '');
  }
  var dateV = '';
  dateV = new Date(date).Format('yyyy-MM-dd HH:mm');
  return dateV;
};
var initDateHms = function (date) {
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
function lastIndexOfComma (string) {
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
function toFixexFunc (string, toStr) {
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
function FormtDate (num, icon, backStyle) {
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

// 桶排序 https://juejin.im/post/5d819a2ee51d45620064bc00?utm_source=gold_browser_extension
let arr = [3, 8, 6, 1, 5, 7, 9, 2, 4];
// let min = Math.min(...arr);
// console.log(min);
// let max = Math.max(...arr);
// console.log(max);
// let size = 3;
// let count = Math.floor((max - min) / size) + 1;
// let buckets = [];
// for (let i = 0; i < count; i++) {
//   buckets.push([]);
// }
// console.log(buckets);

// for (let v of arr) {
//   let num = Math.floor((v - min) / size);
//   buckets[num].push(v);
// }
// console.log(buckets);
// let result = [];
// // for (bucket of buckets) {
// // }
// result.push(...insertionSort(buckets[1]));
// console.log(result);
// insertionSort函数返回一个数组 使用展开运算符将数组中的每一项取出
// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     // let i = i;
//     let target = array[i];
//     while (i > 0 && array[i - 1] > target) {
//       array[i] = array[i - 1];
//       i--;
//     }
//     array[i] = target;
//     console.log(target, i);
//   }
//   return array;
// }
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    // 声明一个值保存当前位置的值
    let curValue = arr[i];
    // 用while不用if 因为while比if多执行一次
    while (i > 0 && curValue < arr[i - 1]) {
      // 如果第二个数字大于第一个数字 将第一个数字赋值给第二个数字 并且将i值减一
      arr[i] = arr[i - 1];
      i--;
      console.log('if');
    }
    arr[i] = curValue;
  }
  return arr;
}
arr = insertionSort(arr);
console.log(arr);

// i=2时函数执行
// arr = [5,6,4]
// i = 2
// arr[2] = 6
// i-- (i=1)
// arr = [5,6,6]

// curValue = 4
// i=1
// arr[1] = 5
// arr = [5,5,6]
// i--(i=0)
// arr[i] = 4
// arr=[4,5,6]

// --------------------------    

// 深拷贝 赋值属性和方法 改变数值后不互相干扰
// https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1?utm_source=gold_browser_extension
function clone (target) {
  debugger;
  // debugger;
  if (typeof target == 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2'
    }
  },
  filed4: [2, 4, 8]
};
let target2 = clone(target);
console.log(clone(target));
target.field2 = 'field2s';
target.filed4[3] = 10;
console.log(target2, target);

// -----------------------------------------------

// 移动端自适应
(function (doc, win) {
  var docEl = win.document.documentElement;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  /**
* ================================================
*   设置根元素font-size
* 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
× ================================================
*/
  var refreshRem = function () {
    var clientWidth =
      win.innerWidth ||
      doc.documentElement.clientWidth ||
      doc.body.clientWidth;
    if (!clientWidth) return;
    clientWidth = clientWidth > 600 ? 600 : clientWidth;
    clientWidth = clientWidth < 300 ? 300 : clientWidth;
    var fz;
    var width = clientWidth;
    fz = (16 * width) / 375;
    docEl.style.fontSize = fz + "px";
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener("DOMContentLoaded", refreshRem, false);
  refreshRem();
})(document, window);