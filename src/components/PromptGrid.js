import React from 'react';
import PromptCard from './PromptCard';

const PromptGrid = ({ searchTerm }) => {
  const prompts = [
    {
      id: 1,
      title: "Nudging Tactics Prompt",
      content: "Suggest behavioral design nudges to help users complete their profile.",
      design_phase: { name: "Ideate" },
      views: 35,
      created_at: "2025-03-28",
      tags: [
        { name: "ChatGPT" },
        { name: "UX Writing" },
        { name: "Brainstorming" },
        { name: "UI Design" },
        { name: "Conversion Optimization" }
      ]
    },
    {
      id: 2,
      title: "Error Message Generator",
      content: "Generate user-friendly error messages for common app scenarios.",
      design_phase: { name: "Write" },
      views: 42,
      created_at: "2025-03-25",
      tags: [
        { name: "UX Writing" },
        { name: "Error Handling" },
        { name: "User Experience" }
      ]
    },
    {
      id: 3,
      title: "Feature Prioritization",
      content: "Help prioritize feature requests based on user impact and development effort.",
      design_phase: { name: "Analyze" },
      views: 28,
      created_at: "2025-03-22",
      tags: [
        { name: "Product Strategy" },
        { name: "User Research" },
        { name: "Decision Making" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          {...prompt}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
};

export default PromptGrid; 