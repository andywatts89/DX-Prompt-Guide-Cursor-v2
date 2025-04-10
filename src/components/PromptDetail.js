import React from 'react';
import { useParams } from 'react-router-dom';
import './PromptDetail.css';

const PromptDetail = () => {
  const { id } = useParams();

  // In a real app, this would be fetched from an API
  const promptData = {
    id: 4,
    title: 'Redesigning a Health App for Better Preventive Care Adoption',
    description: 'Create a strategic plan to transform a healthcare app from sick-care to preventive care focus.',
    category: 'Strategy',
    views: 1304,
    date: 'April 10, 2025',
    tags: ['Product Strategy', 'UX Writing', 'Conversion Optimization', 'ChatGPT'],
    image: 'https://placehold.co/1200x400/6366f1/ffffff/png?text=Health+App+Strategy',
    fullPrompt: `You are a senior UX strategist working with a private hospital group that wants to reposition its mobile health app. The app is currently focused on sick care and appointment booking but suffers from poor engagement, unclear navigation, and low awareness of its wellness features.

The hospital's goal is to shift the app's value toward preventive health and risk care services, including proactive checkups, lifestyle coaching, and long-term health planning. The target users are working professionals aged 30–50.

Your task is to provide actionable recommendations that will:
- Increase user engagement with preventive care features
- Improve discoverability of wellness services
- Reframe the app's value proposition around long-term health benefits

Based on the above, please generate:

1. A list of the top 5 UX improvements that would increase engagement with wellness and preventive care services.
2. A revised app navigation structure that places preventive care features in a more prominent position.
3. Key homepage content sections and microcopy examples that appeal to health-conscious users in the 30–50 age range.
4. In-app feature ideas or behavioral nudges (e.g. notifications, progress tracking) that encourage proactive, recurring usage.
5. A table comparing the current sick-care-focused messaging with a proposed wellness-first value proposition.

Make sure your output is concise, practical, and aligned with current mobile UX best practices.`
  };

  return (
    <div className="prompt-detail">
      <div className="prompt-card">
        <img
          src={promptData.image}
          className="prompt-image"
          alt={promptData.title}
        />

        <h2>{promptData.title}</h2>

        <div className="section">
          <div className="section-label">🟨 Context</div>
          <p>
            A private hospital group wants to shift their mobile health app from a sick-care focus
            (appointments, prescriptions) to preventive care (lifestyle coaching, risk tracking).
            The app currently has low engagement and poor navigation. Target audience:
            working professionals aged 30–50.
          </p>
        </div>

        <div className="section">
          <div className="section-label">🎯 Goal</div>
          <ul>
            <li>Increase engagement with preventive care features</li>
            <li>Improve wellness feature discoverability</li>
            <li>Reframe the app's value around long-term health</li>
          </ul>
        </div>

        <div className="section">
          <div className="section-label">📦 Prompt</div>
          <pre className="prompt-content">
            <code>{promptData.fullPrompt}</code>
          </pre>
        </div>

        <div className="prompt-meta">
          <span>👁️ {promptData.views} views</span>
          <span>📅 {promptData.date}</span>
          <span>💬 Tags: {promptData.tags.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default PromptDetail; 