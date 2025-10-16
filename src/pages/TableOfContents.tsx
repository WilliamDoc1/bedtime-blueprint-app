"use client";

import React from "react";
import { Link } from "react-router-dom";

const TableOfContents: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Table of Contents</h1>
      <p className="text-lg mb-4">Welcome to the guide!</p>
      <Link to="/guide/ch/1" className="text-blue-600 hover:underline">
        Go to Chapter 1: Introduction to Dream Journaling
      </Link>
    </div>
  );
};

export default TableOfContents;