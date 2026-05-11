import type { ServerTeam } from "@stackframe/stack";

import { stackServerApp } from "@/stack/server";

export async function GET() {
  const user = await stackServerApp.getUser({ or: "throw" });
  const team = user.selectedTeam as ServerTeam | null;

  if (!team) {
    return Response.json({ error: "No selected team" }, { status: 400 });
  }

  const members = await team.listUsers();

  return Response.json({
    members: members.map((member) => ({
      id: member.id,
      displayName: member.displayName,
      lastActiveAt: member.lastActiveAt.toISOString(),
      primaryEmail: member.primaryEmail,
      profileImageUrl: member.profileImageUrl,
    })),
  });
}
