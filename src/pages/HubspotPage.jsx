import { useRef, useEffect, useMemo, useState } from "react";

const HUBSPOT_URL =
  "https://coins-26162115.hubspotpagebuilder.eu/react-integration";

const CTA_BUTTON_NAME = "cta";

export const HubspotPage = () => {
  const frameRef = useRef(null);
  const [isInitHandlers, setIsInitHandlers] = useState(false);

  const hubspotConfig = useMemo(
    () => ({
      handlers: [
        {
          type: "click-button",
          name: CTA_BUTTON_NAME,
          selector: "a[href='#custom']",
        },
      ],
    }),
    []
  );

  useEffect(() => {
    const handler = (event) => {
      if (event.origin.includes("hubspot") && event.data.type) {
        switch (event.data.type) {
          case "click-button": {
            if (
              event.data.payload.buttonName === "link" &&
              event.data.payload.href
            ) {
              window.location.href = event.data.payload.href;
              break;
            }

            alert(`Button: ${event.data.payload.buttonName}`);
            break;
          }
          case "load": {
            if (hubspotConfig && frameRef.current?.contentWindow) {
              frameRef.current.contentWindow.postMessage(
                createAction("set-config", { config: hubspotConfig }),
                "*"
              );

              // if (onLoad) {
              //   const { title, description } = event.data.payload ?? {};
              //   onLoad(title, description);
              // }
            }
            break;
          }
          default: {
            // eslint-disable-next-line no-console
            console.log("There is not event type");
          }
        }
      }
    };
    window.addEventListener("message", handler, false);
    setIsInitHandlers(true);

    return () => {
      window.removeEventListener("message", handler);
    };
  }, [hubspotConfig]);

  return isInitHandlers ? (
    <iframe
      title={"hubspot"}
      src={HUBSPOT_URL}
      className={"w-full h-full rounded-2xl"}
      ref={frameRef}
    />
  ) : null;
};

const createAction = (type, payload) => ({
  type,
  payload,
});
