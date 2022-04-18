import { MenuProvider } from "./hooks/useMenu";
import { WeatherProvider } from "./hooks/useWeather";
import { Loading } from "./components/Loading";
import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";
import { ToastContainer } from "react-toastify";

import { GlobalStyles } from "./styles/global";
import { Wrapper } from "./styles/Wrapper";

export function App() {
  return (
    <Wrapper>
      <GlobalStyles />

      <MenuProvider>
        <WeatherProvider>
          <Loading />
          <SideBar />
          <Dashboard />
          <ToastContainer 
            autoClose={3500} 
            theme="dark"
          />
        </WeatherProvider>
      </MenuProvider>
    </Wrapper>
  );
}
