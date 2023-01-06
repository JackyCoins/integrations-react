const hubspotScript = () => {
  (function () {
    const createAction = (type, payload) => {
      return {
        type,
        payload,
      };
    };
    const sendMessage = (action) => {
      window.parent.postMessage(action, "*");
    };

    window.addEventListener("DOMContentLoaded", () => {
      window.addEventListener(
        "message",
        (event) => {
          if (event.data.type === "set-config") {
            const config = event.data.payload.config;

            config.handlers?.forEach((handler) => {
              const element = document.querySelector(handler.selector);

              switch (handler.type) {
                case "click-button": {
                  element?.addEventListener("click", (e) => {
                    e.preventDefault();

                    sendMessage(
                      createAction("click-button", {
                        buttonName: handler.name,
                      })
                    );
                  });
                  break;
                }
                default: {
                  // eslint-disable-next-line no-console
                  console.log("There is not the event: " + handler.type);
                }
              }
            });

            const links = document.querySelectorAll("a");

            links.forEach((link) => {
              link.onclick = "event.preventDefault()";

              link.addEventListener("click", (e) => {
                e.preventDefault();

                sendMessage(
                  createAction("click-button", {
                    buttonName: "link",
                    href: link.href,
                  })
                );
              });
            });
          }
        },
        false
      );

      sendMessage(
        createAction("load", {
          title: document.title,
          description:
            document.querySelector('meta[name="description"]')?.content || "",
        })
      );
    });
  })();
};
