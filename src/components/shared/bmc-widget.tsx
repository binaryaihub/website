"use client";

import Script from "next/script";

export function BmcWidget() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="BINARYAIHUB"
      data-description="Support me on Buy me a coffee!"
      data-message="Thanks for visiting! If you enjoy our work, consider buying us a coffee."
      data-color="#FFDD00"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      strategy="lazyOnload"
    />
  );
}
