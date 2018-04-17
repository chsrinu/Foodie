import { Images } from './images';

export const fontSizes = {
  descriptiveTextFontSize: 30,
  buttonTextSize: 50,
  itemHeadingFontSize: 40,
  appTitleFontSize: 60
};
export const colors = {
  descriptiveTextColor: '#000000',
  buttonBgColor: '#000000',
  buttonTextColor: '#ffffff',
  listBottomColor: 'grey',
  listItemActiveColor: '#ff7961'
};
export const pizzaData = [
{
  key: 1,
  name: 'Margherita',
  img: Images.pizza1,
  desc: 'A hugely popular margherita, with a deliciously tangy single cheese topping'
},
{
  key: 2,
  name: 'Margherita Double Cheese',
  img: Images.pizza2,
  desc: 'The ever-popular Margherita - loaded with extra cheese... oodies of it!'

},
{
  key: 3,
  name: 'Mexican Greenwave',
  img: Images.pizza3,
  desc: `A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and
  jalapeno with a liberal sprinkling of exotic Mexican herbs.`

},
{
  key: 4,
  name: 'Peppy panner',
  img: Images.pizza4,
  desc: 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!'

},
{
  key: 5,
  name: 'Deluxe veggie',
  img: Images.pizza5,
  desc: `For a vegetarian looking for a BIG treat that goes easy on the spices,
  this one's got it all..`

},
{
  key: 6,
  name: 'Farm House Pizza',
  img: Images.pizza6,
  desc: `Check out this mouth watering overload of crunchy, crisp capsicum,
   succulent mushrooms and fresh tomatoes`
}
];
