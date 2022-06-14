import { gql } from "apollo-server";

export default gql`
    type Mutation {
        webFilter(
            FstInstance: String!
            SndInstance: String!
            TrdInstance: String!
        ): MutationResponse!
    }
`;