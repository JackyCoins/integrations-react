import { useEffect, useState } from "react";

export const ContentfulPage = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.blogPostCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className={"bg-white rounded-2xl p-6"}>
      <h1 className={"text-6xl text-gray-900"}>{page.title}</h1>
      {page.body.json.content.map((item) => (
        <p className={"text-2xl m-5 p-2 text-gray-800"}>
          {item.content[0].value}
        </p>
      ))}
    </div>
  );
};

const query = `
{
  blogPostCollection {
    items {
      title
      body {
        json
      }
    }
  }
}
`;
