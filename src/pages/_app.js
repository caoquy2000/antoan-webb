
import Layout from "component/layout";
import Router from "next/router";
const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

function MyApp({ Component, pageProps }) {

  return (
    <Layout>  
      <Component {...pageProps} />
    </Layout>
  )
}
// MyApp.getInitialProps = async ({ req }) => {
//   if (typeof window === "undefined") {
//     const newsCollec = await getDocs(collection(db, 'news'));
//     const newsData = newsCollec.docs.map((doc) => doc.data());
//     return {
//       globalLayout: newsCollec ? newsData : null,
//     };
//   }
// };

export default MyApp;

