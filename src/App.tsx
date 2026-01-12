import reviews from "./reviews.json";

import instagramImage from "./assets/img/instagram.svg";
import facebookImage from "./assets/img/facebook.svg";
import heroImage from "./assets/img/hero.svg";
import separatorImage from "./assets/img/separator.svg";
import bookImage from "./assets/img/book.svg";
import apostropheImage from "./assets/img/apostrophe.svg";
import authorImage from "./assets/img/author.png";
import secondaryBookImage from "./assets/img/book2.png";
import copyrightImage from "./assets/img/copyright.svg";
import logoImage from "./assets/img/logo.svg";

export default function App() {
  return (
    <div className="w-full font-sans text-black">
      <header className="flex items-center justify-center h-17.5 md:h-29.5 md:justify-start w-full px-14 border-b bg-[#45AD34]">
        <div className="flex items-center uppercase gap-x-3">
          <svg
            className="w-10.5 h-10.5 md:w-13.5 md:h-13.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 54 54"
          >
            <g clipPath="url(#a)" fill="#222">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0h54v18H21.602a9 9 0 1 0 0 18H54v18H0V0Z"
              />
              <path d="M53.998 27a7.2 7.2 0 1 1-14.4 0 7.2 7.2 0 0 1 14.4 0ZM38.158 33.237a7.2 7.2 0 1 1 0-12.473v12.473ZM25.918 34.2V19.8a7.2 7.2 0 0 0 0 14.4ZM17.278 32.762V21.24a7.189 7.189 0 0 0-2.88 5.76 7.189 7.189 0 0 0 2.88 5.76Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h54v54H0z" />
              </clipPath>
            </defs>
          </svg>

          <p className="font-semibold">Entropija</p>
        </div>

        <a
          href="https://www.instagram.com/entropija_izdavastvo/"
          className="hidden md:block md:ml-auto md:mr-3.75"
        >
          <img
            src={instagramImage}
            alt="Instagram Icon"
            className="transition-transform duration-200 hover:scale-125"
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61550616857700"
          className="hidden md:block"
        >
          <img
            src={facebookImage}
            alt="Facebook Icon"
            className="transition-transform duration-200 hover:scale-125"
          />
        </a>
      </header>

      <section className="w-full bg-[#45AD34] border-b relative">
        <p className="lg:text-[24px] text-[14px] leading-4.5 lg:leading-8 lg:mt-5.5 pt-10 -mb-3.5 text-[#222222] uppercase text-center lg:absolute lg:rotate-90 top-55 -left-12.5">
          <span className="font-bold">2 miliona </span>odštampanih <br />{" "}
          primeraka na engleskom
        </p>

        <div className="mx-auto max-w-700 px-6 lg:py-24 py-10">
          <div className="flex flex-col items-center gap-10">
            <div className="flex justify-end">
              <img
                src={heroImage}
                alt="Nasumično po volji – knjiga"
                className="w-150 select-none opacity-0 transition-opacity duration-500"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                loading="lazy"
              />
            </div>

            <div className="max-w-150 flex flex-col justify-center items-center">
              <p className="lg:text-[40px] lg:leading-12 text-[18px] leading-5.5 text-[#222222] uppercase text-center font-bold">
                Najbolji investicioni vodič <br /> koji se može kupiti
              </p>

              <p className="lg:text-[24px] lg:leading-8 text-[14px] leading-4.5 mt-5.5 -mb-3.5 text-[#222222] uppercase text-center">
                po prvi put na srpskom jeziku
              </p>

              <img
                src={separatorImage}
                alt="Separator"
                loading="lazy"
                className="lg:w-100 w-50 h-10.5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e6b85c] px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 lg:text-[40px] lg:leading-12 text-[18px] leading-5.5 lg:text-center text-left font-bold uppercase tracking-wide text-black">
            UREDNIŠTVO ENTROPIJE JE PONOSNO ŠTO <br />
            DONOSI KULTNU INVESTICIONU KNJIGU <br />
            ČITAOCIMA SA OVIH PROSTORA
          </h2>

          <p className="mx-auto mb-6 max-w-3xl lg:text-[18px] lg:leading-6 text-[14px] leading-4.5 text-black lg:text-center text-left">
            Ovaj vodič za investiranje, oslobođen smicalica, potrebniji je nego
            ikada, naročito danas, u vreme rasprostranjenih dezinformacija o
            tome kako da uvećate svoj novac. Bez obzira na to da li razmatrate
            prvu uplatu u dobrovoljni penzioni fond ili već razmišljate o
            penzionisanju, ovo jubilarno petnaesto dopunjeno izdanje knjige
            Nasumično po Volstritu ostaje najbolji vodič za investiranje koji se
            može kupiti.
          </p>

          <p className="text-black lg:text-[18px] lg:leading-6 text-[14px] leading-4.5 lg:text-center text-left">
            <span className="font-semibold">Endru Tobajas</span> (Andrew Tobias)
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-300 px-6 py-24">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
            <div className="max-w-115 lg:order-1 order-2">
              <h2 className="mb-6 lg:text-[40px] lg:leading-12 text-[18px] leading-5.5 font-bold uppercase tracking-[0.04em] text-[#222]">
                Novo u ponudi
              </h2>

              <p className="mb-6 lg:text-[18px] lg:leading-6 text-[18px] leading-5.5 text-[#222]">
                Ovo je jedna od „svega nekoliko sjajnih knjiga o investiranju“
                koje su ikada napisane, sa preko dva miliona objavljenih
                primeraka i prevodima na 25 jezika sveta.
              </p>

              <p className="mb-4 lg:text-[18px] lg:leading-6 text-[18px] leading-5.5 text-[#222]">
                <span className="font-semibold">Endru Tobajas</span> (Andrew
                Tobias)
              </p>

              <div className="flex items-center gap-6 border-t border-[#E6E6E6] pt-6">
                <span className="lg:text-[18px] lg:leading-6 text-[18px] leading-5.5 font-light">
                  Kupovina preko Ananasa
                </span>

                <button className="rounded-full cursor-pointer bg-[#F15A3B] px-6 py-3 text-[13px] font-semibold uppercase text-white transition hover:opacity-90">
                  Naruči odmah
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:order-2 order-1">
              <img
                src={bookImage}
                alt="Nasumično po volji – knjiga"
                className="w-90 select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-[#45AD34]">
        <div className="container flex flex-col items-center py-20 md:py-43 px-5">
          <img
            src={apostropheImage}
            alt="apostrophe sign"
            loading="lazy"
            className="w-15.5 mb-10 md:mb-20"
          />

          <div className="max-w-144.5 flex flex-col gap-10 text-center md:gap-20">
            {reviews.map((review, index) => (
              <div key={index}>
                <p className="mb-5">{review.text}</p>

                <p className="flex justify-center items-center uppercase font-extrabold">
                  <span className="mr-2 font-normal text-[16px] tracking-[-2.5px]">
                    ------
                  </span>

                  {review.authorSrb}

                  <span className="font-normal normal-case">
                    &nbsp;<i>{review.authorOg}</i>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="author-section">
        <div className="author-text">
          <h2 className="lg:text-[40px] lg:leading-12 text-[18px] leading-5.5 font-bold uppercase tracking-wide text-black">
            AUTOR
          </h2>
          <p className="lg:text-[18px] lg:leading-6 text-[18px] leading-5.5">
            <span className="font-bold">Barton G. Malkijel</span> je profesor
            emeritus ekonomije na Unverzitetu Prinston. Bivši je član Ekonomskog
            saveta kancelarije predsednika SAD i dekan škole menadžmenta
            Univerziteta Jejl. Živi u Nju Džerziju.
          </p>

          <p className="lg:text-[18px] lg:leading-6 text-[18px] leading-5.5">
            Oslanjajući se na svoje iskustvo ekonomiste, finansijskog savetnika
            i uspešnog investitora, Malkijel pokazuje da pojedinac koji tokom
            vremena štedi u kontinuitetu i investira u diverzifikovanu grupu
            indeksnih fodova može ostvariti natprosečne rezultate. Bavi se i
            trenutnim investicionim pomodarstvom, kritički analizira
            kriptovalute, NFT-ove i mim akcije. Malkijel otkriva kako pametno
            koristiti poreska pravila kod investiranja i kako razumeti odskora
            popularne tehnike upravljanja investicijama, kao što su faktorsko
            investiranje, paritet rizika i ESG portfoliji.
          </p>
        </div>
        <picture>
          <img src={authorImage} alt="author" loading="lazy" />
        </picture>
      </section>

      <section className="bg-[#e6b85c] px-4 py-20 border-b">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 lg:text-[40px] lg:leading-12 text-[18px] leading-5.5 font-bold uppercase tracking-wide text-black lg:text-center text-left">
            UREDNIŠTVO ENTROPIJA SMATRA DA OVA KNJIGA <br />
            TREBA DA SE NAĐE U BIBLIOTECI SVAKOG <br />
            INVESTITORSKOG ASPIRANTA ŽELJNOG DA <br />
            DIVERSIFIKUJE SVOJA ULAGANJA
          </h2>

          <p className="mx-auto mb-6 max-w-3xl lg:text-[18px] lg:leading-6 text-[14px] leading-4.5 text-black lg:text-center text-left">
            Svaki investitor će, bez obzira na starosnu dob, prethodno iskustvo
            i toleranciju prema riziku, ovde naći uputstvo kako da, korak po
            korak, zaštiti i uveća svoj novac.
          </p>

          <p className="text-black lg:text-[18px] lg:leading-6 text-[14px] leading-4.5 lg:text-center text-left">
            <span className="font-semibold">Endru Tobajas</span> (Andrew Tobias)
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-300 px-6 py-24">
          <div className="flex flex-col items-center gap-10">
            <div className="flex justify-end">
              <img
                src={secondaryBookImage}
                alt="Nasumično po volji – knjiga"
                className="w-125 select-none"
                loading="lazy"
              />
            </div>

            <div className="max-w-115 flex flex-col justify-center items-center">
              <p className="lg:text-[24px] lg:leading-8 text-[14px] leading-4.5 text-[#222222] uppercase text-center">
                Najbolji investicioni vodič <br /> koji se može kupiti
              </p>

              <img
                src={separatorImage}
                alt="Entropy Logo"
                loading="lazy"
                className="w-75 h-10.5"
              />

              <div className="flex items-center gap-6 pt-2">
                <button className="rounded-full cursor-pointer bg-[#F15A3B] px-8 py-5 text-[13px] font-semibold uppercase text-white transition hover:opacity-90">
                  Naruči odmah
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full flex justify-center bg-[#45AD34]">
        <div className="container flex flex-col items-center py-20 px-4 pb-10">
          <div className="flex items-center uppercase gap-x-3 w-fit mx-auto">
            <img
              src={logoImage}
              alt="Entropy Logo"
              loading="lazy"
              className="w-10.5 h-10.5 md:w-13.5 md:h-13.5"
            />
            <p className="font-semibold">Entropija</p>
          </div>

          <a
            href="tel:+381645177648"
            className="mt-12 mb-2.5 text-center underline text-sm md:text-[1.14rem]"
          >
            <span>Telefon:</span> +381 64 5177 648
          </a>

          <a
            href="mailto:info@entropija.rs"
            aria-label="Contact us via email to get a discount"
            className="mb-6 text-center underline text-sm md:mb-4 md:text-[1.14rem]"
          >
            <span>E-mail:</span> info@entropija.rs
          </a>

          <div className="flex items-center gap-6 md:gap-2.5">
            <a href="https://www.instagram.com/entropija_izdavastvo/">
              <img
                src={instagramImage}
                alt="Instagram Icon"
                loading="lazy"
                className="w-6 transition-transform duration-200 hover:scale-125"
              />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61550616857700">
              <img
                src={facebookImage}
                alt="Facebook Icon"
                loading="lazy"
                className="w-6 transition-transform duration-200 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </footer>

      <section className="flex items-center justify-center gap-2 h-16.25 border-t border-[#222222] bg-[#45AD34]">
        <img src={copyrightImage} alt="copyright" loading="lazy" />
        <p>2025 - 2026 ENTROPIJA</p>
      </section>
    </div>
  );
}
