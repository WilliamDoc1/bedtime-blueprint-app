"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, startOfWeek, addDays } from "date-fns";
import { CalendarIcon, Check } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/components/SessionContextProvider";
import { showSuccess, showError } from "@/utils/toast";
import { Card, CardContent } from "@/components/ui/card";

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const dayLogSchema = z.object({
  day: z.string(),
  calm_moment: z.string().optional(),
  gratitude: z.string().optional(),
  sleep_quality: z.number().min(1).max(5).nullable(),
});

const formSchema = z.object({
  week_start_date: z.date({
    required_error: "A week start date is required.",
  }),
  daily_logs: z.array(dayLogSchema),
});

type SelfCareFormValues = z.infer<typeof formSchema>;

const SelfCareLogForm: React.FC = () => {
  const { session } = useSession();
  const [selectedWeekStart, setSelectedWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const defaultDailyLogs = DAYS_OF_WEEK.map(day => ({
    day,
    calm_moment: "",
    gratitude: "",
    sleep_quality: null,
  }));

  const form = useForm<SelfCareFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      week_start_date: selectedWeekStart,
      daily_logs: defaultDailyLogs,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "daily_logs",
  });

  // Update form date when user selects a new week start date
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const newWeekStart = startOfWeek(date, { weekStartsOn: 1 });
      setSelectedWeekStart(newWeekStart);
      form.setValue("week_start_date", newWeekStart);
    }
  };

  async function onSubmit(values: SelfCareFormValues) {
    if (!session?.user?.id) {
      showError("You must be logged in to submit a self-care log.");
      return;
    }

    const logsToInsert = values.daily_logs
      .map(log => ({
        user_id: session.user.id,
        week_start_date: format(values.week_start_date, "yyyy-MM-dd"),
        day: log.day,
        calm_moment: log.calm_moment || null,
        gratitude: log.gratitude || null,
        sleep_quality: log.sleep_quality,
      }))
      .filter(log => log.calm_moment || log.gratitude || log.sleep_quality !== null); // Only submit non-empty entries

    if (logsToInsert.length === 0) {
        showError("Please fill out at least one entry before submitting.");
        return;
    }

    // Note: For simplicity, we are inserting new records. A more complex implementation would check for existing records and update them.
    const { error } = await supabase
      .from("self_care_logs")
      .insert(logsToInsert);

    if (error) {
      console.error("Error saving self-care log:", error);
      showError("Failed to save self-care log: " + error.message);
    } else {
      showSuccess(`Successfully saved ${logsToInsert.length} self-care entries for the week starting ${format(values.week_start_date, "PPP")}!`);
      // Reset form fields to default empty state for the next week
      form.reset({
        week_start_date: startOfWeek(new Date(), { weekStartsOn: 1 }),
        daily_logs: defaultDailyLogs,
      });
      setSelectedWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="week_start_date"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel className="text-lg font-semibold">Select Week Start (Monday)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        `Week of: ${format(field.value, "MMM dd, yyyy")}`
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={handleDateSelect}
                    initialFocus
                    // Ensure selection always snaps to Monday
                    onDayClick={(day) => handleDateSelect(day)}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-6">
          {fields.map((item, index) => (
            <Card key={item.id} className="p-4 border-lavender-400 border-2">
              <h3 className="text-xl font-bold mb-4 text-lavender-500">{item.day}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Calm Moment */}
                <FormField
                  control={form.control}
                  name={`daily_logs.${index}.calm_moment`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>My Calm Moment</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 10 min of quiet reading" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Gratitude */}
                <FormField
                  control={form.control}
                  name={`daily_logs.${index}.gratitude`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One Gratitude</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., My partner's help" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sleep Quality */}
                <FormField
                  control={form.control}
                  name={`daily_logs.${index}.sleep_quality`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sleep Quality (1-5)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="3"
                          min={1}
                          max={5}
                          {...field}
                          value={field.value === null ? "" : field.value}
                          onChange={(e) => {
                            const value = e.target.value;
                            field.onChange(value === "" ? null : parseInt(value));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button type="submit" className="bg-gold-400 hover:bg-gold-500 text-white">
            <Check className="h-4 w-4 mr-2" /> Save Weekly Log
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SelfCareLogForm;