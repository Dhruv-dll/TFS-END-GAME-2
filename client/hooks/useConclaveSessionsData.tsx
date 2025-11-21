import { useState, useEffect } from "react";
import sessionsData from "../../data/sessions.json";

export interface Speaker {
  id: string;
  name: string;
  linkedinId: string;
  photo: string;
  bio?: string;
  startTime?: string;
  endTime?: string;
}

export interface ConclaveSession {
  id: string;
  name: string;
  description?: string;
  startTime?: string;
  endTime?: string;
  speakers: Speaker[];
  createdAt: number;
  isActive?: boolean;
}

export function useConclaveSessionsData() {
  const [sessions, setSessions] = useState<ConclaveSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSessions(sessionsData.sessions);
    setLoading(false);
  }, []);

  return {
    sessions,
    loading,
  };
}
