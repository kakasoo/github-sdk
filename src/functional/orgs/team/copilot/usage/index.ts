import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsTeamCopilotUsage } from "../../../../../structures/IApiOrgsTeamCopilotUsage";
import { copilot_minus_usage_minus_metrics } from "../../../../../structures/copilot_minus_usage_minus_metrics";

/**
 * Get a summary of Copilot usage for a team.
 * > [!NOTE]
 * > This endpoint is in beta and is subject to change.
 *
 * You can use this endpoint to see a daily breakdown of aggregated usage metrics for Copilot completions and Copilot Chat in the IDE
 * for users within a team, with a further breakdown of suggestions, acceptances, and number of active users by editor and language for each day.
 * See the response schema tab for detailed metrics definitions.
 *
 * The response contains metrics for up to 28 days prior. Usage metrics are processed once per day for the previous day,
 * and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,
 * they must have telemetry enabled in their IDE.
 *
 * > [!NOTE]
 * > This endpoint will only return results for a given day if the team had five or more members with active Copilot licenses, as evaluated at the end of that day.
 *
 * Organization owners for the organization that contains this team, and owners and billing managers of the parent enterprise can view Copilot usage metrics for a team.
 *
 * OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot`, `read:org`, or `read:enterprise` scopes to use this endpoint.
 *
 * @tag copilot
 * @path orgs/:org/team/:team_slug/copilot/usage
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndTeam_slug(
  connection: IConnection<getByOrgAndTeam_slug.Headers>,
  org: string,
  team_slug: string,
  query: getByOrgAndTeam_slug.Query,
): Promise<getByOrgAndTeam_slug.Output> {
  return !!connection.simulate
    ? getByOrgAndTeam_slug.simulate(connection, org, team_slug, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndTeam_slug.METADATA,
          path: getByOrgAndTeam_slug.path(org, team_slug, query),
          status: null,
        },
      );
}
export namespace getByOrgAndTeam_slug {
  export type Headers = IApiOrgsTeamCopilotUsage.GetHeader;
  export type Query = IApiOrgsTeamCopilotUsage.GetQuery;
  export type Output = copilot_minus_usage_minus_metrics[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/team/:team_slug/copilot/usage",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    team_slug: string,
    query: getByOrgAndTeam_slug.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/team/${encodeURIComponent(team_slug ?? "null")}/copilot/usage`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): copilot_minus_usage_minus_metrics[] =>
    typia.random<copilot_minus_usage_minus_metrics[]>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndTeam_slug.Headers>,
    org: string,
    team_slug: string,
    query: getByOrgAndTeam_slug.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndTeam_slug.path(org, team_slug, query),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("team_slug")(() => typia.assert(team_slug));
      assert.query(() => typia.assert(query));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
