import { NewsItem, AssessmentResult, IncidentReport } from '@/types';
import { newsData } from '@/lib/data';

export const fetchNews = async (page: number): Promise<{ data: NewsItem[]; hasMore: boolean }> => {
  // Simulate pagination
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const data = newsData.slice(startIndex, endIndex);
  const hasMore = endIndex < newsData.length;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data, hasMore });
    }, 1000); // Simulate network delay
  });
};

// Security assessment using NIST guidelines

// Function to submit the assessment and calculate the score
export async function submitAssessment(answers: Record<string, string>): Promise<AssessmentResult> {
  const calculateScore = (answers: Record<string, string>): number => {
    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    // Scoring logic based on answers
    for (const answer of Object.values(answers)) {
      if (answer === 'Regularly' || answer === 'Yes' || answer === 'Very strong' || answer === 'Always' || answer === 'Daily') {
        score += 1; // Full score for best answers
      } else if (answer === 'Sometimes' || answer === 'Moderate' || answer === 'Weekly') {
        score += 0.5; // Partial score for moderate answers
      }
      // No points for 'Rarely' or 'Never' answers
    }

    return Math.round((score / totalQuestions) * 100);
  };

  const score = calculateScore(answers);
  
  return {
    score,
    summary: getSummaryBasedOnScore(score),
    recommendations: getRecommendationsBasedOnAnswers(answers)
  };
}

// Function to generate a summary based on the score
function getSummaryBasedOnScore(score: number): string {
  if (score >= 90) return "Excellent security practices! Keep up the great work.";
  if (score >= 70) return "Good security practices, but there's room for improvement.";
  return "Your security practices need significant improvement. Follow our recommendations.";
}

// Function to generate recommendations based on answers
function getRecommendationsBasedOnAnswers(answers: Record<string, string>): string[] {
  const recommendations: string[] = [];
  
  // Recommendations based on specific answers
  if (answers['2'] === 'No') { // Assuming '2' is the ID for the password manager question
    recommendations.push('Use a password manager for generating and storing strong passwords.');
  }
  
  if (answers['4'] === 'Never') { // Assuming '4' is the ID for two-factor authentication
    recommendations.push('Enable Multi-Factor Authentication on all accounts.');
  }
  
  if (answers['5'] === 'Rarely or never') { // Assuming '5' is the ID for data backup
    recommendations.push('Implement a regular data backup schedule (e.g., daily or weekly).');
  }

  if (answers['1'] === 'Rarely' || answers['1'] === 'Never') { // Assuming '1' is the ID for software updates
    recommendations.push('Make sure to regularly update your software and operating systems.');
  }

  if (answers['3'] === 'Weak') { // Assuming '3' is the ID for password strength
    recommendations.push('Consider using stronger passwords and a password manager to help with this.');
  }

  // Add more recommendations based on other questions as needed
  
  return recommendations;
}

// incident report 

export async function reportIncident(data: IncidentReport) {
  try {
    const emailContent = `
      New Incident Report:
      Person Name: ${data.personName}
      Company Name: ${data.companyName}
      Phone Number: ${data.phoneNumber}
      Email: ${data.email}

      Incident Type: ${data.type}
      Severity: ${data.severity}
      Date: ${data.date}
      Time: ${data.time}

      Description: ${data.description}

      Impact: ${data.impact}

      Actions Taken: ${data.actions}

      Affected Systems: ${data.affectedSystems}

      Witnesses: ${data.witnesses}

     Evidence Attached: ${data.evidenceAttached ? 'Yes' : 'No'}
    `;

    const response = await fetch('/api/SendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: 'New Incident Report',
        text: emailContent,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    console.log('Incident report submitted and email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Error submitting incident report:', error);
    throw error;
  }
}
