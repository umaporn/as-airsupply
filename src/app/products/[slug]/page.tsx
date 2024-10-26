import type { Metadata } from 'next';
import ProductDetail from '@/components/pages/products/ProductDetail';
import Breadcrumb from '@/components/common/Breadcrumb';
import ReviewCard from '@/components/pages/sample/ReviewCard';
import ProductSection from '@/components/pages/home/ProductSection';

interface productDetailProps {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: 'ร้านแอร์ หรีดมาลา ส่งแอร์ราคาย่อมเยา ส่งตรงถึงวัด',
  description:
    'ร้านแอร์ออนไลน์ บริการจัดส่งแอร์ที่เราคัดสรรมาอย่างดี ราคาเป็นมิตร สั่งซื้อง่าย จัดส่งไวอยู่ใกล้วัด จัดส่งฟรีทั่ว กทม. พร้อมโปรสุดพิเศษ',
  alternates: {
    canonical: 'https://www.as-airsupply.com/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
    },
  },
  openGraph: {
    url: 'https://www.as-airsupply.com/',
    type: 'website',
  },
};
const breadcrumbItems = [
  { href: '/', label: 'ร้านแอร์' },
  { href: '/products', label: 'แอร์ประเภท' },
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

const ProductDetailPage = ({ params: { slug } }: productDetailProps) => {
  const productNameText = decodeURI(slug);
  return (
    <>
      <div className="container flex flex-col space-y-4 px-[24px] py-4 pt-8 md:px-[72px]">
        <Breadcrumb
          items={[
            ...breadcrumbItems,
            {
              href: '#',
              label: productNameText,
            },
          ]}
        />
        <ProductDetail
          productName="แอร์ประเภท รหัส 0320"
          price={2090}
          productId="0320"
          description="แอร์ประเภท โทนสีขาว-เขียว มีขนาดเส้นผ่านศูนย์กลางโดยประมาณ 70-80 ซม."
          imgSrc="/images/product-img.webp"
        />
        <div className="container mx-auto mt-16 space-y-8 py-2">
          <h2 className="text-lg text-purple">รีวิวจากลูกค้า</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard
                imageUrl={review.imageUrl}
                title={review.title}
                code={review.code}
                description={review.description}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
        <ProductSection
          title={'สินค้าใกล้เคียง'}
          titleAlign="left"
          hasButton={false}
          displayDescription={false}
          displayPriceRange={false}
        />
      </div>
    </>
  );
};

export default ProductDetailPage;
