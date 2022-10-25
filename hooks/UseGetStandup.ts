import { useFormContext } from "react-hook-form";
import { StandupForm } from "../components/Standup/StandupForm";

export const useGetStandup = () => {
  const { watch } = useFormContext<StandupForm>();

  return () =>
    `**Standup**

**Yesterday**
${watch("yesterday")
  .map(
    (value) =>
      `_${value.title}_
${value.description}`
  )
  .join("\n\n")}
**Today**
${watch("today")
  .map(
    (value) =>
      `_${value.title}_
${value.description}`
  )
  .join("\n\n")}
  `;
};
