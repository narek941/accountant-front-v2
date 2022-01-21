import styled from 'styled-components/native';

import { Flex } from '@ch/components';

export const FormContainer = styled(Flex)`
    width: ${({ theme }) => theme.structural.defaultFieldWidth};
`;
