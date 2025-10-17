"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/components/SessionContextProvider";
import { showSuccess, showError } from "@/utils/toast";
import { Save } from "lucide-react";

const formSchema = z.object({
  entry_text: z.string().min(10, "Entry must be at least 10 characters long."),
});

type JournalFormValues = z.infer<typeof formSchema>;

const JournalEntryForm: React.FC = () => {
  const { session } = useSession();
  const form = useForm<JournalFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entry_text: "",
    },
  });

  async function onSubmit(values: JournalFormValues) {
    if (!session?.user?.id) {
      showError("You must be logged in to save a journal entry.");
      return;
    }

    const { error } = await supabase
      .from("journal_entries")
      .insert({
        user_id: session.user.id,
        entry_text: values.entry_text,
      });

    if (error) {
      console.error("Error saving journal entry:", error);
      showError("Failed to save journal entry: " + error.message);
    } else {
      showSuccess("Journal entry saved successfully!");
      form.reset({ entry_text: "" }); // Clear the textarea after submission
    }
  }

  return (
    <Card className="mt-8 border-lavender-400 border-2">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="entry_text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Write your reflection here..."
                      className="min-h-[200px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <Button type="submit" className="bg-lavender-500 hover:bg-lavender-600">
                <Save className="h-4 w-4 mr-2" /> Save Entry
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default JournalEntryForm;