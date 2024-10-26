import ResponsiveImage from '@/components/common/Image';
import Form from './Form';
import Font from './Font';
import Sizing from './Sizing';
import Color from './Color';
import Button from './Button';
import ProductFilter from './Filter';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductCard from '@/components/pages/products/Card';
import ProductCarousel from '@/components/pages/products/Carousel';
import ReviewCard from '../sample/ReviewCard';
import ArticleCard from '../articles/Card';
import ContactMethods from '@/components/common/ContactMethods';
import PaymentMethods from '@/components/common/PaymentMethods';
import Pagination from '@/components/common/Pagination';
import Modal from './Modal';

interface SectionToggleProps {
  id: string;
  title: string;
  isActive: boolean;
}
const breadcrumbItems = [
  { href: '/', label: 'หน้าหลัก' },
  { href: '/', label: 'ร้านแอร์' },
  { href: '/', label: 'แอร์พัดลม' },
  { href: '/', label: 'แอร์พัดลม 16 นิ้ว' },
];

const products = [
  { sku: 'A001', price: 1590 },
  { sku: 'B002', price: 1490 },
  { sku: 'C003', price: 1390 },
  { sku: 'C004', price: 1290 },
  { sku: 'C005', price: 1190 },
  { sku: 'C005', price: 1190 },
  { sku: 'C005', price: 1190 },
  { sku: 'C005', price: 1190 },
];

const articles = [
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'แอร์ต้นไม้มีดีอย่างไร?',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'แอร์ต้นไม้มีดีอย่างไร?',
  },
  {
    imageUrl: '/images/thumbnail.webp',
    title: 'แอร์ต้นไม้มีดีอย่างไร?',
  },
];

const reviews = [
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0112',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0113',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
  },
  {
    imageUrl: '/images/review-card.webp',
    title: 'แอร์ประเภท',
    code: '0114',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 3,
  },
];

const SectionToggle = ({ id, title, isActive }: SectionToggleProps) => {
  return (
    <div className={`mb-4 ${isActive ? 'block' : 'hidden'}`}>
      <h2 className="mb-4 text-md">{title}</h2>
      <div>
        {id === 'fonts' && <Font />}
        {id === 'sizing' && <Sizing />}
        {id === 'colors' && <Color />}
        {id === 'buttons' && <Button />}
        {id === 'breadcrumbs' && <Breadcrumb items={breadcrumbItems} />}
        {id === 'image' && (
          <div className="max-w-sm rounded-lg border p-4 shadow-md">
            <ResponsiveImage
              desktopSrc="/images/product-img.webp"
              mobileSrc="/images/product-img.webp"
              alt="Product"
              className="w-full"
            />
          </div>
        )}
        {id === 'form' && <Form />}
        {id === 'modal' && <Modal />}
        {id === 'product-cards' && (
          <div>
            <div className="mx-auto grid w-full grid-cols-2  gap-6 md:w-4/6 md:grid-cols-3">
              <ProductCard sku="0111" price={1490} />
              <ProductCard sku="0112" price={1590} />
              <ProductCard sku="0113" price={1690} />
            </div>
          </div>
        )}
        {id === 'product-carousel' && <ProductCarousel products={products} />}
        {id === 'product-filter' && <ProductFilter />}
        {id === 'review-cards' && (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                imageUrl={review.imageUrl}
                title={review.title}
                code={review.code}
                description={review.description}
                rating={review.rating}
              />
            ))}
          </div>
        )}
        {id === 'article-cards' && (
          <div className="flex flex-wrap">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                imageUrl={article.imageUrl}
                title={article.title}
              />
            ))}
          </div>
        )}
        {id === 'how-to-order' && <ContactMethods isColor={true} />}
        {id === 'bank-transfer' && <PaymentMethods />}
        {id === 'pagination' && <Pagination currentPage={1} totalPages={10} />}
      </div>
    </div>
  );
};

export default SectionToggle;
