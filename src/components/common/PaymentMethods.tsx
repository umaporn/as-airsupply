import React from 'react';
import ResponsiveImage from '@/components/common/Image';
interface BankInfo {
  name: string;
  logo: string;
  branch: string;
  accountNumber: string;
}

const banks: BankInfo[] = [
  {
    name: 'ธนาคาร กสิกรไทย',
    logo: '/images/svg/kbank.svg',
    branch: 'สาขา xxxx',
    accountNumber: 'xxxx-xxxxxx-x',
  },
  {
    name: 'ธนาคาร กรุงเทพ',
    logo: '/images/svg/bbl.svg',
    branch: 'สาขา xxxx',
    accountNumber: 'xxxx-xxxxxx-x',
  },
  {
    name: 'ธนาคาร กรุงไทย',
    logo: '/images/svg/krungthai.svg',
    branch: 'สาขา xxxx',
    accountNumber: 'xxxx-xxxxxx-x',
  },
];

const PaymentMethods = () => {
  return (
    <div className="container mx-auto pb-8 pt-4 lg:px-[140px]">
      <h2 className="mb-6 text-center text-sm font-bold text-purple md:text-lg">
        ช่องทางการชำระเงิน
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {banks.map((bank) => (
          <div
            key={bank.name}
            className="flex flex-row items-center bg-white p-4 sm:flex-col sm:items-center"
          >
            <div className="mr-4 h-16 w-16 sm:mb-4 sm:mr-0 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
              <ResponsiveImage
                desktopSrc={bank.logo}
                mobileSrc={bank.logo}
                alt="หรีดมาลา"
                className="w-full"
              />
            </div>
            <div className="text-left sm:text-center">
              <h3 className="text-purple-700 mb-2 text-xs font-semibold sm:text-sm md:text-base">
                {bank.name}
              </h3>
              <p className="text-gray-600 mb-1 text-xs sm:text-sm">
                {bank.branch}
              </p>
              <p className="text-xs sm:text-sm">
                เลขที่บัญชี{' '}
                <span className="text-purple-700 text-base">
                  {bank.accountNumber}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
