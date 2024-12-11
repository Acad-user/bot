export interface WaterQualityParameters {
  ph: number;
  tds: number;
  turbidity: number;
  dissolvedOxygen: number;
  temperature: number;
}

export interface CityWQIData {
  city: string;
  state: string;
  wqi: number;
  parameters: WaterQualityParameters;
}

export interface Message {
  text: string;
  isBot: boolean;
}