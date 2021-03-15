import React from "react";
import { Auth } from "aws-amplify";
import {
  connectStyle,
  Container,
  Header,
  Body,
  Title,
  Content,
  Text,
  List,
  ListItem,
} from "native-base";

class SettingsScreen extends React.Component {
  onLogoutPress = () => {
    try {
      Auth.signOut();
    } catch (error) {
      console.log("Error Signing Out: ", error);
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Settings</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem button onPress={this.onLogoutPress}>
              <Text>Log Out</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default connectStyle("platform")(SettingsScreen);
