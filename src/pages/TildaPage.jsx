import { TILDA_HTML } from "../modules/tilda";

export const TildaPage = () => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: TILDA_HTML }}
      className={"w-full"}
    />
  );
};
