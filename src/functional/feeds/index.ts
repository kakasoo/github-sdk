import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { feed } from "../../structures/feed";
/**
 * Get feeds.
 * Lists the feeds available to the authenticated user. The response provides a URL for each feed. You can then get a specific feed by sending a request to one of the feed URLs.
 *
 * *   **Timeline**: The GitHub global public timeline
 * *   **User**: The public timeline for any user, using `uri_template`. For more information, see "[Hypermedia](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."
 * *   **Current user public**: The public timeline for the authenticated user
 * *   **Current user**: The private timeline for the authenticated user
 * *   **Current user actor**: The private timeline for activity created by the authenticated user
 * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
 * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
 *
 * By default, timeline resources are returned in JSON. You can specify the `application/atom+xml` type in the `Accept` header to return timeline resources in Atom format. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * > [!NOTE]
 * > Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/authentication/authenticating-to-the-rest-api#using-basic-authentication) since current feed URIs use the older, non revocable auth tokens.
 *
 * @tag activity
 * @path feeds
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          path: get.path(),
          status: null,
        },
      );
}
export namespace get {
  export type Output = feed;

  export const METADATA = {
    method: "GET",
    path: "/feeds",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/feeds";
  export const random = (g?: Partial<typia.IRandomGenerator>): feed =>
    typia.random<feed>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
