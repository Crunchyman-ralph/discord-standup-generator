import React from "react";
import { Button, Card, Form, Input, Textarea } from "react-daisyui";
import { FieldArrayWithId, FieldPath, useFormContext } from "react-hook-form";
import { StandupForm } from "./StandupForm";

type StandupFormBlockProps = {
  field: FieldArrayWithId<StandupForm>;
  fieldNameTitle: FieldPath<StandupForm>;
  fieldNameDescription: FieldPath<StandupForm>;
  removeArray: () => void;
};

export const StandupFormBlock = ({
  field,
  fieldNameTitle,
  fieldNameDescription,
  removeArray,
}: StandupFormBlockProps) => {
  const { register, control } = useFormContext<StandupForm>();

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Label title="Title" />
          <Input {...register(fieldNameTitle)} />
        </Form>
        <Form>
          <Form.Label title="Description" />
          <Textarea {...register(fieldNameDescription)} />
        </Form>
        <Button onClick={removeArray}>Delete</Button>
      </Card.Body>
    </Card>
  );
};
