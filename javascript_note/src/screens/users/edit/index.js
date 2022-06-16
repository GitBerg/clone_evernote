import { Column, Section, Title, Container, Card } from "rbx";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";


const UserEditScreen = () => (
    <>
        <HeaderLogged />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Informações Pessoais
                        </Title>
                        <Card>
                            <Card.Content>
                                Users Edit Form...
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Password
                        </Title>
                        <Card>
                            <Card.Content>
                                Users Edit Password Form...
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={4} className="has-text-right">
                        Users Delete Button...
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </>
);

export default UserEditScreen;