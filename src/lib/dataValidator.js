/**
 * Data Validator Engine for FIH Hockey World Cup 2026
 * Enforces strict schema validation, mathematical goal consistency, and team integrity
 * to prevent publishing hallucinated or corrupt sports data that leads to Google de-indexing.
 */

export function validateMatch(match) {
  const errors = [];

  if (!match) {
    return { valid: false, errors: ["Match object is null or undefined"] };
  }

  // 1. Mandatory Identity Fields
  if (!match.id) errors.push("Missing match ID");
  if (!match.teamA || !match.teamB) errors.push(`Missing team identity: teamA=${match.teamA}, teamB=${match.teamB}`);
  if (!match.venue) errors.push("Missing venue information");
  if (!match.gender) errors.push("Missing gender classification");
  if (!match.pool) errors.push("Missing pool assignment");

  // 2. Status Validation
  const validStatuses = ["UPCOMING", "LIVE", "FINAL", "POSTPONED", "CANCELLED"];
  if (!validStatuses.includes(match.status)) {
    errors.push(`Invalid match status '${match.status}'. Expected one of: ${validStatuses.join(", ")}`);
  }

  // 3. Mathematical & Scorer Validation for Completed Matches
  if (match.status === "FINAL") {
    if (typeof match.scoreA !== "number" || typeof match.scoreB !== "number") {
      errors.push(`Final match must have numerical scores: scoreA=${match.scoreA}, scoreB=${match.scoreB}`);
    }

    if (match.scoreA < 0 || match.scoreB < 0) {
      errors.push(`Negative score detected: ${match.scoreA}-${match.scoreB}`);
    }

    // If structured events/scorers are provided, verify total goal math
    if (Array.isArray(match.events) && match.events.length > 0) {
      const goalEvents = match.events.filter(e => 
        e.type && (e.type.toLowerCase().includes("goal") || e.type.includes("⚽"))
      );
      const totalGoals = (match.scoreA || 0) + (match.scoreB || 0);
      
      // Only flag if events exist and don't match total score
      if (goalEvents.length > 0 && goalEvents.length !== totalGoals) {
        errors.push(`Goal events count (${goalEvents.length}) does not match total score (${totalGoals})`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

export function validateAllMatches(matches) {
  const report = {
    total: matches.length,
    validCount: 0,
    invalidCount: 0,
    invalidMatches: []
  };

  matches.forEach(match => {
    const result = validateMatch(match);
    if (result.valid) {
      report.validCount++;
    } else {
      report.invalidCount++;
      report.invalidMatches.push({ id: match.id, match: `${match.teamA} vs ${match.teamB}`, errors: result.errors });
    }
  });

  return report;
}
