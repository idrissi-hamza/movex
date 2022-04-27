import { AuthContextProvider } from "../context/AuthContext";
import { CtrlContextProvider } from "../context/CtrlContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
        <CtrlContextProvider>
    <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </CtrlContextProvider>
  );
}

export default MyApp;
