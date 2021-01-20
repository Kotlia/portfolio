import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import zomatoLogo from '../../assets/images/experience/zomato-logo.svg'
import fitsoLogo from '../../assets/images/experience/fitso-logo.jpg'
import kayakoLogo from '../../assets/images/experience/kayako-logo-2.jpg'
import jsTsLogo from '../../assets/images/experience/typescript_logo_2020.svg'
import jvmLogo from '../../assets/images/experience/kotlin-logo.svg'
import reactLogo from '../../assets/images/experience/react-logo.svg'
import cppLogo from '../../assets/images/experience/cpp-logo.svg'
import k8sLogo from '../../assets/images/experience/kubernetes-logo.svg'
import sqlLogo from '../../assets/images/experience/mysql-logo.svg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={jsTsLogo}
            colour='#3178C6'
            title='JavaScript/TypeScript'
            timeperiod='ES6 - ES10'
            subtitle='My favourite language. Developed libraries, websites, and experienced several frameworks.'
          />
          <ExperienceUnit
              logo={jvmLogo}
              colour='#27282C'
              title='JVM'
              timeperiod='Java, Kotlin & Scala'
              subtitle='Fluent in JVM languages. Love Gradle, but not Maven.'
          />
          <ExperienceUnit
              logo={reactLogo}
              title='ReactJS'
              colour="#222222"
              timeperiod='ReactNative, NextJS, Redux & GatsbyJS'
              subtitle='This portfolio is developed using ReactJS.'
          />
          <ExperienceUnit
              logo={sqlLogo}
              title='Database'
              timeperiod='MySQL, SQLite, Redis, etc...'
              subtitle='Experience in managing database and operation through Node.js, JVM, Python, etc.'
          />
          <ExperienceUnit
              logo={cppLogo}
              title='C/C++'
              timeperiod='14/20'
              subtitle='Currently learning.'
          />
          <ExperienceUnit
              logo={k8sLogo}
              title='Container'
              timeperiod='k8s, Docker & Docker Compose'
              subtitle='Excerience in infrastructure. Fluent in UNIX and ShellScript.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
