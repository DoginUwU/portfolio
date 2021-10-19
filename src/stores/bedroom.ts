import create from "zustand";

interface BedroomState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const useStore = create<BedroomState>((set) => ({
  loading: true,
  setLoading: (loading) => set(() => ({ loading })),
}));

export default useStore;
