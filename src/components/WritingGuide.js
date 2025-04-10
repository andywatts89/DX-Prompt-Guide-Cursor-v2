import React from 'react';
import './WritingGuide.css';

const WritingGuide = () => {
  const checklist = [
    {
      icon: '🎯',
      title: 'Start with a Clear Goal',
      description: 'Have a [domain verb] [specific output] for [clear purpose]',
      example: 'I want to generate user personas for a meditation app targeting busy professionals'
    },
    {
      icon: '📝',
      title: 'Set Format & Style',
      description: 'Provide output as [format] with [specific elements]',
      example: 'Provide output as a bulleted list with pain points, impact, and potential solution'
    },
    {
      icon: '🔄',
      title: 'Create Reusable Templates',
      description: 'Generate [X] ideas for [Y] considering [Z]',
      example: 'Generate 3 onboarding flow ideas for new meditation users considering first-time experience'
    },
    {
      icon: '⚙️',
      title: 'Tool-Specific Optimization',
      description: "Using [AI tool's] capabilities, create [output]",
      example: "Using ChatGPT's structured output, create a table comparing feature sets"
    },
    {
      icon: '🎨',
      title: 'Design-Focused Language',
      description: 'Using UX/UI terminology, analyze [design element]',
      example: 'Using UX/UI terminology, analyze this navigation pattern for usability issues'
    }
  ];

  const examples = [
    {
      icon: '🔍',
      phase: 'Discover & Research',
      content: `Act as a senior UX researcher analyzing mental wellness apps for Gen Z users (ages 18-24).
Identify 5 key pain points based on current digital wellness trends and Gen Z behavioral patterns. For each pain point:
- Describe the specific issue (2-3 sentences)
- Support with relevant statistics
- Explain its impact on user engagement and retention
- Suggest one potential solution direction
Format as a bulleted list. Focus on meditation apps with social features.`
    },
    {
      icon: '⚡',
      phase: 'Define',
      content: `Analyze these 5 user interview quotes (source) from remote workers (ages 30-45) about habit formation. Transform them into 3 Jobs-to-be-Done statements following this structure:
- When [situation/context]
- I want to [desired outcome]
- So I can [desired outcome]
Add one key psychological insight per statement.
Format each JTBD as a separate section with clear headers.`
    },
    {
      icon: '💡',
      phase: 'Ideate',
      content: `As a senior UX designer, generate 4 innovative feature concepts for a language learning app's daily engagement system. For each concept:
1. Name and memorable description
2. User flow (max 5 key screens)
3. Core behavioral psychology principle
4. Expected engagement metrics
5. Technical complexity (Low/Medium/High)
Format as structured sections with clear headings.`
    },
    {
      icon: '🎯',
      phase: 'Prototype',
      content: `Design microcopy for a first-time investor's success screen in a financial app. Create 3 variations that:
- Use supportive, confidence-building language
- Include social proof elements
- Encourage next steps
For each variation, provide:
1. Headline (max 8 words)
2. Supporting text (1-2 short menu)
3. Primary CTA
4. Secondary action
Number and space for easy comparison.`
    },
    {
      icon: '🎯',
      phase: 'Test',
      content: `Create a moderated usability test script for a meal planning app feature. Include:
1. 5 task-based questions
2. 3 emotional response prompts
3. 2 comparative scenarios
4. 2 feature comprehension checks
Format as a numbered list with clear interviewer instructions and expected time per section.`
    },
    {
      icon: '📊',
      phase: 'Launch & Measure',
      content: `Design a measurement framework for a mindfulness app's new onboarding flow. Include:
1. Key metrics (3 leading, 3 lagging)
2. Data collection methods
3. Success thresholds
4. Measurement timeline
5. Suggested A/B tests
Format as a structured report with clear sections and measurement owners.`
    }
  ];

  return (
    <div className="writing-guide">
      <div className="guide-header">
        <h1>How to Write Great Prompts</h1>
        <p>Learn how to write better prompts that help AI tools generate useful, actionable, and context-aware results throughout your product design process.</p>
      </div>

      <section className="checklist-section">
        <h2>📋 Prompt-Writing Checklist</h2>
        <div className="checklist-grid">
          {checklist.map((item, index) => (
            <div key={index} className="checklist-item">
              <div className="item-header">
                <span className="item-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <p className="item-description">{item.description}</p>
              <div className="item-example">
                <code>{item.example}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="examples-section">
        <h2>Prompt Examples by Design Phase</h2>
        <div className="examples-list">
          {examples.map((example, index) => (
            <div key={index} className="example-item">
              <div className="example-header">
                <span className="example-icon">{example.icon}</span>
                <h3>{example.phase}</h3>
              </div>
              <pre className="example-content">
                <code>{example.content}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WritingGuide; 