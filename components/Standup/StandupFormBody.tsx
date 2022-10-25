import { Button, Card } from "react-daisyui";
import {
  FieldArrayPath,
  FieldName,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { StandupForm } from "./StandupForm";
import { StandupFormBlock } from "./StandupFormBlock";

type StandupFormBodyProps = {
  title: string;
  fieldName: FieldArrayPath<StandupForm>;
};

export const StandupFormBody = ({ title, fieldName }: StandupFormBodyProps) => {
  const { control } = useFormContext<StandupForm>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  });

  return (
    <div>
      <h1>{title}</h1>
      {fields.map((field, index) => (
        <StandupFormBlock
          removeArray={() => remove(index)}
          field={field}
          key={index}
          fieldNameDescription={`${fieldName}.${index}.description`}
          fieldNameTitle={`${fieldName}.${index}.title`}
        />
      ))}
      <Button
        className="w-full my-4"
        color="secondary"
        onClick={() =>
          append({
            title: "",
            description: "",
          })
        }
      >
        Add
      </Button>
    </div>
  );
};
