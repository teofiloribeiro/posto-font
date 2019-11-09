import { ChartData } from './chart-data';
import { ChartSetup } from './chart-setup';

export interface ChartSource {
    chart: ChartSetup;
    data: ChartData[];
}
