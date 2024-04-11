import { headerPhoneIcon } from '../../../assets';

const Header = () => {
  return (
    <header className="fixed w-full h-[96px] lg:h-[48px] top-0 left-0 z-50 bg-reddish text-[#fff] text-xl md:text-2xl xl:text-3xl">
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto h-full gap-2 font-bold">
        <div className="flex flex-row justify-center items-center">
          <p className="text-center">
            ΚΛΕΙΔΑΡΑΣ ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <img src={headerPhoneIcon} alt="phone icon" className="h-6 xl:h-8" />
          <p>
            2310 78.77.77 - 6987 78.77.77
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
