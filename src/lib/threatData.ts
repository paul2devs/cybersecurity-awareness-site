import { Threat } from "@/types";

export const threats: Threat[] = [
  {
    id: '1',
    name: 'Phishing',
    shortDescription: 'Deceptive attempts to steal sensitive information',
    details: [
      'Attackers pose as trustworthy entities',
      'Often delivered via email or fake websites',
      'May include urgent or enticing messages',
    ],
    impacts: [
      'Identity theft',
      'Financial loss',
      'Unauthorized access to accounts',
    ],
    icon: '🎣',
    image: '/threats/phishing.jpg',
    preventionId: '4',
    category: "",
    severity: 0
  },
  {
    id: '2',
    name: 'Malware',
    shortDescription: 'Malicious software designed to harm or exploit',
    details: [
      'Includes viruses, trojans, and ransomware',
      'Can be spread through downloads or infected links',
      'Often disguised as legitimate software',
    ],
    impacts: [
      'Data theft or destruction',
      'System damage',
      'Financial extortion (in case of ransomware)',
    ],
    icon: '🦠',
    image: '/threats/malware.jpeg',
    preventionId: '11',
    category: "",
    severity: 0
  },
  {
    id: '3',
    name: 'Social Engineering',
    shortDescription: 'Psychological manipulation to gain information',
    details: [
      'Exploits human trust and behavior',
      'Can occur online or in person',
      'Often combined with other attack methods',
    ],
    impacts: [
      'Unauthorized access to systems or data',
      'Reputational damage',
      'Financial loss',
    ],
    icon: '🎭',
    image: '/threats/social_engineering.jpg',
    preventionId: '6',
    category: "",
    severity: 0
  },
  {
    id: '4',
    name: 'Ransomware',
    shortDescription: 'Malware that locks data and demands payment',
    details: [
      'Encrypts data and files, making them unusable',
      'Attackers demand ransom for decryption',
      'Commonly spread through phishing emails and malicious downloads',
    ],
    impacts: [
      'Loss of critical data',
      'Financial loss due to ransom payments',
      'Potential business disruption',
    ],
    icon: '💰',
    image: '/threats/ransomware.jpg',
    preventionId: '7',
    category: "",
    severity: 0
  },
  {
    id: '5',
    name: 'DDoS Attack',
    shortDescription: 'Overloads systems to make them unavailable',
    details: [
      'Attackers flood servers with traffic to crash systems',
      'Often done using botnets, which are networks of infected devices',
      'Can be used to disrupt services and demand ransom',
    ],
    impacts: [
      'Loss of access to websites or services',
      'Revenue loss for online businesses',
      'Potential reputational damage',
    ],
    icon: '🌐',
    image: '/threats/ddos.jpg',
    preventionId: '8',
    category: "",
    severity: 0
  },
  {
    id: '6',
    name: 'SQL Injection',
    shortDescription: 'Injection of malicious SQL code',
    details: [
      'Targets vulnerabilities in databases',
      'Attackers insert code to view or delete data',
      'Often affects poorly protected websites',
    ],
    impacts: [
      'Data theft or manipulation',
      'Potential unauthorized access to accounts',
      'System damage and data corruption',
    ],
    icon: '💻',
    image: '/threats/sql_injection.jpg',
    preventionId: '9',
    category: "",
    severity: 0
  },
  {
    id: '7',
    name: 'Insider Threat',
    shortDescription: 'Threats posed by people within the organization',
    details: [
      'Includes employees, contractors, and partners',
      'Insiders may intentionally or unintentionally expose data',
      'Can be hard to detect since insiders have legitimate access',
    ],
    impacts: [
      'Data leaks and theft',
      'Reputational damage',
      'Financial and legal consequences',
    ],
    icon: '🕵️‍♂️',
    image: '/threats/insider_threat.jpg',
    preventionId: '10',
    category: "",
    severity: 0
  },
  {
    id: '8',
    name: 'Zero-Day Exploit',
    shortDescription: 'Exploiting unknown software vulnerabilities',
    details: [
      'Targets software flaws not yet discovered by developers',
      'Attackers take advantage before patches are released',
      'Commonly sold on the dark web',
    ],
    impacts: [
      'Unauthorized access and data theft',
      'System compromise or shutdown',
      'Financial and reputational damage',
    ],
    icon: '⏳',
    image: '/threats/zero_day.jpg',
    preventionId: '3',
    category: "",
    severity: 0
  },
  {
    id: '9',
    name: 'Man-in-the-Middle (MitM)',
    shortDescription: 'Intercepting communication between two parties',
    details: [
      'Attackers position themselves between two parties to spy or alter data',
      'Commonly occurs on unsecured Wi-Fi networks',
      'Can lead to sensitive data being stolen or manipulated',
    ],
    impacts: [
      'Unauthorized access to sensitive information',
      'Financial fraud',
      'Potential identity theft',
    ],
    icon: '🔍',
    image: '/threats/mitm.jpg',
    preventionId: '5',
    category: "",
    severity: 0
  },
  {
    id: '10',
    name: 'Cryptojacking',
    shortDescription: 'Unauthorized use of devices to mine cryptocurrency',
    details: [
      'Attackers use malware to hijack devices for mining',
      'Commonly spread through infected websites or downloads',
      'Can significantly slow down infected devices',
    ],
    impacts: [
      'Device performance issues',
      'Increased power and internet costs',
      'Potential device damage over time',
    ],
    icon: '💻💰',
    image: '/threats/cryptojacking.jpg',
    preventionId: '38',
    category: "",
    severity: 0
  },
  {
    id: '11',
    name: 'Session Hijacking',
    shortDescription: "Taking over a user's session for unauthorized access",
    details: [
      'Attackers steal session tokens to impersonate users',
      'Common in online banking and shopping platforms',
      'Can lead to unauthorized actions and data theft',
    ],
    impacts: [
      'Financial fraud',
      'Loss of personal data',
      'Unauthorized transactions',
    ],
    icon: '🔑',
    image: '/threats/session_hijacking.jpg',
    preventionId: '23',
    category: "",
    severity: 0
  },
  {
    id: '12',
    name: 'Botnets',
    shortDescription: 'Network of compromised devices controlled by attackers',
    details: [
      'Devices are infected to form a network used for attacks',
      'Often used in DDoS attacks or to spread malware',
      'Controlled remotely by attackers without user knowledge',
    ],
    impacts: [
      'Increased internet and power usage',
      'Involuntary involvement in cyber attacks',
      'Device performance degradation',
    ],
    icon: '🤖',
    image: '/threats/botnets.jpg',
    preventionId: '8',
    category: "",
    severity: 0
  },
  {
    id: '13',
    name: 'Clickjacking',
    shortDescription: 'Tricking users into clicking on unintended content',
    details: [
      'Invisible buttons or links layered over legitimate content',
      'Often used to install malware or enable unauthorized actions',
      'Users unknowingly interact with malicious elements',
    ],
    impacts: [
      'Unauthorized changes to user settings',
      'Potential malware installation',
      'Data or financial loss',
    ],
    icon: '🖱️',
    image: '/threats/clickjacking.png',
    preventionId: '23',
    category: "",
    severity: 0
  },
  {
    id: '14',
    name: 'Malvertising',
    shortDescription: 'Using online ads to spread malware',
    details: [
      'Infected ads appear on legitimate websites',
      'Often used to spread viruses or collect user data',
      'Malware downloads when users click on ads',
    ],
    impacts: [
      'System infection with malware',
      'Data theft',
      'Device performance issues',
    ],
    icon: '📢',
    image: '/threats/malvertising.jpg',
    preventionId: '4',
    category: "",
    severity: 0
  },
  {
    id: '15',
    name: 'Yahoo Scams',
    shortDescription: 'Fraudulent schemes to deceive victims online for financial gain',
    details: [
      'Scammers often create fake profiles on social media or dating sites',
      'Build trust with victims to manipulate them into sending money',
      'Includes fake lottery wins, investment schemes, and romance scams',
    ],
    impacts: [
      'Victims suffer financial loss',
      'Emotional impact, especially with romance scams',
      'Potential reputational damage for associated businesses or individuals',
    ],
    icon: '🤑',
    image: '/threats/yahoo_scam.jpg',
    preventionId: '6',
    category: "",
    severity: 0
  },
  {
    id: '16',
    name: 'SIM Swapping',
    shortDescription: 'Hijacking phone numbers to intercept two-factor authentication codes',
    details: [
      "Attackers trick the telecom provider into switching the victim's number to a new SIM",
      'Used to bypass SMS-based two-factor authentication',
      'Commonly used in financial fraud and account takeovers',
    ],
    impacts: [
      'Unauthorized access to accounts',
      'Financial theft',
      'Loss of control over phone number and communications',
    ],
    icon: '📲',
    image: '/threats/sim swapping.png',
    preventionId: '2',
    category: "",
    severity: 0
  },
  {
    id: '17',
    name: 'Formjacking',
    shortDescription: 'Injecting malicious code into online forms to steal data',
    details: [
      'Code is added to forms on legitimate websites',
      'Collects sensitive data like credit card details and personal info',
      'Victims unknowingly enter data into a compromised form',
    ],
    impacts: [
      'Data theft',
      'Financial fraud',
      'Loss of trust in affected websites or companies',
    ],
    icon: '📝',
    image: '/threats/formjacking.jpg',
    preventionId: '9',
    category: "",
    severity: 0
  },
  {
    id: '18',
    name: 'DNS Spoofing',
    shortDescription: 'Redirecting traffic from legitimate websites to malicious sites',
    details: [
      'Attackers alter DNS records to send users to fake sites',
      'Users may think they are on a trusted site while entering sensitive info',
      'Often used in phishing attacks and malware distribution',
    ],
    impacts: [
      'Data theft',
      'Malware infection',
      'Potential financial loss',
    ],
    icon: '🌐',
    image: '/threats/dns_spoofing.jpg',
    preventionId: '5',
    category: "",
    severity: 0
  },
  {
    id: '19',
    name: 'Rainbow Table Attack',
    shortDescription: 'Using precomputed tables to crack hashed passwords quickly',
    details: [
      'Attackers use a "rainbow table" to look up password hashes',
      'Can quickly break weakly hashed passwords',
      'Commonly used when passwords are stored without sufficient encryption',
    ],
    impacts: [
      'Unauthorized access to accounts',
      'Data theft',
      'Potential compromise of entire systems',
    ],
    icon: '🌈',
    image: '/threats/rainbow_table.jpg',
    preventionId: '1',
    category: "",
    severity: 0
  },
  {
    id: '20',
    name: 'Business Email Compromise (BEC)',
    shortDescription: 'Targeting businesses by impersonating executives to deceive employees',
    details: [
      'Attackers often pose as CEOs or executives',
      'Requests for urgent wire transfers or confidential info',
      'Highly targeted social engineering attack on specific employees',
    ],
    impacts: [
      'Financial loss',
      'Reputational damage',
      'Loss of sensitive business information',
    ],
    icon: '💼',
    image: '/threats/bec.jpg',
    preventionId: '14',
    category: "",
    severity: 0
  },
  {
    id: '21',
    name: 'Typosquatting (URL Hijacking)',
    shortDescription: 'Tricking users by creating URLs similar to popular sites',
    details: [
      'Attackers register domains with slight misspellings of popular sites',
      'Users may land on these sites by mistyping URLs',
      'Often used to spread malware or collect login details',
    ],
    impacts: [
      'Malware infection',
      'Data theft',
      'Financial fraud',
    ],
    icon: '✍️',
    image: '/threats/typosquatting.jpg',
    preventionId: '4',
    category: "",
    severity: 0
  },
  {
    id: '22',
    name: 'Session Fixation',
    shortDescription: 'Forcing users to use a known session ID for unauthorized access',
    details: [
      'Attackers set a session ID and trick victims into using it',
      "Allows attackers to access the victim's session",
      'Often targets online shopping or banking websites',
    ],
    impacts: [
      'Financial fraud',
      'Unauthorized account access',
      'Data theft',
    ],
    icon: '🔑',
    image: '/threats/session_fixation.jpg',
    preventionId: '9',
    category: "",
    severity: 0
  },
  {
    id: '23',
    name: 'Juice Jacking',
    shortDescription: 'Compromising charging stations to steal data or install malware',
    details: [
      'Attackers infect USB charging stations in public places',
      'Malware is installed or data stolen when devices are plugged in',
      'Common in airports, cafes, and other public spaces',
    ],
    impacts: [
      'Data theft',
      'Device malware infection',
      'Loss of personal or corporate data',
    ],
    icon: '🔋',
    image: '/threats/juice_jacking.jpg',
    preventionId: '13',
    category: "",
    severity: 0
  },
  {
    id: '24',
    name: 'Cryptographic Attacks',
    shortDescription: 'Targeting encryption algorithms to decrypt sensitive data',
    details: [
      'Includes methods like brute force, side-channel, and birthday attacks',
      'Often used to break or weaken encrypted data',
      'Requires high computational power',
    ],
    impacts: [
      'Unauthorized access to encrypted data',
      'Potential for large-scale data breaches',
      'Loss of confidentiality for sensitive info',
    ],
    icon: '🔐',
    image: '/threats/cryptographic_attack.jpg',
    preventionId: '16',
    category: "",
    severity: 0
  },
  {
    id: '25',
    name: 'Cross-Site Scripting (XSS)',
    shortDescription: 'Injecting malicious scripts into websites to attack users',
    details: [
      'Attackers insert malicious scripts into webpages viewed by others',
      'Scripts can steal cookies, session tokens, or redirect users',
      'Common in forums, comment sections, and untrusted inputs',
    ],
    impacts: [
      'User data theft',
      'Session hijacking',
      'Loss of trust in affected website',
    ],
    icon: '🔓',
    image: '/threats/xss.jpg',
    preventionId: '23',
    category: "",
    severity: 0
  },
  {
    id: '26',
    name: 'Brute Force Attack',
    shortDescription: 'Cracking passwords by trying multiple combinations',
    details: [
      'Attackers systematically attempt all possible passwords',
      'Can be mitigated by strong passwords and account lockout policies',
      'Automated using software tools for rapid attempts',
    ],
    impacts: [
      'Account compromise',
      'Unauthorized access',
      'Data loss',
    ],
    icon: '🔨',
    image: '/threats/brute_force.jpg',
    preventionId: '1',
    category: "",
    severity: 0
  },
  {
    id: '27',
    name: 'Eavesdropping Attack',
    shortDescription: 'Intercepting communication to gather information',
    details: [
      'Can happen over unsecured networks',
      'Often used to gather login credentials or private data',
      "Passive attack, so it's hard to detect",
    ],
    impacts: [
      'Data loss',
      'Privacy compromise',
      'Potential for identity theft',
    ],
    icon: '👂',
    image: '/threats/eavesdropping.jpg',
    preventionId: '5',
    category: "",
    severity: 0
  },
  {
    id: '28',
    name: 'Privilege Escalation',
    shortDescription: 'Exploiting vulnerabilities to gain higher access permissions',
    details: [
      'Attackers exploit flaws to gain elevated privileges',
      "Can be vertical (higher permissions) or horizontal (another user's privileges)",
      'Common in poorly configured systems',
    ],
    impacts: [
      'Unauthorized access to sensitive data',
      'Potential for system control',
      'Increased scope of attack',
    ],
    icon: '📈',
    image: '/threats/privilege_escalation.jpg',
    preventionId: '12',
    category: "",
    severity: 0
  },
  {
    id: '29',
    name: 'Credential Stuffing',
    shortDescription: 'Using leaked credentials to access other accounts',
    details: [
      'Attackers test username-password pairs from previous breaches',
      'Targets users who reuse passwords across multiple accounts',
      'Automated with bots to try multiple credentials quickly',
    ],
    impacts: [
      'Account compromise',
      'Data theft',
      'Financial loss',
    ],
    icon: '🔑',
    image: '/threats/credential_stuffing.jpg',
    preventionId: '1',
    category: "",
    severity: 0
  },
  {
    id: '30',
    name: 'Spyware',
    shortDescription: 'Software that secretly records user activity and transmits data',
    details: [
      'Often bundled with other software',
      'Can monitor keystrokes, screen activity, and browsing habits',
      'Used for data theft, surveillance, or identity theft',
    ],
    impacts: [
      'Privacy invasion',
      'Data theft',
      'Financial loss',
    ],
    icon: '🔍',
    image: '/threats/spyware.jpg',
    preventionId: '11',
    category: "",
    severity: 0
  },
  {
    id: '31',
    name: 'Worms',
    shortDescription: 'Self-replicating malware that spreads across networks',
    details: [
      'Spreads independently without user intervention',
      'Can infect entire networks quickly',
      'Often used to overload systems or spread ransomware',
    ],
    impacts: [
      'System performance issues',
      'Network disruption',
      'Potential data loss',
    ],
    icon: '🪱',
    image: '/threats/worm.jpg',
    preventionId: '8',
    category: "",
    severity: 0
  },
  {
    id: '32',
    name: 'Drive-by Download',
    shortDescription: 'Unintended download of malicious software',
    details: [
      'Occurs when visiting compromised or malicious websites',
      'Users are unaware that malware is being downloaded',
      'Often exploits outdated software or plugins',
    ],
    impacts: [
      'Device infection',
      'Data theft',
      'System compromise',
    ],
    icon: '💾',
    image: '/threats/drive_by_download.jpg',
    preventionId: '3',
    category: "",
    severity: 0
  },
];