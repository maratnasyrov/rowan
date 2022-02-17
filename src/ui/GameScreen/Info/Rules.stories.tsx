import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
  Block,
  Content,
  Description,
  List,
  ListItem,
  Modal,
  ModalActions,
  ModalContent,
  Payouts,
  Section,
} from '../../../components';
import { CloseButton } from '../buttons';
import {
  ImageInfoBlock,
  PaylinesBlock,
  ScatterSymbolBlock,
  WildSymbolBlock,
} from './blocks';
import { TerminologySection, UserGuideSection } from './sections';

// const link =
//   'https://rules.test.releaseband.com/en/paytables/witch_treasures/images/';

// const scatterSymbol = `${link}9_hu961ea338010759597094e494b6871071_36192_0x128_resize_box_2.png`;
// const wildSymbol = `${link}0_hu5bd66828cc3eaab55db294a1be824be9_38010_0x126_resize_box_2.png`;
// const symbol1 = `${link}1_hu154de33cc9d5bd6e495efb2520224fde_37506_0x126_resize_box_2.png`;
// const symbol2 = `${link}2_hu0d9b137059d6081d63dad8b876d08c40_33384_0x121_resize_box_2.png`;
// const symbol3 = `${link}3_hu8dff5433d979e9a3ff1d1f213ad6d6c9_31054_0x121_resize_box_2.png`;
// const symbol4 = `${link}4_hu0fb224639000a169946729e56af7e4e5_37631_0x131_resize_box_2.png`;
// const magicCircle = `${link}magic-circle_hu4200cfa38549ac99652653aaa789e5d1_35536_0x128_resize_box_2.png`;

export default {
  title: 'ui/GameScreen/info/Rules',
} as Meta;

const Template: Story = () => {
  return (
    <Modal>
      <ModalContent>
        <Content>
          <Section title="Pay table">
            <WildSymbolBlock src="assets/xiao_treasures/emperor.png">
              <Description>
                Wild symbols can only appear on reels 2,3,4 and 5.
              </Description>
              <Description>
                A Wild symbol substitutes for any symbol except Money Symbol.
              </Description>
            </WildSymbolBlock>
            <ScatterSymbolBlock src="assets/xiao_treasures/princess.png">
              <Description>
                Scatter symbols can only appear on reels 2,3 and 5.
              </Description>
            </ScatterSymbolBlock>
            <ImageInfoBlock
              title="Coin Symbol"
              src="assets/xiao_treasures/coin.png"
            >
              <Description>
                Acts as a bonus symbol and appears on all reels.
              </Description>
            </ImageInfoBlock>
            <ImageInfoBlock
              title="Free Spins"
              src="assets/xiao_treasures/princess.png"
            >
              <Description>
                3 or more Scatter symbols in any position trigger the Free Spins
                Feature.
              </Description>
            </ImageInfoBlock>
            <ImageInfoBlock
              title="Coin Spins"
              src="assets/xiao_treasures/coin.png"
            >
              <Description>
                6 or more Coin symbols in any position trigger the Coin Spins
                Feature.
              </Description>
            </ImageInfoBlock>
            <Block title="Payout">
              <Payouts
                symbols={[
                  {
                    src: 'assets/xiao_treasures/emperor.png',
                    payouts: [null, null, null, '150$', '200$', '500$'],
                  },
                ]}
              />
              <Payouts
                symbols={[
                  {
                    src: 'assets/xiao_treasures/fan.png',
                    payouts: [null, null, null, '15$', '20$', '150$'],
                  },
                  {
                    src: 'assets/xiao_treasures/lotus.png',
                    payouts: [null, null, null, '15$', '20$', '50$'],
                  },
                  {
                    src: 'assets/xiao_treasures/teapot.png',
                    payouts: [null, null, null, '15$', '20$', '50$'],
                  },
                ]}
              />
            </Block>
            <Block title="Scatter symbol">
              <Payouts
                symbols={[
                  {
                    src: 'assets/xiao_treasures/princess.png',
                    payouts: [null, null, null, '150$', '200$', '500$'],
                  },
                ]}
              />
            </Block>
            <PaylinesBlock
              reels={5}
              rows={3}
              lines={[
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 1, 1],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [0, 0, 1, 1, 0],
                [0, 0, 1, 1, 1],
                [0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1],
              ]}
            />
          </Section>
          <Section title="Game rules">
            <Block title="Overview" titleAlign="left">
              <List>
                <ListItem>
                  Xiao Treasures is a video slot with following feature(s):
                </ListItem>
                <List>
                  <ListItem>Free Spins feature</ListItem>
                  <ListItem>Coin Symbol feature</ListItem>
                </List>
                <ListItem>
                  A 5-reel, up to 3-row video slot with 10 symbols.
                </ListItem>
                <ListItem>10 win lines (see pay table for more info).</ListItem>
                <ListItem>
                  A Wild symbol substitutes for any symbol except Coin Symbol.
                </ListItem>
                <ListItem>
                  A winning combination pays from left to right.
                </ListItem>
                <ListItem>
                  Coinciding wins on multiple combinations are paid out.
                </ListItem>
                <ListItem>
                  The highest win per activated win line is paid.
                </ListItem>
                <ListItem>
                  Winnings are calculated by multiplying the value of the symbol
                  in pay table and the number of the ways of the winning symbol.
                </ListItem>
                <ListItem>
                  All symbol payout values in pay table are displayed in the
                  same currency as bet placed.
                </ListItem>
                <ListItem>
                  Different reel configurations are used, depending on the game
                  mode (main game or any of the bonus modes).
                </ListItem>
              </List>
            </Block>
            <Block title="Coin Symbol feature" titleAlign="left">
              <List>
                <ListItem>
                  Coin Symbol acts as a bonus symbol and appears on all reels.
                </ListItem>
                <ListItem>The Coin Symbol gives a random win.</ListItem>
              </List>
            </Block>
            <Block title="Return to the player" titleAlign="left">
              <List>
                <ListItem>
                  The theoretical return to the player for this game is 96.02%.
                </ListItem>
                <ListItem>
                  The theoretical return to the player for Free Spins feature
                  buy is 96.12%.
                </ListItem>
                <ListItem>
                  The theoretical return to the player for Coin Symbol feature
                  buy is 96.21%.
                </ListItem>
                <ListItem>
                  Optimal return to player is achieved by choosing Free Spins
                  feature mode.
                </ListItem>
                <ListItem>
                  Simulated maximum payout is 5555 times the bet (1:25000000
                  rounds).
                </ListItem>
              </List>
            </Block>
            <Block title="Additional information" titleAlign="left">
              <List>
                <ListItem>A malfunction voids all winnings.</ListItem>
                <ListItem>
                  Malfunction in gaming hardware/software; all affected bets are
                  refunded.
                </ListItem>
                <ListItem>
                  Game rounds not finished within 6 months will automatically be
                  closed. Any accumulated wins during that game round will be
                  paid out.
                </ListItem>
                <ListItem>
                  Autoplay automatically plays the game for selected number of
                  rounds or when any of the advanced autoplay setting criterias
                  are fulfilled.
                </ListItem>
                <ListItem>
                  When changing autoplay settings during a game round, all
                  settings will take effect upon completion of the game round or
                  feature.
                </ListItem>
                <ListItem>
                  Some autoplay features may be mandatory for some
                  jurisdictions.
                </ListItem>
                <ListItem>
                  When playing with Cryptocurrency, unfinished game rounds and
                  states will automatically reset after 24 hours. Any
                  accumulated wins during this round will be paid out.
                </ListItem>
              </List>
            </Block>
          </Section>
          <UserGuideSection />
          <TerminologySection />
        </Content>
      </ModalContent>
      <ModalActions>
        <CloseButton />
      </ModalActions>
    </Modal>
  );
};

export const Rules = Template.bind({});
