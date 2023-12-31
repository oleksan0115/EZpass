import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
export default function Header() {
  return (
    <header className="w-full bg-white py-1">
      <div className="container-main">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center px-6 border gap-[16px] border-blue rounded-lg">
              <div className="flex flex-col items-center">
                <p className="text-xs text-blue leading-[1.2]">הצלחה: סגורות</p>
                <p className="font-rubikMedium text-md text-blue leading-[1.2]">
                  45%
                </p>
              </div>
              <div className="flex flex-col items-center px-4 border-l border-r border-blue">
                <p className="text-xs text-blue leading-[1.2]">הצלחה: פתוחות</p>
                <p className="font-rubikMedium text-md text-blue leading-[1.2]">
                  35%
                </p>
              </div>
              <div className="flex flex-col items-center px-4">
                <p className="text-xs text-blue leading-[1.2]">כיסוי</p>
                <p className="font-rubikMedium text-md text-blue leading-[1.2]">
                  32/65
                </p>
              </div>
            </div>
            <svg className="lg:hidden flex w-[30px] h-[27px] cursor-pointer opacity-80 hover:opacity-100"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_122_2503)">
                <path
                  d="M25 22.5C25.3186 22.5004 25.625 22.6223 25.8567 22.8411C26.0884 23.0598 26.2278 23.3587 26.2465 23.6767C26.2651 23.9948 26.1617 24.308 25.9572 24.5523C25.7527 24.7966 25.4626 24.9536 25.1463 24.9913L25 25H5C4.6814 24.9996 4.37496 24.8777 4.14329 24.6589C3.91162 24.4402 3.77221 24.1413 3.75353 23.8233C3.73486 23.5052 3.83834 23.192 4.04283 22.9477C4.24732 22.7034 4.53738 22.5464 4.85375 22.5087L5 22.5H25ZM25 13.75C25.3315 13.75 25.6495 13.8817 25.8839 14.1161C26.1183 14.3505 26.25 14.6685 26.25 15C26.25 15.3315 26.1183 15.6495 25.8839 15.8839C25.6495 16.1183 25.3315 16.25 25 16.25H5C4.66848 16.25 4.35054 16.1183 4.11612 15.8839C3.8817 15.6495 3.75 15.3315 3.75 15C3.75 14.6685 3.8817 14.3505 4.11612 14.1161C4.35054 13.8817 4.66848 13.75 5 13.75H25ZM25 5C25.3315 5 25.6495 5.1317 25.8839 5.36612C26.1183 5.60054 26.25 5.91848 26.25 6.25C26.25 6.58152 26.1183 6.89946 25.8839 7.13388C25.6495 7.3683 25.3315 7.5 25 7.5H5C4.66848 7.5 4.35054 7.3683 4.11612 7.13388C3.8817 6.89946 3.75 6.58152 3.75 6.25C3.75 5.91848 3.8817 5.60054 4.11612 5.36612C4.35054 5.1317 4.66848 5 5 5H25Z"
                  fill="#2E2E2E"
                />
              </g>
              <defs>
                <clipPath id="clip0_122_2503">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              className="w-[30px] h-[27px] cursor-pointer opacity-80 hover:opacity-100"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.625 15.6014C21.625 16.6343 21.2956 17.6441 20.6784 18.503C20.0612 19.362 19.1839 20.0316 18.1575 20.4273C17.131 20.823 16.0014 20.9269 14.9114 20.726C13.8214 20.5251 12.8199 20.0284 12.0335 19.2986C11.2471 18.5688 10.7111 17.6387 10.4932 16.6258C10.2753 15.613 10.3852 14.5628 10.8092 13.608C11.2332 12.6532 11.9522 11.8367 12.8753 11.2616C13.7983 10.6865 14.8841 10.3787 15.9953 10.377C16.7342 10.3758 17.466 10.5101 18.149 10.7722C18.832 11.0342 19.4526 11.4189 19.9755 11.9041C20.4984 12.3894 20.9132 12.9657 21.1963 13.6001C21.4793 14.2345 21.625 14.9146 21.625 15.6014Z"
                stroke="#2E2E2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.0908 19.4071C25.9089 19.7894 25.8545 20.2136 25.9347 20.6249C26.0148 21.0362 26.2258 21.4157 26.5404 21.7144L26.6222 21.7904C26.8872 22.0232 27.0993 22.3031 27.2459 22.6135C27.3926 22.9238 27.4708 23.2584 27.476 23.5973C27.4812 23.9362 27.4133 24.2727 27.2762 24.5868C27.1391 24.9009 26.9357 25.1863 26.6779 25.4261C26.4202 25.6659 26.1133 25.8552 25.7755 25.9829C25.4377 26.1106 25.0757 26.174 24.7111 26.1694C24.3465 26.1649 23.9865 26.0924 23.6525 25.9563C23.3185 25.8203 23.0173 25.6233 22.7665 25.3772L22.6848 25.3012C22.3659 25.0146 21.9635 24.8211 21.5276 24.7449C21.0916 24.6686 20.6412 24.7128 20.232 24.872C19.8228 25.0312 19.4727 25.2984 19.2252 25.6406C18.9777 25.9828 18.8436 26.3849 18.8394 26.7973V27.0129C18.8394 27.6853 18.552 28.3301 18.0405 28.8056C17.529 29.2811 16.8353 29.5482 16.1119 29.5482C15.3885 29.5482 14.6948 29.2811 14.1833 28.8056C13.6718 28.3301 13.3844 27.6853 13.3844 27.0129V26.8989C13.3742 26.4793 13.2282 26.0723 12.9655 25.7309C12.7029 25.3895 12.3357 25.1296 11.9119 24.9849C11.5006 24.8158 11.0443 24.7652 10.6018 24.8397C10.1593 24.9143 9.751 25.1104 9.42968 25.4028L9.34792 25.4788C9.09476 25.7145 8.79413 25.9016 8.4632 26.0293C8.13227 26.157 7.77752 26.2228 7.41921 26.2231C7.06089 26.2234 6.70603 26.158 6.37488 26.0308C6.04374 25.9036 5.74279 25.717 5.48922 25.4817C5.23565 25.2463 5.03443 24.9669 4.89705 24.6593C4.75966 24.3517 4.68881 24.0219 4.68852 23.6889C4.68824 23.3558 4.75853 23.0259 4.89539 22.7181C5.03225 22.4103 5.23299 22.1306 5.48615 21.8949L5.56791 21.8189C5.87699 21.5228 6.08587 21.1491 6.1687 20.7438C6.25152 20.3385 6.20465 19.9195 6.03388 19.5388C5.86311 19.158 5.57595 18.8322 5.20796 18.6016C4.83996 18.371 4.40729 18.2459 3.96352 18.2416H3.72746C3.00409 18.2416 2.31035 17.9745 1.79885 17.499C1.28736 17.0236 1 16.3787 1 15.7063C1 15.0339 1.28736 14.3891 1.79885 13.9136C2.31035 13.4381 3.00409 13.171 3.72746 13.171H3.85009C4.30079 13.1607 4.73774 13.0247 5.10421 12.7806C5.47068 12.5365 5.74973 12.1956 5.90513 11.8022C6.08703 11.42 6.14142 10.9958 6.06126 10.5844C5.98111 10.1731 5.7701 9.79362 5.4555 9.49494L5.37374 9.41895C4.86205 8.94281 4.5748 8.29722 4.57518 7.6242C4.57556 6.95119 4.86355 6.30589 5.37579 5.83025C5.88803 5.35461 6.58255 5.0876 7.30659 5.08795C8.03062 5.08831 8.72484 5.356 9.23654 5.83215L9.31829 5.90814C9.63961 6.20057 10.0479 6.39671 10.4904 6.47122C10.9329 6.54573 11.3892 6.49517 11.8005 6.32609H11.9098C12.3122 6.16571 12.6555 5.8996 12.8975 5.56042C13.1395 5.22125 13.2696 4.82378 13.272 4.4168V4.19738C13.272 3.52498 13.5594 2.88013 14.0709 2.40467C14.5824 1.92922 15.2761 1.66211 15.9995 1.66211C16.7229 1.66211 17.4166 1.92922 17.9281 2.40467C18.4396 2.88013 18.7269 3.52498 18.7269 4.19738V4.31137C18.7313 4.72362 18.8656 5.12563 19.1132 5.46768C19.3608 5.80973 19.7109 6.07681 20.12 6.2359C20.5292 6.39499 20.9796 6.43911 21.4154 6.36279C21.8513 6.28647 22.2535 6.09307 22.5724 5.8065L22.6541 5.73051C23.166 5.25487 23.8601 4.98771 24.5838 4.9878C25.3076 4.98788 26.0016 5.25522 26.5133 5.73098C27.025 6.20675 27.3124 6.85197 27.3124 7.52472C27.3123 8.19746 27.0247 8.84262 26.5128 9.31826L26.4311 9.39425C26.1165 9.69293 25.9055 10.0724 25.8253 10.4838C25.7452 10.8951 25.7995 11.3193 25.9814 11.7015V11.8032C26.1542 12.1781 26.4412 12.4979 26.8071 12.7231C27.173 12.9483 27.6018 13.069 28.0406 13.0703H28.2725C28.9959 13.0703 29.6896 13.3375 30.2011 13.8129C30.7126 14.2884 31 14.9332 31 15.6056C31 16.278 30.7126 16.9229 30.2011 17.3983C29.6896 17.8738 28.9959 18.1409 28.2725 18.1409H28.1499C27.7111 18.1423 27.2823 18.263 26.9164 18.4881C26.5505 18.7133 26.2635 19.0321 26.0908 19.4071Z"
                stroke="#2E2E2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[153px]">
            <ul className="hidden lg:flex items-center gap-[60px]">
              <li>
                <a
                  href="#"
                  className="relative nav-link flex pb-1 font-rubikSemibold text-lg text-black hover:text-blue transition-all"
                >
                  התקדמות
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative nav-link flex pb-1 font-rubikSemibold text-lg text-black hover:text-blue transition-all"
                >
                  לימוד
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="active relative nav-link flex pb-1 font-rubikSemibold text-lg text-black hover:text-blue transition-all"
                >
                  תרגול
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <p className="hidden xl:flex text-lg text-black font-rubikSemibold">
                ברוך הבא: משה אדם
              </p>
              <div className="w-[145px]">
                <Image alt="Website Logo" src={Logo} width={150} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
