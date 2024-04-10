import Footer from "./Footer";
import Header from "./Header";

function Applayout() {
  return (
    <>
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="bg-slate-600">test</main>
        <Footer />
      </div>
    </>
  );
}

export default Applayout;
