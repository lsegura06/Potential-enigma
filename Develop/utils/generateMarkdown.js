// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// if (!license) {
//   return '';
// }

// switch (license) {
//   case 'MIT':
//     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
//   case 'Apache 2.0':
//     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
//   case 'GPL 3.0':
//     return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
//   default:
//     return '';
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// if (!license) {
//   return '';
// }

// switch (license) {
//   case 'MIT':
//     return 'https://opensource.org/licenses/MIT';
//   case 'Apache 2.0':
//     return 'https://www.apache.org/licenses/LICENSE-2.0';
//   case 'GPL 3.0':
//     return 'https://www.gnu.org/licenses/gpl-3.0';
//   default:
//     return '';
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// if (!license) {
//   return '';
// }

// const badge = renderLicenseBadge(license);
// const link = renderLicenseLink(license);

// return `## License

// This project is licensed under the ${license} license. ${badge}

// You can find the full license text at ${link}`;

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   ${renderLicenseSection(data.license)}

// `;
// }

// module.exports = generateMarkdown;
