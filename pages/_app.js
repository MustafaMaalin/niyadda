import Layout from "@/components/common/Layout";
import "@/styles/main.scss";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
    
}

// explain this here
// The <Component> component is the component that will be rendered for the page that is being requested.
// The pageProps prop is an object that contains initial props that were preloaded for your page by one of our data fetching methods, otherwise it is an empty object.
// The <Component> component and the pageProps prop are required for every page. If you don't include them, your application will not work properly.
