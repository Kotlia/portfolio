import full01 from '../../../assets/images/fulls/01.jpg'
import full02 from '../../../assets/images/fulls/02.jpg'
import full03 from '../../../assets/images/fulls/03.jpg'
import full04 from '../../../assets/images/fulls/04.jpg'
import full05 from '../../../assets/images/fulls/05.jpg'
import full06 from '../../../assets/images/fulls/06.jpg'
import thumb02 from '../../../assets/images/thumbs/02.jpg'
import thumb01 from '../../../assets/images/thumbs/01.jpg'
import thumb03 from '../../../assets/images/thumbs/03.jpg'
import thumb04 from '../../../assets/images/thumbs/04.jpg'
import thumb05 from '../../../assets/images/thumbs/05.jpg'
import thumb06 from '../../../assets/images/thumbs/06.jpg'
import React from 'react'

export const DEFAULT_IMAGES = [
    {
      id: '1',
      source: full01,
      thumbnail: thumb01,
        caption: <h3><a href="https://github.com/Kotlia/voicetext.js" target="_blank">VoiceText.js</a>
            <img style={{
                "margin-left" : "10px",
                "vertical-align": "middle",
                height: "1.1vw"
            }}
                 alt="npm"
                 src="https://shields.io/badge/Node.js-v14.0.0-D9B466?logo=node.js&style=for-the-badge"
            />
            <img style={{
                "margin-left" : "10px",
                "vertical-align": "middle",
                height: "1.1vw"
            }}
                 alt="npm"
                 src="https://img.shields.io/npm/dt/voicetext.js?color=D9668A&label=NPM%20Downloads&logo=npm&style=for-the-badge"
            />
      </h3>,
      description: 'API library that converts a text to a voice',
    },
    {
      id: '2',
      source: full02,
      thumbnail: thumb02,
        caption: <h3><a href="https://github.com/Kotlia/timecapsule.js" target="_blank">Timecapsule.js</a>
            <img style={{
                "margin-left" : "10px",
                "vertical-align": "middle",
                height: "1.1vw"
            }}
                 alt="npm"
                 src="https://shields.io/badge/Node.js-v14.0.0-D9B466?logo=node.js&style=for-the-badge"
            />
        </h3>,
        description: 'Make your variables survive reboot',
    },
    {
      id: '3',
      source: full03,
      thumbnail: thumb03,
        caption: <h3><a href="https://simononline.cf" target="_blank">SimonOnline</a>
            <img style={{
                "margin-left" : "10px",
                "vertical-align": "middle",
                height: "1.1vw"
            }}
                 alt="npm"
                 src="https://shields.io/badge/JavaScript-ES6-D9B466?logo=javascript&style=for-the-badge"
            />
        </h3>,
        description: '"Simon" game written in: VanillaJS, HTML, and SCSS',
    },
    {
      id: '4',
      source: full04,
      thumbnail: thumb04,
      caption: 'Photo 4',
      description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
      id: '5',
      source: full05,
      thumbnail: thumb05,
      caption: 'Photo 5',
      description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    },
    {
      id: '6',
      source: full06,
      thumbnail: thumb06,
      caption: 'Photo 6',
      description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    }
]