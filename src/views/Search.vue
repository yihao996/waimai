<template>
  <div>
    <h2>{{ msg }}</h2>
    <div id="c1"></div>
  </div>
</template>

<script>
const G2 = require('@antv/g2')

export default {
  name: "g2Demo",
  components: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.initComponent();
  },
  data() {
    return {
      msg: "",//标题
      chart: null,
      data: [
  { item: '事例一', count: 40, percent: 0.4 },
  { item: '事例二', count: 21, percent: 0.21 },
  { item: '事例三', count: 17, percent: 0.17 },
  { item: '事例四', count: 13, percent: 0.13 },
  { item: '事例五', count: 9, percent: 0.09 },
]
    };
  },
  // 方法集合
  methods: {
    initComponent() {
      // 此函数为个人习惯,喜欢创建一个初始化的函数
      this.msg = "直方图";
      const chart = new G2.Chart({
        container: "c1",
		autoFit:true,
        height: 500
      })
      chart.data(this.data);
		chart.coordinate('theta', {
		  radius: 0.75,
		});

		chart.scale('percent', {
		  formatter: (val) => {
			val = val * 100 + '%';
			return val;
		  },
		});

		// chart.tooltip({
		//   showTitle: false,
		//   showMarkers: false,
		// });

		chart
		  .interval()
		  .adjust('stack')
		  .position('percent')
		  .color('item')
		  .label('percent', {
			content: (data) => {
			  return `${data.item}: ${data.percent * 100}%`;
			},
		  })

		chart.interaction('element-active');
      this.chart = chart
      this.chart.render()
    }
  },
  // 计算属性
  computed: {}
}
</script>