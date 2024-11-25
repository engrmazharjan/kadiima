"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import image1 from "../public/assets/image1.png";
import image2 from "../public/assets/image2.png";
import image3 from "../public/assets/image3.png";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Section */}
      <section>
        <div className="flex flex-col justify-center head text-[white] h-[69vh] px-[140px]">
          <h1 className="text-[40px] font-[600]">
            Building a Thriving New <br /> York City for Everyone
          </h1>
          <p className="text-[14px] font-[500] mt-6">
            Empowering individuals, strengthening communities, <br />
            and creating opportunities for a better future.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <button
              type="button"
              className="text-[#FE612B] border-[#FE612B] text-[14px] border-[1px] rounded-[8px] px-5 py-[8px]"
            >
              Join Us
            </button>
            <button
              type="button"
              className="bg-[#FE612B] text-[white] text-[14px] rounded-[8px] px-5 py-[10px]"
            >
              Donate
            </button>
          </div>
        </div>
      </section>

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Lorem ipsum dolor sit <br /> amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Interdum nunc rhoncus
            aliquet praesent. Maecenas morbi sed eu sit eu aliquet condimentum.
          </p>
          <div className="stats">
            <div className="stat">
              <h2>10,000+</h2>
              <p>MEALS DISTRIBUTED</p>
            </div>
            <div className="stat">
              <h2>5,000+</h2>
              <p>STUDENTS SUPPORTED</p>
            </div>
            <div className="stat">
              <h2>100+</h2>
              <p>COMMUNITY EVENTS HOSTED</p>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are bg-[#28292D] pl-[120px] py-14">
        <div className="content flex items-center justify-between text-[white]">
          <div className="text-section flex flex-col items-start gap-[50px]">
            <h1 className="text-[72px] font-[600]">WHO WE ARE</h1>
            <p className="w-[500px] text-[16px] font-[500]">
              Our non-profit is committed to serving the people of New York City
              by addressing systemic challenges and providing sustainable
              solutions. We work in collaboration with local organizations, city
              leaders, and passionate volunteers to create a lasting impact.
            </p>
            <div className="stats flex flex-col">
              <div className="stat-item flex items-center gap-[80px]">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="#ABB2C4" />
                  <path
                    d="M32.5 55H28C27.2044 55 26.4413 54.6839 25.8787 54.1213C25.3161 53.5587 25 52.7956 25 52V41.5C25 40.7044 25.3161 39.9413 25.8787 39.3787C26.4413 38.8161 27.2044 38.5 28 38.5H32.5M43 35.5V29.5C43 28.3065 42.5259 27.1619 41.682 26.318C40.8381 25.4741 39.6935 25 38.5 25L32.5 38.5V55H49.42C50.1435 55.0082 50.8456 54.7546 51.3969 54.286C51.9482 53.8174 52.3115 53.1654 52.42 52.45L54.49 38.95C54.5553 38.52 54.5263 38.081 54.405 37.6634C54.2838 37.2457 54.0732 36.8594 53.7878 36.5313C53.5024 36.2031 53.1491 35.9409 52.7524 35.7628C52.3556 35.5848 51.9249 35.4951 51.49 35.5H43Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <h2 className="text-[64px] font-[600]">875+</h2>
                  <p className="text-[#ABB2C3] text-[16px] m-0">
                    Projects Done
                  </p>
                </div>
              </div>
              <div className="stat-item flex items-center gap-[80px]">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="39.5" stroke="#ABB2C4" />
                  <path
                    d="M46.75 36.1004L33.25 28.3154"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.5 45.9999V33.9999C53.4995 33.4738 53.3606 32.9571 53.0973 32.5016C52.834 32.0461 52.4556 31.6679 52 31.4049L41.5 25.4049C41.0439 25.1415 40.5266 25.0029 40 25.0029C39.4734 25.0029 38.9561 25.1415 38.5 25.4049L28 31.4049C27.5444 31.6679 27.166 32.0461 26.9027 32.5016C26.6394 32.9571 26.5005 33.4738 26.5 33.9999V45.9999C26.5005 46.5259 26.6394 47.0426 26.9027 47.4981C27.166 47.9536 27.5444 48.3318 28 48.5949L38.5 54.5949C38.9561 54.8582 39.4734 54.9968 40 54.9968C40.5266 54.9968 41.0439 54.8582 41.5 54.5949L52 48.5949C52.4556 48.3318 52.834 47.9536 53.0973 47.4981C53.3606 47.0426 53.4995 46.5259 53.5 45.9999Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.905 32.4404L40 40.0154L53.095 32.4404"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 55.12V40"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <h2 className="text-[64px] font-[600]">320+</h2>
                  <p className="text-[#ABB2C3] text-[16px] m-0">
                    Products Created
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-section flex gap-3">
            <div className="image-wrapper flex flex-col items-center justify-end ">
              <Image src={image2} alt="Volunteers" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="image-wrapper">
                <Image src={image1} alt="Community Work" />
              </div>
              <div className="image-wrapper">
                <Image src={image3} alt="Helping Hands" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
