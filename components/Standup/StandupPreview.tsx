import { Card, Textarea } from "react-daisyui";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useGetStandup } from "../../hooks/UseGetStandup";

export const StandupPreview = () => {
  const getStandup = useGetStandup();

  return (
    <Card className="grow sticky top-0 bottom-0">
      <Card.Body>
        <div className="flex w-full h-full component-preview p-4 items-center gap-2 font-sans">
          <ReactTextareaAutosize value={getStandup()} readOnly />
        </div>
      </Card.Body>
    </Card>
  );
};
