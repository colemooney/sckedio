import jacketOne from '../../../../assets/products/jacket/jacket-1.jpg';
import jacketTwo from '../../../../assets/products/jacket/jacket-2.jpg';
import jacketThree from '../../../../assets/products/jacket/jacket-3.jpg';

const fakeProducts = [
    {
        designer: "Jim's Designs",
        productTitle: 'Custom Jacket',
        interest: 3,
        image: [jacketOne,jacketTwo,jacketThree],
        category: 'Fashion',
        itemNum: 1001
    },
    {
        designer: "Kate's Designs",
        productTitle: 'Dog Bed',
        interest: 20,
        image: ['https://picsum.photos/225/280'],
        category: 'Other',
        itemNum: 1002
    },
    {
        designer: "Tim's Guitars",
        productTitle: '5 String Guitar',
        interest: 1,
        image: ['https://picsum.photos/225/280'],
        category: 'Other',
        itemNum: 1003
    },
    {
        designer: "Crazy Shirts",
        productTitle: 'A Crazy Shirt',
        interest: 13,
        image: ['https://picsum.photos/225/280'],
        category: 'Fashion',
        itemNum: 1004
    },
];

export default fakeProducts;