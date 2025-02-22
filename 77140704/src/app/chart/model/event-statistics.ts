export interface DeviceEventStatistic {
  periodStartTime?: string;
  keyStats?: {
    [key: string]: number;
  };
}
