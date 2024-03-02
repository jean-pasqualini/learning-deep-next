import { AppProps } from "next/app";
import "../globals.css";
import { ReactNode } from "react";


type GetLayoutFunction = (page: ReactNode) => ReactNode;

interface MyAppProps {
  Component: React.ComponentType<AppProps> & { getLayout?: GetLayoutFunction };
  pageProps: AppProps;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  
  if (Component.getLayout !== undefined) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <style type="text/css">
        {`
            body { background: black; padding: 10px; }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
