import Header from "../pages/containers/header";
import Brands from "../pages/containers/brands";
import About from "../pages/containers/about";
import Features from "../pages/containers/features";
import Testimonials from "../pages/containers/testimonials";
import Subscription from "../pages/containers/subscription";
import Footer from "../pages/containers/footer";

export default function Main() {
  return (
    <>
      <Header />
      <Brands />
      <About />
      <Features />
      <Testimonials />
      <Subscription />
      <Footer />
    </>
  );
}
