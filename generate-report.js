const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: './reports',
  reportPath: './reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    platform: {
      name: 'windows',
      version: '11'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'DigiCert UI Tests' },
      { label: 'Environment', value: 'QA' },
      { label: 'Execution Mode', value: 'Local' },
      { label: 'Browser', value: 'Chrome' },
      { label: 'Browser Version', value: '120.0.6112.113' },
      { label: 'Node Version', value: 'v18.16.0' },
      { label: 'Cucumber Version', value: '8.7.0' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'B11221.343' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() }
    ]
  },
  openReportInBrowser: true, 
});
