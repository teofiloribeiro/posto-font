import { ChartData } from './chart-data';

export interface ChartSource {
    chart: {
        caption: string,
        subCaption: string,
        xAxisName: string,
        yAxisName: string,
        numberSuffix: string,
        theme: string,
      },
    data: ChartData[]
}
