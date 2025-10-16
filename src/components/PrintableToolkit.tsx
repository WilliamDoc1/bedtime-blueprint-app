"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { printableToolkitTemplates } from "@/utils/templateContent";
import { Download, ExternalLink } from "lucide-react";

const PrintableToolkit: React.FC = () => {
  return (
    <div className="grid gap-6 max-w-2xl mx-auto">
      {printableToolkitTemplates.map((template) => (
        <Card key={template.id} className="flex flex-col justify-between border-gold-400 border-2">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">{template.title}</CardTitle>
            <CardDescription className="text-gray-700">{template.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {template.type === "download" && (
              <Button asChild className="w-full bg-lavender-500 hover:bg-lavender-400 text-white">
                <a href={template.pdfLink} download>
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </a>
              </Button>
            )}
            {template.type === "link" && template.externalLink && (
              <Button asChild variant="outline" className="w-full border-lavender-500 text-lavender-500 hover:bg-lavender-50 hover:text-lavender-600">
                <a href={template.externalLink} target="_blank" rel="noopener noreferrer">
                  {template.linkText || "View Template"} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PrintableToolkit;