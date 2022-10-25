import { FormProvider, useForm } from "react-hook-form";
import { StandupFormBody } from "./StandupFormBody";
import { Card, Form, Input, Textarea } from "react-daisyui";
import { StandupPreview } from "./StandupPreview";

type StandupFormBlock = {
  title: string;
  description: string;
};

export type StandupForm = {
  yesterday: StandupFormBlock[];
  today: StandupFormBlock[];
};

export const StandupForm = () => {
  const methods = useForm<StandupForm>({
    defaultValues: {
      yesterday: [
        {
          title: "",
          description: "",
        },
      ],
      today: [
        {
          title: "",
          description: "",
        },
      ],
    },
  });

  return (
    <FormProvider {...methods}>
      <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Card.Body>
          <Card.Title>Standup</Card.Title>
          <StandupFormBody title="Yesterday" fieldName="yesterday" />
          <StandupFormBody title="Today" fieldName="today" />
        </Card.Body>
      </Card>
      <StandupPreview />
    </FormProvider>
  );
};
