const HUBSPOT_URL =
  "https://coins-26162115.hubspotpagebuilder.eu/hubspot-react-integration";

export const HubspotPage = () => {
  return (
    <iframe title={"hubspot"} src={HUBSPOT_URL} className={"w-full h-full"} />
  );
};
