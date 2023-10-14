import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Sukses = () => {
  function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  return (
    <>
      <Navbar />
      <section className="h-[100vh]">
        <div className="container mx-auto text-center">
          <div className="py-20">
            <h1 className="font-bold text-3xl mb-10">Order Complete</h1>
            <h1 className="font-bold text-3xl">
              Kode Order : {generateRandomString(10)}
            </h1>
            <p className="text-xl">
              Silahkan Kunjungi Kantor Kami dengan membawa Kode diatas
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sukses;
