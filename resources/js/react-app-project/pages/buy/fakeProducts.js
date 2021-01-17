import jacketOne from '../../../../assets/products/jacket/jacket-1.jpg';
import jacketTwo from '../../../../assets/products/jacket/jacket-2.jpg';
import jacketThree from '../../../../assets/products/jacket/jacket-3.jpg';
import dogBedOne from '../../../../assets/products/dog-bed/dog-bed-1.jpg';
import dogBedTwo from '../../../../assets/products/dog-bed/dog-bed-2.jpg';
import dogBedThree from '../../../../assets/products/dog-bed/dog-bed-3.jpg';
import guitarOne from '../../../../assets/products/guitar/guitar-1.jpg';
import guitarTwo from '../../../../assets/products/guitar/guitar-2.jpg';
import guitarThree from '../../../../assets/products/guitar/guitar-3.jpg';
import shirtOne from '../../../../assets/products/shirt/shirt-1.jpg';
import shirtTwo from '../../../../assets/products/shirt/shirt-2.jpg';
import shirtThree from '../../../../assets/products/shirt/shirt-3.jpg';

const fakeProducts = [
    {
        designer: "Jim's Designs",
        productTitle: 'Custom Jacket',
        interest: 3,
        image: [jacketOne,jacketTwo,jacketThree],
        category: 'Fashion',
        itemNum: 1001,
        description: 'Custom made denim Pokemon jacket. All sizes available. Choose your favorite character.'
    },
    {
        designer: "Kate's Designs",
        productTitle: 'Dog Bed',
        interest: 20,
        image: [dogBedOne,dogBedTwo,dogBedThree],
        category: 'Other',
        itemNum: 1002,
        description: 'Made from 100% organic materials. Washer safe. Available in any size and color.'
    },
    {
        designer: "Tim's Guitars",
        productTitle: '5 String Guitar',
        interest: 1,
        image: [guitarOne,guitarTwo,guitarThree],
        category: 'Other',
        itemNum: 1003,
        description: 'Who needs the 6th string anyway?! A totally unique playing experience. Custom fretboard inlays available.'
    },
    {
        designer: "Crazy Shirts",
        productTitle: 'A Crazy Shirt',
        interest: 13,
        image: [shirtOne,shirtTwo,shirtThree],
        category: 'Fashion',
        itemNum: 1004,
        description: '100% rayon. Includes detail of any word you want (example says "Florida"). Available in all sizes.'
    },
];

export default fakeProducts;