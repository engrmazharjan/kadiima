"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-around py-4">
      <div>
        <svg
          width="185"
          height="48"
          viewBox="0 0 185 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_12_222)">
            <path
              d="M130.816 15.1607L132.427 10.7678H125.66L117.605 32.8392H122.277L120.666 37.2321H127.433L135.488 15.1607H130.816ZM130.118 17.0893H132.695L131.782 19.5H129.205L130.118 17.0893ZM127.057 12.6964H129.634L128.721 15.1071H126.144L127.057 12.6964ZM125.446 17.0893H128.023L122.975 30.9107H120.398L125.446 17.0893ZM123.459 35.25L128.507 21.4285H131.084L126.036 35.25H123.459Z"
              fill="#18133B"
            />
            <path
              d="M128.721 15.1607L129.258 13.7678H131.353L130.816 15.1607H128.721Z"
              fill="#D6D6D6"
            />
            <path
              d="M122.868 18.4286L123.351 17.0894H125.446L124.962 18.4286H122.868Z"
              fill="#D6D6D6"
            />
            <path
              d="M127.54 18.4286L128.023 17.0894H130.118L129.634 18.4286H127.54Z"
              fill="#D6D6D6"
            />
            <path
              d="M130.816 22.2321L131.299 20.8928H133.393L132.91 22.2321H130.816Z"
              fill="#D6D6D6"
            />
            <path
              d="M58.2656 15.6428V36.9643H61.0044V27.2142V15.6428H58.2656Z"
              fill="#18133B"
            />
            <path
              d="M75.1278 37.2322L65.4079 26.6251L75.0741 15.9644H71.5298L61.971 26.6786L71.5298 37.2322H75.1278Z"
              fill="#18133B"
            />
            <path
              d="M77.4369 23.9999C78.135 22.7142 79.1016 21.6963 80.283 20.9999C81.5182 20.3035 82.8607 19.9285 84.3643 19.9285C85.8142 19.9285 87.1031 20.2499 88.1771 20.8928C89.2511 21.5356 90.0566 22.3392 90.5936 23.2499V20.1963H93.3861V36.9642H90.5936V33.857C90.0566 34.8213 89.1974 35.6249 88.1234 36.2678C87.0494 36.9106 85.7605 37.232 84.3106 37.232C82.807 37.232 81.4645 36.857 80.283 36.107C79.1016 35.357 78.135 34.3392 77.4369 32.9999C76.7388 31.6606 76.4166 30.1606 76.4166 28.4999C76.4166 26.7856 76.7388 25.2856 77.4369 23.9999ZM89.8418 25.232C89.3048 24.3213 88.6604 23.5713 87.8012 23.0892C86.942 22.607 85.9753 22.3392 84.955 22.3392C83.9347 22.3392 82.9681 22.607 82.1089 23.0892C81.2497 23.5713 80.5515 24.2678 80.0682 25.232C79.5312 26.1428 79.3164 27.2678 79.3164 28.5535C79.3164 29.8392 79.5849 30.9642 80.0682 31.8749C80.5515 32.7856 81.2497 33.5356 82.1089 34.0178C82.9681 34.4999 83.9347 34.7678 84.955 34.7678C85.9753 34.7678 86.942 34.4999 87.8012 34.0178C88.6604 33.5356 89.3585 32.7856 89.8418 31.8749C90.3251 30.9106 90.5936 29.8392 90.5936 28.5535C90.5936 27.2678 90.3251 26.1963 89.8418 25.232Z"
              fill="#18133B"
            />
            <path
              d="M98.9173 24C99.6154 22.7143 100.582 21.6965 101.763 21C102.999 20.3036 104.341 19.9286 105.845 19.9286C107.134 19.9286 108.369 20.25 109.496 20.8393C110.624 21.4286 111.483 22.2322 112.074 23.1965V14.3572H114.866V36.9643H112.074V33.8036C111.537 34.8215 110.732 35.625 109.604 36.2679C108.53 36.9107 107.241 37.2322 105.791 37.2322C104.287 37.2322 102.945 36.8572 101.71 36.1072C100.475 35.3572 99.5617 34.3393 98.8636 33C98.1655 31.6607 97.8433 30.1607 97.8433 28.5C97.897 26.7857 98.2192 25.2857 98.9173 24ZM111.322 25.2322C110.785 24.3215 110.141 23.5715 109.282 23.0893C108.422 22.6072 107.456 22.3393 106.435 22.3393C105.415 22.3393 104.448 22.6072 103.589 23.0893C102.73 23.5715 102.032 24.2679 101.549 25.2322C101.012 26.1429 100.797 27.2679 100.797 28.5536C100.797 29.8393 101.065 30.9643 101.549 31.875C102.086 32.8393 102.73 33.5357 103.589 34.0179C104.448 34.5 105.415 34.7679 106.435 34.7679C107.456 34.7679 108.422 34.5 109.282 34.0179C110.141 33.5357 110.839 32.7857 111.322 31.875C111.806 30.9107 112.074 29.8393 112.074 28.5536C112.074 27.2679 111.859 26.1965 111.322 25.2322Z"
              fill="#18133B"
            />
            <path
              d="M160.351 20.7321C161.372 21.2679 162.177 22.0714 162.768 23.1429C163.359 24.2143 163.681 25.5536 163.681 27.1071V36.9643H160.942V27.4821C160.942 25.8214 160.512 24.5357 159.707 23.625C158.901 22.7143 157.774 22.2857 156.377 22.2857C154.927 22.2857 153.8 22.7679 152.94 23.6786C152.081 24.5893 151.652 25.9286 151.652 27.6964V36.9643H148.913V27.4821C148.913 25.8214 148.483 24.5357 147.678 23.625C146.872 22.7143 145.745 22.2857 144.348 22.2857C142.898 22.2857 141.771 22.7679 140.911 23.6786C140.052 24.5893 139.623 25.9286 139.623 27.6964V36.9643H136.83V20.1964H139.623V22.6071C140.16 21.75 140.911 21.0536 141.824 20.5714C142.737 20.0893 143.758 19.875 144.885 19.875C146.282 19.875 147.517 20.1964 148.644 20.8393C149.718 21.4821 150.524 22.3929 151.061 23.625C151.544 22.4464 152.296 21.5357 153.37 20.8929C154.444 20.25 155.679 19.9286 156.968 19.9286C158.203 19.9286 159.331 20.1964 160.351 20.7321Z"
              fill="#18133B"
            />
            <path
              d="M168.997 23.9999C169.695 22.7142 170.662 21.6963 171.843 20.9999C173.078 20.3035 174.421 19.9285 175.925 19.9285C177.374 19.9285 178.663 20.2499 179.737 20.8928C180.811 21.5356 181.617 22.3392 182.154 23.2499V20.1963H184.946V36.9642H182.154V33.857C181.617 34.8213 180.758 35.6249 179.684 36.2678C178.61 36.9106 177.321 37.232 175.871 37.232C174.367 37.232 173.025 36.857 171.843 36.107C170.662 35.357 169.695 34.3392 168.997 32.9999C168.299 31.6606 167.977 30.1606 167.977 28.4999C167.977 26.7856 168.299 25.2856 168.997 23.9999ZM181.402 25.232C180.865 24.3213 180.221 23.5713 179.361 23.0892C178.502 22.607 177.536 22.3392 176.515 22.3392C175.495 22.3392 174.528 22.607 173.669 23.0892C172.81 23.5713 172.112 24.2678 171.628 25.232C171.091 26.1428 170.877 27.2678 170.877 28.5535C170.877 29.8392 171.145 30.9642 171.628 31.8749C172.112 32.7856 172.81 33.5356 173.669 34.0178C174.528 34.4999 175.495 34.7678 176.515 34.7678C177.536 34.7678 178.502 34.4999 179.361 34.0178C180.221 33.5356 180.919 32.7856 181.402 31.8749C181.885 30.9106 182.154 29.8392 182.154 28.5535C182.154 27.2678 181.939 26.1963 181.402 25.232Z"
              fill="#18133B"
            />
            <path
              d="M8.10885 20.1429C8.10885 20.1429 5.6386 15.1072 11.8679 8.35718C18.0972 1.60718 27.5486 4.01789 27.5486 4.01789C27.5486 4.01789 35.7112 5.51789 39.3091 14.0893C32.7576 8.73218 24.2192 7.33932 17.3454 10.5536C11.5457 13.2857 8.91436 18.3215 8.10885 20.1429Z"
              fill="url(#paint0_linear_12_222)"
            />
            <path
              d="M2.04064 33.3213C2.04064 33.3213 -0.859211 22.8213 4.02758 14.5178C8.91437 6.2142 15.3048 4.3392 15.3048 4.3392C15.3048 4.3392 21.2119 2.35706 25.5617 3.48206C29.9115 4.60706 31.0929 5.24991 31.0929 5.24991C31.0929 5.24991 37 8.0892 38.5036 12.0535C40.0073 16.0178 40.9202 18.2678 39.0943 23.4642C37.2685 28.6606 32.0058 31.3928 32.0058 31.3928C32.0058 31.3928 28.0856 33.3213 24.2729 32.9999C20.5138 32.6785 20.5138 32.6785 20.5138 32.6785L20.0842 36.0535L22.447 35.7856L23.0377 36.0535C23.0377 36.0535 29.5356 38.5178 35.4427 34.4999C41.3498 30.4821 42.7997 24.9642 42.7997 24.9642C42.7997 24.9642 44.6255 18.7499 42.3701 13.5535C40.1147 8.35706 36.463 5.4642 36.463 5.4642C36.463 5.4642 32.7576 2.0892 28.1393 0.910628C23.521 -0.267944 20.4064 -0.375087 15.4659 0.910628C10.5254 2.19634 5.96082 6.9642 5.96082 6.9642C5.96082 6.9642 -0.107397 12.8571 5.24381e-06 22.1249C0.107407 31.3928 2.04064 33.3213 2.04064 33.3213Z"
              fill="#1A2739"
            />
            <path
              d="M9.8273 17.1963C10.2032 16.4463 10.6865 15.6963 11.2235 14.9999C11.7605 14.3035 12.3512 13.6606 12.9957 13.0713C14.2845 11.8928 15.7881 10.9285 17.4528 10.2856C18.2584 9.96418 19.1176 9.74989 20.0305 9.58918C20.8897 9.42847 21.8026 9.42847 22.6618 9.42847C24.434 9.48204 26.1524 9.85704 27.8171 10.4999L28.4079 10.7678C28.6227 10.8749 28.7838 10.982 28.9986 11.0356L29.3208 11.1963C29.4282 11.2499 29.5356 11.3035 29.5893 11.357L30.18 11.6785C30.9318 12.1606 31.6299 12.6963 32.2743 13.3392C32.9187 13.982 33.4557 14.6785 33.8854 15.4285C34.3687 16.1785 34.6909 16.982 35.0131 17.8392C35.6038 19.4999 35.8186 21.2678 35.7649 23.0356C35.7112 23.8928 35.6575 24.8035 35.4427 25.607C35.3353 26.0356 35.2279 26.4642 35.1205 26.8928C34.9594 27.3213 34.7983 27.6963 34.5298 28.0713C34.7983 27.6963 34.9057 27.3213 35.0131 26.8928C35.1205 26.4642 35.2279 26.0356 35.2816 25.607C35.4427 24.7499 35.4964 23.8928 35.4427 23.0356C35.4427 21.3213 35.1205 19.607 34.5298 17.9999C34.4761 17.7856 34.3687 17.6249 34.315 17.4106C34.2076 17.1963 34.1539 17.0356 34.0465 16.8213L33.8317 16.232L33.5095 15.6963C33.0261 14.9999 32.4891 14.3035 31.8984 13.7142C31.3077 13.1249 30.6096 12.5892 29.9115 12.1606L29.3745 11.8392C29.2671 11.7856 29.2134 11.732 29.106 11.6785L28.8375 11.5178C28.6227 11.4106 28.4616 11.357 28.2467 11.2499L27.656 11.0356C26.045 10.4463 24.3803 10.0713 22.6618 10.0178C20.9434 9.91061 19.225 10.1785 17.6139 10.7142C16.0029 11.3035 14.4993 12.1606 13.2105 13.2856C11.8679 14.4106 10.7402 15.7499 9.8273 17.1963Z"
              fill="#18133B"
            />
            <path
              d="M18.5269 13.2856C19.4935 13.0713 20.5138 13.0177 21.5341 13.1249C22.5544 13.232 23.521 13.4463 24.4877 13.7677C25.4543 14.0891 26.3135 14.6249 27.1727 15.1606C27.9782 15.7499 28.73 16.4463 29.3745 17.2499C30.0189 18.0534 30.5022 18.9641 30.8244 19.9284C30.8781 20.0356 30.9318 20.1427 30.9318 20.3034C30.9855 20.4106 30.9855 20.5713 31.0392 20.6784L31.1466 21.0534L31.2003 21.2141L31.254 21.3749L31.3077 21.7499C31.3077 21.857 31.3614 22.0177 31.3614 22.1249C31.4151 22.3927 31.4151 22.607 31.4151 22.8749C31.4688 23.8927 31.3077 24.9106 30.9855 25.8749C30.6633 26.8391 30.1263 27.6963 29.4819 28.4463C30.0189 27.6427 30.5022 26.732 30.717 25.7677C30.9855 24.8034 31.0392 23.8391 30.9855 22.8749C30.8244 20.9463 30.1263 19.0713 28.9449 17.5713C27.7634 16.0177 26.1524 14.8927 24.3803 14.1427C23.4674 13.7677 22.5544 13.4999 21.5878 13.3391C20.5138 13.232 19.5472 13.1784 18.5269 13.2856Z"
              fill="#18133B"
            />
            <path
              d="M2.04064 33.3213C2.04064 33.3213 -0.859211 22.8213 4.02758 14.5178C8.91437 6.2142 15.3048 4.3392 15.3048 4.3392C15.3048 4.3392 21.2119 2.35706 25.5617 3.48206C29.9115 4.60706 31.0929 5.24991 31.0929 5.24991C31.0929 5.24991 37 8.0892 38.5036 12.0535C40.0073 16.0178 40.9202 18.2678 39.0943 23.4642C37.2685 28.6606 32.0058 31.3928 32.0058 31.3928C32.0058 31.3928 28.0856 33.3213 24.2729 32.9999C20.5138 32.6785 20.5138 32.6785 20.5138 32.6785L20.0842 36.0535L22.447 35.7856L23.0377 36.0535C23.0377 36.0535 29.5356 38.5178 35.4427 34.4999C41.3498 30.4821 42.7997 24.9642 42.7997 24.9642C42.7997 24.9642 44.6255 18.7499 42.3701 13.5535C40.1147 8.35706 36.463 5.4642 36.463 5.4642C36.463 5.4642 32.7576 2.0892 28.1393 0.910628C23.521 -0.267944 20.4064 -0.375087 15.4659 0.910628C10.5254 2.19634 5.96082 6.9642 5.96082 6.9642C5.96082 6.9642 -0.107397 12.8571 5.24381e-06 22.1249C0.107407 31.3928 2.04064 33.3213 2.04064 33.3213Z"
              fill="#18133B"
            />
            <path
              d="M21.7489 0V3.16071C18.4195 3.32143 15.3585 4.33929 15.3585 4.33929C15.3585 4.33929 8.96807 6.21429 4.08128 14.5179C-0.80551 22.7679 2.04064 33.1607 2.04064 33.3214C1.93324 33.2679 0.107407 31.2321 5.24381e-06 22.125C-0.107397 12.8571 5.96082 6.96429 5.96082 6.96429C5.96082 6.96429 10.5254 2.25 15.4659 0.964286C17.8824 0.267857 19.8157 0 21.7489 0Z"
              fill="#FE612B"
            />
            <path
              d="M20.5138 32.6785C20.5138 32.6785 20.5138 32.6785 21.7489 32.7856V35.8928L20.0842 36.0535L20.5138 32.6785Z"
              fill="#1A2739"
            />
            <path
              d="M14.4993 36.5357L15.7344 37.5C15.7344 37.5 17.5065 38.5179 20.0842 37.5C22.1248 36.6965 22.8229 35.8929 23.0377 35.5715C23.0914 35.4643 23.1451 35.3572 23.2525 35.3036C23.7358 34.7143 25.2932 32.4107 24.8636 28.7679C24.3803 24.75 20.0842 21.9107 20.0842 21.9107C20.0842 21.9107 17.0769 19.5536 12.2975 20.3036C10.4717 20.5715 8.91436 21.4286 7.67924 22.3929C5.20899 24.3215 3.49056 27.0536 2.79244 30.1072C2.47024 31.4465 2.30914 33 2.57764 34.5L7.89404 37.0715L14.4993 36.5357Z"
              fill="url(#paint1_linear_12_222)"
            />
            <path
              d="M42.3164 35.9464C42.3164 35.9464 36.0334 48.75 20.3527 47.9464C4.7257 47.0893 2.52396 34.5 2.52396 34.5H14.8752C14.8752 34.5 15.5196 41.625 23.2525 44.1964C30.9855 46.7679 39.7925 40.7679 42.3164 35.9464Z"
              fill="#18133B"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_12_222"
              x1="18.8328"
              y1="4.95646"
              x2="23.6184"
              y2="17.0536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E7E8E5" />
              <stop offset="1" stopColor="#E0E1DF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_12_222"
              x1="2.40687"
              y1="29.0504"
              x2="24.9422"
              y2="29.0504"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#15CCD8" />
              <stop offset="1" stopColor="#0A8FA4" />
            </linearGradient>
            <clipPath id="clip0_12_222">
              <rect width="185" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* <nav> */}
      <ul className="flex gap-4 text-black text-[16px] font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Programs</Link>
        </li>
        <li>
          <Link href="/">Get Involved</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
      {/* </nav> */}

      <div className="flex gap-2">
        <button
          type="button"
          className="text-[#FE612B] border-[#FE612B] text-[14px] border-[1px] rounded-[8px] px-5 py-[10px]"
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
    </header>
  );
};
export default Header;
