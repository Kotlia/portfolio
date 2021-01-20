import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../HighlightUnit'

import miyabiLogo from '../../assets/images/highlight/miyabi.png'
import Spacer from "../HighlightUnit/spacer";

class HighlightSection extends React.Component {
  render() {
    return (
      <Section title="Highlight">
        <div className="row">
            <Spacer />
          <ExperienceUnit
            logo={miyabiLogo}
            colour='#FFFFFF'
            title='Miyabi'
            timeperiod='ReactNative, Socket.io, Express, etc.'
            link="https://github.com/Kotlia/Miyabi"
            subtitle={<div><p>Simple server monitor created using ReactNative. Learn more: </p><a href={"https://miyabi.kotlia.me/"}><b>Click me</b></a></div>}
          />
            <Spacer />

        </div>
      </Section>
    )
  }
}

export default HighlightSection
