<template>
  <div>
    <jn-date-picker
      type="datetime"
      ref="outTime"
      placeholder="选择日期"
      v-model="value"
      format="yyyy-MM-dd HH:mm"
      value-format="yyyy-MM-dd HH:mm"
      style="width: 240px"
    ></jn-date-picker>
  </div>
</template>

<script>
import JnDatePicker from '@/components/date-picker';

export default {
  name: 'HomeView',
  components: {
    JnDatePicker,
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>
