import { Button, Input } from "@material-tailwind/react";
import React from "react";

const FilterExams = () => {
  return (
    <>
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          color="black"
          label="Search..."
          className="pr-20"
          containerProps={{
            className: "min-w-[288px]",
          }}
        />
        <Button
          size="sm"
          color="white"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default FilterExams;
