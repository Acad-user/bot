import { create } from 'zustand';
import { CityWQIData } from '../types/water';
import { cityWQIData } from '../data/waterQualityData';

interface WaterStore {
  cities: CityWQIData[];
  selectedCity: string | null;
  setSelectedCity: (city: string | null) => void;
  filterCities: (query: string) => void;
  resetCities: () => void;
}

export const useWaterStore = create<WaterStore>((set) => ({
  cities: cityWQIData,
  selectedCity: null,
  setSelectedCity: (city) => set({ selectedCity: city }),
  filterCities: (query) => set((state) => ({
    cities: cityWQIData.filter((city) => 
      city.city.toLowerCase().includes(query.toLowerCase()) ||
      city.state.toLowerCase().includes(query.toLowerCase())
    )
  })),
  resetCities: () => set({ cities: cityWQIData })
}));