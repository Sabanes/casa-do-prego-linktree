"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <>

    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: .5 }}
    className="gap-14 py-20 rounded-md bg-[#F8F3EA] flex flex-col items-center justify-center relative w-full">
      <Image src={logo} alt="logo" width={250} height={250} className=" md:w-[400px] md:h-[240px] " />
        <p className=" text-[#798645] leading-[1.25] px-2 text-center md:text-[3rem] font-bold tracking-wider text-[2rem]">Tradition Portuguese <br /> Food Restourant <br />  </p>
        <div className="flex flex-col gap-7 items-center z-20">
          <Button text={"Menu"} link="#"/>
          <Button text={"Find us"} link="https://maps.app.goo.gl/R3WtNUSLj9n99ndHA"/>
          <Button text={"Leave a review"} link="https://www.tripadvisor.com/UserReviewEdit-g189164-d23959309-Casa_Do_Prego_Vila_De_Sintra-Sintra_Sintra_Municipality_Lisbon_District_Central_Portugal.html"/>
          <Button text={"Book a table"} link="https://wa.me/351967949807"/>

          <div className="flex flex-row gap-5 justify-center items-center">
            <a href="https://wa.me/351967949807">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39933 33.665L3.54517 44.0862L14.2098 41.2897C17.1483 42.8921 20.4565 43.7367 23.8231 43.738H23.8318C34.9191 43.738 43.9447 34.7151 43.9496 23.627C43.9515 18.2529 41.8603 13.2001 38.0627 9.39872C34.2639 5.59731 29.2131 3.50311 23.8318 3.50049C12.7426 3.50049 3.71848 12.5219 3.71397 23.6108C3.71284 27.1552 4.63898 30.6153 6.39933 33.665ZM7.11072 23.6118C7.11411 14.3956 14.6149 6.89758 23.8382 6.89758C28.3047 6.89947 32.5025 8.64018 35.6596 11.7995C38.8167 14.9589 40.5541 19.159 40.5525 23.6254C40.5487 32.8424 33.048 40.3412 23.8317 40.3412H23.8254C20.8243 40.3397 17.8816 39.5342 15.3149 38.0108L14.7038 37.6487L8.37517 39.3081L10.0648 33.1401L9.66689 32.5078C7.9932 29.8462 7.10935 26.7701 7.11072 23.6118Z" fill="#075E54"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8039 15.2031C18.4272 14.3663 18.0308 14.3493 17.6728 14.3346C17.3797 14.3222 17.0444 14.3229 16.7094 14.3229C16.374 14.3229 15.8296 14.4488 15.3692 14.9518C14.9083 15.4548 13.6096 16.6707 13.6096 19.1439C13.6096 21.6172 15.411 24.0068 15.6619 24.3425C15.9132 24.6778 19.1393 29.9152 24.2489 31.9299C28.4949 33.6043 29.3589 33.2712 30.2809 33.1876C31.2025 33.1039 33.2549 31.9717 33.6735 30.798C34.0925 29.6243 34.0925 28.6186 33.967 28.4084C33.8411 28.1985 33.5062 28.0731 33.0032 27.8217C32.5005 27.5704 30.0292 26.3542 29.5684 26.1865C29.1076 26.0188 28.7726 25.9352 28.4373 26.4382C28.1023 26.9412 27.1396 28.0731 26.8461 28.4084C26.553 28.7441 26.2598 28.7859 25.7568 28.5346C25.2542 28.2826 23.6351 27.7524 21.7146 26.0399C20.2203 24.7076 19.2116 23.0622 18.9181 22.5591C18.625 22.0561 18.8868 21.7841 19.1389 21.5335C19.3646 21.3082 19.6415 20.9465 19.8932 20.653C20.1438 20.3595 20.2278 20.15 20.3951 19.815C20.5628 19.4793 20.4791 19.1858 20.3533 18.9344C20.2278 18.6831 19.2508 16.1971 18.8039 15.2031Z" fill="#075E54"/>
          </svg>
            </a>
          <a href="https://www.instagram.com/casadopregosintra?igsh=MTJtaXViams1cW90dQ==">
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0018 0C17.4837 0 16.6657 0.0285005 14.1056 0.145C11.5506 0.262 9.8066 0.6665 8.28059 1.26C6.70207 1.873 5.36306 2.693 4.02904 4.0275C2.69403 5.3615 1.87402 6.7005 1.25901 8.2785C0.664007 9.805 0.259003 11.5495 0.144002 14.1035C0.0300004 16.6635 0 17.482 0 24C0 30.518 0.0290008 31.3335 0.145002 33.8935C0.262503 36.4485 0.667007 38.1925 1.26001 39.7185C1.87352 41.297 2.69353 42.636 4.02804 43.97C5.36156 45.305 6.70057 46.127 8.27809 46.74C9.8051 47.3335 11.5496 47.738 14.1041 47.855C16.6642 47.9715 17.4817 48 23.9993 48C30.5178 48 31.3333 47.9715 33.8934 47.855C36.4484 47.738 38.1944 47.3335 39.7214 46.74C41.2994 46.127 42.6364 45.305 43.97 43.97C45.305 42.636 46.125 41.297 46.74 39.719C47.33 38.1925 47.735 36.448 47.855 33.894C47.97 31.334 48 30.518 48 24C48 17.482 47.97 16.664 47.855 14.104C47.735 11.549 47.33 9.805 46.74 8.279C46.125 6.7005 45.305 5.3615 43.97 4.0275C42.6349 2.6925 41.2999 1.8725 39.7199 1.26C38.1899 0.6665 36.4449 0.262 33.8899 0.145C31.3298 0.0285005 30.5148 0 23.9947 0H24.0018ZM21.8487 4.325C22.4877 4.324 23.2007 4.325 24.0018 4.325C30.4098 4.325 31.1693 4.348 33.6999 4.463C36.0399 4.57 37.3099 4.961 38.1559 5.2895C39.2759 5.7245 40.0744 6.2445 40.9139 7.0845C41.7539 7.9245 42.2739 8.7245 42.7099 9.8445C43.0385 10.6895 43.43 11.9595 43.5365 14.2995C43.6515 16.8295 43.6765 17.5895 43.6765 23.9945C43.6765 30.3995 43.6515 31.1595 43.5365 33.6895C43.4295 36.0295 43.0385 37.2995 42.7099 38.1445C42.2749 39.2645 41.7539 40.062 40.9139 40.9015C40.0739 41.7415 39.2764 42.2615 38.1559 42.6965C37.3109 43.0265 36.0399 43.4165 33.6999 43.5235C31.1698 43.6385 30.4098 43.6635 24.0018 43.6635C17.5932 43.6635 16.8337 43.6385 14.3036 43.5235C11.9636 43.4155 10.6936 43.0245 9.8471 42.696C8.72709 42.261 7.92708 41.741 7.08707 40.901C6.24707 40.061 5.72706 39.263 5.29106 38.1425C4.96255 37.2975 4.57105 36.0275 4.46455 33.6875C4.34955 31.1575 4.32655 30.3975 4.32655 23.9885C4.32655 17.5795 4.34955 16.8235 4.46455 14.2935C4.57155 11.9535 4.96255 10.6835 5.29106 9.8375C5.72606 8.7175 6.24707 7.9175 7.08707 7.0775C7.92708 6.2375 8.72709 5.7175 9.8471 5.2815C10.6931 4.9515 11.9636 4.5615 14.3036 4.454C16.5177 4.354 17.3757 4.324 21.8487 4.319V4.325Z" fill="#C13584"/>
          <path d="M36.7613 8.25105C36.1916 8.25105 35.6347 8.41998 35.1611 8.73648C34.6875 9.05299 34.3183 9.50284 34.1004 10.0291C33.8824 10.5555 33.8254 11.1346 33.9367 11.6933C34.0479 12.252 34.3223 12.7651 34.7251 13.1679C35.128 13.5706 35.6413 13.8448 36.2 13.9558C36.7588 14.0668 37.3379 14.0097 37.8641 13.7915C38.3903 13.5734 38.8401 13.2041 39.1564 12.7304C39.4728 12.2566 39.6415 11.6997 39.6413 11.13C39.6413 9.54004 38.3513 8.25105 36.7613 8.25105Z" fill="#C13584"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9501 11.616C17.1436 11.616 11.625 17.1345 11.625 23.941C11.625 30.7475 17.1436 36.2635 23.9501 36.2635C30.7567 36.2635 36.2738 30.7475 36.2738 23.941C36.2738 17.1345 30.7567 11.616 23.9501 11.616ZM24 31.875C28.3493 31.875 31.875 28.3493 31.875 24C31.875 19.6508 28.3493 16.125 24 16.125C19.6508 16.125 16.125 19.6508 16.125 24C16.125 28.3493 19.6508 31.875 24 31.875Z" fill="#C13584"/>
          </svg>
          </a>

          </div>

        </div>
      <ShootingStars />
      <StarsBackground />
    </motion.div>
    </>
  );
}

