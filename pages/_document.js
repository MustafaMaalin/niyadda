import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

// explain it here
// The <Html> component is the root component of the React tree. It is the topmost parent of all other components.
// The <Head> component is where you can add meta tags, links to stylesheets, and other things that go in the <head> of your HTML document.
// The <Main> component is where our Next.js application will be rendered.
// The <NextScript> component is where the Next.js scripts will be rendered. This is needed for Next.js to work properly.
// The <Html>, <Head>, <Main>, and <NextScript> components are required for every page. If you don't include them, your application will not work properly.
