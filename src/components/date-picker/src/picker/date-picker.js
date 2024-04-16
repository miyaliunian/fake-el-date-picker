/*
 * @Author: 逗逗飞 
 * @Date: 2024-04-16 13:44:12
 * @LastEditors: 逗逗飞 
 * @LastEditTime: 2024-04-16 13:49:34
 * @FilePath: /fake-el-date-picker/src/components/date-picker/src/picker/date-picker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Picker from '../picker';
import DatePanel from '../panel/date';
import DateRangePanel from '../panel/date-range';
import MonthRangePanel from '../panel/month-range';

const getPanel = function (type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePanel;
  } else if (type === 'monthrange') {
    return MonthRangePanel;
  }
  return DatePanel;
};

export default {
  mixins: [Picker],

  name: 'JnDatePicker',

  props: {
    type: {
      type: String,
      default: 'date',
    },
    timeArrowControl: Boolean,
  },

  watch: {
    type(type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(type);
        this.mountPicker();
      } else {
        this.panel = getPanel(type);
      }
    },
  },

  created() {
    this.panel = getPanel(this.type);
  },
};
