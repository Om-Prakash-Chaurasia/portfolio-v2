import { useEffect, useState } from "react";
import { motion } from "motion/react";

function VisitorBadge() {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function recordAndFetchVisitors() {
      const STORAGE_KEY = "om_portfolio_visited";
      const hasVisited = localStorage.getItem(STORAGE_KEY);
      const action = hasVisited ? "get" : "increment";

      try {
        const response = await fetch(`/api/visitors?action=${action}`, {
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted && data && typeof data.count === "number") {
          setVisitorCount(data.count);
          // Mark as visited only after successful increment
          if (!hasVisited) {
            localStorage.setItem(STORAGE_KEY, "true");
          }
        }
      } catch (error) {
        console.warn(
          "Visitor API not reachable (normal in local dev without Netlify CLI):",
          error,
        );

        // Friendly fallback for local development preview
        if (isMounted) {
          if (import.meta.env.DEV) {
            // Simulate local preview count so you can preview styling
            const localDevCount = parseInt(
              localStorage.getItem("om_dev_visitor_count") || "1248",
              10,
            );
            setVisitorCount(localDevCount);
          } else {
            // In production, keep null to hide gracefully if network is unavailable
            setVisitorCount(null);
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    recordAndFetchVisitors();

    return () => {
      isMounted = false;
    };
  }, []);

  // If failed in production or not loaded yet without fallback, render minimal or nothing
  if (!isLoading && visitorCount === null) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      title="Unique visitors tracked privately"
      className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/80 px-3 py-1 text-[11px] font-medium text-gray-400 shadow-sm backdrop-blur-md transition-colors hover:border-gray-700 hover:text-gray-300"
    >
      {/* Live Pulsing Dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      {/* Count & Label */}
      {isLoading ? (
        <span className="inline-block h-3.5 w-16 animate-pulse rounded bg-gray-800" />
      ) : (
        <span>
          <strong className="font-semibold text-white">
            {visitorCount.toLocaleString()}
          </strong>{" "}
          unique {visitorCount === 1 ? "visitor" : "visitors"}
        </span>
      )}
    </motion.div>
  );
}

export default VisitorBadge;
