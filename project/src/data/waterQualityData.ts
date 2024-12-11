export interface CityWQIData {
  city: string;
  state: string;
  wqi: number;
  parameters: {
    ph: number;
    tds: number;
    turbidity: number;
    dissolvedOxygen: number;
    temperature: number;
  };
}

export const cityWQIData: CityWQIData[] = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    wqi: 76,
    parameters: { ph: 7.2, tds: 320, turbidity: 0.8, dissolvedOxygen: 6.5, temperature: 28 }
  },
  {
    city: "Delhi",
    state: "Delhi",
    wqi: 65,
    parameters: { ph: 7.8, tds: 450, turbidity: 1.2, dissolvedOxygen: 5.8, temperature: 30 }
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    wqi: 82,
    parameters: { ph: 7.1, tds: 280, turbidity: 0.6, dissolvedOxygen: 7.2, temperature: 25 }
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    wqi: 73,
    parameters: { ph: 7.4, tds: 380, turbidity: 0.9, dissolvedOxygen: 6.8, temperature: 29 }
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    wqi: 68,
    parameters: { ph: 7.6, tds: 420, turbidity: 1.1, dissolvedOxygen: 6.0, temperature: 31 }
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    wqi: 77,
    parameters: { ph: 7.3, tds: 350, turbidity: 0.7, dissolvedOxygen: 6.9, temperature: 28 }
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    wqi: 71,
    parameters: { ph: 7.5, tds: 400, turbidity: 1.0, dissolvedOxygen: 6.2, temperature: 32 }
  },
  {
    city: "Pune",
    state: "Maharashtra",
    wqi: 79,
    parameters: { ph: 7.0, tds: 300, turbidity: 0.5, dissolvedOxygen: 7.0, temperature: 26 }
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    wqi: 69,
    parameters: { ph: 7.7, tds: 430, turbidity: 1.3, dissolvedOxygen: 5.9, temperature: 33 }
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    wqi: 67,
    parameters: { ph: 7.9, tds: 440, turbidity: 1.4, dissolvedOxygen: 5.7, temperature: 31 }
  },
  {
    city: "Bhopal",
    state: "Madhya Pradesh",
    wqi: 74,
    parameters: { ph: 7.2, tds: 360, turbidity: 0.8, dissolvedOxygen: 6.6, temperature: 29 }
  },
  {
    city: "Chandigarh",
    state: "Punjab",
    wqi: 80,
    parameters: { ph: 7.1, tds: 290, turbidity: 0.6, dissolvedOxygen: 7.1, temperature: 27 }
  }
];