import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalScrollIndicator: false,
}))`
    margin-top: 25px;    
`;

export const Option = styled.View`
`;

export const Title = styled.Text`
 color: #fff;
`;