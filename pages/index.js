import Heading from "../components/Heading";
import Products from "../components/Products/Products";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Heading />
       <Products />
        <Navigation />
      </Layout>
    </>
  );
}
