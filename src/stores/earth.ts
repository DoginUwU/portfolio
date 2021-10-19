import create from "zustand";

interface EarthState {
  coords: {
    x: number;
    y: number;
  };
  focus: boolean;
  setFocus: (focus: boolean) => void;
  setCoords: (coords: { x: number; y: number }) => void;
}

const useStore = create<EarthState>((set) => ({
  coords: { x: 0, y: 0 },
  focus: false,
  setFocus: (focus: boolean) => set(() => ({ focus })),
  setCoords: (coords) => set(() => ({ coords })),
}));

export default useStore;
