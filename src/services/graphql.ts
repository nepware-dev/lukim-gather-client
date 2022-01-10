import {gql} from '@apollo/client';

export const GET_TEST_DATA = gql`
    query GetTestData($test: String!) {
        testData(test: $test) {
            data
        }
    }
`;
