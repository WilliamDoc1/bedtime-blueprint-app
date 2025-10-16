"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/components/SessionContextProvider";
import { showSuccess, showError } from "@/utils/toast";

const formSchema = z.object({
  date: z.date({
    required_error: "A date is required.",
  }),
  nap_start: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").optional().or(z.literal("")),
  bedtime_start: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  night_wakings: z.number().min(0, "Cannot be negative").max(10, "Too many wakings").default(0),
  calm_rating: z.array(z.number().min(1).max(5)).min(1).max(1),
  parent_notes: z.string().optional(),
});

const DailySleepLogForm: React.FC = () => {
  const { session } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      nap_start: "",
      bedtime_start: "20:00",
      night_wakings: 0,
      calm_rating: [3],
      parent_notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!session?.user?.id) {
      showError("You must be logged in to submit a sleep log.");
      return;
    }

    const { data, error } = await supabase
      .from("sleep_logs")
      .insert({
        user_id: session.user.id,
        date: format(values.date, "yyyy-MM-dd"),
        nap_start: values.nap_start || null, // Store as null if empty
        bedtime_start: values.bedtime_start,
        night_wakings: values.night_wakings,
        calm_rating: values.calm_rating[0],
        parent_notes: values.parent_notes,
      });

    if (error) {
      console.error("Error saving sleep log:", error);
      showError("Failed to save sleep log: " + error.message);
    } else {
      showSuccess("Sleep log saved successfully!");
      form.reset({
        date: new Date(),
        nap_start: "",
        bedtime_start: "20:00",
        night_wakings: 0,
        calm_rating: [3],
        parent_notes: "",
      }); // Reset form after successful submission
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nap_start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nap Start (HH:MM, optional)</FormLabel>
              <FormControl>
                <Input type="time" {...field} className="w-[240px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bedtime_start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bedtime Start (HH:MM)</FormLabel>
              <FormControl>
                <Input type="time" {...field} className="w-[240px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="night_wakings"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Night Wakings</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                  className="w-[240px]"
                  min={0}
                  max={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="calm_rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent Calm Rating (1-5)</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={field.value}
                  onValueChange={field.onChange}
                  className="w-[240px] mt-2"
                />
              </FormControl>
              <div className="text-sm text-muted-foreground mt-2">
                Current Rating: {field.value[0]}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parent_notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any additional notes about the sleep log..."
                  className="resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save Sleep Log</Button>
      </form>
    </Form>
  );
};

export default DailySleepLogForm;