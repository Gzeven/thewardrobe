const SHOP_DATA = [
  {
    title: 'Hoeden',
    items: [
      {
        id: 1,
        name: 'Bruine Fedora',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blauwe Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Bruine Cowboyhoed',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
      },
      {
        id: 4,
        name: 'Grijse Fedora',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Groene Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Pet Palmboom',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Rode Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Pet Wolf',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blauwe Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
      {
        id: 10,
        name: 'Snapback New York',
        imageUrl:
          'https://www.snipes.nl/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwde7900f8/2157808_P.jpg?sw=780&sh=780&sm=fit&sfrm=png',
        price: 18,
      },
      {
        id: 11,
        name: 'Zwarte Fedora',
        imageUrl:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbgH8pRASxIJQSsxQNDvU5hwJGjKK5jtBRcczK8fOvFYfDvdL3_l9LCnOmeS_O1T-rkJrVg9I7PdpoRYlh4bDEHVe4npODeEhpGq5CniQ&usqp=CAE',
        price: 30,
      },
      {
        id: 12,
        name: 'Beanie North Face',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKzTBjW4gt4-pYctyJ4vtMLzjAOe0aHg-H2jI2EEVUhyqfK2rCcDTGvaB9aqYQ_4AJDta9kEq_hDbRtdrlhb6DAQUvgsDE5eu7b_Pb0WWvQP8dIy026Pwe0g&usqp=CAE',
        price: 30,
      },
      {
        id: 13,
        name: 'Beanie Geel',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToI-kGJ7dkHVGGNsM9lqMCEKzJFSNyDWSzGdtHrjzAZZ35XTcANfOdHGRs4F97u1LuUMp1PuOYqoBV1DKw4eA4KlEHobr5BGHqRSmBB2QpuVRXIDoQXM7cgw&usqp=CAE',
        price: 18,
      },
      {
        id: 14,
        name: 'Beanie Zwart',
        imageUrl: 'https://media.s-bol.com/31lJl3xoO9l4/550x496.jpg',
        price: 18,
      },
      {
        id: 15,
        name: 'Cap Springboks',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 30,
      },
      {
        id: 15,
        name: 'Witte Fedora',
        imageUrl: 'https://hatroom.nl/images/zoom/img_4830.jpg',
        price: 55,
      },
    ],
  },
  {
    title: 'Schoenen',
    items: [
      {
        id: 16,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 17,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 18,
        name: 'Converse Zwart',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 19,
        name: 'Nike AirForce Wit',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 20,
        name: 'Nike High Tops Rood',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 21,
        name: 'Nike High Tops Bruin',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 22,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 23,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
      {
        id: 24,
        name: 'Reebok Wit',
        imageUrl:
          'https://img01.ztat.net/article/spp-media-p1/5e85464e8ef742409e36729f1d1d7783/1cd1cfbb942a4478bd9b117ebca427f8.jpg?imwidth=1800&filter=packshot',
        price: 80,
      },
      {
        id: 25,
        name: 'Chuncky Zwart',
        imageUrl:
          'https://martinvalen.com/17941-large_default/chunky-sneakers-suede-schoenen-zwart.jpg',
        price: 90,
      },
      {
        id: 26,
        name: 'Reebok Classic',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0473/6965/0340/products/ef225c16354c731a41746231f1ea2f3fec8a8c14_GX2257_Reebok_Classic_Leather_Vector_Blue_Footwear_White_Vector_Red_os_1_bf7bfbfe-7ae3-4d4d-a297-d6e043c75f7d_768x768.jpg?v=1667990148',
        price: 49,
      },
      {
        id: 27,
        name: 'Martin Valen Wit',
        imageUrl:
          'https://martinvalen.com/22215-large_default/heren-low-top-sneakers-schoenen-wit.jpg',
        price: 90,
      },
      {
        id: 28,
        name: 'Air Jordan 3',
        imageUrl:
          'https://cdn.luxe.digital/media/20220316140635/most-expensive-sneakers-dj-khaled-x-air-jordan-3-grateful-review-luxe-digital-780x520.jpg.webp',
        price: 2000,
      },
    ],
  },
  {
    title: 'Jassen',
    items: [
      {
        id: 29,
        name: 'Blauwe Denim',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 30,
        name: 'Lichtblauwe Denim',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 31,
        name: 'Grijze Denim',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 32,
        name: 'Bruine jas met bontkraag',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 33,
        name: 'Lichtbruine Regenjas',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
      {
        id: 34,
        name: 'Waxjas Edinburgh Bruin',
        imageUrl:
          'https://www.countrylifestyle.nl/uploads/img/waxjas-edinburgh-bruin_181218155002.jpg',
        price: 259,
      },
      {
        id: 35,
        name: 'Wollen jas',
        imageUrl:
          'https://static.zara.net/photos///2022/I/0/3/p/1068/708/746/2/w/563/1068708746_6_1_1.jpg?ts=1660043442642',
        price: 36,
      },
      {
        id: 36,
        name: 'Bruine Wollen jas',
        imageUrl:
          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJTbhpQovJ827smMYqWDgXfrvH0QfOs9k958odtbXaqIahvh_H37W5jugJWt4fNRgt8msRiwnd5aeP4WoQCnRDhZiWiv86Fh2BZizfC6FJQpwFFQJ3HlBv&usqp=CAE',
        price: 60,
      },
      {
        id: 37,
        name: 'Giacomo Jas Blauw',
        imageUrl:
          'https://www.vantilburgonline.nl/img/giacomo-jas-blauw-6638631_705x705_1398185.jpg',
        price: 189,
      },
    ],
  },
  {
    title: 'Dames',
    items: [
      {
        id: 38,
        name: 'Blauwe Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 39,
        name: 'Blouse bloemen',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 40,
        name: 'Bloemenjurk',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 41,
        name: 'Jurk Rode Stippen',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 42,
        name: 'Gestreepte Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 43,
        name: 'Gele Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 44,
        name: 'Witte Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
      {
        id: 45,
        name: 'Jurk Vlinders',
        imageUrl:
          'https://invito.xcdn.nl/xlarge/femme9-jurken-multicolor/010222.47-0.jpg',
        price: 89,
      },
      {
        id: 46,
        name: 'Jurk Groen Haylee',
        imageUrl:
          'https://leballon.xcdn.nl/xlarge/annevera-midi-jurken-groen-haylee/011450-0.jpg',
        price: 40,
      },
      {
        id: 47,
        name: 'Rode Jurk',
        imageUrl:
          'https://www.omoda.nl/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dwf522599d/34/P129534/250102_1.jpg?sw=650&sh=650&sm=fit',
        price: 100,
      },
      {
        id: 48,
        name: 'Mini-jurk Groen',
        imageUrl:
          'https://www.omoda.nl/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw6a47a679/48/P125448/243360_1.jpg?sw=650&sh=650&sm=fit',
        price: 119,
      },
    ],
  },
  {
    title: 'Heren',
    items: [
      {
        id: 49,
        name: 'Camouflage vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 50,
        name: 'T-shirt bloemen',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 51,
        name: 'Zwart/Wit Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 52,
        name: 'Roze T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 53,
        name: 'Spijkerstof Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 54,
        name: 'Bordeaux T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
      {
        id: 55,
        name: 'Rusty Neal T-shirt',
        imageUrl:
          'https://www.italian-style.nl/wp-content/uploads/2021/07/eng_pl_Mens-printed-t-shirt-S1283-white-orange-15002_1.jpg',
        price: 29,
      },
      {
        id: 56,
        name: 'Zwarte T-Shirt schedel',
        imageUrl:
          'https://badass-fashion.com/wp-content/uploads/2018/04/skull-tshirt-gliter-mannen.jpg',
        price: 29,
      },
      {
        id: 57,
        name: 'Golf Blue T-shirt',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUaqWya7SXX_IY64uTt77zkrDv63_fYTRog&usqp=CAU',
        price: 25,
      },
      {
        id: 58,
        name: 'Eagle T-shirt',
        imageUrl:
          'https://img.joomcdn.net/9302ef10be84927ac33ae9b15a5cd068f6d4d1bb_original.jpeg',
        price: 15,
      },
    ],
  },
];

export default SHOP_DATA;
