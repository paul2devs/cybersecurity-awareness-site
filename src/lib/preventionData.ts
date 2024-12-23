import { PreventionTip } from "@/types"

export const preventionTips: PreventionTip[] = [
    {
        id: '1',
        title: 'Use Strong Passwords',
        shortDescription: 'Create and maintain secure passwords',
        steps: [
            'Use a mix of uppercase, lowercase, numbers, and symbols',
            'Make passwords at least 12 characters long',
            'Use a unique password for each account',
            'Consider using a password manager',
        ],
        additionalInfo: 'Regular password changes are also recommended for critical accounts.',
        applicableThreats: ['Phishing', 'Brute Force Attack', 'Credential Stuffing', 'Rainbow Table Attack'],
        
    },
    {
      id: '2',
      title: 'Enable Two-Factor Authentication',
      shortDescription: 'Add an extra layer of security to your accounts',
      steps: [
        'Turn on 2FA for all accounts that offer it',
        'Use an authenticator app instead of SMS when possible',
        'Keep backup codes in a safe place',
      ],
      additionalInfo: '2FA significantly reduces the risk of unauthorized access, even if your password is compromised.',
      applicableThreats: ['SIM Swapping', 'Session Hijacking', 'Business Email Compromise (BEC)'],
    },
    {
      id: '3',
      title: 'Keep Software Updated',
      shortDescription: 'Regularly update your operating system and applications',
      steps: [
        'Enable automatic updates when available',
        'Regularly check for updates manually',
        'Don\'t ignore update notifications',
      ],
      additionalInfo: 'Software updates often include critical security patches that protect against newly discovered vulnerabilities.',
      applicableThreats: ['Malware', 'Ransomware', 'Zero-Day Exploit', 'Privilege Escalation'],
    },
    {
      id: '4',
      title: 'Be Wary of Unknown Links and Attachments',
      shortDescription: 'Avoid clicking on suspicious links or downloading unknown attachments',
      steps: [
        'Verify the sender’s identity before opening emails',
        'Hover over links to see the actual URL before clicking',
        'Use security software that scans attachments and links',
      ],
      additionalInfo: 'This helps protect against phishing, malware, and other attacks.',
      applicableThreats: ['Phishing', 'Malware', 'Malvertising', 'Clickjacking'],
    },
    {
      id: '5',
      title: 'Use Secure Connections',
      shortDescription: 'Ensure your connections are secure',
      steps: [
        'Use a VPN when on public Wi-Fi',
        'Look for HTTPS in the URL of websites',
        'Avoid accessing sensitive information on unsecured networks',
      ],
      additionalInfo: 'This reduces the risk of Man-in-the-Middle attacks and eavesdropping.',
      applicableThreats: ['Man-in-the-Middle (MitM)', 'Eavesdropping Attack', 'DNS Spoofing'],
    },
    {
      id: '6',
      title: 'Educate Yourself and Your Team',
      shortDescription: 'Stay informed about the latest security threats',
      steps: [
        'Attend security training and awareness programs',
        'Share knowledge about common scams and attacks',
        'Encourage a culture of security within your organization',
      ],
      additionalInfo: 'Awareness can help prevent social engineering and insider threats.',
      applicableThreats: ['Social Engineering', 'Insider Threat', 'Business Email Compromise (BEC)'],
    },
    {
      id: '7',
      title: 'Backup Your Data Regularly',
      shortDescription: 'Ensure you have recent backups of important data',
      steps: [
        'Use cloud storage or external drives for backups',
        'Schedule regular backup routines',
        'Test your backups to ensure they can be restored',
      ],
      additionalInfo: 'This is crucial in case of ransomware attacks or data loss.',
      applicableThreats: ['Ransomware', 'Data Theft', 'Worms'],
    },
    {
      id: '8',
      title: 'Implement Network Security Measures',
      shortDescription: 'Use firewalls and intrusion detection systems',
      steps: [
        'Configure firewalls to block unauthorized access',
        'Monitor network traffic for unusual activity',
        'Segment networks to limit access to sensitive data',
      ],
      additionalInfo: 'This helps protect against DDoS attacks, botnets, and other network threats.',
      applicableThreats: ['DDoS Attack', 'Botnets', 'Privilege Escalation'],
    },
    {
      id: '9',
      title: 'Secure Your Web Applications',
      shortDescription: 'Implement security best practices in web development',
      steps: [
        'Use input validation to prevent SQL injection and XSS',
        'Implement Content Security Policy (CSP) to mitigate XSS attacks',
        'Regularly conduct security audits and penetration testing',
      ],
      additionalInfo: 'This reduces vulnerabilities in web applications and protects against various attacks.',
      applicableThreats: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'Formjacking'],
    },
    {
      id: '10',
      title: 'Monitor User Activity',
      shortDescription: 'Keep an eye on user accounts and access patterns',
      steps: [
        'Implement logging and monitoring for user activities',
        'Set up alerts for unusual login attempts or access patterns',
        'Regularly review access permissions and user roles',
      ],
      additionalInfo: 'This helps detect insider threats and unauthorized access early.',
      applicableThreats: ['Insider Threat', 'Session Hijacking', 'Privilege Escalation'],
    },
    {
      id: '11',
      title: 'Use Antivirus and Anti-Malware Software',
      shortDescription: 'Protect your devices with security software',
      steps: [
        'Install reputable antivirus software on all devices',
        'Keep the software updated to protect against new threats',
        'Run regular scans to detect and remove malware',
      ],
      additionalInfo: 'This helps prevent infections from malware and other malicious software.',
      applicableThreats: ['Malware', 'Ransomware', 'Spyware'],
    },
    {
      id: '12',
      title: 'Limit User Privileges',
      shortDescription: 'Restrict user access to only what is necessary',
      steps: [
        'Implement the principle of least privilege for user accounts',
        'Regularly review and adjust user permissions',
        'Use role-based access control (RBAC) where applicable',
      ],
      additionalInfo: 'This minimizes the risk of insider threats and unauthorized access.',
      applicableThreats: ['Insider Threat', 'Privilege Escalation'],
    },
    {
      id: '13',
      title: 'Secure Mobile Devices',
      shortDescription: 'Protect smartphones and tablets from threats',
      steps: [
        'Use strong passwords or biometric authentication',
        'Install security apps to protect against malware',
        'Avoid connecting to unsecured Wi-Fi networks',
      ],
      additionalInfo: 'Mobile devices are often targeted for data theft and malware.',
      applicableThreats: ['Phishing', 'Malware', 'Eavesdropping Attack'],
    },
    {
      id: '14',
      title: 'Implement Email Security Measures',
      shortDescription: 'Protect your email accounts from threats',
      steps: [
        'Use email filtering to block spam and phishing attempts',
        'Educate users on recognizing phishing emails',
        'Implement DMARC, DKIM, and SPF to protect against email spoofing',
      ],
      additionalInfo: 'This helps reduce the risk of phishing and business email compromise.',
      applicableThreats: ['Phishing', 'Business Email Compromise (BEC)'],
    },
    {
      id: '15',
      title: 'Conduct Regular Security Audits',
      shortDescription: 'Evaluate your security posture regularly',
      steps: [
        'Perform vulnerability assessments and penetration testing',
        'Review security policies and procedures',
        'Update security measures based on audit findings',
      ],
      additionalInfo: 'Regular audits help identify and mitigate potential security risks.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '16',
      title: 'Use Encryption for Sensitive Data',
      shortDescription: 'Protect sensitive information with encryption',
      steps: [
        'Encrypt data at rest and in transit',
        'Use strong encryption algorithms and key management practices',
        'Regularly review encryption policies and practices',
      ],
      additionalInfo: 'Encryption helps protect data from unauthorized access and breaches.',
      applicableThreats: ['Data Theft', 'Ransomware', 'Cryptographic Attacks'],
    },
    {
      id: '17',
      title: 'Be Cautious with Public Wi-Fi',
      shortDescription: 'Avoid using public Wi-Fi for sensitive transactions',
      steps: [
        'Use a VPN when connecting to public networks',
        'Avoid accessing sensitive accounts or information on public Wi-Fi',
        'Turn off sharing settings on your devices',
      ],
      additionalInfo: 'Public Wi-Fi can expose you to various attacks, including eavesdropping.',
      applicableThreats: ['Man-in-the-Middle (MitM)', 'Eavesdropping Attack'],
    },
    {
      id: '18',
      title: 'Implement Data Loss Prevention (DLP )',
      shortDescription: 'Use DLP solutions to protect sensitive data',
      steps: [
        'Identify and classify sensitive data within your organization',
        'Implement DLP policies to monitor and control data access',
        'Train employees on data handling best practices',
      ],
      additionalInfo: 'DLP helps prevent data breaches and unauthorized data sharing.',
      applicableThreats: ['Insider Threat', 'Data Theft', 'Ransomware'],
    },
    {
      id: '19',
      title: 'Use Strong Authentication Methods',
      shortDescription: 'Implement strong authentication for critical systems',
      steps: [
        'Use biometric authentication where possible',
        'Implement hardware tokens for sensitive access',
        'Regularly review and update authentication methods',
      ],
      additionalInfo: 'Strong authentication reduces the risk of unauthorized access.',
      applicableThreats: ['Session Hijacking', 'Business Email Compromise (BEC)'],
    },
    {
      id: '20',
      title: 'Limit Data Sharing',
      shortDescription: 'Be cautious about sharing sensitive information',
      steps: [
        'Only share data with trusted parties',
        'Use secure methods for data sharing (e.g., encrypted emails)',
        'Regularly review data sharing policies',
      ],
      additionalInfo: 'Limiting data sharing helps protect against data breaches.',
      applicableThreats: ['Data Theft', 'Social Engineering'],
    },
    {
      id: '21',
      title: 'Use Secure Coding Practices',
      shortDescription: 'Follow best practices in software development',
      steps: [
        'Conduct code reviews to identify vulnerabilities',
        'Use secure coding frameworks and libraries',
        'Regularly update dependencies to patch vulnerabilities',
      ],
      additionalInfo: 'Secure coding practices help prevent common vulnerabilities.',
      applicableThreats: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'Formjacking'],
    },
    {
      id: '22',
      title: 'Implement Incident Response Plans',
      shortDescription: 'Prepare for potential security incidents',
      steps: [
        'Develop and document an incident response plan',
        'Conduct regular drills to test the plan',
        'Review and update the plan based on lessons learned',
      ],
      additionalInfo: 'An effective incident response plan can minimize damage during a breach.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '23',
      title: 'Use Content Security Policy (CSP)',
      shortDescription: 'Mitigate XSS attacks with CSP',
      steps: [
        'Define a CSP to control resources the browser can load',
        'Regularly review and update the CSP as needed',
        'Test the CSP to ensure it effectively blocks malicious content',
      ],
      additionalInfo: 'CSP helps prevent unauthorized scripts from executing on your site.',
      applicableThreats: ['Cross-Site Scripting (XSS)', 'Clickjacking'],
    },
    {
      id: '24',
      title: 'Monitor for Data Breaches',
      shortDescription: 'Stay informed about potential data breaches',
      steps: [
        'Use breach monitoring services to alert you of breaches',
        'Regularly check if your email or accounts have been compromised',
        'Change passwords immediately if a breach is detected',
      ],
      additionalInfo: 'Early detection can help mitigate the impact of a breach.',
      applicableThreats: ['Credential Stuffing', 'Data Theft'],
    },
    {
      id: '25',
      title: 'Secure Physical Access to Systems',
      shortDescription: 'Protect physical access to sensitive systems',
      steps: [
        'Restrict access to server rooms and sensitive areas',
        'Use security cameras and access control systems',
        'Regularly review physical security measures',
      ],
      additionalInfo: 'Physical security is crucial to prevent unauthorized access.',
      applicableThreats: ['Insider Threat', 'Privilege Escalation'],
    },
    {
      id: '26',
      title: 'Implement Secure API Practices',
      shortDescription: 'Protect APIs from unauthorized access',
      steps: [
        'Use authentication and authorization for API access',
        'Implement rate limiting to prevent abuse',
        'Regularly test APIs for vulnerabilities',
      ],
      additionalInfo: 'Secure APIs help protect against data breaches and unauthorized access.',
      applicableThreats: ['SQL Injection', 'Data Theft'],
    },
    {
      id: '27',
      title: 'Use Secure File Sharing Solutions',
      shortDescription: 'Share files securely to prevent data leaks',
      steps: [
        'Use encrypted file sharing services',
        'Set expiration dates for shared links',
        'Monitor access to shared files',
      ],
      additionalInfo: 'Secure file sharing reduces the risk of unauthorized access to sensitive data.',
      applicableThreats: ['Data Theft', 'Insider Threat'],
    },
    {
      id: '28',
   title: 'Conduct Phishing Simulations',
      shortDescription: 'Test employees’ ability to recognize phishing attempts',
      steps: [
        'Run regular phishing simulation exercises',
        'Provide feedback and training based on results',
        'Encourage a culture of reporting suspicious emails',
      ],
      additionalInfo: 'Simulations help improve awareness and reduce the risk of successful phishing attacks.',
      applicableThreats: ['Phishing', 'Business Email Compromise (BEC)'],
    },
    {
      id: '29',
      title: 'Implement Secure Remote Work Policies',
      shortDescription: 'Establish guidelines for remote work security',
      steps: [
        'Require the use of VPNs for remote access',
        'Provide training on secure remote work practices',
        'Regularly review and update remote work policies',
      ],
      additionalInfo: 'Secure remote work practices help protect sensitive data outside the office.',
      applicableThreats: ['Eavesdropping Attack', 'Man-in-the-Middle (MitM)'],
    },
    {
      id: '30',
      title: 'Utilize Threat Intelligence Services',
      shortDescription: 'Stay informed about emerging threats',
      steps: [
        'Subscribe to threat intelligence feeds',
        'Integrate threat intelligence into security operations',
        'Regularly review threat reports and adjust defenses accordingly',
      ],
      additionalInfo: 'Threat intelligence helps organizations proactively defend against new and evolving threats.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '31',
      title: 'Implement Application Whitelisting',
      shortDescription: 'Allow only approved applications to run',
      steps: [
        'Create a list of approved applications for use',
        'Block all applications not on the whitelist',
        'Regularly review and update the whitelist',
      ],
      additionalInfo: 'Application whitelisting helps prevent unauthorized software from running on systems.',
      applicableThreats: ['Malware', 'Ransomware', 'Spyware'],
    },
    {
      id: '32',
      title: 'Use Behavioral Analytics',
      shortDescription: 'Monitor user behavior for anomalies',
      steps: [
        'Implement user and entity behavior analytics (UEBA)',
        'Set up alerts for unusual user activities',
        'Regularly review behavioral analytics reports',
      ],
      additionalInfo: 'Behavioral analytics can help detect insider threats and compromised accounts.',
      applicableThreats: ['Insider Threat', 'Credential Stuffing'],
    },
    {
      id: '33',
      title: 'Conduct Regular Security Training',
      shortDescription: 'Provide ongoing security education for employees',
      steps: [
        'Schedule regular training sessions on security best practices',
        'Include topics like phishing, password management, and data protection',
        'Encourage employees to stay updated on security trends',
      ],
      additionalInfo: 'Ongoing training helps maintain a security-conscious culture within the organization.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '34',
      title: 'Implement Secure Development Lifecycle (SDLC)',
      shortDescription: 'Integrate security into the software development process',
      steps: [
        'Conduct security assessments at each stage of development',
        'Use automated tools to identify vulnerabilities in code',
        'Train developers on secure coding practices',
      ],
      additionalInfo: 'An SDLC approach helps reduce vulnerabilities in applications before deployment.',
      applicableThreats: ['SQL Injection', 'Cross-Site Scripting (XSS)'],
    },
    {
      id: '35',
      title: 'Establish a Security Incident Response Team (SIRT)',
      shortDescription: 'Prepare a dedicated team for handling security incidents',
      steps: [
        'Define roles and responsibilities for team members',
        'Conduct regular training and simulations for the team',
        'Establish communication protocols for incident response',
      ],
      additionalInfo: 'A SIRT can effectively manage and mitigate security incidents when they occur.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '36',
      title: 'Use Multi-Layered Security Approaches',
      shortDescription: 'Implement multiple security measures for better protection',
      steps: [
        'Combine firewalls, antivirus, and intrusion detection systems',
        'Use encryption, access controls, and monitoring tools',
        'Regularly assess and update security measures',
      ],
      additionalInfo: 'Layered security provides comprehensive protection against various threats.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '37',
      title: 'Regularly Review and Update Security Policies',
      shortDescription: 'Ensure security policies are current and effective',
      steps: [
        'Conduct annual reviews of security policies',
        'Update policies based on new threats and technologies',
        'Communicate changes to all employees',
      ],
      additionalInfo: 'Up dating security policies helps maintain a strong security posture.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '38',
      title: 'Utilize Endpoint Detection and Response (EDR)',
      shortDescription: 'Monitor and respond to threats on endpoints',
      steps: [
        'Deploy EDR solutions on all endpoints',
        'Regularly analyze endpoint activity for suspicious behavior',
        'Respond quickly to detected threats to minimize impact',
      ],
      additionalInfo: 'EDR solutions provide real-time monitoring and response capabilities.',
      applicableThreats: ['Malware', 'Ransomware', 'Spyware'],
    },
    {
      id: '39',
      title: 'Implement Secure Configuration Management',
      shortDescription: 'Ensure systems are securely configured',
      steps: [
        'Establish baseline configurations for all systems',
        'Regularly audit configurations for compliance',
        'Remediate any deviations from secure configurations',
      ],
      additionalInfo: 'Secure configurations help reduce vulnerabilities in systems.',
      applicableThreats: ['Privilege Escalation', 'Insider Threat'],
    },
    {
      id: '40',
      title: 'Use Secure Cloud Practices',
      shortDescription: 'Ensure security in cloud environments',
      steps: [
        'Implement strong access controls for cloud resources',
        'Regularly review cloud security settings and configurations',
        'Use encryption for data stored in the cloud',
      ],
      additionalInfo: 'Secure cloud practices help protect sensitive data in cloud environments.',
      applicableThreats: ['Data Theft', 'Insider Threat'],
    },
    {
      id: '41',
      title: 'Conduct Third-Party Risk Assessments',
      shortDescription: 'Evaluate the security posture of third-party vendors',
      steps: [
        'Assess the security practices of vendors before engagement',
        'Regularly review third-party security compliance',
        'Establish clear security requirements in contracts',
      ],
      additionalInfo: 'Third-party risks can lead to data breaches and other security incidents.',
      applicableThreats: ['Insider Threat', 'Data Theft'],
    },
    {
      id: '42',
      title: 'Implement Secure Data Disposal Practices',
      shortDescription: 'Ensure secure disposal of sensitive data',
      steps: [
        'Use data wiping tools to securely erase data from devices',
        'Shred physical documents containing sensitive information',
        'Establish policies for data retention and disposal',
      ],
      additionalInfo: 'Secure data disposal helps prevent unauthorized access to sensitive information.',
      applicableThreats: ['Data Theft', 'Insider Threat'],
    },
    {
      id: '43',
      title: 'Utilize Network Segmentation',
      shortDescription: 'Divide networks into segments for better security',
      steps: [
        'Implement VLANs to separate sensitive data from general traffic',
        'Restrict access between network segments based on roles',
        'Regularly review and update segmentation policies',
      ],
      additionalInfo: 'Network segmentation helps contain breaches and limit lateral movement.',
      applicableThreats: ['Insider Threat', 'Privilege Escalation'],
    },
    {
      id: '44',
      title: 'Establish a Security Awareness Program',
      shortDescription: 'Promote security awareness among employees',
      steps: [
        'Develop a comprehensive security awareness training program',
        'Regularly update training materials to reflect current threats',
        'Encourage employees to report security incidents and concerns',
      ],
      additionalInfo: 'A strong security culture can significantly reduce risks.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '45',
      title: 'Implement Secure Remote Access Solutions',
      shortDescription: 'Ensure secure access for remote workers',
      steps: [
        'Use VPNs for secure remote connections',
        'Implement multi-factor authentication for remote access',
        'Regularly review remote access logs for suspicious activity',
      ],
      additionalInfo: 'Secure remote access helps protect sensitive data outside the office.',
      applicableThreats: ['Eavesdropping Attack', 'Man-in-the-Middle (MitM)'],
    },
    {
      id: '46',
      title: 'Conduct Regular Penetration Testing',
      shortDescription: 'Test your defenses against potential attacks',
      steps: [
        'Hire external experts to conduct penetration tests',
        'Simulate real-world attack scenarios to identify vulnerabilities',
        'Remediate identified vulnerabilities promptly',
      ],
      additionalInfo: 'Penetration testing helps uncover weaknesses before attackers do.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '47',
      title: 'Utilize Security Information and Event Management (SIEM)',
      shortDescription: 'Monitor and analyze security events in real-time',
      steps: [
        'Deploy SIEM solutions to collect and analyze logs',
        'Set up alerts for suspicious activities and anomalies',
        'Regularly review SIEM reports to identify potential threats',
      ],
      additionalInfo: 'SIEM provides centralized visibility and helps in incident response.',
      applicableThreats: ['All Threats'],
    },
    {
      id: '48',
      title: 'Establish a Data Classification Policy',
      shortDescription: 'Categorize data based on sensitivity and importance',
      steps: [
        'Define categories for data classification (e.g., public, internal, confidential)',
        'Implement access controls based on data classification',
        'Regularly review and update data classification policies',
      ],
      additionalInfo: 'Data classification helps prioritize security measures based on data sensitivity.',
      applicableThreats: ['Data Theft', 'Insider Threat'],
    },
    {
      id: '49',
      title: 'Implement Secure Software Development Practices',
      shortDescription: 'Integrate security into the software development lifecycle',
      steps: [
        'Conduct threat modeling during the design phase',
        'Use static and dynamic analysis tools to identify vulnerabilities',
        'Train developers on secure coding practices',
      ],
      additionalInfo: 'Secure development practices help reduce vulnerabilities in applications.',
      applicableThreats: ['SQL Injection', 'Cross-Site Scripting (XSS)'],
    },
    {
      id: '50',
      title: 'Regularly Update Incident Response Plans',
      shortDescription: 'Ensure incident response plans are current and effective',
      steps: [
        'Review and update incident response plans after each incident',
        'Conduct regular training and simulations for the response team',
        'Incorporate lessons learned into the incident response process',
      ],
      additionalInfo: 'An updated incident response plan ensures preparedness for future incidents.',
      applicableThreats: ['All Threats'],
    },
  ];