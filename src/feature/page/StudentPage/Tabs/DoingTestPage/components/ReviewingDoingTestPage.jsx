import { ProgressBar } from "../../../components/PrgressBar/ProgressBar";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logo } from "../../../../../../assets/Logo/Logo";

const ReviewingDoingTestPage = ({ value, testName }) => {
  const testResourceAPI = useSelector((state) => state.test.fetchTestResources);

  const minutes = testResourceAPI.time;

  const [time, setTime] = useState(minutes * 60);

  const tick = () => {
    setTime(time - 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 60000 / minutes);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div className="grid grid-cols-7 gap-4">
      <div className={`flex`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          // stroke={logocolor}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
        <p className={` text-4xl font-sans font-bold align-middle pt-1`}>
          ExamsWeb
        </p>
      </div>
      <div className="col-span-4 self-center">
        <ProgressBar size="lg" value={value} />
      </div>
      <div>
        <Button className="rounded-full" size="sm" color="purple">
          Review
        </Button>
      </div>
      <div>{(time / 60).toFixed(1)} Minute</div>
    </div>
  );
};

export default ReviewingDoingTestPage;
