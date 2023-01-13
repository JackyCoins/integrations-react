import { TILDA_HTML } from "../modules/tilda";
import { useEffect } from "react";

export const TildaPage = () => {
  useEffect(() => {
    const tildaButton = document.getElementById("tilda-button");

    const onClick = () => {
      alert("onClick tilda button");
    };

    tildaButton.addEventListener("click", onClick);

    return () => {
      tildaButton.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: TILDA_HTML }}
      className={"w-full"}
    />
  );
};
