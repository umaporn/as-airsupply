import React from 'react';
import Button from '../../common/Button';

const MyComponent = () => {
  return (
    <div className="space-x-4">
      <Button
        icon={null}
        backgroundColor="bg-purple"
        textColor="text-white"
        borderColor="border-purple-100"
        hoverBackgroundColor="hover:bg-purple-100"
        paddingX="px-8 xs:px-4"
        paddingY="py-1"
        isWidthFull={false}
        onClick={() => {
          console.log('Button clicked');
        }}
      >
        สั่งซื้อ
      </Button>
      <Button
        icon={null}
        backgroundColor="bg-white"
        textColor="text-purple"
        borderColor="border-purple"
        hoverBackgroundColor="hover:bg-gray-400"
        paddingX="px-4 xs:px-2"
        paddingY="py-1"
        isWidthFull={false}
        onClick={() => {
          console.log('Button clicked');
        }}
      >
        ดูรายละเอียด
      </Button>
    </div>
  );
};

export default MyComponent;
