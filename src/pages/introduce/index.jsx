import Link from "next/link";
import React from "react";

import NewsBoxRebuild from "@/components/NewsBoxRebuild";
import FooterMobile from "@/components/FooterMobile";
import SlidesPartnerMobile from "@/components/SlidesPartnerMobile";

const Introduce = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      {/* <NewsBoxRebuild /> */}
      <SlidesPartnerMobile />
    </div>
  );
};

export default Introduce;

// Introduce.getLayout = function getLayout(page) {
//   return (
//     <div>
//       <Navbar />
//       {page}
//       <FooterRebuild />
//     </div>
//   );
// };
