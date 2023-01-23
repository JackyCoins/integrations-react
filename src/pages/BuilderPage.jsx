import { builder, BuilderComponent, Builder } from "@builder.io/react";
import { useEffect, useState } from "react";

const MODEL_NAME = "page";

builder.init(process.env.REACT_APP_BUILDER_API_KEY);

export const BuilderPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get(MODEL_NAME, {
        userAttributes: {
          urlPath: "/builder",
        },
      })
      .promise()
      .then(setContent);

    const clickHandler = () => {
      alert("Click button!");
    };

    document.addEventListener("click-button", clickHandler);

    return () => {
      document.removeEventListener("click-button", clickHandler);
    };
  }, []);

  return (
    <div className={"w-full h-full"}>
      <BuilderComponent model={MODEL_NAME} content={content} />
    </div>
  );
};

const CustomTicker = ({ title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((state) => state + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {title}: {count}
    </div>
  );
};

Builder.registerComponent(CustomTicker, {
  name: "Custom Ticker",
  inputs: [{ name: "title", type: "text", defaultValue: "Ticks" }],
});
