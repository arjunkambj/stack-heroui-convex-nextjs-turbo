"use client";

import type { Team } from "@stackframe/stack";

import { useQuery } from "@tanstack/react-query";
import { TeamMembersTable } from "@/components/team/TeamMembersTable";
import { TeamStats } from "@/components/team/TeamStats";
import { TeamTableSkeleton } from "@/components/team/TeamTableSkeleton";

type TeamMember = {
  id: string;
  displayName: string | null;
  lastActiveAt: string;
  primaryEmail: string | null;
  profileImageUrl: string | null;
};

type TeamTableRow = {
  email: string | null;
  id: string;
  imageUrl: string | null;
  lastActivity: string;
  name: string | null;
  status: "Active" | "Invited";
  subtitle: string;
};

const teamMembersQueryKey = (teamId: string) => ["team-members", teamId];

const formatDate = (value: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(value);

const loadTeamMembers = async ({ signal }: { signal: AbortSignal }) => {
  const response = await fetch("/api/team-members", { signal });
  const payload = (await response.json()) as
    | { members: TeamMember[] }
    | { error: string };

  if (!response.ok) {
    if ("error" in payload) {
      throw new Error(payload.error);
    }

    throw new Error("Unable to load team members");
  }

  if (!("members" in payload)) {
    throw new Error("Missing team members response");
  }

  return payload.members;
};

export type { TeamTableRow };

export function TeamMembersContent({ team }: { team: Team }) {
  const invitations = team.useInvitations();
  const {
    data: teamMembers = [],
    error,
    isPending,
  } = useQuery({
    queryKey: teamMembersQueryKey(team.id),
    queryFn: loadTeamMembers,
    staleTime: 60_000,
  });

  const rows: TeamTableRow[] = [
    ...teamMembers.map((member) => ({
      email: member.primaryEmail,
      id: member.id,
      imageUrl: member.profileImageUrl,
      lastActivity: formatDate(new Date(member.lastActiveAt)),
      name: member.displayName,
      status: "Active" as const,
      subtitle: "Team member",
    })),
    ...invitations.map((invitation) => ({
      email: invitation.recipientEmail,
      id: invitation.id,
      imageUrl: null,
      lastActivity: `Expires ${formatDate(invitation.expiresAt)}`,
      name: "Pending invite",
      status: "Invited" as const,
      subtitle: "Awaiting response",
    })),
  ];

  return (
    <>
      <TeamStats membersCount={teamMembers.length} team={team} />

      {isPending ? (
        <TeamTableSkeleton />
      ) : (
        <TeamMembersTable
          membersError={error instanceof Error ? error : null}
          rows={rows}
        />
      )}
    </>
  );
}
