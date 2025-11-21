import { useState, useEffect } from "react";
import luminariesData from "../../data/luminaries.json";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
  achievements: string[];
  expertise: string[];
  quote: string;
  isLeadership?: boolean;
}

export function useLuminariesData() {
  const [faculty, setFaculty] = useState<TeamMember[]>([]);
  const [leadership, setLeadership] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFaculty(luminariesData.faculty);
    setLeadership(luminariesData.leadership);
    setLoading(false);
  }, []);

  return {
    faculty,
    leadership,
    loading,
  };
}
