import { MenuProvider } from "./hooks/useMenu";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyles } from "./styles/global";
import { Wrapper } from "./styles/Wrapper";

export function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <MenuProvider>
        <SideBar />
      </MenuProvider>
      <Dashboard />
    </Wrapper>
  );
}
