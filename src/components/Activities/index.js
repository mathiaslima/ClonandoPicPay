import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { 
    Container, 
    Header, 
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter, 
    Details,
    Value,
    Divider,
    Date,
    DateLabel,
    Actions,
    Option,
    OptionLabel,
} from './styles'

import avatar from '../../images/avatar.png'

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@mathiaslima</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Mathias Lima</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        
                        <Divider />

                        <Date>
                            <Feather name="lock" color="#fff" size={15}/>
                            <DateLabel>há 2 horas</DateLabel>
                        </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons size={15} color="#fff" name="comment-outline" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign size={15} color="#fff" name="hearto" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>

    );
}