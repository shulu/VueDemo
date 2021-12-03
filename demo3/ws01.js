// ==WidgetScript==
// @name 🐼 本期支出
// @description 从 Notion 数据库中统计支出情况
// @icon system:chart.bar.xaxis
// @iconBgColor #04B921

// @param api {string="localhost/notion.php"} API - URL to your metrics data API

// @version 0.0.1
// ==/WidgetScript==

const globalTextStyle = {
  fontDesign: 'rounded',
  lineLimit: 1,
}

const metricBlock = (metric, isSmall) => {
  return VStack([
    Text({ text: metric.title }, { ...globalTextStyle, fontSize: isSmall ? 18 : 14, opacity: 0.5 }),
    Text({ text: metric.value }, { ...globalTextStyle, padding: '6 20', fontSize: isSmall ? 28 : 24, fontWeight: 'bold' }),
    Text({ text: metric.subValue }, { ...globalTextStyle, fontSize: isSmall ? 16 : 13, fontWeight: 'bold', foregroundColor: metric.subValueColor })
  ])
}

async (parameters, context) => {
  if (context.family === 'medium') {
    let api = parameters.api
    const res = await fetch(api)
    const data = JSON.parse(res)
    console.log(data)
    render(
      VStack([
        Text({ text: data.title }, { ...globalTextStyle, fontSize: 14, opacity: 0.6 }),
        Spacer(),
        HStack([
          metricBlock(data.metrics[0]),
          ...(data.metrics[1] ? [metricBlock(data.metrics[1])] : []),
          ...(data.metrics[2] ? [metricBlock(data.metrics[2])] : []),
        ], { spacing: 6 }),
        Spacer(),
        Text({ text: data.footnote }, { ...globalTextStyle, fontSize: 12, opacity: 0.25 }),
      ], { padding: '12 0' })
    )
  } else {
    render(
      Text({ text: "请使用中型小组件" }, { ...globalTextStyle, fontSize: 16, opacity: 0.6 })
    )
  }
}