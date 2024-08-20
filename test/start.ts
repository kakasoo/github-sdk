import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_discussion_minus_comment } from "@kakasoo/github-sdk/lib/structures/team_minus_discussion_minus_comment";
import typia from "typia";

import { TestGlobal } from "./TestGlobal";

const main = async () => {
  const connection: api.IConnection = {
    ...TestGlobal.connection(),
    host: "https://api.github.com",
    simulate: true,
  };
  const output: team_minus_discussion_minus_comment =
    await api.functional.orgs.teams.discussions.comments.patchByOrgAndTeam_slugAndDiscussion_numberAndComment_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
};
main().catch((exp: any) => {
  console.log(exp);
  process.exit(-1);
});
