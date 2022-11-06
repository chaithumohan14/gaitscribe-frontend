import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import translations from "@translations/en.json";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

const locale = "en";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={locale} messages={translations}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {process.env.NODE_ENV === "production" ? null : <ReactQueryDevtools />}
      </QueryClientProvider>
    </IntlProvider>
  );
}
