import {
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";

const QuestionDoingTestPage = ({ testQuestion, onChoosenAnswer, onNext }) => {
  const [testQuestionData, setTestQuestionData] = useState([]);

  useEffect(() => {
    if (testQuestion) {
      setTestQuestionData(testQuestion || {});
    }
  }, [testQuestion]);

  const onChangeSelected = useCallback(
    (_id) => {
      const choosenAsnwer =
        testQuestionData &&
        testQuestionData.answers?.filter((e) => e.choosen === true);

      if (choosenAsnwer.length > 0) {
        setTestQuestionData((prevAnswerData) => ({
          ...prevAnswerData,
          answers: prevAnswerData.answers.map((el) => {
            if (el._id === _id) {
              return { ...el, choosen: !el.choosen };
            } else if (el.choosen === false || !el.hasOwnProperty("choosen")) {
              return el;
            } else {
              return { ...el, choosen: !el.choosen };
            }
          }),
        }));
      } else {
        setTestQuestionData((prevAnswerData) => ({
          ...prevAnswerData,
          answers: prevAnswerData.answers.map((el) =>
            el._id === _id ? { ...el, choosen: !el.choosen } : el
          ),
        }));
      }
    },

    [testQuestionData]
  );

  useEffect(() => {
    onChoosenAnswer(testQuestionData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testQuestionData]);

  return (
    <div className="px-14 py-14 bg-gray-100	rounded-lg my-10">
      <Card className="w-full">
        <CardHeader>
          {testQuestionData && testQuestionData.questionContent?.toUpperCase()}
        </CardHeader>
        <CardBody>
          <List className="w-full">
            {testQuestionData &&
              testQuestionData.answers?.map((item) => {
                const unChoosenStyle =
                  "text-sm font-normal text-blue-gray-700 hover:bg-purple-50 hover:text-black focus:bg-purple-50 focus:text-black";
                const choosenStyle =
                  "text-sm font-normal text-blue-gray-700 bg-purple-50 hover:bg-purple-50 hover:text-black";
                return (
                  <ListItem
                    className={item.choosen ? choosenStyle : unChoosenStyle}
                    onClick={() => onChangeSelected(item._id)}
                  >
                    <Checkbox
                      className="rounded-full "
                      checked={item.choosen === true}
                    />
                    {item.content}
                  </ListItem>
                );
              })}
          </List>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuestionDoingTestPage;
