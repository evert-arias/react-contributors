import type { Contributor } from "./types";

export function unionByLogin(
  existingContributors: Contributor[],
  newContributors: Contributor[]
): Contributor[] {
  const contributorsMap = new Map<string, Contributor>();

  existingContributors.forEach((contributor) => {
    contributorsMap.set(contributor.login, contributor);
  });

  newContributors.forEach((contributor) => {
    if (contributorsMap.has(contributor.login)) {
      const existing = contributorsMap.get(contributor.login)!;
      contributorsMap.set(contributor.login, {
        ...existing,
        contributions: existing.contributions + contributor.contributions,
      });
    } else {
      contributorsMap.set(contributor.login, contributor);
    }
  });

  return Array.from(contributorsMap.values());
}

export function orderByContributions(
  contributors: Contributor[]
): Contributor[] {
  return [...contributors].sort((a, b) => b.contributions - a.contributions);
}
