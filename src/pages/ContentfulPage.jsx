import {useEffect, useState} from "react";

export const ContentfulPage = () => {
    const [page, setPage] = useState(null);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authenticate the request
                    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
                },
                // send the GraphQL query
                body: JSON.stringify({ query }),
            })
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

    return <div><h1>{page.title}</h1>{page.body.json.content.map(item => <p>{item.content[0].value}</p>)}</div>
}

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
`