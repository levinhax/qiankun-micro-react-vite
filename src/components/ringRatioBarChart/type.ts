export interface IProps {
  title: string // 图表的标题（为string类型）
  xData: string[] // 图表x轴数据的数组（数字里面每一项都为string类型）
  series1Data: number[] // 跟x轴每个坐标点对应的数据（数字里面每一项都为number类型）
  series2Data: number[] // 跟x轴每个坐标点对应的同比/环比值
  pathData: string[] // 同比/环比图示
}
