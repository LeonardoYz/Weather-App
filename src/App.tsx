import { MenuProvider } from "./hooks/useMenu";
import { SideBar } from "./components/SideBar";

import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <MenuProvider>
        <SideBar />
      </MenuProvider>
    </>
  );
}
