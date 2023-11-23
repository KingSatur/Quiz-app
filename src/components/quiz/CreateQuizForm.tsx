"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { z } from "zod";
import { CreateQuizSchema } from "@/schemas/quiz";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input as InputField } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

type Props = {};

type Input = z.infer<typeof CreateQuizSchema>;

const CreateQuizForm = (props: Props) => {
  const form = useForm<Input>({
    resolver: zodResolver(CreateQuizSchema),
    defaultValues: {
      amount: 3,
      topic: "",
      type: "closed",
    },
  });

  const onSubmit = (input: Input) => {
    alert(JSON.stringify(input));
  };

  form.watch();

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2x font-bold">Create your quiz</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <InputField placeholder="Enter a topic" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the topic which your question will be about
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <InputField
                        onChange={(e) => {
                          form.setValue("amount", parseInt(e?.target?.value));
                        }}
                        min={1}
                        max={6}
                        placeholder="Enter an amount..."
                        type="number"
                      />
                    </FormControl>
                    <FormDescription>
                      Please provide the amount of questions
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <InputField placeholder="Enter a topic" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the topic which your question will be about
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  variant={
                    form.getValues("type") === "multiple"
                      ? "default"
                      : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-l-lg p-2"
                  onClick={() => {
                    form.setValue("type", "multiple");
                  }}
                  type="button"
                >
                  <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                </Button>
                <Separator />
                <Button
                  variant={
                    form.getValues("type") === "closed"
                      ? "default"
                      : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-r-lg p-2"
                  onClick={() => form.setValue("type", "closed")}
                  type="button"
                >
                  <BookOpen className="w-4 h-4 mr-2" /> Closed choise
                </Button>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateQuizForm;
