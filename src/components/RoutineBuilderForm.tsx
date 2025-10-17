"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/components/SessionContextProvider";
import { showSuccess, showError } from "@/utils/toast";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const routineSchema = z.object({
  routine_name: z.string().min(3, "Routine name must be at least 3 characters."),
  step_1: z.string().min(1, "Step 1 is required."),
  step_2: z.string().min(1, "Step 2 is required."),
  step_3: z.string().min(1, "Step 3 is required."),
  step_4: z.string().min(1, "Step 4 is required."),
  step_5: z.string().min(1, "Step 5 is required."),
});

type RoutineFormValues = z.infer<typeof routineSchema>;

const stepTitles = [
  "Routine Name",
  "Step 1: Wind-Down Activity",
  "Step 2: Connection Ritual",
  "Step 3: Story/Song Cue",
  "Step 4: Goodnight Phrase",
  "Step 5: Final Proximity Fade",
  "Review & Save",
];

const stepDescriptions = [
  "Give your routine a memorable name.",
  "What is the first calming activity? (e.g., Bath, warm wipe-down)",
  "How do you connect emotionally? (e.g., Cuddle time, gentle massage)",
  "What is the final verbal/auditory cue? (e.g., Reading two books, singing a lullaby)",
  "What is the consistent phrase you use? (e.g., 'The moon is watching over you.')",
  "What is the final action before leaving? (e.g., Sitting by the door, gentle exit)",
  "Confirm your routine details before saving.",
];

const RoutineBuilderForm: React.FC = () => {
  const { session } = useSession();
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<RoutineFormValues>({
    resolver: zodResolver(routineSchema),
    mode: "onBlur",
    defaultValues: {
      routine_name: "My Gentle Bedtime Routine",
      step_1: "Warm bath or wash-up",
      step_2: "Pajamas and gentle massage",
      step_3: "Read two stories",
      step_4: "Say 'I love you, sleep well'",
      step_5: "Sit by the door until asleep",
    },
  });

  const { trigger, getValues } = form;

  const handleNext = async () => {
    let fieldsToValidate: (keyof RoutineFormValues)[] = [];

    if (currentStep === 0) {
      fieldsToValidate = ["routine_name"];
    } else if (currentStep >= 1 && currentStep <= 5) {
      fieldsToValidate = [`step_${currentStep}` as keyof RoutineFormValues];
    }

    const isValid = await trigger(fieldsToValidate, { shouldFocus: true });

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (values: RoutineFormValues) => {
    if (!session?.user?.id) {
      showError("You must be logged in to save a routine.");
      return;
    }

    const { error } = await supabase
      .from("routines")
      .insert({
        user_id: session.user.id,
        routine_name: values.routine_name,
        step_1: values.step_1,
        step_2: values.step_2,
        step_3: values.step_3,
        step_4: values.step_4,
        step_5: values.step_5,
      });

    if (error) {
      console.error("Error saving routine:", error);
      showError("Failed to save routine: " + error.message);
    } else {
      showSuccess("Routine saved successfully!");
      form.reset(form.getValues()); // Keep values but reset form state
      setCurrentStep(0); // Go back to start
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormField
            control={form.control}
            name="routine_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Routine Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., The Moonbeam Routine" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: {
        const fieldName = `step_${currentStep}` as keyof RoutineFormValues;
        return (
          <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{stepTitles[currentStep]}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={stepDescriptions[currentStep]}
                    className="resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      }
      case 6:
        const values = getValues();
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sidebar-primary-foreground">Routine: {values.routine_name}</h3>
            <ol className="list-decimal list-inside space-y-2 text-left mx-auto max-w-md">
              <li>{values.step_1}</li>
              <li>{values.step_2}</li>
              <li>{values.step_3}</li>
              <li>{values.step_4}</li>
              <li>{values.step_5}</li>
            </ol>
            <div className="bg-gold-50 p-3 rounded-md text-sm text-gray-700 mt-4">
              <p className="font-medium">Ready to save?</p>
              <p>Saving this routine will make it available for tracking and reference.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="max-w-xl mx-auto border-gold-400 border-2">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-sidebar-primary-foreground">
          {stepTitles[currentStep]}
        </CardTitle>
        <p className="text-center text-sm text-gray-500">{stepDescriptions[currentStep]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-lavender-500 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / stepTitles.length) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {renderStepContent()}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Previous
              </Button>

              {currentStep < stepTitles.length - 1 ? (
                <Button type="button" onClick={handleNext} className="bg-lavender-500 hover:bg-lavender-600">
                  Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" className="bg-gold-400 hover:bg-gold-500">
                  <Check className="h-4 w-4 mr-2" /> Save Routine
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RoutineBuilderForm;