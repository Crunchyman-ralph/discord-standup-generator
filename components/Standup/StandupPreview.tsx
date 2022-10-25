import { Card, Textarea } from "react-daisyui";
import { useGetStandup } from "../../hooks/UseGetStandup";

export const StandupPreview = () => {
  const getStandup = useGetStandup();

  return (
    <Card className="grow">
      <Card.Body>
        <div className="flex w-full h-full component-preview p-4 items-center gap-2 font-sans">
          <Textarea className="w-full" value={getStandup()} readOnly />
        </div>
      </Card.Body>
    </Card>
  );
};
