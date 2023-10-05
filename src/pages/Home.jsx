import Navbar from "../components/Navbar";
import imgHero from "../assets/Car-loan.svg";
import daftar from "../assets/Accept terms-cuate.svg";
import kendarai from "../assets/car-approved.svg";
import kembalikan from "../assets/car-return.svg";
import layananDaftar from "../assets/order.svg";
import kendaraanBeragam from "../assets/kendaraan.svg";
import kendaraanService from "../assets/car-service.svg";
import customerService from "../assets/customer-service.svg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="w-full bg-dark text-white">
        <div className="container mx-auto">
          <div className="flex flex-col px-4 lg:flex-row">
            <div className="w-full lg:w-1/2 lg:my-auto">
              <h1 className="text-2xl lg:text-5xl font-bold  mb-3 lg:mb-5">
                Rental Kendaraan Instant di Dekatmu!
              </h1>
              <p className="lg:text-lg ">
                Booking di tempat sesuai keinginan berdasarkan jam atau hari,
                termasuk bahan bakar di awal penyewaan.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={imgHero} alt="imgHero" className="lg:w-11/12" />
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}
      {/* Cara Kerja Section */}
      <section className="w-full py-20">
        <div className="container mx-auto">
          <h1 className="text-center text-xl lg:text-4xl font-bold">
            Bagaimana Cara Kerjanya ?
          </h1>
          <div className="mt-5 px-2 lg:mt-10 flex flex-wrap justify-between">
            <div className="p-2 mx-auto lg:mx-0 lg:w-1/3 mb-3">
              <img src={daftar} alt="daftar" className="mx-auto w-1/2" />
              <h3 className="text-center font-bold text-lg">Daftarkan</h3>
              <p className="text-center text-md">
                Daftar dengan persyaratan yang berlaku.
              </p>
            </div>
            <div className="p-2 mx-auto lg:mx-0 lg:w-1/3 mb-3">
              <img src={kendarai} alt="daftar" className="mx-auto w-1/2" />
              <h3 className="text-center font-bold text-lg">Kendarakan</h3>
              <p className="text-center text-md">
                Kendarakan kendaraan yang telah anda sewa sesuai dengan jam atau
                hari yang telah disetujui.
              </p>
            </div>
            <div className="p-2 mx-auto lg:mx-0 lg:w-1/3 mb-3">
              <img
                src={kembalikan}
                alt="daftar"
                className="mx-auto w-1/2 lg:w-2/3"
              />
              <h3 className="text-center font-bold text-lg lg:mt-6">
                Kembalikan
              </h3>
              <p className="text-center text-md">
                Kembalikan kendaraan yang telah anda sewa dengan menyimpannya
                kembali ke tempat anda mengambil kendaraan tersebut.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Cara Kerja Section */}
      {/* Layanan Section */}
      <section className="w-full py-10 px-2 lg:px-0">
        <div className="container mx-auto bg-dark text-white rounded-lg p-6 lg:p-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:my-auto">
              <h1 className="text-3xl font-bold mb-3">Layanan Kami</h1>
              <p className="text-lg mb-3">
                Kami selalu pastikan untuk memberikan layanan terbaik untuk
                anda. Pendaftaran mudah, kendaraan terawat dengan baik, harga
                bersahabat, dan layanan pelanggan yang selalu siap diandalkan.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 mx-auto mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 w-1/3 mx-auto mb-2">
                    <img src={layananDaftar} alt="layananDaftar" />
                  </div>
                  <p className="text-center font-bold">Pendaftaran Mudah</p>
                </div>
                <div className="w-full lg:w-1/2 mx-auto mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 w-1/3 mx-auto mb-2">
                    <img src={kendaraanBeragam} alt="layananDaftar" />
                  </div>
                  <p className="text-center font-bold">Kendaraan Beragam</p>
                </div>
                <div className="w-full lg:w-1/2 mx-auto mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 w-1/3 mx-auto mb-2">
                    <img src={kendaraanService} alt="layananDaftar" />
                  </div>
                  <p className="text-center font-bold">Kendaraan Terawat</p>
                </div>
                <div className="w-full lg:w-1/2 mx-auto mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 w-1/3 mx-auto mb-2">
                    <img src={customerService} alt="layananDaftar" />
                  </div>
                  <p className="text-center font-bold">
                    Layanan Customer Service 24 Jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Layanan Section */}
      {/* Tertarik Section */}
      <section className="py-20 border border-y-gray-500 mb-10">
        <div className="container mx-auto">
          <div className="px-4 flex flex-wrap justify-between">
            <div>
              <h1 className="text-2xl font-bold">Anda Tertarik ?</h1>
              <p className="text-lg my-3">
                Silahkan untuk melihat terlebih dahulu kendaraan yang kami
                sediakan lalu cobalah untuk menyewanya!
              </p>
            </div>
            <a
              href="#"
              className="bg-primary p-4 my-auto rounded-full text-white font-bold hover:bg-white border hover:border-primary hover:text-primary duration-300 ease-in-out">
              Lihat List Kendaraan
            </a>
          </div>
        </div>
      </section>
      {/* End of Tertarik Section */}
      <Footer />
    </>
  );
};

export default Home;
