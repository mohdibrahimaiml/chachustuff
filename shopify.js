window.DECCAN_SHOPIFY = {
  DOMAIN: "hd3izv-i0.myshopify.com",
  ENABLED: false,
  PRODUCTS: {
    "iphone-leather": { handle: "iphone-leather-case" },
    "iphone-clear": { handle: "iphone-clear-case" },
    "android-case": { handle: "android-armor-case" },
    "magsafe": { handle: "magsafe-wireless-pad" },
    "gan": { handle: "65w-gan-charger" },
    "cable": { handle: "braided-usb-c-cable" },
    "glass": { handle: "tempered-glass-9h" },
    "holder": { handle: "alloy-phone-holder" }
  }
};
function shopifyBuyLink(handle){
  var d = window.DECCAN_SHOPIFY.DOMAIN;
  if(!d || d.indexOf("hd3izv-i0")!==-1) return "#contact";
  return "https://"+d+"/products/"+handle;
}
