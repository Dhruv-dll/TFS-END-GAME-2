import { useState, useEffect } from "react";
import sponsorsData from "../../data/sponsors.json";

export interface SponsorItem {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website?: string;
  isActive: boolean;
}

export function useSponsorsData() {
  const [sponsors, setSponsors] = useState<SponsorItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSponsors(sponsorsData.sponsors);
    setLoading(false);
  }, []);

  return {
    sponsors,
    loading,
  };
}
