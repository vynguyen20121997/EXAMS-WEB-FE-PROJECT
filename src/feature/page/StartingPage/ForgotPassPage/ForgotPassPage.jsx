import { Logo } from "../../../../assets/Logo/Logo";
import { SimpleFooter } from "../../../../components/Footer/Footer";
import { ForgotPassCard } from "./components/FogotPassCard/FogotPassCard";

const ForgotPassPage = () => {
  return (
    <div className="background-website">
      <div className=" bg-white w-1/3 mx-auto rounded-3xl px-20 py-10">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 pt-10 pb-20">
          <div>
            <Logo />
          </div>
        </div>

        <div className="flex justify-center pb-10">
          <ForgotPassCard />
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default ForgotPassPage;
