import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import '@mantine/core/styles.css';
import {
  AspectRatio,
  Box,
  Card,
  Center,
  Divider,
  Flex,
  List,
  MantineProvider,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { theme } from './theme';
import { motion } from 'motion/react';

import classes from './App.module.css';

export default function App() {
  const specialGuests = [
    {
      name: 'Pengy',
      description: 'My super talented Florida idol buddy',
    },
    {
      name: 'Lavendula',
      description: "Local friend who's an amazing singer",
    },
  ];

  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Flex bg="#0f1115" direction="column" w="100%" mih="100vh">
        <Box maw="1000px" m="0 auto" p="1rem">
          <Box h="100vh">
            <Center h="100%">
              <Stack>
                <Title order={1} className={classes.eventTitle}>
                  JoeCon
                </Title>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.5, delay: 0.5 },
                  }}
                >
                  <Title order={2} c="gray.1" fz="clamp(2rem, 12vw, 4rem)">
                    Saturday, March 15th, 2025
                  </Title>

                  <Title order={2} c="gray.1" fz="clamp(1.5rem, 10vw, 3.5rem)">
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
            <Text className={classes.mainBodyText}>Hello, my name is Joe.</Text>
            <Text className={classes.mainBodyText}>
              I'm turning 30 this year. And because it's my 30th birthday...
            </Text>
            <Text className={classes.mainBodyText}>
              As a milestone event, I decided to host a convention.
            </Text>

            <Text mt="10rem" className={classes.mainBodyText}>
              Except venues in the area are way too expensive and I can't afford
              to book one for just a birthday event.
            </Text>
            <Text className={classes.mainBodyText}>
              So now I'm doing something a little bit different.
            </Text>

            <Text mt="6rem" className={classes.mainBodyText}>
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
            <Text className={classes.mainBodyText}>
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

            <Text mt="6rem" className={classes.mainBodyText}>
              For parking, it's either street parking or there's a couple
              garages within walking distance.
            </Text>

            <Text mt="6rem" className={classes.mainBodyText}>
              There won't be food provided (but there will be cake). There's a
              lot of good food places in the area, such as, Ekiben.
            </Text>
            <Text className={classes.mainBodyText}>
              The venue allows food and alcohol, so feel free to grab food and
              then come back. Just be sure to clean after yourselves.
            </Text>

            <Text mt="6rem" className={classes.mainBodyText}>
              There is a max capacity to the venue, so I will be keeping track
              of RSVPs.
            </Text>

            <motion.div
              whileInView={{
                rotate: [0, 2, 0, -2],
                scale: [1, 1.05],
                transition: {
                  duration: 0.35,
                  repeat: 1,
                  repeatType: 'reverse',
                },
              }}
              viewport={{ amount: 0.9 }}
            >
              <Paper p="2rem" radius="lg" shadow="lg">
                <Text className={classes.mainBodyText}>
                  Instead of a birthday present, I just ask for $20 (only if
                  you're finacially able), to help offset venue costs.
                </Text>
                <Text mt="4rem" className={classes.mainBodyText}>
                  To RSVP, just message Joe however you can and let him know you
                  can come and any specific +1's you want to bring.
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
            <Title order={3} className={classes.sectionHeaders}>
              Now for the fun stuff
            </Title>
            <Title order={3} className={classes.sectionHeaders}>
              We've got...
            </Title>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Title order={3} className={classes.sectionHeaders}>
              Special Guests
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
              {specialGuests.map((g) => (
                <Card
                  key={g.name}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Card.Section h="200px">
                    <Center h="100%">Image pending...</Center>
                  </Card.Section>
                  <Title order={4} className={classes.specialGuestTitle}>
                    {g.name}
                  </Title>
                  <Text className={classes.specialGuestDescription}>
                    {g.description}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
            <Text className={classes.mainBodyText} ta="center">
              And more to come...
            </Text>
          </motion.div>

          <motion.div
            style={{ marginTop: '25vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Title order={3} className={classes.sectionHeaders}>
              Schedule [Tentative]
            </Title>
            <Stack>
              <Title order={4} className={classes.scheduleTitle}>
                The Dickballing Stage
              </Title>
              <Text className={classes.scheduleDescription}>
                Limited to people who are performing for the 1st time or final
                time at an event. (Debuts or Graduations only, 15 minute DJ or
                performance set)
              </Text>
              <Text fs="italic" className={classes.scheduleDescription}>
                If you would like to join, let Joe know. Spots are limited and
                we're halfway filled.
              </Text>
              <Divider />

              <Title order={4} className={classes.scheduleTitle}>
                Performances
              </Title>
              <Text className={classes.scheduleDescription}>
                Consists of my all my talented friends doing singing, dancing,
                or both. You may even see me...
              </Text>
              <Text fs="italic" className={classes.scheduleDescription}>
                If you'd like to do something, let Joe know.
              </Text>
              <Divider />

              <Title order={4} className={classes.scheduleTitle}>
                Cake Time!
              </Title>
              <Text className={classes.scheduleDescription}>
                No birthday party is complete without cake! This will be a bit
                of a break to eat cake and relax a bit.
              </Text>
              <Divider />

              <Title order={4} className={classes.scheduleTitle}>
                Aniparty Vol. Joe
              </Title>
              <Text className={classes.scheduleDescription}>
                Last, but not least, my friends from Aniparty will be closing
                out the night with some anikura shenanigans!
              </Text>
              <Text className={classes.scheduleDescription}>
                Confirmed DJs:
              </Text>
              <List fz="1.25rem">
                <List.Item>DJ Appare</List.Item>
                <List.Item>DJ Dekimasen</List.Item>
                <List.Item>DJ Wazahai</List.Item>
                <List.Item>DJ Th3rdEye</List.Item>
                <List.Item>DJ SignalΔ</List.Item>
              </List>
              <Divider />
            </Stack>
          </motion.div>
        </Box>
      </Flex>
    </MantineProvider>
  );
}
