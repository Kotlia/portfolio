import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import spotifyQuizLogo from '../../assets/images/projects/spotify-quiz.png'
import littleNomadLogo from '../../assets/images/projects/little-nomad.png'
import kaedeLogo from '../../assets/images/projects/kaede-logo.jpg'
import caedeLogo from '../../assets/images/projects/caede-logo.jpg'
import voicetextLogo from '../../assets/images/projects/voicetext-logo.jpg'
import vektorLogo from '../../assets/images/projects/vektor-logo.jpg'
import larouteLogo from '../../assets/images/projects/laroute-logo.jpg'
import timecapsuleLogo from '../../assets/images/projects/timecapsule-logo.jpg'
import simononlineLogo from '../../assets/images/projects/simononline-logo.jpg'
class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={kaedeLogo}
            colour="#FFFFFF"
            title="Kaede"
            link="https://github.com/Kotlia/Kaede"
            timeperiod="Kotlin"
            subtitle="K for Kotlin. Japanese language operation library. Also contains experimental python library."
          />
            <ExperienceUnit
                logo={caedeLogo}
                colour="#FFFFFF"
                title="Caede"
                link="https://github.com/Kotlia/Caede"
                timeperiod="C++"
                subtitle="C for C++. Japanese language operation library. Still under development."
            />
          <ExperienceUnit
              logo={vektorLogo}
              title="Vektor.js"
              link="https://github.com/Kotlia/Vektor.js"
              timeperiod="JavaScript / Node.js"
              subtitle="Vector operation library in JavaScript."
          />
          <ExperienceUnit
              logo={larouteLogo}
              title="LaRoute.js"
              link="https://github.com/Kotlia/LaRoute"
              timeperiod="Node.js"
              subtitle="Simple opensource web application framework."
          />
          <ExperienceUnit
              logo={timecapsuleLogo}
              title="Timecapsule.js"
              link="https://github.com/Kotlia/Timecapsule.js"
              timeperiod="Node.js"
              subtitle="Make your variable survive reboot."
          />
          <ExperienceUnit
              logo={voicetextLogo}
              title="VoiceText.js"
              link="https://github.com/Kotlia/VoiceText.js"
              timeperiod="Node.js"
              subtitle="API library that converts a text to a voice"
          />
          <ExperienceUnit
              logo={simononlineLogo}
              title="SimonOnline.cf"
              colour="#A0B0C0"
              link="https://simononline.cf/"
              timeperiod="HTML / CSS / JavaScript"
              subtitle="Play 'Simon' game online!"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
