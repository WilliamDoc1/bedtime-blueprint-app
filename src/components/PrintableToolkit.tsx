"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { printableToolkitTemplates } from "@/utils/templateContent";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
            {template.type === "internal-link" && template.internalLink && (
              <Button asChild variant="outline" className="w-full border-lavender-500 text-lavender-500 hover:bg-lavender-50 hover:text-lavender-600">
                <Link to={template.internalLink}>
                  {template.linkText || "View Template"} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PrintableToolkit;