import { create } from "zustand";
import type { ThemeVariableType } from "./type";

interface ThemeStoreType {
  theme: ThemeVariableType;
  actions: {
    setTheme: (value: ThemeVariableType) => void;
  };
}

const useThemeStore = create<ThemeStoreType>()((set) => {
  return {
    theme: (localStorage.getItem("theme") as ThemeVariableType) || "system",
    actions: {
      setTheme: (value) => {
        return set(() => {
          return { theme: value };
        });
      },
    },
  };
});

const useTheme = () => {
  return useThemeStore((state) => state.theme);
};
const useThemeControls = () => {
  return useThemeStore((state) => state.actions);
};

interface DeleteModalStoreType {
  deleteModalStatus: boolean;
  actions: {
    setDeleteModalStatus: (value: boolean) => void;
  };
}

const useDeleteModalStore = create<DeleteModalStoreType>()((set) => {
  return {
    deleteModalStatus: false,
    actions: {
      setDeleteModalStatus: (value) => {
        return set(() => {
          return { deleteModalStatus: value };
        });
      },
    },
  };
});

const useDeleteModalStatus = () => {
  return useDeleteModalStore((state) => state.deleteModalStatus);
};

const useDeleteModalStatusControls = () => {
  return useDeleteModalStore((state) => state.actions);
};

interface ArchiveModalStoreType {
  archiveModalStatus: boolean;
  actions: {
    setArchiveModalStatus: (value: boolean) => void;
  };
}

const usArchiveModalStore = create<ArchiveModalStoreType>()((set) => {
  return {
    archiveModalStatus: false,
    actions: {
      setArchiveModalStatus: (value) => {
        return set(() => {
          return { archiveModalStatus: value };
        });
      },
    },
  };
});

const useArchiveModalStatus = () => {
  return usArchiveModalStore((state) => state.archiveModalStatus);
};

const useArchiveModalStatusControls = () => {
  return usArchiveModalStore((state) => state.actions);
};

export {
  useTheme,
  useThemeControls,
  useDeleteModalStatus,
  useDeleteModalStatusControls,
  useArchiveModalStatus,
  useArchiveModalStatusControls,
};
