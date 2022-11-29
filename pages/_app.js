import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UseWalletProvider } from "use-wallet";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
  colors: {
    teal: {
      400: '#05FD02',
      300: '#60FF5E',
      200: '#05FD02',
      500: '#05FD02',
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ChakraProvider theme={theme}>
        <UseWalletProvider
          chainId={1}
          connectors={{
            walletconnect: {
              rpcUrl:
                "https://mainnet.infura.io/v3/ed446063ba7b44b4b5e8214500f42bac",
            },
          }}
        >
          <NavBar />
          <Component {...pageProps} />
          <Footer />{" "}
        </UseWalletProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
