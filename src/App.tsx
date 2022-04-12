import { MenuProvider } from "./hooks/useMenu";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <MenuProvider>
        <SideBar />
      </MenuProvider>
      <Dashboard />
    </>
  );
}
