import { z } from "zod";

export const CreateQuizSchema = z.object({
  topic: z.string().min(4, { message: "Topic must be 5 characters length" }),
  type: z.enum(["multiple", "closed"]),
  amount: z.number().max(5),
});
