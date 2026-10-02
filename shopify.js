window.DECCAN_SHOPIFY = {
  DOMAIN: "hd3izv-i0.myshopify.com",
  ENABLED: false,
  PRODUCTS: {
    "iphone-leather": { handle: "iphone-leather-case" },
    "iphone-silicone": { handle: "iphone-silicone-case" },
    "iphone-clear": { handle: "iphone-clear-case" },
    "iphone-rugged": { handle: "iphone-rugged-case" },
    "magsafe-wallet": { handle: "magsafe-wallet-stand" },
    "station-3in1": { handle: "3-in-1-charging-station" },
    "gan": { handle: "65w-gan-charger" },
    "cable": { handle: "braided-usb-c-cable" }
  }
};
function shopifyBuyLink(handle){
  var d = window.DECCAN_SHOPIFY.DOMAIN;
  if(!d || d.indexOf("hd3izv-i0")!==-1) return "#contact";
  return "https://"+d+"/products/"+handle;
}
