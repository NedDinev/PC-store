function pcStore(input) {
  let dollarPriceProcessor = Number(input[0]) * 1.57;
  let dollarPriceVideocard = Number(input[1]) * 1.57;
  let dollarPriceRam = Number(input[2]) * 1.57;
  let ramQuantity = Number(input[3]);
  let percentDiscount = Number(input[4]);

  let priceOfRam = dollarPriceRam * ramQuantity;
  let discountedProcessor =
    dollarPriceProcessor - dollarPriceProcessor * percentDiscount;
  let discountedVideocard =
    dollarPriceVideocard - dollarPriceVideocard * percentDiscount;

  let finalPrice = priceOfRam + discountedProcessor + discountedVideocard;
  console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`);
}
pcStore(["500", "200", "80", "2", "0.05"]);
