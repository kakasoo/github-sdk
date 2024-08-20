export namespace IApiOrgsTeams {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
  };
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type PatchHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
  };
}
