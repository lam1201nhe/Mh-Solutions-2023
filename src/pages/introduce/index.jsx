import Link from "next/link";
import React from "react";

import NewsBoxRebuild from "@/components/NewsBoxRebuild";

const Introduce = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <NewsBoxRebuild />
    </div>
  );
};

export default Introduce;

// Introduce.getLayout = function getLayout(page) {
//   return (
//     <div className={styles.layout}>
//       <Navbar />
//       {page}
//       <FooterRebuild />
//     </div>
//   );
// };
