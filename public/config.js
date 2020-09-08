const primaryColor = '#fff';
const secondaryColor = 'rgb(0,255,255)';
const themeStandardSize = 10;
const logoLocation = "/logo192.png";

const getSize = x => x * themeStandardSize;

window.runTimeConfig = {
    body : {
        background_color : primaryColor,
    },
    header : {
        background_color : secondaryColor,
    },
    footer : {
        background_color : secondaryColor,
    },
    section : {
        dummy_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in purus posuere, tempus lorem vel, luctus enim. Phasellus sodales, mi at efficitur luctus, lacus orci auctor libero, et volutpat ex nisl sed urna. Ut sem augue, maximus et nisi id, faucibus suscipit tellus. Ut cursus, libero at sodales malesuada, augue dui finibus justo, condimentum ullamcorper sem neque vel erat. Curabitur fermentum cursus odio. Morbi blandit erat a nibh facilisis, non posuere lacus rhoncus. Proin tellus tellus, aliquam et facilisis ac, rhoncus et tellus. Sed eget diam efficitur, tincidunt quam sed, aliquam elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ex massa, suscipit ut cursus eu, auctor nec diam. Suspendisse tincidunt dictum tortor et rhoncus. Aliquam erat volutpat."
    },
    general : {
        getSize,
        primaryColor,
        secondaryColor,
        logoLocation
    }
}
