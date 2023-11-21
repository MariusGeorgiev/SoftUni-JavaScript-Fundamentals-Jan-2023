function fancyBarcode(barcodes) {

    let pattern = /([@])([#]+)(?<product>[A-Z][a-zA-Z0-9]{4,}[A-Z])\1[#]+/g;
    let barcodeCount = barcodes.shift();
    let productGroup = [];

    for (let i = 0; i < barcodeCount; i++) {
        let line = barcodes[i];
        if (pattern.test(line)) {
            let matched = line.match(pattern).toString()
            let words = matched.split("")
            for (const el of words) {
                if (!isNaN(el)) {
                    productGroup.push(el);
                }
            }
            if (productGroup.length === 0) {
                console.log("Product group: 00");
            } else {
                console.log(`Product group: ${productGroup.join("")}`);
                productGroup = [];
            }
 
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcode([
    "3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"
])
console.log("----------");
fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
