import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../HighlightUnit'

import miyabiLogo from '../../assets/images/highlight/miyabi.png'
import reactI18nAuto from "../../assets/images/highlight/react-i18n-auto.png"

class HighlightSection extends React.Component {
  render() {
    return (
      <Section title="Recent Projects">
        <div className="row">
            <ExperienceUnit
                logo={miyabiLogo}
                colour='#FFFFFF'
                title='Miyabi'
                timeperiod='ReactNative, Socket.io, Express, etc.'
                link="https://github.com/Kotlia/Miyabi"
                subtitle={<div><p>Simple server monitor created using ReactNative. Learn more: </p><a href={"https://miyabi.kotlia.me/"}><b>Click me</b></a></div>}
            />
            <ExperienceUnit
                logo={reactI18nAuto}
                colour='#FFFFFF'
                title='react-i18n-auto'
                timeperiod='TypeScript (React)'
                link="https://github.com/Kotlia/react-i18n-auto"
                subtitle={<div><p>React component to automatically translate string component with Google Translate API - without API Key.<b><a href={"https://www.npmjs.com/package/@kotlia/react-i18n-auto"}> NPM Repo</a></b> available.</p></div>}
            />
        </div>
      </Section>
    )
  }
}

export default HighlightSection
