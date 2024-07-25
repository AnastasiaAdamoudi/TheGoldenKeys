import { headerPhoneIcon } from '../../../assets';

const Header = () => {
  return (
    <header className="fixed w-full h-[96px] lg:h-[48px] top-0 left-0 bg-reddish text-[#fff] text-lg md:text-2xl xl:text-3xl"
    style={{ zIndex: 10 }}>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto h-full lg:gap-2 font-bold">
        <div className="flex flex-row justify-center items-center">
          <p className="text-center">
            ΚΛΕΙΔΑΡΑΣ ΑΜΠΕΛΟΚΗΠΟΙ ΘΕΣΣΑΛΟΝΙΚΗΣ
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <img src={headerPhoneIcon} alt="phone icon" className="h-6 xl:h-8" />
          <p>
            <a href="tel:+302310787777">2310 78.77.77</a> - <a href="tel:+306987787777">6987 78.77.77</a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
