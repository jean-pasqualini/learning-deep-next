import Link from "next/link";
import { ReactNode, useState } from "react";
import { PacmanLoader } from "react-spinners";

function Component() {
  const [loadingIframe, setLoadingIframe] = useState(false);

  return (
    <>
      <div id="main-page">
        <div id="panel-left">
          <fieldset id="menu">
            <legend>Router mode page</legend>
            <ul>
              <li>
                <Link
                  href={"/pages-mode/server-side-props"}
                  target="content"
                  onClick={() => setLoadingIframe(true)}
                >
                  Server side props
                </Link>
              </li>
              <li>
                <Link
                  href={"/pages-mode/static-props"}
                  target="content"
                  onClick={() => setLoadingIframe(true)}
                >
                  Static props
                </Link>
              </li>
              <li>
                <Link
                  href={"/ping"}
                  target="content"
                  onClick={() => setLoadingIframe(true)}
                >
                  Ping/Pong middleware
                </Link>
              </li>
              <li>
                <Link
                  href={"/pages-mode/incrementals-static-regeneration/8989"}
                  target="content"
                  onClick={() => setLoadingIframe(true)}
                >
                  Incremental static generation
                </Link>
              </li>
              <li>
                <Link
                  target="content"
                  href={
                    "/api/revalidate?path=/pages-mode/incrementals-static-regeneration/8989"
                  }
                  onClick={() => setLoadingIframe(true)}
                >
                  Revalidate on demand
                </Link>
              </li>
              <li>
                <Link
                  target="content"
                  href={"/api/draft/enable"}
                  onClick={() => setLoadingIframe(true)}
                >
                  Enable draft mode
                </Link>
              </li>
              <li>
                <Link
                  target="content"
                  href={"/api/draft/disable"}
                  onClick={() => setLoadingIframe(true)}
                >
                  Disable draft mode
                </Link>
              </li>
            </ul>
          </fieldset>
          <fieldset id="menu">
            <legend>Router mode app</legend>
            <ul>
              <li>
                <Link
                  target="content"
                  href={"/app-mode/fetch-server"}
                  onClick={() => setLoadingIframe(true)}
                >
                  Fetch server side
                </Link>
              </li>
              <li>
                <Link
                  target="content"
                  href={"/app-mode/streaming"}
                  onClick={() => setLoadingIframe(true)}
                >
                  Streaming
                </Link>
              </li>
              <li>
                <Link
                  target="content"
                  href={"/app-mode/server-only"}
                  onClick={() => setLoadingIframe(true)}
                >
                  Server only
                </Link>
              </li>
            </ul>
          </fieldset>
        </div>
        <div id="panel-right" className={loadingIframe ? "loading" : "loaded"}>
          <div className="spinner">
            <PacmanLoader color="peru" />
          </div>
          <iframe
            name="content"
            onLoad={() => setLoadingIframe(false)}
          ></iframe>
        </div>
      </div>
    </>
  );
}

Component.getLayout = function getLayout(page: ReactNode) {
  return (
    <>
      <style type="text/css">
        {`
            body { background: purple; }
        `}
      </style>
      {page}
    </>
  );
};

export default Component;
