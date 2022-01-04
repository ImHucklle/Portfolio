import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World, <br />
        My Name is Myles
      </SectionTitle>
      <SectionText>
        I’m family man of a future wife and father of a daughter and son. I’m a Marine Corp veteran. I’m a student of a full stack development program. I chose to pursue this career field to better myself and my family but also I want to create and innovate for the world. Technology is constantly changing every day and I want to contribute to that change.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;