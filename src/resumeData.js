import React from 'react'
import logoFrikin from './static/img/frikin.png'
import logoPwnie from './static/img/pwnie.jpeg'
import logoDealer from './static/img/dealer.com.jpg'
import logoPropeller from './static/img/propeller.png'
import logoEpikone from './static/img/epikone.png'
import logoBluehouse from './static/img/bluehouse.png'

export default {
  name: 'Casey P. Sullivan',
  position: 'Skilled UI/UX Developer',
  location: 'South Burlington, VT',
  objective: 'To hold a position in web site and web application development.',
  email: 'casey.sullivan@gmail.com',
  offline:
    'I enjoy the outdoors Vermont has to offer. I play disc golf in the summer and try to ski in the winter. I love music and collect vinyl records and old stereo equipment, as well as concert posters from local designers. I spend too much money on video games.',
  footer:
    'Use of corporate logos and colors does not imply ownership or creation',
  repoUrl: 'https://github.com/yesacs/resume',
  education: {
    degree: 'B.S., Computer Science',
    school: "Saint Michael's College",
    location: { city: 'Colchester', state: 'VT' },
    duration: { start: 2000, end: 2004 },
  },
  contact: [
    {
      class: 'twitter',
      url: 'https://twitter.com/casey_sullivan',
    },
    {
      class: 'facebook',
      url: 'https://www.facebook.com/Da.Denim.Devil',
    },
    {
      class: 'linkedin',
      url: 'https://www.linkedin.com/in/caseypsullivan',
    },
  ],
  jobs: [
    {
      title: 'Head of Product Design',
      company: 'FRIKINtech',
      industry: 'Car Dealership Operations',
      location: { city: 'Williston', state: 'VT' },
      logo: logoFrikin,
      tools: [
        'React',
        'Redux',
        'ES6',
        'HTMX',
        'Clojure',
        'Sass',
        'Node',
        'Git',
      ],
      current: true,
      description: (
        <>
          <p>
            FRIKINtech provides car dealers with a toolset to cultivate their
            existing customer base by automating the delivery of personalized
            car payments using customer's real equity, along with rebates, fees
            and taxes included.
          </p>
          <p>
            As Head of Product Design and sole UI/UX Developer, I am responsible
            for the design, development and maintenance of the front end user
            interfaces of illumiQUOTE, our online shopping presence used by
            dealers and buyers to lookup equity and build custom, penny-perfect
            Payments.
          </p>
        </>
      ),
      duties: [],
      duration: { start: 2018 },
      class: 'frikin',
      links: [
        { url: 'https://www.frikintech.com', label: 'FRIKINtech' },
        {
          url: 'https://www.illumiquote.com/your-dealership',
          label: 'illumiQUOTE',
        },
      ],
    },
    {
      title: 'User Experience Developer',
      company: 'Pwnie Express',
      industry: 'Cyber Security',
      location: { city: 'Burlingon', state: 'VT' },
      logo: logoPwnie,
      duration: { start: 2015, end: 2018 },
      duties: [],
      tools: [
        'React',
        'Redux',
        'ES6',
        'Ruby/Rails',
        'Node',
        'Sass',
        'Ember',
        'Git',
      ],
      description: (
        <>
          <p>
            Pwnie Express was a cutting-edge firm that equipped cyber security
            professionals with hardware and software to detect, locate and
            mitigate threats to their corporate or government networks.
          </p>
          <p>
            As part of the Burlington based engineering team, I lead the UI/UX
            design and development of Pulse, the Ember-based cloud app used by
            our customers to make sense of the massive amount of data that our
            hardware would collect. I also lead design efforts of Pulse v2, a
            re-imagining of Pulse using React and Redux.
          </p>
        </>
      ),
      class: 'pwnie',
      links: [
        {
          url: 'https://web.archive.org/web/20190920093830/https://www.pwnieexpress.com/pulse',
          label: 'PwnPulse (Archive.org)',
        },
      ],
    },
    {
      title: 'User Interface Developer',
      company: 'Dealer.com',
      industry: 'Car Dealership Marketing and Operations',
      location: { city: 'Burlingon', state: 'VT' },
      logo: logoDealer,
      duration: { start: 2010, end: 2015 },
      description: (
        <>
          <p>
            Dealer.com, which is now a part of Cox Automotive, specializes in
            end-to-end online marketing solutions for car dealers. This
            includes, but isn't limited to, websites, SEM and SEO, and
            reputation management.
          </p>
          <p>
            At Dealer.com, I was part of their first foray into dealership
            operations software. I was one of two UI developers on the team and
            my responsibilities included the visual design and user experience
            of the CRM tool used by our dealership customers to manage their
            daily tasks as well as future sales prospects and current
            opportunities.
          </p>
        </>
      ),
      duties: [
        'UI/UX developer and designer for DT CRM, the fastest growing automotive CRM in the US',
        'Designed and developed the Dealer.com Pencil Tool, a realtime car payment engine',
        'Developed embedable js apps designed to augment existing apps without backend integrations',
        'Met face-to-face with our dealership customers for demos and feedback',
        'Created internal CRM for in-house sales teams using Grails',
      ],
      tools: [
        'React',
        'Redux',
        'ES6',
        'Knockout',
        'jQuery',
        'Groovy/Grails',
        'YUI',
        'Node',
        'Sass',
        'Git',
      ],
      links: [
        { url: 'http://www.dealer.com', label: 'Dealer.com' },
        { url: 'http://www.coxautoinc.com/', label: 'Cox Automotive' },
      ],
      class: 'ddc',
    },
    {
      title: 'Interactive Developer',
      company: 'Propeller Media Works',
      industry: 'Custom Website Design and Development',
      location: { city: 'Burlingon', state: 'VT' },
      logo: logoPropeller,
      duration: { start: 2009, end: 2010 },
      description: (
        <>
          <p>
            Propeller is a longtime fixture in the Burlington web dev world.
            Specializing in ADA compliant and accessible websites, their
            workcovers of broad set of industries, including high-fashion
            brands, ski resorts, medical and ecommerce.
          </p>
          <p>
            During my time with Propeller, I was an Interactive Developer, the
            primary on-staff developer responsible for maintaining the 60+
            websites in the company's care at the time. I worked closely with
            designers, taking PSD site mockups and turning them into reality
            using a combination of PHP, CSS and JS. I maintained the in-house
            CMS used to create these sites, and I prototyped a next-gen version
            that used Ruby on Rails.
          </p>
        </>
      ),
      tools: ['PHP', 'ES5', 'jQuery', 'CSS', 'SVN', 'Ruby on Rails'],
      links: [
        { url: 'http://www.propelled.com', label: 'Propeller Media Works' },
      ],
      class: 'propeller',
    },
    {
      title: 'Manager Software + Analytics',
      company: 'EpikOne',
      industry: 'Google Analytics Consulting and Marketing',
      location: { city: 'Burlingon', state: 'VT' },
      logo: logoEpikone,
      duration: { start: 2007, end: 2009 },
      tools: ['Ruby/Rails', 'ES5', 'jQuery', 'CSS', 'SVN'],
      description: (
        <>
          <p>
            EpikOne was one of the first Google Analytics Authorized
            Consultancies (GAAC) in the country, providing tools and expertise
            to businesses of all sizes, from small chocolate shops looking for
            basic help with online marketing concepts to international
            corporations looking for deep analysis to inform online ad campaign
            spends.
          </p>
          <p>
            At EpikOne, I built a suite of tools used by our customers to manage
            and verify their GA installs and generate cross-account reporting
            for complex GA setups. I also conceived a centralized management
            tool used by our consults and their clients to manage all aspects of
            their projects, including threaded comms and project timelines.
          </p>
        </>
      ),
      xduties: [
        'Lead Ruby on Rails developer for one of the premier Google Analytics Authorized Consultancies',
        "Led development of SiteScan and AnalyticsView, EpikOne's two general public apps",
        'Built DigitalMIDI, a marketing communications dashboard for enterprise',
        'Extensive development using the Google Analytics API',
        'General Mac desktop support and technology consulting',
        'Created the EpikOne.com website using standards-based XHTML and CSS',
      ],
      links: [
        {
          url:
            'https://web.' +
            'archive.org/web/20090503125637/http://www.epikone.com/',
          label: 'EpikOne (Archive.org)',
        },
      ],
      class: 'epikone',
    },
    {
      title: 'HTML Production',
      company: 'Bluehouse Group',
      logo: logoBluehouse,
      location: { city: 'Richmond', state: 'VT' },
      duration: { start: 2005, end: 2007 },
      description: (
        <>
          <p>
            Bluehouse Group is a small but skilled full-service web design and
            development house that creates websites for a broad spectrum of
            industries.
          </p>
          <p>
            At Bluehouse, I worked as the front-end developer on a team of four,
            taking PSD designs from our in-house designer and converting them to
            HTML/CSS/JS to first create static sites, then working with back end
            developers to make them dynamic using PHP. While at Bluehouse, I
            worked on 30+ websites ranging in all sizes from pro-bono sites for
            nonprofits to large, bespoke ecommerce solutions for built to order
            furniture.
          </p>
        </>
      ),
      xduties: [
        'Developer of standards-based HTML and CSS, and PHP sites ranging from simple brochure sites to high-end e-commerce',
        'Web site production, development, and maintenance of over 30 sites',
        'Translation of designs from Photoshop into HTML and CSS',
        'Research of new technologies for use on future projects, such as Ajax and Ruby on Rails',
        'Helped develop Content Creator, a CMS system for sites that allows clients to build out the content of a site themselves',
      ],
      tools: ['PHP', 'ES5', 'CSS'],
      links: [
        { url: 'http://www.bluehousegroup.com', label: 'Bluehouse Group' },
      ],
      class: 'bluehouse',
    },
  ],
  skills: [
    {
      title: 'Javascript',
      subSkills: [
        'React',
        'jQuery',
        'Knockout',
        'Grunt',
        'Gulp',
        'Browserify',
        'Lodash',
        'ESlint',
        'CommonJS',
        'Jasmine',
        'YUI',
      ],
    },
    {
      title: 'Technologies',
      subSkills: [
        'Grails/Groovy',
        'Java',
        'Ruby on Rails',
        'PHP',
        'HTML',
        'CSS/Sass',
        'Jenkins',
        'Github',
        'Fisheye/Crucible',
      ],
    },
    {
      title: 'Operating Systems',
      subSkills: ['MacOS X', 'Windows', 'Linux'],
    },
    {
      title: 'Other Skills',
      subSkills: [
        'Scrum Agile/SAFe',
        'Desktop Support',
        'Cross-browser Testing',
        'Jira',
        'Rally',
        'Google Apps',
      ],
    },
  ],
  hobbies: [
    <>
      I love to play board games. My favorite game is Bus!
      <br /> See my plays on{' '}
      <a href="https://boardgamegeek.com/user/yesacs">BGG</a>!
    </>,
    <>
      I bike! I own five bikes! Want to buy a bike!?
      <br /> Give me kudos on{' '}
      <a href="https://www.strava.com/athletes/62551764">Strava</a>
    </>,
    <>
      I'm on <a href="https://github.com/yesacs">Github</a> for my personal
      projects.
      <br />
      Hope you like dotfiles!
    </>,
    <>
      I'm on <a href="https://www.linkedin.com/in/caseypsullivan/">LinkedIn</a>
    </>,
    <>
      I'm on <a href="https://twitter.com/casey_sullivan">Twitter</a>
    </>,
  ],
}
