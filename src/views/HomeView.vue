<!--
 * @Author: 逗逗飞 
 * @Date: 2024-04-22 15:46:12
 * @LastEditors: 逗逗飞 
 * @LastEditTime: 2024-04-22 16:35:07
 * @FilePath: /fake-el-date-picker/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- <jn-date-picker
      type="datetime"
      ref="outTime"
      placeholder="选择日期"
      v-model="value"
      format="yyyy-MM-dd HH:mm"
      value-format="yyyy-MM-dd HH:mm"
      style="width: 240px"
    ></jn-date-picker> -->
    <div style="padding: 20px">
      <el-select v-model="value" placeholder="请选择" multiple collapse-tags :carLength="2">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import JnDatePicker from '@/components/date-picker';
import ElSelect from '@/components/select';

export default {
  name: 'HomeView',
  components: {
    JnDatePicker,
    ElSelect,
  },
  data() {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value2: '',
    };
  },
};
</script>
