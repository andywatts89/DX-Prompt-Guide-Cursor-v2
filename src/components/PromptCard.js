import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Clock, Tags } from 'lucide-react';

const PromptCard = ({ id, title, content, design_phase, views, created_at, tags, thumbnail_url, searchTerm }) => {
  const isTagMatched = (tag) => {
    return false; // This can be implemented based on search functionality
  };

  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
  };

  return (
    <Link
      to={`/prompt/${id}`}
      className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
    >
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex items-center justify-center relative">
          {thumbnail_url ? (
            <img
              src={thumbnail_url}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null}
          <div className={`relative z-10 ${thumbnail_url ? 'bg-black/50 px-4 py-2 rounded-lg' : ''}`}>
            <h3 className="text-xl font-semibold text-white text-center group-hover:scale-105 transition-transform duration-200">
              {searchTerm ? (
                <span dangerouslySetInnerHTML={{ 
                  __html: highlightText(title, searchTerm) 
                }} />
              ) : title}
            </h3>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {design_phase?.name || 'Ideate'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {searchTerm ? (
            <span dangerouslySetInnerHTML={{ 
              __html: highlightText(content, searchTerm) 
            }} />
          ) : content}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>{views} views</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>{new Date(created_at || Date.now()).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.length > 0 && (
            <>
              <Tags className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span
                    key={typeof tag === 'string' ? tag : tag.name}
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      isTagMatched(tag)
                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {typeof tag === 'string' ? tag : tag.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PromptCard; 