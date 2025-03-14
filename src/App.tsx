import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import '@mantine/core/styles.css';
import './fonts/JSLAncient.css';
import './fonts/Dominica.css';

import {
  Anchor,
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  HoverCard,
  MantineProvider,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Switch,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { theme } from './theme';
import { motion } from 'motion/react';

import headerImg from '/joe-con-header.png';

import classes from './App.module.css';
import { useState } from 'react';
import { useDisclosure, useElementSize, useHover } from '@mantine/hooks';

export default function App() {
  const [chengo, setChecked] = useState(false);
  const { ref, height } = useElementSize();

  const specialGuests = [
    {
      name: 'Phoebe Chan',
      description: '2.5D fairytale idol that everyone loves',
      image: 'feebee-anime.png',
      image2: 'feebee-real.jpg',
      website: 'https://feebeechanchibi.com/',
      twitter: 'https://x.com/feebeechanchibi',
      youtube: 'https://youtube.com/c/feebeechanchibi',
      instagram: 'https://instagram.com/feebeechanchibi',
    },
    {
      name: 'Pengy',
      description: 'Talented Florida idol buddy',
      image: 'pengy.jpg',
      twitter: 'https://x.com/Pengy_Time',
      youtube: 'https://www.youtube.com/channel/UCbfdRXAyPAkZRKJ7_SFPEVQ',
      instagram: 'https://www.instagram.com/pengy_time',
    },
    {
      name: 'Lavendula',
      description: "Local friend who's an amazing singer",
      image: 'lavendula.jpg',
      twitter: 'https://x.com/lavendulasings',
      instagram: 'https://www.instagram.com/lavendulasings',
    },
    {
      name: 'Pan Ranger',
      description: 'Bread + Tokusatsu = ♥',
      image: 'pan-ranger.jpg',
      website: 'https://panranger.net/',
      twitter: 'https://x.com/bakerysentai',
      instagram: 'https://instagram.com/panranger',
    },
    {
      name: 'AniParty',
      description: 'DJ friends that make you go ie-taiga-faiba-waipa',
      image: 'aniparty.jpg',
      twitter: 'https://x.com/anisongparty',
    },
    {
      name: 'AniWaza',
      description: 'Friends that wave bright glowing sticks around',
      image: 'aniwaza.jpg',
      twitter: 'https://x.com/aniwazaofficial',
    },
  ];

  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Box className={classes.parchment} mod={{ chengo }} h={height} />
      <svg
        role="img"
        aria-label="parchment-filter"
        style={{ position: 'absolute' }}
      >
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>

      <Box
        pos="fixed"
        top="10px"
        right="20px"
        p="sm"
        c={chengo ? 'black' : 'white'}
        style={{ zIndex: 3 }}
      >
        <Switch
          label="Chengo Vision"
          size="md"
          checked={chengo}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        />
      </Box>

      <Flex ref={ref} className={classes.backgroundFlex}>
        <Box
          display={chengo ? 'block' : 'none'}
          pos="absolute"
          top="95vh"
          h={750}
          w="100%"
          style={{
            backgroundImage: `url(${headerImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            zIndex: 1,
          }}
        />
        <Box maw="1000px" m="0 auto" p="3rem">
          <Box h="100vh">
            <Center h="100%">
              <Stack style={{ zIndex: 3 }}>
                <Title
                  order={1}
                  className={classes.eventTitle}
                  mod={{ chengo }}
                >
                  JoeCon
                </Title>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.5, delay: 0.5 },
                  }}
                >
                  <HoverCard openDelay={750}>
                    <HoverCard.Target>
                      <Title
                        order={2}
                        className={classes.eventSubtitle}
                        mod={{ chengo }}
                        fz="clamp(2rem, 12vw, 4rem)"
                      >
                        {chengo
                          ? 'Idus Martius MMXXV'
                          : 'Saturday, March 15th, 2025'}
                      </Title>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                      <Text size="sm">No stabbings please</Text>
                    </HoverCard.Dropdown>
                  </HoverCard>

                  <Title
                    order={2}
                    className={classes.eventSubtitle}
                    mod={{ chengo }}
                    fz="clamp(1.5rem, 10vw, 3.5rem)"
                  >
                    4PM - 12AM (ET)
                  </Title>
                </motion.div>
              </Stack>
            </Center>
          </Box>

          <motion.div
            style={{ marginTop: '50vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
          >
            <Text className={classes.mainBodyText} mod={{ chengo }}>
              Hello, my name is Joe.
            </Text>
            <Text className={classes.mainBodyText} mod={{ chengo }}>
              I'm turning 30 this year. And because it's my 30th birthday...
            </Text>
            <Text className={classes.mainBodyText} mod={{ chengo }}>
              As a milestone event, I decided to host a convention.
            </Text>

            <Text mt="10rem" className={classes.mainBodyText} mod={{ chengo }}>
              Except venues in the area are way too expensive and I can't afford
              to book one for just a birthday event.
            </Text>
            <Text className={classes.mainBodyText} mod={{ chengo }}>
              So now I'm doing something a little bit different.
            </Text>

            <Text mt="6rem" className={classes.mainBodyText} mod={{ chengo }}>
              Instead, it's going to be a fun, anikura-style event with DJs,
              performances, and all kinds of shenanigans. Be sure to bring
              penlights.
            </Text>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
          >
            <Text className={classes.mainBodyText} mod={{ chengo }}>
              It's located at 710 S Ann St, Baltimore, MD 21231
            </Text>
            <AspectRatio ratio={16 / 9} p="1rem">
              <iframe
                title="Venue location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.2225722393455!2d-76.5940537870784!3d39.28320267152597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80380fadd6797%3A0x7c6a693c9720983d!2s710%20S%20Ann%20St%2C%20Baltimore%2C%20MD%2021231!5e0!3m2!1sen!2sus!4v1738888062214!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                style={{
                  filter: 'invert(90%) hue-rotate(180deg)',
                  border: 'none',
                }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AspectRatio>

            <Text mt="6rem" className={classes.mainBodyText} mod={{ chengo }}>
              For parking, it's either street parking or there's a couple
              garages within walking distance.
            </Text>

            <Text mt="6rem" className={classes.mainBodyText} mod={{ chengo }}>
              There won't be food provided (but there will be cake). Scroll down
              for food recommendation list.
            </Text>
            <Text mt="3rem" className={classes.mainBodyText} mod={{ chengo }}>
              The venue allows food and alcohol, so feel free to grab food and
              then come back. Just be sure to clean after yourselves.
            </Text>

            <motion.div
              whileInView={{
                rotate: [0, 2, 0, -2],
                scale: [1, 1.05],
                transition: {
                  delay: 0.3,
                  duration: 0.25,
                  repeat: 1,
                  repeatType: 'reverse',
                },
              }}
              viewport={{ amount: 0.9 }}
            >
              <Paper
                className={classes.paper}
                radius="lg"
                shadow="lg"
                mt="2rem"
                mod={{ chengo }}
              >
                <Text className={classes.mainBodyText} mod={{ chengo }}>
                  Instead of a birthday present, I just ask for $20 (only if
                  you're finacially able), to help offset venue costs.
                </Text>
              </Paper>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh', marginBottom: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Title
              order={3}
              className={classes.sectionHeaders}
              mt="2rem"
              mod={{ chengo }}
            >
              Food within Walking Distance
            </Title>
            <Text className={classes.mainBodyText} mod={{ chengo }}>
              This area, Fells Point, is known for food and bars, so there's a
              lot of good options to try
            </Text>
            <Table fz="2rem" c="white">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Cuisine</Table.Th>
                  <Table.Th>Name</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>Asian Fusion Fried Chicken</Table.Td>
                  <Table.Td>Ekiben (Personal Recommendation)</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Various Options</Table.Td>
                  <Table.Td>Broadway Market</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Chinese Takeout</Table.Td>
                  <Table.Td>Golden Wok</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Pizza</Table.Td>
                  <Table.Td>Pie in the Sky</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Burger</Table.Td>
                  <Table.Td>Abbey Burger Fells Point</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Sushi</Table.Td>
                  <Table.Td>Nanami Cafe</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Mexican</Table.Td>
                  <Table.Td>BMORE Taquieria</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh', marginBottom: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Title
              order={3}
              className={classes.sectionHeaders}
              mod={{ chengo }}
            >
              Now for the fun stuff
            </Title>
            <Title
              order={3}
              className={classes.sectionHeaders}
              mod={{ chengo }}
            >
              We've got...
            </Title>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Title
              order={3}
              className={classes.sectionHeaders}
              mod={{ chengo }}
            >
              Special Guests
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
              {specialGuests.map((g) => {
                const { hovered, ref } = useHover();
                const [opened, { open, close }] = useDisclosure(false);

                return (
                  <>
                    <Modal
                      key={`modal-${g.name}`}
                      opened={opened}
                      onClose={close}
                      title="Social Media Links"
                    >
                      <Stack gap="lg" justify="center" align="stretch">
                        {g?.website && (
                          <>
                            <Anchor href={g.website} target="_blank">
                              Website
                            </Anchor>
                            <Divider />
                          </>
                        )}
                        {g?.twitter && (
                          <>
                            <Anchor href={g.twitter} target="_blank">
                              X/Twitter
                            </Anchor>
                            <Divider />
                          </>
                        )}
                        {g?.instagram && (
                          <>
                            <Anchor href={g.instagram} target="_blank">
                              Instagram
                            </Anchor>
                            <Divider />
                          </>
                        )}
                        {g?.youtube && (
                          <Anchor href={g.youtube} target="_blank">
                            YouTube
                          </Anchor>
                        )}
                      </Stack>
                    </Modal>
                    <Card
                      key={`card-${g.name}`}
                      className={classes.specialGuestCard}
                      shadow="sm"
                      radius="md"
                      withBorder
                      mod={{ chengo }}
                      h="500px"
                      style={{
                        backgroundImage: `url(${g.image})`,
                      }}
                      ref={ref}
                    >
                      {g?.image2 && (
                        <Card.Section
                          pos="absolute"
                          top="1rem"
                          left="1rem"
                          h="500px"
                          w="100%"
                          style={{
                            opacity: hovered ? 1 : 0,
                            transition: 'all 0.35s',
                          }}
                          bg={`url(${g.image2})`}
                          bgsz="500px auto"
                          bgp="center top 10%"
                          bgr="no-repeat"
                        />
                      )}
                      <Center
                        h="100%"
                        opacity={hovered ? 1 : 0}
                        style={{ transition: 'all 0.5s' }}
                      >
                        <Card.Section
                          style={{ zIndex: 2, borderRadius: '0.75rem' }}
                          p="1rem"
                          bg="rgba(0,0,0,0.6)"
                        >
                          <Title
                            order={4}
                            className={classes.specialGuestTitle}
                            mod={{ chengo }}
                          >
                            {g.name}
                          </Title>
                          <Text
                            className={classes.specialGuestDescription}
                            mod={{ chengo }}
                          >
                            {g.description}
                          </Text>
                          <Button onClick={open} fullWidth mt="2rem">
                            Social Media Links
                          </Button>
                        </Card.Section>
                      </Center>
                    </Card>
                  </>
                );
              })}
            </SimpleGrid>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <Title
              order={3}
              className={classes.sectionHeaders}
              mod={{ chengo }}
            >
              Schedule
            </Title>
            <Stack>
              <Title
                order={4}
                className={classes.scheduleTitle}
                mod={{ chengo }}
              >
                The Dickballin' Stage [4 - 6PM]
              </Title>
              <Text className={classes.scheduleDescription} mod={{ chengo }}>
                Limited to people who are performing for the 1st time or final
                time at an event. (Debuts or Graduations only, 15 minute DJ or
                performance set)
              </Text>
              <Text
                fw="bold"
                className={classes.scheduleDescription}
                mod={{ chengo }}
              >
                DJ Orly - DJ Y2Kz - DJ Tofu - DJ Tenchi - DJoe - Ashes - Harmony
              </Text>
              <Divider />

              <Title
                order={4}
                className={classes.scheduleTitle}
                mod={{ chengo }}
              >
                Performances [6:20 - 8:30 PM]
              </Title>
              <Text className={classes.scheduleDescription} mod={{ chengo }}>
                Consists of my all my talented friends doing singing, dancing,
                or both. You may even see me...
              </Text>
              <Text
                fw="bold"
                className={classes.scheduleDescription}
                mod={{ chengo }}
              >
                Phoebe, Katherine, Aniwaza, Lavendula, Pan Ranger, ?Joe?, Pengy,
              </Text>
              <Divider />

              <Title
                order={4}
                className={classes.scheduleTitle}
                mod={{ chengo }}
              >
                Cake Time!
              </Title>
              <Text className={classes.scheduleDescription} mod={{ chengo }}>
                No birthday party is complete without cake! This will be a bit
                of a break to eat cake and relax a bit.
              </Text>
              <Divider />

              <Title
                order={4}
                className={classes.scheduleTitle}
                mod={{ chengo }}
              >
                Aniparty Vol. Joe [9 PM - 12 AM]
              </Title>
              <Text className={classes.scheduleDescription} mod={{ chengo }}>
                Last, but not least, my friends from Aniparty will be closing
                out the night with some anikura shenanigans!
              </Text>
              <Text
                className={classes.scheduleDescription}
                fw="bold"
                mod={{ chengo }}
              >
                DJ Appare - DJ Dekimasen - DJ Wazahai - DJ Th3rdEye - DJ SignalΔ
              </Text>
              <Divider />
            </Stack>
          </motion.div>
        </Box>
      </Flex>
    </MantineProvider>
  );
}
