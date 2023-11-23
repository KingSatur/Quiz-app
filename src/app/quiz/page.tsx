import CreateQuizForm from "@/components/quiz/CreateQuizForm";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const QuizPage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return <CreateQuizForm />;
};

export default QuizPage;
