"use client";

import type { Team } from "@stackframe/stack";

import { useEffect, useState } from "react";
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

type TeamMembersState =
  | {
      members: TeamMember[];
      status: "pending";
      teamId: string;
    }
  | {
      error: Error;
      members: TeamMember[];
      status: "error";
      teamId: string;
    }
  | {
      members: TeamMember[];
      status: "success";
      teamId: string;
    };

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
  const [teamMembersState, setTeamMembersState] = useState<TeamMembersState>({
    members: [],
    status: "pending",
    teamId: team.id,
  });

  useEffect(() => {
    const abortController = new AbortController();

    loadTeamMembers({ signal: abortController.signal })
      .then((members) => {
        setTeamMembersState({
          members,
          status: "success",
          teamId: team.id,
        });
      })
      .catch((loadError: unknown) => {
        if (abortController.signal.aborted) {
          return;
        }

        setTeamMembersState({
          error:
            loadError instanceof Error
              ? loadError
              : new Error("Unable to load team members"),
          members: [],
          status: "error",
          teamId: team.id,
        });
      });

    return () => {
      abortController.abort();
    };
  }, [team.id]);

  const isCurrentTeam = teamMembersState.teamId === team.id;
  const isPending = !isCurrentTeam || teamMembersState.status === "pending";
  const teamMembers =
    isCurrentTeam && teamMembersState.status === "success"
      ? teamMembersState.members
      : [];
  const error =
    isCurrentTeam && teamMembersState.status === "error"
      ? teamMembersState.error
      : null;

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
        <TeamMembersTable membersError={error} rows={rows} />
      )}
    </>
  );
}
