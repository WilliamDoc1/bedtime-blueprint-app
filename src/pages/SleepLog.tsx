"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/components/SessionContextProvider";
import { showError } from "@/utils/toast";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

interface SleepLogEntry {
  id: string;
  date: string;
  nap_start: string | null;
  bedtime_start: string;
  night_wakings: number;
  calm_rating: number;
  parent_notes: string | null;
}

const SleepLog: React.FC = () => {
  const { session } = useSession();
  const [sleepLogs, setSleepLogs] = useState<SleepLogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSleepLogs = async () => {
      if (!session?.user?.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const { data, error } = await supabase
        .from("sleep_logs")
        .select("id, date, nap_start, bedtime_start, night_wakings, calm_rating, parent_notes")
        .eq("user_id", session.user.id)
        .order("date", { ascending: false })
        .limit(7);

      if (error) {
        console.error("Error fetching sleep logs:", error);
        showError("Failed to load sleep logs: " + error.message);
      } else {
        setSleepLogs(data || []);
      }
      setLoading(false);
    };

    fetchSleepLogs();
  }, [session]);

  return (
    <div className="container mx-auto p-4 bg-lavender-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-sidebar-primary text-center">7-Day Sleep Log</h1>
      <p className="text-lg mb-6 text-center text-gray-800">Review your child's sleep patterns over the last seven days.</p>
      
      <div className="flex justify-center mb-8">
        <Button asChild className="bg-gold-400 hover:bg-gold-500 text-white">
          <Link to="/daily-log-form">Add New Sleep Log</Link>
        </Button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading sleep logs...</p>
      ) : sleepLogs.length === 0 ? (
        <p className="text-center text-gray-600">No sleep logs found. Start by adding one!</p>
      ) : (
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Day</TableHead>
                <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Nap Start</TableHead>
                <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Bedtime</TableHead>
                <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Night Wakings</TableHead>
                <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Parent Calm (1-5)</TableHead>
                <TableHead className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-200">
              {sleepLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{format(new Date(log.date), "MMM dd, yyyy")}</TableCell>
                  <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{log.nap_start ? format(new Date(`2000-01-01T${log.nap_start}`), "hh:mm a") : "N/A"}</TableCell>
                  <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{format(new Date(`2000-01-01T${log.bedtime_start}`), "hh:mm a")}</TableCell>
                  <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{log.night_wakings}</TableCell>
                  <TableCell className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{log.calm_rating}</TableCell>
                  <TableCell className="px-4 py-2 text-sm text-gray-700 max-w-xs truncate">{log.parent_notes || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SleepLog;