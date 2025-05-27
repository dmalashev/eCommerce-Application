import ProductCard from '../../components/product-card/ProductCard';
import coverImg1 from '../../assets/temporary/David-bowie-lets-dance.jpg';
import coverImg2 from '../../assets/temporary/m1000x1000.jfif';
import { ContentObject } from '../../assets/temporary/temporary';

// TODO: replace card objects with corresponding obj from API
const card1: ContentObject = {
  cover: coverImg1,
  name: "Let's Dance",
  author: 'David Bowie',
  year: 1983,
  price: 14.99,
};

const card2: ContentObject = {
  cover: coverImg2,
  name: 'Городские и цыганские романсы и несколько своих из концертов (В Клубе "пушкарев" 21 И 24 Января 2021 Live)',
  author: 'Пётр Налич, Иван Жук',
  year: 2022,
  price: 9.99,
  discount: 0.3,
};

export default function Catalog() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap',
        padding: '30px',
      }}
    >
      <ProductCard content={card1} />
      <ProductCard content={card2} />
    </div>
  );
}
