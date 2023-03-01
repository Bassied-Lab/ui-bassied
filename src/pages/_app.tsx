import type { AppProps } from "next/app";
import { appWithTranslation, SSRConfig } from "next-i18next";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { lightTheme } from "@/themes";

interface IAppProps extends SSRConfig {}

const App = ({ Component, pageProps }: AppProps<IAppProps>) => {
  const queryClient = useRef(new QueryClient());

  return (
    <>
      <Head>
        <title>Bassied</title>
      </Head>
      <QueryClientProvider client={queryClient.current}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={lightTheme}>
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(App);
