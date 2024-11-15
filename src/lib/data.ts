import { GlossaryTerm, Course, Resource, AssessmentQuestion, NewsItem} from '@/types'
import { Book, Video, Wrench, GraduationCap } from 'lucide-react';


// News Section

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Malware Campaign Uses Ethereum Smart Contracts to Control npm Typosquat Packages',
    content: 'A detailed analysis of how a recent malware campaign is leveraging Ethereum smart contracts to control typosquatted npm packages.',
    summary: 'This article discusses a new malware campaign that uses Ethereum smart contracts to control npm typosquat packages, posing a significant threat to developers.',
    imageUrl: '/news/hackers.webp',
    date: '2024-11-05',
    url: 'https://thehackernews.com/2024/11/malware-campaign-uses-ethereum-smart.html',
    description: 'A recent malware campaign has been discovered that utilizes Ethereum smart contracts to manipulate npm typosquatted packages, potentially affecting thousands of developers.',
    source: 'Cybersecurity News',
    category: 'Malware / Blockchain',
  },
  {
    id: '2',
    title: 'Major Cloud Provider Suffers Global Outage Due to Sophisticated DDoS Attack',
    content: 'A leading cloud service provider experienced a worldwide outage lasting several hours due to an unprecedented distributed denial-of-service (DDoS) attack.',
    summary: 'This report covers the recent global outage of a major cloud provider caused by a sophisticated DDoS attack, affecting millions of users worldwide.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-07-30',
    url: 'https://tacsecurity.com/microsoft-hit-by-ddos-attack-global-cloud-service-disruption-on-july-30-2024/',
    description: 'A major cloud service provider faced a global outage due to a sophisticated DDoS attack, highlighting the need for improved infrastructure resilience.',
    source: 'Tech Insider',
    category: 'Cloud Security / DDoS',
  },
  {
    id: '3',
    title: 'New Quantum-Resistant Encryption Standard Announced by NIST',
    content: 'The National Institute of Standards and Technology (NIST) has officially announced a new encryption standard designed to withstand attacks from quantum computers.',
    summary: 'NIST unveils a groundbreaking quantum-resistant encryption standard, preparing for the era of quantum computing.',
    imageUrl: '/news/nist.jpg',
    date: '2024-11-15',
    url: 'https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards/',
    description: 'NIST has released a new encryption standard that promises to protect data against potential threats from future quantum computers.',
    source: 'Quantum Computing Today',
    category: 'Encryption / Quantum Computing',
  },
  {
    id: '4',
    title: 'AI-Powered Phishing Attacks Surge, Evading Traditional Detection Methods',
    content: 'Cybersecurity researchers report a significant increase in AI-generated phishing attacks that are bypassing conventional email security measures.',
    summary: 'This article explores the rise of AI-powered phishing attacks and their ability to evade traditional detection methods.',
    imageUrl: '/news/ai_driven.jpg',
    date: '2024-11-20',
    url: 'https://computronixusa.com/ai-phishing-attacks-cybercriminals-leveraging-automation/',
    description: 'AI-generated phishing attacks are on the rise, posing new challenges for cybersecurity professionals and traditional email security systems.',
    source: 'AI Security Watch',
    category: 'Phishing / Artificial Intelligence',
  },
  {
    id: '5',
    title: 'Critical Vulnerability Discovered in Widely-Used IoT Protocol',
    content: 'Security researchers have uncovered a severe vulnerability in a popular IoT communication protocol, potentially affecting millions of connected devices.',
    summary: 'A critical flaw in a widely-used IoT protocol puts millions of devices at risk of exploitation.',
    imageUrl: '/news/iot.jpg',
    date: '2024-11-25',
    url: 'https://www.thisdaylive.com/index.php/2024/09/26/top-vulnerabilities-in-iot-devices-what-hackers-target-how-to-defend-against-them/#:~:text=Lack%20of%20Encryption%3A%20Insufficient%20data,and%20accessed%20by%20unauthorized%20parties./',
    description: 'A newly discovered vulnerability in a common IoT protocol could allow attackers to take control of millions of connected devices.',
    source: 'IoT Security Journal',
    category: 'IoT / Vulnerabilities',
  },
  {
    id: '6',
    title: 'EU Passes Comprehensive AI Regulation, Setting Global Precedent',
    content: 'The European Union has approved a landmark artificial intelligence regulation, establishing strict guidelines for AI development and deployment.',
    summary: 'This report covers the EU\'s groundbreaking AI regulation and its potential global impact on AI development and cybersecurity.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-11-30',
    url: 'https://enactia.com/eu-parliament-adopts-landmark-ai-act-establishing-global-precedent-for-ai-regulation/#:~:text=EU%20Parliament%20Adopts%20Landmark%20AI%20Act%20Establishing%20Global%20Precedent%20for%20AI%20Regulation,-HomeAIEU&text=The%20European%20Parliament%20has%20adopted,globally%20to%20regulate%20AI%20systems./',
    description: 'The EU\'s new AI regulation sets a global precedent for responsible AI development, with significant implications for cybersecurity practices.',
    source: 'EU Policy Review',
    category: 'Artificial Intelligence / Regulation',
  },
  {
    id: '7',
    title: 'Major Cryptocurrency Exchange Hacked, Billions in Digital Assets Stolen',
    content: 'One of the world\'s largest cryptocurrency exchanges has reported a massive security breach, resulting in the theft of billions of dollars worth of digital assets.',
    summary: 'This article details a recent major hack of a cryptocurrency exchange and its implications for the broader crypto market.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-12-05',
    url: 'https://www.investopedia.com/news/largest-cryptocurrency-hacks-so-far-year/#:~:text=Cryptocurrency%20exchanges%20are%20a%20major,all%20bitcoins%20at%20the%20time./',
    description: 'A leading cryptocurrency exchange faces a severe security breach, highlighting ongoing challenges in securing digital assets.',
    source: 'Crypto Security News',
    category: 'Cryptocurrency / Data Breach',
  },
  {
    id: '8',
    title: 'New Malware Strain Targets Industrial Control Systems in Critical Infrastructure',
    content: 'Cybersecurity experts have identified a sophisticated malware specifically designed to infiltrate and disrupt industrial control systems in critical infrastructure.',
    summary: 'A new malware strain poses a significant threat to industrial control systems, potentially affecting critical infrastructure worldwide.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-12-10',
    url: 'https://thehackernews.com/2024/07/new-ics-malware-frostygoop-targeting.html/',
    description: 'A newly discovered malware strain targets industrial control systems, raising concerns about the security of critical infrastructure.',
    source: 'Industrial Cybersecurity Today',
    category: 'Malware / Critical Infrastructure',
  },
  {
    id: '9',
    title: 'Global Cybersecurity Skills Shortage Reaches Critical Levels',
    content: 'A new report highlights the growing global shortage of cybersecurity professionals, with millions of positions remaining unfilled worldwide.',
    summary: 'This article discusses the worsening cybersecurity skills gap and its impact on global digital security.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-12-15',
    url: 'https://www.securilix.com/cyber-shortage-why-the-cyber-security-employment-shortage-is-becoming-critical/',
    description: 'The global cybersecurity skills shortage reaches alarming levels, posing significant challenges for organizations worldwide.',
    source: 'Cybersecurity Workforce Report',
    category: 'Cybersecurity Workforce / Education',
  },
  {
    id: '10',
    title: 'Breakthrough in Homomorphic Encryption Enables Secure Cloud Computing',
    content: 'Researchers announce a major advancement in homomorphic encryption technology, allowing for secure computation on encrypted data in cloud environments.',
    summary: 'A significant breakthrough in homomorphic encryption promises to revolutionize secure cloud computing practices.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-12-20',
    url: 'https://www.mdpi.com/2624-800X/3/1/4',
    description: 'A new development in homomorphic encryption technology enables secure computation on encrypted data, potentially transforming cloud security.',
    source: 'Encryption Technology Review',
    category: 'Encryption / Cloud Security',
  },
  {
    id: '11',
    title: 'Nation-State Actors Exploit Zero-Day Vulnerability in Popular VPN Software',
    content: 'Security researchers have uncovered a sophisticated cyber espionage campaign exploiting a previously unknown vulnerability in widely-used VPN software.',
    summary: 'This report details a newly discovered zero-day vulnerability in VPN software being actively exploited by nation-state actors.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-12-25',
    url: 'https://therecord.media/surge-zero-day-exploits-five-eyes-report',
    description: 'A zero-day vulnerability in popular VPN software is being exploited by nation-state actors, posing a significant threat to organizational security.',
    source: 'Threat Intelligence Bulletin',
    category: 'Zero-Day / Nation-State Threats',
  },
  {
    id: '12',
    title: 'Autonomous Vehicle Networks Face New Wave of Cyber Attacks',
    content: 'Cybersecurity experts report an increase in targeted attacks against autonomous vehicle networks, raising concerns about the safety of self-driving cars.',
    summary: 'This article explores the rising threat of cyber attacks targeting autonomous vehicle networks and their potential implications.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2024-12-30',
    url: 'https://www.researchgate.net/publication/314272204_Cyber_Threats_Facing_Autonomous_and_Connected_Vehicles_Future_Challenges',
    description: 'Autonomous vehicle networks are facing an unprecedented wave of cyber attacks, challenging the security of self-driving technology.',
    source: 'Automotive Cybersecurity Journal',
    category: 'Automotive Security / IoT',
  },
  {
    id: '13',
    title: 'Major Tech Companies Form Alliance to Combat Deepfake Threats',
    content: 'Leading technology firms have announced a collaborative effort to develop advanced detection methods for combating the growing threat of deepfake content.',
    summary: 'This report covers the formation of an industry alliance aimed at addressing the challenges posed by deepfake technology.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-01-05',
    url: 'https://www.politico.eu/article/tech-accord-industry-munich-security-conference-deepfake-ai-election-content/',
    description: 'Tech giants join forces to tackle the rising threat of deepfakes, focusing on developing cutting-edge detection technologies.',
    source: 'Tech Industry News',
    category: 'Deepfakes / Artificial Intelligence',
  },
  {
    id: '14',
    title: 'New Biometric Authentication Bypass Technique Discovered',
    content: 'Researchers have identified a novel method to bypass biometric authentication systems, potentially affecting millions of devices worldwide.',
    summary: 'This article details a newly discovered technique for bypassing biometric authentication, raising concerns about the security of such systems.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-01-10',
    url: 'https://www.govinfosecurity.com/',
    description: 'A new bypass technique for biometric authentication systems has been uncovered, challenging the reliability of these widely-used security measures.',
    source: 'Biometric Security Review',
    category: 'Biometrics / Authentication',
  },
  {
    id: '15',
    title: 'Global Ransomware Attack Targets Healthcare Sector',
    content: 'A coordinated ransomware attack has hit healthcare institutions worldwide, causing widespread disruptions to medical services and patient care.',
    summary: 'This report covers a massive ransomware attack affecting healthcare providers globally, highlighting the critical need for improved cybersecurity in the sector.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-01-15',
    url: 'https://www.healthcareinfosecurity.com/',
    description: 'Healthcare institutions worldwide face a severe ransomware attack, emphasizing the urgent need for robust cybersecurity measures in the medical sector.',
    source: 'Healthcare Cybersecurity Bulletin',
    category: 'Ransomware / Healthcare',
  },
  {
    id: '16',
    title: 'Quantum Key Distribution Network Achieves Intercontinental Scale',
    content: 'Scientists announce the successful implementation of a quantum key distribution network spanning multiple continents, marking a major milestone in secure communications.',
    summary: 'This article explores the achievement of an intercontinental quantum key distribution network and its implications for global secure communications.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-01-20',
    url: 'https://www.inforisktoday.com/',
    description: 'A groundbreaking quantum key distribution network reaches intercontinental scale, promising unprecedented levels of communication security.',
    source: 'Quantum Technology Today',
    category: 'Quantum Cryptography / Network Security',
  },
  {
    id: '17',
    title: 'AI-Driven Vulnerability Discovery Tool Revolutionizes Software Testing',
    content: 'A new artificial intelligence-powered tool has been developed that can automatically identify complex vulnerabilities in software code, significantly enhancing the efficiency of security testing.',
    summary: 'This report covers the development of an AI-driven tool that promises to transform software vulnerability discovery and testing processes.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-01-25',
    url: 'https://www.careersinfosecurity.com/',
    description: 'An innovative AI-powered tool for vulnerability discovery is set to revolutionize software security testing practices.',
    source: 'AI in Cybersecurity Journal',
    category: 'Artificial Intelligence / Vulnerability Assessment',
  },
  {
    id: '18',
    title: 'Major Data Breach Exposes Biometric Data of Millions',
    content: 'A massive data breach at a global identity verification company has resulted in the exposure of biometric data belonging to millions of individuals worldwide.',
    summary: 'This article details a significant data breach involving biometric information and its potential consequences for affected individuals.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-01-30',
    url: 'https://www.databreachtoday.eu/',
    description: 'A severe data breach at a prominent identity verification firm exposes biometric data of millions, raising serious privacy and security concerns.',
    source: 'Privacy Watch',
    category: 'Data Breach / Biometrics',
  },
  {
    id: '19',
    title: 'New Legislation Mandates IoT Security Standards',
    content: 'A new law has been passed requiring manufacturers to implement specific security standards in Internet of Things (IoT) devices sold in the country.',
    summary: 'This report covers new legislation aimed at improving the security of IoT devices through mandatory standards.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-02-05',
    url: 'https://www.govinfosecurity.eu/',
    description: 'Newly enacted legislation sets mandatory security standards for IoT devices, aiming to enhance the overall security of connected products.',
    source: 'Tech Policy Review',
    category: 'IoT / Regulation',
  },
  {
    id: '20',
    title: 'Researchers Develop Unhackable Quantum Internet Protocol',
    content: 'A team of scientists has announced the creation of a new quantum internet protocol that promises unbreakable security for online communications.',
    summary: 'This article explores a breakthrough in quantum internet technology that could provide unprecedented levels of online security.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-02-10',
    url: 'https://www.healthcareinfosecurity.eu/',
    description: 'Scientists unveil a groundbreaking quantum internet protocol, potentially ushering in an era of ultra-secure online communications.',
    source: 'Quantum Computing News',
    category: 'Quantum Internet / Network Security',
  },
  {
    id: '21',
    title: 'Critical Firmware Vulnerability Affects Millions of IoT Devices',
    content: 'Security researchers have discovered a widespread firmware vulnerability that could potentially compromise millions of IoT devices across various manufacturers.',
    summary: 'This report details a newly found firmware vulnerability affecting a vast number of IoT devices and its potential impact.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-02-15',
    url: 'https://www.bankinfosecurity.eu/',
    description: 'A critical firmware flaw puts millions of IoT devices at risk, highlighting the ongoing challenges in securing the Internet of Things.',
    source: 'IoT Security Bulletin',
    category: 'IoT / Firmware Security',
  },
  {
    id: '22',
    title: 'AI-Powered Cyber Defense System Thwarts Major Attack on Power Grid',
    content: 'An artificial intelligence-driven cybersecurity system has successfully prevented a sophisticated attack targeting a national power grid infrastructure.',
    summary: 'This article explores how an AI-powered cyber defense system protected a national power grid from a major cyber attack.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-02-20',
    url: 'https://www.inforisktoday.eu/',
    description: 'An advanced AI-driven cybersecurity system successfully defends a national power grid against a sophisticated cyber attack, demonstrating the potential of AI in critical infrastructure protection.',
    source: 'Energy Sector Cybersecurity Review',
    category: 'Artificial Intelligence / Critical Infrastructure',
  },
  {
    id: '23',
    title: 'Global Cybersecurity Treaty Signed by Major World Powers',
    content: 'Leading nations have come together to sign a landmark international cybersecurity treaty, establishing norms for responsible state behavior in cyberspace.',
    summary: 'This report covers the signing of a global cybersecurity treaty and its implications for international cyber relations.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-02-25',
    url: 'https://www.databreachtoday.asia/',
    description: 'Major world powers sign a groundbreaking cybersecurity treaty, aiming to establish international norms and reduce cyber conflicts.',
    source: 'International Relations Today',
    category: 'Cyber Diplomacy / International Relations',
  },
  {
    id: '24',
    title: 'New Malware Exploits Human Brainwave Patterns in Brain-Computer Interfaces',
    content: 'Cybersecurity experts have identified a novel type of malware designed to manipulate brain-computer interfaces by exploiting human brainwave patterns.',
    summary: 'This article discusses the emergence of malware targeting brain-computer interfaces and its potential implications for neurotechnology security.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-01',
    url: 'https://www.govinfosecurity.asia/',
    description: 'A new form of malware emerges that targets brain-computer interfaces, raising concerns about the security of neurotechnology.',
    source: 'Neurotechnology Security Journal',
    category: 'Malware / Neurotechnology',
  },
  {
    id: '25',
    title: 'Quantum-Resistant Blockchain Platform Launches for Enterprise Use',
    content: 'A major technology company has unveiled a new blockchain platform designed to withstand potential attacks from quantum computers, aimed at enterprise-level applications.',
    summary: 'This report covers the launch of a quantum-resistant blockchain platform for enterprise use and its potential impact on long-term data security.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-05',
    url: 'https://www.healthcareinfosecurity.asia/',
    description: 'A new quantum-resistant blockchain platform is released for enterprise applications, addressing concerns about the future threat of quantum computing to current blockchain technologies.',
    source: 'Enterprise Blockchain Review',
    category: 'Blockchain / Quantum Computing',
  },
  {
    id: '26',
    title: 'Hackers Exploit Vulnerability in Popular Smart Home Devices',
    content: 'A widespread security flaw in a popular brand of smart home devices has been exploited by hackers, potentially compromising the privacy of millions of households.',
    summary: 'This article explores a recent hack of smart home devices and its implications for IoT security and personal privacy.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-10',
    url: 'https://www.bankinfosecurity.asia/',
    description: 'Hackers exploit a vulnerability in widely-used smart home devices, raising concerns about the security and privacy risks associated with IoT technology.',
    source: 'Smart Home Security Watch',
    category: 'IoT / Smart Home Security',
  },
  {
    id: '27',
    title: 'New AI Model Predicts Cyber Attacks with Unprecedented Accuracy',
    content: 'Researchers have developed an artificial intelligence model capable of predicting cyber attacks with a remarkably high degree of accuracy, potentially revolutionizing proactive cybersecurity measures.',
    summary: 'This report discusses a breakthrough in AI-driven cyber attack prediction and its potential impact on cybersecurity strategies.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-15',
    url: 'https://www.inforisktoday.asia/',
    description: 'A new AI model demonstrates unprecedented accuracy in predicting cyber attacks, offering potential for significantly improved proactive cybersecurity measures.',
    source: 'AI in Security Journal',
    category: 'Artificial Intelligence / Threat Intelligence',
  },
  {
    id: '28',
    title: 'Major Social Media Platform Implements End-to-End Encryption by Default',
    content: 'One of the world\'s largest social media platforms has announced the implementation of end-to-end encryption as the default setting for all user communications.',
    summary: 'This article covers a major social media platform\'s move to implement default end-to-end encryption and its implications for user privacy.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-20',
    url: 'https://www.databreachtoday.in/',
    description: 'A leading social media platform adopts end-to-end encryption by default, marking a significant step towards enhanced user privacy and security.',
    source: 'Digital Privacy News',
    category: 'Encryption / Social Media',
  },
  {
    id: '29',
    title: 'Quantum Sensors Detect Sophisticated Physical Intrusions in Data Centers',
    content: 'A new quantum sensing technology has been deployed in data centers, capable of detecting even the most subtle physical intrusions and environmental changes.',
    summary: 'This report explores the use of quantum sensors for enhancing physical security in data centers.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-25',
    url: 'https://www.govinfosecurity.in/',
    description: 'Advanced quantum sensors are being used to detect sophisticated physical intrusions in data centers, setting new standards for environmental security.',
    source: 'Data Center Security Review',
    category: 'Quantum Technology / Physical Security',
  },
  {
    id: '30',
    title: 'Global Cybersecurity Exercise Simulates Large-Scale Attack on Financial Systems',
    content: 'A coordinated international cybersecurity exercise has simulated a massive attack on global financial systems, testing the readiness of institutions and governments.',
    summary: 'This article details a global cybersecurity exercise that simulated a large-scale attack on financial systems and its outcomes.',
    imageUrl: '/placeholder.svg?height=200&width=300',
    date: '2025-03-30',
    url: 'https://www.bankinfosecurity.in/',
    description: 'A worldwide cybersecurity exercise simulates a major attack on global financial systems, assessing international preparedness and cooperation.',
    source: 'Financial Cybersecurity Bulletin',
    category: 'Cyber Exercises / Financial Security',
  },
];


// hidden tools 



// Glossary

// In your lib/data.ts or similar file

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Encryption',
    definition: 'The process of encoding information to protect its confidentiality.',
    category: 'Security',
    extendedDescription: 'Encryption transforms readable data into an encoded format that can only be accessed with the correct decryption key.',
    relatedTerms: ['Decryption', 'Cryptography']
  },
  {
    id: '2',
    term: 'Firewall',
    definition: 'A network security system that monitors and controls network traffic.',
    category: 'Network',
    extendedDescription: 'Firewalls create a barrier between trusted internal networks and untrusted external networks, filtering traffic based on security rules.',
    relatedTerms: ['Network Security', 'Access Control']
  },
  {
    id: '3',
    term: 'Malware',
    definition: 'Malicious software designed to damage or exploit computer systems.',
    category: 'Security',
    extendedDescription: 'Includes viruses, trojans, ransomware, and other harmful programs that can compromise system integrity and data.',
    relatedTerms: ['Virus', 'Ransomware', 'Trojan']
  },
  {
    id: '4',
    term: 'Zero Trust Architecture',
    definition: 'A security model that requires strict verification for every person and device.',
    category: 'Advanced',
    extendedDescription: 'Operates on the principle of "never trust, always verify" for all network access attempts.',
    relatedTerms: ['Identity Management', 'Network Segmentation']
  },
  {
    id: '5',
    term: 'Phishing',
    definition: 'A cyber attack that uses disguised email as a weapon.',
    category: 'Security',
    extendedDescription: 'Attackers attempt to trick individuals into revealing sensitive information by posing as a trustworthy entity.',
    relatedTerms: ['Social Engineering', 'Cyber Attack']
  },
  {
    id: '6',
    term: 'DDoS Attack',
    definition: 'Distributed Denial of Service attack that overwhelms a system.',
    category: 'Network',
    extendedDescription: 'Attackers flood a network or server with traffic to make it unavailable to legitimate users.',
    relatedTerms: ['Network Security', 'Cyber Attack']
  },
  {
    id: '7',
    term: 'Two-Factor Authentication',
    definition: 'A security process requiring two different authentication factors.',
    category: 'Security',
    extendedDescription: 'Adds an extra layer of protection by requiring a second form of verification beyond a password.',
    relatedTerms: ['Authentication', 'Cybersecurity']
  },
  {
    id: '8',
    term: 'Ransomware',
    definition: 'Malware that encrypts files and demands payment for decryption.',
    category: 'Advanced',
    extendedDescription: 'A type of cyber extortion where attackers lock access to systems or data until a ransom is paid.',
    relatedTerms: ['Malware', 'Cyber Crime']
  },
  {
    id: '9',
    term: 'Social Engineering',
    definition: 'Psychological manipulation to gain unauthorized access.',
    category: 'Security',
    extendedDescription: 'Exploits human psychology to trick individuals into breaking security procedures.',
    relatedTerms: ['Phishing', 'Cyber Attack']
  },
  {
    id: '10',
    term: 'VPN',
    definition: 'Virtual Private Network that creates a secure connection.',
    category: 'Network',
    extendedDescription: 'Encrypts internet traffic and masks the user\'s IP address for enhanced privacy and security.',
    relatedTerms: ['Network Security', 'Encryption']
  },
  {
    id: '11',
    term: 'AI in Cybersecurity',
    definition: 'Using artificial intelligence to detect and prevent cyber threats.',
    category: 'Advanced',
    extendedDescription: 'Leverages machine learning to identify patterns and anomalies in network traffic and system behavior.',
    relatedTerms: ['Machine Learning', 'Threat Detection']
  },
  {
    id: '12',
    term: 'Cryptography',
    definition: 'The practice of secure communication techniques.',
    category: 'Security',
    extendedDescription: 'Uses mathematical techniques to protect information from unauthorized access.',
    relatedTerms: ['Encryption', 'Decryption']
  },
  {
    id: '29',
    term: 'Advanced Persistent Threat (APT)',
    definition: 'Prolonged and targeted cyber attack.',
    category: 'Advanced',
    extendedDescription: 'A sophisticated, long-term cyber attack where an intruder establishes an ongoing presence in a network to continuously extract high-value information.',
    relatedTerms: ['Cyber Espionage', 'Targeted Attack']
  },
  {
    id: '30',
    term: 'Intrusion Detection System (IDS)',
    definition: 'Network security technology for monitoring malicious activities.',
    category: 'Network',
    extendedDescription: 'A system that monitors network traffic for suspicious activity and issues alerts when potential security breaches are detected.',
    relatedTerms: ['Network Security', 'Threat Detection']
  },
  {
    id: '31',
    term: 'Privilege Escalation',
    definition: 'Exploiting a bug to gain elevated access rights.',
    category: 'Security',
    extendedDescription: 'A type of network intrusion where an attacker leverages a vulnerability to obtain higher-level permissions within a system.',
    relatedTerms: ['Access Control', 'Vulnerability']
  },
  {
    id: '32',
    term: 'Rootkit',
    definition: 'Malware designed to provide unauthorized access to a computer system.',
    category: 'Advanced',
    extendedDescription: 'A collection of computer software typically designed to enable administrative access while hiding its existence from users and security software.',
    relatedTerms: ['Malware', 'System Compromise']
  },
  {
    id: '33',
    term: 'Supply Chain Attack',
    definition: 'Cyber attack targeting less-secure elements in a supply chain.',
    category: 'Network',
    extendedDescription: 'Attackers compromise a less-secure vendor or component to gain access to a larger, more secure target organization.',
    relatedTerms: ['Vendor Security', 'Third-Party Risk']
  },
  {
    id: '34',
    term: 'Cloud Access Security Broker (CASB)',
    definition: 'Security policy enforcement point between cloud service consumers and providers.',
    category: 'Advanced',
    extendedDescription: 'A security policy enforcement point placed between cloud service consumers and cloud service providers, combining and interposing enterprise security policies.',
    relatedTerms: ['Cloud Security', 'Access Management']
  },
  {
    id: '35',
    term: 'Buffer Overflow',
    definition: 'A vulnerability where a program writes data beyond buffer boundaries.',
    category: 'Security',
    extendedDescription: 'An anomaly where a program writes data outside the allocated buffer memory, potentially allowing execution of malicious code.',
    relatedTerms: ['Code Vulnerability', 'Memory Corruption']
  },
  {
    id: '36',
    term: 'Endpoint Detection and Response (EDR)',
    definition: 'Cybersecurity technology for detecting and responding to threats.',
    category: 'Advanced',
    extendedDescription: 'A security solution that continuously monitors end-user devices to detect and respond to cyber threats like malware and ransomware.',
    relatedTerms: ['Threat Detection', 'Incident Response']
  },
  {
    id: '37',
    term: 'Polymorphic Malware',
    definition: 'Malware that can change its code to avoid detection.',
    category: 'Security',
    extendedDescription: 'A type of malware that can modify its underlying code while maintaining the same basic functionality, making it difficult to detect by traditional antivirus methods.',
    relatedTerms: ['Malware', 'Evasion Techniques']
  },
  {
    id: '38',
    term: 'Security Orchestration',
    definition: 'Coordinating security tools and processes.',
    category: 'Advanced',
    extendedDescription: 'Automatically connecting security tools and human teams to improve threat response efficiency and reduce manual intervention.',
    relatedTerms: ['Incident Response', 'Automation']
  },
  {
    id: '39',
    term: 'Network Segmentation',
    definition: 'Dividing a network into smaller, isolated segments.',
    category: 'Network',
    extendedDescription: 'A security technique that divides a network into multiple segments, limiting the potential spread of cyber threats.',
    relatedTerms: ['Network Security', 'Access Control']
  },
  {
    id: '40',
    term: 'Secure Software Development Lifecycle (SSDLC)',
    definition: 'Integrating security practices throughout software development.',
    category: 'Advanced',
    extendedDescription: 'A process that incorporates security considerations at every stage of software development, from initial design to deployment and maintenance.',
    relatedTerms: ['DevSecOps', 'Secure Coding']
  },
  {
    id: '41',
    term: 'Threat Hunting',
    definition: 'Proactively searching for hidden threats in a network.',
    category: 'Advanced',
    extendedDescription: 'A proactive cybersecurity approach where security professionals actively search for potential security threats that may have evaded existing security solutions.',
    relatedTerms: ['Threat Detection', 'Incident Response']
  },
  {
    id: '42',
    term: 'Web Application Firewall (WAF)',
    definition: 'Security tool protecting web applications from online threats.',
    category: 'Network',
    extendedDescription: 'A firewall specifically designed to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet.',
    relatedTerms: ['Network Security', 'Application Protection']
  },
  {
    id: '43',
    term: 'Side-Channel Attack',
    definition: 'Exploiting information gained from physical implementation.',
    category: 'Advanced',
    extendedDescription: 'A cyber attack that derives secret information by analyzing physical side effects of a system, such as power consumption or electromagnetic emissions.',
    relatedTerms: ['Cryptography', 'Hardware Security']
  },
  {
    id: '44',
    term: 'Data Loss Prevention (DLP)',
    definition: 'Strategies and tools to prevent data breaches.',
    category: 'Security',
    extendedDescription: 'A set of tools and processes used to ensure that sensitive or critical information is not lost, misused, or accessed by unauthorized users.',
    relatedTerms: ['Data Protection', 'Information Security']
  },
  {
    id: '45',
    term: 'Zero-Width Attribution',
    definition: 'Tracking digital content through invisible markers.',
    category: 'Advanced',
    extendedDescription: 'A technique used to embed invisible tracking information in digital content without altering its visible appearance.',
    relatedTerms: ['Digital Forensics', 'Content Tracking']
  },
  {
    id: '46',
    term: 'Quantum Cryptography',
    definition: 'Cryptographic system using quantum mechanical principles.',
    category: 'Advanced',
    extendedDescription: 'A method of secure communication that uses quantum mechanics principles to protect data transmission.',
    relatedTerms: ['Cryptography', 'Quantum Computing']
  },
  {
    id: '47',
    term: 'Cyber Resilience',
    definition: 'Ability to continuously deliver intended outcomes despite cyber attacks.',
    category: 'Advanced',
    extendedDescription: 'An organization\'s capability to prepare for, respond to, and recover from cyber incidents while maintaining critical operations.',
    relatedTerms: ['Incident Response', 'Business Continuity']
  },
  {
    id: '48',
    term: 'Social Bot Detection',
    definition: 'Identifying automated social media accounts.',
    category: 'Network',
    extendedDescription: 'Techniques and technologies used to detect and mitigate automated accounts that spread misinformation or manipulate online discourse.',
    relatedTerms: ['Misinformation', 'Network Security']
  },
  {
    id: '49',
    term: 'Cyber Kill Chain',
    definition: 'Stages of a cyber attack from reconnaissance to execution.',
    category: 'Security',
    extendedDescription: 'A model that describes the stages of a cyber attack, helping organizations understand and prevent sophisticated intrusions.',
    relatedTerms: ['Threat Modeling', 'Attack Methodology']
  },
  {
    id: '50',
    term: 'Homomorphic Encryption',
    definition: 'Encryption allowing computations on encrypted data.',
    category: 'Advanced',
    extendedDescription: 'A form of encryption that permits computations to be performed on encrypted data without decrypting it first.',
    relatedTerms: ['Cryptography', 'Privacy Protection']
  },
  {
    id: '51',
    term: 'Attack Surface',
    definition: 'Total potential entry points for cyber attacks.',
    category: 'Network',
    extendedDescription: 'The sum of all potential vulnerabilities and entry points that an attacker could exploit in a system or network.',
    relatedTerms: ['Vulnerability Assessment', 'Security Architecture']
  },
  {
    id: '52',
    term: 'Darknet Analysis',
    definition: 'Investigating hidden parts of the internet.',
    category: 'Advanced',
    extendedDescription: 'Techniques used to monitor and analyze illegal activities and potential security threats on encrypted, anonymous networks.',
    relatedTerms: ['Cyber Intelligence', 'Dark Web']
  },
  {
    id: '53',
    term: 'Behavioral Biometrics',
    definition: 'Identifying individuals through unique behavior patterns.',
    category: 'Security',
    extendedDescription: 'Authentication method that recognizes individuals based on unique patterns in their digital interactions.',
    relatedTerms: ['Authentication', 'Cybersecurity']
  },
  {
    id: '54',
    term: 'Cyber Physical Systems Security',
    definition: 'Protecting systems that bridge digital and physical worlds.',
    category: 'Advanced',
    extendedDescription: 'Security approaches for systems that integrate computational and physical components, such as IoT devices and industrial control systems.',
    relatedTerms: ['IoT Security', 'Critical Infrastructure']
  },
  {
    id: '55',
    term: 'Adversarial Machine Learning',
    definition: 'Exploiting vulnerabilities in AI systems.',
    category: 'Advanced',
    extendedDescription: 'Techniques for identifying and mitigating security vulnerabilities in machine learning and artificial intelligence systems.',
    relatedTerms: ['AI Security', 'Machine Learning']
  },
  {
    id: '56',
    term: 'Cloud Native Security',
    definition: 'Security approach for cloud-native applications.',
    category: 'Network',
    extendedDescription: 'Security practices specifically designed for applications built and deployed in cloud environments.',
    relatedTerms: ['Cloud Security', 'DevSecOps']
  },
  {
    id: '57',
    term: 'Cyber Threat Intelligence',
    definition: 'Actionable insights about potential cyber threats.',
    category: 'Advanced',
    extendedDescription: 'Collected and analyzed information about potential cyber threats to help organizations proactively defend against attacks.',
    relatedTerms: ['Threat Detection', 'Security Analytics']
  },
  {
    id: '58',
    term: 'Deception Technology',
    definition: 'Creating decoy systems to detect and misdirect attackers.',
    category: 'Security',
    extendedDescription: 'Advanced security technique that creates fake digital assets to detect, deflect, and study cyber attackers.',
    relatedTerms: ['Honeypot', 'Threat Detection']
  },
  {
    id: '59',
    term: 'Software-Defined Perimeter',
    definition: 'Dynamic network security architecture.',
    category: 'Network',
    extendedDescription: 'A security model that dynamically creates one-to-one network connections between users and the resources they access.',
    relatedTerms: ['Network Security', 'Zero Trust']
  },
  {
    id: '60',
    term: 'Cryptojacking',
    definition: 'Unauthorized use of computing resources for cryptocurrency mining.',
    category: 'Security',
    extendedDescription: 'Malicious practice of using someone\'s computer to mine cryptocurrency without their consent.',
    relatedTerms: ['Malware', 'Cryptocurrency']
  },
  {
    id: '61',
    term: 'Memory-Safe Languages',
    definition: 'Programming languages that prevent memory-related vulnerabilities.',
    category: 'Advanced',
    extendedDescription: 'Programming languages designed to eliminate common memory-related security vulnerabilities like buffer overflows and use-after-free errors.',
    relatedTerms: ['Secure Coding', 'Vulnerability Prevention']
  },
  {
    id: '62',
    term: 'Cyber Digital Twin',
    definition: 'Virtual replica of a physical system for security testing.',
    category: 'Advanced',
    extendedDescription: 'A virtual simulation of a physical system used to predict potential security vulnerabilities and test defense mechanisms.',
    relatedTerms: ['Simulation', 'Security Testing']
  },
  {
    id: '63',
    term: 'Fileless Malware',
    definition: 'Malware that operates without writing files to disk.',
    category: 'Security',
    extendedDescription: 'A sophisticated type of malware that exists solely in computer memory, making it difficult to detect by traditional antivirus methods.',
    relatedTerms: ['Advanced Persistent Threat', 'Stealth Malware']
  },
  {
    id: '64',
    term: 'Cognitive Security',
    definition: 'AI-powered cybersecurity approach.',
    category: 'Advanced',
    extendedDescription: 'Security systems that use artificial intelligence and machine learning to detect, analyze, and respond to cyber threats in real-time.',
    relatedTerms: ['AI Security', 'Threat Intelligence']
  },
  {
    id: '65',
    term: 'Zero Trust Architecture',
    definition: 'Security model requiring verification for all access attempts.',
    category: 'Network',
    extendedDescription: 'A security framework that requires strict identity verification for every person and device attempting to access resources.',
    relatedTerms: ['Network Security', 'Access Control']
  },
  {
    id: '66',
    term: 'Browser Fingerprinting',
    definition: 'Tracking users through unique browser characteristics.',
    category: 'Network',
    extendedDescription: 'A technique used to collect unique information about a user\'s browser and device to create a distinctive identifier.',
    relatedTerms: ['Privacy', 'Web Tracking']
  },
  {
    id: '67',
    term: 'Secure Multi-Party Computation',
    definition: 'Cryptographic method for joint computation without revealing individual inputs.',
    category: 'Advanced',
    extendedDescription: 'A cryptographic technique allowing multiple parties to compute a function over their inputs while keeping those inputs private.',
    relatedTerms: ['Cryptography', 'Privacy Preservation']
  },
  {
    id: '68',
    term: 'Ransomware-as-a-Service (RaaS)',
    definition: 'Cybercrime model where ransomware is leased to attackers.',
    category: 'Security',
    extendedDescription: 'A business model where cybercriminals develop and lease ransomware tools to other malicious actors.',
    relatedTerms: ['Cybercrime', 'Malware']
  },
  {
    id: '69',
    term: 'Hardware Root of Trust',
    definition: 'Secure hardware foundation for system integrity.',
    category: 'Advanced',
    extendedDescription: 'A hardware-based security feature that provides a trusted foundation for system security and integrity checks.',
    relatedTerms: ['Hardware Security', 'Trusted Computing']
  },
  {
    id: '70',
    term: 'Synthetic Identity Fraud',
    definition: 'Creating fake identities using real and fictitious information.',
    category: 'Security',
    extendedDescription: 'A type of identity theft where criminals combine real and fake information to create new synthetic identities.',
    relatedTerms: ['Fraud Detection', 'Identity Theft']
  },
  {
    id: '71',
    term: 'Cyber-Physical Attack Surface',
    definition: 'Vulnerabilities spanning digital and physical domains.',
    category: 'Advanced',
    extendedDescription: 'The collection of potential entry points for attacks that bridge digital systems and physical infrastructure.',
    relatedTerms: ['Critical Infrastructure', 'IoT Security']
  },
  {
    id: '72',
    term: 'Deepfake Detection',
    definition: 'Identifying artificially generated media content.',
    category: 'Advanced',
    extendedDescription: 'Technologies and techniques used to identify and mitigate artificially created media content designed to deceive.',
    relatedTerms: ['AI Security', 'Misinformation']
  },
  {
    id: '73',
    term: 'Secure Enclaves',
    definition: 'Isolated computing environments for sensitive processing.',
    category: 'Advanced',
    extendedDescription: 'Secure, isolated areas of a processor that protect selected code and data from unauthorized access or modification.',
    relatedTerms: ['Hardware Security', 'Trusted Computing']
  },
  {
    id: '74',
    term: 'Attack Graph Analysis',
    definition: 'Mapping potential attack paths in a network.',
    category: 'Network',
    extendedDescription: 'A method of visualizing and analyzing potential attack scenarios and vulnerabilities in a network infrastructure.',
    relatedTerms: ['Threat Modeling', 'Network Security']
  },
  {
    id: '75',
    term: 'Quantum Key Distribution',
    definition: 'Secure communication method using quantum mechanics.',
    category: 'Advanced',
    extendedDescription: 'A method of secure communication that uses quantum mechanical properties to distribute encryption keys.',
    relatedTerms: ['Cryptography', 'Quantum Computing']
  },
];


// Course Section 
export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Cybersecurity',
    description: 'Learn the basics of cybersecurity and how to protect yourself online.',
    modules: [
      { id: '1', title: 'Understanding Cyber Threats', content: 'Overview of common cyber threats and attack vectors.' },
      { id: '2', title: 'Basic Security Practices', content: 'Essential security practices for individuals and organizations.' },
      { id: '3', title: 'Introduction to Encryption', content: 'Fundamentals of encryption and its role in cybersecurity.' },
    ],
    tags: ['Beginner', 'Fundamentals', 'Online Safety'],
    duration: '10 hours',
    level: 'Beginner',
    image: '/courses/intro_cybersec.png',
    externalLink: 'https://www.coursera.org/learn/introduction-to-cybersecurity-fundamentals',
    available: true
  },
  {
    id: '2',
    title: 'Computer Networks and Network Security',
    description: 'Understand the principles of network security and common protection mechanisms.',
    modules: [
      { id: '1', title: 'Network Protocols and Vulnerabilities', content: 'Overview of network protocols and their potential vulnerabilities.' },
      { id: '2', title: 'Firewall and IDS/IPS', content: 'Introduction to firewalls and intrusion detection/prevention systems.' },
      { id: '3', title: 'Virtual Private Networks (VPNs)', content: 'Understanding VPNs and their role in secure communications.' },
    ],
    tags: ['Networking', 'Security', 'Protocols'],
    duration: '15 hours',
    level: 'Intermediate',
    image: '/courses/computer_net.png',
    externalLink: 'https://www.coursera.org/learn/network-security-database-vulnerabilities',
    available: true
  },
  {
    id: '3',
    title: 'Learn Ethical Hacking from Scratch',
    description: 'Learn offensive security techniques to identify and fix vulnerabilities.',
    modules: [
      { id: '1', title: 'Reconnaissance and Scanning', content: 'Techniques for gathering information about target systems.' },
      { id: '2', title: 'Exploitation Techniques', content: 'Common exploitation methods and tools.' },
      { id: '3', title: 'Post-Exploitation and Reporting', content: 'Actions after successful exploitation and creating comprehensive reports.' },
    ],
    tags: ['Ethical Hacking', 'Penetration Testing', 'Offensive Security'],
    duration: '20 hours',
    level: 'Advanced',
    image: '/courses/ethical_hacking.jpg',
    externalLink: 'https://www.udemy.com/course/learn-ethical-hacking-from-scratch/',
    available: false
  },
  {
    id: '4',
    title: 'Secure Coding Practices',
    description: 'Learn how to write secure code and prevent common vulnerabilities.',
    modules: [
      { id: '1', title: 'Common Vulnerabilities in Software', content: 'Overview of OWASP Top 10 and other common vulnerabilities.' },
      { id: '2', title: 'Input Validation and Sanitization', content: 'Techniques for properly handling and validating user input.' },
      { id: '3', title: 'Secure Authentication and Authorization', content: 'Implementing robust authentication and authorization mechanisms.' },
    ],
    tags: ['Secure Coding', 'Software Development', 'OWASP'],
    duration: '12 hours',
    level: 'Intermediate',
    image: '/courses/secure_code.jpg',
    externalLink: 'https://www.securecodewarrior.com/',
    available: true
  },
  {
    id: '5',
    title: 'Introduction to Cloud Computing',
    description: 'Understand the security challenges and best practices in cloud computing environments.',
    modules: [
      { id: '1', title: 'Cloud Computing Models and Risks', content: 'Overview of cloud models (IaaS, PaaS, SaaS) and associated security risks.' },
      { id: '2', title: 'Identity and Access Management in the Cloud', content: 'Implementing robust IAM policies in cloud environments.' },
      { id: '3', title: 'Data Protection in the Cloud', content: 'Techniques for securing data at rest and in transit in cloud systems.' },
    ],
    tags: ['Cloud Security', 'IAM', 'Data Protection'],
    duration: '18 hours',
    level: 'Intermediate',
    image: '/courses/cloud_computing.jpg',
    externalLink: 'https://www.coursera.org/learn/introduction-to-cloud',
    available: true
  },
  {
    id: '6',
    title: 'Digital Forensics and Incident Response',
    description: 'Learn how to investigate cybersecurity incidents and perform digital forensics.',
    modules: [
      { id: '1', title: 'Incident Response Process', content: 'Steps involved in responding to and managing security incidents.' },
      { id: '2', title: 'Digital Evidence Collection', content: 'Techniques for properly collecting and preserving digital evidence.' },
      { id: '3', title: 'Malware Analysis', content: 'Basic techniques for analyzing malicious software.' },
    ],
    tags: ['Forensics', 'Incident Response', 'Malware Analysis'],
    duration: '25 hours',
    level: 'Advanced',
    image: '/courses/report_incident.jpg',
    externalLink: 'https://www.sans.org/course/advanced-incident-response-threat-hunting-training',
    available: true

  },
  {
    id: '7',
    title: 'Cryptography for Cybersecurity',
    description: 'Dive deep into cryptographic algorithms and their applications in cybersecurity.',
    modules: [
      { id: '1', title: 'Symmetric and Asymmetric Encryption', content: 'Understanding different encryption methods and their use cases.' },
      { id: '2', title: 'Hash Functions and Digital Signatures', content: 'Exploring integrity verification and non-repudiation techniques.' },
      { id: '3', title: 'Key Management and PKI', content: 'Best practices for managing cryptographic keys and understanding Public Key Infrastructure.' },
    ],
    tags: ['Cryptography', 'Encryption', 'PKI'],
    duration: '16 hours',
    level: 'Advanced',
    image: '/courses/crypto_cybersec.jpg',
    externalLink: 'https://www.coursera.org/learn/crypto',
    available: true
  },
  {
    id: '8',
    title: 'Introduction to the Internet of Things and Embedded Systems',
    description: 'Understand the unique security challenges posed by the Internet of Things (IoT) and how to address them.',
    modules: [
      { id: '1', title: 'IoT Architecture and Vulnerabilities', content: 'Overview of IoT systems and their potential security weaknesses.' },
      { id: '2', title: 'Securing IoT Communications', content: 'Techniques for ensuring secure data transmission in IoT networks.' },
      { id: '3', title: 'IoT Device Security', content: 'Best practices for securing individual IoT devices and their firmware.' },
    ],
    tags: ['IoT', 'Embedded Systems', 'Network Security'],
    duration: '14 hours',
    level: 'Intermediate',
    image: '/courses/iot.jpg',
    externalLink: 'https://www.coursera.org/learn/iot',
    available: true
  },
];
 
export const categories = ['All', 'Articles', 'Videos', 'Tools', 'Courses'] as const;

export const categoryIcons = {
  Articles: Book,
  Videos: Video,
  Tools: Wrench,
  Courses: GraduationCap,
};

export const resources: Resource[] = [
  {
    id: '1',
    title: 'NIST Cybersecurity Framework',
    description: 'A comprehensive guide to managing and reducing cybersecurity risk',
    category: 'Articles',
    url: 'https://www.nist.gov/cyberframework',
    difficulty: 'Intermediate',
    tags: ['Framework', 'Risk Management', 'Security Standards']
  },
  {
    id: '2',
    title: 'Krebs on Security',
    description: 'In-depth security news and investigation',
    category: 'Articles',
    url: 'https://krebsonsecurity.com/',
    difficulty: 'Intermediate',
    tags: ['News', 'Analysis', 'Investigations']
  },
  {
    id: '3',
    title: 'OWASP Top Ten',
    description: 'Top 10 most critical web application security risks',
    category: 'Articles',
    url: 'https://owasp.org/www-project-top-ten/',
    difficulty: 'Intermediate',
    tags: ['Web Security', 'Vulnerabilities', 'Best Practices']
  },
  {
    id: '4',
    title: 'The Hacker News',
    description: 'Cybersecurity news and analysis',
    category: 'Articles',
    url: 'https://thehackernews.com/',
    difficulty: 'Beginner',
    tags: ['News', 'Trends', 'Threats']
  },
  {
    id: '5',
    title: 'Schneier on Security',
    description: 'Blog by security technologist Bruce Schneier',
    category: 'Articles',
    url: 'https://www.schneier.com/',
    difficulty: 'Intermediate',
    tags: ['Analysis', 'Opinion', 'Privacy']
  },
  {
    id: '6',
    title: 'Cybersecurity TED Talks',
    description: 'A collection of insightful TED talks on various cybersecurity topics',
    category: 'Videos',
    url: 'https://www.ted.com/topics/cybersecurity',
    difficulty: 'Beginner',
    tags: ['Education', 'Awareness', 'Trends']
  },
  {
    id: '7',
    title: 'DEFCON Conference Talks',
    description: 'Recordings of talks from the world\'s largest hacking conference',
    category: 'Videos',
    url: 'https://www.youtube.com/user/DEFCONConference',
    difficulty: 'Advanced',
    tags: ['Hacking', 'Research', 'Techniques']
  },
  {
    id: '8',
    title: 'LiveOverflow YouTube Channel',
    description: 'Educational videos on hacking and computer security',
    category: 'Videos',
    url: 'https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w',
    difficulty: 'Intermediate',
    tags: ['Tutorials', 'Exploits', 'Reverse Engineering']
  },
  {
    id: '9',
    title: 'The Cyber Mentor YouTube Channel',
    description: 'Practical cybersecurity tutorials and career advice',
    category: 'Videos',
    url: 'https://www.youtube.com/channel/UC0ArlFuFYMpEewyRBzdLHiw',
    difficulty: 'Beginner',
    tags: ['Tutorials', 'Career', 'Penetration Testing']
  },
  {
    id: '10',
    title: 'Have I Been Pwned',
    description: 'Check if your email has been compromised in a data breach',
    category: 'Tools',
    url: 'https://haveibeenpwned.com/',
    difficulty: 'Beginner',
    tags: ['Privacy', 'Data Breach', 'Security Check']
  },
  {
    id: '11',
    title: 'Wireshark',
    description: 'Network protocol analyzer for network troubleshooting and analysis',
    category: 'Tools',
    url: 'https://www.wireshark.org/',
    difficulty: 'Intermediate',
    tags: ['Network Analysis', 'Packet Capture', 'Troubleshooting']
  },
  {
    id: '12',
    title: 'Metasploit Framework',
    description: 'Penetration testing framework for discovering and exploiting vulnerabilities',
    category: 'Tools',
    url: 'https://www.metasploit.com/',
    difficulty: 'Advanced',
    tags: ['Penetration Testing', 'Exploit Development', 'Vulnerability Assessment']
  },
  {
    id: '13',
    title: 'Nmap',
    description: 'Network discovery and security auditing tool',
    category: 'Tools',
    url: 'https://nmap.org/',
    difficulty: 'Intermediate',
    tags: ['Network Scanning', 'Security Auditing', 'Host Discovery']
  },
  {
    id: '14',
    title: 'Burp Suite',
    description: 'Integrated platform for performing security testing of web applications',
    category: 'Tools',
    url: 'https://portswigger.net/burp',
    difficulty: 'Intermediate',
    tags: ['Web Security', 'Penetration Testing', 'Vulnerability Scanner']
  },
  {
    id: '15',
    title: 'Coursera - Cybersecurity Specialization',
    description: 'Comprehensive cybersecurity program offered by the University of Maryland',
    category: 'Courses',
    url: 'https://www.coursera.org/specializations/cyber-security',
    difficulty: 'Intermediate',
    tags: ['Academic', 'Comprehensive', 'Certification']
  },
  {
    id: '16',
    title: 'edX - Cybersecurity Fundamentals',
    description: 'Introduction to cybersecurity concepts and practices',
    category: 'Courses',
    url: 'https://www.edx.org/course/cybersecurity-fundamentals',
    difficulty: 'Beginner',
    tags: ['Fundamentals', 'Academic', 'Certificate']
  },
  {
    id: '17',
    title: 'SANS Institute Courses',
    description: 'Professional cybersecurity training and certifications',
    category: 'Courses',
    url: 'https://www.sans.org/cyber-security-courses/',
    difficulty: 'Advanced',
    tags: ['Professional', 'Hands-on', 'Industry-recognized']
  },
  {
    id: '18',
    title: 'Cybrary',
    description: 'Free and paid online cybersecurity courses',
    category: 'Courses',
    url: 'https://www.cybrary.it/',
    difficulty: 'Beginner',
    tags: ['Self-paced', 'Variety', 'Career Development']
  },
  {
    id: '19',
    title: 'TryHackMe',
    description: 'Learn cybersecurity through hands-on exercises and labs',
    category: 'Courses',
    url: 'https://tryhackme.com/',
    difficulty: 'Beginner',
    tags: ['Hands-on', 'Gamified', 'Practical Skills']
  },
];

//Assessment section 

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: '1',
    question: 'How often do you update your software and operating systems?',
    options: ['Regularly', 'Sometimes', 'Rarely', 'Never']
  },
  {
    id: '2',
    question: 'Do you use a password manager?',
    options: ['Yes', 'No']
  },
  {
    id: '3',
    question: 'How strong are your passwords?',
    options: ['Very strong', 'Strong', 'Moderate', 'Weak']
  },
  {
    id: '4',
    question: 'Do you use two-factor authentication when available?',
    options: ['Always', 'Sometimes', 'Rarely', 'Never']
  },
  {
    id: '5',
    question: 'How often do you back up your data?',
    options: ['Daily', 'Weekly', 'Monthly', 'Rarely or never']
  }
];


// Report incident 

export  const incidentTypes = [
  { value: 'Phishing', label: 'Phishing', description: 'Attempts to steal sensitive information' },
  { value: 'Malware', label: 'Malware', description: 'Malicious software' },
  { value: 'Data Breach', label: 'Data Breach', description: 'Unauthorized access to sensitive data' },
  { value: 'Unauthorized Access', label: 'Unauthorized Access', description: 'Unauthorized entry into systems or accounts' },
  { value: 'DDoS Attack', label: 'DDoS Attack', description: 'DDoS attacks affecting system availability' },
  { value: 'Social Engineering', label: 'Social Engineering', description: 'Manipulation of people to get information' },
  { value: 'Insider Threat', label: 'Insider Threat', description: 'Security threats from within the organization' },
  { value: 'Other', label: 'Other', description: 'Other security incidents not listed above' },
] as const

export const severityLevels = [
  { value: 'critical', label: 'Critical', color: 'text-red-500' },
  { value: 'high', label: 'High', color: 'text-orange-500' },
  { value: 'medium', label: 'Medium', color: 'text-yellow-500' },
  { value: 'low', label: 'Low', color: 'text-green-500' },
] as const