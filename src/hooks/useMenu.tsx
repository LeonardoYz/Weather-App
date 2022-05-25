import { createContext, ReactNode, useContext, useState } from "react";
interface MenuContextProps {
  menuIsOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext({} as MenuContextProps);

export function MenuProvider({ children }: MenuProviderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleOpenMenu() {
    setMenuIsOpen(true);
  }

  function handleCloseMenu() {
    setMenuIsOpen(false);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      handleCloseMenu();
    }
  });

  return (
    <MenuContext.Provider
      value={{
        menuIsOpen,
        handleOpenMenu,
        handleCloseMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
