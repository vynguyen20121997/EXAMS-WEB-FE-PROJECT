import { Card, Option, Select } from "@material-tailwind/react";
import { classList } from "../../../../../../../tests/data/TeacherPage/classData";

export const CreateExamsListTopic = () => {
  return (
    <>
      <Card className="w-96">
        <Select color="purple" variant="outlined" label="Select Class">
          {classList.map((item) => (
            <Option key={item._id} value={item.title}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Card>
    </>
  );
};
