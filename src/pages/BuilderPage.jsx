import { builder, BuilderComponent } from "@builder.io/react";
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
  }, []);

  return (
    <div className={"w-full h-full"}>
      <BuilderComponent model={MODEL_NAME} content={content} />
    </div>
  );
};
