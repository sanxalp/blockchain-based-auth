// import React, { Component } from 'react';
// import { Grid, Image } from 'semantic-ui-react';
// import img from '../img/background7.jpeg';
// import '../App.css';

// class Home extends Component {
//     render() {
//         return (
//             <div className='home-page'>
//                 <Grid stackable columns={3} textAlign='left'>
//                     <Grid.Row>
//                         <Grid.Column width={8}>
//                             This is a demonstration of a Blockchain based authentication
//                             where login information are not stored in a database, but the
//                             hash resulting from login data is stored on a smart contract.
//                             To authenticate users need an athereum address, a username, a
//                             password and a four digit code. The user must be connected to
//                             the Blockchain before authentication since the web3 sign method
//                             is used to generate a cryptographic signature necessary for
//                             the generation of the user's login data hash.
//                         </Grid.Column>
//                         <Grid.Column width={1}>

//                         </Grid.Column>
//                         <Grid.Column width={7}>
//                             <Image src={img} alt='image' />
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//             </div>
//         );
//     }
// }

// export default Home;

// import React from "react";
// import {
//   Container,
//   Header,
//   Button,
//   Icon,
//   Grid,
//   Segment,
// } from "semantic-ui-react";
// import "../App.css";

// const Home = () => {
//   return (
//     <div className="home-page">
//       <Container text>
//         <Segment basic padded="very" textAlign="center">
//           <Header as="h1" size="huge">
//             Blockchain Authentication
//             <Header.Subheader>Secure. Decentralized. Simple.</Header.Subheader>
//           </Header>

//           <Grid stackable columns={2} className="mt-5">
// <Grid.Row>
//   <Grid.Column>
//     <Segment padded raised>
//       <Icon name="lock" size="huge" color="blue" />
//       <Header as="h3">Decentralized Security</Header>
//       <p>
//         Your login credentials are never stored in a traditional
//         database. Instead, they're securely hashed and stored on the
//         blockchain.
//       </p>
//     </Segment>
//   </Grid.Column>
//   <Grid.Column>
//     <Segment padded raised>
//       <Icon name="ethereum" size="huge" color="purple" />
//       <Header as="h3">Web3 Powered</Header>
//       <p>
//         Utilizing Ethereum's cryptographic signatures for secure
//         authentication and identity verification.
//       </p>
//     </Segment>
//   </Grid.Column>
// </Grid.Row>
//           </Grid>

//           <Button primary size="large" className="mt-4">
//             <Icon name="power" />
//             Get Started
//           </Button>
//         </Segment>
//       </Container>
//     </div>
//   );
// };

// export default Home;

import React from "react";
// import { withRouter } from "react-router-dom";
import {
  Container,
  Header,
  Button,
  Icon,
  Grid,
  Segment,
} from "semantic-ui-react";
import "../App.css";

const Home = ({ history }) => {
  const handleLearnMore = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  //   const handleGetStarted = () => {
  //     history.push("/sign-up");
  //   };

  return (
    <div className="home-page">
      <Container text>
        <Segment basic padded="very" textAlign="center">
          <div className="content">
            <h1 className="title">
              Blockchain Authentication
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
            <p className="subtitle">Secure. Decentralized. Simple.</p>
          </div>

          <Grid stackable columns={2} className="mt-5">
            <Grid.Row>
              <Grid.Column>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Icon name="shield" size="huge" className="glow-icon" />
                  </div>
                  <div className="feature-content">
                    <h3>Decentralized Security</h3>
                    <p>
                      Your login credentials are never stored in traditional
                      databases. Instead, they're securely hashed and stored on
                      the blockchain, ensuring complete privacy and security.
                    </p>
                    <div className="feature-footer">
                      <Button
                        circular
                        icon
                        onClick={() =>
                          handleLearnMore(
                            "https://aws.amazon.com/web3/decentralization-in-blockchain/"
                          )
                        }
                        aria-label="Learn more about decentralized security"
                      >
                        <Icon name="arrow right" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Icon name="ethereum" size="huge" className="glow-icon" />
                  </div>
                  <div className="feature-content">
                    <h3>Web3 Powered</h3>
                    <p>
                      Built on Ethereum's robust infrastructure, utilizing
                      cryptographic signatures for bulletproof authentication
                      and identity verification in the Web3 era.
                    </p>
                    <div className="feature-footer">
                      <Button
                        circular
                        icon
                        onClick={() =>
                          handleLearnMore("https://ethereum.org/en/web3/")
                        }
                        aria-label="Learn more about Web3"
                      >
                        <Icon name="arrow right" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Button
            primary
            size="large"
            className="mt-4"
            // onClick={handleGetStarted}
          >
            <Icon name="power" />
            Get Started
          </Button>
        </Segment>
      </Container>
    </div>
  );
};

export default Home;
