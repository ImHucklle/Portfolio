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
        I'm a full-stack developer, with a broad experience in technologies and languages. I'm passionate about software development because I love to solve complex problems that offer solutions to a greater cause. 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/listerm6/'}>Find Out More </Button>
    </LeftSection>
  </Section>

);

export default Hero;