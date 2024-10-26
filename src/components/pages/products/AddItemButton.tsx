import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import Button from '@/components/common/Button';
const AddItemButton: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    console.log(`Added ${quantity} item(s) to the cart.`);
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="flex text-center">
        <button
          className="rounded-full bg-gray-200 p-1 text-white"
          onClick={decreaseQuantity}
        >
          <MinusIcon />
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-12 text-center"
        />
        <button
          className="rounded-full bg-gray-200 p-1 text-white"
          onClick={increaseQuantity}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="mx-4">
        <Button
          backgroundColor="bg-purple"
          icon={null}
          textColor="text-white"
          borderColor="border-purple-100"
          hoverBackgroundColor="hover:bg-purple-100"
          paddingX="3"
          paddingY="0"
          isWidthFull={false}
          onClick={() => {
            addToCart();
          }}
        >
          สั่งซื้อ
        </Button>
      </div>
    </div>
  );
};

export default AddItemButton;
